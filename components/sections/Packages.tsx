'use client';

import { CTAButton } from '@/components/CTAButton';
import { ScrollReveal } from '@/components/ScrollReveal';

const packages = [
  {
    name: 'Growth Silver',
    price: '₹21K',
    description: 'Perfect for growing channels',
    featured: false,
    deliverables: [
      '4 Edited Videos/Month',
      'Custom Thumbnails',
      'Basic Color Grading',
      'Social Media Cuts',
      'Monthly Check-in',
    ],
  },
  {
    name: 'Growth + Handling',
    price: '₹25K',
    description: 'Most popular choice',
    featured: true,
    deliverables: [
      '8 Edited Videos/Month',
      'Custom Thumbnails',
      'Professional Color Grading',
      'Social Media Repurposing',
      'Bi-weekly Check-ins',
      'AI Script Generation',
      'Priority Support',
    ],
  },
  {
    name: 'Content God',
    price: '₹29K',
    description: 'For serious growth',
    featured: false,
    deliverables: [
      '16 Edited Videos/Month',
      'Custom Thumbnails & Branding',
      'Advanced Color Grading',
      'Full Social Media Strategy',
      'Weekly Check-ins',
      'AI Content Creation',
      'Analytics & Optimization',
      '24/7 Support',
    ],
  },
];

export function Packages() {
  return (
    <section className="w-full bg-white px-4 md:px-8 lg:px-16 py-20 md:py-32">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <ScrollReveal className="mb-16 md:mb-24 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Transparent Pricing
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Choose the plan that scales with your growth. No hidden fees, no surprises.
          </p>
        </ScrollReveal>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <ScrollReveal
              key={pkg.name}
              delay={index * 100}
              className="h-full"
            >
              <div
                className={`relative rounded-3xl p-8 h-full flex flex-col transition-all duration-300 ${
                  pkg.featured
                    ? 'bg-[#1E40FF] text-white shadow-2xl scale-105 md:scale-100 hover:scale-105'
                    : 'bg-white border-2 border-slate-200 text-slate-900 hover:border-[#1E40FF] hover:shadow-xl'
                }`}
              >
                {/* Featured Badge */}
                {pkg.featured && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-white text-[#1E40FF] px-4 py-1 rounded-full font-bold text-sm shadow-lg">
                      POPULAR
                    </div>
                  </div>
                )}

                {/* Header */}
                <div className="mb-8">
                  <h3 className={`text-2xl font-bold mb-2 ${
                    pkg.featured ? 'text-white' : 'text-slate-900'
                  }`}>
                    {pkg.name}
                  </h3>
                  <p className={`text-sm mb-4 ${
                    pkg.featured ? 'text-blue-100' : 'text-slate-600'
                  }`}>
                    {pkg.description}
                  </p>
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-bold">{pkg.price}</span>
                    <span className={`text-sm ${
                      pkg.featured ? 'text-blue-100' : 'text-slate-600'
                    }`}>
                      /month
                    </span>
                  </div>
                </div>

                {/* Divider */}
                <div className={`my-8 h-px ${
                  pkg.featured ? 'bg-[#4F7CFF]' : 'bg-slate-200'
                }`}></div>

                {/* Deliverables */}
                <div className="flex-1 mb-8">
                  <ul className="space-y-4">
                    {pkg.deliverables.map((item) => (
                      <li
                        key={item}
                        className={`flex items-start gap-3 text-sm ${
                          pkg.featured ? 'text-blue-50' : 'text-slate-700'
                        }`}
                      >
                        <span className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold ${
                          pkg.featured
                            ? 'bg-white text-[#1E40FF]'
                            : 'bg-blue-100 text-[#1E40FF]'
                        }`}>
                          ✓
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button */}
                <CTAButton
                  variant={pkg.featured ? 'secondary' : 'primary'}
                  size="lg"
                  className={`w-full ${
                    pkg.featured
                      ? 'border-white text-white hover:bg-white hover:text-[#1E40FF]'
                      : ''
                  }`}
                  onClick={() =>
                    document
                      .getElementById('contact')
                      ?.scrollIntoView({ behavior: 'smooth' })
                  }
                >
                  Get Started
                </CTAButton>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Footer CTA */}
        <ScrollReveal className="mt-16 text-center" delay={300}>
          <p className="text-slate-600 mb-4">
            Need a custom package? Let's talk about your unique needs.
          </p>
          <button className="text-[#1E40FF] font-semibold hover:text-[#1530cc] underline transition-colors">
            Contact us for custom pricing
          </button>
        </ScrollReveal>
      </div>
    </section>
  );
}
