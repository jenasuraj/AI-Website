"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

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
    <section className="bg-[#f8fafc] py-24">
      <div className="mx-auto max-w-6xl px-2">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-5xl font-extrabold tracking-tight text-[#0f172a]">
            Frequently Asked Questions
          </h2>
        </motion.div>

        <div className="mt-14 space-y-7">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -80 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  ease: "easeOut",
                  delay: i * 0.15,
                }}
              >
                <AccordionItem value={`item-${i}`} className="border-none">
                  <div className="border border-gray-200 bg-white px-6 py-5 shadow-[0_4px_12px_rgba(0,0,0,0.06)]">
                    <AccordionTrigger className="flex items-center justify-between text-sm font-medium text-gray-900 hover:no-underline">
                      {faq.question}
                    </AccordionTrigger>

                    <AccordionContent className="mt-3 text-sm leading-relaxed text-gray-500">
                      {faq.answer}
                    </AccordionContent>
                  </div>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}