import { IMG } from "./assets";
import { GradedImage } from "./GradedImage";
import { ScrollReveal } from "./ScrollReveal";

export function SectionMulino() {
  return (
    <section id="mulino" className="relative bg-pergamena py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 sm:px-10 lg:grid-cols-12 lg:gap-16">
        <ScrollReveal className="lg:col-span-7">
          <GradedImage
            src={IMG.mulinoGiorno}
            alt="Esterno dell'Antico Mulino delle Fate a Lamezia Terme, in pietra e mattoni"
            variant="soft"
            frameClassName="w-full rounded-sm shadow-[0_30px_60px_-30px_oklch(0.28_0.09_25/0.35)]"
            imgClassName="block h-auto w-full object-contain"
          />
        </ScrollReveal>

        <div className="flex flex-col justify-center lg:col-span-5">
          <ScrollReveal delay={80}>
            <div className="ornament-rule mb-6 max-w-[220px]">Il Mulino</div>
            <h2 className="font-display text-[clamp(2rem,4.5vw,3.5rem)] leading-tight text-bordeaux">
              Un mulino ad acqua nel cuore della memoria
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={180}>
            <p className="mt-6 text-lg leading-relaxed text-marrone/90">
              L'Antico Mulino delle Fate custodisce il legame tra acqua, pietra, grano
              e comunità. Un luogo recuperato per raccontare le antiche tecniche di
              macinazione e il rapporto profondo tra uomo e territorio.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={260}>
            <dl className="mt-10 grid grid-cols-2 gap-6 border-t border-marrone/15 pt-8">
              <div>
                <dt className="text-[11px] uppercase tracking-[0.25em] text-grano">Fondazione</dt>
                <dd className="mt-2 font-display text-3xl text-bordeaux">1727</dd>
              </div>
              <div>
                <dt className="text-[11px] uppercase tracking-[0.25em] text-grano">Macinazione</dt>
                <dd className="mt-2 font-display text-3xl text-bordeaux">a pietra</dd>
              </div>
              <div>
                <dt className="text-[11px] uppercase tracking-[0.25em] text-grano">Territorio</dt>
                <dd className="mt-2 font-display text-xl italic text-bordeaux">Nicastro · Lamezia</dd>
              </div>
              <div>
                <dt className="text-[11px] uppercase tracking-[0.25em] text-grano">Motore</dt>
                <dd className="mt-2 font-display text-xl italic text-bordeaux">Acqua viva</dd>
              </div>
            </dl>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
