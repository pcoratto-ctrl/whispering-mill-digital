import { useEffect, useState } from "react";
import { IMG } from "./assets";
import { PillButton } from "./PillButton";

interface Props {
  onEnter: () => void;
}

const SLIDES = [
  IMG.mulinoGiorno,
  IMG.statuaFata,
  IMG.boscoLucciole,
  IMG.mulinoNotte,
  IMG.mulinoLucciole,
];

export function IntroLanding({ onEnter }: Props) {
  const [leaving, setLeaving] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [slide, setSlide] = useState(0);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 30);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    // Preload for high-res smooth transitions
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

  return (
    <div
      className={`fixed inset-0 z-[100] overflow-hidden transition-opacity duration-[900ms] ease-out ${
        leaving ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
      style={{ background: "var(--pergamena)" }}
    >
      {/* Slideshow di sfondo — alta risoluzione, dissolvenza fluida */}
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
                transform: active ? "scale(1.08)" : "scale(1.02)",
                transition:
                  "opacity 2600ms cubic-bezier(0.45,0.05,0.55,0.95), transform 9000ms ease-out",
                filter: "saturate(0.92) contrast(1.02) brightness(0.98)",
              }}
              loading={i === 0 ? "eager" : "lazy"}
              decoding="async"
            />
          );
        })}
      </div>

      {/* Warm parchment veil — leggero, per lasciare respirare le foto */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, color-mix(in oklab, var(--pergamena) 55%, transparent) 0%, color-mix(in oklab, var(--beige) 30%, transparent) 55%, color-mix(in oklab, var(--marrone) 45%, transparent) 100%)",
        }}
      />
      {/* Vignette morbida per leggibilità del testo */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% 45%, transparent 0%, transparent 45%, color-mix(in oklab, var(--marrone) 35%, transparent) 100%)",
        }}
      />


      {/* Content */}
      <div
        className={`relative z-10 flex min-h-screen flex-col items-center justify-center px-6 py-12 text-center transition-all duration-[1200ms] ease-out ${
          mounted && !leaving ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        <div className="mx-auto max-w-5xl">
          {/* Logo mark */}
          <div className="mx-auto mb-8 flex h-16 w-16 items-center justify-center overflow-hidden rounded-full bg-pergamena/90 ring-1 ring-grano/40 shadow-[0_10px_30px_-15px_oklch(0.28_0.09_25/0.5)]">
            <img
              src={IMG.logo}
              alt="Logo Associazione Amici dell'Antico Mulino delle Fate"
              className="h-full w-full object-cover"
            />
          </div>

          <p className="museum-eyebrow mb-6 text-terra/80">
            Associazione Culturale · Lamezia Terme
          </p>

          <h1 className="museum-title">
            <span className="block text-bordeaux">
              Antico Mulino delle Fate
            </span>
            <span
              className="mt-1 block italic"
              style={{ color: "color-mix(in oklab, var(--terra) 55%, var(--grano))" }}
            >
              Memoria, Natura e Tradizione
            </span>
          </h1>

          <p className="museum-lede mx-auto mt-8 max-w-xl text-marrone/85">
            Esplora un luogo dove acqua, pietra e memoria raccontano
            la storia del territorio.
          </p>

          {/* CTA */}
          <div className="mt-12 flex justify-center">
            <PillButton onClick={handleEnter} variant="primary" aria-label="Visita ora il sito">
              Visita ora
            </PillButton>
          </div>

          {/* Awards / attribution */}
          <div className="mt-16 space-y-2">
            <p className="museum-eyebrow text-terra/70">
              Vincitore del Premio Internazionale
            </p>
            <p
              className="text-base sm:text-lg italic text-bordeaux"
              style={{ fontFamily: "var(--font-display)" }}
            >
              «La Fabbrica nel Paesaggio»
            </p>
            <p className="mx-auto mt-4 max-w-lg text-[11px] sm:text-xs tracking-wide text-terra/70">
              Realtà culturale legata alla Federazione Italiana delle
              Associazioni e Club per l’UNESCO
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
