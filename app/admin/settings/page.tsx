import { createClient } from '@/utils/supabase/server';
import { redirect } from 'next/navigation';

export default async function SettingsAdminPage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect('/admin/login');
  }

  // To implement updating, we would use Server Actions
  // For now this is UI structure.

  return (
    <div className="max-w-4xl">
      <div className="mb-8">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-2">Site Settings</h1>
        <p className="text-sm text-slate-500 dark:text-slate-400">Manage global site variables like social links.</p>
      </div>
      
      <div className="bg-slate-50 dark:bg-[#07152B] border border-slate-200 dark:border-white/10 rounded-2xl p-6 md:p-8">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-6">Social Media Profiles</h3>
        
        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-slate-600 dark:text-slate-300 mb-2">Twitter / X URL</label>
              <input 
                type="url" 
                className="w-full px-4 py-2.5 bg-slate-50 dark:bg-[#07152B] border border-slate-200 dark:border-white/10 rounded-xl text-slate-900 dark:text-white placeholder-slate-500 focus:outline-none focus:border-[#00AEEF]"
                placeholder="https://twitter.com/primenest"
                defaultValue="https://twitter.com/"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-600 dark:text-slate-300 mb-2">Instagram URL</label>
              <input 
                type="url" 
                className="w-full px-4 py-2.5 bg-slate-50 dark:bg-[#07152B] border border-slate-200 dark:border-white/10 rounded-xl text-slate-900 dark:text-white placeholder-slate-500 focus:outline-none focus:border-[#00AEEF]"
                placeholder="https://instagram.com/primenest"
                defaultValue="https://instagram.com/"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-600 dark:text-slate-300 mb-2">YouTube Channel URL</label>
              <input 
                type="url" 
                className="w-full px-4 py-2.5 bg-slate-50 dark:bg-[#07152B] border border-slate-200 dark:border-white/10 rounded-xl text-slate-900 dark:text-white placeholder-slate-500 focus:outline-none focus:border-[#00AEEF]"
                placeholder="https://youtube.com/@primenest"
                defaultValue="https://youtube.com/"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-600 dark:text-slate-300 mb-2">LinkedIn URL</label>
              <input 
                type="url" 
                className="w-full px-4 py-2.5 bg-slate-50 dark:bg-[#07152B] border border-slate-200 dark:border-white/10 rounded-xl text-slate-900 dark:text-white placeholder-slate-500 focus:outline-none focus:border-[#00AEEF]"
                placeholder="https://linkedin.com/company/primenest"
                defaultValue="https://linkedin.com/"
              />
            </div>
          </div>
          
          <div className="pt-6 border-t border-slate-200 dark:border-white/10 flex justify-end">
             <button type="button" className="px-6 py-2.5 bg-slate-800 hover:bg-slate-700 text-white dark:bg-white dark:text-[#040D1A] dark:hover:bg-slate-200 text-sm font-bold rounded-xl transition-colors shadow-sm">
                Save Changes
             </button>
          </div>
        </form>
      </div>
    </div>
  );
}
