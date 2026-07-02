import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — Antico Mulino delle Fate" },
      { name: "description", content: "Informativa privacy dell'Associazione Culturale Amici dell'Antico Mulino delle Fate." },
      { property: "og:title", content: "Privacy Policy — Antico Mulino delle Fate" },
      { property: "og:description", content: "Come trattiamo i dati personali dei visitatori del sito dell'Antico Mulino delle Fate." },
      { property: "og:url", content: "https://mulinodellefate.lovable.app/privacy" },
      { name: "twitter:title", content: "Privacy Policy — Antico Mulino delle Fate" },
      { name: "twitter:description", content: "Come trattiamo i dati personali dei visitatori del sito dell'Antico Mulino delle Fate." },
    ],
    links: [{ rel: "canonical", href: "https://mulinodellefate.lovable.app/privacy" }],
  }),
  component: Privacy,
});


function Privacy() {
  return (
    <main className="min-h-dvh bg-pergamena py-24">
      <div className="mx-auto max-w-3xl px-5 sm:px-10">
        <Link to="/" className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.2em] text-marrone/70 hover:text-grano">
          <ArrowLeft className="h-4 w-4" /> Torna al sito
        </Link>
        <h1 className="mt-8 font-display text-4xl text-bordeaux sm:text-5xl">Privacy Policy</h1>
        <p className="mt-4 text-sm text-marrone/70">Ultimo aggiornamento: {new Date().toLocaleDateString("it-IT")}</p>

        <div className="prose mt-10 max-w-none text-marrone/90 [&_h2]:font-display [&_h2]:text-2xl [&_h2]:text-bordeaux [&_h2]:mt-10 [&_p]:mt-4 [&_p]:leading-relaxed">
          <p>
            La presente informativa descrive le modalità di trattamento dei dati personali degli
            utenti che visitano il sito dell'Associazione Culturale Amici dell'Antico Mulino delle
            Fate. Il testo è redatto in forma semplice e potrà essere aggiornato.
          </p>

          <h2>Titolare del trattamento</h2>
          <p>
            Associazione Culturale Amici dell'Antico Mulino delle Fate — Via Serra 12, Lamezia
            Terme. Email: anticomdf@gmail.com — Telefono: 328 136 5043.
          </p>

          <h2>Dati raccolti</h2>
          <p>
            Il sito non richiede registrazione. I dati personali (nome, email, telefono) vengono
            raccolti esclusivamente se l'utente sceglie di contattarci tramite email, telefono o
            WhatsApp. In tali casi i dati sono trattati per rispondere alla richiesta.
          </p>

          <h2>Finalità</h2>
          <p>
            I dati sono utilizzati unicamente per rispondere alle richieste di informazione,
            organizzare visite e attività didattiche e gestire i rapporti con soci e visitatori.
          </p>

          <h2>Conservazione</h2>
          <p>
            I dati sono conservati per il tempo necessario a evadere le richieste e in ogni caso
            non oltre quanto previsto dagli obblighi di legge.
          </p>

          <h2>Diritti dell'interessato</h2>
          <p>
            L'utente può in qualsiasi momento chiedere l'accesso, la rettifica, la cancellazione
            o la limitazione del trattamento dei propri dati, scrivendo a anticomdf@gmail.com.
          </p>

          <h2>Servizi di terze parti</h2>
          <p>
            Il sito integra contenuti da YouTube (in modalità nocookie) e Google Maps per la
            visualizzazione del luogo. Tali servizi possono raccogliere dati tecnici secondo le
            rispettive privacy policy.
          </p>

          <p className="mt-10 text-sm text-marrone/70">
            Testo di base modificabile dall'associazione. Per una versione legalmente conforme
            si consiglia consulenza professionale.
          </p>
        </div>
      </div>
    </main>
  );
}
