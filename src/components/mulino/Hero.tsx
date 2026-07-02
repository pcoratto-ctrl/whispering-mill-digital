import { useEffect, useState } from "react";
import { IMG } from "./assets";
import { PillButton } from "./PillButton";

const SLIDES = [
  { src: IMG.mulinoGiorno, alt: "Esterno dell'Antico Mulino delle Fate a Lamezia Terme" },
  { src: IMG.statuaFata, alt: "Statua della fata custode del Mulino" },
  { src: IMG.boscoLucciole, alt: "Bosco intorno al Mulino delle Fate" },
  { src: IMG.mulinoLucciole, alt: "Il Mulino delle Fate con lucciole nel bosco" },
  { src: IMG.mulinoNotte, alt: "Il Mulino delle Fate di notte" },
];

export function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % SLIDES.length);
    }, 7000);
    return () => clearInterval(id);
  }, []);

  return (
    <section
      id="home"
      className="relative isolate min-h-dvh w-full overflow-hidden bg-pergamena"
    >
      {/* Background slideshow — softly blurred, warm */}
      <div className="absolute inset-0">
        {SLIDES.map((s, i) => (
          <img
            key={s.src}
            src={s.src}
            alt={i === 0 ? s.alt : ""}
            aria-hidden={i === 0 ? undefined : true}
            className={`absolute inset-0 h-full w-full object-cover blur-2xl scale-110 img-graded transition-opacity duration-[2200ms] ease-in-out ${
              i === index ? "opacity-100" : "opacity-0"
            }`}
            loading={i === 0 ? "eager" : "lazy"}
          />
        ))}
      </div>

      {/* Warm parchment overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-pergamena/90 via-beige/55 to-pergamena/95" />
      <div className="absolute inset-0 bg-gradient-to-t from-marrone/10 via-transparent to-transparent" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-dvh max-w-6xl flex-col items-center justify-center px-5 pb-24 pt-32 text-center sm:px-10 sm:pb-28 sm:pt-40">
        <p className="museum-eyebrow mb-8 text-terra/80">
          Nicastro · Lamezia Terme · dal MDCCXXVII
        </p>

        <h1 className="museum-title max-w-5xl text-bordeaux">
          <span className="block">Antico Mulino delle Fate</span>
          <span className="mt-2 block font-body text-[clamp(1.1rem,3vw,1.7rem)] font-light tracking-wide text-marrone">
            Memoria, Natura e Tradizione
          </span>
        </h1>

        <p className="museum-lede mt-8 max-w-2xl text-marrone/80">
          Esplora un luogo dove acqua, pietra e memoria raccontano
          la storia del territorio.
        </p>

        {/* UNESCO institutional badge */}
        <div className="mt-10 inline-flex flex-col items-center gap-2 rounded-xl border border-grano/35 bg-pergamena/55 px-6 py-4 backdrop-blur-sm">
          <span className="font-display text-sm font-medium leading-relaxed text-bordeaux">
            Vincitore del Premio Internazionale “La Fabbrica nel Paesaggio”
          </span>
          <span className="h-px w-10 bg-grano/30" />
          <span className="font-body text-[10px] font-normal tracking-[0.18em] uppercase text-marrone/90">
            Federazione Italiana delle Associazioni e Club per l’UNESCO
          </span>
        </div>

        <div className="mt-12">
          <PillButton href="#mulino" variant="marrone">
            Visita ora
          </PillButton>
        </div>
      </div>
    </section>
  );
}
