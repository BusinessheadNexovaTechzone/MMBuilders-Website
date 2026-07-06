import { Reveal } from "./Reveal";

const steps = [
  { n: "01", title: "Planning", desc: "Feasibility, budgeting and site studies." },
  { n: "02", title: "Design", desc: "Architecture, structural and MEP design." },
  { n: "03", title: "Construction", desc: "Precision execution with certified teams." },
  { n: "04", title: "Inspection", desc: "Quality, safety and compliance checks." },
  { n: "05", title: "Delivery", desc: "Handover with full documentation." },
];

export function Timeline() {
  return (
    <section className="py-24 md:py-32 bg-surface">
      <div className="container-x">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              Our Process
            </span>
            <h2 className="mt-4 font-display font-semibold text-4xl md:text-5xl leading-tight">
              A proven 5-step process.
            </h2>
          </div>
        </Reveal>

        <div className="mt-20 relative">
          <div className="hidden lg:block absolute top-10 left-0 right-0 h-px bg-border" />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {steps.map((s, i) => (
              <Reveal key={s.n} delay={i * 0.08}>
                <div className="relative text-center">
                  <div className="mx-auto grid place-items-center w-20 h-20 rounded-full bg-background border-2 border-yellow font-display font-bold text-xl text-primary shadow-sm">
                    {s.n}
                  </div>
                  <h3 className="mt-6 font-display font-semibold text-xl">{s.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
