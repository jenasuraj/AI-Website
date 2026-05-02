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
    title: "Staff Management",
    description:
      "Comprehensive profiles and performance tracking for every member.",
    icon: Users,
  },
  {
    title: "Smart Dashboard",
    description:
      "Data-driven insights to help you make better business decisions.",
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
    <section className="py-24 bg-[#f8fafc]">
      <div className="max-w-6xl mx-auto px-6">
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
                transition={{ delay: i * 0.08 }}
                className="group"
              >
                <div className="bg-white rounded-2xl p-8 border border-gray-100 transition-all duration-300 hover:shadow-md">
                  {/* Icon */}
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center 
  bg-blue-100 text-blue-600 
  transition-all duration-300 
  group-hover:bg-blue-600 group-hover:text-white"
                  >
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
