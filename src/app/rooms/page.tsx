import { TRIP_AFFILIATE_URL } from "@/lib/affiliate";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Rooms & Suites | Lake Kawana Hotel",
  description:
    "Browse our range of comfortable rooms and suites at Lake Kawana Hotel. From standard queen rooms to spacious family suites, all with modern amenities and lake views.",
};

const rooms = [
  {
    name: "Standard Queen Room",
    desc: "Our Standard Queen Room offers a comfortable retreat with a plush queen-size pillow-top bed, modern ensuite bathroom, flat screen TV with Foxtel, free high-speed WiFi, tea and coffee making facilities, air conditioning, and a work desk. Perfect for solo travellers or couples on a budget.",
    price: "From $149",
    features: ["Queen pillow-top bed", "32\" Flat Screen TV", "Free WiFi", "Ensuite bathroom", "Air conditioning", "Tea & coffee facilities"],
    img: "photo-1631049307264-da0ec9d70304",
  },
  {
    name: "Deluxe King Room",
    desc: "Step up to our Deluxe King Room featuring a luxurious king-size bed, spacious layout with lounge seating, stunning lake views, 42\" flat screen TV with Foxtel, minibar, and premium bathroom amenities. The ideal choice for couples seeking extra comfort.",
    price: "From $179",
    features: ["King pillow-top bed", "42\" Flat Screen TV", "Lake views", "Minibar", "Lounge area", "Premium amenities"],
    img: "photo-1590490360182-c33d57733427",
  },
  {
    name: "Executive Suite",
    desc: "Our Executive Suite provides a premium experience with a separate living area, king bed, executive work space, lake views, bathrobes and slippers, and complimentary minibar on arrival. Perfect for extended stays and business travellers who demand the best.",
    price: "From $219",
    features: ["King bed", "Separate living area", "Executive desk", "Lake views", "Bathrobes & slippers", "Complimentary minibar"],
    img: "photo-1578683010236-d716f9a3f461",
  },
  {
    name: "Family Suite",
    desc: "Our spacious Family Suite features two separate bedrooms, a full living area with sofa, kitchenette with microwave and mini fridge, dining table, and two bathrooms. Ideal for families needing space and flexibility during their Sunshine Coast holiday.",
    price: "From $249",
    features: ["Two bedrooms", "Full living area", "Kitchenette", "Two bathrooms", "Dining area", "Laundry facilities"],
    img: "photo-1582719478250-c89cae4dc85b",
  },
  {
    name: "Accessible Room",
    desc: "Our fully accessible room features wheelchair-friendly design with widened doorways, roll-in shower with grab rails, lowered fixtures, and all the same premium amenities as our standard rooms. We are committed to comfortable stays for all guests.",
    price: "From $149",
    features: ["Wheelchair accessible", "Roll-in shower", "Grab rails", "Queen bed", "Free WiFi", "Ground floor access"],
    img: "photo-1595576508898-0ad5c879a061",
  },
];

export default function RoomsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[40vh] flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=1920&q=80')",
          }}
        >
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-2">Rooms & Suites</h1>
          <p className="text-xl opacity-80">Find your perfect room</p>
        </div>
      </section>

      {/* Rooms */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {rooms.map((room, i) => (
            <div
              key={i}
              className={`grid md:grid-cols-2 gap-10 items-center ${
                i % 2 === 1 ? "md:direction-rtl" : ""
              }`}
            >
              <div className={i % 2 === 1 ? "md:order-2" : ""}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`https://images.unsplash.com/${room.img}?w=800&q=80`}
                  alt={room.name}
                  className="w-full h-[350px] object-cover rounded-lg shadow-lg"
                />
              </div>
              <div className={i % 2 === 1 ? "md:order-1" : ""}>
                <h2 className="text-2xl md:text-3xl font-bold text-[var(--primary)] mb-2">
                  {room.name}
                </h2>
                <p className="text-[var(--gold-dark)] text-xl font-bold mb-4">
                  {room.price} <span className="text-sm font-normal text-gray-500">/ per night</span>
                </p>
                <p className="text-gray-600 leading-relaxed mb-6">{room.desc}</p>
                <div className="grid grid-cols-2 gap-2 mb-6">
                  {room.features.map((f, j) => (
                    <div key={j} className="flex items-center text-sm text-gray-600">
                      <svg className="w-4 h-4 text-[var(--gold)] mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {f}
                    </div>
                  ))}
                </div>
                <a
                  href={TRIP_AFFILIATE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white font-bold px-8 py-3 rounded text-sm uppercase tracking-wider transition-colors"
                >
                  Book This Room
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
