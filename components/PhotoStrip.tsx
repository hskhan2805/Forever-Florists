"use client";

import { motion } from "framer-motion";

const photos = [
  {
    src: "https://images.unsplash.com/photo-1444021465936-c6ca81d39b84?auto=format&fit=crop&w=600&q=80",
    alt: "Pink blush bouquet",
  },
  {
    src: "https://images.unsplash.com/photo-1455659817273-f96807779a8a?auto=format&fit=crop&w=600&q=80",
    alt: "Fresh roses close-up",
  },
  {
    src: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=600&q=80",
    alt: "Bridal wedding bouquet",
  },
  {
    src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=600&q=80",
    alt: "Red rose arrangement",
  },
  {
    src: "https://images.unsplash.com/photo-1525310072745-f49212b5ac6d?auto=format&fit=crop&w=600&q=80",
    alt: "Colorful spring bouquet",
  },
  {
    src: "https://images.unsplash.com/photo-1463936575829-25148e1db1b8?auto=format&fit=crop&w=600&q=80",
    alt: "Flower arrangement in vase",
  },
  {
    src: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=600&q=80",
    alt: "Wedding ceremony flowers",
  },
  {
    src: "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?auto=format&fit=crop&w=600&q=80",
    alt: "Event table centrepiece",
  },
];

export default function PhotoStrip() {
  return (
    <div className="relative bg-forest-950 py-10 overflow-hidden">
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-forest-950 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-forest-950 to-transparent z-10 pointer-events-none" />

      <div className="flex gap-4 animate-marquee whitespace-nowrap" style={{ animationDuration: "40s" }}>
        {[...photos, ...photos].map((photo, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.04, zIndex: 10 }}
            transition={{ duration: 0.3 }}
            className="relative flex-shrink-0 w-64 h-40 rounded-xl overflow-hidden border border-white/5 shadow-card-dark"
          >
            {/* Plain img for direct CDN load — no Next.js proxy */}
            <img
              src={photo.src}
              alt={photo.alt}
              loading="lazy"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-forest-950/40 to-transparent" />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
