"use client";

import { motion } from "framer-motion";
import { ArrowRight, Zap } from "lucide-react";
import Link from "next/link";


export default function Hero() {
  return (
    <section className="pt-28 md:pt-40 pb-20 md:pb-24">
      {/* Background glow */}
      <div className="absolute inset-0 -z-10 flex justify-center">
        <div className="w-[600px] h-[600px] bg-blue-500/10 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100/70 text-blue-600 text-xs font-semibold tracking-wide">
            <Zap size={14} />
            SMART TEAM MANAGEMENT
          </div>

          {/* Heading */}
          <h1 className="mt-8 text-4xl sm:text-5xl md:text-7xl font-bold leading-[1.1] tracking-tight text-gray-900">
            Manage Your Team
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
              Smarter. Faster. Better.
            </span>
          </h1>

          {/* Subtext */}
          <p className="mt-6 text-gray-500 max-w-2xl mx-auto text-lg text-justify md:text-center leading-relaxed">
            Track work, manage staff, and never miss deadlines with automated monitoring & WhatsApp alerts.
          </p>

          {/* CTA */}
          <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link href="#contact" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3  flex items-center gap-2 text-sm font-medium shadow-md transition">
              Start Free Trial
              <ArrowRight size={16} />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
