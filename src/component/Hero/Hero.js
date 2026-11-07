import React from "react";
import { motion, AnimatePresence } from "framer-motion";

import { useEffect, useState } from "react";
import AnimatedButton from '../../component/Button/AnimatedButton';
import TrustedClients from '../../component/Button/TrustedClients';

import AnimatedButton1 from '../../component/Button/AnimatedButton1';

import videoediting from "../../Images/Services/Video_editing.jpeg"
import social_media from "../../Images/Services/social media.png"
import metaads from "../../Images/Services/metaads.png"



const services = [
  {
    id: 1,
    title: "Video Editing",
    category: "CREATIVE PRODUCTION",
    description: "Stories that capture attention.",
    image:
      videoediting,
    size: "large",
    rotate: -2,
    badge: null,
  },
  {
    id: 2,
    title: "Social Media Management",
    category: "DIGITAL PRESENCE",
    description: "Build a powerful digital identity.",
    image:
      social_media,
    size: "medium",
    rotate: 2,
  },
  {
    id: 3,
    title: "Graphic Design",
    category: "DESIGN",
    description: "Creative visuals that stand out.",
    image:
      "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=900&q=85",
    size: "medium",
    rotate: -1,
  },
 {
  id: 4,
  title: "Content Writing",
  category: "CREATIVE",
  description: "Craft compelling content that tells your brand story and connects with your audience.",
  image:
    "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=900&q=85",
  size: "small",
  rotate: 2,
},
  {
    id: 5,
    title: "Meta Ads",
    category: "ADVERTISING",
    description: "Reach the right audience and grow faster.",
    image:
      metaads,
    size: "small",
    rotate: -2,
    badge: "GROW YOUR BRAND",
  },
];

// Reusable service card
const ServiceCard = ({ service, index }) => {
  const isLarge = service.size === "large";

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 35,
        rotate: service.rotate || 0,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        rotate: 0,
      }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.65,
        delay: index * 0.1,
        ease: "easeOut",
      }}
      whileHover={{
        scale: 1.035,
        rotate: 0,
        zIndex: 20,
      }}
      className={`
        group relative isolate
        overflow-hidden
        rounded-[20px]
        shadow-md
        cursor-pointer
        min-h-[145px]
        lg:min-h-0
        ${isLarge
          ? "col-span-1 row-span-2 min-h-[240px] lg:col-span-3 lg:row-span-2"
          : "col-span-1 lg:col-span-3"
        }
      `}
    >
      {/* Background image */}
      <img
        src={service.image}
        alt={service.title}
        loading="lazy"
        className="
          absolute inset-0
          h-full w-full
          object-cover
          transition-transform duration-700
          group-hover:scale-110
        "
      />

      {/* Dark overlay */}
      <div
        className="
          absolute inset-0
          bg-gradient-to-t
          from-black/90
          via-black/20
          to-black/5
          transition-opacity duration-500
          group-hover:from-black/95
        "
      />

     

      {/* Service information */}
      <div
        className={`
          absolute bottom-0 left-0 right-0
          p-3 sm:p-4
          text-white
          ${isLarge ? "sm:p-5" : ""}
        `}
      >
        <span className="text-[9px] font-semibold tracking-wider text-[#F8CC10]">
          {String(service.id).padStart(2, "0")} / {service.category}
        </span>

        <h3
          className={`
            mt-1 font-bold
            ${isLarge ? "text-lg sm:text-2xl" : "text-base sm:text-md"}
          `}
        >
          {service.title}
        </h3>

   
      </div>

      {/* Optional badge */}
      {service.badge && (
        <span
          className="
            absolute right-3 top-3
            rounded-full
            bg-[#F8CC10]
            px-2.5 py-1
            text-[9px]
            font-bold
            text-black
          "
        >
          {service.badge}
        </span>
      )}

      {/* Hover arrow */}
      <motion.div
        className="
          absolute right-4 bottom-4
          flex h-8 w-8
          items-center justify-center
          rounded-full
          bg-white/20
          text-white
          backdrop-blur-md
          opacity-0
          group-hover:opacity-100
          transition-opacity duration-300
        "
        whileHover={{ scale: 1.15 }}
      >
        ↗
      </motion.div>
    </motion.div>
  );
};

// Main dynamic collage
const ServiceCollage = ({
  items = services,
  className = "",
  showBackground = true,
}) => {
  return (
    <div className={`relative mx-auto w-full max-w-[560px] ${className}`}>

      <div
        className="
          relative grid
          grid-cols-2
          gap-3
          rounded-[28px]
          p-3
          sm:gap-4 sm:p-4
          lg:grid-cols-6
          lg:grid-rows-[135px_135px_135px]
          lg:gap-3
          overflow-hidden
        "
      >

        {/* Background decorations */}
        {showBackground && (
          <>
            <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[#5428B0]/20 blur-3xl" />

            <div className="pointer-events-none absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-[#F8CC10]/15 blur-3xl" />
          </>
        )}

        {/* Dynamic cards */}
        {items.map((service, index) => (
          <ServiceCard
            key={service.id}
            service={service}
            index={index}
          />
        ))}

      </div>
    </div>
  );
};



const words = ["Impact", "Influence", "Growth"];

function LeftContent() {
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % words.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative z-10 max-w-2xl">
        {/* Background */}

        <div className="pointer-events-none absolute inset-0">

          <div
            className="
              absolute
              -right-40
              -top-40
              h-[600px]
              w-[600px]
              rounded-full
              bg-[#5428B0]/[0.06]
              blur-[120px]
            "
          />

          <div
            className="
              absolute
              -bottom-40
              -left-40
              h-[500px]
              w-[500px]
              rounded-full
              bg-[#F8CC10]/[0.08]
              blur-[120px]
            "
          />

          {/* Grid */}

          <div
            className="
              absolute
              inset-0
              opacity-[0.025]
              [background-image:linear-gradient(#5428B0_1px,transparent_1px),linear-gradient(90deg,#5428B0_1px,transparent_1px)]
              [background-size:70px_70px]
            "
          />

        </div>
      {/* Badge */}
      <div className="mb-5 inline-flex items-center gap-2.5 rounded-full border border-gray-200 bg-gray-50 px-4 py-2 text-xs font-semibold tracking-wide text-gray-700">
        <span className="h-2 w-2 rounded-full bg-[#5428B0]" />
        Creative Motion Studio
        <span className="text-[#F8CC10]">✦</span>
      </div>

      {/* Heading */}
      <h1 className="
        text-4xl font-extrabold leading-[1.05]
        tracking-[-0.045em] text-gray-950
        sm:text-5xl md:text-7xl
        lg:text-[clamp(48px,4vw,68px)]
        xl:text-[clamp(54px,4vw,72px)]
      ">
        Building Brands.
        <br />

        <span className="inline-flex flex-wrap items-center gap-x-3">
          Creating

          <span className="relative inline-block min-w-[190px] sm:min-w-[250px]">

            <AnimatePresence mode="wait">
              <motion.span
                key={words[wordIndex]}
                initial={{ opacity: 0, y: 25, filter: "blur(8px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -25, filter: "blur(8px)" }}
                transition={{ duration: 0.45, ease: "easeInOut" }}
                className="relative z-10 inline-block text-[#5428B0]"
              >
                {words[wordIndex]}.
              </motion.span>
            </AnimatePresence>

            {/* Yellow underline */}
            <span className="absolute bottom-0 left-0 -z-0 h-2 w-full rounded-full bg-[#F8CC10]/70 sm:h-3" />

          </span>
        </span>
      </h1>

      {/* Two-line Description */}
      <p className="
        mt-6 max-w-lg
        text-sm leading-7 text-gray-500
        sm:text-base sm:leading-8
      ">
     From compelling content to high-impact campaigns, we turn creative idea into powerful brand experiences. Driven by strategy, backed by creativity, and focused on results.
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
      <div className="
        mt-10 flex flex-wrap items-center gap-x-6 gap-y-3
        border-t border-gray-100 pt-6
        text-sm text-gray-500
      ">
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
  );
}


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

     <LeftContent/>


        {/* ================= RIGHT VISUAL ================= */}

<div className="relative flex items-center justify-center">
  <ServiceCollage />
</div>

      </div>

    </section>
  );
}

export default Hero;