"use client";

export default function CollabSection() {
  return (
    <section className="w-full px-5 md:px-20 py-12 text-[#072723]">
      <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-bold mb-8">
        Collab With Us
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Step 1 */}
        <div className="bg-[#D1EFE8] p-6 rounded-xl border-2 border-[#072723] flex flex-col items-center">
          <span className="text-5xl font-bold mb-4">#01</span>
          <p className="text-lg">
            DM{" "}
            <a
              href="https://t.me/ellie_sol"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold underline hover:text-[#072723]"
            >
              @ellie_sol
            </a>{" "}
            &amp;{" "}
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSfkdk9w1k8mHm2dBj3gPvfsmjqJd-Qd1hLC3U_ksSwZa4Q4YQ/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-[#072723]"
            >
              submit this form
            </a>
            !
          </p>
        </div>

        {/* Step 2 */}
        <div className="bg-[#3FF8CB] p-6 rounded-xl border-2 border-[#072723] flex flex-col items-center">
          <span className="text-5xl font-bold mb-4">#02</span>
          <p className="text-lg">
            Join{" "}
            <a
              href="https://discord.com/invite/DP2Ykkwxxf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Hyperbuilder Discord Server
            </a>
          </p>
        </div>

        {/* Step 3 */}
        <div className="bg-[#D1EFE8] p-6 rounded-xl border-2 border-[#072723] flex flex-col items-center">
          <span className="text-5xl font-bold mb-4">#03</span>
          <p className="text-lg">Done. You&apos;re all set!</p>
        </div>
      </div>
    </section>
  );
}
