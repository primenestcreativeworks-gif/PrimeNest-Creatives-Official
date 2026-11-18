'use client';

import { useState } from 'react';
import { ScrollReveal } from '@/components/ScrollReveal';
import { submitEnquiry } from '@/app/actions/leads';
import { CheckCircle2, Send, Loader2 } from 'lucide-react';

export function EnquiryForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    channelLink: '',
    project: '',
    needs: [] as string[],
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const servicesList = [
    'Long-form YouTube Editing',
    'Shorts & Reels',
    'Thumbnails & Packaging',
    'Podcast Editing',
    'YouTube Management',
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const toggleNeed = (need: string) => {
    setFormData((prev) => {
      const exists = prev.needs.includes(need);
      return {
        ...prev,
        needs: exists ? prev.needs.filter((n) => n !== need) : [...prev.needs, need],
      };
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const result = await submitEnquiry(formData);
      if (!result.success) {
        console.error(result.error);
        setIsSubmitting(false);
        return;
      }
    } catch (err) {
      console.error(err);
    }

    setIsSubmitting(false);
    setSubmitted(true);

    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        channelLink: '',
        project: '',
        needs: [],
      });
      setSubmitted(false);
    }, 4000);
  };

  return (
    <div className="w-full">
      <div className="glass-card rounded-3xl p-8 md:p-10 border border-white/10 relative overflow-hidden shadow-2xl">
        {/* Soft top gradient accent */}
        <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-72 h-40 bg-[#00AAFF]/20 rounded-full blur-3xl" />

        {submitted ? (
          <div className="text-center py-12 space-y-4">
            <div className="w-16 h-16 rounded-full bg-[#00AAFF]/20 border border-[#00AAFF]/40 flex items-center justify-center mx-auto text-[#00AAFF]">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-white">Trial Edit Request Received!</h3>
            <p className="text-white/60 text-sm max-w-sm mx-auto">
              Our team will review your channel and reach out within 2–4 hours to kick off your trial cut.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-[#00AAFF] mb-1">
                Claim Your Test Cut
              </p>
              <h3 className="text-2xl font-bold text-white">
                Request a Free Trial Edit
              </h3>
            </div>

            {/* Form Fields Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-wider text-white/60 mb-2">
                  Your Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder="e.g. Alex Rivera"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-white/30 text-sm focus:outline-none focus:border-[#00AAFF] focus:ring-1 focus:ring-[#00AAFF] transition-colors"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-white/60 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="alex@channel.com"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-white/30 text-sm focus:outline-none focus:border-[#00AAFF] focus:ring-1 focus:ring-[#00AAFF] transition-colors"
                />
              </div>
            </div>

            <div>
              <label htmlFor="channelLink" className="block text-xs font-semibold uppercase tracking-wider text-white/60 mb-2">
                Channel or Portfolio Link *
              </label>
              <input
                type="url"
                id="channelLink"
                name="channelLink"
                required
                placeholder="https://youtube.com/@yourchannel or drive link"
                value={formData.channelLink}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-white/30 text-sm focus:outline-none focus:border-[#00AAFF] focus:ring-1 focus:ring-[#00AAFF] transition-colors"
              />
            </div>

            {/* Service Needs Chips */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-white/60 mb-2">
                What do you need help with?
              </label>
              <div className="flex flex-wrap gap-2">
                {servicesList.map((service) => {
                  const isSelected = formData.needs.includes(service);
                  return (
                    <button
                      key={service}
                      type="button"
                      onClick={() => toggleNeed(service)}
                      className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200 cursor-pointer ${
                        isSelected
                          ? 'bg-white text-black font-semibold shadow-[0_0_12px_rgba(255,255,255,0.25)]'
                          : 'bg-white/[0.03] text-neutral-400 hover:text-white hover:bg-white/[0.06] border border-white/[0.08]'
                      }`}
                    >
                      {service}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Notes */}
            <div>
              <label htmlFor="project" className="block text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-2">
                Footage Details / Raw Video Link
              </label>
              <textarea
                id="project"
                name="project"
                rows={3}
                placeholder="Tell us about your upcoming video, target style, or paste a Google Drive / Dropbox link..."
                value={formData.project}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl bg-white/[0.02] border border-white/[0.08] text-white placeholder-neutral-500 text-sm focus:outline-none focus:border-white/30 focus:ring-1 focus:ring-white/20 transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3.5 rounded-full bg-white text-black font-semibold text-sm hover:bg-neutral-200 hover:shadow-[0_0_25px_rgba(255,255,255,0.3)] transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin text-black" />
                  <span>Submitting Trial Request...</span>
                </>
              ) : (
                <>
                  <span>Get a Free Trial Edit</span>
                  <Send className="w-3.5 h-3.5 text-black" />
                </>
              )}
            </button>

            <p className="text-center text-[11px] text-white/40">
              No long-term contracts. 100% free trial cut to evaluate our quality on your own footage.
            </p>
          </form>
        )}
      </div>
    </div>
  );
}
