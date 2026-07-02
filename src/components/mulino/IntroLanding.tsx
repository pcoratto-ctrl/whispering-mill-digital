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
    if (leaving) return;
    setLeaving(true);
    try {
      sessionStorage.setItem("mulino-entered", "1");
    } catch {}
    // Trigger homepage reveal after the exit animation
    setTimeout(onEnter, 950);
  };

  // Morbida ombra per il testo su foto
  const titleShadow =
    "0 2px 4px oklch(0.15 0.05 25 / 0.55), 0 6px 24px oklch(0.15 0.05 25 / 0.5)";
  const softShadow = "0 1px 3px oklch(0.15 0.05 25 / 0.55)";

  return (
    <div
      className={`fixed inset-0 z-[100] overflow-hidden transition-all duration-[900ms] ease-[cubic-bezier(0.65,0,0.35,1)] ${
        leaving
          ? "opacity-0 pointer-events-none scale-[1.04] -translate-y-4"
          : "opacity-100 scale-100 translate-y-0"
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
                transform: active ? "scale(1.04)" : "scale(1.0)",
                transition:
                  "opacity 2600ms cubic-bezier(0.45,0.05,0.55,0.95), transform 9000ms ease-out",
              }}
              loading={i === 0 ? "eager" : "lazy"}
              decoding="async"
            />
          );
        })}
      </div>

      {/* Patina pergamena calda su tutto */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, oklch(0.94 0.04 82 / 0.10) 0%, transparent 30%, transparent 55%, oklch(0.20 0.06 30 / 0.15) 100%)",
          mixBlendMode: "multiply",
        }}
      />

      {/* Gradient scuro caldo dal basso al centro per leggibilità */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, oklch(0.15 0.05 25 / 0.35) 0%, oklch(0.15 0.05 25 / 0.10) 30%, oklch(0.18 0.06 28 / 0.45) 62%, oklch(0.15 0.05 25 / 0.85) 100%)",
        }}
      />

      {/* Vignettatura laterale */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 90% 75% at 50% 50%, transparent 55%, oklch(0.15 0.05 25 / 0.55) 100%)",
        }}
      />

      {/* Logo mark in alto */}
      <div className="absolute left-1/2 top-6 z-20 -translate-x-1/2 sm:top-8">
        <div className="flex h-14 w-14 items-center justify-center overflow-hidden rounded-full bg-pergamena/90 ring-1 ring-grano/50 shadow-[0_10px_30px_-10px_oklch(0.15_0.05_25/0.7)]">
          <img
            src={IMG.logo}
            alt="Logo Antico Mulino delle Fate"
            className="h-full w-full object-cover"
          />
        </div>
      </div>

      {/* Content */}
      <div
        className={`relative z-10 flex min-h-screen flex-col items-center justify-center px-6 pb-20 pt-28 text-center transition-all duration-[1200ms] ease-out sm:pb-24 ${
          mounted && !leaving ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        <div className="mx-auto max-w-3xl">
          {/* Eyebrow */}
          <p
            className="text-[11px] font-medium uppercase tracking-[0.32em] sm:text-xs"
            style={{
              fontFamily: "var(--font-sans)",
              color: "oklch(0.92 0.05 82)",
              textShadow: softShadow,
            }}
          >
            Associazione Culturale · Lamezia Terme
          </p>

          {/* Titolo */}
          <h1
            className="mt-5 text-4xl leading-[1.05] sm:text-5xl md:text-6xl"
            style={{
              fontFamily: "var(--font-display)",
              letterSpacing: "-0.015em",
              fontWeight: 500,
              color: "oklch(0.97 0.02 82)",
              textShadow: titleShadow,
            }}
          >
            Antico Mulino delle Fate
          </h1>

          {/* Sottotitolo elegante — oro grano */}
          <p
            className="mt-4 text-xl italic sm:text-2xl md:text-[26px]"
            style={{
              fontFamily: "var(--font-display)",
              color: "oklch(0.85 0.09 82)",
              textShadow: softShadow,
              letterSpacing: "0.005em",
            }}
          >
            Memoria, Natura e Tradizione
          </p>

          {/* Linea decorativa */}
          <div
            className="mx-auto mt-6 h-px w-16"
            style={{ background: "oklch(0.80 0.10 82 / 0.6)" }}
          />

          {/* Descrizione */}
          <p
            className="mx-auto mt-6 max-w-[700px] text-base leading-relaxed sm:text-lg"
            style={{
              color: "oklch(0.96 0.02 82 / 0.95)",
              textShadow: softShadow,
            }}
          >
            Esplora un luogo dove acqua, pietra e memoria raccontano la storia
            del territorio.
          </p>

          {/* CTA */}
          <div className="mt-10 flex justify-center">
            <PillButton
              onClick={handleEnter}
              variant="primary"
              aria-label="Visita il sito"
            >
              Visita il sito
            </PillButton>
          </div>

          {/* Riconoscimento */}
          <p
            className="mx-auto mt-10 max-w-md text-[11px] tracking-wide sm:text-xs"
            style={{
              color: "oklch(0.90 0.04 82 / 0.85)",
              textShadow: softShadow,
            }}
          >
            Vincitore del Premio Internazionale{" "}
            <span className="italic" style={{ fontFamily: "var(--font-display)" }}>
              «La Fabbrica nel Paesaggio»
            </span>{" "}
            · Federazione Italiana Club UNESCO
          </p>
        </div>
      </div>

      {/* Indicatori slide */}
      <div className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 gap-2">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`Vai all'immagine ${i + 1}`}
            onClick={() => setSlide(i)}
            className="h-1 rounded-full transition-all duration-500"
            style={{
              width: i === slide ? 28 : 8,
              background:
                i === slide
                  ? "oklch(0.97 0.03 82 / 0.95)"
                  : "oklch(0.97 0.03 82 / 0.45)",
            }}
          />
        ))}
      </div>
    </div>
  );
}
