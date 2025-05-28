"use client";

import Image from "next/image";

export default function NetworkWithImages() {
  return (
    <section
      className="
        w-full px-5 md:px-20 py-12 rounded-3xl
        bg-[url('/hp/network/bg-mobile.svg')] bg-cover bg-center
        md:bg-[url('/hp/network/bg-desktop.svg')]"
    >
      {/* Section Title */}
      <div className="mb-8 text-[#072723] text-3xl sm:text-4xl md:text-5xl">
        <h2 className="font-bold">Our Network</h2>
        <p className="italic">So Far</p>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-2 gap-4">
        {/* Card 1 */}
        <div className="order-1">
          {/* Mobile Image */}
          <Image
            src="/hp/network/cards/1-mobile.svg"
            alt="Onboarding Background Shape"
            width={100}
            height={100}
            className="w-full h-full object-contain block md:hidden"
          />
          {/* Desktop Image */}
          <Image
            src="/hp/network/cards/1-desktop.svg"
            alt="Onboarding Background Shape"
            width={100}
            height={100}
            className="w-full h-full object-contain hidden md:block"
          />
        </div>

        {/* Card 2 */}
        <div className="order-2">
          {/* Mobile Image */}
          <Image
            src="/hp/network/cards/2-mobile.svg"
            alt="Network Background Shape"
            width={100}
            height={100}
            className="w-full h-full object-contain block md:hidden"
          />
          {/* Desktop Image */}
          <Image
            src="/hp/network/cards/2-desktop.svg"
            alt="Network Background Shape"
            width={100}
            height={100}
            className="w-full h-full object-contain hidden md:block"
          />
        </div>

        {/* Card 3 */}
        <div className="order-3 md:order-4">
          <a
            href="https://x.com/ellie_nfts"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full h-full transform transition-transform duration-300 hover:-translate-y-1"
          >
            {/* Mobile Image */}
            <Image
              src="/hp/network/cards/3-mobile.svg"
              alt="Ellie's Character"
              width={100}
              height={100}
              className="w-full h-full object-contain block md:hidden"
            />
            {/* Desktop Image */}
            <Image
              src="/hp/network/cards/3-desktop.svg"
              alt="Ellie's Character"
              width={100}
              height={100}
              className="w-full h-full object-contain hidden md:block"
            />
          </a>
        </div>

        {/* Card 4 */}
        <div className="order-4 md:order-3 relative">
          {/* Background Image (mobile) */}
          <Image
            src="/hp/network/cards/4-mobile.svg"
            alt="Globe Background"
            width={100}
            height={100}
            className="w-full h-full object-contain block md:hidden"
          />
          {/* Background Image (desktop) */}
          <Image
            src="/hp/network/cards/4-desktop.svg"
            alt="Globe Background"
            width={100}
            height={100}
            className="w-full h-full object-contain hidden md:block"
          />

          {/* Overlay: Country Flags with Links */}
          <div className="absolute left-[5%] bottom-[7%] xl:bottom-[10%] 3xl:bottom-[15%] flex gap-3 xl:gap-8 3xl:gap-10">
            {/* Vietnam */}
            <a
              href="https://t.me/HyperliquidViet_Nam"
              target="_blank"
              rel="noopener noreferrer"
              className="transition transform hover:-translate-y-1"
            >
              <Image
                src="/hp/network/flag-vietnam.svg"
                alt="Vietnam Flag"
                width={50}
                height={50}
                className="w-[66px] h-[66px] md:w-[45px] md:h-[45px] xl:w-[80px] xl:h-[80px] 2xl:w-[100px] 2xl:h-[100px] object-contain"
              />
              <p className="text-black text-[12px] xl:text-[14px] font-[500] text-center xl:mt-2">
                Vietnam
              </p>
            </a>

            {/* Japan */}
            <a
              href="https://t.me/hyperliquid_jp_group"
              target="_blank"
              rel="noopener noreferrer"
              className="transition transform hover:-translate-y-1"
            >
              <Image
                src="/hp/network/flag-japan.svg"
                alt="Japan Flag"
                width={50}
                height={50}
                className="w-[66px] h-[66px] md:w-[45px] md:h-[45px] xl:w-[80px] xl:h-[80px] 2xl:w-[100px] 2xl:h-[100px] object-contain"
              />
              <p className="text-black text-[12px] xl:text-[14px] font-[500] text-center xl:mt-2">
                Japan
              </p>
            </a>

            {/* China */}
            <a
              href="https://t.me/hyperliquid_china_group"
              target="_blank"
              rel="noopener noreferrer"
              className="transition transform hover:-translate-y-1"
            >
              <Image
                src="/hp/network/flag-china.svg"
                alt="China Flag"
                width={50}
                height={50}
                className="w-[66px] h-[66px] md:w-[45px] md:h-[45px] xl:w-[80px] xl:h-[80px] 2xl:w-[100px] 2xl:h-[100px] object-contain"
              />
              <p className="text-black text-[12px] xl:text-[14px] font-[500] text-center xl:mt-2">
                China
              </p>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
