import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { Reveal } from "./Reveal";

const faqs = [
  { q: "How is the cost of a project determined?", a: "Cost depends on scope, materials, site conditions and finish grade. We provide a transparent, itemized quote after a free site consultation." },
  { q: "What is a typical project timeline?", a: "Villas: 8–14 months. Apartments: 18–30 months. Commercial fit-outs: 3–6 months. Timelines are fixed contractually and tracked weekly." },
  { q: "Do you offer a warranty on construction?", a: "Yes. We offer a 10-year structural warranty and 1–3 year warranties on finishes, MEP and waterproofing." },
  { q: "How do you ensure quality?", a: "ISO-certified processes, third-party material testing, and multi-stage inspections at every milestone by an independent QA/QC team." },
  { q: "Which materials do you use?", a: "Only IS-certified brands: UltraTech / ACC cement, Tata / JSW steel, and premium finishing brands. All materials are traceable via QR-tagged batches." },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container-x grid lg:grid-cols-2 gap-14 lg:gap-20 items-start">
        <Reveal>
          <div className="lg:sticky lg:top-28">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              FAQ
            </span>
            <h2 className="mt-4 font-display font-semibold text-4xl md:text-5xl leading-tight">
              Frequently asked questions.
            </h2>
            <p className="mt-6 text-muted-foreground">
              Everything you should know before starting your project.
              Still curious? <a href="#contact" className="text-primary underline underline-offset-4 decoration-yellow decoration-2">Talk to us</a>.
            </p>
          </div>
        </Reveal>

        <div className="divide-y divide-border border-y border-border">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q}>
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-6 py-6 text-left"
                >
                  <span className="font-display font-medium text-lg md:text-xl">{f.q}</span>
                  <span className={`grid place-items-center w-9 h-9 rounded-full bg-yellow text-yellow-foreground shrink-0 transition-transform ${isOpen ? "rotate-45" : ""}`}>
                    <Plus className="w-4 h-4" />
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="pb-6 pr-14 text-muted-foreground leading-relaxed">{f.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
