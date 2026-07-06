import { MessageSquare } from "lucide-react";

export function WhatsAppCTA() {
  return (
    <a
      href="https://wa.me/919443625561?text=Hello%20MM%20Builders%20team%2C%20I%20would%20like%20to%20know%20more%20about%20your%20services."
      target="_blank"
      rel="noreferrer noopener"
      aria-label="Chat with MM Builders on WhatsApp"
      className="fixed bottom-20 right-6 z-50 inline-flex items-center gap-3 rounded-full bg-[#25D366] px-4 py-3 text-white shadow-[0_12px_30px_rgba(37,211,102,0.24)] transition hover:bg-[#1ebe57] hover:brightness-110"
    >
      <span className="grid place-items-center w-10 h-10 rounded-full bg-white/15">
        <MessageSquare className="w-5 h-5" />
      </span>
      <span className="hidden md:inline text-sm font-semibold">WhatsApp</span>
    </a>
  );
}
