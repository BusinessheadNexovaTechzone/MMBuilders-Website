import { FormEvent, useState } from "react";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { Reveal } from "./Reveal";

export function Contact() {
  const [sent, setSent] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const officeAddress = `MM Builder, No 1/2 Dharmambal Palaniappan Complex, First Floor, Mount Poonamallee Rd, Near A2B Restaurant, Ramapuram, Nandambakkam, Chennai, Tamil Nadu - 600089.`;
  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(officeAddress)}&output=embed`;

  const handleChange = (field: keyof typeof formData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { name, email, phone, message } = formData;
    const whatsappText = encodeURIComponent(
      `Hello MM Builders, I would like a free quote.\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nProject details: ${message}`,
    );

    window.open(`https://wa.me/919443625561?text=${whatsappText}`, "_blank");
    setSent(true);
  };

  return (
    <section id="contact" className="scroll-mt-24 md:scroll-mt-32 py-24 md:py-32 bg-surface">
      <div className="container-x grid lg:grid-cols-2 gap-12 lg:gap-16">
        <Reveal>
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              Get in touch
            </span>
            <h2 className="mt-4 font-display font-semibold text-4xl md:text-5xl leading-tight">
              Let's build something remarkable.
            </h2>
            <p className="mt-6 text-muted-foreground">
              Share your project brief — our team will get back within 24 hours with a free
              consultation and preliminary estimate.
            </p>

            <div className="mt-10 space-y-5">
              {[
                { icon: Phone, label: "Phone", val: "+91 9443625561" },
                { icon: Mail, label: "Email", val: "mmbuilderssipcot@gmail.com" },
                { icon: MapPin, label: "Head Office", val: officeAddress },
                { icon: Clock, label: "Working Hours", val: "Mon–Sat · 9:00 AM – 6:00 PM" },
              ].map((c) => (
                <div key={c.label} className="flex items-start gap-4">
                  <span className="grid place-items-center w-11 h-11 rounded-lg bg-primary text-primary-foreground shrink-0">
                    <c.icon className="w-5 h-5" />
                  </span>
                  <div>
                    <div className="text-xs uppercase tracking-widest text-muted-foreground">
                      {c.label}
                    </div>
                    <div className="font-medium">{c.val}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 rounded-2xl overflow-hidden border border-border h-64">
              <iframe
                title="Office location"
                src={mapSrc}
                className="w-full h-full"
                loading="lazy"
                allowFullScreen
              />
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <form
            onSubmit={handleSubmit}
            className="rounded-3xl bg-card border border-border p-8 md:p-10 shadow-sm"
          >
            <h3 className="font-display font-semibold text-2xl">Request a free quote</h3>
            <p className="mt-2 text-sm text-muted-foreground">All fields required.</p>

            <div className="mt-8 space-y-5">
              {[
                { name: "name", label: "Full Name", type: "text", placeholder: "Enter Your Name" },
                { name: "email", label: "Email", type: "email", placeholder: "Enter Your Email" },
                {
                  name: "phone",
                  label: "Phone",
                  type: "tel",
                  placeholder: "Enter Your Phone Number",
                },
              ].map((f) => (
                <div key={f.name}>
                  <label className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                    {f.label}
                  </label>
                  <input
                    required
                    type={f.type}
                    name={f.name}
                    placeholder={f.placeholder}
                    value={formData[f.name as keyof typeof formData]}
                    onChange={(event) =>
                      handleChange(f.name as keyof typeof formData, event.target.value)
                    }
                    className="mt-2 w-full rounded-lg border border-border bg-background px-4 py-3 text-sm outline-none focus:border-yellow focus:ring-2 focus:ring-yellow/30 transition"
                  />
                </div>
              ))}
              <div>
                <label className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                  Project Details
                </label>
                <textarea
                  required
                  name="message"
                  rows={5}
                  placeholder="Tell us about your project scope, location and timeline…"
                  value={formData.message}
                  onChange={(event) => handleChange("message", event.target.value)}
                  className="mt-2 w-full rounded-lg border border-border bg-background px-4 py-3 text-sm outline-none focus:border-yellow focus:ring-2 focus:ring-yellow/30 transition resize-none"
                />
              </div>
            </div>

            <button
              type="submit"
              className="mt-8 w-full inline-flex items-center justify-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-4 text-sm font-semibold hover:bg-yellow hover:text-yellow-foreground transition"
            >
              <Send className="w-4 h-4" />
              {sent ? "Thank you — we'll be in touch!" : "Send Message"}
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
