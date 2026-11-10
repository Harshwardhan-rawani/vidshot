import React from "react";
import { motion} from "framer-motion";

export default function Homeop(){
    return (
        
         <section className="bg-[#F7F7F9]      py-10
        md:py-16">
   
           <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
   
             <div className="grid gap-14 lg:grid-cols-[0.75fr_1.25fr] lg:gap-24">
   
{/* Left */}

<div>

  <p className="text-[10px] uppercase tracking-[3px] font-bold text-[var(--primary)] mb-3">
    Our Process
  </p>

  <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
    Simple process.
    <span className="text-[var(--primary)]"> Serious output.</span>
  </h2>

  <p className="    mt-5 
      mb-3
      text-sm leading-7
      text-gray-500
      sm:text-base">
    We follow a collaborative and transparent approach,
    transforming your ideas into meaningful creative experiences
    that help your brand connect, engage and grow.
  </p>

</div>

   
               <div className="space-y-0">
   
                 {[
                   [
                     "01",
                     "Discover",
                     "We understand your brand, audience, goals and the problem we're solving.",
                   ],
                   [
                     "02",
                     "Define",
                     "We turn the initial idea into a clear creative direction and production plan.",
                   ],
                   [
                     "03",
                     "Create",
                     "Our team handles production, design, editing, motion and everything in between.",
                   ],
                   [
                     "04",
                     "Deliver",
                     "You get polished, platform-ready content built to perform.",
                   ],
                 ].map(([number, title, text], index) => (
   
                   <motion.div
  key={number}
  initial={{
    opacity: 0,
    x: 20,
  }}
  whileInView={{
    opacity: 1,
    x: 0,
  }}
  viewport={{
    once: true,
    amount: 0.3,
  }}
  transition={{
    duration: 0.6,
    delay: index * 0.1,
    ease: [0.22, 1, 0.36, 1],
  }}
  className="
    group grid
    grid-cols-[42px_1fr]
    gap-4
    border-t border-[#17122a]/10
    py-6
    transition-all duration-300
    md:grid-cols-[55px_1fr]
    md:gap-5
  "
>

  {/* Step Number */}
  <span
    className="
      pt-1
      text-xs font-bold
      tracking-wider
      text-[var(--primary)]
      transition-colors duration-300
      group-hover:text-[var(--secondary)]
    "
  >
    {number}
  </span>

  {/* Content */}
  <div>

    {/* Title */}
    <h3
      className="
        text-lg font-bold
        tracking-tight
        text-[#17122a]
        transition-colors duration-300
        group-hover:text-[var(--primary)]
        sm:text-xl
      "
    >
      {title}
    </h3>

    {/* Description */}
    <p
      className="
        mt-2 max-w-xl
        text-sm leading-7
        text-gray-500
      "
    >
      {text}
    </p>

  </div>

</motion.div>
   
                 ))}
   
               </div>
   
             </div>
   
           </div>
   
         </section>
    )
}