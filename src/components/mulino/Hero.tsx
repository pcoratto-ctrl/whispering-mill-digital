import { IMG } from "./assets";
import { PillButton } from "./PillButton";

export function Hero() {
  return (
    <section
      id="home"
      className="relative isolate w-full overflow-hidden bg-pergamena"
    >
      {/* Spotlight beam from top */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 z-[1] mx-auto h-[75%] w-[95%] max-w-6xl"
        style={{
          background:
            "radial-gradient(ellipse 55% 90% at 50% 0%, color-mix(in oklab, var(--pergamena) 92%, white) 0%, color-mix(in oklab, var(--pergamena) 60%, transparent) 35%, transparent 70%)",
          filter: "blur(2px)",
        }}
      />

      {/* Content column */}
      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center px-5 pt-28 text-center sm:px-10 sm:pt-36">
        <p className="museum-eyebrow mb-6 text-terra/80">
          Nicastro · Lamezia Terme · dal MDCCXXVII
        </p>

        <h1 className="museum-title text-bordeaux drop-shadow-[0_1px_0_var(--pergamena)]">
          <span className="block">Antico Mulino delle Fate</span>
        </h1>

        <p className="mt-4 font-body text-[clamp(0.95rem,1.6vw,1.15rem)] italic tracking-wide text-marrone">
          Memoria, Natura e Tradizione
        </p>

        <p className="museum-lede mt-8 max-w-2xl text-marrone">
          Esplora un luogo dove acqua, pietra e memoria raccontano
          la storia del territorio.
        </p>

        <div className="mt-10">
          <PillButton href="#mulino" variant="marrone">
            Visita ora
          </PillButton>
        </div>
      </div>

      {/* Hero image — centered, prominent */}
      <div className="relative z-[2] mx-auto mt-12 w-full max-w-7xl px-3 sm:mt-16 sm:px-6">
        <div className="relative overflow-hidden rounded-t-[40%_18%] shadow-[0_30px_80px_-40px_oklch(0.28_0.09_25/0.55)]">
          <img
            src={IMG.mulinoNotte}
            alt="Antico Mulino delle Fate — vista notturna"
            className="block h-auto w-full object-cover"
            loading="eager"
            decoding="async"
          />
        </div>
      </div>

      {/* UNESCO badge under image */}
      <div className="relative z-10 mx-auto -mt-6 flex max-w-3xl justify-center px-5 pb-16 sm:pb-24">
        <div className="inline-flex flex-col items-center gap-2 rounded-xl border border-grano/35 bg-pergamena/90 px-6 py-4 backdrop-blur-sm">
          <span className="font-display text-sm font-medium leading-relaxed text-bordeaux">
            Vincitore del Premio Internazionale “La Fabbrica nel Paesaggio”
          </span>
          <span className="h-px w-10 bg-grano/40" />
          <span className="font-body text-[10px] font-normal tracking-[0.18em] uppercase text-marrone">
            Federazione Italiana delle Associazioni e Club per l’UNESCO
          </span>
        </div>
      </div>
    </section>
  );
}
