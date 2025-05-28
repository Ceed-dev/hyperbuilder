import NavBar from "@/components/NavBar";
import {
  Hero,
  JoinWithImages,
  NetworkWithImages,
  PartnersWithImages,
  Collab,
  Footer,
} from "@/components/hpSections";
import BackToTopButton from "@/components/BackToTopButton";

export default function Home() {
  return (
    <>
      <NavBar />
      <main className="bg-white p-3 space-y-5">
        <Hero />
        <JoinWithImages />
        <NetworkWithImages />
        <PartnersWithImages />
        <Collab />
        <Footer />
      </main>
      <BackToTopButton />
    </>
  );
}
