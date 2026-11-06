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
    <section className="relative w-full overflow-hidden bg-white py-12">

      {/* Background Wave */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <svg
          className="absolute left-1/2 top-14 h-40 w-[1500px] -translate-x-1/2 opacity-50"
          viewBox="0 0 1500 160"
          fill="none"
        >
          <path
            d="M0 110
              C120 20 230 25 350 95
              C470 165 570 165 690 95
              C810 25 900 20 1020 90
              C1140 160 1270 160 1500 50"
            stroke="#eeeeee"
            strokeWidth="1"
          />

          <path
            d="M0 125
              C130 35 240 40 360 105
              C480 170 580 170 700 105
              C820 40 920 30 1040 100
              C1160 170 1290 170 1500 65"
            stroke="#f1f1f1"
            strokeWidth="1"
          />

          <path
            d="M0 95
              C130 5 240 10 360 80
              C480 150 580 150 700 85
              C820 20 920 10 1040 75
              C1160 140 1300 145 1500 35"
            stroke="#f5f5f5"
            strokeWidth="1"
          />
        </svg>
      </div>

      {/* Header Divider */}
      <div className="relative z-10 flex items-center">

        <div className="h-px flex-1 bg-[#d8d8d8]" />

        <div
          className="
            rounded-full
            bg-[#f7f7f9]
            px-7
            py-2
            text-sm
            font-medium
            text-[#171717]
            shadow-sm
          "
        >
          Trusted Partners
        </div>

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