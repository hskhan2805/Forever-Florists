"use client";

import { motion } from "framer-motion";

function BotanicalIllustration() {
  return (
    <svg viewBox="0 0 500 500" className="w-full h-full" fill="none">
      {/* Background glow */}
      <radialGradient id="centerGlow" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#e63d6e" stopOpacity="0.2" />
        <stop offset="100%" stopColor="#0b1a0e" stopOpacity="0" />
      </radialGradient>
      <circle cx="250" cy="250" r="220" fill="url(#centerGlow)" />

      {/* Gold ring */}
      <circle cx="250" cy="250" r="210" stroke="url(#goldRing)" strokeWidth="1" strokeDasharray="4 8" opacity="0.4" />
      <linearGradient id="goldRing" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#e0bc6a" />
        <stop offset="100%" stopColor="#b3841c" />
      </linearGradient>

      {/* Stem */}
      <path d="M250 440 C250 350, 245 310, 250 250" stroke="#3d6e45" strokeWidth="3" strokeLinecap="round" />

      {/* Leaves */}
      <ellipse cx="222" cy="340" rx="32" ry="12" fill="#2d5233" transform="rotate(-30, 222, 340)" opacity="0.9" />
      <ellipse cx="278" cy="310" rx="28" ry="11" fill="#3d6e45" transform="rotate(35, 278, 310)" opacity="0.8" />
      <ellipse cx="215" cy="285" rx="24" ry="9" fill="#2d5233" transform="rotate(-45, 215, 285)" opacity="0.85" />
      <ellipse cx="285" cy="268" rx="22" ry="8" fill="#3d6e45" transform="rotate(40, 285, 268)" opacity="0.75" />

      {/* Rose petals — large */}
      <ellipse cx="250" cy="210" rx="45" ry="55" fill="#e63d6e" opacity="0.9" />
      <ellipse cx="210" cy="225" rx="42" ry="50" fill="#cc2a5a" opacity="0.85" transform="rotate(-30, 210, 225)" />
      <ellipse cx="290" cy="225" rx="42" ry="50" fill="#cc2a5a" opacity="0.85" transform="rotate(30, 290, 225)" />
      <ellipse cx="222" cy="175" rx="38" ry="46" fill="#e63d6e" opacity="0.8" transform="rotate(-15, 222, 175)" />
      <ellipse cx="278" cy="175" rx="38" ry="46" fill="#e63d6e" opacity="0.8" transform="rotate(15, 278, 175)" />

      {/* Rose petals — inner */}
      <ellipse cx="250" cy="215" rx="30" ry="38" fill="#cc2a5a" opacity="0.95" />
      <ellipse cx="235" cy="220" rx="25" ry="32" fill="#a81e49" opacity="0.9" transform="rotate(-20, 235, 220)" />
      <ellipse cx="265" cy="220" rx="25" ry="32" fill="#a81e49" opacity="0.9" transform="rotate(20, 265, 220)" />

      {/* Center */}
      <circle cx="250" cy="218" r="18" fill="#7a1535" />
      <circle cx="250" cy="218" r="10" fill="#4a0d22" />
      <circle cx="246" cy="214" r="3" fill="#e0bc6a" opacity="0.8" />
      <circle cx="254" cy="214" r="3" fill="#e0bc6a" opacity="0.8" />
      <circle cx="250" cy="222" r="3" fill="#e0bc6a" opacity="0.8" />

      {/* Sparkles */}
      <g fill="#e0bc6a" opacity="0.7">
        <path d="M148 130 L152 140 L162 144 L152 148 L148 158 L144 148 L134 144 L144 140 Z" />
        <path d="M355 90 L358 98 L366 101 L358 104 L355 112 L352 104 L344 101 L352 98 Z" />
        <path d="M390 200 L392 207 L399 209 L392 211 L390 218 L388 211 L381 209 L388 207 Z" />
        <path d="M115 260 L117 266 L123 268 L117 270 L115 276 L113 270 L107 268 L113 266 Z" />
      </g>

      {/* Small accent flowers */}
      <g opacity="0.6">
        <circle cx="145" cy="195" r="8" fill="#f49bb5" />
        <circle cx="145" cy="195" r="4" fill="#e63d6e" />
        <circle cx="362" cy="162" r="6" fill="#f49bb5" />
        <circle cx="362" cy="162" r="3" fill="#e63d6e" />
        <circle cx="380" cy="310" r="7" fill="#f49bb5" />
        <circle cx="380" cy="310" r="3.5" fill="#e63d6e" />
        <circle cx="128" cy="355" r="5" fill="#f49bb5" />
        <circle cx="128" cy="355" r="2.5" fill="#e63d6e" />
      </g>
    </svg>
  );
}

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

          {/* Illustration side */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            className="relative flex items-center justify-center"
          >
            {/* Rotating ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 rounded-full border border-champagne-600/20"
              style={{ borderStyle: "dashed" }}
            />

            {/* Glow disc */}
            <div className="absolute inset-8 rounded-full bg-rose-600/10 blur-2xl" />

            {/* Main illustration */}
            <div className="relative w-80 h-80 md:w-96 md:h-96 animate-float">
              <BotanicalIllustration />
            </div>

            {/* Floating accent cards */}
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
