import { createFileRoute } from "@tanstack/react-router";
import { LoadingScreen } from "@/components/mulino/LoadingScreen";
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
import mulinoNotte from "@/assets/mulino/mulino-notte.jpg.asset.json";

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
  return (
    <>
      <LoadingScreen />
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
  );
}
