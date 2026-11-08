import React from "react";
import { motion } from "framer-motion";
import {
  fadeUp,
  stagger, } from "../../Animation/Fadeup";


/* =========================================
   IMAGE DATA
========================================= */

const galleryImages = [
  {
    image:
      "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800",
    alt: "Creative team collaborating",
    className: "h-[150px] md:h-[190px]",
  },
  {
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800",
    alt: "Modern creative workspace",
    className: "h-[120px] md:h-[155px] mt-8",
  },
  {
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800",
    alt: "Team brainstorming",
    className: "h-[170px] md:h-[220px]",
  },
  {
    image:
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=800",
    alt: "Creative office environment",
    className: "h-[125px] md:h-[165px] mt-8",
  },
  {
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800",
    alt: "Team working together",
    className: "h-[150px] md:h-[190px]",
  },
];

export default function Abouthero() {
  return (
          <section className="pt-24 pb-14 md:pt-28 md:pb-20">
                   {/* =========================================================
              BACKGROUND
          ========================================================= */}
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            {/* purple glow */}
            <div className="absolute -left-40 top-20 h-[420px] w-[420px] rounded-full bg-[#5428B0]/[0.05] blur-3xl" />
    
            {/* yellow glow */}
            <div className="absolute -right-40 top-[35%] h-[350px] w-[350px] rounded-full bg-[#F8CC10]/[0.06] blur-3xl" />
    
            {/* grid */}
            <div
              className="absolute inset-0 opacity-[0.025]"
              style={{
                backgroundImage: `
                  linear-gradient(#17122a 1px, transparent 1px),
                  linear-gradient(90deg, #17122a 1px, transparent 1px)
                `,
                backgroundSize: "80px 80px",
              }}
            />
          </div>
            <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
    
              {/* Heading */}
    
              <motion.div
                variants={stagger}
                initial="hidden"
                animate="visible"
                className="text-center mb-12"
              >
    
                <motion.p
                  variants={fadeUp}
                  className="text-[10px] font-bold uppercase tracking-[3px] text-[#5428B0] mb-3"
                >
                  The Story Behind VidShot
                </motion.p>
    
                <motion.h1
                  variants={fadeUp}
                  className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-[-0.06em]"
                >
                  About <span className="text-[#5428B0]">Us.</span>
                </motion.h1>
    
                <motion.p
                  variants={fadeUp}
                  className="text-sm text-gray-500 mt-4 max-w-md mx-auto leading-relaxed"
                >
                  A creative team turning ideas into stories, experiences and
                  meaningful brand connections.
                </motion.p>
    
              </motion.div>
    
    
              {/* Uneven Image Collage */}
    
              <div className="
                grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5
                gap-3 md:gap-5
                items-center
              ">
    
                {galleryImages.map((item, index) => (
    
                  <motion.div
                    key={index}
                    initial={{
                      opacity: 0,
                      y: 35,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.6,
                      delay: index * 0.1,
                    }}
                    className={`
                      relative overflow-hidden
                      rounded-2xl
                      ${item.className}
                      ${index === 4 ? "hidden lg:block" : ""}
                    `}
                  >
    
                    <img
                      src={item.image}
                      alt={item.alt}
                      className="
                        w-full h-full object-cover
                        transition-transform duration-700
                        hover:scale-110
                      "
                    />
    
                    <div className="absolute inset-0 bg-black/5 hover:bg-transparent transition-colors" />
    
                  </motion.div>
    
                ))}
    
              </div>
    
            </div>
    
          </section>
  )
}