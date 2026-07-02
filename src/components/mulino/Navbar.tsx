import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { IMG } from "./assets";
import { cn } from "@/lib/utils";

const LINKS = [
  { href: "#home", label: "Home" },
  { href: "#mulino", label: "Il Mulino" },
  { href: "#natura", label: "Natura" },
  { href: "#didattica", label: "Didattica" },
  { href: "#galleria", label: "Galleria" },
  { href: "#video", label: "Video" },
  { href: "#contatti", label: "Contatti" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-pergamena/92 shadow-[0_1px_0_0_oklch(0.82_0.04_70)] backdrop-blur-md"
          : "bg-transparent",
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:h-20 sm:px-8">
        <a href="#home" className="flex items-center gap-3">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded-full bg-pergamena ring-1 ring-grano/40 sm:h-11 sm:w-11">
            <img src={IMG.logo} alt="Logo Antico Mulino delle Fate" className="h-full w-full object-cover" />
          </span>
          <span
            className={cn(
              "hidden font-display text-lg tracking-wide sm:block sm:text-xl",
              scrolled ? "text-bordeaux" : "text-pergamena",
            )}
          >
            Antico Mulino delle Fate
          </span>
        </a>

        <nav className="hidden items-center gap-1 lg:flex">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={cn(
                "rounded-full px-3 py-2 text-[13px] uppercase tracking-[0.18em] transition-colors",
                scrolled
                  ? "text-bordeaux/80 hover:text-grano"
                  : "text-pergamena/85 hover:text-grano",
              )}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          aria-label={open ? "Chiudi menu" : "Apri menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className={cn(
            "flex h-11 w-11 items-center justify-center rounded-full ring-1 transition-colors lg:hidden",
            scrolled
              ? "bg-pergamena text-bordeaux ring-marrone/30"
              : "bg-pergamena/10 text-pergamena ring-pergamena/30",
          )}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        className={cn(
          "fixed inset-x-0 top-16 z-40 origin-top overflow-hidden bg-pergamena shadow-2xl transition-all duration-400 lg:hidden",
          open ? "max-h-[80vh] opacity-100" : "pointer-events-none max-h-0 opacity-0",
        )}
      >
        <nav className="flex flex-col divide-y divide-marrone/10 px-6 py-4">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="py-4 font-display text-xl text-bordeaux hover:text-grano"
            >
              {l.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
