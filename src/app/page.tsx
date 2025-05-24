import NavBar from "@/components/NavBar";
import Hero from "@/components/sections/Hero";
import JoinSection from "@/components/sections/JoinSection";
import NetworkSection from "@/components/sections/NetworkSection";

export default function Home() {
  return (
    <>
      <NavBar />
      <main className="bg-cyan-500">
        <Hero />
        <JoinSection />
        <NetworkSection />
      </main>
    </>
  );
}
