import { useEffect, useState } from "react";
import { IMG } from "./assets";

export function LoadingScreen() {
  const [hidden, setHidden] = useState(false);
  const [gone, setGone] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const seen = sessionStorage.getItem("mulino-loaded");
    if (seen) {
      setGone(true);
      return;
    }
    const fadeOut = setTimeout(() => setHidden(true), 2400);
    const remove = setTimeout(() => {
      setGone(true);
      sessionStorage.setItem("mulino-loaded", "1");
    }, 3100);
    return () => {
      clearTimeout(fadeOut);
      clearTimeout(remove);
    };
  }, []);

  if (gone) return null;

  return (
    <div
      aria-hidden={hidden}
      className={`fixed inset-0 z-[200] flex items-center justify-center bg-pergamena transition-opacity duration-700 ${
        hidden ? "pointer-events-none opacity-0" : "opacity-100"
      }`}
    >
      <div className="relative flex flex-col items-center gap-6 px-8 text-center">
        <div className="flex h-24 w-24 items-center justify-center overflow-hidden rounded-full bg-pergamena shadow-[0_10px_40px_-10px_oklch(0.28_0.09_25/0.35)] ring-1 ring-grano/40 sm:h-28 sm:w-28">
          <img
            src={IMG.logo}
            alt="Logo Antico Mulino delle Fate"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="h-[3px] w-56 overflow-hidden rounded-full bg-marrone/15 sm:w-64">
          <div
            className="h-full rounded-full bg-bordeaux"
            style={{ animation: "load-bar 2.2s cubic-bezier(0.4,0,0.2,1) forwards" }}
          />
        </div>
        <style>{`@keyframes load-bar { from { width: 0% } to { width: 100% } }`}</style>
      </div>
    </div>
  );
}
