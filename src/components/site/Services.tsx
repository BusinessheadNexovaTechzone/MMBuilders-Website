import {
  Home, Building2, Factory, Palette, Hammer, Compass, ArrowUpRight,
} from "lucide-react";
import { Reveal } from "./Reveal";

const services = [
  { icon: Home, title: "Residential Construction", desc: "Luxury villas, apartments and custom homes built with precision craftsmanship." },
  { icon: Building2, title: "Commercial Buildings", desc: "Corporate offices, retail complexes and mixed-use developments." },
  { icon: Factory, title: "Industrial Projects", desc: "Factories, warehouses and heavy industrial facilities at scale." },
  { icon: Palette, title: "Interior Design", desc: "Bespoke interiors that translate brand and lifestyle into space." },
  { icon: Hammer, title: "Renovation", desc: "Modernize, restore, or reimagine existing structures end-to-end." },
  { icon: Compass, title: "Architecture Planning", desc: "Master planning, feasibility and design across every project phase." },
];

export function Services() {
  return (
    <section id="services" className="py-24 md:py-32 bg-surface">
      <div className="container-x">
        <div className="flex flex-col items-center gap-6 mb-14 text-center">
          <Reveal>
            <div className="max-w-2xl">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                What we do
              </span>
              <h2 className="mt-4 font-display font-semibold text-4xl md:text-5xl leading-tight">
                Full-service construction, from blueprint to build.
              </h2>
            </div>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.05}>
              <div className="group relative h-full p-8 rounded-2xl bg-card border border-border overflow-hidden hover:-translate-y-1 hover:shadow-xl hover:border-yellow transition-all duration-300">
                <div className="absolute inset-0 bg-primary translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                <div className="relative z-10">
                  <div className="flex items-start justify-between">
                    <span className="grid place-items-center w-14 h-14 rounded-xl bg-yellow text-yellow-foreground">
                      <s.icon className="w-6 h-6" />
                    </span>
                    <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-yellow transition" />
                  </div>
                  <h3 className="mt-8 font-display font-semibold text-2xl group-hover:text-white transition">
                    {s.title}
                  </h3>
                  <p className="mt-3 text-muted-foreground group-hover:text-white/70 transition">
                    {s.desc}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
