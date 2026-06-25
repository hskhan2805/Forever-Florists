"use client";

import { motion } from "framer-motion";

const reviews = [
  {
    id: 1,
    name: "Sarah M.",
    role: "Bride — Summer Wedding",
    rating: 5,
    text: "Absolutely stunning. The bridal bouquet and ceremony flowers were beyond anything I imagined. Every detail was perfect and my guests couldn't stop talking about the floral arrangements. Forever Florists made our dream wedding a reality!",
    initial: "S",
  },
  {
    id: 2,
    name: "James T.",
    role: "Corporate Event Manager",
    rating: 5,
    text: "We hired Forever Florists for our annual gala and the table centrepieces were showstoppers. The team was professional, delivered on time, and the arrangements lasted all weekend. Will definitely book again.",
    initial: "J",
  },
  {
    id: 3,
    name: "Emma L.",
    role: "Regular Customer",
    rating: 5,
    text: "This is my go-to shop for fresh flowers in Prince George. The quality is consistently exceptional and the staff genuinely cares about finding the right arrangement for every occasion. A true hidden gem on Hart Highway!",
    initial: "E",
  },
  {
    id: 4,
    name: "David K.",
    role: "Anniversary Surprise",
    rating: 5,
    text: "I called the morning of our anniversary in a panic and they pulled together a gorgeous arrangement and gift basket that same afternoon. My wife was speechless. Incredible service and stunning flowers.",
    initial: "D",
  },
  {
    id: 5,
    name: "Maria R.",
    role: "Mother's Day",
    rating: 5,
    text: "Ordered a custom bouquet with specific flowers my mom loves. They sourced everything and the arrangement was gorgeous. Presentation was beautiful — felt like a luxury florist experience at a very fair price.",
    initial: "M",
  },
  {
    id: 6,
    name: "Kevin B.",
    role: "Funeral Tribute",
    rating: 5,
    text: "During a really difficult time, the team at Forever Florists was incredibly compassionate. The tribute arrangement was dignified and beautiful. They truly go above and beyond for their community.",
    initial: "K",
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="w-4 h-4 text-champagne-400 fill-current" viewBox="0 0 20 20">
          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
        </svg>
      ))}
    </div>
  );
}

export default function Reviews() {
  return (
    <section id="reviews" className="py-24 md:py-32 bg-forest-950 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-rose-500/20 to-transparent" />
      <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-rose-600/5 blur-3xl pointer-events-none" />

      <div className="container-wide relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-xs tracking-widest uppercase text-champagne-400 mb-4">What People Say</p>
          <h2 className="font-display text-5xl md:text-6xl font-light text-cream mb-4">
            Loved by <span className="gradient-rose font-semibold italic">Prince George</span>
          </h2>
          <div className="section-divider mb-6" />
          {/* Aggregate rating */}
          <div className="inline-flex items-center gap-3 px-6 py-3 glass-card rounded-full">
            <StarRating count={5} />
            <span className="text-cream font-semibold">4.9 / 5</span>
            <span className="text-cream/40 text-sm">· 33+ verified reviews</span>
          </div>
        </motion.div>

        {/* Reviews grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, idx) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.08 }}
              viewport={{ once: true }}
              className="glass-card rounded-2xl p-7 flex flex-col gap-4 hover:border-rose-500/20 transition-colors duration-300 group"
            >
              {/* Stars */}
              <StarRating count={review.rating} />

              {/* Quote */}
              <blockquote className="text-cream/65 text-sm leading-relaxed flex-1 italic">
                &ldquo;{review.text}&rdquo;
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-3 pt-3 border-t border-white/8">
                <div className="w-9 h-9 rounded-full bg-gradient-rose flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
                  {review.initial}
                </div>
                <div>
                  <p className="text-cream text-sm font-semibold">{review.name}</p>
                  <p className="text-cream/40 text-xs">{review.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Leave a review nudge */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-14 text-center"
        >
          <p className="text-cream/40 text-sm">
            Had a great experience? Share it on{" "}
            <a
              href="https://www.yelp.ca/biz/forever-florists-prince-george"
              target="_blank"
              rel="noopener noreferrer"
              className="text-champagne-400 hover:text-champagne-300 transition-colors underline-offset-2 underline"
            >
              Yelp
            </a>
            {" "}or{" "}
            <a
              href="https://www.facebook.com/weddings.jewellery.gifts.chocolates.occassions"
              target="_blank"
              rel="noopener noreferrer"
              className="text-champagne-400 hover:text-champagne-300 transition-colors underline-offset-2 underline"
            >
              Facebook
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
