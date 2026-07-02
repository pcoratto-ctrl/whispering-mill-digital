import { IMG } from "./assets";
import { GradedImage } from "./GradedImage";
import { ScrollReveal } from "./ScrollReveal";

const CARDS = [
  {
    title: "Laboratori nella natura",
    img: IMG.didatticaSentiero,
    alt: "Bambini in cammino su un sentiero nel bosco durante un'attività didattica al Mulino delle Fate",
    text: "Percorsi esperienziali tra alberi, acqua e sentieri, per riscoprire il legame diretto con l'ambiente.",
  },
  {
    title: "Educazione al territorio",
    img: IMG.didatticaAsinello,
    alt: "Bambini seduti in cerchio con un asinello durante un laboratorio educativo al Mulino delle Fate",
    text: "Incontri con animali, agricoltura e artigianato locale, per raccontare la Calabria autentica ai più piccoli.",
  },
  {
    title: "Tradizioni e macinazione",
    img: IMG.didatticaLaboratori,
    alt: "Bambini che partecipano a laboratori di macinazione presso l'Antico Mulino delle Fate",
    text: "Dalla spiga alla farina: il gesto antico della macinazione a pietra torna vivo tra le mani dei bambini.",
  },
];

export function SectionDidattica() {
  return (
    <section id="didattica" className="paper-texture relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-10">
        <ScrollReveal className="mx-auto max-w-3xl text-center">
          <div className="ornament-rule mx-auto mb-6 max-w-[260px] justify-center">Didattica</div>
          <h2 className="font-display text-[clamp(2rem,4.5vw,3.5rem)] leading-tight text-bordeaux">
            Mulino Didattico<br />
            <span className="italic text-terra">& Maestra Natura</span>
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-marrone/90">
            L'associazione promuove attività didattiche e laboratori a contatto con la
            natura, avvicinando bambini e famiglie alla conoscenza del territorio,
            della macinazione e delle tradizioni locali.
          </p>
        </ScrollReveal>

        <div className="mt-16 grid gap-8 md:grid-cols-3 md:gap-6 lg:gap-8">
          {CARDS.map((c, i) => (
            <ScrollReveal key={c.title} delay={i * 100}>
              <article className="group flex h-full flex-col overflow-hidden rounded-sm bg-pergamena/70 ring-1 ring-marrone/15 backdrop-blur-sm transition-shadow hover:shadow-[0_25px_50px_-20px_oklch(0.28_0.09_25/0.35)]">
                <GradedImage
                  src={c.img}
                  alt={c.alt}
                  variant="warm"
                  muted
                  ratio="4/3"
                  frameClassName="w-full"
                  imgClassName="group-hover:scale-[1.03]"
                />
                <div className="flex flex-1 flex-col p-7">
                  <h3 className="font-display text-2xl leading-tight text-bordeaux">
                    {c.title}
                  </h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-marrone/85">
                    {c.text}
                  </p>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
