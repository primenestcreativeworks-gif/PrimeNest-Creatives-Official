'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';
import { createBlogPost } from '@/app/admin/blogs/new/actions';

export function BlogForm() {
  const router = useRouter();
  const [isPending, setIsPending] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsPending(true);

    try {
      const formData = new FormData(e.currentTarget);
      const result = await createBlogPost(formData);

      if (result?.error) {
        toast.error(result.error);
        setIsPending(false);
      } else {
        toast.success("Blog post saved successfully!");
        router.push('/admin/blogs');
        router.refresh(); // Force server components to update
      }
    } catch (err: any) {
      toast.error(err.message || 'Something went critically wrong.');
      setIsPending(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
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
         <textarea name="content" required rows={12} className="w-full px-4 py-2 bg-white dark:bg-[#040D1A] border border-slate-200 dark:border-white/10 rounded-xl text-slate-900 dark:text-white focus:outline-none focus:border-[#00AEEF] resize-y" placeholder="Write your blog post here... (Markdown supported)" />
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-600 dark:text-slate-300 mb-2">Cover Image (Optional - 16:9 ratio recommended)</label>
        <input type="file" name="image" accept="image/*" className="w-full px-4 py-2 bg-slate-50 dark:bg-[#07152B] border border-slate-200 dark:border-white/10 rounded-xl text-slate-900 dark:text-white focus:outline-none focus:border-[#00AEEF] file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-[#00AEEF]/10 file:text-[#00AEEF] hover:file:bg-[#00AEEF]/20 cursor-pointer" />
      </div>

      <div className="pt-6 border-t border-slate-200 dark:border-white/10 flex justify-end">
         <button 
           type="submit" 
           disabled={isPending}
           className={`px-6 py-2.5 bg-slate-800 hover:bg-slate-700 text-white dark:bg-white dark:text-[#040D1A] dark:hover:bg-slate-200 text-sm font-bold rounded-xl transition-colors shadow-sm ${isPending ? 'opacity-70 cursor-not-allowed' : ''}`}
         >
           {isPending ? (
             <span className="flex items-center gap-2">
               <svg className="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                 <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                 <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
               </svg>
               Uploading & Saving...
             </span>
           ) : "Save Post"}
         </button>
      </div>
    </form>
  );
}
