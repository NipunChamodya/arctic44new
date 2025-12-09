"use client";

import { useState, useEffect } from "react";

export default function PopupCard() {
  const [open, setOpen] = useState(false);
  const [countdown, setCountdown] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  // Open popup after delay
  useEffect(() => {
    const timer = setTimeout(() => setOpen(true), 800);
    return () => clearTimeout(timer);
  }, []);

  // Countdown logic
  useEffect(() => {
    const launchDate = new Date("2025-12-15T00:00:00"); // Change to your launch date
    const interval = setInterval(() => {
      const now = new Date();
      const distance = launchDate - now;
      if (distance <= 0) {
        clearInterval(interval);
        setCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }
      setCountdown({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((distance / (1000 * 60)) % 60),
        seconds: Math.floor((distance / 1000) % 60),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[99999] flex items-center justify-center animate-fade">
      <div className="relative w-[650px] bg-gradient-to-br from-blue-500 to-purple-900 text-white p-8 rounded-3xl shadow-2xl animate-popup border-4 border-blue-300/50">
        {/* Close button */}
        <button
          onClick={() => setOpen(false)}
          className="absolute -top-3 -right-3 bg-white text-black rounded-full shadow p-2 text-lg z-50 hover:scale-110 transition-transform"
        >
          ✖
        </button>

        {/* Headline */}
        <h2 className="text-3xl font-extrabold mb-4 text-center">
          Our New Website is Launching Soon!
        </h2>

        {/* Countdown */}
        <div className="flex justify-center gap-4 text-center mb-6">
          {["Days", "Hours", "Minutes", "Seconds"].map((label, i) => {
            const value = Object.values(countdown)[i];
            return (
              <div key={i} className="flex flex-col items-center">
                <span className="text-4xl font-bold">{value.toString().padStart(2, "0")}</span>
                <span className="text-sm">{label}</span>
              </div>
            );
          })}
        </div>

        {/* Button */}
        <div className="flex justify-center">
          <button className="bg-white text-blue-900 font-bold px-6 py-3 rounded-full shadow-lg hover:bg-blue-50 hover:scale-105 transition-all">
            Be Patient
          </button>
        </div>
      </div>
    </div>
  );
}
