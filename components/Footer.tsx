export default function Footer() {
  return (
    <footer className="bg-primary-900 text-white">
      <div className="container-wide py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-display font-semibold mb-4">
              Forever Florists
            </h3>
            <p className="text-primary-200 text-sm leading-relaxed">
              Premium fresh flowers and curated gifts for every occasion in Prince George.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-primary-200">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Wedding Flowers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Event Arrangements
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Corporate Gifts
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Custom Bouquets
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-primary-200">
              <li>
                <a
                  href="tel:+12509622323"
                  className="hover:text-white transition-colors"
                >
                  (250) 962-2323
                </a>
              </li>
              <li>
                <a
                  href="mailto:foreverfloristspg@yahoo.ca"
                  className="hover:text-white transition-colors"
                >
                  foreverfloristspg@yahoo.ca
                </a>
              </li>
              <li>6551 Hart Highway</li>
              <li>Prince George, BC</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Hours</h4>
            <ul className="space-y-2 text-sm text-primary-200">
              <li>Monday - Friday</li>
              <li>10:00 AM - 4:00 PM</li>
              <li className="pt-2">
                <span className="text-accent-400">Weekends by appointment</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-800 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-primary-200">
              © {new Date().getFullYear()} Forever Florists Boutique. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a
                href="https://instagram.com/forever_florists_boutique"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-200 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.057-1.645.069-4.849.069-3.205 0-3.584-.012-4.849-.069-3.259-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.322a1.44 1.44 0 110-2.88 1.44 1.44 0 010 2.88z" />
                </svg>
              </a>
              <a
                href="https://facebook.com/weddings.jewellery.gifts.chocolates.occassions"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-200 hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
