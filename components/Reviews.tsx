"use client";

import { motion } from "framer-motion";

const reviews = [
  {
    id: 1,
    name: "Sarah M.",
    role: "Wedding Client",
    rating: 5,
    text: "Forever Florists created the most beautiful bridal bouquet and ceremony flowers. Our wedding day was absolutely perfect. Highly recommend!",
  },
  {
    id: 2,
    name: "James T.",
    role: "Corporate Client",
    rating: 5,
    text: "Stunning table arrangements for our corporate event. The team understood our vision perfectly and delivered beyond expectations.",
  },
  {
    id: 3,
    name: "Emma L.",
    role: "Regular Customer",
    rating: 5,
    text: "I always come here for fresh flowers. The quality is exceptional and the staff is incredibly helpful. A true gem in Prince George!",
  },
  {
    id: 4,
    name: "David K.",
    role: "Anniversary Gift",
    rating: 5,
    text: "Surprised my wife with a beautiful arrangement and gift basket. She loved it. Great service and attention to detail.",
  },
];

export default function Reviews() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 text-primary-900">
            Customer Reviews
          </h2>
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className="w-6 h-6 text-accent-600 fill-current"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                </svg>
              ))}
            </div>
            <span className="text-gray-600 font-semibold">
              4.9/5 (33+ Reviews)
            </span>
          </div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Join hundreds of satisfied customers who trust us with their special moments.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reviews.map((review, idx) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="card p-8"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-accent-600 fill-current"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>

              <p className="text-gray-700 mb-6 leading-relaxed italic">
                "{review.text}"
              </p>

              <div className="border-t border-gray-100 pt-4">
                <p className="font-semibold text-primary-900">{review.name}</p>
                <p className="text-sm text-gray-600">{review.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
