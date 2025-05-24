"use client";

import Image from "next/image";

type PartnerBlockProps = {
  href: string;
  imgSrc: string;
  alt: string;
};

function PartnerBlock({ href, imgSrc, alt }: PartnerBlockProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="transition transform hover:-translate-y-1 hover:shadow-lg duration-300"
    >
      <div className="bg-[#072723] h-20 px-4 rounded-xl flex items-center justify-center">
        <div className="relative w-full h-[50%]">
          <Image src={imgSrc} alt={alt} fill className="object-contain" />
        </div>
      </div>
    </a>
  );
}

export default function PartnersSection() {
  return (
    <section
      className="
        w-full px-5 md:px-20 py-12
        bg-[url('/section-partners/bg-mobile.svg')] bg-cover bg-center
        md:bg-[url('/section-partners/bg-desktop.svg')]"
    >
      <h2 className="text-[#072723] text-center text-2xl sm:text-3xl md:text-4xl font-bold mb-8">
        Partners
      </h2>

      {/* Grid for first 8 blocks */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <PartnerBlock
          href="https://x.com/HyperSwapX"
          imgSrc="/section-partners/hyperswap.svg"
          alt="HyperSwap"
        />
        <PartnerBlock
          href="https://x.com/okto_web3"
          imgSrc="/section-partners/okto.svg"
          alt="okto"
        />
        <PartnerBlock
          href="https://x.com/hl_fund"
          imgSrc="/section-partners/hlfund.svg"
          alt="hl.fund"
        />
        <PartnerBlock
          href="https://x.com/CatCabal_hl"
          imgSrc="/section-partners/catbal.svg"
          alt="Catbal"
        />
        <PartnerBlock
          href="https://x.com/neko_hl"
          imgSrc="/section-partners/neko.svg"
          alt="Neko"
        />
        <PartnerBlock
          href="https://x.com/HanaNetwork"
          imgSrc="/section-partners/hana.svg"
          alt="hana"
        />
        <PartnerBlock
          href="https://x.com/liquidlaunchhl"
          imgSrc="/section-partners/liquidlaunch.svg"
          alt="LiquidLaunch"
        />
        <PartnerBlock
          href="https://x.com/pp_trading"
          imgSrc="/section-partners/pocketpro.svg"
          alt="POCKETPRO"
        />
      </div>

      {/* Last row centered */}
      <div className="mt-4 flex justify-center gap-4">
        <div className="w-full sm:w-[calc(50%-0.5rem)] md:w-[calc(25%-0.75rem)]">
          <PartnerBlock
            href="https://x.com/Looped_HYPE"
            imgSrc="/section-partners/loopedhype.svg"
            alt="loopedHYPE"
          />
        </div>
        <div className="w-full sm:w-[calc(50%-0.5rem)] md:w-[calc(25%-0.75rem)]">
          <PartnerBlock
            href="https://x.com/hyperlauncherAI"
            imgSrc="/section-partners/hyperlauncher.svg"
            alt="Hyperlauncher"
          />
        </div>
      </div>
    </section>
  );
}
