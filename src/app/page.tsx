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
      <main className="bg-white p-3 space-y-5">
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
