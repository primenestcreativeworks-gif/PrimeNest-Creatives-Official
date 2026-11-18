import { createThumbnail } from '../actions';
import Link from 'next/link';
import { SubmitButton } from '@/components/SubmitButton';

export default function NewThumbnailPage({
  searchParams,
}: {
  searchParams: { error?: string } | any;
}) {
  const error =
    searchParams && typeof searchParams === 'object' && !('then' in searchParams)
      ? searchParams.error
      : undefined;

  return (
    <div className="max-w-3xl">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-2">
            Add New Thumbnail
          </h1>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Pin a new click-worthy thumbnail design to the showcase wall.
          </p>
        </div>
        <Link
          href="/admin/thumbnails"
          className="text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:text-white transition-colors text-sm font-medium"
        >
          ← Back to Thumbnails
        </Link>
      </div>

      {error && (
        <div className="mb-8 p-4 bg-rose-500/10 border border-rose-500/20 rounded-xl flex items-center gap-3 text-rose-500">
          <div className="w-8 h-8 rounded-full bg-rose-500/20 flex items-center justify-center shrink-0">
            ⚠️
          </div>
          <p className="text-sm font-medium leading-relaxed">{error}</p>
        </div>
      )}

      <div className="bg-slate-50 dark:bg-[#07152B] border border-slate-200 dark:border-white/10 rounded-2xl p-6 md:p-8">
        <form action={createThumbnail} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-slate-600 dark:text-slate-300 mb-2">
                Thumbnail Title *
              </label>
              <input
                name="title"
                required
                className="w-full px-4 py-2 bg-slate-50 dark:bg-[#07152B] border border-slate-200 dark:border-white/10 rounded-xl text-slate-900 dark:text-white focus:outline-none focus:border-[#00AAFF]"
                placeholder="e.g. CTR Optimization: Visual Packaging"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-600 dark:text-slate-300 mb-2">
                Client / Creator Name
              </label>
              <input
                name="clientName"
                className="w-full px-4 py-2 bg-slate-50 dark:bg-[#07152B] border border-slate-200 dark:border-white/10 rounded-xl text-slate-900 dark:text-white focus:outline-none focus:border-[#00AAFF]"
                placeholder="e.g. Creator Channel or G.S Vision IAS"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-slate-600 dark:text-slate-300 mb-2">
                Thumbnail Image URL *
              </label>
              <input
                name="imageUrl"
                required
                className="w-full px-4 py-2 bg-slate-50 dark:bg-[#07152B] border border-slate-200 dark:border-white/10 rounded-xl text-slate-900 dark:text-white focus:outline-none focus:border-[#00AAFF]"
                placeholder="e.g. /Insta-after.jpeg or Cloudinary/CDN URL"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-600 dark:text-slate-300 mb-2">
                Category Label
              </label>
              <input
                name="categoryLabel"
                defaultValue="Thumbnails"
                className="w-full px-4 py-2 bg-slate-50 dark:bg-[#07152B] border border-slate-200 dark:border-white/10 rounded-xl text-slate-900 dark:text-white focus:outline-none focus:border-[#00AAFF]"
                placeholder="e.g. Packaging or Thumbnails"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-600 dark:text-slate-300 mb-2">
              Before Image URL (Optional - For Before/After Slider)
            </label>
            <input
              name="beforeImageUrl"
              className="w-full px-4 py-2 bg-slate-50 dark:bg-[#07152B] border border-slate-200 dark:border-white/10 rounded-xl text-slate-900 dark:text-white focus:outline-none focus:border-[#00AAFF]"
              placeholder="e.g. /insta-before.jpeg"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-600 dark:text-slate-300 mb-2">
              Description / Strategy
            </label>
            <textarea
              name="description"
              rows={3}
              className="w-full px-4 py-2 bg-slate-50 dark:bg-[#07152B] border border-slate-200 dark:border-white/10 rounded-xl text-slate-900 dark:text-white focus:outline-none focus:border-[#00AAFF] resize-none"
              placeholder="High-contrast typography, facial expressions, and narrative tension driving higher click-through."
            />
          </div>

          <div className="flex justify-end gap-4 pt-4 border-t border-slate-200 dark:border-white/10">
            <Link
              href="/admin/thumbnails"
              className="px-6 py-2.5 rounded-xl border border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/5 font-medium transition-colors text-sm"
            >
              Cancel
            </Link>
            <SubmitButton>Pin Thumbnail to Wall</SubmitButton>
          </div>
        </form>
      </div>
    </div>
  );
}
