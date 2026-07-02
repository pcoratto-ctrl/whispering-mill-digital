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
                transform: active ? "scale(1.02)" : "scale(1.0)",
                transition:
                  "opacity 2600ms cubic-bezier(0.45,0.05,0.55,0.95), transform 9000ms ease-out",
                filter: "saturate(0.95) contrast(1.02)",

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

          <div className="inline-flex rounded-full border border-pergamena/40 bg-pergamena/70 px-5 py-2 shadow-[0_10px_30px_-15px_oklch(0.28_0.09_25/0.4)] backdrop-blur-md">
            <p className="museum-eyebrow text-bordeaux/80">
              Associazione Culturale · Lamezia Terme
            </p>
          </div>

          <div className="mx-auto mt-6 max-w-3xl rounded-2xl border border-pergamena/40 bg-pergamena/75 px-6 py-6 shadow-[0_20px_60px_-25px_oklch(0.28_0.09_25/0.55)] backdrop-blur-xl sm:px-10 sm:py-8">
            <h1 className="museum-title">
              <span className="block text-bordeaux">
                Antico Mulino delle Fate
              </span>
              <span
                className="mt-1 block italic"
                style={{ color: "color-mix(in oklab, var(--terra) 60%, var(--bordeaux))" }}
              >
                Memoria, Natura e Tradizione
              </span>
            </h1>

            <p className="museum-lede mx-auto mt-6 max-w-xl text-marrone">
              Esplora un luogo dove acqua, pietra e memoria raccontano
              la storia del territorio.
            </p>
          </div>

          {/* CTA */}
          <div className="mt-10 flex justify-center">
            <PillButton onClick={handleEnter} variant="primary" aria-label="Visita ora il sito">
              Visita ora
            </PillButton>
          </div>

          {/* Awards / attribution */}
          <div className="mx-auto mt-12 inline-flex max-w-lg flex-col items-center gap-2 rounded-2xl border border-pergamena/40 bg-pergamena/70 px-6 py-5 shadow-[0_15px_45px_-20px_oklch(0.28_0.09_25/0.5)] backdrop-blur-md">
            <p className="museum-eyebrow text-bordeaux/75">
              Vincitore del Premio Internazionale
            </p>
            <p
              className="text-base italic text-bordeaux sm:text-lg"
              style={{ fontFamily: "var(--font-display)" }}
            >
              «La Fabbrica nel Paesaggio»
            </p>
            <span className="h-px w-10 bg-grano/50" />
            <p className="max-w-md text-[11px] tracking-wide text-marrone/85 sm:text-xs">
              Realtà culturale legata alla Federazione Italiana delle
              Associazioni e Club per l’UNESCO
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
