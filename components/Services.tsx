"use client";

import { motion } from "framer-motion";

const services = [
  {
    id: 1,
    icon: (
      <svg viewBox="0 0 48 48" className="w-8 h-8" fill="none">
        <circle cx="24" cy="20" r="10" stroke="currentColor" strokeWidth="1.5" />
        <path d="M14 32 C14 42 34 42 34 32" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M24 30 L24 44" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="24" cy="20" r="4" fill="currentColor" opacity="0.4" />
        <path d="M16 14 C18 10 22 8 24 8 C26 8 30 10 32 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: "Wedding Flowers",
    description:
      "Bridal bouquets, aisle arrangements, centerpieces, and floral installations — all designed around your vision and colour palette.",
    tag: "Most Popular",
    gradient: "from-rose-700/30 to-rose-900/10",
    accent: "rose",
  },
  {
    id: 2,
    icon: (
      <svg viewBox="0 0 48 48" className="w-8 h-8" fill="none">
        <rect x="8" y="20" width="32" height="20" rx="3" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M16 20 C16 14 20 10 24 10 C28 10 32 14 32 20" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M20 28 L22 30 L28 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Gift Baskets",
    description:
      "Curated baskets brimming with fresh blooms, artisan chocolates, fine jewellery, and locally-made treasures.",
    tag: null,
    gradient: "from-champagne-700/20 to-champagne-900/5",
    accent: "champagne",
  },
  {
    id: 3,
    icon: (
      <svg viewBox="0 0 48 48" className="w-8 h-8" fill="none">
        <path d="M24 6 C18 6 12 12 12 18 C12 28 24 40 24 40 C24 40 36 28 36 18 C36 12 30 6 24 6Z" stroke="currentColor" strokeWidth="1.5"/>
        <circle cx="24" cy="18" r="5" fill="currentColor" opacity="0.4" />
      </svg>
    ),
    title: "Custom Bouquets",
    description:
      "Design your dream arrangement or let our florists compose something uniquely beautiful for your occasion.",
    tag: null,
    gradient: "from-forest-600/30 to-forest-800/10",
    accent: "forest",
  },
  {
    id: 4,
    icon: (
      <svg viewBox="0 0 48 48" className="w-8 h-8" fill="none">
        <path d="M24 8 L28 18 L40 18 L30 25 L34 36 L24 29 L14 36 L18 25 L8 18 L20 18 Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Event Décor",
    description:
      "Corporate galas, anniversaries, and milestone celebrations. We transform spaces with lush botanical installations.",
    tag: null,
    gradient: "from-rose-800/20 to-rose-950/5",
    accent: "rose",
  },
  {
    id: 5,
    icon: (
      <svg viewBox="0 0 48 48" className="w-8 h-8" fill="none">
        <circle cx="20" cy="20" r="8" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M26 26 L38 38" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M16 16 L24 16 L24 24" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Fine Jewellery",
    description:
      "A curated boutique selection of fine jewellery and luxury accessories — the perfect complement to any floral gift.",
    tag: null,
    gradient: "from-champagne-600/20 to-champagne-800/5",
    accent: "champagne",
  },
  {
    id: 6,
    icon: (
      <svg viewBox="0 0 48 48" className="w-8 h-8" fill="none">
        <rect x="8" y="18" width="32" height="22" rx="3" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M16 18 L16 14 C16 10 20 8 24 8 C28 8 32 10 32 14 L32 18" stroke="currentColor" strokeWidth="1.5"/>
        <circle cx="24" cy="29" r="4" fill="currentColor" opacity="0.4"/>
      </svg>
    ),
    title: "Same-Day Delivery",
    description:
      "Surprise someone special today. Call before noon and we'll arrange local delivery across Prince George.",
    tag: "Call to Book",
    gradient: "from-forest-500/20 to-forest-800/5",
    accent: "forest",
  },
];

const accentColors: Record<string, string> = {
  rose: "text-rose-400",
  champagne: "text-champagne-400",
  forest: "text-forest-300",
};

export default function Services() {
  return (
    <section id="services" className="py-24 md:py-32 relative overflow-hidden bg-forest-950">
      {/* Decorative shapes */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-rose-500/30 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-champagne-600/20 to-transparent" />
      <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-rose-600/5 blur-3xl pointer-events-none" />

      <div className="container-wide relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="text-xs tracking-widest uppercase text-champagne-400 mb-4">What We Offer</p>
          <h2 className="font-display text-5xl md:text-6xl font-light text-cream mb-5">
            Our <span className="gradient-rose font-semibold italic">Services</span>
          </h2>
          <div className="section-divider mb-5" />
          <p className="text-cream/50 text-lg max-w-xl mx-auto">
            From intimate bouquets to grand wedding installations, we bring nature's beauty to every occasion.
          </p>
        </motion.div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((svc, idx) => (
            <motion.div
              key={svc.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.08 }}
              viewport={{ once: true }}
              className={`relative group glass-card rounded-2xl p-8 bg-gradient-to-br ${svc.gradient} overflow-hidden cursor-default`}
            >
              {/* Hover shimmer */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-white/5 to-transparent rounded-2xl" />

              {/* Tag */}
              {svc.tag && (
                <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-rose-500/20 text-rose-300 border border-rose-500/30 mb-4">
                  {svc.tag}
                </span>
              )}

              {/* Icon */}
              <div className={`mb-5 ${accentColors[svc.accent]}`}>{svc.icon}</div>

              <h3 className="font-display text-2xl font-semibold text-cream mb-3">{svc.title}</h3>
              <p className="text-cream/55 leading-relaxed text-sm">{svc.description}</p>

              {/* Bottom line on hover */}
              <div className="absolute bottom-0 left-0 h-0.5 w-0 group-hover:w-full bg-gradient-rose transition-all duration-500 rounded-b-2xl" />
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-cream/40 text-sm mb-6">
            Have something unique in mind? We love a creative challenge.
          </p>
          <a href="tel:+12509622323" className="btn-primary">
            Talk to Our Florists
          </a>
        </motion.div>
      </div>
    </section>
  );
}
