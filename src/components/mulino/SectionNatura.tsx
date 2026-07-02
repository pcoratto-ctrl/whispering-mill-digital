import { IMG } from "./assets";
import { GradedImage } from "./GradedImage";
import { ScrollReveal } from "./ScrollReveal";

const LUCCIOLE = [
  { top: "18%", left: "10%", delay: "0s" },
  { top: "34%", left: "78%", delay: "1.4s" },
  { top: "58%", left: "22%", delay: "2.6s" },
  { top: "72%", left: "62%", delay: "0.8s" },
  { top: "28%", left: "48%", delay: "1.9s" },
  { top: "82%", left: "38%", delay: "3.1s" },
];

export function SectionNatura() {
  return (
    <section
      id="natura"
      className="relative isolate overflow-hidden py-20 sm:py-28"
      style={{
        background:
          "linear-gradient(180deg, oklch(0.22 0.04 145) 0%, oklch(0.19 0.04 140) 100%)",
      }}
    >
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-5 sm:px-10 lg:grid-cols-[1fr_1.05fr] lg:gap-14">
        {/* Testo */}
        <div className="min-w-0">
          <ScrollReveal>
            <div className="ornament-rule mb-6 max-w-[220px] text-grano/90">
              Natura
            </div>
            <h2 className="font-display text-[clamp(2rem,4.6vw,3.5rem)] leading-[1.08] text-pergamena">
              Un paesaggio<br />
              <span className="italic text-grano/95">da custodire</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={150}>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-pergamena/85 sm:text-lg">
              Il mulino vive dentro un contesto naturale fatto di sentieri,
              acqua, vegetazione e silenzi. Un luogo dove la natura diventa
              parte dell'esperienza culturale.
            </p>
          </ScrollReveal>
        </div>

        {/* Immagine con cornice arrotondata */}
        <ScrollReveal delay={100}>
          <div className="relative">
            <div
              className="relative overflow-hidden rounded-[28px] shadow-[0_30px_80px_-30px_oklch(0.15_0.05_25/0.65)] ring-1 ring-grano/20 sm:rounded-[32px]"
              style={{ height: "clamp(340px, 55vw, 620px)" }}
            >
              <GradedImage
                src={IMG.boscoLucciole}
                alt="Bosco con sentiero intorno all'Antico Mulino delle Fate"
                variant="night"
                frameClassName="absolute inset-0 h-full w-full"
                imgClassName="h-full w-full object-cover"
              />
              {/* Overlay uniforme verde bosco/pergamena */}
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 z-[2]"
                style={{
                  background:
                    "linear-gradient(180deg, oklch(0.22 0.05 145 / 0.25) 0%, oklch(0.18 0.04 140 / 0.45) 100%)",
                }}
              />
              {/* Lucciole discrete */}
              {LUCCIOLE.map((l, i) => (
                <span
                  key={i}
                  className="lucciola z-[3]"
                  style={{
                    top: l.top,
                    left: l.left,
                    animationDelay: l.delay,
                  }}
                />
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
