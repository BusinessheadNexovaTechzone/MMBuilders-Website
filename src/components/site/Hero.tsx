import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import { Counter } from "./Counter";

// const HERO_IMG =
//   "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=2400&q=80";

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden">
      <motion.div
        initial={{ scale: 1.15 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.8, ease: "easeOut" }}
        className="absolute inset-0"
      >
        <img
          src={'/hero.jpg'}
          alt="Modern construction site with cranes"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/55 to-black/85" />
      </motion.div>

      <div className="relative z-10 container-x pt-40 pb-24 min-h-screen flex flex-col justify-center">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center gap-2 self-start rounded-full border border-white/25 bg-white/10 backdrop-blur px-4 py-1.5 text-xs font-medium text-white uppercase tracking-widest"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-yellow" />
          Premium Construction · Since 2004
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.8 }}
          className="mt-6 max-w-5xl text-white font-display font-semibold text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] leading-[1.02]"
        >
          Building Dreams,
          <br />
          <span className="text-yellow">Creating</span> Landmarks.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55 }}
          className="mt-6 max-w-2xl text-white/80 text-base md:text-lg"
        >
          We deliver premium residential, commercial, and industrial construction
          with unmatched craftsmanship, engineering rigor, and trust.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="mt-10 flex flex-wrap gap-4"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-yellow text-yellow-foreground px-7 py-3.5 text-sm font-semibold hover:brightness-95 transition"
          >
            Get Started <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="#gallery"
            className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/5 backdrop-blur text-white px-7 py-3.5 text-sm font-semibold hover:bg-white/10 transition"
          >
            <Play className="w-4 h-4" /> View Projects
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="mt-20 grid grid-cols-3 gap-4 md:gap-10 max-w-3xl"
        >
          {[
            { n: 60, s: "+", l: "Projects Delivered" },
            { n: 20, s: "+", l: "Years of Experience" },
            { n: 100, s: "%", l: "Customer Satisfaction" },
          ].map((it) => (
            <div key={it.l} className="border-l-2 border-yellow pl-4 md:pl-6">
              <div className="text-white font-display font-bold text-3xl md:text-5xl">
                <Counter to={it.n} suffix={it.s} />
              </div>
              <div className="mt-1 text-xs md:text-sm text-white/70 uppercase tracking-wider">
                {it.l}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
