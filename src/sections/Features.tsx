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
    description: "Switch between different business units with a single click.",
    icon: Building2,
  },
];

export default function Features() {
  return (
    <section className="py-24 bg-[#f8fafc] overflow-hidden" id="feature">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">


          <motion.h2
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring" as const, stiffness: 50, damping: 16, delay: 0.13 }}
            className="text-4xl sm:text-5xl font-extrabold tracking-tight text-[#0f172a]"
          >
            Our Features
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring" as const, stiffness: 50, damping: 16, delay: 0.22 }}
            className="mt-4 text-gray-500 text-lg max-w-xl mx-auto"
          >
            Everything your team needs to stay organised, aligned, and productive.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {features.map((feature, i) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ type: "spring" as const, stiffness: 50, damping: 16, delay: i * 0.1 }}
                className="group"
              >
                <div className="bg-white p-8 border border-gray-300 transition-all duration-300 hover:shadow-md">
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-blue-100 text-blue-600 transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white">
                    <Icon size={22} />
                  </div>

                  {/* Title */}
                  <h3 className="mt-5 text-lg font-semibold text-gray-900">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-2 text-gray-500 text-sm leading-relaxed">
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