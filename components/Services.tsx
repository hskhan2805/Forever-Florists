"use client";

import { motion } from "framer-motion";

const services = [
  {
    id: 1,
    icon: "💍",
    title: "Wedding Flowers",
    description:
      "Stunning bridal bouquets and ceremony arrangements tailored to your vision. From intimate gatherings to grand celebrations.",
  },
  {
    id: 2,
    icon: "🎉",
    title: "Event Arrangements",
    description:
      "Corporate events, anniversaries, and celebrations. We create the perfect floral backdrop for your special day.",
  },
  {
    id: 3,
    icon: "🎁",
    title: "Gift Baskets",
    description:
      "Curated gift baskets featuring fresh flowers, gourmet chocolates, jewelry, and local artisan products.",
  },
  {
    id: 4,
    icon: "💐",
    title: "Custom Bouquets",
    description:
      "Design your own arrangement or let our experts create something uniquely suited to any occasion.",
  },
  {
    id: 5,
    icon: "✨",
    title: "Luxury Gifts",
    description:
      "Fine jewelry, premium chocolates, and exclusive boutique items for those special moments.",
  },
  {
    id: 6,
    icon: "🚚",
    title: "Same-Day Delivery",
    description:
      "Local delivery available. Call to arrange delivery for last-minute gifts and surprise moments.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 md:py-28 bg-white">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 text-primary-900">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            From weddings to corporate events, we offer comprehensive floral and gift services tailored to your needs.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="card p-8 hover:border-accent-200 cursor-pointer"
            >
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="text-2xl font-display font-bold mb-3 text-primary-900">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
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
            Have a custom request? Let's create something special together!
          </p>
          <a href="tel:+12509622323" className="button-primary text-lg">
            Speak with Our Team
          </a>
        </motion.div>
      </div>
    </section>
  );
}
