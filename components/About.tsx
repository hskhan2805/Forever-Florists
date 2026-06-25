"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import Image from "next/image";

const stats = [
  { value: 15, suffix: "+", label: "Years in Business" },
  { value: 500, suffix: "+", label: "Weddings Serviced" },
  { value: 33, suffix: "+", label: "Verified Reviews" },
  { value: 100, suffix: "%", label: "Locally Loved" },
];

function CountUp({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = target / 50;
    const timer = setInterval(() => {
      start = Math.min(start + step, target);
      setCount(Math.floor(start));
      if (start >= target) clearInterval(timer);
    }, 30);
    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <span ref={ref} className="font-display text-5xl md:text-6xl gradient-gold">
      {count}{suffix}
    </span>
  );
}

const values = [
  {
    icon: "✦",
    title: "Fresh Every Day",
    desc: "We receive blooms multiple times a week so every arrangement is as fresh as the morning dew.",
  },
  {
    icon: "♡",
    title: "Local & Handmade",
    desc: "Our gifts feature products from Prince George artisans — we believe in supporting the community that supports us.",
  },
  {
    icon: "◈",
    title: "Personal Touch",
    desc: "Every arrangement is designed one-on-one with you. No templates, no shortcuts — just pure creativity.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-forest-900 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-champagne-600/20 to-transparent" />
      <div className="absolute -right-20 top-20 w-80 h-80 rounded-full bg-rose-600/8 blur-3xl pointer-events-none" />
      <div className="absolute -left-20 bottom-20 w-80 h-80 rounded-full bg-champagne-600/8 blur-3xl pointer-events-none" />

      <div className="container-wide relative z-10">
        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-24"
        >
          {stats.map((s, idx) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="glass-card rounded-2xl p-7 text-center"
            >
              <CountUp target={s.value} suffix={s.suffix} />
              <p className="text-cream/50 text-sm mt-2 tracking-wide">{s.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Main content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Photo collage panel */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Main tall photo */}
            <div className="relative rounded-3xl overflow-hidden aspect-[4/5] border border-white/8 shadow-card-dark">
              <Image
                src="https://images.unsplash.com/photo-1469371670807-013ccf25f16a?auto=format&fit=crop&w=800&q=88"
                alt="Beautiful floral arrangement"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-950/50 via-transparent to-transparent" />
            </div>

            {/* Overlay — top-right small photo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="absolute -top-5 -right-5 w-36 h-44 rounded-2xl overflow-hidden border-2 border-forest-900 shadow-card-dark hidden lg:block"
            >
              <Image
                src="https://images.unsplash.com/photo-1455659817273-f96807779a8a?auto=format&fit=crop&w=400&q=85"
                alt="Fresh roses"
                fill
                sizes="144px"
                className="object-cover object-center"
              />
            </motion.div>

            {/* Overlay — bottom-left small photo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
              className="absolute -bottom-5 -left-5 w-40 h-48 rounded-2xl overflow-hidden border-2 border-forest-900 shadow-card-dark hidden lg:block"
            >
              <Image
                src="https://images.unsplash.com/photo-1525310072745-f49212b5ac6d?auto=format&fit=crop&w=400&q=85"
                alt="Colourful spring bouquet"
                fill
                sizes="160px"
                className="object-cover object-center"
              />
            </motion.div>

            {/* Est. badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="absolute bottom-6 right-6 glass-card rounded-2xl p-5 text-center"
            >
              <p className="font-display text-3xl gradient-gold">❋</p>
              <p className="text-cream text-xs font-semibold mt-1">Est. 2009</p>
              <p className="text-cream/50 text-xs">Prince George</p>
            </motion.div>
          </motion.div>

          {/* Text side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="text-xs tracking-widest uppercase text-champagne-400 mb-4">Our Story</p>
            <h2 className="font-display text-5xl md:text-6xl font-light text-cream mb-6 leading-tight">
              Rooted in{" "}
              <span className="gradient-rose italic font-semibold">
                Prince George
              </span>
            </h2>

            <p className="text-cream/60 leading-relaxed mb-5">
              Nestled along Hart Highway, Forever Florists Boutique has been weaving beauty into the daily lives of Prince George families for over a decade. What started as a passion for fresh blooms grew into a beloved boutique that now also carries fine jewellery, artisan chocolates, and handcrafted local gifts.
            </p>

            <p className="text-cream/60 leading-relaxed mb-10">
              We believe flowers are more than decoration — they're a language. We help you speak it fluently, whether you're saying "I love you," "Congratulations," or "I'm here for you."
            </p>

            {/* Values */}
            <div className="space-y-5 mb-10">
              {values.map((v, idx) => (
                <motion.div
                  key={v.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="flex gap-4 items-start group"
                >
                  <div className="w-10 h-10 rounded-full glass-card flex items-center justify-center flex-shrink-0 text-champagne-400 group-hover:bg-rose-500/20 transition-colors duration-300">
                    <span className="text-lg">{v.icon}</span>
                  </div>
                  <div>
                    <h4 className="text-cream font-semibold mb-1">{v.title}</h4>
                    <p className="text-cream/50 text-sm leading-relaxed">{v.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Hours + location pill */}
            <div className="glass-card rounded-2xl p-5">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-champagne-400 font-medium mb-1 text-xs tracking-wide uppercase">Hours</p>
                  <p className="text-cream">Mon – Fri: 10 AM – 5 PM</p>
                  <p className="text-cream/50">Weekends: By Appointment</p>
                </div>
                <div>
                  <p className="text-champagne-400 font-medium mb-1 text-xs tracking-wide uppercase">Find Us</p>
                  <p className="text-cream">6551 Hart Highway</p>
                  <p className="text-cream/50">Prince George, BC V2K 3A4</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
