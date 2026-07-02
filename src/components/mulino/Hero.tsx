import { useEffect, useState } from "react";
import { IMG } from "./assets";
import { GradedImage } from "./GradedImage";
import { PillButton } from "./PillButton";

const SLIDES = [
  { src: IMG.statuaFata, alt: "Statua della fata Gelsomina davanti alla ruota dell'Antico Mulino delle Fate" },
  { src: IMG.mulinoGiorno, alt: "Esterno dell'Antico Mulino delle Fate a Lamezia Terme" },
  { src: IMG.mulinoLucciole, alt: "Antico Mulino delle Fate illuminato di notte con lucciole nel bosco" },
];

export function Hero() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % SLIDES.length), 5500);
    return () => clearInterval(t);
  }, []);

  return (
    <section
      id="home"
      className="relative isolate min-h-dvh w-full overflow-hidden bg-[oklch(0.18_0.05_25)]"
    >
      {SLIDES.map((s, idx) => (
        <div
          key={s.src}
          className={`absolute inset-0 transition-opacity duration-[2200ms] ease-in-out ${
            idx === i ? "opacity-100" : "opacity-0"
          }`}
        >
          <GradedImage
            src={s.src}
            alt={s.alt}
            variant="hero"
            frameClassName="h-full w-full"
            imgClassName="scale-[1.05]"
            loading={idx === 0 ? "eager" : "lazy"}
          />
        </div>
      ))}

      <div className="relative z-10 mx-auto flex min-h-dvh max-w-6xl flex-col items-center justify-center px-5 pb-24 pt-32 text-center sm:px-10 sm:pb-28 sm:pt-40">
        <p className="museum-eyebrow mb-8 text-grano/90">
          Nicastro · Lamezia Terme · dal MDCCXXVII
        </p>

        <h1 className="museum-title max-w-5xl text-pergamena">
          <span className="block">Antico Mulino delle Fate</span>
          <span
            className="mt-2 block italic"
            style={{ color: "color-mix(in oklab, var(--grano) 85%, var(--pergamena))" }}
          >
            Memoria, Natura e Tradizione
          </span>
        </h1>

        <p className="museum-lede mt-10 max-w-2xl text-pergamena/85">
          Esplora un luogo dove acqua, pietra e memoria raccontano
          la storia del territorio.
        </p>

        <div className="mt-12 flex w-full flex-col items-center gap-4 sm:w-auto sm:flex-row sm:gap-5">
          <PillButton href="#mulino" variant="onDark">
            Scopri la storia
          </PillButton>
          <PillButton href="#video" variant="outline">
            Guarda il video
          </PillButton>
        </div>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 gap-2 sm:bottom-8">
        {SLIDES.map((_, idx) => (
          <button
            key={idx}
            aria-label={`Vai alla diapositiva ${idx + 1}`}
            onClick={() => setI(idx)}
            className={`h-[3px] w-8 rounded-full transition-all ${
              idx === i ? "bg-grano" : "bg-pergamena/30"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
