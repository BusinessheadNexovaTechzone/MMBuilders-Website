import { HardHat, Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-x py-20 grid md:grid-cols-2 lg:grid-cols-4 gap-12">
        <div>
          <a href="#home" className="flex items-center gap-2">
            <span className="grid place-items-center w-9 h-9 rounded-md bg-yellow text-yellow-foreground">
              <HardHat className="w-5 h-5" />
            </span>
            <span className="font-display font-bold text-lg">MM Builder</span>
          </a>
          <p className="mt-5 text-sm text-white/60 leading-relaxed max-w-xs">
            Premium residential, commercial and industrial construction — engineered to endure generations.
          </p>
          {/* <div className="mt-6 flex gap-3">
            {[Facebook, Instagram, Linkedin, Twitter, Youtube].map((I, i) => (
              <a key={i} href="#" className="grid place-items-center w-9 h-9 rounded-full bg-white/10 hover:bg-yellow hover:text-yellow-foreground transition" aria-label="Social link">
                <I className="w-4 h-4" />
              </a>
            ))}
          </div> */}
        </div>

        <div>
          <h4 className="font-display font-semibold mb-5">Quick Links</h4>
          <ul className="space-y-3 text-sm text-white/60">
            {["Home", "About", "Projects", "Gallery", "Contact"].map((l) => (
              <li key={l}><a href={`#${l.toLowerCase()}`} className="hover:text-yellow transition">{l}</a></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display font-semibold mb-5">Services</h4>
          <ul className="space-y-3 text-sm text-white/60">
            {["Residential", "Commercial", "Industrial", "Interior Design", "Renovation"].map((l) => (
              <li key={l}><a href="#services" className="hover:text-yellow transition">{l}</a></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display font-semibold mb-5">Contact</h4>
          <ul className="space-y-3 text-sm text-white/60">
            <li>+91 9443625561</li>
            <li>mmbuilderssipcot@gmail.com</li>
            <li>MM Builder,No1/2 Dharmambal Palaniappan Complex, First Floor, Mount Poonamallee Rd, Near A2B Restaurant, Ramapuram, Nandambakkam, Chennai, Tamil Nadu - 600089.</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/50">
          <p>© {new Date().getFullYear()} MM Builder. All rights reserved.</p>
          <p>Designed by MM Builder</p>
        </div>
      </div>
    </footer>
  );
}
