import { createCaseStudy } from './actions';
import Link from 'next/link';
import { SubmitButton } from '@/components/SubmitButton';

export default function NewCaseStudy({ searchParams }: { searchParams: { error?: string } | any }) {
  const error = searchParams && typeof searchParams === 'object' && !('then' in searchParams) 
    ? searchParams.error 
    : undefined;

  return (
    <div className="max-w-3xl">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-2">New Case Study</h1>
          <p className="text-sm text-slate-500 dark:text-slate-400">Add a new project to your recent wins.</p>
        </div>
        <Link href="/admin/case-studies" className="text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:text-white transition-colors text-sm font-medium">
          ← Back
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
        <form action={createCaseStudy} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-slate-600 dark:text-slate-300 mb-2">Client Name</label>
              <input name="client" required className="w-full px-4 py-2 bg-slate-50 dark:bg-[#07152B] border border-slate-200 dark:border-white/10 rounded-xl text-slate-900 dark:text-white focus:outline-none focus:border-[#00AEEF]" placeholder="e.g. G.S Vision IAS" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-600 dark:text-slate-300 mb-2">Label / Industry</label>
              <input name="label" required className="w-full px-4 py-2 bg-slate-50 dark:bg-[#07152B] border border-slate-200 dark:border-white/10 rounded-xl text-slate-900 dark:text-white focus:outline-none focus:border-[#00AEEF]" placeholder="e.g. Coaching Institute" />
            </div>
          </div>

          <div>
             <label className="block text-sm font-medium text-slate-600 dark:text-slate-300 mb-2">Headline</label>
             <input name="headline" required className="w-full px-4 py-2 bg-slate-50 dark:bg-[#07152B] border border-slate-200 dark:border-white/10 rounded-xl text-slate-900 dark:text-white focus:outline-none focus:border-[#00AEEF]" placeholder="Turned lecture-style videos into..." />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-slate-600 dark:text-slate-300 mb-2">Before PrimeNest</label>
              <textarea name="before" required rows={3} className="w-full px-4 py-2 bg-slate-50 dark:bg-[#07152B] border border-slate-200 dark:border-white/10 rounded-xl text-slate-900 dark:text-white focus:outline-none focus:border-[#00AEEF] resize-none" placeholder="Irregular uploads..." />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-600 dark:text-slate-300 mb-2">After PrimeNest</label>
              <textarea name="after" required rows={3} className="w-full px-4 py-2 bg-slate-50 dark:bg-[#07152B] border border-slate-200 dark:border-white/10 rounded-xl text-slate-900 dark:text-white focus:outline-none focus:border-[#00AEEF] resize-none" placeholder="Consistent weekly reels..." />
            </div>
          </div>

          <div>
             <label className="block text-sm font-medium text-slate-600 dark:text-slate-300 mb-2">Scope of Work (One point per line)</label>
             <textarea name="work" required rows={4} className="w-full px-4 py-2 bg-slate-50 dark:bg-[#07152B] border border-slate-200 dark:border-white/10 rounded-xl text-slate-900 dark:text-white focus:outline-none focus:border-[#00AEEF] resize-y" placeholder="Hook writing&#10;Template design&#10;Monthly review" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-slate-600 dark:text-slate-300 mb-2">Key Metric Result</label>
              <input name="metric" className="w-full px-4 py-2 bg-slate-50 dark:bg-[#07152B] border border-slate-200 dark:border-white/10 rounded-xl text-slate-900 dark:text-white focus:outline-none focus:border-[#00AEEF]" placeholder="e.g. 4x uplift in reach" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-600 dark:text-slate-300 mb-2">Upload Image</label>
              <input type="file" name="image" accept="image/*" required className="w-full px-4 py-2 bg-slate-50 dark:bg-[#07152B] border border-slate-200 dark:border-white/10 rounded-xl text-slate-900 dark:text-white focus:outline-none focus:border-[#00AEEF] file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-[#00AEEF]/10 file:text-[#00AEEF] hover:file:bg-[#00AEEF]/20 cursor-pointer" />
              <p className="text-xs text-slate-500 mt-2">Upload a high-quality preview image.</p>
            </div>
          </div>

          <div className="pt-6 border-t border-slate-200 dark:border-white/10 flex justify-end">
             <SubmitButton loadingText="Uploading & Saving..." className="px-6 py-2.5 bg-slate-800 hover:bg-slate-700 text-white dark:bg-white dark:text-[#040D1A] dark:hover:bg-slate-200 text-sm font-bold rounded-xl transition-colors shadow-sm">
                Save Case Study
             </SubmitButton>
          </div>
        </form>
      </div>
    </div>
  );
}
