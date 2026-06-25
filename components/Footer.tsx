export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-forest-950 border-t border-white/5">
      {/* Top botanical banner */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-rose-500/30 to-transparent" />

      <div className="container-wide py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-full bg-gradient-rose flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C9.5 2 8 4.5 8 4.5S6.5 2 4 2C1.5 2 0 4 0 6c0 4 4 7 8 10 .7.5 1.3 1 2 1.5V20h4v-2.5c.7-.5 1.3-1 2-1.5 4-3 8-6 8-10 0-2-1.5-4-4-4C17.5 2 16 4.5 16 4.5S14.5 2 12 2z"/>
                </svg>
              </div>
              <div>
                <p className="font-display text-xl text-cream font-semibold leading-none">Forever Florists</p>
                <p className="text-xs tracking-widest text-champagne-400 uppercase mt-0.5">Boutique</p>
              </div>
            </div>
            <p className="text-cream/45 text-sm leading-relaxed max-w-xs mb-6">
              Prince George&rsquo;s premier floral boutique, bringing fragrant fresh flowers,
              handcrafted gifts, fine jewellery, and artisan chocolates to every occasion since 2009.
            </p>
            {/* Social */}
            <div className="flex gap-3">
              <a
                href="https://instagram.com/forever_florists_boutique"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 glass-card rounded-full flex items-center justify-center text-cream/50 hover:text-rose-400 transition-colors duration-200"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.057-1.645.069-4.849.069-3.205 0-3.584-.012-4.849-.069-3.259-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.322a1.44 1.44 0 110-2.88 1.44 1.44 0 010 2.88z"/>
                </svg>
              </a>
              <a
                href="https://www.facebook.com/weddings.jewellery.gifts.chocolates.occassions"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 glass-card rounded-full flex items-center justify-center text-cream/50 hover:text-rose-400 transition-colors duration-200"
                aria-label="Facebook"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a
                href="tel:+12509622323"
                className="w-9 h-9 glass-card rounded-full flex items-center justify-center text-cream/50 hover:text-rose-400 transition-colors duration-200"
                aria-label="Phone"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-cream text-sm font-semibold mb-5 tracking-wide">Services</h4>
            <ul className="space-y-3 text-sm text-cream/45">
              {["Wedding Flowers", "Custom Bouquets", "Gift Baskets", "Event Décor", "Fine Jewellery", "Same-Day Delivery"].map((item) => (
                <li key={item}>
                  <a href="#services" className="hover:text-rose-400 transition-colors duration-200">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-cream text-sm font-semibold mb-5 tracking-wide">Get in Touch</h4>
            <ul className="space-y-4 text-sm text-cream/45">
              <li>
                <a href="tel:+12509622323" className="hover:text-rose-400 transition-colors duration-200 flex items-center gap-2">
                  <svg className="w-4 h-4 text-champagne-500 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                  </svg>
                  (250) 962-2323
                </a>
              </li>
              <li>
                <a href="mailto:foreverfloristspg@yahoo.ca" className="hover:text-rose-400 transition-colors duration-200 flex items-center gap-2">
                  <svg className="w-4 h-4 text-champagne-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                  foreverfloristspg@yahoo.ca
                </a>
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 text-champagne-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
                <span>6551 Hart Highway<br/>Prince George, BC V2K 3A4</span>
              </li>
              <li>
                <p className="text-xs text-cream/30 mt-1">Mon–Fri: 10 AM – 5 PM</p>
                <p className="text-xs text-cream/30">Weekends by appointment</p>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-cream/25">
            © {year} Forever Florists Boutique, Prince George, BC. All rights reserved.
          </p>
          <p className="text-xs text-cream/20 italic font-display">
            &ldquo;Where every petal tells a story&rdquo;
          </p>
        </div>
      </div>
    </footer>
  );
}
