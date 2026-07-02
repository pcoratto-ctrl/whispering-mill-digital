import { MapPin, Phone, Mail, MessageCircle } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

const TEL = "+393281365043";
const TEL_HUMAN = "328 136 5043";
const EMAIL = "anticomdf@gmail.com";
const ADDRESS = "Via Serra 12, Lamezia Terme, Italia";
const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  "Antico Mulino delle Fate " + ADDRESS,
)}`;

export function SectionContatti() {
  return (
    <section id="contatti" className="relative bg-[oklch(0.24_0.03_140)] py-24 text-pergamena sm:py-32">
      <div
        aria-hidden
        className="absolute inset-0 opacity-30"
        style={{
          background:
            "radial-gradient(ellipse at 20% 30%, oklch(0.4 0.05 130 / 0.4), transparent 60%), radial-gradient(ellipse at 80% 80%, oklch(0.28 0.09 25 / 0.4), transparent 60%)",
        }}
      />
      <div className="relative mx-auto grid max-w-6xl gap-14 px-5 sm:px-10 lg:grid-cols-12">
        <div className="lg:col-span-6">
          <ScrollReveal>
            <div className="ornament-rule mb-6 max-w-[220px] text-grano/90">Contatti</div>
            <h2 className="font-display text-[clamp(2rem,4.5vw,3.5rem)] leading-tight">
              Visita l'Antico<br />
              <span className="italic text-grano/95">Mulino delle Fate</span>
            </h2>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-pergamena/85">
              Scopri un luogo dove storia, natura e tradizione continuano a incontrarsi.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={120}>
            <dl className="mt-10 space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="mt-1 h-5 w-5 text-grano" aria-hidden />
                <div>
                  <dt className="text-[11px] uppercase tracking-[0.25em] text-grano/70">Indirizzo</dt>
                  <dd className="mt-1 text-pergamena/90">{ADDRESS}</dd>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="mt-1 h-5 w-5 text-grano" aria-hidden />
                <div>
                  <dt className="text-[11px] uppercase tracking-[0.25em] text-grano/70">Telefono</dt>
                  <dd className="mt-1 text-pergamena/90">
                    <a href={`tel:${TEL}`} className="hover:text-grano">{TEL_HUMAN}</a>
                  </dd>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Mail className="mt-1 h-5 w-5 text-grano" aria-hidden />
                <div>
                  <dt className="text-[11px] uppercase tracking-[0.25em] text-grano/70">Email</dt>
                  <dd className="mt-1 text-pergamena/90">
                    <a href={`mailto:${EMAIL}`} className="hover:text-grano">{EMAIL}</a>
                  </dd>
                </div>
              </div>
            </dl>
          </ScrollReveal>
        </div>

        <ScrollReveal className="lg:col-span-6" delay={180}>
          <div className="grid gap-3 sm:grid-cols-2">
            <a
              href={`tel:${TEL}`}
              className="group flex items-center gap-3 rounded-sm border border-pergamena/20 bg-pergamena/5 p-5 transition-colors hover:border-grano hover:bg-grano/10"
            >
              <Phone className="h-5 w-5 text-grano" aria-hidden />
              <span className="text-sm uppercase tracking-[0.2em] text-pergamena group-hover:text-grano">
                Chiama
              </span>
            </a>
            <a
              href={`https://wa.me/${TEL.replace("+", "")}`}
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-3 rounded-sm border border-pergamena/20 bg-pergamena/5 p-5 transition-colors hover:border-grano hover:bg-grano/10"
            >
              <MessageCircle className="h-5 w-5 text-grano" aria-hidden />
              <span className="text-sm uppercase tracking-[0.2em] text-pergamena group-hover:text-grano">
                WhatsApp
              </span>
            </a>
            <a
              href={`mailto:${EMAIL}`}
              className="group flex items-center gap-3 rounded-sm border border-pergamena/20 bg-pergamena/5 p-5 transition-colors hover:border-grano hover:bg-grano/10"
            >
              <Mail className="h-5 w-5 text-grano" aria-hidden />
              <span className="text-sm uppercase tracking-[0.2em] text-pergamena group-hover:text-grano">
                Email
              </span>
            </a>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-3 rounded-sm border border-pergamena/20 bg-pergamena/5 p-5 transition-colors hover:border-grano hover:bg-grano/10"
            >
              <MapPin className="h-5 w-5 text-grano" aria-hidden />
              <span className="text-sm uppercase tracking-[0.2em] text-pergamena group-hover:text-grano">
                Mappa
              </span>
            </a>
          </div>

          <div className="mt-6 overflow-hidden rounded-sm border border-pergamena/15">
            <iframe
              title="Mappa Antico Mulino delle Fate"
              src={`https://maps.google.com/maps?q=${encodeURIComponent(
                "Antico Mulino delle Fate Lamezia Terme",
              )}&output=embed`}
              className="h-64 w-full"
              loading="lazy"
              style={{ filter: "sepia(0.3) saturate(0.7) contrast(0.95) hue-rotate(-10deg)" }}
            />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
