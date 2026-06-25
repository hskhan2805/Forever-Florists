"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const categories = ["All", "Weddings", "Bouquets", "Events", "Gifts"];

const galleryItems = [
  {
    id: 1,
    category: "Weddings",
    title: "Ivory & Blush Bridal Bouquet",
    size: "large",
    gradient: "from-rose-900 via-rose-700 to-rose-400",
    icon: (
      <svg viewBox="0 0 120 120" className="w-full h-full opacity-30" fill="none">
        <circle cx="60" cy="45" r="22" fill="#f49bb5"/>
        <circle cx="60" cy="45" r="12" fill="#e63d6e"/>
        <circle cx="60" cy="45" r="6" fill="#7a1535"/>
        <ellipse cx="40" cy="60" rx="16" ry="10" fill="#5a9464" transform="rotate(-30,40,60)"/>
        <ellipse cx="80" cy="60" rx="16" ry="10" fill="#3d6e45" transform="rotate(30,80,60)"/>
        <path d="M60 65 L60 100" stroke="#3d6e45" strokeWidth="3"/>
        <ellipse cx="60" cy="50" rx="20" ry="24" fill="#cc2a5a" opacity="0.7"/>
        <ellipse cx="42" cy="55" rx="18" ry="20" fill="#a81e49" opacity="0.6" transform="rotate(-20,42,55)"/>
        <ellipse cx="78" cy="55" rx="18" ry="20" fill="#a81e49" opacity="0.6" transform="rotate(20,78,55)"/>
      </svg>
    ),
  },
  {
    id: 2,
    category: "Bouquets",
    title: "Wildflower Garden Mix",
    size: "small",
    gradient: "from-forest-700 via-forest-500 to-champagne-700",
    icon: (
      <svg viewBox="0 0 120 120" className="w-full h-full opacity-25" fill="none">
        {[0, 60, 120, 180, 240, 300].map((angle, i) => (
          <ellipse key={i} cx={60 + 22 * Math.cos((angle * Math.PI) / 180)} cy={55 + 22 * Math.sin((angle * Math.PI) / 180)} rx="10" ry="14" fill={i % 2 === 0 ? "#f49bb5" : "#e0bc6a"} transform={`rotate(${angle}, ${60 + 22 * Math.cos((angle * Math.PI) / 180)}, ${55 + 22 * Math.sin((angle * Math.PI) / 180)})`}/>
        ))}
        <circle cx="60" cy="55" r="10" fill="#e0bc6a"/>
        <path d="M60 75 L60 105" stroke="#3d6e45" strokeWidth="3"/>
      </svg>
    ),
  },
  {
    id: 3,
    category: "Gifts",
    title: "Luxury Hamper with Chocolates",
    size: "small",
    gradient: "from-champagne-800 via-champagne-600 to-rose-800",
    icon: (
      <svg viewBox="0 0 120 120" className="w-full h-full opacity-30" fill="none">
        <rect x="25" y="55" width="70" height="50" rx="5" fill="#8a6310"/>
        <rect x="20" y="45" width="80" height="16" rx="4" fill="#b3841c"/>
        <path d="M60 45 L60 105" stroke="#e0bc6a" strokeWidth="4"/>
        <path d="M20 53 Q60 30 100 53" stroke="#e0bc6a" strokeWidth="4" fill="none"/>
        <circle cx="50" cy="30" r="8" fill="#e63d6e" opacity="0.8"/>
        <circle cx="70" cy="28" r="6" fill="#f49bb5" opacity="0.8"/>
        <circle cx="60" cy="22" r="5" fill="#e63d6e" opacity="0.7"/>
      </svg>
    ),
  },
  {
    id: 4,
    category: "Weddings",
    title: "Ceremony Arch Installation",
    size: "large",
    gradient: "from-forest-900 via-rose-900 to-forest-700",
    icon: (
      <svg viewBox="0 0 120 120" className="w-full h-full opacity-25" fill="none">
        <path d="M20 110 C20 70 20 40 60 20 C100 40 100 70 100 110" stroke="#5a9464" strokeWidth="4" fill="none"/>
        <ellipse cx="35" cy="45" rx="12" ry="8" fill="#e63d6e" transform="rotate(-30,35,45)"/>
        <ellipse cx="25" cy="65" rx="10" ry="7" fill="#f49bb5" transform="rotate(-20,25,65)"/>
        <ellipse cx="85" cy="45" rx="12" ry="8" fill="#cc2a5a" transform="rotate(30,85,45)"/>
        <ellipse cx="95" cy="65" rx="10" ry="7" fill="#e63d6e" transform="rotate(20,95,65)"/>
        <ellipse cx="55" cy="25" rx="9" ry="6" fill="#f49bb5" transform="rotate(-10,55,25)"/>
        <ellipse cx="65" cy="22" rx="8" ry="5" fill="#e63d6e" transform="rotate(10,65,22)"/>
        <circle cx="35" cy="45" r="4" fill="#7a1535"/>
        <circle cx="85" cy="45" r="4" fill="#7a1535"/>
      </svg>
    ),
  },
  {
    id: 5,
    category: "Bouquets",
    title: "Sunflower & Rose Arrangement",
    size: "small",
    gradient: "from-champagne-900 via-rose-800 to-champagne-600",
    icon: (
      <svg viewBox="0 0 120 120" className="w-full h-full opacity-30" fill="none">
        {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
          <ellipse key={i} cx={60 + 20 * Math.cos((angle * Math.PI) / 180)} cy={50 + 20 * Math.sin((angle * Math.PI) / 180)} rx="8" ry="18" fill="#e0bc6a" transform={`rotate(${angle + 90}, ${60 + 20 * Math.cos((angle * Math.PI) / 180)}, ${50 + 20 * Math.sin((angle * Math.PI) / 180)})`} opacity="0.9"/>
        ))}
        <circle cx="60" cy="50" r="12" fill="#b3841c"/>
        <circle cx="60" cy="50" r="6" fill="#5c4209"/>
      </svg>
    ),
  },
  {
    id: 6,
    category: "Events",
    title: "Corporate Table Centrepieces",
    size: "small",
    gradient: "from-forest-800 via-forest-600 to-rose-900",
    icon: (
      <svg viewBox="0 0 120 120" className="w-full h-full opacity-25" fill="none">
        <ellipse cx="60" cy="95" rx="30" ry="8" fill="#122418"/>
        <path d="M30 95 L45 50" stroke="#3d6e45" strokeWidth="2"/>
        <path d="M90 95 L75 50" stroke="#3d6e45" strokeWidth="2"/>
        <path d="M60 95 L60 40" stroke="#3d6e45" strokeWidth="2"/>
        <circle cx="45" cy="45" r="15" fill="#e63d6e" opacity="0.8"/>
        <circle cx="75" cy="45" r="12" fill="#cc2a5a" opacity="0.8"/>
        <circle cx="60" cy="35" r="14" fill="#f49bb5" opacity="0.9"/>
        <circle cx="45" cy="45" r="6" fill="#7a1535"/>
        <circle cx="75" cy="45" r="5" fill="#7a1535"/>
        <circle cx="60" cy="35" r="6" fill="#a81e49"/>
      </svg>
    ),
  },
];

export default function Gallery() {
  const [active, setActive] = useState("All");

  const filtered = active === "All" ? galleryItems : galleryItems.filter((g) => g.category === active);

  return (
    <section id="gallery" className="py-24 md:py-32 bg-forest-900 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-champagne-600/20 to-transparent" />
      <div className="absolute -bottom-20 right-0 w-96 h-96 rounded-full bg-champagne-700/5 blur-3xl pointer-events-none" />

      <div className="container-wide relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="text-xs tracking-widest uppercase text-champagne-400 mb-4">Our Work</p>
          <h2 className="font-display text-5xl md:text-6xl font-light text-cream mb-5">
            Floral <span className="gradient-gold font-semibold italic">Portfolio</span>
          </h2>
          <div className="section-divider mb-5" />
          <p className="text-cream/50 text-lg max-w-xl mx-auto">
            Each creation is a unique work of art, crafted with seasonal blooms and passion.
          </p>
        </motion.div>

        {/* Filter pills */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                active === cat
                  ? "bg-gradient-rose text-white shadow-glow-rose"
                  : "glass-card text-cream/60 hover:text-cream"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 auto-rows-[200px]">
          {filtered.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.92 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: idx * 0.07 }}
              viewport={{ once: true }}
              className={`group relative overflow-hidden rounded-2xl cursor-pointer ${
                item.size === "large" ? "row-span-2" : "row-span-1"
              }`}
            >
              {/* Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} transition-transform duration-700 group-hover:scale-105`} />

              {/* SVG illustration */}
              <div className="absolute inset-0 flex items-center justify-center">
                {item.icon}
              </div>

              {/* Noise texture */}
              <div className="absolute inset-0 opacity-10" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.4'/%3E%3C/svg%3E")`
              }} />

              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-forest-950/90 via-forest-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-400" />

              {/* Caption */}
              <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <span className="text-xs text-champagne-400 font-medium tracking-wide uppercase">{item.category}</span>
                <p className="font-display text-lg text-cream leading-tight mt-1">{item.title}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Instagram CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-14 text-center"
        >
          <p className="text-cream/40 text-sm mb-5">
            See fresh creations every week on our Instagram
          </p>
          <a
            href="https://instagram.com/forever_florists_boutique"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline inline-flex"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.057-1.645.069-4.849.069-3.205 0-3.584-.012-4.849-.069-3.259-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z"/>
            </svg>
            @forever_florists_boutique
          </a>
        </motion.div>
      </div>
    </section>
  );
}
