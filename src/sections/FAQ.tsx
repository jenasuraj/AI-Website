"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "How WhatsApp alerts work?",
    answer:
      "Our system automatically triggers WhatsApp messages to staff when a task is assigned, updated, or when a deadline is approaching.",
  },
  {
    question: "Can I upgrade my plan anytime?",
    answer:
      "Yes, you can upgrade your plan anytime from your dashboard and changes apply instantly.",
  },
  {
    question: "Can I add more staff members?",
    answer:
      "Yes, you can easily add more staff members anytime depending on your plan.",
  },
  {
    question: "Is my business data secure?",
    answer:
      "Security is our top priority. We use enterprise-grade encryption and secure cloud infrastructure to keep your data safe.",
  },
];

export default function FAQ() {
  return (
    <section className="py-24 bg-[#f8fafc]">
      <div className="max-w-3xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Frequently Asked Questions
          </h2>
        </motion.div>

        {/* Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-14 space-y-7"
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="border-none"
              >
                <div className="bg-white border border-gray-200 px-6 py-5 shadow-[0_4px_12px_rgba(0,0,0,0.06)]">
                  <AccordionTrigger className="flex items-center justify-between text-sm font-medium text-gray-900 hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>

                  <AccordionContent className="mt-3 text-sm text-gray-500 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </div>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
