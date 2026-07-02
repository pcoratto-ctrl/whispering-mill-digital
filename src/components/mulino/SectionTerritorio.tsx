import { IMG } from "./assets";
import { GradedImage } from "./GradedImage";
import { ScrollReveal } from "./ScrollReveal";

export function SectionTerritorio() {
  return (
    <section className="relative isolate overflow-hidden bg-[oklch(0.18_0.05_25)]">
      <div className="relative min-h-[85vh]">
        <GradedImage
          src={IMG.castelloNicastro}
          alt="Castello Normanno-Svevo di Nicastro illuminato di notte sopra il borgo antico di Lamezia Terme"
          variant="night"
          frameClassName="absolute inset-0 h-full w-full"
          imgClassName="scale-[1.05]"
        />
        <div
          aria-hidden
          className="absolute inset-0 z-[2]"
          style={{
            background:
              "linear-gradient(180deg, oklch(0.15 0.05 260 / 0.4) 0%, oklch(0.15 0.06 25 / 0.75) 100%)",
          }}
        />

        <div className="relative z-10 mx-auto flex min-h-[85vh] max-w-6xl flex-col items-end justify-end px-5 pb-20 pt-32 sm:px-10 sm:pb-28">
          <div className="max-w-2xl text-right">
            <ScrollReveal>
              <div className="ornament-rule ml-auto mb-6 max-w-[260px] justify-end text-grano/90">
                Territorio
              </div>
              <h2 className="font-display text-[clamp(2rem,5vw,4rem)] leading-[1.05] text-pergamena">
                Nicastro, Lamezia<br />
                <span className="italic text-grano/95">e la memoria del paesaggio</span>
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={150}>
              <p className="mt-6 text-lg leading-relaxed text-pergamena/85">
                Il mulino si inserisce in un territorio ricco di storia, paesaggio e
                identità. Un patrimonio locale da conoscere, proteggere e tramandare.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
