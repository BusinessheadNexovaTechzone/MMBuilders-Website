import { MapPin, Calendar } from "lucide-react";
import { Reveal } from "./Reveal";

const projects = [
  { title: "Azure Luxury Villa", location: "Bengaluru", year: 2024, img: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1400&q=80", tag: "Residential" },
  { title: "Skyline Apartments", location: "Mumbai", year: 2023, img: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1400&q=80", tag: "Residential" },
  { title: "Meridian Corporate Office", location: "Hyderabad", year: 2024, img: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1400&q=80", tag: "Commercial" },
  { title: "Ironworks Factory", location: "Pune", year: 2022, img: "https://images.unsplash.com/photo-1565043666747-69f6646db940?auto=format&fit=crop&w=1400&q=80", tag: "Industrial" },
  { title: "Riverside Public School", location: "Chennai", year: 2023, img: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=1400&q=80", tag: "Institutional" },
  { title: "Grace Multi-Specialty Hospital", location: "Delhi NCR", year: 2024, img: "https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?auto=format&fit=crop&w=1400&q=80", tag: "Healthcare" },
];

export function Projects() {
  return (
    <section id="projects" className="py-24 md:py-32 bg-background">
      <div className="container-x">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <Reveal>
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                Featured Portfolio
              </span>
              <h2 className="mt-4 font-display font-semibold text-4xl md:text-5xl leading-tight max-w-2xl">
                Landmarks we've delivered.
              </h2>
            </div>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.05}>
              <a href="#contact" className="group block rounded-2xl overflow-hidden bg-card border border-border hover:shadow-xl transition">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={p.img}
                    alt={p.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <span className="absolute top-4 left-4 rounded-full bg-yellow text-yellow-foreground px-3 py-1 text-xs font-semibold">
                    {p.tag}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="font-display font-semibold text-xl group-hover:text-yellow transition">
                    {p.title}
                  </h3>
                  <div className="mt-3 flex items-center gap-5 text-sm text-muted-foreground">
                    <span className="inline-flex items-center gap-1.5"><MapPin className="w-4 h-4" /> {p.location}</span>
                    <span className="inline-flex items-center gap-1.5"><Calendar className="w-4 h-4" /> {p.year}</span>
                  </div>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
