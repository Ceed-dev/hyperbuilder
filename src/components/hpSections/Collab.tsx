"use client";

export default function Collab() {
  return (
    <section
      className="
        w-full px-5 sm:px-32 md:px-52 lg:px-72 xl:px-20 py-12 text-[#072723] rounded-3xl
        bg-[url('/hp/collab/bg-mobile.svg')] bg-cover bg-center
        md:bg-[url('/hp/collab/bg-desktop.svg')]"
    >
      <h2 className="text-center text-3xl sm:text-4xl md:text-5xl font-bold mb-8">
        Collab With Us
      </h2>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-7">
        {/* Step 1 */}
        <div className="h-[196px] xl:h-[300px] pb-6 pl-6 bg-[#D1EFE8] rounded-2xl border-2 border-[#072723] flex flex-col justify-between">
          <span className="text-[75px] xl:text-[96px] font-[600]">#01</span>
          <p className="text-[30px] xl:text-[36px] font-[500] leading-none tracking-tighter">
            DM
            <a
              href="https://t.me/ellie_sol"
              target="_blank"
              rel="noopener noreferrer"
              className="mx-1 hover:underline"
            >
              @ellie_sol
            </a>
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
        <div className="h-[196px] xl:h-[300px] pb-6 pl-6 bg-[#3FF8CB] rounded-2xl border-2 border-[#072723] flex flex-col justify-between">
          <span className="text-[75px] xl:text-[96px] font-[600]">#02</span>
          <p className="text-[30px] xl:text-[36px] font-[500] leading-none tracking-tighter">
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
        <div className="h-[196px] xl:h-[300px] pb-6 pl-6 bg-[#D1EFE8] rounded-2xl border-2 border-[#072723] flex flex-col justify-between">
          <span className="text-[75px] xl:text-[96px] font-[600]">#03</span>
          <p className="text-[30px] xl:text-[36px] font-[500] tracking-tighter">
            Done. You&apos;re all set!
          </p>
        </div>
      </div>
    </section>
  );
}
