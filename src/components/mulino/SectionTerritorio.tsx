import { IMG } from "./assets";
import { ScrollReveal } from "./ScrollReveal";

export function SectionTerritorio() {
  return (
    <section
      id="territorio"
      className="relative isolate overflow-hidden bg-[oklch(0.18_0.05_25)]"
    >
      <div className="relative min-h-[70vh] sm:min-h-[75vh] lg:min-h-[80vh]">
        {/* Immagine full-bleed */}
        <img
          src={IMG.castelloNicastro}
          alt="Castello Normanno-Svevo di Nicastro sopra il borgo antico di Lamezia Terme"
          loading="lazy"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover"
          style={{ objectPosition: "center center" }}
        />

        {/* Overlay leggero blu-bordeaux/oro */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, oklch(0.20 0.05 260 / 0.30) 0%, oklch(0.18 0.06 25 / 0.55) 100%)",
          }}
        />
        {/* Sfumatura laterale sinistra per il testo */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 left-0 w-full sm:w-3/4 lg:w-2/3"
          style={{
            background:
              "linear-gradient(90deg, oklch(0.15 0.05 25 / 0.65) 0%, oklch(0.15 0.05 25 / 0.25) 55%, transparent 100%)",
          }}
        />

        <div className="relative z-10 mx-auto flex min-h-[70vh] max-w-6xl items-end px-5 pb-16 pt-28 sm:min-h-[75vh] sm:px-10 sm:pb-20 lg:min-h-[80vh] lg:pb-24">
          <div className="max-w-2xl">
            <ScrollReveal>
              <div className="ornament-rule mb-5 max-w-[240px] text-grano/90">
                Territorio
              </div>
              <h2 className="font-display text-[clamp(2rem,4.6vw,3.75rem)] leading-[1.05] text-pergamena">
                Nicastro, Lamezia<br />
                <span className="italic text-grano/95">
                  e la memoria del paesaggio
                </span>
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={150}>
              <div
                className="mt-6 max-w-xl rounded-2xl px-5 py-5 backdrop-blur-[2px] sm:px-6 sm:py-6"
                style={{
                  background: "oklch(0.15 0.05 25 / 0.35)",
                  border: "1px solid oklch(0.85 0.10 82 / 0.18)",
                }}
              >
                <p className="text-base leading-relaxed text-pergamena/95 sm:text-lg">
                  Il mulino si inserisce in un territorio ricco di storia,
                  paesaggio e identità. Un patrimonio locale da conoscere,
                  proteggere e tramandare.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
