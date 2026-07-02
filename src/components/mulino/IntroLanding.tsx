import { useEffect, useState } from "react";
import { IMG } from "./assets";

interface Props {
  onEnter: () => void;
}

export function IntroLanding({ onEnter }: Props) {
  const [leaving, setLeaving] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 30);
    return () => clearTimeout(t);
  }, []);

  const handleEnter = () => {
    setLeaving(true);
    try {
      sessionStorage.setItem("mulino-entered", "1");
    } catch {}
    setTimeout(onEnter, 900);
  };

  return (
    <div
      className={`fixed inset-0 z-[100] overflow-hidden transition-opacity duration-[900ms] ease-out ${
        leaving ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
      style={{
        background:
          "radial-gradient(ellipse at 50% 40%, #f7ecdc 0%, #f0e2cf 45%, #e9d6bd 100%)",
      }}
    >
      {/* Background image — soft, blurred, foggy */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${IMG.mulinoGiorno})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "blur(18px) saturate(0.7) brightness(1.15)",
          opacity: 0.35,
          transform: "scale(1.15)",
        }}
      />
      {/* Warm parchment overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(247,236,220,0.85) 0%, rgba(240,226,207,0.75) 50%, rgba(233,214,189,0.9) 100%)",
        }}
      />
      {/* Soft mist */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 20% 80%, rgba(255,255,255,0.4) 0%, transparent 40%), radial-gradient(circle at 80% 20%, rgba(200,150,130,0.15) 0%, transparent 45%)",
        }}
      />

      {/* Content */}
      <div
        className={`relative z-10 flex min-h-screen flex-col items-center justify-center px-6 py-12 text-center transition-all duration-[1200ms] ease-out ${
          mounted && !leaving ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        <div className="mx-auto max-w-5xl">
          <p
            className="mb-8 text-[11px] uppercase tracking-[0.35em]"
            style={{ color: "#7A3E24", opacity: 0.75 }}
          >
            Associazione Culturale
          </p>

          <h1
            className="font-light leading-[0.95] tracking-tight"
            style={{
              fontFamily: "'Inter Tight', ui-sans-serif, system-ui, sans-serif",
              fontSize: "clamp(2.4rem, 8vw, 6.5rem)",
              fontWeight: 300,
              letterSpacing: "-0.02em",
            }}
          >
            <span className="block" style={{ color: "#3d1f14" }}>
              Antico Mulino delle Fate
            </span>
            <span
              className="block mt-1"
              style={{ color: "#c9927e", fontStyle: "italic", fontWeight: 300 }}
            >
              Memoria, Natura e Tradizione
            </span>
          </h1>

          <p
            className="mx-auto mt-8 max-w-xl text-base sm:text-lg leading-relaxed"
            style={{ color: "#5A241B", opacity: 0.85 }}
          >
            Esplora un luogo dove acqua, pietra e memoria raccontano la storia
            del territorio.
          </p>

          {/* CTA */}
          <div className="mt-12 flex justify-center">
            <button
              onClick={handleEnter}
              className="group relative flex items-center gap-2 rounded-full pl-8 pr-2 py-2 transition-all duration-500 hover:pl-10 hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
              style={{
                background: "#3d1f14",
                color: "#F3E1C7",
                boxShadow: "0 10px 30px -10px rgba(61,31,20,0.4)",
              }}
              aria-label="Visita ora il sito"
            >
              <span
                className="text-base sm:text-lg font-light tracking-wide py-3"
                style={{ fontFamily: "'Inter Tight', sans-serif" }}
              >
                Visita ora
              </span>
              <span
                className="flex h-11 w-11 items-center justify-center rounded-full transition-transform duration-500 group-hover:translate-x-1"
                style={{ background: "#F3E1C7", color: "#3d1f14" }}
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14M13 5l7 7-7 7" />
                </svg>
              </span>
            </button>
          </div>

          {/* Awards / attribution */}
          <div className="mt-16 space-y-2">
            <p
              className="text-xs sm:text-sm tracking-[0.15em] uppercase"
              style={{ color: "#5A241B", opacity: 0.8 }}
            >
              Vincitore del Premio Internazionale
            </p>
            <p
              className="text-sm sm:text-base italic"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                color: "#3d1f14",
              }}
            >
              «La Fabbrica nel Paesaggio»
            </p>
            <p
              className="mt-4 text-[11px] sm:text-xs tracking-wide max-w-lg mx-auto"
              style={{ color: "#7A3E24", opacity: 0.7 }}
            >
              Realtà culturale legata alla Federazione Italiana delle
              Associazioni e Club per l’UNESCO
            </p>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, transparent, rgba(233,214,189,0.6))",
        }}
      />
    </div>
  );
}
