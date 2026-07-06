import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { Reveal } from "./Reveal";

const items = [
  {
    name: "Dinesh",
    role: "Owner Of Sunskar PVT LTD,Ranipet",
    // img: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=400&q=80",
    text: "MM Builder delivered our corporate HQ three weeks ahead of schedule with zero compromises. The craftsmanship is world-class.",
  },
  {
    name: "Bathri",
    role: "Owner Of IRICO,Ranipet Branch",
    // img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80",
    text: "From planning to handover, their team was meticulous, transparent, and genuinely committed to the vision.",
  },
  {
    name: "Suseela",
    role: "Owner Of Sakthi Radiographic,Gummidipoondi",

    // img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
    text: "Our dream villa turned out even better than the renders. Attention to detail on every finish is unmatched.",
  },

    {
    name: "Sharma",
    role: "Owner Of TCT AQUA,Gummidipoondi",

    // img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
    text: "Their team understood our industrial requirements perfectly and delivered a robust facility that meets every operational standard.",
  },
    {
    name: "Madhubalan",
    role: "Owner Of Winshine Company,Chennai",
    // img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
    text: "Working with MM Builder was a great experience. Their transparency, technical knowledge, and timely delivery made our project a complete success.",
  },
    {
    name: "Murali",
    role: "Owner Of Bright India,Ranipet",
    // img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
    text: "The factory infrastructure was delivered with exceptional precision. MM Builder's technical expertise truly stands out in the industry.",
  },
 {
    name: "Punithavel",
    role: "Owners Of Vel India Structures,Ranipet ",
    // img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
    text: "MM Builder delivered our industrial unit with outstanding structural quality and completed every milestone exactly as promised.",
  },

];

export function Testimonials() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % items.length), 5500);
    return () => clearInterval(t);
  }, []);

  const it = items[i];

  return (
    <section id="testimonials" className="py-8 md:py-12 bg-background">
      <div className="w-full mx-auto px-0">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto px-4 md:px-0">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              Client Voices
            </span>ranipet
            <h2 className="mt-4 font-display font-semibold text-4xl md:text-5xl leading-tight">
              Trusted by leaders and homeowners.
            </h2>
          </div>
        </Reveal>

        <div className="mt-8 relative px-4 md:px-0">
          <Quote className="absolute -top-6 -left-2 w-20 h-20 text-yellow/20" />
          <div className="relative min-h-[240px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="text-center"
              >
                <div className="flex justify-center gap-1 mb-6">
                  {Array.from({ length: 5 }).map((_, k) => (
                    <Star key={k} className="w-5 h-5 fill-yellow text-yellow" />
                  ))}
                </div>
                <p className="mx-auto max-w-3xl font-display text-xl md:text-2xl leading-snug text-foreground">
                  {it.text}
                </p>
                <div className="mt-8 flex items-center justify-center gap-4">
                {/* <img src={it.img} alt={it.name} className="w-14 h-14 rounded-full object-cover" /> */}
                  <div className="text-left">
                    <div className="font-semibold text-center">{it.name}</div>
                    <div className="text-sm text-muted-foreground">{it.role}</div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="mt-10 flex justify-center gap-2">
            {items.map((_, k) => (
              <button
                key={k}
                onClick={() => setI(k)}
                aria-label={`Go to testimonial ${k + 1}`}
                className={`h-1.5 rounded-full transition-all ${
                  k === i ? "w-10 bg-yellow" : "w-4 bg-border"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
