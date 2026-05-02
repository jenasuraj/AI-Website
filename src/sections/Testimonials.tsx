"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Rahul Sharma",
    role: "CEO, TechFlow",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400&auto=format&fit=crop",
    review:
      '"This app transformed how we track our field staff. The WhatsApp alerts are a game changer!"',
  },
  {
    name: "Priya Patel",
    role: "Operations Manager",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop",
    review:
      '"Simple, intuitive, and powerful. We saved at least 10 hours of manual follow-ups every week."',
  },
  {
    name: "Amit Kumar",
    role: "Business Owner",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=400&auto=format&fit=crop",
    review:
      '"The pricing is very fair and the support is excellent. Highly recommended for growing teams."',
  },
];

export default function Testimonials() {
  return (
    <section className="bg-[#f7f8fb] px-6 py-28">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="text-center">
          <h2 className="text-5xl font-extrabold tracking-tight text-[#0f172a]">
            Trusted by Teams
          </h2>

          <p className="mt-6 text-xl text-[#64748b]">
            See what our customers have to say about TeamTrack Pro.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="mt-20 grid grid-cols-1 gap-10 lg:grid-cols-3">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{
                y: -8,
                scale: 1.02,
              }}
              transition={{
                type: "spring",
                stiffness: 250,
                damping: 18,
              }}
              className="rounded-[34px] border border-[#e6edf7] bg-white p-10 shadow-sm transition-all duration-300 hover:shadow-2xl hover:shadow-blue-100/40"
            >
              {/* Stars */}
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 fill-blue-600 text-blue-600"
                  />
                ))}
              </div>

              {/* Review */}
              <p className="mt-10 text-[20px] italic leading-[44px] text-[#0f172a]">
                {item.review}
              </p>

              {/* User */}
              <div className="mt-12 flex items-center gap-5">
                {/* Avatar */}
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-16 w-16 rounded-full object-cover ring-2 ring-white shadow-md"
                />

                {/* Info */}
                <div>
                  <h4 className="text-[24px] font-bold text-[#0f172a]">
                    {item.name}
                  </h4>

                  <p className="mt-1 text-[18px] text-[#64748b]">{item.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
