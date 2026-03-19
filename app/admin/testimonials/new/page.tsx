import { createTestimonial } from './actions';
import Link from 'next/link';

export default function NewTestimonial() {
  return (
    <div className="max-w-3xl">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">New Testimonial</h1>
          <p className="text-sm text-slate-400">Add a client review to your landing page.</p>
        </div>
        <Link href="/admin/testimonials" className="text-slate-400 hover:text-white transition-colors text-sm font-medium">
          ← Back
        </Link>
      </div>

      <div className="bg-slate-900 border border-white/10 rounded-2xl p-6 md:p-8">
        <form action={createTestimonial} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Client Name</label>
              <input name="name" required className="w-full px-4 py-2 bg-[#07152B] border border-white/10 rounded-xl text-white focus:outline-none focus:border-[#00AEEF]" placeholder="e.g. Nolan M." />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Category (e.g. YouTube Creator)</label>
              <input name="role" required className="w-full px-4 py-2 bg-[#07152B] border border-white/10 rounded-xl text-white focus:outline-none focus:border-[#00AEEF]" placeholder="e.g. YouTube Creator" />
            </div>
          </div>

          <div>
             <label className="block text-sm font-medium text-slate-300 mb-2">Job Title / Subtitle</label>
             <input name="title" required className="w-full px-4 py-2 bg-[#07152B] border border-white/10 rounded-xl text-white focus:outline-none focus:border-[#00AEEF]" placeholder="e.g. Education Channel · 250K+ subs" />
          </div>

          <div>
             <label className="block text-sm font-medium text-slate-300 mb-2">Quote</label>
             <textarea name="quote" required rows={4} className="w-full px-4 py-2 bg-[#07152B] border border-white/10 rounded-xl text-white focus:outline-none focus:border-[#00AEEF] resize-y" placeholder="PrimeNest took my messy raw footage..." />
          </div>

          <div className="pt-6 border-t border-white/10 flex justify-end">
             <button type="submit" className="px-6 py-2.5 bg-[#00AEEF] hover:bg-[#38BDF8] text-white text-sm font-bold rounded-xl transition-colors shadow-sm">
                Save Testimonial
             </button>
          </div>
        </form>
      </div>
    </div>
  );
}
