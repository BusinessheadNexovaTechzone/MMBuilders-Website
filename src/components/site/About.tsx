import { CheckCircle2, Award, Users, Wrench, ShieldCheck, BadgeCheck } from "lucide-react";
import { Reveal } from "./Reveal";

const features = [
  { icon: Award, label: "20+ Years Experience" },
  { icon: Users, label: "Expert Engineers" },
  { icon: Wrench, label: "Modern Equipment" },
  { icon: CheckCircle2, label: "Quality Materials" },
  { icon: ShieldCheck, label: "Government Approved" },
  // { icon: BadgeCheck, label: "ISO 9001 Certified" },
];

export function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-background">
      <div className="container-x grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
        <Reveal>
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl">
              <img
                src="/Engineers reviewing.avif"
                alt="Engineers reviewing plans on site"
                className="w-full h-[560px] object-cover"
              />
            </div>
            <div className="hidden md:block absolute -bottom-8 -right-8 bg-yellow text-yellow-foreground rounded-2xl px-8 py-6 shadow-xl">
              <div className="font-display font-bold text-5xl">20+</div>
              <div className="text-sm font-medium mt-1">Years crafting landmarks</div>
            </div>
          </div>
        </Reveal>

        <div>
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              About MM Builder
            </span>
            <h2 className="mt-4 font-display font-semibold text-4xl md:text-5xl leading-tight">
              Engineering excellence, built on trust.
            </h2>
            <p className="mt-6 text-muted-foreground text-lg leading-relaxed">
              MM Builder is a premium construction firm delivering iconic
              residential, commercial and industrial projects. Our teams pair
              precision engineering with world-class materials to build spaces
              that endure generations.
            </p>
          </Reveal>

          <div className="mt-10 grid sm:grid-cols-2 gap-4">
            {features.map((f, i) => (
              <Reveal key={f.label} delay={i * 0.05}>
                <div className="group flex items-center gap-4 p-4 rounded-xl border border-border bg-card hover:border-yellow hover:shadow-lg transition">
                  <span className="grid place-items-center w-11 h-11 rounded-lg bg-primary text-primary-foreground group-hover:bg-yellow group-hover:text-yellow-foreground transition">
                    <f.icon className="w-5 h-5" />
                  </span>
                  <span className="font-medium">{f.label}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
