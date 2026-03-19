import { createCaseStudy } from './actions';
import Link from 'next/link';

export default function NewCaseStudy() {
  return (
    <div className="max-w-3xl">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">New Case Study</h1>
          <p className="text-sm text-slate-400">Add a new project to your recent wins.</p>
        </div>
        <Link href="/admin/case-studies" className="text-slate-400 hover:text-white transition-colors text-sm font-medium">
          ← Back
        </Link>
      </div>

      <div className="bg-slate-900 border border-white/10 rounded-2xl p-6 md:p-8">
        <form action={createCaseStudy} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Client Name</label>
              <input name="client" required className="w-full px-4 py-2 bg-[#050816] border border-white/10 rounded-xl text-white focus:outline-none focus:border-[#00AEEF]" placeholder="e.g. G.S Vision IAS" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Label / Industry</label>
              <input name="label" required className="w-full px-4 py-2 bg-[#050816] border border-white/10 rounded-xl text-white focus:outline-none focus:border-[#00AEEF]" placeholder="e.g. Coaching Institute" />
            </div>
          </div>

          <div>
             <label className="block text-sm font-medium text-slate-300 mb-2">Headline</label>
             <input name="headline" required className="w-full px-4 py-2 bg-[#050816] border border-white/10 rounded-xl text-white focus:outline-none focus:border-[#00AEEF]" placeholder="Turned lecture-style videos into..." />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Before PrimeNest</label>
              <textarea name="before" required rows={3} className="w-full px-4 py-2 bg-[#050816] border border-white/10 rounded-xl text-white focus:outline-none focus:border-[#00AEEF] resize-none" placeholder="Irregular uploads..." />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">After PrimeNest</label>
              <textarea name="after" required rows={3} className="w-full px-4 py-2 bg-[#050816] border border-white/10 rounded-xl text-white focus:outline-none focus:border-[#00AEEF] resize-none" placeholder="Consistent weekly reels..." />
            </div>
          </div>

          <div>
             <label className="block text-sm font-medium text-slate-300 mb-2">Scope of Work (One point per line)</label>
             <textarea name="work" required rows={4} className="w-full px-4 py-2 bg-[#050816] border border-white/10 rounded-xl text-white focus:outline-none focus:border-[#00AEEF] resize-y" placeholder="Hook writing&#10;Template design&#10;Monthly review" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Key Metric Result</label>
              <input name="metric" className="w-full px-4 py-2 bg-[#050816] border border-white/10 rounded-xl text-white focus:outline-none focus:border-[#00AEEF]" placeholder="e.g. 4x uplift in reach" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Image URL</label>
              <input name="image_url" className="w-full px-4 py-2 bg-[#050816] border border-white/10 rounded-xl text-white focus:outline-none focus:border-[#00AEEF]" placeholder="e.g. /G.s Vision Subs.png" />
              <p className="text-xs text-slate-500 mt-2">Use an image path like `/image.png` from public folder.</p>
            </div>
          </div>

          <div className="pt-6 border-t border-white/10 flex justify-end">
             <button type="submit" className="px-6 py-2.5 bg-[#00AEEF] hover:bg-[#38BDF8] text-black text-sm font-bold rounded-xl transition-colors shadow-sm">
                Save Case Study
             </button>
          </div>
        </form>
      </div>
    </div>
  );
}
