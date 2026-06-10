import { TRIP_AFFILIATE_URL } from "@/lib/affiliate";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Location | Lake Kawana Hotel",
  description:
    "Lake Kawana Hotel is located on Florey Blvd, Birtinya QLD 4575 on the Sunshine Coast. Near Sunshine Coast University Hospital, Mooloolaba Beach, and Australia Zoo.",
};

const nearby = [
  { name: "Sunshine Coast University Hospital", distance: "500m", time: "2 min drive" },
  { name: "Kawana Shoppingworld", distance: "2 km", time: "5 min drive" },
  { name: "Mooloolaba Beach", distance: "6 km", time: "10 min drive" },
  { name: "Maroochydore CBD", distance: "12 km", time: "15 min drive" },
  { name: "Australia Zoo", distance: "25 km", time: "25 min drive" },
  { name: "Sunshine Coast Airport", distance: "18 km", time: "20 min drive" },
  { name: "Noosa Heads", distance: "45 km", time: "40 min drive" },
  { name: "Glass House Mountains", distance: "30 km", time: "30 min drive" },
];

export default function LocationPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[40vh] flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=1920&q=80')",
          }}
        >
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-2">Location</h1>
          <p className="text-xl opacity-80">Heart of the Sunshine Coast</p>
        </div>
      </section>

      {/* Map & Info */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-[var(--primary)] mb-6">
                Find Us
              </h2>
              <div className="bg-gray-50 rounded-lg p-6 mb-6">
                <h3 className="font-bold text-[var(--primary)] mb-3">Address</h3>
                <p className="text-gray-600">
                  Florey Blvd<br />
                  Birtinya, QLD 4575<br />
                  Sunshine Coast, Queensland<br />
                  Australia
                </p>
              </div>
              <div className="bg-gray-50 rounded-lg p-6 mb-6">
                <h3 className="font-bold text-[var(--primary)] mb-3">Getting Here</h3>
                <div className="space-y-3 text-sm text-gray-600">
                  <p>
                    <strong>From Sunshine Coast Airport:</strong> 20 minutes via
                    the Sunshine Motorway. Head south on David Low Way, merge
                    onto the Sunshine Motorway and take the Kawana Way exit.
                  </p>
                  <p>
                    <strong>From Brisbane:</strong> Approximately 1 hour 15
                    minutes via the Bruce Highway (M1). Take the Caloundra Road
                    exit and follow signs to Kawana.
                  </p>
                  <p>
                    <strong>Public Transport:</strong> Bus routes service the
                    Birtinya area with connections to major Sunshine Coast
                    destinations.
                  </p>
                </div>
              </div>
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="font-bold text-[var(--primary)] mb-3">Parking</h3>
                <p className="text-gray-600 text-sm">
                  Complimentary on-site parking is available for all hotel
                  guests. Undercover and open-air options available.
                </p>
              </div>
            </div>

            <div>
              {/* Google Maps Embed */}
              <div className="rounded-lg overflow-hidden shadow-lg mb-8">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3546.5!2d153.1167432!3d-26.7461032!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b939e871ecfede3%3A0x93e4612e41cd1777!2sMercure%20Sunshine%20Coast%20Kawana%20Waters!5e0!3m2!1sen!2sau!4v1"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Lake Kawana Hotel Location"
                />
              </div>

              <h3 className="text-xl font-bold text-[var(--primary)] mb-4">
                Nearby Attractions
              </h3>
              <div className="space-y-3">
                {nearby.map((place, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between bg-gray-50 rounded-lg px-4 py-3"
                  >
                    <span className="font-medium text-gray-700 text-sm">
                      {place.name}
                    </span>
                    <span className="text-gray-500 text-xs whitespace-nowrap ml-4">
                      {place.distance} &middot; {place.time}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[var(--primary)] py-16">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold text-white mb-4">
            Perfectly Located on the Sunshine Coast
          </h2>
          <p className="text-gray-200 text-lg mb-8">
            Book your stay and explore everything the Sunshine Coast has to offer.
          </p>
          <a
            href={TRIP_AFFILIATE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[var(--gold)] hover:bg-[var(--gold-dark)] text-[var(--primary-dark)] font-bold px-10 py-4 rounded-lg text-lg uppercase tracking-wider transition-colors"
          >
            Book Your Stay
          </a>
        </div>
      </section>
    </>
  );
}
