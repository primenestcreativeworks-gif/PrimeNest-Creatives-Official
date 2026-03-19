import { createClient } from '@/utils/supabase/server';
import { redirect } from 'next/navigation';
import Link from 'next/link';

export default async function TestimonialsAdminPage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect('/admin/login');
  }

  let testimonials = [];
  try {
    const { data } = await supabase.from('testimonials').select('*').order('created_at', { ascending: false });
    if (data) testimonials = data;
  } catch (err) {
    console.error('Database connection error');
  }

  return (
    <div className="max-w-6xl">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-2">Manage Testimonials</h1>
          <p className="text-sm text-slate-500 dark:text-slate-400">Update client reviews showing on the homepage.</p>
        </div>
        <Link href="/admin/testimonials/new" className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white dark:bg-white dark:text-[#040D1A] dark:hover:bg-slate-200 text-sm font-bold rounded-xl transition-colors shadow-sm inline-block">
          + Add Review
        </Link>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.length === 0 ? (
          <div className="col-span-full p-12 bg-slate-50 dark:bg-[#07152B] border border-slate-200 dark:border-white/10 rounded-2xl text-center flex flex-col items-center">
            <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mb-4 text-2xl">💬</div>
            <h3 className="text-lg font-medium text-slate-900 dark:text-white mb-2">No testimonials found</h3>
            <p className="text-slate-500 dark:text-slate-400 max-w-sm mb-6">Database connection might be missing or table is empty.</p>
          </div>
        ) : (
          testimonials.map((t: any) => (
            <div key={t.id} className="bg-slate-50 dark:bg-[#07152B] border border-slate-200 dark:border-white/10 rounded-2xl p-6 flex flex-col">
              <div className="flex-1 space-y-4">
                <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed italic">"{t.quote}"</p>
                <div>
                  <p className="font-semibold text-slate-900 dark:text-white text-sm">{t.name}</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">{t.title}</p>
                </div>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-200 dark:border-white/10 flex justify-end gap-3">
                <button className="text-sm font-medium text-[#00AEEF] hover:text-slate-900 dark:text-white transition-colors">Edit</button>
                <button className="text-sm font-medium text-rose-400 hover:text-rose-300 transition-colors">Delete</button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
