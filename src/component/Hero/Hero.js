import React from "react";
import { motion } from "framer-motion";
import AnimatedButton from '../../component/Button/AnimatedButton';
import TrustedClients from '../../component/Button/TrustedClients';

import AnimatedButton1 from '../../component/Button/AnimatedButton1';
// Keep your existing imports for:
// TrustedClients
// AnimatedButton
// AnimatedButton1

function Hero() {
  return (
    <section className="  relative w-full
  overflow-hidden
  bg-white">

    <div
    className="
      mx-auto
      grid w-full max-w-[1600px]
      min-h-[calc(100svh-80px)]
      grid-cols-1
      items-center
      gap-6
      px-5 py-8

      sm:px-8

      lg:grid-cols-[1.05fr_0.95fr]
      lg:gap-8
      lg:px-12
      lg:py-6

      xl:px-16
      2xl:px-20
    "
  >

        {/* ================= LEFT CONTENT ================= */}

        <div className="relative z-10 max-w-2xl">

          {/* Badge */}

          <div
            className="
              mb-7 inline-flex items-center gap-2.5
              rounded-full border border-gray-200
              bg-gray-50 px-4 py-2
              text-xs font-semibold
              tracking-wide text-gray-700
            "
          >
            <span className="h-2 w-2 rounded-full bg-[#5428B0]" />

            Creative Motion Studio

            <span className="text-[#F8CC10]">✦</span>
          </div>


          {/* Heading */}

        <h1 className="
  text-4xl
  font-extrabold
  leading-[0.98]
  tracking-[-0.045em]
  text-gray-950

  sm:text-5xl
  md:text-6xl

  lg:text-[clamp(48px,4vw,68px)]
  xl:text-[clamp(54px,4vw,72px)]
">
            We turn ideas into{" "}

            <span className="relative inline-block">

              <span className="relative z-10">
                cinematic stories
              </span>

              <span
                className="
                  absolute bottom-1 left-0 -z-0
                  h-2 w-full rounded-full
                  bg-[#F8CC10]/70
                  sm:h-3
                "
              />

            </span>{" "}

            that move people.
          </h1>


          {/* Description */}

       <p className="
  mt-4 max-w-lg
  text-sm leading-6
  text-gray-500
  sm:text-base sm:leading-7
">
            We help ambitious brands grow through powerful
            video content, creative storytelling, social media
            management and performance-driven marketing.
          </p>


          {/* Client Trust */}

          <div className="mt-8">
            <TrustedClients />
          </div>


          {/* Buttons */}

          <div className="mt-9 flex flex-wrap items-center gap-4">

            <AnimatedButton
              text="Book a discovery call"
              to="/contact"
            />

            <AnimatedButton1
              text="Explore our work"
              to="/portfolio"
            />

          </div>


          {/* Bottom trust indicator */}

          <div
            className="
              mt-10 flex flex-wrap items-center
              gap-x-6 gap-y-3
              border-t border-gray-100
              pt-6 text-sm text-gray-500
            "
          >

            <span className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[#5428B0]" />
              Creative Excellence
            </span>

            <span className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[#F8CC10]" />
              Strategic Storytelling
            </span>

          </div>

        </div>


        {/* ================= RIGHT VISUAL ================= */}


<div className="relative mx-auto w-full max-w-[560px]">

  {/* Main rectangular canvas */}

 <div className="
  relative
  grid grid-cols-2
  gap-3
  rounded-[28px]
  bg-[#F9F8FC]
  p-3
  sm:gap-4 sm:p-4

  lg:grid-cols-6
  lg:grid-rows-[145px_145px_120px]
  lg:gap-3

  overflow-hidden
">

    {/* Background decoration */}

    <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[#F8CC10]/20 blur-3xl" />

    <div className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-purple-200/50 blur-3xl" />


    {/* ================= CARD 1 ================= */}

    <motion.div
      initial={{ opacity: 0, y: 30, rotate: -4 }}
      whileInView={{ opacity: 1, y: 0, rotate: -3 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      whileHover={{ scale: 1.04, rotate: 0, zIndex: 20 }}
      className="
        group relative
        col-span-1 row-span-2
        lg:col-span-3 lg:row-span-2
        md:col-span-3
        overflow-hidden
        rounded-[24px]
        shadow-lg
        min-h-[280px]
        md:min-h-0
      "
    >

      <img
        src="https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?w=900&q=85"
        alt="Video Editing"
        className="
          absolute inset-0
          h-full w-full
          object-cover
          transition-transform duration-700
          group-hover:scale-110
        "
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

      <div className="absolute bottom-5 left-5 text-white">

        <span className="text-xs font-medium text-[#F8CC10]">
          01 / CREATIVE PRODUCTION
        </span>

        <h3 className="mt-2 text-xl font-bold sm:text-2xl">
          Video Editing
        </h3>

        <p className="mt-1 text-xs text-white/70">
          Stories that capture attention.
        </p>

      </div>

      <span className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-white text-black transition-transform group-hover:rotate-45">
        ↗
      </span>

    </motion.div>


    {/* ================= CARD 2 ================= */}

    <motion.div
      initial={{ opacity: 0, y: 30, rotate: 3 }}
      whileInView={{ opacity: 1, y: 0, rotate: 2 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: 0.1 }}
      whileHover={{ scale: 1.04, rotate: 0, zIndex: 20 }}
      className="
        group relative
        col-span-1
        md:col-span-3
        min-h-[180px]
        overflow-hidden
        rounded-[24px]
        shadow-lg
      "
    >

      <img
        src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=900&q=85"
        alt="Social Media Management"
        className="
          absolute inset-0
          h-full w-full
          object-cover
          transition-transform duration-700
          group-hover:scale-110
        "
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />

      <div className="absolute bottom-4 left-4 text-white">

        <span className="text-[10px] font-medium text-[#F8CC10]">
          02 / DIGITAL PRESENCE
        </span>

        <h3 className="mt-1 text-lg font-bold">
          Social Media Management
        </h3>

      </div>

      <span className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-white text-black">
        ↗
      </span>

    </motion.div>


    {/* ================= CARD 3 ================= */}

    <motion.div
      initial={{ opacity: 0, y: 30, rotate: -2 }}
      whileInView={{ opacity: 1, y: 0, rotate: -1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: 0.2 }}
      whileHover={{ scale: 1.04, rotate: 0, zIndex: 20 }}
      className="
        group relative
        col-span-1
        md:col-span-2
        min-h-[170px]
        overflow-hidden
        rounded-[24px]
        shadow-lg
      "
    >

      <img
        src="https://images.unsplash.com/photo-1626785774573-4b799315345d?w=700&q=85"
        alt="Graphic Design"
        className="
          absolute inset-0
          h-full w-full
          object-cover
          transition-transform duration-700
          group-hover:scale-110
        "
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />

      <div className="absolute bottom-4 left-4 text-white">

        <span className="text-[9px] text-[#F8CC10]">
          03 / DESIGN
        </span>

        <h3 className="mt-1 text-base font-bold">
          Graphic Design
        </h3>

      </div>

    </motion.div>


    {/* ================= CARD 4 ================= */}

    <motion.div
      initial={{ opacity: 0, y: 30, rotate: 3 }}
      whileInView={{ opacity: 1, y: 0, rotate: 2 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: 0.3 }}
      whileHover={{ scale: 1.04, rotate: 0, zIndex: 20 }}
      className="
        group relative
        col-span-1
        md:col-span-2
        min-h-[170px]
        overflow-hidden
        rounded-[24px]
        shadow-lg
      "
    >

      <img
        src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=700&q=85"
        alt="Performance Marketing"
        className="
          absolute inset-0
          h-full w-full
          object-cover
          transition-transform duration-700
          group-hover:scale-110
        "
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/85 to-transparent" />

      <div className="absolute bottom-4 left-4 text-white">

        <span className="text-[9px] text-[#F8CC10]">
          04 / GROWTH
        </span>

        <h3 className="mt-1 text-base font-bold">
          Performance Marketing
        </h3>

      </div>

    </motion.div>


    {/* ================= CARD 5 ================= */}

    <motion.div
      initial={{ opacity: 0, y: 30, rotate: -3 }}
      whileInView={{ opacity: 1, y: 0, rotate: -2 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: 0.4 }}
      whileHover={{ scale: 1.04, rotate: 0, zIndex: 20 }}
      className="
        group relative
        col-span-2
        md:col-span-2
        min-h-[150px]
        overflow-hidden
        rounded-[24px]
        shadow-lg
      "
    >

      <img
        src="https://images.unsplash.com/photo-1535223289827-42f1e9919769?w=700&q=85"
        alt="Meta Ads"
        className="
          absolute inset-0
          h-full w-full
          object-cover
          transition-transform duration-700
          group-hover:scale-110
        "
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/85 to-transparent" />

      <div className="absolute bottom-4 left-4 text-white">

        <span className="text-[9px] text-[#F8CC10]">
          05 / ADVERTISING
        </span>

        <h3 className="mt-1 text-lg font-bold">
          Meta Ads
        </h3>

      </div>

      <span className="absolute right-3 top-3 rounded-full bg-[#F8CC10] px-3 py-1 text-[10px] font-bold text-black">
        GROW YOUR BRAND
      </span>

    </motion.div>

  </div>


  {/* Bottom floating brand label */}

  <div className="mt-5 flex items-center justify-between px-2">

    <div>
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-400">
        What we do
      </p>

      <h3 className="mt-1 text-lg font-bold text-gray-900">
        Ideas into impact.
      </h3>
    </div>

    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#5428B0] text-xl text-white shadow-lg">
      ↗
    </div>

  </div>

</div>

      </div>

    </section>
  );
}

export default Hero;