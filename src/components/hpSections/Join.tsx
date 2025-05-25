"use client";

import Image from "next/image";

export default function Join() {
  return (
    <section
      className="
        w-full min-h-[calc(100vh-80px)] px-5 md:px-20 py-12
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
        {/* Card 1 */}
        <div className="md:row-span-2 order-1 bg-[#072723] rounded-xl p-5 flex flex-col items-start justify-between">
          {/* Icon */}
          <div className="w-full h-full bg-[#D1EFE8] rounded-xl p-5 flex justify-center items-center">
            <Image
              src="/hp/join/onboarding.svg"
              alt="Hyperliquid Onboarding Icon"
              width={100}
              height={100}
              className="w-full h-full object-contain"
            />
          </div>

          {/* Title */}
          <h3 className="mt-4 text-lg sm:text-xl md:text-2xl font-semibold text-[#AEFFEB]">
            Hyperliquid Onboarding Starter Pack
          </h3>

          {/* Description */}
          <p className="mt-2 text-sm sm:text-base text-[#D1EFE8]">
            Essential resources to explore the Hyperliquid ecosystem, both
            technical and non-technical.
          </p>
        </div>

        {/* Card 2 */}
        <div className="order-2 md:order-2 bg-[#D1EFE8] h-60 md:h-auto rounded-xl p-4 relative overflow-hidden flex items-end">
          {/* Icon */}
          <div className="absolute -top-1 -left-8 w-2/3 h-2/3">
            <Image
              src="/hp/join/communication.svg"
              alt="Communication Icon"
              fill
              className="object-contain"
            />
          </div>

          {/* Text */}
          <div className="relative z-10">
            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-[#072723]">
              Communication Layers
            </h3>
            <p className="mt-2 text-sm sm:text-base text-black">
              Gather the entire space through layered communications.
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="order-3 md:order-3 bg-[#072723] h-60 md:h-auto rounded-xl p-4 relative overflow-hidden flex items-end">
          {/* Icon */}
          <div className="absolute -top-2 -right-7 w-2/3 h-2/3">
            <Image
              src="/hp/join/growth.svg"
              alt="Project Growth Icon"
              fill
              className="object-contain"
            />
          </div>

          {/* Text */}
          <div className="relative z-10">
            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-[#AEFFEB]">
              Project Growth & Strategic Support
            </h3>
            <p className="mt-2 text-sm sm:text-base text-[#D1EFE8]">
              Hands-on GTM strategy, KOL access, advisory, and technical
              guidance.
            </p>
          </div>
        </div>

        {/* Card 4 */}
        <div className="order-4 md:order-5 bg-[#D1EFE8] h-60 md:h-auto rounded-xl p-4 relative overflow-hidden flex items-end">
          {/* Icon */}
          <div className="absolute top-0 -right-28 w-full h-full">
            <Image
              src="/hp/join/career.svg"
              alt="Career Paths Icon"
              fill
              className="object-contain"
            />
          </div>

          {/* Text */}
          <div className="relative z-10">
            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-[#072723]">
              Career Paths in Web3
            </h3>
            <p className="mt-2 text-sm sm:text-base text-black">
              Build your Web3 career with support from experienced builders.
            </p>
          </div>
        </div>

        {/* Card 5 */}
        <div className="order-5 md:order-4 bg-[#072723] h-60 md:h-auto rounded-xl p-4 relative overflow-hidden flex items-end">
          {/* Icon */}
          <div className="absolute top-0 -left-12 w-2/3 h-2/3">
            <Image
              src="/hp/join/community.svg"
              alt="Regional Community Icon"
              fill
              className="object-contain"
            />
          </div>

          {/* Text */}
          <div className="relative z-10">
            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-[#AEFFEB]">
              Regional Community Building
            </h3>
            <p className="mt-2 text-sm sm:text-base text-[#D1EFE8]">
              Access regional markets and receive local support.
            </p>
          </div>
        </div>

        {/* Card 6 */}
        <div className="md:col-span-3 order-6 md:order-6 bg-[#072723] h-60 rounded-xl p-4 relative overflow-hidden flex items-end">
          {/* Icon */}
          <div className="absolute -top-24 md:top-0 right-0 w-2/3 h-full">
            <Image
              src="/hp/join/earnings.svg"
              alt="Insights Icon"
              fill
              className="object-contain"
            />
          </div>

          {/* Text */}
          <div className="relative z-10 max-w-md">
            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-[#AEFFEB]">
              Insights & Earning Opportunities
            </h3>
            <p className="mt-2 text-sm sm:text-base text-[#D1EFE8]">
              Access more earning perks: airdrops, WLs, bounties, job offers,
              DeFi strategies, alphas. Insights from OGs through X Spaces,
              articles, workshops, and IRL events.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
