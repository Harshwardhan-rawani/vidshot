import React from "react";
import { motion} from "framer-motion";

export default function Homeop(){
    return (
        
         <section className="bg-[#F7F7F9]  py-10
        md:py-16">
   
           <div className="mx-auto max-w-7xl">
   
             <div className="grid gap-14 lg:grid-cols-[0.75fr_1.25fr] lg:gap-24">
   
{/* Left */}

<div>

  <p className="text-[10px] uppercase tracking-[3px] font-bold text-[var(--primary)] mb-3">
    Our Process
  </p>

  <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
    From Let’s begin to  
    <span className="text-[var(--primary)]"> We have mapped it out.</span>
  </h2>

  <p className="    mt-5 
      mb-3
      text-sm leading-7
      text-gray-500
      sm:text-base">
    The work behind the Wow happens by keeping you involved at every stage, so you 
    know what is happening, why it is happening, and what comes next. 
  </p>

</div>

   
               <div className="space-y-0">
   
                 {[
                   [
                     "01",
                     "Discover",
                     "We get to know your business, audience, goals, and the challenge you want to solve.",
                   ],
                   [
                     "02",
                     "Define",
                     "We take a brief walk into a clear creative direction and turn your what-ifs into a strategy and production plan.",
                   ],
                   [
                     "03",
                     "Create",
                     "We go through the lightbulb moments and turn the blueprint into polished creations through production, design, editing, and creative execution.",
                   ],
                   [
                     "04",
                     "Deliver",
                     "We reduce the steps between you and the magic created by sending it your way.",
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