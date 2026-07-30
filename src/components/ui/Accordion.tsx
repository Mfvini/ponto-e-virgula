"use client";

import { useState } from "react";

type AccordionItem = {
  question: string;
  answer: string;
};

type AccordionProps = {
  items: AccordionItem[];
};

export function Accordion({ items }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="space-y-3">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={item.question} className="overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-sm">
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : index)}
              className="flex w-full items-center justify-between gap-4 p-5 text-left text-zinc-950"
              aria-expanded={isOpen}
            >
              <span className="text-base font-semibold">{item.question}</span>
              <span className="text-sm text-zinc-500">{isOpen ? "-" : "+"}</span>
            </button>
            {isOpen ? (
              <div className="border-t border-zinc-200 bg-zinc-50 px-5 py-4 text-sm leading-7 text-zinc-600">
                {item.answer}
              </div>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}
