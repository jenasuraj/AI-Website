"use client";

import { Zap } from "lucide-react";

export default function Navbar() {
  return (
    <header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2 font-semibold text-lg">
          <div className="w-9 h-9 rounded-lg bg-blue-600 flex items-center justify-center text-white shadow-sm">
            <Zap size={18} />
          </div>
          <span>
            TeamTrack<span className="text-blue-600">Pro</span>
          </span>
        </div>

        {/* Links */}
        <nav className="hidden md:flex gap-10 text-sm font-medium text-gray-500">
          <a className="hover:text-gray-900 transition">Features</a>
          <a className="hover:text-gray-900 transition">How it Works</a>
          {/* <a className="hover:text-gray-900 transition">Pricing</a> */}
          <a className="hover:text-gray-900 transition">About</a>
        </nav>
        <div className="md:hidden">
          <button className="p-2 rounded-md border border-gray-200">☰</button>
        </div>
        {/* Actions */}
        <div className="flex items-center gap-3">
          {/* Login hidden on mobile */}
          <button className="hidden sm:block text-sm font-medium text-gray-500 hover:text-gray-900 transition">
            Login
          </button>

          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 sm:px-5 py-2 sm:py-2.5 rounded-lg text-sm font-medium shadow-sm transition">
            Start Free Trial
          </button>
        </div>
      </div>
    </header>
  );
}
