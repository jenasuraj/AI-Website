"use client";

import { motion } from "framer-motion";

const cards = [
  {
    title: "Interior Designer",
    description:
      "Interior Designer",
    image:
      "/collection/interior-designer.png",
  },
  {
    title: "MSME Business",
    description:
      "MSME Business",
    image:
      "/collection/msme-business.png",
  },
  {
    title: "Real Estate",
    description: "Real Estate",
    image:
      "/collection/real-estate.png",
  },
  {
    title: "Render",
    description: "Render",
    image:
         "/collection/render.jpeg",
  },
];

export default function DesignedForTeams() {
  return (
    <section className="bg-[#f7f8fb] px-6 py-28 overflow-hidden">
      <div className="mx-auto max-w-7xl">

        {/* Heading — slides up from bottom */}
        <div className="text-center">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ type: "spring" as const, stiffness: 45, damping: 16, delay: 0.1 }}
            className="text-5xl font-extrabold tracking-tight text-[#0f172a]"
          >
            Designed for Modern Teams
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ type: "spring" as const, stiffness: 45, damping: 16, delay: 0.22 }}
            className="mt-6 text-xl text-[#64748b]"
          >
            Clean, intuitive interface that your staff will love to use.
          </motion.p>
        </div>

        {/* Cards — staggered scale + blur + y reveal */}
        <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-4">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60, scale: 0.93, filter: "blur(8px)" }}
              whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                type: "spring" as const,
                stiffness: 50,
                damping: 17,
                delay: 0.15 + index * 0.13,
              }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group cursor-pointer  bg-[#f3f7ff] border border-gray-300 p-7 shadow-sm transition-shadow duration-300 hover:shadow-2xl hover:shadow-blue-100/60"
            >
              {/* Image */}
              <div className="overflow-hidden">
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