import { TRIP_AFFILIATE_URL } from "@/lib/affiliate";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Lake Kawana Hotel",
  description:
    "Contact Lake Kawana Hotel for reservations and enquiries. Located on Florey Blvd, Birtinya QLD 4575 on the Sunshine Coast.",
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[40vh] flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=1920&q=80')",
          }}
        >
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-2">Contact Us</h1>
          <p className="text-xl opacity-80">We&apos;d love to hear from you</p>
        </div>
      </section>

      {/* Contact Details */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold text-[var(--primary)] mb-8">
                Get in Touch
              </h2>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[var(--primary)] rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800">Address</h3>
                    <p className="text-gray-600">
                      Florey Blvd<br />
                      Birtinya, QLD 4575<br />
                      Sunshine Coast, Australia
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[var(--primary)] rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800">Email</h3>
                    <p className="text-gray-600">
                      <a href="mailto:info@lakekawanahotel.com.au" className="hover:text-[var(--primary)] transition-colors">
                        info@lakekawanahotel.com.au
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[var(--primary)] rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800">Reception Hours</h3>
                    <p className="text-gray-600">24 hours, 7 days a week</p>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="mt-8 rounded-lg overflow-hidden shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3546.5!2d153.1167432!3d-26.7461032!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b939e871ecfede3%3A0x93e4612e41cd1777!2sMercure%20Sunshine%20Coast%20Kawana%20Waters!5e0!3m2!1sen!2sau!4v1"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Lake Kawana Hotel Location"
                />
              </div>

              <div className="mt-8 p-6 bg-[var(--primary)] rounded-lg text-white">
                <h3 className="text-xl font-bold mb-3">Book Direct for Best Rates</h3>
                <p className="text-gray-200 text-sm mb-4">
                  Get the best available rates when you book direct.
                </p>
                <a
                  href={TRIP_AFFILIATE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-[var(--accent)] hover:bg-[var(--accent-dark)] text-white font-bold px-8 py-3 rounded-lg text-sm transition-colors"
                >
                  Book Now
                </a>
              </div>
            </div>

            {/* Enquiry Form (static - no backend) */}
            <div>
              <h2 className="text-3xl font-bold text-[var(--primary)] mb-8">
                Send an Enquiry
              </h2>
              <form className="space-y-6" onSubmit={undefined}>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] transition-colors"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] transition-colors"
                  >
                    <option value="">Select a subject</option>
                    <option value="reservation">Reservation Enquiry</option>
                    <option value="group">Group Booking</option>
                    <option value="events">Events & Functions</option>
                    <option value="dining">Restaurant & Dining</option>
                    <option value="general">General Enquiry</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] transition-colors resize-none"
                    placeholder="How can we help you?"
                  />
                </div>
                <button
                  type="button"
                  className="w-full bg-[var(--accent)] hover:bg-[var(--accent-dark)] text-white font-bold py-3 rounded-lg text-sm transition-colors"
                >
                  Send Enquiry
                </button>
                <p className="text-xs text-gray-400 text-center">
                  We typically respond within 24 hours during business days.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
