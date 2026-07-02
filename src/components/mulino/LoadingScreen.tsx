import { useEffect, useState } from "react";
import { IMG } from "./assets";

const SLIDES = [IMG.statuaFata, IMG.mulinoGiorno, IMG.boscoLucciole, IMG.mulinoLucciole];

export function LoadingScreen() {
  const [mounted, setMounted] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [index, setIndex] = useState(0);
  const [gone, setGone] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const seen = sessionStorage.getItem("mulino-loaded");
    if (seen) {
      setGone(true);
      return;
    }
    setMounted(true);
    const rotate = setInterval(() => {
      setIndex((i) => (i + 1) % SLIDES.length);
    }, 700);
    const fadeOut = setTimeout(() => setHidden(true), 2600);
    const remove = setTimeout(() => {
      setGone(true);
      sessionStorage.setItem("mulino-loaded", "1");
    }, 3400);
    return () => {
      clearInterval(rotate);
      clearTimeout(fadeOut);
      clearTimeout(remove);
    };
  }, []);

  if (gone) return null;

  return (
    <div
      aria-hidden={hidden}
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-[oklch(0.18_0.05_25)] transition-opacity duration-700 ${
        hidden ? "pointer-events-none opacity-0" : "opacity-100"
      } ${mounted ? "" : "opacity-0"}`}
    >
      <div className="absolute inset-0 overflow-hidden">
        {SLIDES.map((src, i) => (
          <div
            key={src}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              i === index ? "opacity-40" : "opacity-0"
            }`}
          >
            <img
              src={src}
              alt=""
              aria-hidden="true"
              className="h-full w-full object-cover"
              style={{ filter: "saturate(0.7) contrast(0.95) brightness(0.75) sepia(0.15)" }}
            />
          </div>
        ))}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at center, transparent 0%, oklch(0.18 0.05 25 / 0.85) 70%), linear-gradient(180deg, oklch(0.28 0.09 25 / 0.4), oklch(0.18 0.05 25 / 0.75))",
          }}
        />
      </div>

      <div className="relative flex flex-col items-center gap-6 px-8 text-center">
        <div className="flex h-24 w-24 items-center justify-center overflow-hidden rounded-full bg-pergamena/90 shadow-[0_10px_40px_-10px_oklch(0.15_0.06_25)] ring-1 ring-grano/40 sm:h-28 sm:w-28">
          <img src={IMG.logo} alt="Logo Antico Mulino delle Fate" className="h-full w-full object-cover" />
        </div>
        <div className="space-y-2">
          <div className="ornament-rule mx-auto max-w-[220px] text-pergamena/80">Nicastro · 1727</div>
          <h1 className="font-display text-3xl font-medium tracking-wide text-pergamena sm:text-4xl">
            Antico Mulino delle Fate
          </h1>
          <p className="font-body text-sm italic tracking-[0.15em] text-grano/90">
            Acqua, pietra e memoria
          </p>
        </div>
        <div className="mt-2 h-[2px] w-40 overflow-hidden rounded-full bg-pergamena/15">
          <div
            className="h-full bg-grano/80"
            style={{ animation: "load-bar 2.4s cubic-bezier(0.4,0,0.2,1) forwards" }}
          />
        </div>
        <style>{`@keyframes load-bar { from { width: 0% } to { width: 100% } }`}</style>
      </div>
    </div>
  );
}
