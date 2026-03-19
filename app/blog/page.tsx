import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ScrollReveal } from '@/components/ScrollReveal';

const blogPosts = [
  {
    title: "How to Build a High-Converting YouTube Funnel in 2024",
    category: "YouTube Strategy",
    date: "Mar 15, 2024",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&q=80&w=800&h=500",
    excerpt: "Stop relying on the algorithm. Learn how to turn random viewers into booked calls using a structured video funnel...",
  },
  {
    title: "Retention Editing: Why Your Audience is Clicking Away",
    category: "Editing Workflows",
    date: "Mar 12, 2024",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&q=80&w=800&h=500",
    excerpt: "Most editors make the mistake of over-editing. Here is the exact framework we use to keep viewers watching without exhausting the editor...",
  },
  {
    title: "The Ultimate Guide to Cross-Platform Repurposing",
    category: "Content Systems",
    date: "Mar 08, 2024",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1616469829581-73993eb86b02?auto=format&fit=crop&q=80&w=800&h=500",
    excerpt: "Turn one long-form podcast into 15 high-impact short form reels. Here is the exact SOP our agency uses to scale content...",
  },
  {
    title: "Why Retention > Views (and how to track it)",
    category: "Analytics",
    date: "Mar 01, 2024",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800&h=500",
    excerpt: "If your videos get a million views but 0 conversions, was it a good video? Learn to track the metrics that actually matter...",
  }
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-slate-50 selection:bg-[#00AEEF]/20">
      <Header />
      
      <main className="w-full pt-32 pb-24 relative overflow-hidden">
        {/* Subtle Background Glows */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-40 left-0 w-[600px] h-[600px] bg-[#00AEEF]/5 rounded-full blur-[120px] pointer-events-none" />

        {/* Header Section */}
        <section className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-20 z-10">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-gray-200 shadow-sm mb-6">
              <span className="text-[10px] sm:text-xs font-bold tracking-[0.2em] uppercase text-slate-600">PrimeNest Content</span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-[#1A1A1A] tracking-tighter mb-6 leading-[1.1]">
              Insights for the modern{' '}
              <span className="relative inline-block text-slate-900">
                creator. 
                <span className="absolute bottom-2 left-0 w-full h-3 bg-[#00AEEF]/30 -z-10 -rotate-2" />
              </span>
            </h1>
            <p className="text-lg md:text-xl text-slate-500 font-medium max-w-2xl mx-auto leading-relaxed">
              Strategies, workflows, and deep-dives into the systems we use to engineer content that scales.
            </p>
          </ScrollReveal>
        </section>

        {/* Blog Grid */}
        <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 lg:gap-12">
            {blogPosts.map((post, index) => (
              <ScrollReveal 
                key={index} 
                delay={index * 100}
                className="group cursor-pointer bg-white rounded-3xl p-4 sm:p-5 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-2xl hover:shadow-[#00AEEF]/10 border border-slate-100 transition-all duration-300 hover:-translate-y-1"
              >
                {/* Image Wrap */}
                <div className="w-full aspect-video rounded-2xl overflow-hidden mb-6 relative">
                  <div className="absolute inset-0 bg-slate-100 animate-pulse" /> {/* Placeholder loading state */}
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover relative z-10 transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Category Badge overlay */}
                  <div className="absolute top-4 left-4 z-20">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-[#00AEEF] text-xs font-bold uppercase tracking-widest rounded-full shadow-sm">
                      {post.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="px-2 pb-2">
                  <div className="flex items-center gap-4 text-xs font-semibold text-slate-400 mb-4 uppercase tracking-wider">
                    <span>{post.date}</span>
                    <span className="w-1 h-1 rounded-full bg-slate-300" />
                    <span>{post.readTime}</span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-slate-900 leading-tight mb-3 group-hover:text-[#00AEEF] transition-colors">
                    {post.title}
                  </h3>
                  
                  <p className="text-slate-500 leading-relaxed mb-6 line-clamp-2">
                    {post.excerpt}
                  </p>
                  
                  <div className="inline-flex items-center gap-2 text-[#00AEEF] font-bold text-sm tracking-wide group-hover:gap-3 transition-all">
                    Read Article 
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
