import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";

export const Route = createFileRoute("/cookie-policy")({
  head: () => ({
    meta: [
      { title: "Cookie Policy — Antico Mulino delle Fate" },
      { name: "description", content: "Informativa sull'uso dei cookie del sito dell'Antico Mulino delle Fate." },
    ],
  }),
  component: CookiePolicy,
});

function CookiePolicy() {
  return (
    <main className="min-h-dvh bg-pergamena py-24">
      <div className="mx-auto max-w-3xl px-5 sm:px-10">
        <Link to="/" className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.2em] text-marrone/70 hover:text-grano">
          <ArrowLeft className="h-4 w-4" /> Torna al sito
        </Link>
        <h1 className="mt-8 font-display text-4xl text-bordeaux sm:text-5xl">Cookie Policy</h1>
        <p className="mt-4 text-sm text-marrone/70">Ultimo aggiornamento: {new Date().toLocaleDateString("it-IT")}</p>

        <div className="prose mt-10 max-w-none text-marrone/90 [&_h2]:font-display [&_h2]:text-2xl [&_h2]:text-bordeaux [&_h2]:mt-10 [&_p]:mt-4 [&_p]:leading-relaxed">
          <p>
            Questa informativa spiega come il sito dell'Associazione Culturale Amici dell'Antico
            Mulino delle Fate utilizza i cookie e tecnologie simili.
          </p>

          <h2>Cookie tecnici</h2>
          <p>
            Il sito utilizza esclusivamente cookie tecnici, necessari al corretto funzionamento
            delle pagine (ad esempio la memorizzazione della sessione di caricamento iniziale
            per non ripeterla ad ogni visita).
          </p>

          <h2>Nessun cookie di profilazione</h2>
          <p>
            Non vengono utilizzati cookie di profilazione o di tracciamento pubblicitario da
            parte del sito.
          </p>

          <h2>Contenuti da terze parti</h2>
          <p>
            Il video introduttivo è caricato tramite YouTube in modalità <em>nocookie</em>, che
            attiva i cookie di YouTube solo se l'utente decide di riprodurre il contenuto. La
            mappa è fornita da Google Maps e può impostare cookie tecnici. Per maggiori
            informazioni si rimanda alle policy dei rispettivi fornitori.
          </p>

          <h2>Come gestire i cookie</h2>
          <p>
            L'utente può gestire o disabilitare i cookie direttamente dalle impostazioni del
            proprio browser. La disabilitazione dei cookie tecnici può compromettere il corretto
            funzionamento del sito.
          </p>

          <p className="mt-10 text-sm text-marrone/70">
            Testo di base modificabile dall'associazione.
          </p>
        </div>
      </div>
    </main>
  );
}
