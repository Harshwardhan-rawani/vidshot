import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import AnimatedButton from "../../component/Button/AnimatedButton";
import AnimatedButton1 from "../../component/Button/AnimatedButton1";
import { Star } from "lucide-react";
import deepak from "../../Images/client/deepak pandey.jpeg"
import mohit from "../../Images/client/mohit Beriwala.jpeg"
import deven from "../../Images/client/deven u pandey.jpeg"
import nidhi from "../../Images/client/nidhi aneja.png"
import dhiren from "../../Images/client/dhiren bontra.jpeg" 

// ========================================
// GRID CONFIGURATION
// ========================================

const gridSpans = [
  // Card 1 - Large
  "col-span-1 row-span-2 lg:col-span-3 lg:row-span-2",

  // Card 2
  "col-span-1 row-span-1 lg:col-span-3 lg:row-span-1",

  // Card 3
  "col-span-1 row-span-1 lg:col-span-3 lg:row-span-1",

  // Card 4
  "col-span-1 row-span-1 lg:col-span-3 lg:row-span-1",

  // Card 5
  "col-span-1 row-span-1 lg:col-span-3 lg:row-span-1",
];


// ========================================
// SERVICE CARD
// ========================================

const ServiceCard = ({ service, index, gridSpan }) => {

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
        ${gridSpan}
      `}
    >

      {/* Background Image */}

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


      {/* Dark Overlay */}

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


      {/* Service Information */}

      <div
        className="
          absolute bottom-0 left-0 right-0
          p-3 sm:p-4
          text-white
        "
      >

        <span className="
          text-[9px]
          font-semibold
          tracking-wider
          text-[#F8CC10]
        ">
          {String(service.id).padStart(2, "0")}
          {service.category ? ` / ${service.category}` : ""}
        </span>


        <h3 className="
          mt-1
          font-bold
          text-base
          sm:text-xl
        ">
          {service.title}
        </h3>

      </div>


      {/* Optional Badge */}

      {service.badge && (

        <span className="
          absolute right-3 top-3
          rounded-full
          bg-[#F8CC10]
          px-2.5 py-1
          text-[9px]
          font-bold
          text-black
        ">
          {service.badge}
        </span>

      )}


      {/* Hover Arrow */}

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


// ========================================
// SERVICE COLLAGE
// ========================================

const ServiceCollage = ({
  services = [],
  className = "",
  showBackground = true,
}) => {

  if (!services.length) {
    return (
      <div className="w-full min-h-[300px] flex items-center justify-center">
        <p className="text-gray-400 text-sm">
          No services available.
        </p>
      </div>
    );
  }

  return (

    <div className={`
      relative mx-auto
      w-full max-w-[620px]
      ${className}
    `}>

      <div className="
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
      ">


        {/* Background Decorations */}

        {showBackground && (
          <>

            <div className="
              pointer-events-none
              absolute -right-10 -top-10
              h-40 w-40
              rounded-full
              bg-[#5428B0]/20
              blur-3xl
            " />

            <div className="
              pointer-events-none
              absolute -bottom-10 -left-10
              h-40 w-40
              rounded-full
              bg-[#F8CC10]/15
              blur-3xl
            " />

          </>
        )}


        {/* Service Cards */}

        {services.map((service, index) => (

          <ServiceCard
            key={service.id ?? index}
            service={service}
            index={index}
            gridSpan={gridSpans[index % gridSpans.length]}
          />

        ))}

      </div>

    </div>

  );
};


// ========================================
// ROTATING WORDS
// ========================================

const words = ["Impact", "Influence", "Growth"];


// ========================================
// LEFT CONTENT
// ========================================

function LeftContent() {

  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {

    const interval = setInterval(() => {

      setWordIndex((prev) => (prev + 1) % words.length);

    }, 2500);

    return () => clearInterval(interval);

  }, []);


  return (

    <div className="relative z-10 w-full max-w-2xl">


      {/* Background */}

      <div className="pointer-events-none absolute inset-0">

        <div className="
          absolute -right-40 -top-40
          h-[600px] w-[600px]
          rounded-full
          bg-[#5428B0]/[0.06]
          blur-[120px]
        " />

        <div className="
          absolute -bottom-40 -left-40
          h-[500px] w-[500px]
          rounded-full
          bg-[#F8CC10]/[0.08]
          blur-[120px]
        " />

        <div className="
          absolute inset-0
          opacity-[0.025]
          [background-image:linear-gradient(#5428B0_1px,transparent_1px),linear-gradient(90deg,#5428B0_1px,transparent_1px)]
          [background-size:70px_70px]
        " />

      </div>


      {/* Badge */}

      <div className="
        mb-5 inline-flex
        items-center gap-2.5
        rounded-full
        border border-gray-200
        bg-gray-50
        px-4 py-2
        text-xs font-semibold
        tracking-wide text-gray-700
      ">

        <span className="h-2 w-2 rounded-full bg-[#5428B0]" />

        Creative Motion Studio

        <span className="text-[#F8CC10]">✦</span>

      </div>


      {/* Heading */}

      <h1 className="
        text-4xl font-extrabold
        leading-[1.05]
        tracking-[-0.045em]
        text-gray-950

        sm:text-5xl
        md:text-7xl

        lg:text-[clamp(48px,4vw,68px)]
        xl:text-[clamp(54px,4vw,72px)]
      ">

        Building Brands.

        <br />

        <span className="
          inline-flex
          flex-wrap
          items-center
          gap-x-3
        ">

          Creating

          <span className="
            relative inline-block
            min-w-[190px]
            sm:min-w-[250px]
          ">

            <AnimatePresence mode="wait">

              <motion.span
                key={words[wordIndex]}

                initial={{
                  opacity: 0,
                  y: 25,
                  filter: "blur(8px)",
                }}

                animate={{
                  opacity: 1,
                  y: 0,
                  filter: "blur(0px)",
                }}

                exit={{
                  opacity: 0,
                  y: -25,
                  filter: "blur(8px)",
                }}

                transition={{
                  duration: 0.45,
                  ease: "easeInOut",
                }}

                className="
                  relative z-10
                  inline-block
                  text-[#5428B0]
                "
              >
                {words[wordIndex]}.

              </motion.span>

            </AnimatePresence>


            {/* Yellow Underline */}

            <span className="
              absolute bottom-0 left-0
              -z-0
              h-2 sm:h-3
              w-full
              rounded-full
              bg-[#F8CC10]/70
            " />

          </span>

        </span>

      </h1>


      {/* Description */}

      <p className="
        mt-6 max-w-lg
        text-sm leading-7
        text-gray-500
        sm:text-base sm:leading-8
      ">

        From compelling content to high-impact campaigns, we turn
        creative ideas into powerful brand experiences. Driven by
        strategy, backed by creativity, and focused on results.

      </p>




      {/* Buttons */}

      <div className="
        mt-9 flex flex-wrap
        items-center gap-4
      ">

        <AnimatedButton
          text="Book a discovery call"
          to="/contact"
        />

        <AnimatedButton1
          text="Explore our work"
          to="/portfolio"
        />

      </div>


{/* Trusted Clients */}
<div className="mt-8 pt-6 border-t border-gray-100 flex items-center justify-between gap-4 w-full">

  {/* Left: Text */}
  <div className="flex flex-col items-start">
    <p className="text-sm font-bold text-[#171717]">
      Trusted by our clients
    </p>

{/* Rating */}
<div className="flex flex-col items-start gap-1">

  <div className="flex items-center gap-1">
    {[1, 2, 3, 4, 5].map((star) => (
      <Star
        key={star}
        size={15}
        fill="#F8CC10"
        stroke="#F8CC10"
      />
    ))}

    <span className="text-sm text-[#171717] ml-1">
      4.7/5
    </span>
  </div>

</div>
  </div>

  {/* Right: Client Images */}
  <div className="flex items-center -space-x-3 shrink-0">

    {[deepak, mohit, deven, nidhi, dhiren].map((image, index) => (
      <img
        key={index}
        src={image}
        alt={`Trusted client ${index + 1}`}
        className="w-10 h-10 rounded-full object-cover border-[3px] border-white shadow-sm"
        style={{ zIndex: 10 - index }}
      />
    ))}

    {/* Plus Badge */}
    <div className="w-10 h-10 rounded-full bg-[#5428b0] border-[3px] border-white flex items-center justify-center text-white text-xs font-bold shadow-sm">
      +6
    </div>

  </div>

</div>

    </div>

  );
}

function RightVisual({ services}) {

  return (
           <div className="
          relative flex
          w-full
          items-center
          justify-center
        ">

          <ServiceCollage
            services={services}
            className="w-full"
          />

        </div>
  );
}

// ========================================
// MAIN HERO COMPONENT
// ========================================

function Hero({ services = [] }) {

  return (

    <section className="
      relative w-full
      overflow-hidden
      bg-white
    ">

      <div className="
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
      ">


        {/* LEFT CONTENT */}

        <LeftContent />


        {/* RIGHT VISUAL */}
        <RightVisual services={services} />
 

      </div>

    </section>

  );

}

export default Hero;