import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { Reveal } from "./Reveal";

const images = [
  "/project1.jpeg",
  "/project2.jpeg",
  "/project3.jpeg",
  "/project4.jpeg",
  "/project5.jpeg",
  "/project6.jpeg",
  "/project7.jpeg",
  "/project8.jpeg",
  "/project9.jpeg",
  "/project10.jpeg",
  "/project11.jpeg",
  "/project12.jpeg",
];

const heights = ["h-64", "h-80", "h-72", "h-96", "h-72", "h-64", "h-80", "h-72"];

export function Gallery() {
  const [open, setOpen] = useState<string | null>(null);
  return (
    <section id="gallery" className="py-24 md:py-32 bg-surface">
      <div className="container-x">
        <Reveal>
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              Gallery
            </span>
            <h2 className="mt-4 font-display font-semibold text-4xl md:text-5xl leading-tight">
              On-site & delivered.
            </h2>
          </div>
        </Reveal>

        <div className="mt-14 columns-1 sm:columns-2 lg:columns-3 gap-5 [column-fill:_balance]">
          {images.map((src, i) => (
            <button
              key={src}
              onClick={() => setOpen(src)}
              className={`mb-5 block w-full overflow-hidden rounded-xl group relative ${heights[i]}`}
            >
              <img
                src={src}
                alt={`Construction ${i + 1}`}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <span className="absolute inset-0 bg-primary/0 group-hover:bg-primary/40 transition" />
            </button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(null)}
            className="fixed inset-0 z-[100] bg-black/90 backdrop-blur flex items-center justify-center p-6"
          >
            <button
              onClick={() => setOpen(null)}
              className="absolute top-6 right-6 text-white p-2 rounded-full bg-white/10 hover:bg-white/20"
              aria-label="Close"
            >
              <X />
            </button>
            <motion.img
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              src={open}
              alt="Preview"
              className="max-w-[92vw] max-h-[86vh] rounded-xl object-contain"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
