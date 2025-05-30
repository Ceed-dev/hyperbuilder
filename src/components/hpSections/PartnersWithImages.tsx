"use client";

import Image from "next/image";

type PartnerBlockProps = {
  href: string;
  imgSrc: string;
  alt: string;
  wrapperClass?: string;
};

function PartnerBlock({ href, imgSrc, alt, wrapperClass }: PartnerBlockProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`transition transform hover:-translate-y-1 hover:shadow-xl duration-300 rounded-2xl ${wrapperClass}`}
    >
      <Image
        src={imgSrc}
        alt={alt}
        width={100}
        height={100}
        className="w-full h-full object-contain"
      />
    </a>
  );
}

export default function PartnersWithImages() {
  return (
    <section
      className="
        w-full px-5 md:px-20 py-12 rounded-3xl
        bg-[url('/hp/partners/bg-mobile.svg')] bg-cover bg-center
        md:bg-[url('/hp/partners/bg-desktop.svg')]"
    >
      <h2 className="text-[#072723] text-center text-3xl sm:text-4xl md:text-5xl font-bold mb-8">
        Partners
      </h2>

      {/* Grid for first 8 blocks */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <PartnerBlock
          href="https://x.com/HyperSwapX"
          imgSrc="/hp/partners/cards/hyperswap.svg"
          alt="HyperSwap"
        />
        <PartnerBlock
          href="https://x.com/okto_web3"
          imgSrc="/hp/partners/cards/okto.svg"
          alt="okto"
        />
        <PartnerBlock
          href="https://x.com/hl_fund"
          imgSrc="/hp/partners/cards/hlfund.svg"
          alt="hl.fund"
        />
        <PartnerBlock
          href="https://x.com/CatCabal_hl"
          imgSrc="/hp/partners/cards/catbal.svg"
          alt="Catbal"
        />
        <PartnerBlock
          href="https://x.com/neko_hl"
          imgSrc="/hp/partners/cards/neko.svg"
          alt="Neko"
        />
        <PartnerBlock
          href="https://x.com/HanaNetwork"
          imgSrc="/hp/partners/cards/hana.svg"
          alt="hana"
        />
        <PartnerBlock
          href="https://x.com/liquidlaunchhl"
          imgSrc="/hp/partners/cards/liquidlaunch.svg"
          alt="LiquidLaunch"
        />
        <PartnerBlock
          href="https://x.com/pp_trading"
          imgSrc="/hp/partners/cards/pocketpro.svg"
          alt="POCKETPRO"
        />
      </div>

      {/* Last row centered */}
      <div className="mt-4 flex justify-center gap-4">
        <PartnerBlock
          href="https://x.com/Looped_HYPE"
          imgSrc="/hp/partners/cards/loopedhype.svg"
          alt="loopedHYPE"
          wrapperClass="w-full sm:w-[calc(50%-0.5rem)] md:w-[calc(25%-0.75rem)]"
        />
        <PartnerBlock
          href="https://x.com/hyperlauncherAI"
          imgSrc="/hp/partners/cards/hyperlauncher.svg"
          alt="Hyperlauncher"
          wrapperClass="w-full sm:w-[calc(50%-0.5rem)] md:w-[calc(25%-0.75rem)]"
        />
      </div>
    </section>
  );
}
