"use client";

import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-10 right-20 w-96 h-96 bg-accent-300 rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute -bottom-20 left-20 w-96 h-96 bg-sage-300 rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>

      <div className="container-wide relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="card-elevated p-12 md:p-16 text-center max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-primary-900">
            Ready to Order?
          </h2>

          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Whether it's a special occasion or just because, we're here to make your moment beautiful. Get in touch with us today!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a href="tel:+12509622323" className="button-primary text-lg">
              📞 Call: (250) 962-2323
            </a>
            <a
              href="mailto:foreverfloristspg@yahoo.ca"
              className="button-secondary text-lg"
            >
              ✉️ Email Us
            </a>
          </div>

          <div className="border-t border-gray-200 pt-8">
            <p className="text-gray-600 mb-4 font-semibold">
              Visit us in person or check out our latest creations
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="text-sm text-gray-600">
                <p className="font-semibold text-primary-900 mb-1">Location</p>
                <p>6551 Hart Highway</p>
                <p>Prince George, BC</p>
              </div>

              <div className="border-l border-gray-200"></div>

              <div className="text-sm text-gray-600">
                <p className="font-semibold text-primary-900 mb-1">Hours</p>
                <p>Mon-Fri: 10 AM - 4 PM</p>
                <p>Weekends: By Appointment</p>
              </div>

              <div className="border-l border-gray-200"></div>

              <a
                href="https://instagram.com/forever_florists_boutique"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center text-sm text-gray-600 hover:text-accent-600 transition-colors"
              >
                <p className="font-semibold text-primary-900 mb-1">Follow Us</p>
                <p>@forever_florists_boutique</p>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
