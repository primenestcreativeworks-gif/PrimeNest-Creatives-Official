import { createClient } from '@/utils/supabase/server';
import { redirect } from 'next/navigation';

export default async function BlogsAdminPage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect('/admin/login');
  }

  let blogs = [];
  try {
    const { data } = await supabase.from('blogs').select('*').order('created_at', { ascending: false });
    if (data) blogs = data;
  } catch (err) {
    console.error('Database connection error');
  }

  return (
    <div className="max-w-6xl">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">Manage Blogs</h1>
          <p className="text-sm text-slate-400">Write, edit, and publish your content.</p>
        </div>
        <button className="px-4 py-2 bg-[#00AEEF] hover:bg-[#38BDF8] text-black text-sm font-bold rounded-xl transition-colors shadow-sm">
          + Write New Post
        </button>
      </div>
      
      <div className="bg-slate-900 border border-white/10 rounded-2xl overflow-hidden">
        {blogs.length === 0 ? (
          <div className="p-12 text-center flex flex-col items-center">
            <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mb-4 text-2xl">📝</div>
            <h3 className="text-lg font-medium text-white mb-2">No blog posts found</h3>
            <p className="text-slate-400 max-w-sm mb-6">Database connection might be missing or table is empty.</p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-white/10 bg-white/5">
                  <th className="p-4 text-sm font-semibold text-slate-300">Title</th>
                  <th className="p-4 text-sm font-semibold text-slate-300">Author</th>
                  <th className="p-4 text-sm font-semibold text-slate-300">Status</th>
                  <th className="p-4 text-sm font-semibold text-slate-300 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10">
                {blogs.map((b: any) => (
                  <tr key={b.id} className="hover:bg-white/[0.02] transition-colors">
                    <td className="p-4 text-sm font-medium text-white">{b.title}</td>
                    <td className="p-4 text-sm text-slate-400">{b.author}</td>
                    <td className="p-4 text-sm">
                       <span className={`px-2 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider ${b.status === 'published' ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' : 'bg-amber-500/10 text-amber-400 border border-amber-500/20'}`}>
                         {b.status}
                       </span>
                    </td>
                    <td className="p-4 text-sm text-right">
                      <button className="text-[#00AEEF] hover:text-white transition-colors mr-3 font-medium">Edit</button>
                      <button className="text-rose-400 hover:text-rose-300 transition-colors font-medium">Delete</button>
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
