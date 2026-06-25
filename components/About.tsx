"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-20 md:py-28 bg-gradient-to-b from-white to-primary-50">
      <div className="container-wide">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-accent-300 to-pink-300 overflow-hidden shadow-xl">
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-accent-100 via-pink-50 to-primary-100 relative">
                  <div className="text-8xl">💐</div>
                  <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-5 right-5 text-5xl">🌹</div>
                    <div className="absolute bottom-5 left-5 text-6xl">🌸</div>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-40 h-40 bg-accent-200 rounded-2xl opacity-40 blur-xl"></div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-primary-900">
              About Forever Florists
            </h2>

            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Since opening our boutique in Prince George, we've been dedicated to creating beautiful, memorable floral experiences for our community.
            </p>

            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Every arrangement is crafted with fresh, premium flowers sourced from trusted suppliers. We believe flowers tell stories and emotions—our job is to help you express yours beautifully.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-accent-100 flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">✨</span>
                </div>
                <div>
                  <h3 className="font-semibold text-primary-900 mb-1">
                    Premium Quality
                  </h3>
                  <p className="text-gray-600">
                    Fresh flowers and curated gifts for every budget and occasion.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-accent-100 flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">🎯</span>
                </div>
                <div>
                  <h3 className="font-semibold text-primary-900 mb-1">
                    Custom Design
                  </h3>
                  <p className="text-gray-600">
                    Let our experts create a bespoke arrangement for your vision.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-accent-100 flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">❤️</span>
                </div>
                <div>
                  <h3 className="font-semibold text-primary-900 mb-1">
                    Personal Touch
                  </h3>
                  <p className="text-gray-600">
                    Every arrangement is made with care and attention to detail.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-gray-200">
              <p className="text-gray-600 text-sm mb-4">
                📍 Located at 6551 Hart Highway, Prince George, BC
              </p>
              <p className="text-gray-600 text-sm">
                ⏰ Monday - Friday, 10:00 AM - 4:00 PM | Weekends by appointment
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
