"use client";

import { useState } from "react";
import { getAffiliateUrl } from "@/lib/affiliate";

export default function BookingWidget() {
  const today = new Date().toISOString().split("T")[0];
  const tomorrow = new Date(Date.now() + 86400000).toISOString().split("T")[0];

  const [checkIn, setCheckIn] = useState(today);
  const [checkOut, setCheckOut] = useState(tomorrow);

  const handleBook = () => {
    const url = getAffiliateUrl(checkIn, checkOut);
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="bg-[var(--primary)] bg-opacity-95 text-white p-6 md:p-8 rounded-lg shadow-2xl max-w-sm w-full backdrop-blur-sm">
      <p className="text-center text-lg mb-1">FROM</p>
      <p className="text-center text-5xl font-bold mb-1">
        <span className="text-[var(--gold)]">$149</span>
      </p>
      <p className="text-center text-lg mb-6">PER NIGHT</p>

      <div className="grid grid-cols-2 gap-4 mb-6">
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider mb-2">
            Arrival
          </label>
          <input
            type="date"
            value={checkIn}
            onChange={(e) => setCheckIn(e.target.value)}
            min={today}
            className="w-full bg-white/10 border border-white/30 rounded px-3 py-2.5 text-white text-sm focus:outline-none focus:border-[var(--gold)] transition-colors [color-scheme:dark]"
          />
        </div>
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider mb-2">
            Departure
          </label>
          <input
            type="date"
            value={checkOut}
            onChange={(e) => setCheckOut(e.target.value)}
            min={checkIn}
            className="w-full bg-white/10 border border-white/30 rounded px-3 py-2.5 text-white text-sm focus:outline-none focus:border-[var(--gold)] transition-colors [color-scheme:dark]"
          />
        </div>
      </div>

      <button
        onClick={handleBook}
        className="w-full bg-white text-[var(--primary)] font-bold py-3 rounded text-sm uppercase tracking-wider hover:bg-gray-100 transition-colors mb-4"
      >
        Check and Book
      </button>

      <p className="text-center text-sm font-semibold text-[var(--gold)]">
        Best Rates on Trip.com
      </p>
    </div>
  );
}
