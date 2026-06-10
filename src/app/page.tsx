import BookingWidget from "@/components/BookingWidget";
import Link from "next/link";
import { TRIP_AFFILIATE_URL } from "@/lib/affiliate";

const amenities = [
  {
    icon: (
      <svg className="w-16 h-16 mx-auto text-[var(--primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "24HR Full Service Hotel",
  },
  {
    icon: (
      <svg className="w-16 h-16 mx-auto text-[var(--primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
      </svg>
    ),
    title: "Restaurant & Bar with Lakeside Views",
  },
  {
    icon: (
      <svg className="w-16 h-16 mx-auto text-[var(--primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.858 15.355-5.858 21.213 0" />
      </svg>
    ),
    title: "Free High Speed WiFi",
  },
  {
    icon: (
      <svg className="w-16 h-16 mx-auto text-[var(--primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 12H4m0 0V8a4 4 0 014-4h8a4 4 0 014 4v4M4 12v4a2 2 0 002 2h12a2 2 0 002-2v-4" />
      </svg>
    ),
    title: "Luxury Pillow Top Beds",
  },
  {
    icon: (
      <svg className="w-16 h-16 mx-auto text-[var(--primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: "Large Flat Screen TV with Free Foxtel & Movies",
  },
];

const rooms = [
  {
    name: "Standard Queen Room",
    desc: "Comfortable room with queen bed, work desk, and modern amenities. Perfect for business or leisure.",
    price: "From $149/night",
    img: "photo-1631049307264-da0ec9d70304",
  },
  {
    name: "Deluxe King Room",
    desc: "Spacious room with king bed, lounge area, and stunning lake views. Ideal for couples.",
    price: "From $179/night",
    img: "photo-1590490360182-c33d57733427",
  },
  {
    name: "Family Suite",
    desc: "Two-bedroom suite with separate living area, kitchenette, and space for the whole family.",
    price: "From $249/night",
    img: "photo-1582719478250-c89cae4dc85b",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=1920&q=80')",
          }}
        >
          <div className="absolute inset-0 bg-black/30" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20">
          <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-12">
            <div className="text-white max-w-xl text-center lg:text-left">
              <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
                Lake Kawana
                <br />
                <span className="text-[var(--gold)]">Hotel</span>
              </h1>
              <p className="text-xl md:text-2xl font-light mb-6 opacity-90">
                Sunshine Coast Accommodation
              </p>
              <p className="text-lg opacity-80 leading-relaxed">
                Experience lakeside luxury in the heart of the Sunshine Coast.
                Modern rooms, stunning views, and world-class hospitality.
              </p>
            </div>
            <BookingWidget />
          </div>
        </div>
      </section>

      {/* Why Stay With Us */}
      <section>
        <div className="bg-[var(--primary)] py-6">
          <h2 className="text-center text-white text-2xl md:text-3xl font-bold uppercase tracking-wider">
            Why Stay With Us
          </h2>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 text-center">
            {amenities.map((a, i) => (
              <div key={i} className="space-y-4">
                {a.icon}
                <p className="font-bold text-sm uppercase tracking-wide text-gray-700">
                  {a.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--primary)] mb-6">
                Lake Kawana Hotel
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Nestled on the shores of beautiful Lake Kawana in Birtinya,
                Queensland, our hotel offers the perfect blend of modern comfort
                and lakeside tranquility on the Sunshine Coast.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Whether you&apos;re visiting for business or leisure, our
                contemporary rooms, on-site restaurant and bar with stunning lake
                views, and convenient location near the Sunshine Coast University
                Hospital make us your ideal home away from home.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Located just minutes from Mooloolaba Beach, Australia Zoo, and
                the vibrant Sunshine Coast hinterland, Lake Kawana Hotel is
                perfectly positioned for exploring everything the region has to
                offer.
              </p>
              <a
                href={TRIP_AFFILIATE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white font-bold px-8 py-3 rounded text-sm uppercase tracking-wider transition-colors"
              >
                Book Your Stay
              </a>
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80"
                alt="Lake Kawana Hotel exterior"
                className="w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Rooms Preview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[var(--primary)] mb-4">
            Our Rooms & Suites
          </h2>
          <p className="text-center text-gray-500 mb-12 max-w-2xl mx-auto">
            Choose from our range of beautifully appointed rooms, each designed
            for maximum comfort with modern amenities.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {rooms.map((room, i) => (
              <div
                key={i}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`https://images.unsplash.com/${room.img}?w=600&q=80`}
                  alt={room.name}
                  className="w-full h-56 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[var(--primary)] mb-2">
                    {room.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">{room.desc}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-[var(--gold-dark)] font-bold">
                      {room.price}
                    </span>
                    <a
                      href={TRIP_AFFILIATE_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[var(--primary)] font-semibold text-sm hover:underline"
                    >
                      Book Now &rarr;
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/rooms"
              className="inline-block bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white font-bold px-8 py-3 rounded text-sm uppercase tracking-wider transition-colors"
            >
              View All Rooms
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-[var(--primary)] py-16">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready for Your Sunshine Coast Getaway?
          </h2>
          <p className="text-gray-200 text-lg mb-8">
            Book your stay at Lake Kawana Hotel today and experience the best of
            lakeside living.
          </p>
          <a
            href={TRIP_AFFILIATE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[var(--gold)] hover:bg-[var(--gold-dark)] text-[var(--primary-dark)] font-bold px-10 py-4 rounded-lg text-lg uppercase tracking-wider transition-colors"
          >
            Book Now on Trip.com
          </a>
        </div>
      </section>
    </>
  );
}
