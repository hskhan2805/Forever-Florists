"use client";

import { motion } from "framer-motion";

const galleryItems = [
  {
    id: 1,
    category: "Weddings",
    title: "Elegant Bridal Bouquet",
    emoji: "🌹🌷💕",
  },
  {
    id: 2,
    category: "Events",
    title: "Corporate Table Arrangement",
    emoji: "🌺🌻💐",
  },
  {
    id: 3,
    category: "Gifts",
    title: "Luxury Gift Basket",
    emoji: "🎁✨💝",
  },
  {
    id: 4,
    category: "Weddings",
    title: "Romantic Centerpiece",
    emoji: "🌹💒🌸",
  },
  {
    id: 5,
    category: "Daily",
    title: "Fresh Garden Bouquet",
    emoji: "🌻🌼🌷",
  },
  {
    id: 6,
    category: "Events",
    title: "Grand Wedding Installation",
    emoji: "💐🌹✨🎊",
  },
];

export default function Gallery() {
  return (
    <section
      id="gallery"
      className="py-20 md:py-28 bg-gradient-to-b from-primary-50 to-white"
    >
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 text-primary-900">
            Our Portfolio
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore our beautiful creations. Each arrangement is crafted with love and attention to detail.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-2xl aspect-square cursor-pointer"
            >
              <div className="w-full h-full bg-gradient-to-br from-accent-200 via-pink-100 to-primary-200 flex items-center justify-center relative overflow-hidden">
                <div className="text-7xl text-center drop-shadow-lg">
                  {item.emoji}
                </div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-end p-6">
                  <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 text-white">
                    <p className="text-xs font-semibold text-accent-200 mb-1">
                      {item.category}
                    </p>
                    <h3 className="text-lg font-display font-bold">
                      {item.title}
                    </h3>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-gray-600 mb-4">
            See more of our work on Instagram @forever_florists_boutique
          </p>
          <a
            href="https://instagram.com/forever_florists_boutique"
            target="_blank"
            rel="noopener noreferrer"
            className="button-secondary text-lg"
          >
            Follow Our Instagram
          </a>
        </motion.div>
      </div>
    </section>
  );
}
