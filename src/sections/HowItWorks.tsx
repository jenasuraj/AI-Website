"use client";

import { motion } from "framer-motion";

const steps = [
  {
    title: "Define Project",
    description: "Set up your project details and objectives to get started.",
  },
  {
    title: "Add Staff",
    description:
      "Quickly onboard your team members with their contact details.",
  },
  {
    title: "Assign Task",
    description: "Create tasks and set deadlines with just a few clicks.",
  },
  {
    title: "Track Progress",
    description: "Monitor real-time updates on your interactive dashboard.",
  },
  {
    title: "Get Alerts",
    description:
      "Receive automated WhatsApp notifications for every milestone.",
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-[#f7f8fb] px-6 py-28" id="how-it-works">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-5xl font-extrabold tracking-tight text-[#0f172a]">
            How It Works
          </h2>

          <p className="mt-5 text-lg text-[#64748b] text-justify md:text-center">
            Simple 4-step process to transform your team management.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative mt-28">
          {/* Horizontal Line */}
          <div className="absolute left-0 right-0 top-6 hidden h-[2px] bg-[#dbe4f0] md:block" />

          {/* Steps */}
          <div className="grid grid-cols-1 gap-14 md:grid-cols-5 md:gap-8">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.1,
                }}
                className="relative flex flex-col  rounded-2xl shadow-sm md:shadow-none p-2 md:p-0 items-center text-center border border-gray-300 md:border-none"
              >
                {/* Number Circle */}
                <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full border border-[#edf2f7] bg-white shadow-sm">
                  <span className="text-2xl font-bold text-blue-600">
                    {i + 1}
                  </span>
                </div>

                {/* Title */}
                <h3 className="mt-10 text-[30px] font-bold text-[#0f172a] leading-none">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="mt-5 max-w-[220px] text-[17px] leading-8 text-[#64748b]">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
