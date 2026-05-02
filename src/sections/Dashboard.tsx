"use client";

import { motion } from "framer-motion";

export default function DashboardPreview() {
  return (
    <section className="pb-20 md:pb-28">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative mx-auto max-w-5xl"
        >
          {/* Glow */}
          <div className="absolute inset-0 blur-3xl bg-blue-500/10 rounded-3xl" />

          {/* Dashboard Card */}
          <div className="relative rounded-2xl glass shadow-2xl p-4 border overflow-hidden">
            {/* Floating Card */}
            {/* Floating Card */}
            <motion.div
              initial={{ y: 0 }}
              animate={{ y: [-8, 8, -8] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute top-6 left-6 z-20"
            >
              <div className="flex items-center gap-3 bg-white/90 backdrop-blur-md shadow-xl rounded-2xl px-4 py-3 border border-gray-100">
                {/* Icon */}
                <div className="w-10 h-10 rounded-xl bg-green-100 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 text-green-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>

                {/* Text */}
                <div className="leading-tight">
                  <p className="text-[11px] font-semibold text-gray-400 tracking-wide">
                    EFFICIENCY
                  </p>
                  <p className="text-sm font-semibold text-gray-900">
                    +24% Increase
                  </p>
                </div>
              </div>
            </motion.div>
            {/* Image */}
            <img
              src="https://picsum.photos/seed/saas-dashboard/1200/800"
              alt="Dashboard Preview"
              className="rounded-2xl w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
