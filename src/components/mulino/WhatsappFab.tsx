import { MessageCircle } from "lucide-react";

export function WhatsappFab() {
  return (
    <a
      href="https://wa.me/393281365043"
      target="_blank"
      rel="noreferrer"
      aria-label="Scrivici su WhatsApp"
      className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-muschio text-pergamena shadow-[0_20px_40px_-15px_oklch(0.28_0.09_25/0.6)] ring-1 ring-pergamena/20 transition-transform hover:scale-105 sm:bottom-8 sm:right-8"
    >
      <MessageCircle className="h-6 w-6" />
    </a>
  );
}
