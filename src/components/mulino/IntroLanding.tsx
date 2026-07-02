import { useEffect, useState } from "react";
import { IMG } from "./assets";
import { PillButton } from "./PillButton";

interface Props {
  onEnter: () => void;
}

const SLIDES = [IMG.mulinoGiorno, IMG.statuaFata, IMG.mulinoNotte];

export function IntroLanding({ onEnter }: Props) {
  const [leaving, setLeaving] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [slide, setSlide] = useState(0);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 30);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    SLIDES.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
    const id = setInterval(() => {
      setSlide((s) => (s + 1) % SLIDES.length);
    }, 6500);
    return () => clearInterval(id);
  }, []);

  const handleEnter = () => {
    setLeaving(true);
    try {
      sessionStorage.setItem("mulino-entered", "1");
    } catch {}
    setTimeout(onEnter, 900);
  };

  // Text shadow for readability over photography (no big boxes)
  const softShadow =
    "0 1px 2px oklch(0.15 0.05 25 / 0.55), 0 2px 12px oklch(0.15 0.05 25 / 0.45)";

  return (
    <div
      className={`fixed inset-0 z-[100] overflow-hidden transition-opacity duration-[900ms] ease-out ${
        leaving ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
      style={{ background: "var(--pergamena)" }}
    >
      {/* Slideshow */}
      <div className="absolute inset-0">
        {SLIDES.map((src, i) => {
          const active = i === slide;
          return (
            <img
              key={src}
              src={src}
              alt=""
              aria-hidden="true"
              className="absolute inset-0 h-full w-full object-cover"
              style={{
                opacity: active ? 1 : 0,
                transform: active ? "scale(1.03)" : "scale(1.0)",
                transition:
                  "opacity 2600ms cubic-bezier(0.45,0.05,0.55,0.95), transform 9000ms ease-out",
              }}
              loading={i === 0 ? "eager" : "lazy"}
              decoding="async"
            />
          );
        })}
      </div>

      {/* Subtle bottom gradient only where text sits — keeps photos visible */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-2/3"
        style={{
          background:
            "linear-gradient(180deg, transparent 0%, oklch(0.18 0.05 25 / 0.15) 40%, oklch(0.15 0.05 25 / 0.55) 100%)",
        }}
      />
      {/* Top light veil for the logo pill */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-40"
        style={{
          background:
            "linear-gradient(180deg, oklch(0.15 0.05 25 / 0.35) 0%, transparent 100%)",
        }}
      />

      {/* Content */}
      <div
        className={`relative z-10 flex min-h-screen flex-col items-center justify-end px-6 pb-14 text-center transition-all duration-[1200ms] ease-out sm:pb-20 ${
          mounted && !leaving ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        {/* Logo mark top */}
        <div className="absolute left-1/2 top-8 -translate-x-1/2">
          <div className="flex h-14 w-14 items-center justify-center overflow-hidden rounded-full bg-pergamena/90 ring-1 ring-grano/40 shadow-[0_10px_30px_-15px_oklch(0.15_0.05_25/0.6)]">
            <img
              src={IMG.logo}
              alt="Logo Associazione Amici dell'Antico Mulino delle Fate"
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        <div className="mx-auto max-w-2xl text-pergamena" style={{ textShadow: softShadow }}>
          <p
            className="text-[11px] font-medium uppercase tracking-[0.28em] text-pergamena/90 sm:text-xs"
            style={{ fontFamily: "var(--font-sans)" }}
          >
            Associazione Culturale · Lamezia Terme
          </p>

          <h1
            className="mt-4 text-3xl leading-tight sm:text-4xl md:text-5xl"
            style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.01em" }}
          >
            <span className="block">Antico Mulino delle Fate</span>
            <span className="mt-1 block text-lg italic text-pergamena/90 sm:text-xl md:text-2xl">
              Memoria, Natura e Tradizione
            </span>
          </h1>

          <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-pergamena/90 sm:text-base">
            Un luogo dove acqua, pietra e memoria raccontano la storia del territorio.
          </p>

          <div className="mt-7 flex justify-center">
            <PillButton onClick={handleEnter} variant="primary" aria-label="Visita ora il sito">
              Visita ora
            </PillButton>
          </div>

          <p className="mt-8 text-[11px] tracking-wide text-pergamena/80 sm:text-xs">
            Vincitore del Premio Internazionale{" "}
            <span className="italic" style={{ fontFamily: "var(--font-display)" }}>
              «La Fabbrica nel Paesaggio»
            </span>{" "}
            · Federazione Italiana Club UNESCO
          </p>
        </div>

        {/* Slide indicators */}
        <div className="absolute bottom-5 left-1/2 flex -translate-x-1/2 gap-2">
          {SLIDES.map((_, i) => (
            <span
              key={i}
              className="h-1 rounded-full transition-all duration-500"
              style={{
                width: i === slide ? 24 : 8,
                background:
                  i === slide ? "oklch(0.97 0.02 80 / 0.95)" : "oklch(0.97 0.02 80 / 0.45)",
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
