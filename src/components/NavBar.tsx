"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className="fixed top-5 left-0 w-full z-50 flex justify-center pointer-events-none font-bold px-3 md:px-0">
      <div
        className={`w-[95%] max-w-[1440px] bg-white/95 px-6 py-1 md:py-3 flex items-center pointer-events-auto relative
                    ${isMenuOpen ? "rounded-t-3xl" : "rounded-full"}
                  `}
      >
        {/* Left: Logo */}
        <div className="flex-1 flex items-center">
          <Image
            src="/logo-hyperbuilder.svg"
            alt="Hyperbuilder Logo"
            width={192}
            height={32}
            priority
            className="w-auto max-w-[60%] md:max-w-[192px]"
          />
        </div>

        {/* Center: Navigation Links (Desktop) */}
        <div className="flex-2 hidden md:flex justify-center gap-5 lg:gap-12 text-black px-5">
          <Link href="#" className="hover:text-gray-500">
            About Us
          </Link>
          <Link href="#" className="hover:text-gray-500">
            Resources
          </Link>
          <Link
            href="https://network.hyperbuilder.co"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-500"
          >
            Hyperbuilder Network
          </Link>
        </div>

        {/* Right: CTA Button (Desktop) */}
        <div className="flex-1 hidden md:flex justify-end">
          <a
            href="https://t.me/ellie_nfts"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#3FF8CB] text-black rounded-full px-4 py-2 hover:bg-[#2BC2A1]"
          >
            Collab with us
          </a>
        </div>

        {/* Right: Mobile Menu Button */}
        <div className="flex md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 focus:outline-none"
          >
            <Image
              src={isMenuOpen ? "/icons/close.svg" : "/icons/menu.svg"}
              alt="Menu"
              width={32}
              height={32}
            />
          </button>
        </div>

        {/* Mobile Menu Overlay (absolute box below navbar) */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-white/95 text-black rounded-b-3xl shadow-lg p-6 flex flex-col gap-4">
            <Link
              href="#"
              onClick={() => setIsMenuOpen(false)}
              className="text-lg hover:text-gray-500"
            >
              About Us
            </Link>
            <Link
              href="#"
              onClick={() => setIsMenuOpen(false)}
              className="text-lg hover:text-gray-500"
            >
              Resources
            </Link>
            <Link
              href="https://network.hyperbuilder.co"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMenuOpen(false)}
              className="text-lg hover:text-gray-500"
            >
              Hyperbuilder Network
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
