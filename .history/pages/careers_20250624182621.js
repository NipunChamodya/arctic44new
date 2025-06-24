'use client';

import Head from 'next/head';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function Careers() {
  const [scrolled, setScrolled] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const isAndroid = typeof navigator !== 'undefined' && /android/i.test(navigator.userAgent);
  const vibrateAndroid = () => {
    if (isAndroid && navigator.vibrate) {
      navigator.vibrate(10);
    }
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    const handleMouseMove = (e) => setMousePosition({ x: e.clientX, y: e.clientY });

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // New Tally embed script loader
  useEffect(() => {
    const d = document;
    const w = 'https://tally.so/widgets/embed.js';
    const v = function () {
      if (typeof Tally !== 'undefined') {
        Tally.loadEmbeds();
      } else {
        d.querySelectorAll('iframe[data-tally-src]:not([src])').forEach(function (e) {
          e.src = e.dataset.tallySrc;
        });
      }
    };

    if (typeof Tally !== 'undefined') {
      v();
    } else if (d.querySelector(`script[src="${w}"]`) == null) {
      const s = d.createElement('script');
      s.src = w;
      s.onload = v;
      s.onerror = v;
      d.body.appendChild(s);
    }
  }, []);

  return (
    <>
      <Head>
        <title>Careers – Arctic44</title>
        <meta name="description" content="Join Arctic44. Submit your CV and become part of something bold." />
      </Head>

      {/* Top Navigation */}
      <header
        className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-6xl px-6 py-3 rounded-3xl
        transition-all duration-300 overflow-hidden
        ${scrolled
          ? 'bg-[rgba(255,255,255,0.1)] backdrop-blur-2xl border border-white/30 shadow-xl scale-95 saturate-150'
          : 'bg-[rgba(255,255,255,0.05)] backdrop-blur-xl border border-white/20 shadow-md saturate-200'}`}
        style={{
          WebkitBackdropFilter: 'blur(30px) saturate(180%)',
          backdropFilter: 'blur(10px) saturate(180%)',
          background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255,0.1), transparent 80%)`,
        }}
      >
        <div className="flex justify-between items-center relative z-10">
          <div className="flex items-center space-x-3">
            <Image src="/logonavbar.png" alt="Arctic44 Logo" width={100} height={40} />
          </div>
          <nav className="hidden md:flex space-x-6 text-sm">
            <Link href="/" className="text-gray-300 hover:text-white hover:border-b-2 hover:border-white transition">Home</Link>
            <Link href="/services" className="text-gray-300 hover:text-white hover:border-b-2 hover:border-white transition">Services</Link>
            <Link href="/blogs" className="text-gray-300 hover:text-white hover:border-b-2 hover:border-white transition">Blogs</Link>
            <Link href="/about" className="text-gray-300 hover:text-white hover:border-b-2 hover:border-white transition">About Us</Link>
            <Link href="/careers" className="text-gray-300 hover:text-white hover:border-b-2 hover:border-white transition">Careers</Link>
          </nav>
          <Link href="/contact">
            <button
              className="bg-[#ccd6f6] text-black font-semibold py-2 px-4 rounded-xl shadow hover:bg-white transition flex items-center gap-2"
              onClick={vibrateAndroid}
            >
              Get in Touch
            </button>
          </Link>
        </div>
      </header>

      {/* Main Section */}
      <main className="min-h-screen bg-gradient-to-b from-[#1a1a1a] via-[#222] to-[#1a1a1a] text-white pt-40 pb-16">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl font-extrabold text-center text-[#6699cc]"
          >
            Careers at Arctic44
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-center text-lg text-gray-300 mt-4 mb-12 max-w-3xl mx-auto"
          >
            We value innovation, bold thinking, and precise execution. Submit your CV using the form below.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="bg-white rounded-xl shadow-2xl overflow-hidden"
          >
            <iframe
              data-tally-src="https://tally.so/embed/mR1Aev"
              loading="lazy"
              width="100%"
              height="1281"
              frameBorder="0"
              marginHeight="0"
              marginWidth="0"
              title="Arctic44 - Careers"
              className="w-full min-h-[1281px]"
            ></iframe>
          </motion.div>
        </div>
      </main>

      {/* Mobile Nav */}
      <nav className="fixed bottom-0 left-0 right-0 bg-black/80 backdrop-blur-md border-t border-white/20 text-white flex justify-around items-center py-3 md:hidden z-50">
        <Link href="/" className="flex flex-col items-center text-xs hover:text-[#6699cc] hover:underline transition" onClick={vibrateAndroid}>
          <span>Home</span>
        </Link>
        <Link href="/services" className="flex flex-col items-center text-xs hover:text-[#6699cc] hover:underline transition" onClick={vibrateAndroid}>
          <span>Services</span>
        </Link>
        <Link href="/blogs" className="flex flex-col items-center text-xs hover:text-[#6699cc] hover:underline transition" onClick={vibrateAndroid}>
          <span>Blogs</span>
        </Link>
        <Link href="/contact" className="flex flex-col items-center text-xs hover:text-[#6699cc] hover:underline transition" onClick={vibrateAndroid}>
          <span>Contact</span>
        </Link>
        <Link href="/careers" className="flex flex-col items-center text-xs hover:text-[#6699cc] hover:underline transition" onClick={vibrateAndroid}>
          <span>Careers</span>
        </Link>
      </nav>
    </>
  );
}
