import NavBar from "@/components/NavBar";
import Hero from "@/components/sections/Hero";

export default function Home() {
  return (
    <>
      <NavBar />
      <main className="bg-cyan-500">
        <Hero />
      </main>
    </>
  );
}
