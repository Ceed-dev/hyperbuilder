import NavBar from "@/components/NavBar";
import {
  Hero,
  Join,
  Network,
  Partners,
  Collab,
  Footer,
} from "@/components/hpSections";

export default function Home() {
  return (
    <>
      <NavBar />
      <main className="bg-[#AEFFEB]">
        <Hero />
        <Join />
        <Network />
        <Partners />
        <Collab />
        <Footer />
      </main>
    </>
  );
}
