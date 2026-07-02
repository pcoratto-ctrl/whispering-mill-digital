import { useEffect, useState } from "react";
import { IMG } from "./assets";
import { GradedImage } from "./GradedImage";

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
    <section id="home" className="relative isolate min-h-dvh w-full overflow-hidden bg-[oklch(0.18_0.05_25)]">
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

      <div className="relative z-10 mx-auto flex min-h-dvh max-w-6xl flex-col items-start justify-end px-5 pb-16 pt-32 sm:px-10 sm:pb-24 sm:pt-40">
        <div className="ornament-rule mb-6 max-w-[300px] text-grano/90">Nicastro · MDCCXXVII</div>
        <h1 className="max-w-4xl font-display text-[clamp(2.6rem,7vw,5.5rem)] font-medium leading-[1.02] text-pergamena">
          Antico Mulino
          <span className="block italic text-grano/95">delle Fate</span>
        </h1>
        <p className="mt-6 max-w-2xl font-display text-xl italic leading-snug text-pergamena/90 sm:text-2xl">
          Dove l'acqua muoveva la pietra, oggi continua a muoversi la memoria.
        </p>
        <p className="mt-6 max-w-xl text-sm leading-relaxed text-pergamena/75 sm:text-base">
          Un antico mulino ad acqua del XVIII secolo a Lamezia Terme, recuperato e valorizzato
          per custodire le tradizioni locali, la natura e la cultura della macinazione.
        </p>
        <div className="mt-10 flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:gap-4">
          <a
            href="#mulino"
            className="inline-flex items-center justify-center rounded-full border border-grano/70 bg-grano/90 px-7 py-3 text-sm uppercase tracking-[0.22em] text-bordeaux transition-colors hover:bg-grano"
          >
            Scopri la storia
          </a>
          <a
            href="#video"
            className="inline-flex items-center justify-center rounded-full border border-pergamena/40 px-7 py-3 text-sm uppercase tracking-[0.22em] text-pergamena transition-colors hover:border-grano hover:text-grano"
          >
            Guarda il video
          </a>
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
