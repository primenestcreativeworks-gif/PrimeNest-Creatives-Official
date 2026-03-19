import { createClient } from '@/utils/supabase/server';
import { redirect } from 'next/navigation';
import Link from 'next/link';

export default async function CaseStudiesAdminPage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect('/admin/login');
  }

  // Handle potential missing DB connection gracefully
  let caseStudies = [];
  try {
    const { data } = await supabase.from('case_studies').select('*').order('created_at', { ascending: false });
    if (data) caseStudies = data;
  } catch (err) {
    console.error('Database connection error');
  }

  return (
    <div className="max-w-6xl">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">Manage Case Studies</h1>
          <p className="text-sm text-slate-400">Add, edit, or remove entries from your Recent Work section.</p>
        </div>
        <Link href="/admin/case-studies/new" className="px-4 py-2 bg-[#00AEEF] hover:bg-[#38BDF8] text-black text-sm font-bold rounded-xl transition-colors shadow-sm inline-block">
          + Add New Project
        </Link>
      </div>
      
      <div className="bg-slate-900 border border-white/10 rounded-2xl overflow-hidden">
        {caseStudies.length === 0 ? (
          <div className="p-12 text-center flex flex-col items-center">
            <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mb-4 text-2xl">📁</div>
            <h3 className="text-lg font-medium text-white mb-2">No case studies found</h3>
            <p className="text-slate-400 max-w-sm mb-6">You either haven't added any yet, or your database connection is not configured.</p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-white/10 bg-white/5">
                  <th className="p-4 text-sm font-semibold text-slate-300">Client</th>
                  <th className="p-4 text-sm font-semibold text-slate-300">Headline</th>
                  <th className="p-4 text-sm font-semibold text-slate-300">Metric</th>
                  <th className="p-4 text-sm font-semibold text-slate-300 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10">
                {caseStudies.map((study: any) => (
                  <tr key={study.id} className="hover:bg-white/[0.02] transition-colors">
                    <td className="p-4 text-sm font-medium text-white">{study.client}</td>
                    <td className="p-4 text-sm text-slate-400 max-w-xs truncate">{study.headline}</td>
                    <td className="p-4 text-sm text-emerald-400">{study.metric}</td>
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
