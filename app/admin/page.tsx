import { createClient } from '@/utils/supabase/server';
import { redirect } from 'next/navigation';

export default async function AdminPage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect('/admin/login');
  }

  return (
    <div className="max-w-4xl">
      <h1 className="text-2xl md:text-3xl font-bold text-white mb-8">Welcome back, Admin</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-slate-900 border border-white/10 rounded-2xl p-6">
          <h3 className="text-sm font-medium text-slate-400 mb-2">Total Case Studies</h3>
          <p className="text-3xl font-bold text-white">0</p>
        </div>
        <div className="bg-slate-900 border border-white/10 rounded-2xl p-6">
          <h3 className="text-sm font-medium text-slate-400 mb-2">Total Testimonials</h3>
          <p className="text-3xl font-bold text-white">0</p>
        </div>
        <div className="bg-slate-900 border border-white/10 rounded-2xl p-6">
          <h3 className="text-sm font-medium text-slate-400 mb-2">Published Blogs</h3>
          <p className="text-3xl font-bold text-white">0</p>
        </div>
        <div className="bg-slate-900 border border-white/10 rounded-2xl p-6">
          <h3 className="text-sm font-medium text-slate-400 mb-2">Site Status</h3>
          <div className="inline-flex items-center gap-2 text-sm font-medium text-emerald-400">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            Online
          </div>
        </div>
      </div>

      <div className="mt-12 bg-slate-900 border border-white/10 rounded-2xl p-6 md:p-8">
        <h2 className="text-xl font-semibold text-white mb-4">Quick Setup Guide</h2>
        <p className="text-slate-400 mb-6 max-w-2xl leading-relaxed">
          Your dashboard is almost ready. Before you can manage data dynamically, you will need to finish setting up the connection to your Supabase project.
        </p>
        <ol className="list-decimal list-outside ml-4 space-y-4 text-sm text-slate-300">
          <li className="pl-2">Head over to <a href="https://supabase.com/dashboard" target="_blank" className="text-[#00AEEF] hover:underline">Supabase</a> and create a new project.</li>
          <li className="pl-2">In the project settings, retrieve your <code>Project URL</code> and <code>anon key</code>.</li>
          <li className="pl-2">Add them to a <code>.env.local</code> file in your project root using the keys: <code>NEXT_PUBLIC_SUPABASE_URL</code> and <code>NEXT_PUBLIC_SUPABASE_ANON_KEY</code>.</li>
          <li className="pl-2">Set up the required tables: <code>case_studies</code>, <code>testimonials</code>, <code>blogs</code>, and <code>settings</code>.</li>
        </ol>
      </div>
    </div>
  );
}
