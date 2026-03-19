import Link from 'next/link';
import { logout } from './login/actions';
import {
  LayoutDashboard,
  FolderKanban,
  MessageSquareQuote,
  FileText,
  Settings,
  LogOut,
  Users
} from 'lucide-react';

import { createClient } from '@/utils/supabase/server';

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  let user = null;
  try {
    const supabase = await createClient();
    const { data } = await supabase.auth.getUser();
    user = data?.user;
  } catch (err) {
    // Ignore
  }

  if (!user) {
    return <div className="min-h-screen bg-[#07152B]">{children}</div>;
  }

  return (
    <div className="min-h-screen bg-[#040D1A] flex">
      {/* Sidebar */}
      <aside className="w-64 border-r border-white/10 bg-[#07152B] flex flex-col">
        <div className="h-16 flex items-center px-6 border-b border-white/10">
          <Link href="/admin" className="flex items-center">
            <img
              src="/Extremist - 9 Typography Designs_ Powerful Words-Photoroom.png"
              alt="PrimeNest"
              className="h-8 md:h-10 w-auto drop-shadow-[0_4px_20px_rgba(255,255,255,0.3)]"
            />
          </Link>
        </div>
        
        <nav className="flex-1 px-4 py-6 space-y-2">
          <Link href="/admin" className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-slate-300 hover:text-[#00AEEF] hover:bg-[#00AEEF]/10 transition-colors">
            <LayoutDashboard className="w-4 h-4" />
            Overview
          </Link>
          <Link href="/admin/leads" className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-slate-300 hover:text-[#00AEEF] hover:bg-[#00AEEF]/10 transition-colors">
            <Users className="w-4 h-4" />
            Leads
          </Link>
          <Link href="/admin/case-studies" className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-slate-300 hover:text-[#00AEEF] hover:bg-[#00AEEF]/10 transition-colors">
            <FolderKanban className="w-4 h-4" />
            Case Studies
          </Link>
          <Link href="/admin/testimonials" className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-slate-300 hover:text-[#00AEEF] hover:bg-[#00AEEF]/10 transition-colors">
            <MessageSquareQuote className="w-4 h-4" />
            Testimonials
          </Link>
          <Link href="/admin/blogs" className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-slate-300 hover:text-[#00AEEF] hover:bg-[#00AEEF]/10 transition-colors">
            <FileText className="w-4 h-4" />
            Blogs
          </Link>
          <Link href="/admin/settings" className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-slate-300 hover:text-[#00AEEF] hover:bg-[#00AEEF]/10 transition-colors">
            <Settings className="w-4 h-4" />
            Settings
          </Link>
        </nav>

        <div className="p-4 border-t border-white/10">
          <form action={logout}>
            <button type="submit" className="flex w-full items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-rose-400 hover:text-rose-300 hover:bg-rose-400/10 transition-colors">
              <LogOut className="w-4 h-4" />
              Sign Out
            </button>
          </form>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col min-h-screen overflow-y-auto">
        <header className="h-16 flex items-center justify-between px-8 border-b border-white/10 bg-[#07152B]/50 backdrop-blur-md sticky top-0 z-10">
          <h1 className="text-sm font-medium text-slate-400">Dashboard</h1>
          <div className="flex items-center gap-4">
            <span className="text-xs font-medium px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              Admin Active
            </span>
          </div>
        </header>
        <div className="p-8">
          {children}
        </div>
      </main>
    </div>
  );
}
