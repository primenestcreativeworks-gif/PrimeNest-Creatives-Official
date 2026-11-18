import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ScrollReveal } from '@/components/ScrollReveal';
import { createClient } from '@/utils/supabase/server';
import Link from 'next/link';

export default async function BlogPage() {
  const supabase = await createClient();
  const { data: blogs = [] } = await supabase
    .from('blogs')
    .select('*')
    .eq('status', 'published')
    .order('created_at', { ascending: false });

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white selection:bg-[#00AAFF]/30 selection:text-[#00AAFF] grain-overlay">
      <Header />

      <main className="w-full pt-32 pb-24 relative overflow-hidden">
        {/* Soft Background Glows */}
        <div className="pointer-events-none absolute top-0 right-0 w-[500px] h-[500px] bg-[#00AAFF]/8 rounded-full blur-[120px]" />
        <div className="pointer-events-none absolute bottom-40 left-0 w-[600px] h-[600px] bg-[#00AAFF]/6 rounded-full blur-[140px]" />

        {/* Header Section */}
        <section className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16 z-10">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/10 mb-6 backdrop-blur-md">
              <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#00AAFF]">
                PrimeNest Insights
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight mb-4 uppercase leading-[1.1]">
              Insights For The Modern{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-[#00AAFF]">
                Creator.
              </span>
            </h1>
            <p className="text-base sm:text-lg text-white/60 font-normal max-w-2xl mx-auto leading-relaxed">
              Strategies, workflows, and deep-dives into the post-production systems we use to engineer high-retention content.
            </p>
          </ScrollReveal>
        </section>

        {/* Blog Grid */}
        <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          {!blogs || blogs.length === 0 ? (
            <div className="text-center py-20 px-4 glass-card rounded-3xl max-w-lg mx-auto border border-white/10">
              <div className="w-14 h-14 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4 text-2xl text-[#00AAFF]">
                📝
              </div>
              <h3 className="text-xl font-bold text-white mb-2">No Articles Yet</h3>
              <p className="text-white/50 text-sm">Check back soon for new case breakdowns and post-production systems.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
              {blogs.map((post: any, index: number) => {
                const dateOptions: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'short', day: 'numeric' };
                const formattedDate = new Date(post.created_at).toLocaleDateString('en-US', dateOptions);
                const readTime = Math.max(1, Math.ceil((post.content?.length || 0) / 1000)) + ' min read';

                return (
                  <ScrollReveal key={post.id} delay={index * 100} className="group">
                    <Link
                      href={`/blog/${post.id}`}
                      className="block h-full cursor-pointer glass-card glass-card-hover rounded-3xl p-5 md:p-6 transition-all duration-300"
                    >
                      {/* Image Wrap */}
                      <div className="w-full aspect-video rounded-2xl overflow-hidden mb-6 relative bg-black/60 border border-white/10">
                        {post.image_url && (
                          <img
                            src={post.image_url}
                            alt={post.title}
                            className="w-full h-full object-cover relative z-10 transition-transform duration-700 group-hover:scale-105"
                          />
                        )}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10" />
                      </div>

                      {/* Content */}
                      <div className="px-1">
                        <div className="flex items-center gap-3 text-xs font-semibold text-white/40 mb-3 uppercase tracking-wider">
                          <span>{formattedDate}</span>
                          <span className="w-1 h-1 rounded-full bg-white/20" />
                          <span>{readTime}</span>
                        </div>

                        <h3 className="text-xl md:text-2xl font-bold text-white leading-tight mb-3 group-hover:text-[#00AAFF] transition-colors">
                          {post.title}
                        </h3>

                        <p className="text-white/60 text-sm leading-relaxed mb-6 line-clamp-2">
                          {post.content?.substring(0, 160)}...
                        </p>

                        <div className="inline-flex items-center gap-2 text-[#00AAFF] font-bold text-xs uppercase tracking-widest group-hover:gap-3 transition-all">
                          Read Article →
                        </div>
                      </div>
                    </Link>
                  </ScrollReveal>
                );
              })}
            </div>
          )}
        </section>
      </main>

      <Footer />
    </div>
  );
}
