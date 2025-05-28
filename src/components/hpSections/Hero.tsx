"use client";

import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      className="
        w-full min-h-[calc(100vh-1.5rem)] flex flex-col items-center justify-center rounded-3xl text-[#072723] text-center relative
        bg-[url('/hp/hero/bg-mobile.svg')] bg-cover bg-center
        md:bg-[url('/hp/hero/bg-desktop.svg')]"
    >
      {/* Central Hero Image */}
      <div className="flex-grow flex items-center justify-center">
        <div className="relative w-full
          max-w-[280px] md:max-w-[500px] 2xl:max-w-[1200px]
          mb-60 md:mb-40">
          <Image
            src="/hp/hero/logo-hyperliquid.svg"
            alt="Hero Object"
            width={1000}
            height={1000}
            className="w-full h-auto object-contain"
          />
        </div>
      </div>

      {/* Bottom Fixed Content */}
      <div className="w-full px-5 pb-10 md:pb-20 absolute bottom-0 flex flex-col items-center">
        {/* Headline */}
        <h1 className="flex flex-wrap items-center justify-center text-3xl md:text-4xl mb-4">
          <span>A home of</span>
          <Image
            src="/hp/hero/text-hyperliquid.svg"
            alt="Hyperliquid Icon"
            width={200}
            height={40}
            className="mx-4 relative top-[4px]"
          />
          <span>builders</span>
        </h1>

        {/* Description */}
        <p className="text-xs md:text-sm mb-4 text-center font-semibold">
          Hyperbuilder is an onboarding gateway for Hyperliquid enthusiasts.
          <br />
          Whether you’re a builder, content creator, marketer, designer,
          investor, or trader – this is the place for you to learn, earn, and
          build in crypto.
        </p>

        {/* Join Button */}
        <Link
          href="https://discord.com/invite/DP2Ykkwxxf"
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
