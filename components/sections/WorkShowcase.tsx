'use client';

import { ScrollReveal } from '@/components/ScrollReveal';

const reels = [
  {
    id: 1,
    name: 'Harsh Tiwari',
    role: 'Instagram Influencer',
    src: 'https://www.youtube.com/embed/JmV2EddK77w?autoplay=1&mute=1&controls=0&showinfo=0&rel=0&loop=1&playlist=JmV2EddK77w&playsinline=1',
  },
  {
    id: 2,
    name: 'G.S Vision IAS',
    role: 'Coaching Institute Owner',
    src: 'https://www.youtube.com/embed/A9vcsGSf6yc?autoplay=1&mute=1&controls=0&showinfo=0&rel=0&loop=1&playlist=A9vcsGSf6yc&playsinline=1',
  },
  {
    id: 3,
    name: 'Vittshala',
    role: 'Investment Firm',
    src: 'https://www.youtube.com/embed/05XAb947Oys?autoplay=1&mute=1&controls=0&showinfo=0&rel=0&loop=1&playlist=05XAb947Oys&playsinline=1',
  },
  {
    id: 4,
    name: 'Doon Tutorial',
    role: 'Coaching Institute',
    src: 'https://www.youtube.com/embed/RxCUxyxaIJQ?autoplay=1&mute=1&controls=0&showinfo=0&rel=0&loop=1&playlist=RxCUxyxaIJQ&playsinline=1',
  },
  {
    id: 5,
    name: 'Supriya Singh',
    role: 'Yoga Instructor (Instagram Influencer)',
    src: 'https://www.youtube.com/embed/3WhdT7pKP60?autoplay=1&mute=1&controls=0&showinfo=0&rel=0&loop=1&playlist=3WhdT7pKP60&playsinline=1',
  },
  {
    id: 6,
    name: 'AI Powered Content',
    role: 'AI Visuals + AI Voiceovers',
    src: 'https://www.youtube.com/embed/idOjHezHz0g?autoplay=1&mute=1&controls=0&showinfo=0&rel=0&loop=1&playlist=idOjHezHz0g&playsinline=1',
  },
  {
    id: 7,
    name: 'Divya',
    role: 'Creator',
    src: 'https://www.youtube.com/embed/7K70tXvcuvg?autoplay=1&mute=1&controls=0&showinfo=0&rel=0&loop=1&playlist=7K70tXvcuvg&playsinline=1',
  },
];

export function WorkShowcase() {
  return (
    <section
      id="work"
      className="w-full bg-white px-4 md:px-8 lg:px-16 pt-20 md:pt-28 pb-14 md:pb-20"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <ScrollReveal className="mb-16 md:mb-24">
          <div className="max-w-3xl">
            <h2 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-4">
              Work We're Proud Of
            </h2>
            <p className="text-xl text-[#666666]">
              Trusted by top creators to produce content that drives growth and engagement.
            </p>
          </div>
        </ScrollReveal>

        {/* Reels Showcase - Infinite Moving Strip */}
        <ScrollReveal className="relative">
          <div className="relative">
            {/* Edge fades */}
            <div className="pointer-events-none absolute inset-y-0 left-0 w-10 md:w-20 bg-gradient-to-r from-white via-white/70 to-transparent z-10" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-10 md:w-20 bg-gradient-to-l from-white via-white/70 to-transparent z-10" />

            <div className="overflow-hidden py-2">
              <div className="reels-marquee flex gap-6 md:gap-8">
                {[...reels, ...reels].map((reel, index) => (
                  <div
                    key={`${reel.id}-${index}`}
                    className="flex-shrink-0 group cursor-pointer"
                  >
                    {/* Reel Card - 9:16 aspect ratio */}
                    <div className="relative w-48 sm:w-52 md:w-56 aspect-[9/16] rounded-3xl shadow-lg overflow-hidden bg-black transition-transform duration-300 group-hover:scale-105">
                      {/* Video */}
                      <div className="absolute inset-0 pointer-events-none scale-[1.3] md:scale-[1.35] origin-center">
                        <iframe
                          src={reel.src}
                          className="w-full h-full object-cover"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          title={reel.name}
                        />
                      </div>

                      {/* Overlay on hover */}
                      <div className="absolute inset-0 bg-black/10 group-hover:bg-black/25 transition-colors duration-300" />

                      {/* Client Info */}
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent p-4 text-white">
                        <p className="font-bold text-lg">{reel.name}</p>
                        <p className="text-sm opacity-90">{reel.role}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>

      <style jsx>{`
        .reels-marquee {
          animation: reels-marquee 32s linear infinite;
        }

        .reels-marquee:hover {
          animation-play-state: paused;
        }

        @keyframes reels-marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .reels-marquee {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}
