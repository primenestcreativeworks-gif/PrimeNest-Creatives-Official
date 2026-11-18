export interface ShowcaseItem {
  id: string;
  title: string;
  category: 'long-form' | 'shorts' | 'podcasts' | 'thumbnails' | 'ai';
  categoryLabel: string;
  thumbnail: string;
  videoUrl?: string;
  aspectRatio: '16:9' | '9:16';
  clientName?: string;
  clientRole?: string;
  description?: string;
  beforeAfter?: {
    beforeImage: string;
    afterImage: string;
    beforeLabel?: string;
    afterLabel?: string;
  };
}

export const showcaseItems: ShowcaseItem[] = [
  // 1. Long-form Editing (16:9)
  {
    id: 'lf-1',
    title: 'High-Retention Documentary Travel Episode',
    category: 'long-form',
    categoryLabel: 'Long-form',
    thumbnail: '/Long Form,longform.jpg',
    videoUrl: 'https://www.youtube.com/embed/j0fsCUTOFwo',
    aspectRatio: '16:9',
    clientName: 'Paradise Yatra',
    clientRole: 'Travel Agency',
    description: 'Pacing, sound design, and custom motion graphics engineered for 65%+ average view duration.',
  },
  {
    id: 'lf-2',
    title: 'Deep-Dive Founder Story & Case Study',
    category: 'long-form',
    categoryLabel: 'Long-form',
    thumbnail: '/Youtube.jpg',
    videoUrl: 'https://www.youtube.com/embed/j0fsCUTOFwo',
    aspectRatio: '16:9',
    clientName: 'Vittshala',
    clientRole: 'Financial Education',
    description: 'Multi-camera edit with branded graphics and animated data charts.',
  },

  // 2. Shorts / Reels (9:16)
  {
    id: 'sh-1',
    title: 'High-Energy Hook Reel',
    category: 'shorts',
    categoryLabel: 'Shorts',
    thumbnail: '/Short Edits.jpg',
    videoUrl: 'https://www.youtube.com/embed/JmV2EddK77w',
    aspectRatio: '9:16',
    clientName: 'Harsh Tiwari',
    clientRole: 'Creator & Influencer',
    description: 'Dynamic captions, punch zooms, and micro-sound effects designed for algorithmic velocity.',
  },
  {
    id: 'sh-2',
    title: 'Educational Lecture to Viral Short',
    category: 'shorts',
    categoryLabel: 'Shorts',
    thumbnail: '/Short Edits.jpg',
    videoUrl: 'https://www.youtube.com/embed/A9vcsGSf6yc',
    aspectRatio: '9:16',
    clientName: 'G.S Vision IAS',
    clientRole: 'Coaching Institute',
    description: 'Condensed complex topics into rapid 45-second insights with 80%+ completion rates.',
  },
  {
    id: 'sh-3',
    title: 'Finance Breakdown & Market Analysis',
    category: 'shorts',
    categoryLabel: 'Shorts',
    thumbnail: '/Short Edits.jpg',
    videoUrl: 'https://www.youtube.com/embed/05XAb947Oys',
    aspectRatio: '9:16',
    clientName: 'Vittshala',
    clientRole: 'Investment Firm',
    description: 'Clean typographic motion graphics and sound design driving newsletter signups.',
  },
  {
    id: 'sh-4',
    title: 'High-Impact Fitness & Lifestyle Hook',
    category: 'shorts',
    categoryLabel: 'Shorts',
    thumbnail: '/Short Edits.jpg',
    videoUrl: 'https://www.youtube.com/embed/3WhdT7pKP60',
    aspectRatio: '9:16',
    clientName: 'Supriya Singh',
    clientRole: 'Yoga Instructor',
    description: 'Rhythm cuts matching beat drops for high replay value.',
  },
  {
    id: 'sh-5',
    title: 'Exam Strategy Quick-Hit',
    category: 'shorts',
    categoryLabel: 'Shorts',
    thumbnail: '/Short Edits.jpg',
    videoUrl: 'https://www.youtube.com/embed/RxCUxyxaIJQ',
    aspectRatio: '9:16',
    clientName: 'Doon Tutorial',
    clientRole: 'Coaching Institute',
    description: 'Visual cues, highlighted keywords, and snappy transitions.',
  },
  {
    id: 'sh-6',
    title: 'Storytelling Reel & Personal Brand',
    category: 'shorts',
    categoryLabel: 'Shorts',
    thumbnail: '/Short Edits.jpg',
    videoUrl: 'https://www.youtube.com/embed/7K70tXvcuvg',
    aspectRatio: '9:16',
    clientName: 'Divya',
    clientRole: 'Creator',
    description: 'Cinematic color grading and atmospheric sound bed.',
  },

  // 3. Podcasts (16:9 / 9:16)
  {
    id: 'pod-1',
    title: 'Studio Interview Multi-Cam Podcast',
    category: 'podcasts',
    categoryLabel: 'Podcasts',
    thumbnail: '/Podcast.jpg',
    videoUrl: 'https://www.youtube.com/embed/j0fsCUTOFwo',
    aspectRatio: '16:9',
    clientName: 'Industry Insider',
    clientRole: 'Creator Studio',
    description: 'Active speaker switching, seamless audio noise reduction, and custom branding overlays.',
  },

  // 4. Thumbnails & Packaging (Masonry / Before-After / Live Play)
  {
    id: 'th-1',
    title: 'CTR Optimization: Visual Packaging',
    category: 'thumbnails',
    categoryLabel: 'Thumbnails',
    thumbnail: '/Insta-after.jpeg',
    videoUrl: 'https://www.youtube.com/embed/j0fsCUTOFwo',
    aspectRatio: '16:9',
    clientName: 'Creator Channel',
    clientRole: 'YouTube Packaging',
    description: 'High-contrast typography, facial expressions, and narrative tension driving higher click-through.',
    beforeAfter: {
      beforeImage: '/insta-before.jpeg',
      afterImage: '/Insta-after.jpeg',
      beforeLabel: 'Raw Frame',
      afterLabel: 'High-CTR Packaging',
    },
  },
  {
    id: 'th-2',
    title: 'Case Study: Coaching Channel Rebrand',
    category: 'thumbnails',
    categoryLabel: 'Thumbnails',
    thumbnail: '/G.s Vision Subs.png',
    videoUrl: 'https://www.youtube.com/embed/A9vcsGSf6yc',
    aspectRatio: '16:9',
    clientName: 'G.S Vision IAS',
    clientRole: 'Coaching Institute',
    description: 'Packaging overhaul that stabilized weekly subscriber velocity.',
  },
  {
    id: 'th-3',
    title: 'Audience Growth System & Packaging',
    category: 'thumbnails',
    categoryLabel: 'Thumbnails',
    thumbnail: '/Paradise Yatra Subs.png',
    videoUrl: 'https://www.youtube.com/embed/j0fsCUTOFwo',
    aspectRatio: '16:9',
    clientName: 'Paradise Yatra',
    clientRole: 'Travel Agency',
    description: 'Branded thumbnail templates matching YouTube search and browse intent.',
  },

  // 5. AI Content
  {
    id: 'ai-1',
    title: 'Gen AI Visuals + Synthesized Storytelling',
    category: 'ai',
    categoryLabel: 'AI Content',
    thumbnail: '/Short Edits.jpg',
    videoUrl: 'https://www.youtube.com/embed/idOjHezHz0g',
    aspectRatio: '9:16',
    clientName: 'AI Powered Content',
    clientRole: 'AI Visuals & Voice',
    description: 'Custom Midjourney assets, cinematic motion, and synchronized AI voiceover pacing.',
  },
];
