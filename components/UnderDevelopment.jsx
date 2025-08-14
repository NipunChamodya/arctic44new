"use client";

import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

export default function UnderDevelopment({
  title = "Under Development",
  description = "This page is being prepared. Please check back soon.",
}) {
  const router = useRouter();
  const servicesHref = router.pathname === "/" ? "/#services" : "/services";
  return (
    <>
      <header className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-6xl px-6 py-3 rounded-3xl bg-[rgba(255,255,255,0.05)] backdrop-blur-xl border border-white/20 shadow-md">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <Image
              src="/logonavbar.png"
              alt="Arctic44 Logo"
              width={100}
              height={40}
            />
          </div>
          <nav className="hidden md:flex space-x-6 text-sm">
            <Link
              href="/"
              className="text-gray-300 hover:text-white hover:border-b-2 hover:border-white transition"
            >
              Home
            </Link>
            <Link
              href={servicesHref}
              className="text-gray-300 hover:text-white hover:border-b-2 hover:border-white transition"
            >
              Services
            </Link>
            <Link
              href="/blog"
              className="text-gray-300 hover:text-white hover:border-b-2 hover:border-white transition"
            >
              Blogs
            </Link>
            <Link
              href="/about"
              className="text-gray-300 hover:text-white hover:border-b-2 hover:border-white transition"
            >
              About Us
            </Link>
            <Link
              href="/careers"
              className="text-gray-300 hover:text-white hover:border-b-2 hover:border-white transition"
            >
              Careers
            </Link>
          </nav>
          <Link href="/#contact">
            <button className="bg-[#ccd6f6] text-black font-semibold py-2 px-4 rounded-xl shadow hover:bg-white transition">
              Get in Touch
            </button>
          </Link>
        </div>
      </header>
      <main className="min-h-screen bg-black text-white flex items-center justify-center p-6 pt-40">
        <div className="text-center space-y-6">
          <h1 className="text-4xl font-bold text-[#66ccff]">{title}</h1>
          <p className="text-gray-300">{description}</p>
          <div className="flex gap-4 justify-center">
            <Link className="text-[#66ccff] underline" href="/">
              Go Home
            </Link>
            <Link className="text-[#66ccff] underline" href="/about">
              About
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
