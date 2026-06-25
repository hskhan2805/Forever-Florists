"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-botanical noise">
      {/* Ambient orbs */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-rose-700/20 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-80 h-80 rounded-full bg-champagne-700/15 blur-[100px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-forest-600/10 blur-[150px] pointer-events-none" />

      <div className="container-wide relative z-10 py-32 md:py-40">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text side */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
          >
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse" />
              <span className="text-xs font-medium tracking-widest uppercase text-champagne-300">
                Prince George's Floral Boutique
              </span>
            </motion.div>

            {/* Headline */}
            <h1 className="font-display text-6xl md:text-7xl lg:text-8xl font-light leading-[1.05] mb-6">
              <span className="block text-cream">Where Every</span>
              <span className="block gradient-rose font-semibold italic">Petal Tells</span>
              <span className="block text-cream">a Story</span>
            </h1>

            <p className="text-cream/60 text-lg leading-relaxed mb-10 max-w-md">
              Fresh fragrant flowers, handmade local gifts, fine jewellery &
              artisan chocolates — crafted with love at Hart Highway.
            </p>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a href="tel:+12509622323" className="btn-primary">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
                (250) 962-2323
              </a>
              <a
                href="https://instagram.com/forever_florists_boutique"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.057-1.645.069-4.849.069-3.205 0-3.584-.012-4.849-.069-3.259-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.322a1.44 1.44 0 110-2.88 1.44 1.44 0 010 2.88z" />
                </svg>
                @forever_florists_boutique
              </a>
            </div>

            {/* Stats bar */}
            <div className="flex flex-wrap gap-8 pt-8 border-t border-white/10">
              {[
                { value: "4.9★", label: "Google Rating" },
                { value: "33+", label: "Happy Reviews" },
                { value: "15+", label: "Years Serving PG" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="font-display text-3xl gradient-gold">{stat.value}</p>
                  <p className="text-cream/50 text-xs tracking-wide mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Photo side */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            className="relative flex items-center justify-center"
          >
            {/* Rotating dashed ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="absolute w-[400px] h-[400px] md:w-[480px] md:h-[480px] rounded-full border border-champagne-600/25"
              style={{ borderStyle: "dashed" }}
            />

            {/* Glow disc */}
            <div className="absolute w-72 h-72 rounded-full bg-rose-600/15 blur-3xl" />

            {/* Main photo — tall portrait */}
            <div className="relative w-72 h-[420px] md:w-80 md:h-[480px] rounded-3xl overflow-hidden shadow-card-dark border border-white/10 animate-float">
              <Image
                src="https://images.unsplash.com/photo-1444021465936-c6ca81d39b84?auto=format&fit=crop&w=700&q=90"
                alt="Beautiful flower bouquet"
                fill
                priority
                sizes="(max-width: 768px) 288px, 320px"
                className="object-cover object-center"
              />
              {/* Rose tint overlay for brand colour */}
              <div className="absolute inset-0 bg-gradient-to-t from-forest-950/60 via-transparent to-rose-900/10" />
            </div>

            {/* Second smaller photo — overlapping bottom-right */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.6 }}
              className="absolute -bottom-4 -right-2 md:right-4 w-36 h-44 rounded-2xl overflow-hidden border-2 border-forest-900 shadow-card-dark hidden sm:block"
            >
              <Image
                src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=400&q=85"
                alt="Bridal bouquet"
                fill
                sizes="144px"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-950/50 to-transparent" />
            </motion.div>

            {/* Third small photo — top-left */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.6 }}
              className="absolute -top-4 -left-2 md:left-4 w-32 h-36 rounded-2xl overflow-hidden border-2 border-forest-900 shadow-card-dark hidden sm:block"
            >
              <Image
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=400&q=85"
                alt="Red roses"
                fill
                sizes="128px"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-950/50 to-transparent" />
            </motion.div>

            {/* Floating info cards */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="absolute -right-4 top-16 glass-card rounded-2xl p-4 hidden lg:block"
            >
              <p className="text-xs text-cream/50 mb-1">Mon–Fri</p>
              <p className="text-sm font-semibold text-cream">10 AM – 5 PM</p>
              <p className="text-xs text-champagne-400 mt-1">Open Now</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="absolute -left-4 bottom-16 glass-card rounded-2xl p-4 hidden lg:block"
            >
              <p className="text-xs text-cream/50 mb-1">Located at</p>
              <p className="text-sm font-semibold text-cream">6551 Hart Hwy</p>
              <p className="text-xs text-champagne-400 mt-1">Prince George, BC</p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs tracking-widest uppercase text-cream/30">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-cream/30 to-transparent" />
      </motion.div>
    </section>
  );
}
