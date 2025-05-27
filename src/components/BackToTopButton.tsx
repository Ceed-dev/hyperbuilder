"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function BackToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight;
      const scrollPosition = window.innerHeight + window.scrollY;
      if (scrollPosition >= scrollHeight * 0.98) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="
            fixed bottom-4 right-4 md:bottom-6 md:right-6 shadow-xl rounded-full
            hover:scale-110 transition transform duration-300 z-50"
        >
          {/* Mobile Image */}
          <Image
            src="/icons/back-to-top-mobile.svg"
            alt="Back to Top Mobile"
            width={48}
            height={48}
            className="block md:hidden"
          />
          {/* Desktop Image */}
          <Image
            src="/icons/back-to-top-desktop.svg"
            alt="Back to Top Desktop"
            width={60}
            height={60}
            className="hidden md:block"
          />
        </button>
      )}
    </>
  );
}
