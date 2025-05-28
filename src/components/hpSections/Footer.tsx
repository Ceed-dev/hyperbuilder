"use client";

import Image from "next/image";

export default function Footer() {
  return (
    <footer
      className="
        w-full px-5 md:px-20 py-5 md:pt-14 text-[#072723] rounded-3xl
        bg-[url('/hp/footer/bg-mobile.svg')] bg-cover bg-center
        md:bg-[url('/hp/footer/bg-desktop.svg')]"
    >
      <div className="flex flex-col md:flex-row justify-between items-start mb-14">
        <div className="mb-7 md:mb-0 md:ml-6">
          <p className="text-[20px] mb-2">Stay connected for more</p>
          <div className="flex space-x-2">
            <a
              href="https://x.com/hyperbuilder_hl"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#D1EFE8] border border-black rounded-md p-2 transition transform hover:-translate-y-1 hover:shadow-lg duration-300"
            >
              <Image src="/icons/x-dark.svg" alt="X" width={24} height={24} />
            </a>
            <a
              href="https://discord.gg/Ta9qBAgTW2"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#D1EFE8] border border-black rounded-md p-2 transition transform hover:-translate-y-1 hover:shadow-lg duration-300"
            >
              <Image
                src="/icons/discord-dark.svg"
                alt="Discord"
                width={24}
                height={24}
              />
            </a>
          </div>
        </div>

        <p className="text-[12px] md:text-[20px] max-w-md xl:max-w-lg leading-tight">
          A powerhouse of builders and creators fueling the next wave of
          innovation on Hyperliquid
        </p>
      </div>

      <div className="w-full">
        <Image
          src="/hp/footer/footer-hyperbuilder.svg"
          alt="Hyperbuilder"
          width={1000}
          height={200}
          className="w-full h-auto object-contain"
        />
      </div>
    </footer>
  );
}
