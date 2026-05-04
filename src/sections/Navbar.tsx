"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          <Link href="/" className="flex items-center gap-2 font-semibold text-lg">
            <Image src="/icon.png" alt="logo" width={140} height={60} priority />
          </Link>

          <nav className="hidden md:flex items-center gap-10 text-sm font-medium text-gray-600">
            <Link href="#feature" className="hover:text-gray-900 transition">Features</Link>
            <Link href="#how-it-works" className="hover:text-gray-900 transition">How it Works</Link>
            
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="#contact"
              className="hidden md:inline-flex bg-blue-600 hover:bg-blue-700 text-white px-4 sm:px-5 py-2 sm:py-2.5 text-sm font-medium shadow-sm transition"
            >
              Start Free Trial
            </Link>

            <button
              onClick={() => setOpen(!open)}
              className="md:hidden p-2 rounded-md border border-gray-200"
            >
              ☰
            </button>
          </div>
        </div>

        {open && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col gap-4 text-sm font-medium text-gray-600">
              <Link href="#feature" onClick={() => setOpen(false)} className="hover:text-gray-900 transition" >Features</Link>
              <Link href="#how-it-works" onClick={() => setOpen(false)} className="hover:text-gray-900 transition">How it Works</Link>

              <Link
                href="#contact"
                onClick={() => setOpen(false)}
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium text-center transition"
              >
                Start Free Trial
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}