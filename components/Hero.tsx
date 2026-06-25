"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-primary-50 via-white to-accent-50">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 right-10 w-72 h-72 bg-accent-200 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-sage-200 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="container-wide relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-4">
              <span className="inline-block px-4 py-2 bg-accent-100 text-accent-700 rounded-full text-sm font-semibold">
                Prince George's Premier Florist
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 text-primary-900">
              Fresh Flowers for <span className="gradient-text">Every Moment</span>
            </h1>

            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Discover exquisite floral arrangements, curated gifts, fine jewelry, and handcrafted chocolates. From weddings to corporate events, we create moments of beauty.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="tel:+12509622323" className="button-primary text-lg">
                Call: (250) 962-2323
              </a>
              <a
                href="https://instagram.com/forever_florists_boutique"
                target="_blank"
                rel="noopener noreferrer"
                className="button-secondary text-lg"
              >
                Follow on Instagram
              </a>
            </div>

            <div className="mt-12 pt-8 border-t border-gray-200">
              <div className="flex items-center gap-2 text-gray-600 mb-3">
                <svg className="w-5 h-5 text-accent-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 10 10.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
                <span className="font-semibold text-gray-900">98% Customer Satisfaction | 33+ Reviews</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-square rounded-3xl bg-gradient-to-br from-accent-400 to-primary-400 overflow-hidden shadow-2xl">
              <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-accent-200 via-pink-100 to-primary-200 relative overflow-hidden">
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="text-8xl"
                >
                  🌹
                </motion.div>
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute top-10 right-10 text-6xl">🌺</div>
                  <div className="absolute bottom-10 left-10 text-5xl">🌸</div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent-300 rounded-2xl opacity-50 blur-xl"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
