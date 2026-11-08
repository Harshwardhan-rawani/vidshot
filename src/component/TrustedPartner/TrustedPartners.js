import React from "react";
import Marquee from "react-fast-marquee";

const brands = [
  {
    name: "Deepak Pandey",
    className: "font-semibold tracking-wide",
  },
  {
    name: "Mohit Beriwala",
    className: "font-bold tracking-tight",
  },
  {
    name: "Deven U Pandey",
    className: "font-serif tracking-wide",
  },
  {
    name: "Nidhi Aneja",
    className: "font-medium tracking-wide",
  },
  {
    name: "Dhiren Bontra",
    className: "font-bold tracking-tight",
  },
  {
    name: "SS Alam",
    className: "font-semibold tracking-wide",
  },
];

export default function TrustedPartners() {
  return (
    <section className="relative my-3 w-full overflow-hidden bg-[#5428B0] py-5 sm:py-10">

      {/* Background glow */}
      <div className="pointer-events-none absolute -left-20 top-0 h-40 w-40 rounded-full bg-[#F8CC10]/10 blur-[80px]" />
      <div className="pointer-events-none absolute -right-20 bottom-0 h-40 w-40 rounded-full bg-purple-300/20 blur-[80px]" />

      {/* Top Divider */}
      <div className="relative z-10 flex items-center gap-4 px-5 sm:px-10">

        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/30 to-white/50" />

        <span className="whitespace-nowrap text-[9px] font-bold uppercase tracking-[0.25em] text-[#F8CC10] sm:text-[10px]">
          Trusted Partners
        </span>

        <div className="h-px flex-1 bg-gradient-to-l from-transparent via-white/30 to-white/50" />

      </div>

      {/* Marquee */}
      <div className="relative z-10 mt-7">

        {/* Left Gradient */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-20 w-12 bg-gradient-to-r from-[#5428B0] to-transparent sm:w-24 lg:w-36" />

        {/* Right Gradient */}
        <div className="pointer-events-none absolute inset-y-0 right-0 z-20 w-12 bg-gradient-to-l from-[#5428B0] to-transparent sm:w-24 lg:w-36" />

        <Marquee
          direction="right"
          speed={40}
          delay={0}
          pauseOnHover={true}
          gradient={false}
          loop={0}
          autoFill={true}
        >
          {brands.map((brand, index) => (
            <React.Fragment key={brand.name}>

              {/* Partner Name */}
              <div className="group flex items-center px-6 sm:px-10 lg:px-12">

                <span
                  className={`
                    whitespace-nowrap
                    text-lg
                    leading-none
                    text-white/90
                    transition-all
                    duration-300
                    group-hover:text-[#F8CC10]
                    sm:text-xl
                    md:text-2xl
                    ${brand.className}
                  `}
                >
                  {brand.name}
                </span>

              </div>

              {/* Yellow Separator */}
              <div className="flex items-center justify-center">
                <span className="h-2 w-2 rounded-full bg-[#F8CC10] shadow-[0_0_12px_rgba(248,204,16,0.5)]" />
              </div>

            </React.Fragment>
          ))}
        </Marquee>

      </div>

      {/* Bottom Divider */}
      <div className="relative z-10 mt-7 px-5 sm:px-10">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      </div>

    </section>
  );
}