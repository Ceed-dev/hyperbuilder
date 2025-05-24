"use client";

import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="w-full h-screen flex flex-col items-center justify-center text-center font-bold relative">
      {/* Central Hero Image */}
      <div className="flex-grow flex items-center justify-center">
        <div className="relative w-full max-w-[1200px] mb-40">
          <Image
            src="/logo-hyperliquid.svg"
            alt="Hero Object"
            width={1200}
            height={1200}
            className="w-full h-auto object-contain"
          />
        </div>
      </div>

      {/* Bottom Fixed Content */}
      <div className="w-full px-4 pb-20 absolute bottom-0 flex flex-col items-center">
        {/* Headline */}
        <h1 className="flex flex-wrap items-center justify-center text-2xl sm:text-3xl md:text-4xl font-semibold text-[#072723] mb-4">
          <span>A home of</span>
          <Image
            src="/text-hyperliquid.svg"
            alt="Hyperliquid Icon"
            width={260}
            height={40}
            className="mx-4"
          />
          <span>builders</span>
        </h1>

        {/* Description */}
        <p className="text-sm sm:text-base text-[#072723] mb-4 text-center">
          Hyperbuilder is an onboarding gateway for Hyperliquid enthusiasts.
          <br />
          Whether you’re a builder, content creator, marketer, designer,
          investor, or trader – this is the place for you to learn, earn, and
          build in crypto.
        </p>

        {/* Join Button */}
        <Link
          href="https://discord.gg/DP2Ykkwxxf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-[#072723] text-[#D1EFE8] px-6 py-3 rounded-full hover:bg-[#0C3A34] transition"
        >
          <Image
            src="/icons/discord-light.svg"
            alt="Discord Icon"
            width={24}
            height={24}
          />
          JOIN US
        </Link>
      </div>
    </section>
  );
}
