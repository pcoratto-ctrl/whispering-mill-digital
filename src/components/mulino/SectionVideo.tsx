import { useState } from "react";
import { Play } from "lucide-react";
import { IMG } from "./assets";
import { GradedImage } from "./GradedImage";
import { ScrollReveal } from "./ScrollReveal";

const VIDEO_ID = "TkvWMcTNMPs";
const EMBED = `https://www.youtube-nocookie.com/embed/${VIDEO_ID}?autoplay=1&rel=0`;

export function SectionVideo() {
  const [play, setPlay] = useState(false);

  return (
    <section
      id="video"
      className="relative py-24 sm:py-32"
      style={{
        background:
          "linear-gradient(160deg, oklch(0.24 0.08 25) 0%, oklch(0.22 0.04 140) 100%)",
      }}
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-10">
        <ScrollReveal className="mx-auto max-w-3xl text-center">
          <div className="ornament-rule mx-auto mb-6 max-w-[220px] justify-center text-grano/90">
            Video
          </div>
          <h2 className="font-display text-[clamp(2rem,4.5vw,3.5rem)] leading-tight text-pergamena">
            Il mulino <span className="italic text-grano/95">in movimento</span>
          </h2>
          <p className="mt-4 text-pergamena/80">
            Un breve racconto per immagini dell'Antico Mulino delle Fate.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={150}>
          <div className="relative mx-auto mt-14 w-full max-w-5xl">
            <div
              className="relative overflow-hidden rounded-2xl ring-1 ring-grano/50"
              style={{
                aspectRatio: "16 / 9",
                boxShadow:
                  "0 40px 90px -30px oklch(0.1 0.05 25 / 0.7), inset 0 0 0 1px oklch(0.65 0.11 75 / 0.15)",
              }}
            >
              {play ? (
                <iframe
                  src={EMBED}
                  title="Antico Mulino delle Fate — Video"
                  className="h-full w-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              ) : (
                <button
                  type="button"
                  onClick={() => setPlay(true)}
                  aria-label="Riproduci video sull'Antico Mulino delle Fate"
                  className="group relative block h-full w-full"
                >
                  <GradedImage
                    src={IMG.mulinoNotte}
                    alt="Anteprima video dell'Antico Mulino delle Fate illuminato di notte"
                    variant="night"
                    frameClassName="absolute inset-0 h-full w-full"
                  />
                  <span
                    aria-hidden
                    className="absolute left-1/2 top-1/2 z-10 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-grano/70 bg-bordeaux/80 text-grano backdrop-blur-md transition-transform duration-500 group-hover:scale-110 sm:h-24 sm:w-24"
                  >
                    <Play className="ml-1 h-8 w-8 fill-grano" />
                  </span>
                  <span className="absolute bottom-6 left-6 z-10 font-display text-lg italic text-pergamena/90 sm:text-xl">
                    Guarda il racconto
                  </span>
                </button>
              )}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
