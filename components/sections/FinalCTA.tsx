'use client';

import { ScrollReveal } from '@/components/ScrollReveal';
import { EnquiryForm } from '@/components/EnquiryForm';

export function FinalCTA() {
  return (
    <section
      id="contact"
      className="w-full bg-white px-4 md:px-8 lg:px-16 py-20 md:py-32"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Side - Heading & Text */}
          <ScrollReveal direction="left">
            <div className="space-y-8 lg:pr-8 lg:sticky lg:top-24">
              {/* Main CTA */}
              <div className="space-y-6">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-slate-900">
                  Ready to Transform Your{' '}
                  <span className="relative inline-block text-[#00AEEF]">
                    Content?
                    <span className="absolute bottom-1 left-0 w-full h-3 bg-[#00AEEF]/20 -z-10 -rotate-2" />
                  </span>
                </h2>
                <p className="text-lg md:text-xl text-[#0077B6] leading-relaxed">
                  Let's chat about your goals and how we can help you grow your audience and create
                  content that converts.
                </p>
              </div>

              {/* Get In Touch Header */}
              <div className="pt-8 space-y-4">
                <h3 className="text-3xl md:text-4xl font-bold text-[#00AEEF]">Get In Touch</h3>
                <p className="text-[#0077B6] text-base md:text-lg">
                  Fill out the form below and we'll get back to you shortly.
                </p>
              </div>

              {/* Alternative Contact Methods */}
              <div className="border-t border-[#E2E8F0] pt-8">
                <p className="text-[#0077B6] mb-6 text-base">Or reach us directly:</p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {/* WhatsApp */}
                  <a
                    href="https://wa.me/917217207811"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex flex-col items-center justify-center gap-2 px-6 py-4 bg-white border border-[#E2E8F0] rounded-2xl hover:border-[#00AEEF] transition-all duration-300 hover:shadow-xl"
                  >
                    <div className="text-2xl">💬</div>
                    <span className="font-semibold text-[#00AEEF]">WhatsApp</span>
                    <span className="text-sm text-[#0077B6]">Message us</span>
                  </a>

                  {/* Call */}
                  <a
                    href="tel:+917217207811"
                    className="group flex flex-col items-center justify-center gap-2 px-6 py-4 bg-white border border-[#E2E8F0] rounded-2xl hover:border-[#00AEEF] transition-all duration-300 hover:shadow-xl"
                  >
                    <div className="text-2xl">📞</div>
                    <span className="font-semibold text-[#00AEEF]">Call</span>
                    <span className="text-sm text-[#0077B6]">+91-7217207811</span>
                  </a>

                  {/* Email */}
                  <a
                    href="mailto:primenestcreativesworks@gmail.com"
                    className="group flex flex-col items-center justify-center gap-2 px-6 py-4 bg-white border border-[#E2E8F0] rounded-2xl hover:border-[#00AEEF] transition-all duration-300 hover:shadow-xl"
                  >
                    <div className="text-2xl">✉️</div>
                    <span className="font-semibold text-[#00AEEF]">Email</span>
                    <span className="text-sm text-[#0077B6]">Get in touch</span>
                  </a>
                </div>
              </div>

              {/* Contact Details */}
              <div className="pt-8 border-t border-[#E2E8F0] space-y-4">
                <p className="text-[#0077B6] text-sm">
                  Available for inquiries • Response time: 2-4 hours
                </p>
                <div className="flex flex-col sm:flex-row gap-4 text-sm">
                  <span className="text-[#0077B6]">📍 India</span>
                  <span className="hidden sm:inline text-slate-300">•</span>
                  <span className="text-[#0077B6]">⏰ 9 AM - 9 PM IST</span>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Right Side - Form */}
          <ScrollReveal direction="right">
            <div className="lg:pl-8 flex justify-end">
              <div className="w-full max-w-2xl">
                <EnquiryForm />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
