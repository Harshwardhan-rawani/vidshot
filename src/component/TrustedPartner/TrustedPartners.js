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
    <section className="relative w-full overflow-hidden bg-white my-3">


      {/* Header Divider */}
      <div className="relative z-10 flex items-center">

        <div className="h-px flex-1 bg-[var(--primary)]" />


        <div className="h-px flex-1 bg-[#d8d8d8]" />

      </div>

      {/* Marquee */}
      <div className="relative z-10 mt-5 ">

        <Marquee
        className="overflow-hidden"
          direction="right"
          speed={45}
          delay={0}
          pauseOnHover={false}
          gradient={true}
          gradientColor="#ffffff"
          gradientWidth={120}
          loop={0}
        >

          {brands.map((brand, index) => (
            <React.Fragment key={brand.name}>

              {/* Brand */}
              <div className="flex items-center px-8 md:px-10">

                <span
                  className={`
                    whitespace-nowrap
                    text-[18px]
                    leading-none
                    text-[#111111]
                    md:text-[25px]
                    ${brand.className}
                  `}
                >
                  {brand.name}
                </span>

              </div>

              {/* Separator */}
              {index !== brands.length - 1 && (
                <span
                  className="
                    h-1.5
                    w-1.5
                    shrink-0
                    rounded-full
                    bg-[#555]
                  "
                />
              )}

            </React.Fragment>
          ))}

        </Marquee>

      </div>

    </section>
  );
}