"use client";

import { motion } from "framer-motion";
import {
  LayoutGrid,
  Clock,
  MessageSquare,
  Users,
  BarChart3,
  Building2,
} from "lucide-react";

const features = [
  {
    title: "Task Assignment",
    description:
      "Assign tasks to staff with clear instructions and priorities instantly.",
    icon: LayoutGrid,
  },
  {
    title: "Deadline Tracking",
    description:
      "Visual color-coded stages to keep everyone on track and focused.",
    icon: Clock,
  },
  {
    title: "WhatsApp Alerts",
    description:
      "Automated notifications sent directly to staff for every update.",
    icon: MessageSquare,
  },
  {
    title: "Team Collaboration Made Instant",
    description:
      "Stay connected with project teams through real-time chats for faster decisions and smoother communication.",
    icon: Users,
  },
  {
    title: "Smart Task Views",
    description:
      "Easily organize, track, and prioritize work with smart filters and pinned tasks across projects and milestones.",
    icon: BarChart3,
  },
  {
    title: "Multi-Business",
    description:
      "Switch between different business units with a single click.",
    icon: Building2,
  },
];

export default function Features() {
  return (
    <section id="feature" className="overflow-hidden bg-[#f8fafc] py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              type: "spring",
              stiffness: 50,
              damping: 16,
              delay: 0.13,
            }}
            className="text-4xl font-extrabold tracking-tight text-[#0f172a] sm:text-5xl"
          >
            Our Features
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              type: "spring",
              stiffness: 50,
              damping: 16,
              delay: 0.22,
            }}
            className="mx-auto mt-4 max-w-xl text-lg text-gray-500"
          >
            Everything your team needs to stay organised, aligned, and productive.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
          {features.map((feature, i) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  type: "spring",
                  stiffness: 50,
                  damping: 16,
                  delay: i * 0.1,
                }}
                className="group h-full"
              >
                <div className="flex h-full flex-col border border-gray-300 bg-white p-8 transition-all duration-300 hover:shadow-md">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-600 transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white">
                    <Icon size={22} />
                  </div>

                  <h3 className="mt-5 text-lg font-semibold text-gray-900">
                    {feature.title}
                  </h3>

                  <p className="mt-2 text-sm leading-relaxed text-gray-500">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}