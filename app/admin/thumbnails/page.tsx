import { createClient } from '@/utils/supabase/server';
import { redirect } from 'next/navigation';
import Link from 'next/link';
import { deleteThumbnail } from './actions';
import { showcaseItems } from '@/data/videos';

export default async function ThumbnailsAdminPage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect('/admin/login');
  }

  let dbThumbnails: any[] = [];
  try {
    const { data } = await supabase
      .from('thumbnails')
      .select('*')
      .order('created_at', { ascending: false });
    if (data) dbThumbnails = data;
  } catch (err) {
    console.error('Database connection error');
  }

  // Combine with default thumbnails from data/videos.ts
  const defaultItems = showcaseItems
    .filter((item) => item.category === 'thumbnails')
    .map((item) => ({
      id: item.id,
      title: item.title,
      client_name: item.clientName,
      category_label: item.categoryLabel,
      image_url: item.thumbnail,
      description: item.description,
      is_default: true,
    }));

  const allThumbnails = [...dbThumbnails, ...defaultItems];

  return (
    <div className="max-w-6xl">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-2">
            Manage Thumbnails & Packaging
          </h1>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Upload and manage the high-CTR thumbnails pinned to the gallery wall.
          </p>
        </div>
        <Link
          href="/admin/thumbnails/new"
          className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white dark:bg-[#00AAFF] dark:text-[#0A0A0A] dark:hover:bg-[#00AAFF]/90 text-sm font-bold rounded-xl transition-colors shadow-sm inline-block"
        >
          + Add New Thumbnail
        </Link>
      </div>

      <div className="bg-slate-50 dark:bg-[#07152B] border border-slate-200 dark:border-white/10 rounded-2xl overflow-hidden">
        {allThumbnails.length === 0 ? (
          <div className="p-12 text-center flex flex-col items-center">
            <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mb-4 text-2xl">
              🖼️
            </div>
            <h3 className="text-lg font-medium text-slate-900 dark:text-white mb-2">
              No thumbnails found
            </h3>
            <p className="text-slate-500 dark:text-slate-400 max-w-sm mb-6">
              Add your first thumbnail to showcase your click-worthy packaging.
            </p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-200 dark:border-white/10 bg-white/5">
                  <th className="p-4 text-sm font-semibold text-slate-600 dark:text-slate-300">
                    Preview
                  </th>
                  <th className="p-4 text-sm font-semibold text-slate-600 dark:text-slate-300">
                    Title
                  </th>
                  <th className="p-4 text-sm font-semibold text-slate-600 dark:text-slate-300">
                    Client
                  </th>
                  <th className="p-4 text-sm font-semibold text-slate-600 dark:text-slate-300">
                    Type
                  </th>
                  <th className="p-4 text-sm font-semibold text-slate-600 dark:text-slate-300 text-right">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 dark:divide-white/10">
                {allThumbnails.map((item: any) => (
                  <tr
                    key={item.id}
                    className="hover:bg-white/[0.02] transition-colors"
                  >
                    <td className="p-4">
                      <div className="w-20 aspect-video rounded-lg overflow-hidden bg-black/60 border border-white/10">
                        <img
                          src={item.image_url}
                          alt={item.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </td>
                    <td className="p-4 text-sm font-medium text-slate-900 dark:text-white max-w-xs truncate">
                      {item.title}
                    </td>
                    <td className="p-4 text-sm text-slate-500 dark:text-slate-400">
                      {item.client_name || 'PrimeNest Client'}
                    </td>
                    <td className="p-4 text-xs font-semibold text-[#00AAFF]">
                      {item.is_default ? 'System Default' : 'Custom Upload'}
                    </td>
                    <td className="p-4 text-sm text-right">
                      {!item.is_default && (
                        <form action={deleteThumbnail.bind(null, item.id)}>
                          <button
                            type="submit"
                            className="text-rose-400 hover:text-rose-300 transition-colors font-medium cursor-pointer"
                          >
                            Delete
                          </button>
                        </form>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
