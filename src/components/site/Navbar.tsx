import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Menu, X, HardHat } from "lucide-react";

const links = [
  ["Home", "#home"],
  ["About", "#about"],
  ["Services", "#services"],
  ["Projects", "#gallery"],
  ["Why Us", "#why"],
  ["Testimonials", "#testimonials"],
  // ["Gallery", "#gallery"],
  ["Contact", "#contact"],
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/90 backdrop-blur-lg border-b border-border shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container-x flex items-center justify-between h-20 py-4">
        <a href="#home" className="flex items-center gap-3 group">
          <span className="grid place-items-center w-9 h-9 rounded-md bg-yellow text-yellow-foreground">
            <HardHat className="w-5 h-5" strokeWidth={2.4} />
          </span>
          <span
            className={`font-display font-bold text-lg tracking-tight ${
              scrolled ? "text-foreground" : "text-white"
            }`}
          >
            MM Builders
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-8 ">
          {links.map(([label, href]) => (
            <a
              key={href}
              href={href}
              className={`font-nmedium text-lg transition-colors p-3 ${
                scrolled
                  ? "text-foreground/80 hover:text-foreground"
                  : "text-white/85 hover:text-white"
              }`}
            >
              {label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="hidden lg:inline-flex items-center gap-2 rounded-full bg-yellow text-yellow-foreground px-5 py-2.5 text-sm font-semibold hover:brightness-95 transition"
        >
          Get Free Quote
        </a>

        <button
          onClick={() => setOpen((v) => !v)}
          className={`lg:hidden p-2 rounded-md ${scrolled ? "text-foreground" : "text-white"}`}
          aria-label="Toggle menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="lg:hidden bg-background border-t border-border"
        >
          <div className="container-x py-4 flex flex-col gap-1">
            {links.map(([label, href]) => (
              <a
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className="py-2 text-foreground/80 hover:text-foreground text-sm font-medium"
              >
                {label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex justify-center rounded-full bg-yellow text-yellow-foreground px-5 py-3 text-sm font-semibold"
            >
              Get Free Quote
            </a>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}
