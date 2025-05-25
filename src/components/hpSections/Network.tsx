"use client";

import Image from "next/image";

export default function Network() {
  return (
    <section
      className="
        w-full px-5 md:px-20 py-12
        bg-[url('/hp/network/bg-mobile.svg')] bg-cover bg-center
        md:bg-[url('/hp/network/bg-desktop.svg')]"
    >
      {/* Section Title */}
      <div className="mb-8 text-[#072723] text-2xl sm:text-3xl md:text-4xl">
        <h2 className="font-bold">Our Network</h2>
        <p className="italic">So Far</p>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-2 gap-4">
        {/* Block 1 */}
        <div className="relative bg-[#D1EFE8] h-40 md:h-60 rounded-xl p-4 flex flex-col justify-end border-[#072723] border-2 overflow-hidden">
          {/* Icon */}
          <div className="absolute right-0 top-0 w-1/2 h-full">
            <Image
              src="/hp/network/onboarding.svg"
              alt="Onboarding Background Shape"
              fill
              className="object-contain"
            />
          </div>

          {/* Text */}
          <div className="relative z-10 flex flex-col gap-1 sm:gap-2">
            <p className="text-[#072723] text-2xl sm:text-3xl md:text-4xl font-medium">
              Onboarding
            </p>
            <div className="flex flex-col sm:flex-row sm:items-end sm:gap-2">
              <span className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#072723]">
                70+
              </span>
              <span className="text-sm sm:text-base text-[#072723]">
                Hyperliquid
                <br />
                founders & builders
              </span>
            </div>
          </div>
        </div>

        {/* Block 2 */}
        <div className="relative bg-[#3FF8CB] h-40 md:h-60 rounded-xl p-4 flex flex-col justify-end border-[#072723] border-2 overflow-hidden">
          {/* Icon */}
          <div className="absolute right-0 top-0 w-1/2 h-full">
            <Image
              src="/hp/network/active-network.svg"
              alt="Network Background Shape"
              fill
              className="object-contain"
            />
          </div>

          {/* Text */}
          <div className="relative z-10 flex flex-col sm:flex-row sm:items-end gap-3 w-full">
            {/* Left */}
            <div>
              <span className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#072723]">
                300+
              </span>
              <div className="text-lg sm:text-xl md:text-2xl font-medium text-[#072723]">
                <span className="block sm:inline"> active </span>
                <span className="block sm:inline">network</span>
              </div>
            </div>

            {/* Right */}
            <p className="text-sm sm:text-base text-[#072723]">
              with content
              <br />
              creators/KOLs/
              <br />
              marketers/designers
            </p>
          </div>
        </div>

        {/* Block 3 */}
        <div className="relative bg-[#3FF8CB] h-40 md:h-60 rounded-xl p-4 flex flex-col justify-center border-[#072723] border-2 overflow-hidden">
          {/* Icon */}
          <div className="absolute right-0 top-0 w-1/2 h-full">
            <Image
              src="/hp/network/regional-hubs.svg"
              alt="Globe Background"
              fill
              className="object-contain"
            />
          </div>

          {/* Text + Flags */}
          <div className="relative z-10 flex flex-col items-start">
            <p className="text-lg sm:text-xl md:text-2xl font-medium text-[#072723] mb-2">
              Regional hubs in
            </p>
            <div className="flex items-center gap-4">
              {/* Vietnam */}
              <div className="flex flex-col items-center">
                <Image
                  src="/hp/network/flag-vietnam.svg"
                  alt="Vietnam Flag"
                  width={40}
                  height={40}
                  className="w-10 h-10"
                />
                <span className="text-xs sm:text-sm text-[#072723] mt-1">
                  Vietnam
                </span>
              </div>
              {/* Japan */}
              <div className="flex flex-col items-center">
                <Image
                  src="/hp/network/flag-japan.svg"
                  alt="Japan Flag"
                  width={40}
                  height={40}
                  className="w-10 h-10"
                />
                <span className="text-xs sm:text-sm text-[#072723] mt-1">
                  Japan
                </span>
              </div>
              {/* China */}
              <div className="flex flex-col items-center">
                <Image
                  src="/hp/network/flag-china.svg"
                  alt="China Flag"
                  width={40}
                  height={40}
                  className="w-10 h-10"
                />
                <span className="text-xs sm:text-sm text-[#072723] mt-1">
                  China
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Block 4 */}
        <div className="relative bg-[#D1EFE8] h-40 md:h-60 rounded-xl p-4 flex justify-between items-center border-[#072723] border-2 overflow-hidden">
          {/* Text */}
          <div className="flex flex-col">
            <p className="text-lg sm:text-xl md:text-2xl font-medium text-[#072723]">
              Powered by
            </p>
            <a
              href="https://x.com/ellie_nfts"
              target="_blank"
              rel="noopener noreferrer"
              className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#072723] hover:underline"
            >
              Ellie&apos;s
            </a>
            <p className="text-sm sm:text-base text-[#072723]">
              growing social <br />
              presence
            </p>
          </div>

          {/* Image */}
          <div className="w-20 h-20 md:w-32 md:h-32 rounded-xl overflow-hidden">
            <Image
              src="/hp/network/powered-by-ellies.svg"
              alt="Ellie's Character"
              width={112}
              height={112}
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
