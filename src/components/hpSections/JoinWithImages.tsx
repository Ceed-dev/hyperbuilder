"use client";

import Image from "next/image";

export default function JoinWithImages() {
  return (
    <section
      className="
        w-full rounded-3xl px-5 md:px-20 py-12
        bg-[url('/hp/join/bg-mobile.svg')] bg-cover bg-center
        md:bg-[url('/hp/join/bg-desktop.svg')]"
    >
      {/* Section Title */}
      <div className="mb-8 text-[#072723] text-2xl sm:text-3xl md:text-4xl">
        <h2 className="font-bold">Join Hyperbuilder</h2>
        <p className="italic">If You&apos;re Looking For</p>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-4">
        {/* Card 1: left column, spans two rows */}
        <div className="md:row-span-2 order-1">
          {/* Mobile Image */}
          <Image
            src="/hp/join/cards/1-mobile.svg"
            alt="Hyperliquid Onboarding Icon"
            width={100}
            height={100}
            className="w-full h-full object-contain block md:hidden"
          />
          {/* Desktop Image */}
          <Image
            src="/hp/join/cards/1-desktop.svg"
            alt="Hyperliquid Onboarding Icon"
            width={100}
            height={100}
            className="w-full h-full object-contain hidden md:block"
          />
        </div>
        {/* Cards 2–5 (right side) */}
        {[2, 3, 4, 5].map((num) => {
          let mdOrder = "";
          if (num === 4) {
            mdOrder = "md:order-5";
          } else if (num === 5) {
            mdOrder = "md:order-4";
          }

          return (
            <div
              key={num}
              className={`relative w-full h-full order-${num} ${mdOrder}`}
            >
              {/* Mobile Image */}
              <Image
                src={`/hp/join/cards/${num}-mobile.svg`}
                alt={`Card ${num}`}
                width={100}
                height={100}
                className="w-full h-full object-cover block md:hidden"
              />
              {/* Desktop Image */}
              <Image
                src={`/hp/join/cards/${num}-desktop.svg`}
                alt={`Card ${num}`}
                fill
                className="object-cover rounded-2xl hidden md:block"
              />
            </div>
          );
        })}

        {/* Card 6: bottom, spans all three columns */}
        <div className="md:col-span-3 order-6 md:order-6">
          {/* Mobile Image */}
          <Image
            src="/hp/join/cards/6-mobile.svg"
            alt="Insights Icon"
            width={100}
            height={100}
            className="w-full h-full object-contain block md:hidden"
          />
          {/* Desktop Image */}
          <Image
            src="/hp/join/cards/6-desktop.svg"
            alt="Insights Icon"
            width={100}
            height={100}
            className="w-full h-full object-contain hidden md:block"
          />
        </div>
      </div>
    </section>
  );
}
