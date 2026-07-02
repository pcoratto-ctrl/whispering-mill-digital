import { Link } from "@tanstack/react-router";
import { IMG } from "./assets";

export function Footer() {
  return (
    <footer className="bg-[oklch(0.2_0.06_25)] py-16 text-pergamena/80">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-10 md:grid-cols-3">
        <div className="flex items-start gap-4">
          <span className="flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-full bg-pergamena ring-1 ring-grano/30">
            <img src={IMG.logo} alt="Logo Antico Mulino delle Fate" className="h-full w-full object-cover" />
          </span>
          <div>
            <p className="font-display text-lg text-pergamena">Antico Mulino delle Fate</p>
            <p className="text-xs uppercase tracking-[0.22em] text-grano/80">Nicastro · 1727</p>
          </div>
        </div>

        <div>
          <p className="text-[11px] uppercase tracking-[0.25em] text-grano/70">Associazione</p>
          <p className="mt-2 text-sm leading-relaxed">
            Associazione Culturale Amici dell'Antico Mulino delle Fate.<br />
            Custodi di acqua, pietra e memoria.
          </p>
        </div>

        <div>
          <p className="text-[11px] uppercase tracking-[0.25em] text-grano/70">Contatti</p>
          <ul className="mt-2 space-y-1 text-sm">
            <li>Via Serra 12, Lamezia Terme</li>
            <li>
              <a href="tel:+393281365043" className="hover:text-grano">328 136 5043</a>
            </li>
            <li>
              <a href="mailto:anticomdf@gmail.com" className="hover:text-grano">anticomdf@gmail.com</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-12 flex max-w-7xl flex-col items-center justify-between gap-4 border-t border-pergamena/10 px-5 pt-6 text-xs text-pergamena/60 sm:flex-row sm:px-10">
        <p>© {new Date().getFullYear()} Antico Mulino delle Fate — Tutti i diritti riservati.</p>
        <nav className="flex gap-6">
          <Link to="/privacy" className="hover:text-grano">Privacy Policy</Link>
          <Link to="/cookie-policy" className="hover:text-grano">Cookie Policy</Link>
        </nav>
      </div>
    </footer>
  );
}
