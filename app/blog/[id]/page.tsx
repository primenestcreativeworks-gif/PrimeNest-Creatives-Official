import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ScrollReveal } from '@/components/ScrollReveal';
import { createClient } from '@/utils/supabase/server';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export async function generateMetadata({ params }: { params: { id: string } | any }) {
  // Safe resolution for Next 15 params
  const idValue = params && typeof params === 'object' && !('then' in params) 
    ? params.id 
    : await params.then((p: any) => p.id);

  const supabase = await createClient();
  const { data: post } = await supabase.from('blogs').select('title').eq('id', idValue).single();
  
  if (!post) {
    return { title: 'Post Not Found | PrimeNest Creative' };
  }
  
  return {
    title: `${post.title} | PrimeNest Creative`,
  };
}

export default async function BlogPostPage({ params }: { params: { id: string } | any }) {
  // Safe resolution for Next 15 params
  const idValue = params && typeof params === 'object' && !('then' in params) 
    ? params.id 
    : await params.then((p: any) => p.id);

  const supabase = await createClient();
  const { data: post } = await supabase
    .from('blogs')
    .select('*')
    .eq('id', idValue)
    .single();

  if (!post) {
    notFound();
  }

  const dateOptions: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
  const formattedDate = new Date(post.created_at).toLocaleDateString('en-US', dateOptions);
  const readTime = Math.max(1, Math.ceil((post.content?.length || 0) / 1000)) + " min read";

  return (
    <div className="min-h-screen bg-slate-50 selection:bg-[#00AEEF]/20">
      <Header />
      
      <main className="w-full pt-32 pb-24 relative overflow-hidden">
        {/* Subtle Background Glows */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-[#00AEEF]/5 rounded-full blur-[120px] pointer-events-none" />

        <article className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <ScrollReveal>
            <div className="mb-10">
              <Link href="/blog" className="inline-flex items-center gap-2 text-sm font-semibold text-slate-500 hover:text-slate-900 transition-colors">
                <svg className="w-4 h-4 rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
                Back to all posts
              </Link>
            </div>

            <div className="flex items-center gap-4 text-sm font-bold text-slate-500 uppercase tracking-widest mb-6">
              <span className="text-[#00AEEF] bg-[#00AEEF]/10 px-3 py-1 rounded-full">{post.author}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-slate-300" />
              <span>{formattedDate}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-slate-300" />
              <span>{readTime}</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-[1.1] mb-12 tracking-tight">
              {post.title}
            </h1>

            {post.image_url && (
              <div className="w-full aspect-video rounded-3xl overflow-hidden mb-16 shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-slate-200/50">
                <img 
                  src={post.image_url} 
                  alt={post.title} 
                  className="w-full h-full object-cover"
                />
              </div>
            )}
            
            {/* Article Body */}
            <div 
              className="text-lg md:text-xl text-slate-700 leading-relaxed max-w-3xl mx-auto"
              style={{ whiteSpace: 'pre-wrap' }}
            >
              {post.content}
            </div>
          </ScrollReveal>
        </article>
      </main>

      <Footer />
    </div>
  );
}
