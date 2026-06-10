import { TRIP_AFFILIATE_URL } from "@/lib/affiliate";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dining | Lake Kawana Hotel",
  description:
    "Enjoy lakeside dining at Lake Kawana Hotel. Our restaurant and bar offers modern Australian cuisine with stunning views over Lake Kawana on the Sunshine Coast.",
};

const menuHighlights = [
  { name: "Moreton Bay Bug Linguine", desc: "Fresh local bugs with cherry tomato, chilli, garlic, and white wine sauce", price: "$34" },
  { name: "Sunshine Coast Eye Fillet", desc: "250g grain-fed eye fillet with truffle mash, broccolini, and red wine jus", price: "$42" },
  { name: "Pan-Seared Barramundi", desc: "Crispy skin barramundi with lemon butter, seasonal greens, and kipfler potatoes", price: "$36" },
  { name: "Lakeside Burger", desc: "Wagyu beef patty, aged cheddar, bacon, caramelised onion, and house pickles", price: "$26" },
  { name: "Tropical Pavlova", desc: "Classic pavlova with mango, passionfruit, Chantilly cream, and coconut", price: "$16" },
  { name: "Queensland Cheese Board", desc: "Selection of local artisan cheeses with quince paste, dried fruits, and lavosh", price: "$22" },
];

export default function DiningPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[40vh] flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1920&q=80')",
          }}
        >
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-2">Dining</h1>
          <p className="text-xl opacity-80">Restaurant & Bar with Lakeside Views</p>
        </div>
      </section>

      {/* About Restaurant */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-[var(--primary)] mb-6">
                Lakeside Restaurant & Bar
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Our on-site restaurant offers a relaxed yet refined dining
                experience with panoramic views over Lake Kawana. Enjoy modern
                Australian cuisine crafted from the freshest local and seasonal
                ingredients.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Start your day with a hearty buffet breakfast, grab a casual
                lunch on the terrace, or settle in for a memorable dinner as the
                sun sets over the lake. Our fully licensed bar features an
                extensive selection of local wines, craft beers, and signature
                cocktails.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Whether you&apos;re a hotel guest or visiting for the day,
                everyone is welcome to enjoy our lakeside hospitality.
              </p>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="font-bold text-[var(--primary)] mb-3">Opening Hours</h3>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex justify-between">
                    <span className="font-medium">Breakfast</span>
                    <span>6:30am - 10:00am daily</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Lunch</span>
                    <span>12:00pm - 2:30pm daily</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Dinner</span>
                    <span>5:30pm - 9:00pm daily</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Bar</span>
                    <span>11:00am - late daily</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80"
                alt="Restaurant dining"
                className="w-full h-[250px] object-cover rounded-lg shadow-lg"
              />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=800&q=80"
                alt="Bar area"
                className="w-full h-[200px] object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Menu Highlights */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-[var(--primary)] mb-4">
            Menu Highlights
          </h2>
          <p className="text-center text-gray-500 mb-12">
            A taste of what awaits you at our lakeside restaurant
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {menuHighlights.map((item, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold text-[var(--primary)]">{item.name}</h3>
                  <span className="text-[var(--gold-dark)] font-bold ml-4">
                    {item.price}
                  </span>
                </div>
                <p className="text-gray-500 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[var(--primary)] py-16">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold text-white mb-4">
            Stay & Dine at Lake Kawana
          </h2>
          <p className="text-gray-200 text-lg mb-8">
            Book your accommodation and enjoy complimentary breakfast with your stay.
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
