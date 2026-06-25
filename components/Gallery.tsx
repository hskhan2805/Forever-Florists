"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const categories = ["All", "Weddings", "Bouquets", "Events", "Gifts"] as const;
type Category = (typeof categories)[number];

const items: {
  id: number;
  category: Category;
  title: string;
  subtitle: string;
  photo: string;
  span?: string;
  imgPos?: string;
}[] = [
  {
    id: 1,
    category: "Weddings",
    title: "Bridal Bouquet",
    subtitle: "Romantic blush & ivory",
    photo: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=800&q=85",
    span: "row-span-2",
    imgPos: "object-center",
  },
  {
    id: 2,
    category: "Bouquets",
    title: "Fresh Roses",
    subtitle: "Hand-picked daily",
    photo: "https://images.unsplash.com/photo-1563241527-3004b1fd2e4e?auto=format&fit=crop&w=800&q=85",
    imgPos: "object-center",
  },
  {
    id: 3,
    category: "Events",
    title: "Table Centrepiece",
    subtitle: "Corporate & gala events",
    photo: "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?auto=format&fit=crop&w=800&q=85",
    imgPos: "object-center",
  },
  {
    id: 4,
    category: "Bouquets",
    title: "Seasonal Mix",
    subtitle: "Spring & summer blooms",
    photo: "https://images.unsplash.com/photo-1525310072745-f49212b5ac6d?auto=format&fit=crop&w=800&q=85",
    span: "row-span-2",
    imgPos: "object-center",
  },
  {
    id: 5,
    category: "Gifts",
    title: "Luxury Gift Basket",
    subtitle: "Flowers, chocolates & more",
    photo: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=800&q=85",
    imgPos: "object-center",
  },
  {
    id: 6,
    category: "Weddings",
    title: "Ceremony Arch",
    subtitle: "Full floral installation",
    photo: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=800&q=85",
    imgPos: "object-top",
  },
  {
    id: 7,
    category: "Bouquets",
    title: "Red Rose Bouquet",
    subtitle: "Classic & timeless",
    photo: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=85",
    imgPos: "object-center",
  },
  {
    id: 8,
    category: "Gifts",
    title: "Artisan Chocolates",
    subtitle: "Local Prince George makers",
    photo: "https://images.unsplash.com/photo-1481391319762-47dff72954d9?auto=format&fit=crop&w=800&q=85",
    imgPos: "object-center",
  },
  {
    id: 9,
    category: "Events",
    title: "Wedding Reception",
    subtitle: "Full venue styling",
    photo: "https://images.unsplash.com/photo-1478146059778-26028b07395a?auto=format&fit=crop&w=800&q=85",
    imgPos: "object-center",
  },
];

export default function Gallery() {
  const [active, setActive] = useState<Category>("All");

  const filtered = active === "All" ? items : items.filter((i) => i.category === active);

  return (
    <section id="gallery" className="py-24 md:py-32 bg-forest-900 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-rose-500/20 to-transparent" />
      <div className="absolute top-20 right-0 w-96 h-96 rounded-full bg-champagne-700/5 blur-3xl pointer-events-none" />

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
          <h2 className="font-display text-5xl md:text-6xl font-light text-cream mb-4">
            Floral <span className="gradient-gold font-semibold italic">Gallery</span>
          </h2>
          <div className="section-divider mb-8" />

          {/* Filter pills */}
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  active === cat
                    ? "bg-gradient-rose text-white shadow-glow-rose"
                    : "glass-card text-cream/60 hover:text-cream hover:border-rose-500/30"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Masonry grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 auto-rows-[220px]">
          <AnimatePresence>
            {filtered.map((item, idx) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className={`relative rounded-2xl overflow-hidden group cursor-pointer ${item.span ?? ""}`}
              >
                <Image
                  src={item.photo}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 50vw, 33vw"
                  className={`object-cover transition-transform duration-700 group-hover:scale-110 ${item.imgPos ?? "object-center"}`}
                />
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-forest-950/90 via-forest-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
                {/* Category tag */}
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 text-xs font-semibold rounded-full bg-forest-950/60 backdrop-blur-sm text-champagne-400 border border-champagne-700/30">
                    {item.category}
                  </span>
                </div>
                {/* Caption */}
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-400">
                  <p className="text-cream font-semibold text-sm">{item.title}</p>
                  <p className="text-cream/60 text-xs mt-0.5">{item.subtitle}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Instagram CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-14 text-center"
        >
          <p className="text-cream/40 text-sm mb-4">See new creations every week</p>
          <a
            href="https://instagram.com/forever_florists_boutique"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline inline-flex items-center gap-2 text-sm px-8 py-3"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.057-1.645.069-4.849.069-3.205 0-3.584-.012-4.849-.069-3.259-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.322a1.44 1.44 0 110-2.88 1.44 1.44 0 010 2.88z"/>
            </svg>
            Follow @forever_florists_boutique
          </a>
        </motion.div>
      </div>
    </section>
  );
}
