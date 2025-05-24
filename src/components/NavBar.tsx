import Link from "next/link";
import Image from "next/image";

export default function NavBar() {
  return (
    <header className="fixed top-5 left-0 w-full z-50 flex justify-center pointer-events-none font-bold">
      <div className="w-[95%] max-w-[1440px] bg-white/75 backdrop-blur-lg rounded-full px-6 py-3 flex items-center border border-[#e5e5e5] pointer-events-auto">
        {/* Left: Logo */}
        <div className="flex-1 flex items-center">
          <Image
            src="/logo-hyperbuilder.svg"
            alt="Hyperbuilder Logo"
            width={192}
            height={32}
            priority
          />
        </div>

        {/* Center: Navigation Links */}
        <div className="flex-1 hidden sm:flex justify-center gap-12 text-black">
          <Link href="#" className="hover:text-gray-500">
            About Us
          </Link>
          <Link href="#" className="hover:text-gray-500">
            Resources
          </Link>
          <Link
            href="https://hyperbuilder.web.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-500"
          >
            Hyperbuilder Network
          </Link>
        </div>

        {/* Right: CTA Button */}
        <div className="flex-1 flex justify-end">
          <a
            href="https://t.me/ellie_sol"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#3FF8CB] text-black rounded-full px-4 py-2 hover:bg-[#2BC2A1]"
          >
            Collab with us
          </a>
        </div>
      </div>
    </header>
  );
}
