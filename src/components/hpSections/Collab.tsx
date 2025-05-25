"use client";

export default function Collab() {
  return (
    <section
      className="
        w-full px-5 md:px-20 py-12 text-[#072723] rounded-3xl font-bold
        bg-[url('/hp/collab/bg-mobile.svg')] bg-cover bg-center
        md:bg-[url('/hp/collab/bg-desktop.svg')]"
    >
      <h2 className="text-center text-3xl sm:text-4xl md:text-5xl mb-8">
        Collab With Us
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Step 1 */}
        <div className="bg-[#D1EFE8] p-6 rounded-xl border-2 border-[#072723] flex flex-col">
          <span className="text-5xl md:text-6xl mb-4 md:mb-14">#01</span>
          <p className="text-2xl md:text-3xl">
            DM{" "}
            <a
              href="https://t.me/ellie_sol"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              @ellie_sol
            </a>{" "}
            &amp; <br />
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSfkdk9w1k8mHm2dBj3gPvfsmjqJd-Qd1hLC3U_ksSwZa4Q4YQ/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              submit this form
            </a>
            !
          </p>
        </div>

        {/* Step 2 */}
        <div className="bg-[#3FF8CB] p-6 rounded-xl border-2 border-[#072723] flex flex-col">
          <span className="text-5xl md:text-6xl mb-4 md:mb-14">#02</span>
          <p className="text-2xl md:text-3xl">
            Join{" "}
            <a
              href="https://discord.com/invite/DP2Ykkwxxf"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              Hyperbuilder
              <br /> Discord Server
            </a>
          </p>
        </div>

        {/* Step 3 */}
        <div className="bg-[#D1EFE8] p-6 rounded-xl border-2 border-[#072723] flex flex-col">
          <span className="text-5xl md:text-6xl mb-4 md:mb-auto">#03</span>
          <p className="text-2xl md:text-3xl">Done. You&apos;re all set!</p>
        </div>
      </div>
    </section>
  );
}
