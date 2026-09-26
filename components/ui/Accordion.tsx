"use client";

import { useId, useState, type ReactNode } from "react";

type Item = { question: string; answer: string };

export function Accordion({ items }: { items: Item[] }) {
  const [open, setOpen] = useState<number | null>(0);
  const baseId = useId();

  return (
    <div className="divide-y divide-graphite/50 rounded-md border border-graphite/60 bg-charcoal">
      {items.map((item, i) => {
        const isOpen = open === i;
        const panelId = `${baseId}-panel-${i}`;
        const buttonId = `${baseId}-button-${i}`;
        return (
          <div key={item.question}>
            <h3>
              <button
                type="button"
                id={buttonId}
                aria-expanded={isOpen}
                aria-controls={panelId}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-base font-medium text-ivory hover:text-mint"
                onClick={() => setOpen(isOpen ? null : i)}
              >
                <span>{item.question}</span>
                <span
                  className="shrink-0 text-mint"
                  aria-hidden
                >
                  {isOpen ? "−" : "+"}
                </span>
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              hidden={!isOpen}
              className="px-5 pb-5 text-sm leading-relaxed text-mist"
            >
              {isOpen ? item.answer : null}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export function SoftAccordion({ items }: { items: Item[] }) {
  const [open, setOpen] = useState<number | null>(0);
  const baseId = useId();

  return (
    <div className="divide-y divide-graphite/30 rounded-md border border-graphite/20 bg-white">
      {items.map((item, i) => {
        const isOpen = open === i;
        const panelId = `${baseId}-soft-panel-${i}`;
        const buttonId = `${baseId}-soft-button-${i}`;
        return (
          <div key={item.question}>
            <h3>
              <button
                type="button"
                id={buttonId}
                aria-expanded={isOpen}
                aria-controls={panelId}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-base font-medium text-ink hover:text-mint-deep"
                onClick={() => setOpen(isOpen ? null : i)}
              >
                <span>{item.question}</span>
                <span className="shrink-0 text-mint-deep" aria-hidden>
                  {isOpen ? "−" : "+"}
                </span>
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              hidden={!isOpen}
              className="px-5 pb-5 text-sm leading-relaxed text-[#4a4f5c]"
            >
              {isOpen ? <Answer>{item.answer}</Answer> : null}
            </div>
          </div>
        );
      })}
    </div>
  );
}

function Answer({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
