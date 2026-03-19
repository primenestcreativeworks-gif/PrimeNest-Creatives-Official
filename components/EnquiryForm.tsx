'use client';

import { useState } from 'react';
import { ScrollReveal } from '@/components/ScrollReveal';
import { submitEnquiry } from '@/app/actions/leads';

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

    const result = await submitEnquiry(formData);
    
    if (!result.success) {
      console.error(result.error);
      setIsSubmitting(false);
      return;
    }

    setIsSubmitting(false);
    setSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        channelLink: '',
        project: '',
        needs: [],
      });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <div className="w-full">
      <ScrollReveal>
        <div className="bg-white rounded-[32px] p-8 md:p-10 shadow-[0_24px_60px_rgba(15,23,42,0.18)] border border-[#E5E7EB] relative overflow-hidden">
          <div className="pointer-events-none absolute inset-x-0 -top-6 h-24 bg-gradient-to-r from-[#00AEEF]/10 via-transparent to-[#6366F1]/10" />
          {submitted ? (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-[#00AEEF] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[#1A1A1A] mb-2">
                Thank You!
              </h3>
              <p className="text-[#666666]">
                We've received your enquiry and will get back to you shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
              {/* Top row */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-xs font-semibold tracking-[0.18em] uppercase text-[#64748B] mb-2"
                  >
                    Your Name / Brand
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="PrimeNest Studio"
                    className="w-full px-4 py-3 border border-[#E2E8F0] rounded-xl bg-white text-[#0F172A] placeholder-[#94A3B8] focus:outline-none focus:border-[#00AEEF] focus:ring-2 focus:ring-[#00AEEF]/20 transition-all duration-200"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs font-semibold tracking-[0.18em] uppercase text-[#64748B] mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="you@brand.com"
                    className="w-full px-4 py-3 border border-[#E2E8F0] rounded-xl bg-white text-[#0F172A] placeholder-[#94A3B8] focus:outline-none focus:border-[#00AEEF] focus:ring-2 focus:ring-[#00AEEF]/20 transition-all duration-200"
                  />
                </div>

                <div>
                  <label
                    htmlFor="channelLink"
                    className="block text-xs font-semibold tracking-[0.18em] uppercase text-[#64748B] mb-2"
                  >
                    Main Channel / Profile Link
                  </label>
                  <input
                    type="url"
                    id="channelLink"
                    name="channelLink"
                    value={formData.channelLink}
                    onChange={handleChange}
                    required
                    placeholder="https://youtube.com/@yourchannel"
                    className="w-full px-4 py-3 border border-[#E2E8F0] rounded-xl bg-white text-[#0F172A] placeholder-[#94A3B8] focus:outline-none focus:border-[#00AEEF] focus:ring-2 focus:ring-[#00AEEF]/20 transition-all duration-200"
                  />
                </div>
              </div>

              {/* About project */}
              <div>
                <label
                  htmlFor="project"
                  className="block text-xs font-semibold tracking-[0.18em] uppercase text-[#64748B] mb-2"
                >
                  Tell us about your content
                </label>
                <textarea
                  id="project"
                  name="project"
                  value={formData.project}
                  onChange={handleChange}
                  required
                  placeholder="Share where you publish, your current challenges, and what a ‘win’ looks like for you."
                  rows={4}
                  className="w-full px-4 py-3 border border-[#E2E8F0] rounded-xl bg-white text-[#0F172A] placeholder-[#94A3B8] focus:outline-none focus:border-[#00AEEF] focus:ring-2 focus:ring-[#00AEEF]/20 transition-all duration-200 resize-none"
                />
              </div>

              {/* Needs chips */}
              <div>
                <p className="block text-xs font-semibold tracking-[0.18em] uppercase text-[#64748B] mb-3">
                  I&apos;m looking for
                </p>
                <div className="flex flex-wrap gap-2">
                  {[
                    'Long‑form video editing',
                    'Short‑form / reels',
                    'Podcast editing',
                    'YouTube channel management',
                    'Social media handling',
                  ].map((need) => {
                    const isActive = formData.needs.includes(need);
                    return (
                      <button
                        key={need}
                        type="button"
                        onClick={() => toggleNeed(need)}
                        className={`rounded-full border px-4 py-2 text-xs md:text-sm font-medium transition-all duration-150 ${
                          isActive
                            ? 'bg-[#00AEEF] text-white border-[#00AEEF] shadow-sm shadow-[#00AEEF]/40'
                            : 'bg-slate-50 text-[#0F172A] border-slate-200 hover:border-[#00AEEF]/60 hover:text-[#0F172A]'
                        }`}
                      >
                        {need}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Submit Button */}
              <div className="space-y-3">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full md:w-auto px-10 py-3.5 bg-[#00AEEF] text-white font-semibold rounded-full hover:bg-[#0096D6] transition-all duration-300 ease-out shadow-[0_18px_45px_rgba(0,174,239,0.4)] hover:shadow-[0_22px_60px_rgba(0,174,239,0.55)] hover:-translate-y-[1px] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        />
                      </svg>
                      <span>Sending details…</span>
                    </>
                  ) : (
                    <>
                      <span>Submit enquiry</span>
                      <span className="text-sm">→</span>
                    </>
                  )}
                </button>

                <p className="text-xs text-[#94A3B8] text-center md:text-left">
                  We&apos;ll review your channel and reply with ideas within 24 hours.
                </p>
              </div>
            </form>
          )}
        </div>
      </ScrollReveal>
    </div>
  );
}
