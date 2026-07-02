import { IMG } from "./assets";
import { GradedImage } from "./GradedImage";
import { ScrollReveal } from "./ScrollReveal";

const LUCCIOLE = [
  { top: "18%", left: "12%", delay: "0s" },
  { top: "32%", left: "28%", delay: "1.2s" },
  { top: "55%", left: "18%", delay: "2.4s" },
  { top: "70%", left: "42%", delay: "0.6s" },
  { top: "25%", left: "72%", delay: "1.8s" },
  { top: "62%", left: "82%", delay: "3s" },
  { top: "48%", left: "62%", delay: "2.1s" },
  { top: "80%", left: "68%", delay: "0.9s" },
];

export function SectionNatura() {
  return (
    <section id="natura" className="relative isolate overflow-hidden">
      <div className="relative min-h-[80vh]">
        <GradedImage
          src={IMG.boscoLucciole}
          alt="Bosco con sentiero e lucciole intorno all'Antico Mulino delle Fate"
          variant="night"
          frameClassName="absolute inset-0 h-full w-full"
        />
        <div
          aria-hidden
          className="absolute inset-0 z-[2]"
          style={{
            background:
              "linear-gradient(180deg, oklch(0.2 0.03 140 / 0.55) 0%, oklch(0.15 0.04 25 / 0.65) 100%)",
          }}
        />
        {LUCCIOLE.map((l, i) => (
          <span
            key={i}
            className="lucciola z-[3]"
            style={{ top: l.top, left: l.left, animationDelay: l.delay }}
          />
        ))}

        <div className="relative z-10 mx-auto flex min-h-[80vh] max-w-5xl flex-col items-start justify-center px-5 py-24 sm:px-10">
          <ScrollReveal>
            <div className="ornament-rule mb-6 max-w-[220px] text-grano/90">Natura</div>
            <h2 className="font-display text-[clamp(2rem,5vw,4rem)] leading-tight text-pergamena">
              Un paesaggio<br />
              <span className="italic text-grano/95">da custodire</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={150}>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-pergamena/85">
              Il mulino vive dentro un contesto naturale fatto di sentieri, acqua,
              vegetazione e silenzi. Un luogo dove la natura diventa parte
              dell'esperienza culturale.
            </p>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
