import { Users, Wallet, Clock, Layers, ShieldCheck, Headphones } from "lucide-react";
import { Reveal } from "./Reveal";
import { Counter } from "./Counter";

const items = [
  { icon: Users, title: "Experienced Team", desc: "Certified engineers, architects and craftsmen." },
  { icon: Wallet, title: "Affordable Pricing", desc: "Transparent quotes, no hidden costs, on-budget delivery." },
  { icon: Clock, title: "On-Time Delivery", desc: "Rigorous scheduling and milestone-driven execution." },
  { icon: Layers, title: "Quality Materials", desc: "Only trusted, certified building materials on every site." },
  { icon: ShieldCheck, title: "Safety First", desc: "Zero-compromise safety protocol across every project." },
  { icon: Headphones, title: "24/7 Support", desc: "Dedicated project managers reachable around the clock." },
];

const stats = [
  { n: 60, s: "+", l: "Projects" },
  { n: 20, s: "+", l: "Years" },
  { n: 5, s: "+", l: "Engineers" },
  { n: 98, s: "%", l: "On-Time" },
];

export function WhyUs() {
  return (
    <section id="why" className="py-24 md:py-32 bg-primary text-primary-foreground">
      <div className="container-x">
        <Reveal>
          <div className="max-w-2xl mx-auto text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-yellow">
              Why choose us
            </span>
            <h2 className="mt-4 font-display font-semibold text-4xl md:text-5xl leading-tight">
              Six reasons clients choose MM Builder
            </h2>
          </div>
        </Reveal>

        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((it, i) => (
            <Reveal key={it.title} delay={i * 0.05}>
              <div className="p-8 rounded-2xl bg-white/5 backdrop-blur border border-white/10 hover:border-yellow hover:-translate-y-1 transition-all duration-300 h-full">
                <span className="grid place-items-center w-12 h-12 rounded-lg bg-yellow text-yellow-foreground">
                  <it.icon className="w-5 h-5" />
                </span>
                <h3 className="mt-6 font-display font-semibold text-xl">{it.title}</h3>
                <p className="mt-2 text-white/65 text-sm leading-relaxed">{it.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-white/10 pl-25 pt-14">
          {stats.map((s) => (
            <div key={s.l}>
              <div className="font-display font-bold text-5xl md:text-6xl text-yellow">
                <Counter to={s.n} suffix={s.s} />
              </div>
              <div className="mt-2 text-sm uppercase tracking-widest text-white/60">{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
