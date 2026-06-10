import BookingWidget from "@/components/BookingWidget";
import Link from "next/link";
import { TRIP_AFFILIATE_URL } from "@/lib/affiliate";

// Photo grid images - actual Lake Kawana Hotel / Mercure Sunshine Coast Kawana Waters
const galleryImages = {
  hero: "/images/lake-aerial.jpg",
  topRight: [
    "/images/hotel-lakefront.jpg",
    "/images/hotel-exterior.jpg",
    "/images/room-king.jpg",
  ],
  bottomRight: [
    "/images/conference.jpg",
    "/images/room-bedroom.jpg",
    "/images/dining.jpg",
  ],
};

const amenities = [
  {
    icon: (
      <svg className="w-10 h-10 text-[var(--accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "24HR Full Service",
    desc: "Round-the-clock reception and guest services",
  },
  {
    icon: (
      <svg className="w-10 h-10 text-[var(--accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
      </svg>
    ),
    title: "Restaurant & Bar",
    desc: "Lakeside dining with stunning water views",
  },
  {
    icon: (
      <svg className="w-10 h-10 text-[var(--accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.858 15.355-5.858 21.213 0" />
      </svg>
    ),
    title: "Free High Speed WiFi",
    desc: "Complimentary WiFi throughout the hotel",
  },
  {
    icon: (
      <svg className="w-10 h-10 text-[var(--accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 12H4m0 0V8a4 4 0 014-4h8a4 4 0 014 4v4M4 12v4a2 2 0 002 2h12a2 2 0 002-2v-4" />
      </svg>
    ),
    title: "Luxury Beds",
    desc: "Premium pillow-top mattresses for perfect sleep",
  },
  {
    icon: (
      <svg className="w-10 h-10 text-[var(--accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: "Flat Screen TV",
    desc: "Large TV with free Foxtel and movies",
  },
  {
    icon: (
      <svg className="w-10 h-10 text-[var(--accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
      </svg>
    ),
    title: "Conference Facilities",
    desc: "Modern event and meeting spaces available",
  },
];

const rooms = [
  {
    name: "Standard Queen Room",
    desc: "Comfortable room with queen bed, work desk, and modern amenities. Perfect for business or leisure.",
    price: "From $149/night",
    img: "/images/room-bedroom.jpg",
  },
  {
    name: "Deluxe King Room",
    desc: "Spacious room with king bed, lounge area, and stunning lake views. Ideal for couples.",
    price: "From $179/night",
    img: "/images/room-king.jpg",
  },
  {
    name: "Family Suite",
    desc: "Two-bedroom suite with separate living area, kitchenette, and space for the whole family.",
    price: "From $249/night",
    img: "/images/conference.jpg",
  },
];

export default function Home() {
  return (
    <>
      {/* Hotel Title Bar */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
            <div>
              <div className="flex items-center gap-3 mb-1">
                <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
                  Lake Kawana Hotel
                </h1>
                <div className="flex items-center gap-0.5">
                  {[1, 2, 3, 4].map((s) => (
                    <svg key={s} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <div className="flex items-center gap-2 text-gray-400 text-sm">
                <svg className="w-4 h-4 text-[var(--accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Florey Blvd, Birtinya, Sunshine Coast, QLD 4575</span>
                <a href="/location" className="text-[var(--accent)] hover:underline ml-1 font-medium">Show on map</a>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="hidden md:flex items-center gap-2 text-sm text-gray-500">
                <svg className="w-5 h-5 text-[var(--accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                We Price Match
              </div>
              <a
                href={TRIP_AFFILIATE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[var(--accent)] hover:bg-[var(--accent-dark)] text-white font-bold px-7 py-3 rounded-lg text-sm transition-colors shadow-sm"
              >
                Book Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Photo Gallery Grid */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-1.5 rounded-2xl overflow-hidden relative">
            {/* Large hero image - spans 2 cols and 2 rows */}
            <a
              href={TRIP_AFFILIATE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="md:col-span-2 md:row-span-2 relative group"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={galleryImages.hero}
                alt="Lake Kawana aerial view - lakeside hotel with bridge"
                className="w-full h-[300px] md:h-full object-cover group-hover:brightness-95 transition-all"
              />
            </a>

            {/* Top right images */}
            {galleryImages.topRight.map((img, i) => (
              <a
                key={`top-${i}`}
                href={TRIP_AFFILIATE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden md:block relative group"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={img}
                  alt={`Lake Kawana Hotel photo ${i + 2}`}
                  className="w-full h-[200px] object-cover group-hover:brightness-95 transition-all"
                />
              </a>
            ))}

            {/* Bottom right images */}
            {galleryImages.bottomRight.map((img, i) => (
              <a
                key={`bottom-${i}`}
                href={TRIP_AFFILIATE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden md:block relative group"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={img}
                  alt={`Lake Kawana Hotel photo ${i + 5}`}
                  className="w-full h-[200px] object-cover group-hover:brightness-95 transition-all"
                />
                {/* "See all photos" overlay on last image */}
                {i === 2 && (
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/50 transition-all">
                    <div className="text-white text-center">
                      <svg className="w-7 h-7 mx-auto mb-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <span className="font-semibold">See all 91 photos</span>
                    </div>
                  </div>
                )}
              </a>
            ))}

            {/* Mobile "See all photos" button */}
            <a
              href={TRIP_AFFILIATE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="md:hidden absolute bottom-4 right-4 bg-white text-gray-800 font-semibold px-4 py-2 rounded-full shadow-lg text-sm flex items-center gap-2 hover:bg-gray-50 transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              See all 91 photos
            </a>
          </div>
        </div>
      </section>

      {/* Main Content: Info + Booking Widget side by side */}
      <section className="bg-white py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-10">
            {/* Left: Hotel Info */}
            <div className="lg:col-span-2 space-y-10">
              {/* Quick Icons Bar */}
              <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
                {amenities.map((a, i) => (
                  <div key={i} className="border border-gray-100 rounded-xl p-4 text-center hover:border-[var(--accent-light)] hover:bg-[var(--accent-light)] transition-all">
                    <div className="flex justify-center mb-2">{a.icon}</div>
                    <p className="font-medium text-xs text-gray-700">{a.title}</p>
                  </div>
                ))}
              </div>

              {/* About */}
              <div className="border-t border-gray-100 pt-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  About Lake Kawana Hotel
                </h2>
                <p className="text-gray-500 leading-relaxed mb-4">
                  Nestled on the shores of beautiful Lake Kawana in Birtinya,
                  Queensland, Lake Kawana Hotel offers the perfect blend of modern comfort
                  and lakeside tranquility on the Sunshine Coast. Formerly the Best Western Plus,
                  the hotel has been extensively refurbished and now operates as a premium
                  lakeside destination.
                </p>
                <p className="text-gray-500 leading-relaxed mb-4">
                  Whether you&apos;re visiting for business or leisure, our
                  contemporary rooms, on-site restaurant and bar with stunning lake
                  views, and convenient location near the Sunshine Coast University
                  Hospital make us your ideal home away from home.
                </p>
                <p className="text-gray-500 leading-relaxed">
                  Located just minutes from Mooloolaba Beach, Australia Zoo, and
                  the vibrant Sunshine Coast hinterland, Lake Kawana Hotel is
                  perfectly positioned for exploring everything the region has to
                  offer.
                </p>
              </div>

              {/* Rooms Preview */}
              <div className="border-t border-gray-100 pt-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Rooms & Suites
                </h2>
                <div className="grid md:grid-cols-3 gap-5">
                  {rooms.map((room, i) => (
                    <a
                      key={i}
                      href={TRIP_AFFILIATE_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="border border-gray-100 rounded-2xl overflow-hidden hover:shadow-lg transition-all group"
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={room.img}
                        alt={room.name}
                        className="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="p-5">
                        <h3 className="font-bold text-gray-900 mb-1">{room.name}</h3>
                        <p className="text-gray-400 text-xs mb-3 line-clamp-2">{room.desc}</p>
                        <div className="flex items-center justify-between">
                          <span className="text-gray-900 font-bold text-sm">{room.price}</span>
                          <span className="text-[var(--accent)] text-xs font-semibold group-hover:underline">
                            View Deal &rarr;
                          </span>
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
                <div className="text-center mt-6">
                  <Link
                    href="/rooms"
                    className="text-[var(--accent)] font-semibold hover:underline"
                  >
                    View all room types &rarr;
                  </Link>
                </div>
              </div>
            </div>

            {/* Right: Sticky Booking Widget */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <BookingWidget />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Stay With Us */}
      <section className="py-16 bg-[var(--gray-light)] border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-2xl md:text-3xl font-bold text-gray-900 mb-10">
            Why Stay With Us
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {amenities.map((a, i) => (
              <div key={i} className="flex items-start gap-4 bg-white rounded-xl p-6 border border-gray-100">
                <div className="flex-shrink-0">{a.icon}</div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">{a.title}</h3>
                  <p className="text-gray-400 text-sm">{a.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-gradient-to-r from-[var(--accent)] to-[var(--accent-dark)] py-16">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready for Your Sunshine Coast Getaway?
          </h2>
          <p className="text-white/80 text-lg mb-8">
            Book your stay at Lake Kawana Hotel today and experience the best of
            lakeside living.
          </p>
          <a
            href={TRIP_AFFILIATE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white hover:bg-gray-50 text-[var(--accent)] font-bold px-10 py-4 rounded-lg text-lg transition-colors shadow-lg"
          >
            Book Your Stay
          </a>
        </div>
      </section>
    </>
  );
}
