"use client";

import { Zap, TrendingUp, Clock, Users, DollarSign, Check } from "lucide-react";

export default function Benefits() {
  return (
    <section className="bg-[#f8fafc] py-24 px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        {/* LEFT */}
        <div>
          {/* Heading */}
          <h1 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900">
            Because your
            <br />
            <span className="text-blue-600">time is valuable.</span>
          </h1>

          {/* Description */}
          <p className="mt-6 text-gray-500 max-w-xl leading-relaxed">
            We are building a smarter system for businesses to manage teams
            efficiently. Our platform combines automation, real-time tracking,
            and smart notifications to simplify work management.
          </p>

          {/* Feature list */}
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
                <div
                  key={i}
                  className="flex items-center gap-4 bg-white border border-gray-200 rounded-2xl px-5 py-4 shadow-sm"
                >
                  {/* Icon */}
                  <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                    <Icon size={18} />
                  </div>

                  <p className="font-medium text-gray-900">{item.text}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* RIGHT CARD */}
        <div className="flex justify-center lg:justify-end">
          <div className="w-full max-w-[460px] rounded-[32px] bg-gradient-to-br from-blue-600 to-blue-500 p-8 text-white shadow-xl">
            {/* Icon */}
            <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-white/10">
              <TrendingUp size={22} />
            </div>

            {/* Title */}
            <h2 className="mt-6 text-2xl font-semibold">What You Get</h2>

            {/* List */}
            <div className="mt-6 space-y-4">
              {[
                "Save 2+ hours daily",
                "Increase productivity by 40%",
                "WebApp for easy access",
                "Better team control",
                "Group Chats",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  {/* Check */}
                  <div className="w-6 h-6 flex items-center justify-center rounded-full bg-white/20">
                    <Check size={14} />
                  </div>

                  <p className="text-sm font-medium">{item}</p>
                </div>
              ))}
            </div>

            {/* Button */}
            <button className="mt-8 w-full rounded-xl bg-white text-blue-600 py-3 text-sm font-semibold hover:bg-gray-100 transition">
              Start Managing Smarter
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
