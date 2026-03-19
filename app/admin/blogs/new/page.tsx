import { createBlogPost } from './actions';
import Link from 'next/link';

export default function NewBlogPost() {
  return (
    <div className="max-w-4xl">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-2">Write New Post</h1>
          <p className="text-sm text-slate-500 dark:text-slate-400">Create and publish a new blog article.</p>
        </div>
        <Link href="/admin/blogs" className="text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:text-white transition-colors text-sm font-medium">
          ← Back
        </Link>
      </div>

      <div className="bg-slate-50 dark:bg-[#07152B] border border-slate-200 dark:border-white/10 rounded-2xl p-6 md:p-8">
        <form action={createBlogPost} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-slate-600 dark:text-slate-300 mb-2">Post Title</label>
              <input name="title" required className="w-full px-4 py-2 bg-white dark:bg-[#040D1A] border border-slate-200 dark:border-white/10 rounded-xl text-slate-900 dark:text-white focus:outline-none focus:border-[#00AEEF]" placeholder="The Future of Content Creation..." />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-slate-600 dark:text-slate-300 mb-2">Author</label>
              <input name="author" required className="w-full px-4 py-2 bg-white dark:bg-[#040D1A] border border-slate-200 dark:border-white/10 rounded-xl text-slate-900 dark:text-white focus:outline-none focus:border-[#00AEEF]" placeholder="e.g. Yashvardhan" />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-slate-600 dark:text-slate-300 mb-2">Status</label>
              <select name="status" className="w-full px-4 py-2 bg-white dark:bg-[#040D1A] border border-slate-200 dark:border-white/10 rounded-xl text-slate-900 dark:text-white focus:outline-none focus:border-[#00AEEF]">
                <option value="draft">Draft</option>
                <option value="published">Published</option>
              </select>
            </div>
          </div>

          <div>
             <label className="block text-sm font-medium text-slate-600 dark:text-slate-300 mb-2">Content</label>
             <textarea name="content" required rows={12} className="w-full px-4 py-2 bg-white dark:bg-[#040D1A] border border-slate-200 dark:border-white/10 rounded-xl text-slate-900 dark:text-white focus:outline-none focus:border-[#00AEEF] resize-y" placeholder="Write your blog post here..." />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-600 dark:text-slate-300 mb-2">Cover Image (Optional)</label>
            <input type="file" name="image" accept="image/*" className="w-full px-4 py-2 bg-slate-50 dark:bg-[#07152B] border border-slate-200 dark:border-white/10 rounded-xl text-slate-900 dark:text-white focus:outline-none focus:border-[#00AEEF] file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-[#00AEEF]/10 file:text-[#00AEEF] hover:file:bg-[#00AEEF]/20 cursor-pointer" />
          </div>

          <div className="pt-6 border-t border-slate-200 dark:border-white/10 flex justify-end">
             <button type="submit" className="px-6 py-2.5 bg-slate-800 hover:bg-slate-700 text-white dark:bg-white dark:text-[#040D1A] dark:hover:bg-slate-200 text-sm font-bold rounded-xl transition-colors shadow-sm">
                Save Post
             </button>
          </div>
        </form>
      </div>
    </div>
  );
}
