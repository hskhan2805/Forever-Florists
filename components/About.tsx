"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

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
          {/* Botanical art panel */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden aspect-[4/5] glass-card p-1">
              <div className="w-full h-full rounded-[22px] bg-gradient-to-br from-forest-700 via-rose-900 to-champagne-900 flex items-center justify-center relative overflow-hidden">
                {/* Large botanical SVG */}
                <svg viewBox="0 0 400 500" className="w-full h-full opacity-80" fill="none">
                  {/* Background glow */}
                  <radialGradient id="aboutGlow" cx="50%" cy="45%" r="45%">
                    <stop offset="0%" stopColor="#e63d6e" stopOpacity="0.25"/>
                    <stop offset="100%" stopColor="#0b1a0e" stopOpacity="0"/>
                  </radialGradient>
                  <circle cx="200" cy="220" r="200" fill="url(#aboutGlow)"/>

                  {/* Vase */}
                  <path d="M155 430 Q140 400 145 350 L175 280 L225 280 L255 350 Q260 400 245 430 Z" fill="#1a3020" stroke="#3d6e45" strokeWidth="2"/>
                  <ellipse cx="200" cy="430" rx="50" ry="12" fill="#122418"/>
                  <ellipse cx="200" cy="278" rx="30" ry="8" fill="#3d6e45" opacity="0.6"/>
                  <path d="M170 380 Q200 370 230 380" stroke="#5a9464" strokeWidth="2" fill="none" opacity="0.5"/>

                  {/* Stems */}
                  <path d="M200 278 C200 230 198 180 200 140" stroke="#3d6e45" strokeWidth="2.5" strokeLinecap="round"/>
                  <path d="M200 278 C185 240 170 200 155 160" stroke="#3d6e45" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M200 278 C215 235 230 195 248 155" stroke="#3d6e45" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M200 278 C175 250 148 230 130 200" stroke="#3d6e45" strokeWidth="1.5" strokeLinecap="round"/>
                  <path d="M200 278 C225 255 252 235 270 205" stroke="#3d6e45" strokeWidth="1.5" strokeLinecap="round"/>

                  {/* Leaves */}
                  <ellipse cx="175" cy="240" rx="28" ry="10" fill="#2d5233" transform="rotate(-35,175,240)" opacity="0.9"/>
                  <ellipse cx="228" cy="248" rx="25" ry="9" fill="#3d6e45" transform="rotate(40,228,248)" opacity="0.8"/>
                  <ellipse cx="163" cy="205" rx="22" ry="8" fill="#2d5233" transform="rotate(-45,163,205)" opacity="0.85"/>
                  <ellipse cx="240" cy="215" rx="20" ry="7" fill="#3d6e45" transform="rotate(42,240,215)" opacity="0.75"/>
                  <ellipse cx="140" cy="215" rx="18" ry="7" fill="#5a9464" transform="rotate(-25,140,215)" opacity="0.7"/>
                  <ellipse cx="262" cy="230" rx="16" ry="6" fill="#5a9464" transform="rotate(35,262,230)" opacity="0.65"/>

                  {/* Main rose — center */}
                  <ellipse cx="200" cy="120" rx="38" ry="45" fill="#e63d6e" opacity="0.85"/>
                  <ellipse cx="200" cy="125" rx="28" ry="35" fill="#cc2a5a" opacity="0.9"/>
                  <ellipse cx="188" cy="128" rx="22" ry="28" fill="#a81e49" opacity="0.85" transform="rotate(-15,188,128)"/>
                  <ellipse cx="212" cy="128" rx="22" ry="28" fill="#a81e49" opacity="0.85" transform="rotate(15,212,128)"/>
                  <circle cx="200" cy="128" r="14" fill="#7a1535"/>
                  <circle cx="200" cy="128" r="7" fill="#4a0d22"/>

                  {/* Left rose */}
                  <ellipse cx="150" cy="152" rx="28" ry="33" fill="#cc2a5a" opacity="0.8"/>
                  <ellipse cx="150" cy="157" rx="20" ry="24" fill="#a81e49" opacity="0.85"/>
                  <circle cx="150" cy="157" r="10" fill="#7a1535"/>
                  <circle cx="150" cy="157" r="5" fill="#4a0d22"/>

                  {/* Right rose */}
                  <ellipse cx="252" cy="145" rx="26" ry="30" fill="#e63d6e" opacity="0.75"/>
                  <ellipse cx="252" cy="150" rx="18" ry="22" fill="#cc2a5a" opacity="0.8"/>
                  <circle cx="252" cy="150" r="9" fill="#7a1535"/>
                  <circle cx="252" cy="150" r="4.5" fill="#4a0d22"/>

                  {/* Small accent flowers */}
                  {[[130,195],[272,202],[200,80],[165,100],[238,95]].map(([cx,cy], i) => (
                    <g key={i}>
                      {[0,72,144,216,288].map((angle, j) => (
                        <ellipse key={j} cx={cx + 10 * Math.cos((angle*Math.PI)/180)} cy={cy + 10 * Math.sin((angle*Math.PI)/180)} rx="5" ry="8" fill={i%2===0 ? "#f49bb5" : "#e0bc6a"} transform={`rotate(${angle+90},${cx + 10 * Math.cos((angle*Math.PI)/180)},${cy + 10 * Math.sin((angle*Math.PI)/180)})`} opacity="0.8"/>
                      ))}
                      <circle cx={cx} cy={cy} r="5" fill={i%2===0 ? "#e63d6e" : "#b3841c"}/>
                    </g>
                  ))}

                  {/* Gold sparkles */}
                  {[[90,100],[310,90],[320,220],[80,250]].map(([cx,cy],i) => (
                    <path key={i} d={`M${cx} ${cy-6} L${cx+2} ${cy-2} L${cx+6} ${cy} L${cx+2} ${cy+2} L${cx} ${cy+6} L${cx-2} ${cy+2} L${cx-6} ${cy} L${cx-2} ${cy-2} Z`} fill="#e0bc6a" opacity="0.6"/>
                  ))}
                </svg>
              </div>
            </div>

            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="absolute -bottom-6 -right-4 glass-card rounded-2xl p-5 text-center hidden lg:block"
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
