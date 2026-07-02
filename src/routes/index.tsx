import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { LoadingScreen } from "@/components/mulino/LoadingScreen";
import { IntroLanding } from "@/components/mulino/IntroLanding";
import { Navbar } from "@/components/mulino/Navbar";
import { Hero } from "@/components/mulino/Hero";
import { SectionMulino } from "@/components/mulino/SectionMulino";
import { SectionFata } from "@/components/mulino/SectionFata";
import { SectionNatura } from "@/components/mulino/SectionNatura";
import { SectionDidattica } from "@/components/mulino/SectionDidattica";
import { SectionTerritorio } from "@/components/mulino/SectionTerritorio";
import { SectionVideo } from "@/components/mulino/SectionVideo";
import { SectionGalleria } from "@/components/mulino/SectionGalleria";
import { SectionRiconoscimenti } from "@/components/mulino/SectionRiconoscimenti";
import { SectionContatti } from "@/components/mulino/SectionContatti";
import { Footer } from "@/components/mulino/Footer";
import { WhatsappFab } from "@/components/mulino/WhatsappFab";
import mulinoNotte from "@/assets/mulino/mulino-notte.webp.asset.json";

const OG_IMAGE = `https://id-preview--d03e1305-b993-4aef-bb7f-8617d8701e95.lovable.app${mulinoNotte.url}`;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { property: "og:image", content: OG_IMAGE },
      { name: "twitter:image", content: OG_IMAGE },
    ],
  }),
  component: Index,
});

function Index() {
  const [hasEntered, setHasEntered] = useState(false);
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    try {
      if (sessionStorage.getItem("mulino-entered") === "1") {
        setHasEntered(true);
        setShowIntro(false);
      }
    } catch {}
  }, []);

  const handleEnter = () => {
    setHasEntered(true);
    try {
      sessionStorage.setItem("mulino-entered", "1");
    } catch {}
    // Unmount intro after its exit animation completes
    setTimeout(() => setShowIntro(false), 950);
  };

  return (
    <>
      <LoadingScreen />
      {showIntro && <IntroLanding onEnter={handleEnter} />}
      {hasEntered && (
        <>
          <Navbar />
          <main>
            <Hero />
            <SectionMulino />
            <SectionFata />
            <SectionNatura />
            <SectionDidattica />
            <SectionTerritorio />
            <SectionVideo />
            <SectionGalleria />
            <SectionRiconoscimenti />
            <SectionContatti />
          </main>
          <Footer />
          <WhatsappFab />
        </>
      )}
    </>
  );
}
