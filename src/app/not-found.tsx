import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "404 - Hyperbuilder",
  robots: "all",
};

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center text-center">
      <div>
        <h1 className="inline-block text-2xl font-medium pr-6 mr-6 border-r border-black/30 leading-[49px] align-top">
          404
        </h1>
        <div className="inline-block">
          <h2 className="text-sm font-normal leading-[49px] m-0">
            This page could not be found.
          </h2>
        </div>
      </div>
    </div>
  );
}
