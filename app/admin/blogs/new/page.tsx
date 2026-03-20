import { BlogForm } from '@/components/admin/BlogForm';
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
        <BlogForm />
      </div>
    </div>
  );
}
