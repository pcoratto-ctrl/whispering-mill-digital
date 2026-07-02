import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { IMG } from "./assets";
import { GradedImage } from "./GradedImage";
import { ScrollReveal } from "./ScrollReveal";
import { cn } from "@/lib/utils";

type Cat = "Tutte" | "Il Mulino" | "La Fata" | "Natura" | "Didattica" | "Territorio";

const CATS: Cat[] = ["Tutte", "Il Mulino", "La Fata", "Natura", "Didattica", "Territorio"];

type Item = {
  src: string;
  alt: string;
  cat: Exclude<Cat, "Tutte">;
  span: "sm" | "md" | "lg" | "tall" | "wide";
  variant?: "warm" | "night" | "soft" | "default";
  muted?: boolean;
};

const ITEMS: Item[] = [
  { src: IMG.mulinoGiorno, alt: "Esterno dell'Antico Mulino delle Fate a Lamezia Terme", cat: "Il Mulino", span: "lg", variant: "soft" },
  { src: IMG.statuaFata, alt: "Statua bronzea della fata Gelsomina davanti alla ruota del mulino", cat: "La Fata", span: "tall", variant: "warm" },
  { src: IMG.mulinoNotte, alt: "Antico Mulino delle Fate illuminato di notte", cat: "Il Mulino", span: "md", variant: "night" },
  { src: IMG.boscoLucciole, alt: "Sentiero nel bosco con lucciole intorno al mulino", cat: "Natura", span: "wide", variant: "night" },
  { src: IMG.didatticaSentiero, alt: "Attività didattica nella natura presso il Mulino delle Fate", cat: "Didattica", span: "md", variant: "warm", muted: true },
  { src: IMG.didatticaAsinello, alt: "Bambini con un asinello durante un'attività didattica", cat: "Didattica", span: "sm", variant: "warm", muted: true },
  { src: IMG.didatticaLaboratori, alt: "Laboratori di macinazione all'Antico Mulino delle Fate", cat: "Didattica", span: "md", variant: "warm", muted: true },
  { src: IMG.mulinoLucciole, alt: "Il mulino di notte con lucciole nel giardino", cat: "Natura", span: "tall", variant: "night" },
  { src: IMG.castelloNicastro, alt: "Castello di Nicastro illuminato di notte", cat: "Territorio", span: "wide", variant: "night" },
];

const spanClass: Record<Item["span"], string> = {
  sm: "md:col-span-3 md:row-span-1",
  md: "md:col-span-4 md:row-span-1",
  lg: "md:col-span-5 md:row-span-2",
  tall: "md:col-span-4 md:row-span-2",
  wide: "md:col-span-7 md:row-span-1",
};

const ratioClass: Record<Item["span"], string> = {
  sm: "aspect-[4/3]",
  md: "aspect-[4/3]",
  lg: "aspect-[4/5]",
  tall: "aspect-[3/4]",
  wide: "aspect-[16/9]",
};

export function SectionGalleria() {
  const [cat, setCat] = useState<Cat>("Tutte");
  const [open, setOpen] = useState<number | null>(null);

  const filtered = ITEMS.filter((it) => cat === "Tutte" || it.cat === cat);

  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(null);
      if (e.key === "ArrowRight") setOpen((v) => (v === null ? null : (v + 1) % filtered.length));
      if (e.key === "ArrowLeft") setOpen((v) => (v === null ? null : (v - 1 + filtered.length) % filtered.length));
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, filtered.length]);

  return (
    <section id="galleria" className="relative bg-pergamena py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-10">
        <ScrollReveal className="mx-auto max-w-3xl text-center">
          <div className="ornament-rule mx-auto mb-6 max-w-[220px] justify-center">Galleria</div>
          <h2 className="font-display text-[clamp(2rem,4.5vw,3.5rem)] leading-tight text-bordeaux">
            Immagini <span className="italic text-terra">dal Mulino</span>
          </h2>
        </ScrollReveal>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
          {CATS.map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => setCat(c)}
              className={cn(
                "rounded-full border px-4 py-2 text-[12px] uppercase tracking-[0.2em] transition-colors",
                cat === c
                  ? "border-bordeaux bg-bordeaux text-pergamena"
                  : "border-marrone/25 text-marrone/80 hover:border-grano hover:text-grano",
              )}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="mt-12 grid auto-rows-[220px] grid-cols-1 gap-4 sm:auto-rows-[260px] md:grid-cols-12 md:gap-5">
          {filtered.map((it, i) => (
            <button
              key={it.src + i}
              type="button"
              onClick={() => setOpen(i)}
              className={cn(
                "group relative row-span-1 overflow-hidden rounded-sm ring-1 ring-marrone/15 transition-all hover:ring-grano/60",
                spanClass[it.span],
                "col-span-1",
                ratioClass[it.span],
                "md:aspect-auto",
              )}
              aria-label={`Apri ${it.alt}`}
            >
              <GradedImage
                src={it.src}
                alt={it.alt}
                variant={it.variant ?? "soft"}
                muted={it.muted}
                frameClassName="absolute inset-0 h-full w-full"
                imgClassName="group-hover:scale-[1.06]"
              />
              <div className="absolute inset-0 z-[3] flex items-end bg-gradient-to-t from-bordeaux/70 via-transparent to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <span className="text-xs uppercase tracking-[0.2em] text-pergamena">{it.cat}</span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {open !== null && (
        <div
          role="dialog"
          aria-modal
          aria-label="Immagine ingrandita"
          className="fixed inset-0 z-[90] flex items-center justify-center bg-bordeaux/95 p-4 sm:p-8"
          onClick={() => setOpen(null)}
        >
          <button
            aria-label="Chiudi"
            onClick={() => setOpen(null)}
            className="absolute right-4 top-4 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-pergamena/10 text-pergamena ring-1 ring-pergamena/30 hover:bg-pergamena/20"
          >
            <X className="h-5 w-5" />
          </button>
          <button
            aria-label="Precedente"
            onClick={(e) => {
              e.stopPropagation();
              setOpen((v) => (v === null ? null : (v - 1 + filtered.length) % filtered.length));
            }}
            className="absolute left-2 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-pergamena/10 text-pergamena ring-1 ring-pergamena/30 hover:bg-pergamena/20 sm:left-6"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            aria-label="Successiva"
            onClick={(e) => {
              e.stopPropagation();
              setOpen((v) => (v === null ? null : (v + 1) % filtered.length));
            }}
            className="absolute right-2 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-pergamena/10 text-pergamena ring-1 ring-pergamena/30 hover:bg-pergamena/20 sm:right-6"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
          <figure
            className="relative max-h-full max-w-6xl"
            onClick={(e) => e.stopPropagation()}
          >
            <GradedImage
              src={filtered[open].src}
              alt={filtered[open].alt}
              variant={filtered[open].variant ?? "soft"}
              muted={filtered[open].muted}
              frameClassName="max-h-[80vh] w-auto rounded-sm"
              imgClassName="max-h-[80vh] w-auto"
            />
            <figcaption className="mt-3 text-center text-sm text-pergamena/80">
              {filtered[open].alt}
            </figcaption>
          </figure>
        </div>
      )}
    </section>
  );
}
