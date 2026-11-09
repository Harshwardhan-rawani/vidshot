import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Camera,
} from "lucide-react";
import vidshot from "../../icons/vidshot.png";
// SVG ICONS
import InstagramIcon from "../../icons/instagram.svg";
import YoutubeIcon from "../../icons/youtube.svg";
import FacebookIcon from "../../icons/facebook.svg";
import MetaIcon from "../../icons/meta-ads.svg";
import Videoediting from "../../icons/video-editing.svg";
import PodcastIcon from "../../icons/poadcast.svg";
import AnimatedButton from "../Button/AnimatedButton";

const visionWords = ["Stories", "Ideas", "Brands", "Creators"];

/* =========================================================
   ORBIT ICONS
========================================================= */

const orbitIcons = [
  {
    name: "Instagram",
    icon: InstagramIcon,
    angle: 0,
    distance: 210,
    orbit: "outer",
  },
  {
    name: "YouTube",
    icon: YoutubeIcon,
    angle: 60,
    distance: 150,
    orbit: "outer",
  },
  {
    name: "Facebook",
    icon: FacebookIcon,
    angle: 120,
    distance: 210,
    orbit: "outer",
  },
  {
    name: "Meta Ads",
    icon: MetaIcon,
    angle: 180,
    distance: 160,
    orbit: "outer",
  },
  {
    name: "Design",
    icon: PodcastIcon,
    angle: 240,
    distance: 210,
    orbit: "inner",
  },
  {
    name: "Video",
    icon: Videoediting,
    angle: 300,
    distance: 150,
    orbit: "inner",
  },
];

/* =========================================================
   ORBIT ICON
========================================================= */

function OrbitIcon({ item }) {
  const angle = (item.angle * Math.PI) / 180;

  const radius = item.distance;

  const x = Math.cos(angle) * radius;
  const y = Math.sin(angle) * radius;

  const isOuter = item.orbit === "outer";

  return (
    <motion.div
      className="absolute left-1/2 top-1/2 z-50"
      style={{
        marginLeft: -24,
        marginTop: -24,
      }}
      animate={{
        x,
        y,
      }}
      transition={{
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <motion.div
        animate={{
          y: [0, -5, 0],
        }}
        transition={{
          duration: isOuter ? 3.2 : 2.8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: item.angle * 0.003,
        }}
        whileHover={{
          scale: 1.15,
        }}
        className="group relative cursor-pointer"
      >
        {/* Glow */}

        <div className="absolute inset-[-12px] rounded-full bg-[#5428B0]/20 opacity-0 blur-xl transition-opacity group-hover:opacity-100" />

        {/* Icon Container */}

        <div
          className="
            relative flex h-12 w-12 items-center justify-center
            rounded-full border border-[#17122a]/10
            bg-white shadow-[0_10px_30px_rgba(23,18,42,.15)]
            transition-all duration-500
            group-hover:border-[#5428B0]/40
            group-hover:shadow-[0_15px_40px_rgba(84,40,176,.25)]
            sm:h-14 sm:w-14
          "
        >
          <img
            src={item.icon}
            alt={item.name}
            onError={(e) => {
              console.error("Icon failed to load:", item.icon);
              e.currentTarget.style.display = "none";
            }}
            className="h-6 w-6 object-contain sm:h-7 sm:w-7"
          />
        </div>

        {/* Label */}

        <div
          className="
            pointer-events-none absolute left-1/2 top-full z-50
            mt-2 -translate-x-1/2 whitespace-nowrap
            rounded-full bg-[#17122a] px-3 py-1
            text-[9px] font-semibold text-white
            opacity-0 transition-all duration-300
            group-hover:opacity-100
          "
        >
          {item.name}
        </div>
      </motion.div>
    </motion.div>
  );
}

const principles = [
  {
    number: "01",
    title: "Think",
    text: "Strategy before execution.",
  },
  {
    number: "02",
    title: "Create",
    text: "Ideas with visual impact.",
  },
  {
    number: "03",
    title: "Move",
    text: "Content that drives action.",
  },
];

export default function Homeov() {
  const sectionRef = React.useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 85%", "end 20%"],
  });

  const headingY = useTransform(scrollYProgress, [0, 1], [20, -10]);

  return (
    <section
      ref={sectionRef}
      className="
        relative overflow-hidden
        bg-[#F7F7F9] px-5  text-[#17122a]
        sm:px-8      
        py-10
        md:py-16
      "
    >


      <div className="relative z-10 mx-auto max-w-7xl">

        {/* =====================================================
            MAIN VISION
        ===================================================== */}

        <div
          className="
            grid items-center gap-12
            lg:grid-cols-[1.08fr_0.92fr]
            lg:gap-10 
          "
        >
          {/* =================================================
              LEFT — TYPOGRAPHY
          ================================================= */}

          <div className="relative">

  {/* Small floating camera icon */}
  <motion.div
    initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
    whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.7 }}
    className="
      absolute -right-2 -top-6 hidden
      h-11 w-11 items-center justify-center
      rounded-xl border border-[#5428B0]/10
      bg-[#5428B0]/5 text-[#5428B0]
      lg:flex
    "
  >
    <Camera size={19} />
  </motion.div>

  {/* Section Label */}
  <motion.p
    initial={{ opacity: 0, y: 10 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className="
      mb-3 text-[10px] font-bold uppercase
      tracking-[3px] text-[#5428B0]
    "
  >
    Our Vision
  </motion.p>

  {/* Main Heading */}
  <motion.h2
    style={{ y: headingY }}
    initial={{ opacity: 0, y: 25 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    }}
    className="
      max-w-3xl
      text-3xl font-bold
      leading-[1.15] tracking-tight
      text-[#17122a]
      sm:text-4xl
      md:text-5xl
    "
  >
    Turning ideas into
    <span className="text-[#5428B0]"> meaningful impact.</span>
  </motion.h2>

  {/* Accent Line */}
  <motion.div
    initial={{ width: 0 }}
    whileInView={{ width: 55 }}
    viewport={{ once: true }}
    transition={{ duration: 0.7, delay: 0.3 }}
    className="mt-6 h-[3px] rounded-full bg-[#F8CC10]"
  />

  {/* Description */}
  <motion.p
    initial={{ opacity: 0, y: 15 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay: 0.2 }}
    className="
      mt-5 
      mb-3
      text-sm leading-7
      text-gray-500
      sm:text-base
    "
  >
    Our vision is simple — build a creative ecosystem where
    brands, creators, and ideas don't just get noticed,
    they become impossible to ignore.
  </motion.p>

<AnimatedButton 
to = "/contact"
text ="Build with us" />

  {/* Vision Keywords */}
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay: 0.45 }}
    className="mt-8 flex flex-wrap gap-2"
  >
    {visionWords.map((word, index) => (
      <motion.span
        key={word}
        whileHover={{ y: -3 }}
        className={`
          rounded-full border px-3 py-1.5
          text-[10px] font-semibold
          transition-colors duration-300
          ${
            index % 2 === 0
              ? "border-[#5428B0]/15 bg-[#5428B0]/5 text-[#5428B0]"
              : "border-[#F8CC10]/40 bg-[#F8CC10]/15 text-[#5b4900]"
          }
        `}
      >
        {word}
      </motion.span>
    ))}
  </motion.div>

</div>

               {/* =================================================
                   RIGHT — ORBIT SYSTEM
               ================================================== */}
     
               <motion.div
                 initial={{
                   opacity: 0,
                   scale: 0.92,
                 }}
                 whileInView={{
                   opacity: 1,
                   scale: 1,
                 }}
                 viewport={{
                   once: true,
                   amount: 0.1,
                 }}
                 transition={{
                   duration: 1,
                   ease: [0.22, 1, 0.36, 1],
                 }}
                 className="
                 
                   relative
                   mx-auto
                   hidden
                   lg:flex
                   aspect-square
                   w-full
                   max-w-[540px]
                   items-center
                   justify-center
                 "
               >
                 {/* =================================================
                     AMBIENT GLOW
                 ================================================== */}
     
                 <motion.div
                   animate={{
                     scale: [1, 1.08, 1],
                     opacity: [0.25, 0.45, 0.25],
                   }}
                   transition={{
                     duration: 5,
                     repeat: Infinity,
                     ease: "easeInOut",
                   }}
                   className="
                     absolute
                     h-[55%]
                     w-[55%]
                     rounded-full
                     bg-[#5428B0]/10
                     blur-[80px]
                   "
                 />
     
                 {/* =================================================
                     OUTER ORBIT
                 ================================================== */}
     
                 <motion.div
                   animate={{
                     rotate: 360,
                   }}
                   transition={{
                     duration: 40,
                     repeat: Infinity,
                     ease: "linear",
                   }}
                   className="
                     absolute
                     h-[80%]
                     w-[80%]
                     rounded-full
                     border
                     border-[#17122a]/10
                   "
                 >
              
                 </motion.div>
     
     
                 {/* =================================================
                     MIDDLE ORBIT
                 ================================================== */}
     
                 <motion.div
                   animate={{
                     rotate: -360,
                   }}
                   transition={{
                     duration: 28,
                     repeat: Infinity,
                     ease: "linear",
                   }}
                   className="
                     absolute
                     h-[60%]
                     w-[60%]
                     rounded-full
                     border
                     border-[#17122a]/10
                   "
                 >
                   
                 </motion.div>
     
                 {/* =================================================
                     INNER ORBIT
                 ================================================== */}
     
                 <div
                   className="
                     absolute
                     h-[40%]
                     w-[40%]
                     rounded-full
                     border
                     border-[#17122a]/10
                   "
                 />
     
                 {/* =================================================
                     ROTATING ICON SYSTEM
                 ================================================== */}
     
                 <motion.div
                   className="absolute inset-0"
                   animate={{
                     rotate: 360,
                   }}
                   transition={{
                     duration: 35,
                     repeat: Infinity,
                     ease: "linear",
                   }}
                 >
                   {orbitIcons.map((item) => (
                     <OrbitIcon
                       key={item.name}
                       item={item}
                     />
                   ))}
                 </motion.div>
     
                 {/* =================================================
                     CENTER PLANET
                 ================================================== */}
     
               <div className="
                          relative z-10
                          w-36 h-36
                          rounded-full
                          bg-[#5503b0]
                          border border-[#5503b0]
                          shadow-[0_5px_25px_rgba(0,0,0,0.08)]
                          flex items-center justify-center
                        ">
                          <img
                            src={vidshot}
                            alt="VidShot Media"
                            className="w-28 h-28 object-contain"
                          />
                        </div>
     
                 {/* =================================================
                     FLOATING DOTS
                 ================================================== */}
     
                 <motion.span
                   animate={{
                     scale: [1, 1.5, 1],
                     opacity: [0.3, 1, 0.3],
                   }}
                   transition={{
                     duration: 2.5,
                     repeat: Infinity,
                   }}
                   className="
                     absolute
                     left-[9%]
                     top-[32%]
                     h-2
                     w-2
                     rounded-full
                     bg-[#F8CC10]
                   "
                 />
     
                 <motion.span
                   animate={{
                     scale: [1, 1.4, 1],
                     opacity: [0.3, 1, 0.3],
                   }}
                   transition={{
                     duration: 3,
                     repeat: Infinity,
                   }}
                   className="
                     absolute
                     right-[9%]
                     top-[27%]
                     h-1.5
                     w-1.5
                     rounded-full
                     bg-[#5428B0]
                   "
                 />
     
                 <motion.span
                   animate={{
                     y: [0, -8, 0],
                   }}
                   transition={{
                     duration: 3,
                     repeat: Infinity,
                     ease: "easeInOut",
                   }}
                   className="
                     absolute
                     bottom-[17%]
                     left-[19%]
                     h-1.5
                     w-1.5
                     rounded-full
                     bg-[#5428B0]/50
                   "
                 />
               </motion.div>
        </div>

        {/* =====================================================
            BOTTOM PRINCIPLES
        ===================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="
            overflow-hidden rounded-[28px]
            border border-[#17122a]/10
            bg-[#f8f6fc]
            shadow-[0_20px_70px_rgba(23,18,42,0.06)]
          "
        >
          <div className="grid grid-cols-1 sm:grid-cols-3">
            {principles.map((item, index) => (
              <motion.div
                key={item.number}
                whileHover={{
                  backgroundColor:
                    index % 2 === 0
                      ? "rgba(84,40,176,0.045)"
                      : "rgba(248,204,16,0.08)",
                }}
                className="
                  group border-b border-[#17122a]/10
                  p-5 transition-colors duration-300
                  sm:border-b-0 sm:border-r sm:p-7
                  sm:last:border-r-0
                "
              >
                <div className="flex items-center justify-between">
                  <span
                    className={`
                      text-[10px] font-bold tracking-[0.2em]
                      ${
                        index === 1
                          ? "text-[#F8CC10]"
                          : "text-[#5428B0]"
                      }
                    `}
                  >
                    {item.number}
                  </span>

                  <span
                    className={`
                      h-1.5 w-1.5 rounded-full transition-colors
                      ${
                        index === 1
                          ? "bg-[#F8CC10] group-hover:bg-[#5428B0]"
                          : "bg-[#5428B0]/20 group-hover:bg-[#F8CC10]"
                      }
                    `}
                  />
                </div>

                <h3 className="mt-5 text-lg font-bold text-[#17122a]">
                  {item.title}
                </h3>

                <p className="mt-1 text-xs leading-5 text-[#71697e]">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
