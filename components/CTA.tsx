"use client";

import { motion } from "framer-motion";

const occasions = [
  "Weddings", "Anniversaries", "Birthdays", "Funerals",
  "Corporate Events", "Graduations", "Just Because", "Valentine's Day",
  "Mother's Day", "Baby Showers", "Get Well Soon", "Thank You Gifts",
];

export default function CTA() {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden bg-forest-950">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-rose-500/20 to-transparent" />

      {/* Ambient lighting */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full bg-rose-600/8 blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-champagne-700/8 blur-[100px]" />
      </div>

      <div className="container-wide relative z-10">
        {/* Marquee occasions strip */}
        <div className="overflow-hidden mb-16 relative">
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-forest-950 to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-forest-950 to-transparent z-10" />
          <div className="flex animate-marquee whitespace-nowrap">
            {[...occasions, ...occasions].map((occ, i) => (
              <span key={i} className="inline-flex items-center gap-3 mr-10 text-cream/25 text-sm tracking-widest uppercase">
                <span className="text-rose-500/60">✦</span>
                {occ}
              </span>
            ))}
          </div>
        </div>

        {/* Main CTA card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative glass-card rounded-3xl p-12 md:p-16 text-center overflow-hidden max-w-5xl mx-auto"
        >
          {/* Background botanical art */}
          <div className="absolute inset-0 opacity-5 pointer-events-none">
            <svg viewBox="0 0 600 400" className="w-full h-full" fill="none">
              <ellipse cx="80" cy="200" rx="100" ry="40" fill="#e63d6e" transform="rotate(-30,80,200)"/>
              <ellipse cx="520" cy="200" rx="100" ry="40" fill="#e63d6e" transform="rotate(30,520,200)"/>
              <circle cx="300" cy="200" r="80" fill="#e63d6e"/>
              <circle cx="300" cy="200" r="40" fill="#7a1535"/>
            </svg>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-xs tracking-widest uppercase text-champagne-400 mb-5"
          >
            Ready to Order?
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="font-display text-5xl md:text-7xl font-light text-cream mb-6 leading-tight"
          >
            Let&rsquo;s Create
            <br />
            <span className="gradient-both italic font-semibold">Something Beautiful</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            viewport={{ once: true }}
            className="text-cream/50 text-lg max-w-xl mx-auto mb-10"
          >
            Whether it&rsquo;s a last-minute surprise or a meticulously planned event,
            we&rsquo;re here to make every petal count.
          </motion.p>

          {/* Action buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.45 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-14"
          >
            <a href="tel:+12509622323" className="btn-primary text-base px-10 py-4">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
              </svg>
              Call (250) 962-2323
            </a>
            <a href="mailto:foreverfloristspg@yahoo.ca" className="btn-outline text-base px-10 py-4">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
              </svg>
              Send Us an Email
            </a>
          </motion.div>

          {/* Info grid */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.55 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-10 border-t border-white/8"
          >
            {[
              {
                icon: (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                  </svg>
                ),
                label: "Location",
                value: "6551 Hart Highway",
                sub: "Prince George, BC",
              },
              {
                icon: (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                ),
                label: "Hours",
                value: "Mon – Fri, 10 AM – 5 PM",
                sub: "Weekends by appointment",
              },
              {
                icon: (
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.057-1.645.069-4.849.069-3.205 0-3.584-.012-4.849-.069-3.259-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z"/>
                  </svg>
                ),
                label: "Follow Us",
                value: "@forever_florists_boutique",
                sub: "New creations weekly",
              },
            ].map((item) => (
              <div key={item.label} className="flex flex-col items-center gap-2 text-center">
                <div className="text-champagne-400">{item.icon}</div>
                <p className="text-xs text-cream/40 tracking-widest uppercase">{item.label}</p>
                <p className="text-cream text-sm font-medium">{item.value}</p>
                <p className="text-cream/40 text-xs">{item.sub}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
