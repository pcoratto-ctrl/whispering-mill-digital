import { IMG } from "./assets";
import { GradedImage } from "./GradedImage";
import { ScrollReveal } from "./ScrollReveal";

export function SectionFata() {
  return (
    <section className="relative overflow-hidden bg-[oklch(0.24_0.03_140)] py-24 text-pergamena sm:py-32">
      <div
        aria-hidden
        className="absolute inset-0 opacity-40"
        style={{
          background:
            "radial-gradient(ellipse at 20% 30%, oklch(0.35 0.06 130 / 0.6), transparent 60%), radial-gradient(ellipse at 80% 80%, oklch(0.28 0.09 25 / 0.5), transparent 60%)",
        }}
      />
      <div className="relative mx-auto grid max-w-7xl gap-14 px-5 sm:px-10 lg:grid-cols-12 lg:gap-20">
        <div className="flex flex-col justify-center lg:col-span-5 lg:order-1">
          <ScrollReveal>
            <div className="ornament-rule mb-6 max-w-[220px] text-grano/90">La Fata</div>
            <h2 className="font-display text-[clamp(2rem,4.5vw,3.5rem)] leading-tight text-pergamena">
              La leggenda incontra la storia
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={120}>
            <p className="mt-6 text-lg leading-relaxed text-pergamena/85">
              Il nome del mulino richiama un immaginario fiabesco, ma il suo valore è
              concreto: custodire un patrimonio fatto di natura, artigianalità, acqua
              e tradizione.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={220}>
            <blockquote className="mt-10 border-l-2 border-grano/60 pl-6 font-display text-xl italic text-pergamena/90">
              "La fata Gelsomina veglia sulla ruota, dove l'acqua racconta ancora
              storie di grano e di pietra."
            </blockquote>
          </ScrollReveal>
        </div>

        <ScrollReveal className="lg:col-span-7 lg:order-2" delay={100}>
          <GradedImage
            src={IMG.statuaFata}
            alt="Statua bronzea della fata Gelsomina realizzata da Maurizio Carnevali davanti alla ruota del mulino"
            variant="warm"
            ratio="4/3"
            frameClassName="w-full rounded-sm shadow-[0_40px_80px_-30px_oklch(0.1_0.05_25/0.6)]"
          />
        </ScrollReveal>
      </div>
    </section>
  );
}
