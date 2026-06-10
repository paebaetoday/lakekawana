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
    <div className="bg-white border border-gray-100 text-gray-900 p-6 md:p-8 rounded-2xl shadow-lg max-w-sm w-full">
      <p className="text-center text-sm text-gray-400 mb-1">FROM</p>
      <p className="text-center text-4xl font-bold mb-1">
        <span className="text-gray-900">$149</span>
      </p>
      <p className="text-center text-sm text-gray-400 mb-6">PER NIGHT</p>

      <div className="grid grid-cols-2 gap-3 mb-5">
        <div>
          <label className="block text-xs font-medium text-gray-500 mb-1.5">
            Check-in
          </label>
          <input
            type="date"
            value={checkIn}
            onChange={(e) => setCheckIn(e.target.value)}
            min={today}
            className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-gray-800 text-sm focus:outline-none focus:border-[var(--accent)] focus:ring-1 focus:ring-[var(--accent)] transition-colors"
          />
        </div>
        <div>
          <label className="block text-xs font-medium text-gray-500 mb-1.5">
            Check-out
          </label>
          <input
            type="date"
            value={checkOut}
            onChange={(e) => setCheckOut(e.target.value)}
            min={checkIn}
            className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-gray-800 text-sm focus:outline-none focus:border-[var(--accent)] focus:ring-1 focus:ring-[var(--accent)] transition-colors"
          />
        </div>
      </div>

      <button
        onClick={handleBook}
        className="w-full bg-[var(--accent)] hover:bg-[var(--accent-dark)] text-white font-bold py-3 rounded-lg text-sm transition-colors mb-3"
      >
        Check and Book
      </button>

      <p className="text-center text-xs text-gray-400">
        Best rates on{" "}
        <span className="font-semibold text-[var(--accent)]">Trip.com</span>
      </p>
    </div>
  );
}
