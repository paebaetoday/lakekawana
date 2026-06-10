import Link from "next/link";
import { TRIP_AFFILIATE_URL } from "@/lib/affiliate";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <h3 className="text-xl font-bold mb-2">
              <span className="text-[var(--accent)]">Lake Kawana</span> Hotel
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Premium lakeside accommodation on Queensland&apos;s beautiful
              Sunshine Coast.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="/rooms" className="hover:text-[var(--accent)] transition-colors">
                  Rooms & Suites
                </Link>
              </li>
              <li>
                <Link href="/dining" className="hover:text-[var(--accent)] transition-colors">
                  Dining
                </Link>
              </li>
              <li>
                <Link href="/location" className="hover:text-[var(--accent)] transition-colors">
                  Location
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[var(--accent)] transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">
              Contact
            </h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Florey Blvd</li>
              <li>Birtinya, QLD 4575</li>
              <li>Sunshine Coast, Australia</li>
            </ul>
          </div>

          {/* Book */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">
              Book Your Stay
            </h4>
            <p className="text-gray-400 text-sm mb-4">
              Get the best rates on your Sunshine Coast getaway.
            </p>
            <a
              href={TRIP_AFFILIATE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[var(--accent)] hover:bg-[var(--accent-dark)] text-white font-bold px-6 py-3 rounded-lg text-sm transition-colors"
            >
              Check Availability
            </a>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-8 text-center text-gray-500 text-xs">
          <p>&copy; {new Date().getFullYear()} Lake Kawana Hotel. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
