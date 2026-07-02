import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

function NotFoundComponent() {
  return (
    <div className="flex min-h-dvh items-center justify-center bg-pergamena px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-7xl text-bordeaux">404</h1>
        <h2 className="mt-4 font-display text-xl text-bordeaux">Pagina non trovata</h2>
        <p className="mt-2 text-sm text-marrone/80">
          La pagina che cerchi non esiste o è stata spostata.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full bg-bordeaux px-5 py-2.5 text-sm uppercase tracking-[0.2em] text-pergamena transition-colors hover:bg-marrone"
          >
            Torna al Mulino
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-dvh items-center justify-center bg-pergamena px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-2xl text-bordeaux">Questa pagina non si è caricata</h1>
        <p className="mt-2 text-sm text-marrone/80">
          Qualcosa è andato storto. Puoi riprovare o tornare alla home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-full bg-bordeaux px-5 py-2.5 text-sm uppercase tracking-[0.2em] text-pergamena transition-colors hover:bg-marrone"
          >
            Riprova
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-full border border-marrone/40 px-5 py-2.5 text-sm uppercase tracking-[0.2em] text-bordeaux transition-colors hover:bg-pergamena/70"
          >
            Home
          </a>
        </div>
      </div>
    </div>
  );
}

const SITE_TITLE = "Antico Mulino delle Fate — Lamezia Terme";
const SITE_DESC =
  "Antico mulino ad acqua del XVIII secolo a Lamezia Terme, custode di natura, grani antichi, tradizioni locali e attività didattiche. Un luogo culturale immerso nel bosco di Nicastro.";

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: SITE_TITLE },
      { name: "description", content: SITE_DESC },
      { name: "author", content: "Associazione Culturale Amici dell'Antico Mulino delle Fate" },
      { name: "keywords", content: "Antico Mulino delle Fate, Lamezia Terme, Nicastro, mulino ad acqua, grani antichi, tradizioni locali, mulino didattico, natura Calabria" },
      { property: "og:title", content: SITE_TITLE },
      { property: "og:description", content: SITE_DESC },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "it_IT" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: SITE_TITLE },
      { name: "twitter:description", content: SITE_DESC },
      { title: "Antico Mulino delle Fate | Lamezia Terme" },
      { property: "og:title", content: "Antico Mulino delle Fate | Lamezia Terme" },
      { name: "twitter:title", content: "Antico Mulino delle Fate | Lamezia Terme" },
      { name: "description", content: "Scopri l’Antico Mulino delle Fate a Lamezia Terme: un antico mulino ad acqua immerso nella natura, tra storia, tradizioni locali, didattica, paesaggio e memoria" },
      { property: "og:description", content: "Scopri l’Antico Mulino delle Fate a Lamezia Terme: un antico mulino ad acqua immerso nella natura, tra storia, tradizioni locali, didattica, paesaggio e memoria" },
      { name: "twitter:description", content: "Scopri l’Antico Mulino delle Fate a Lamezia Terme: un antico mulino ad acqua immerso nella natura, tra storia, tradizioni locali, didattica, paesaggio e memoria" },
      { property: "og:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/cHwEfCUUp0Zsc1VXwZJp9yYPGYz2/social-images/social-1783012087958-Mulino-delle-Fate-01.webp" },
      { name: "twitter:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/cHwEfCUUp0Zsc1VXwZJp9yYPGYz2/social-images/social-1783012087958-Mulino-delle-Fate-01.webp" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Inter+Tight:wght@300;400;500;600&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="it">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
    </QueryClientProvider>
  );
}
