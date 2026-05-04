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
    <section id="how-it-works" className="bg-[#f7f8fb] px-6 py-28">
      <div className="mx-auto max-w-7xl">
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

        <div className="relative mt-28">
          <div className="absolute left-0 right-0 top-6 hidden h-[2px] bg-[#dbe4f0] md:block" />

          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.8, ease: "easeInOut" }}
            className="absolute left-0 right-0 top-6 hidden h-[3px] origin-left bg-blue-600 md:block"
          />

          <div className="grid grid-cols-1 gap-14 md:grid-cols-5 md:gap-8">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.15,
                }}
                className="relative flex flex-col items-center rounded-2xl border border-gray-300 p-2 text-center shadow-sm md:border-none md:p-0 md:shadow-none"
              >
                <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full border border-[#edf2f7] bg-white shadow-sm">
                  <span className="text-2xl font-bold text-blue-600">
                    {i + 1}
                  </span>
                </div>

                <h3 className="mt-10 text-[30px] font-bold leading-none text-[#0f172a]">
                  {step.title}
                </h3>

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