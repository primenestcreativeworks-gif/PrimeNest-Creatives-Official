import { createClient } from '@/utils/supabase/server';
import { redirect } from 'next/navigation';

export default async function LeadsPage() {
  const supabase = await createClient();

  // Protect the route
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) {
    return redirect('/admin/login');
  }

  // Fetch leads
  const { data: leads, error } = await supabase
    .from('leads')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) {
    console.error('Error fetching leads:', error);
  }

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Leads</h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm">View and manage form submissions from the landing page.</p>
        </div>
      </div>

      <div className="bg-slate-50 dark:bg-[#07152B] border border-slate-200 dark:border-white/10 rounded-2xl overflow-hidden">
        {(!leads || leads.length === 0) ? (
          <div className="p-12 text-center text-slate-500 dark:text-slate-400">
            <p>No leads have been captured yet.</p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm text-slate-600 dark:text-slate-300">
              <thead className="bg-white/5 text-xs uppercase font-medium text-slate-500 dark:text-slate-400 border-b border-slate-200 dark:border-white/10">
                <tr>
                  <th className="px-6 py-4">Date</th>
                  <th className="px-6 py-4">Name / Brand</th>
                  <th className="px-6 py-4">Email</th>
                  <th className="px-6 py-4">Channel / Project</th>
                  <th className="px-6 py-4">Needs</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10">
                {leads.map((lead) => (
                  <tr key={lead.id} className="hover:bg-white/5 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap">
                      {new Date(lead.created_at).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4 font-medium text-slate-900 dark:text-white">
                      {lead.name}
                    </td>
                    <td className="px-6 py-4">
                      {lead.email}
                    </td>
                    <td className="px-6 py-4 max-w-xs break-words">
                      <div>
                        {lead.channel_link && (
                          <a href={lead.channel_link} target="_blank" rel="noopener noreferrer" className="text-[#00AEEF] hover:underline mb-1 inline-block">
                            {lead.channel_link}
                          </a>
                        )}
                      </div>
                      <div className="text-xs text-slate-500 dark:text-slate-400 line-clamp-2">
                        {lead.project}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex flex-wrap gap-1">
                        {lead.needs && lead.needs.map((need: string, i: number) => (
                          <span key={i} className="px-2 py-1 text-[10px] rounded bg-white/10 text-slate-600 dark:text-slate-300">
                            {need}
                          </span>
                        ))}
                      </div>
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
