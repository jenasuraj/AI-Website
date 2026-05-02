"use client";

import { motion } from "framer-motion";

const cards = [
  {
    title: "Emerging Company",
    description:
      "Perfect for a growing team of 20+ staff scaling their operations.",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Real Estate",
    description:
      "Track agents, property showings, and client follow-ups seamlessly.",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Interior Designer",
    description: "Track vendors, progress and client follow up seamlessly",
    image:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Event Management",
    description: "Coordinate vendors, staff schedules, and event logistics.",
    image:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1200&auto=format&fit=crop",
  },
];

export default function DesignedForTeams() {
  return (
    <section className="bg-[#f7f8fb] px-6 py-28">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="text-center">
          <h2 className="text-5xl font-extrabold tracking-tight text-[#0f172a]">
            Designed for Modern Teams
          </h2>

          <p className="mt-6 text-xl text-[#64748b]">
            Clean, intuitive interface that your staff will love to use.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-4">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              whileHover={{
                y: -10,
                scale: 1.02,
              }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 18,
              }}
              className="group cursor-pointer rounded-[34px] border border-[#dbe7ff] bg-[#f3f7ff] p-7 shadow-sm transition-all duration-300 hover:shadow-2xl hover:shadow-blue-100/60"
            >
              {/* Image */}
              <div className="overflow-hidden rounded-[28px]">
                <motion.img
                  src={card.image}
                  alt={card.title}
                  whileHover={{ scale: 1.06 }}
                  transition={{ duration: 0.4 }}
                  className="h-[210px] w-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="mt-7">
                <h3 className="text-[20px] font-bold text-[#0f172a]">
                  {card.title}
                </h3>

                <p className="mt-4 text-[17px] leading-8 text-[#64748b]">
                  {card.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
