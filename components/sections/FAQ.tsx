"use client";

import { useState } from "react";
import { faqs, faqSchema } from "@/lib/schema";

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="bg-[#F5F5F5] py-16 md:py-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10">
          <p className="text-[#E91E8C] font-semibold text-sm uppercase tracking-widest mb-3">FAQ</p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#2D2D2D]">Questions fréquentes</h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="bg-white rounded-xl border border-gray-200 overflow-hidden"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full text-left flex items-center justify-between gap-4 px-6 py-5 font-semibold text-[#2D2D2D] hover:text-[#E91E8C] transition-colors"
                aria-expanded={open === i}
              >
                <span className="text-sm md:text-base">{faq.question}</span>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className={`flex-shrink-0 transition-transform duration-200 ${open === i ? "rotate-180 text-[#E91E8C]" : ""}`}
                >
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </button>
              {open === i && (
                <div className="px-6 pb-5 text-[#555555] text-sm leading-relaxed border-t border-gray-100 pt-4">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-[#555555] mt-8">
          Une autre question ?{" "}
          <a href="tel:0232392698" className="text-[#E91E8C] font-semibold hover:underline">
            Appelez le 02 32 39 26 98
          </a>
        </p>
      </div>
    </section>
  );
}
