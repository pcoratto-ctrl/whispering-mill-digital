import { Award, Landmark } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

export function SectionRiconoscimenti() {
  return (
    <section className="paper-texture relative py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-5 sm:px-10">
        <ScrollReveal className="text-center">
          <div className="ornament-rule mx-auto mb-6 max-w-[260px] justify-center">Riconoscimenti</div>
          <h2 className="font-display text-[clamp(2rem,4.5vw,3.5rem)] leading-tight text-bordeaux">
            Riconoscimenti e <span className="italic text-terra">valore culturale</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-marrone/90">
            L'Antico Mulino delle Fate è stato valorizzato per il suo ruolo nella tutela
            del paesaggio, della memoria locale e delle tradizioni.
          </p>
        </ScrollReveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          <ScrollReveal>
            <div className="flex h-full flex-col gap-4 rounded-sm border border-marrone/15 bg-pergamena/70 p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-grano/20 text-grano">
                <Award className="h-6 w-6" />
              </div>
              <h3 className="font-display text-2xl text-bordeaux">Premio Internazionale</h3>
              <p className="text-[15px] leading-relaxed text-marrone/85">
                Vincitore del Premio Internazionale <em>"La Fabbrica nel Paesaggio"</em>,
                riconoscimento per il valore del recupero paesaggistico e culturale del sito.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={120}>
            <div className="flex h-full flex-col gap-4 rounded-sm border border-marrone/15 bg-pergamena/70 p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-muschio/20 text-muschio">
                <Landmark className="h-6 w-6" />
              </div>
              <h3 className="font-display text-2xl text-bordeaux">Realtà culturale</h3>
              <p className="text-[15px] leading-relaxed text-marrone/85">
                Realtà culturale legata alla Federazione Italiana delle Associazioni e
                Club per l'UNESCO, impegnata nella promozione del patrimonio locale.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
