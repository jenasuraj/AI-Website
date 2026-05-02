"use client";

import { motion } from "framer-motion";
import { Zap, TrendingUp, Clock, Users, DollarSign, Check } from "lucide-react";

export default function Benefits() {
  return (
    <section className="bg-[#f8fafc] py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

        {/* ── LEFT SIDE ── */}
        <div>

          {/* Heading — bottom to top */}
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ type: "spring" as const, stiffness: 45, damping: 16, delay: 0.1 }}
            className="text-5xl text-center md:text-left font-extrabold tracking-tight text-[#0f172a]"
          >
            Because your time is valuable.
          </motion.h2>

          {/* Description — bottom to top, slightly after */}
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ type: "spring" as const, stiffness: 45, damping: 16, delay: 0.25 }}
            className="mt-6 text-gray-500 max-w-xl leading-relaxed text-justify md:text-left"
          >
            We are building a smarter system for businesses to manage teams
            efficiently. Our platform combines automation, real-time tracking,
            and smart notifications to simplify work management.
          </motion.p>

          {/* Feature cards — slide in from LEFT, staggered */}
          <div className="mt-10 space-y-4">
            {[
              { icon: Zap, text: "No more manual follow-ups" },
              { icon: TrendingUp, text: "Real-time tracking" },
              { icon: Clock, text: "Smart deadline alerts" },
              { icon: Users, text: "Full team visibility" },
              { icon: DollarSign, text: "Cost-effective" },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -70 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{
                    type: "spring" as const,
                    stiffness: 45,
                    damping: 16,
                    delay: 0.15 + i * 0.12,
                  }}
                  className="flex items-center gap-4 bg-white border border-gray-200 px-5 py-4 shadow-sm"
                >
                  <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                    <Icon size={18} />
                  </div>
                  <p className="font-medium text-gray-900">{item.text}</p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* ── RIGHT SIDE — single card slides in from RIGHT ── */}
        <div className="flex justify-center lg:justify-end">
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ type: "spring" as const, stiffness: 45, damping: 16, delay: 0.2 }}
            className="w-full max-w-[460px]  bg-gradient-to-br from-blue-600 to-blue-500 p-8 text-white shadow-xl"
          >
            <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-white/10">
              <TrendingUp size={22} />
            </div>

            <h2 className="mt-6 text-2xl font-semibold">What You Get</h2>

            <div className="mt-6 space-y-4">
              {[
                "Save 2+ hours daily",
                "Increase productivity by 40%",
                "WebApp for easy access",
                "Better team control",
                "Group Chats",
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    type: "spring" as const,
                    stiffness: 45,
                    damping: 16,
                    delay: 0.35 + i * 0.1,
                  }}
                  className="flex items-center gap-3"
                >
                  <div className="w-6 h-6 flex items-center justify-center rounded-full bg-white/20">
                    <Check size={14} />
                  </div>
                  <p className="text-sm font-medium">{item}</p>
                </motion.div>
              ))}
            </div>

            <motion.button
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring" as const, stiffness: 45, damping: 16, delay: 0.9 }}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="mt-8 w-full rounded-xl bg-white text-blue-600 py-3 text-sm font-semibold hover:bg-gray-100 transition"
            >
              Start Managing Smarter
            </motion.button>
          </motion.div>
        </div>

      </div>
    </section>
  );
}