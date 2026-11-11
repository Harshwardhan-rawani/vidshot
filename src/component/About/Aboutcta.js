import React from "react";
import AnimatedButton1 from "../Button/AnimatedButton1";
import { motion } from "framer-motion";
export default function Aboutcta() {
  return (
    
          <motion.section
          
          className="bg-[#FAFAFA] py-16 md:py-24">
    
            <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
    
              <div className="
                relative
                overflow-hidden
                rounded-[25px]
                bg-[var(--primary)]
                px-6 py-16
                md:px-14 md:py-20
                text-center
              ">
    
                                {/* Decorative Background Circles */}
<div
  className="
    pointer-events-none
    absolute
    -top-32 -right-24
    h-64 w-64
    sm:h-80 sm:w-80
    lg:h-96 lg:w-96
    rounded-full
    border border-[var(--secondary)]/50
  "
/>

<div
  className="
    pointer-events-none
    absolute
    -bottom-32 -left-24
    h-64 w-64
    sm:h-80 sm:w-80
    lg:h-96 lg:w-96
    rounded-full
    border border-[var(--secondary)]/50
  "
/>
                <div className="relative z-10">
    
                  <p className="text-[10px] uppercase tracking-[3px] font-bold text-[#F8CC10] mb-4">
                    Let's Create Something Great
                  </p>
    
                  <h2 className="
                    text-3xl sm:text-4xl md:text-6xl
                    font-bold
                    tracking-tight
                    text-white
                    leading-tight
                  ">
                    Have an idea?
                    <br />
                    <span className="text-[#F8CC10]">
                      Let's make it real.
                    </span>
                  </h2>
    
                  <p className="text-sm text-white/60 max-w-lg mx-auto mt-5 mb-8 leading-7">
                    Tell us what you're building. We'll bring the creative
                    thinking, production and energy to make it happen.
                  </p>
    
                  <AnimatedButton1
                    text="Start a Project"
                    to="/contact"
                  />
    
                </div>
    
              </div>
    
            </div>
    
          </motion.section>
  )}