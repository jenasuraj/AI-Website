"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Zap, ShieldCheck, BarChart2, Check } from "lucide-react";



const bullets = [
  { icon: Check, text: "Save 2+ hours daily" },
  { icon: Check, text: "Increase productivity by 40%" },
  { icon: Check, text: "WebApp for easy access" },
  { icon: Check, text: "Better team control" },
  {icon: Check, text: "Group Chats"}
];

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 36 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { type: "spring" as const, stiffness: 50, damping: 16, delay },
});

const countries = [
  { code: "+91", name: "India" },
  { code: "+1", name: "USA" },
  { code: "+44", name: "UK" },
  { code: "+61", name: "Australia" },
  { code: "+971", name: "UAE" },
  { code: "+65", name: "Singapore" },
];

const userOptions = ["1–10", "11–50", "51–200", "201–500", "500+"];
const industryOptions = [
  "Real Estate",
  "Interior Design",
  "Event Management",
  "Retail",
  "Logistics",
  "Other",
];

export default function ContactForm() {
  const [countryCode, setCountryCode] = useState("+91");

  return (
    <section className="w-full bg-white py-20 px-6 overflow-hidden" id="contact">
      <div className="mx-auto max-w-6xl grid lg:grid-cols-2 gap-10  items-center">

        {/* ── LEFT: Content ── */}
        <div>

          <motion.h2
            {...fadeUp(0.12)}
            className="text-4xl sm:text-5xl text-center md:text-left font-extrabold tracking-tight text-[#0f172a] leading-[1.12]"
          >
            Task Management
            <br />
            Software For Teams &
            <br />
            <span className="text-blue-600"> Professionals</span>
          </motion.h2>

          <motion.p
            {...fadeUp(0.22)}
            className="mt-6 text-[#64748b] text-lg leading-relaxed max-w-md"
          >
            India's complete task management system — track tasks, projects, and
            workflows with a tool your entire team will actually use.
          </motion.p>

          <div className="mt-10 space-y-4">
            {bullets.map((b, i) => {
              const Icon = b.icon;
              return (
                <motion.div
                  key={i}
                  {...fadeUp(0.28 + i * 0.09)}
                  className="flex items-center gap-4"
                >
                  <div className="w-9 h-9 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 shrink-0">
                    <Icon size={17} />
                  </div>
                  <p className="text-[#334155] font-medium">{b.text}</p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* ── RIGHT: Form ── */}
        <motion.div
          initial={{ opacity: 0, x: 70 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring" as const, stiffness: 50, damping: 17, delay: 0.15 }}
          className="w-full  border border-gray-200 bg-[#f8fafc] p-8 shadow-lg shadow-slate-100"
        >
          <h3 className="text-xl font-bold text-[#0f172a] mb-6">
            Book a Free Demo
          </h3>

          <div className="space-y-4">
            {/* Row 1: Full Name + Company Name */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Full Name *"
                className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-[#0f172a] placeholder-gray-400 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition"
              />
              <input
                type="text"
                placeholder="Company Name *"
                className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-[#0f172a] placeholder-gray-400 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition"
              />
            </div>

            {/* Row 2: Email */}
            <input
              type="email"
              placeholder="Your Email *"
              className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-[#0f172a] placeholder-gray-400 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition"
            />

            {/* Row 3: Country code + Phone */}
            <div className="flex gap-3">
              <select
                value={countryCode}
                onChange={(e) => setCountryCode(e.target.value)}
                className="rounded-xl border border-gray-200 bg-white px-3 py-3 text-sm text-[#0f172a] outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition shrink-0"
              >
                {countries.map((c) => (
                  <option key={c.code} value={c.code}>
                    {c.name} ({c.code})
                  </option>
                ))}
              </select>
              <input
                type="tel"
                placeholder="Your Phone *"
                className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-[#0f172a] placeholder-gray-400 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition"
              />
            </div>

            {/* Row 4: Number of Users + Industry */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <select className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-400 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition appearance-none">
                <option value="" disabled selected>
                  Select Number of Users *
                </option>
                {userOptions.map((o) => (
                  <option key={o} value={o} className="text-[#0f172a]">
                    {o} Users
                  </option>
                ))}
              </select>

              <select className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-400 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition appearance-none">
                <option value="" disabled selected>
                  Select Industry *
                </option>
                {industryOptions.map((o) => (
                  <option key={o} value={o} className="text-[#0f172a]">
                    {o}
                  </option>
                ))}
              </select>
            </div>

            {/* Row 5: Message */}
            <textarea
              rows={4}
              placeholder="Your Message *"
              className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-[#0f172a] placeholder-gray-400 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition resize-none"
            />

            {/* Submit */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              className="w-full  bg-blue-600 py-3.5 text-sm font-semibold text-white hover:bg-blue-700 transition"
            >
              Request a Demo →
            </motion.button>
          </div>
        </motion.div>

      </div>
    </section>
  );
}