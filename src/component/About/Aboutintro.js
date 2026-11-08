import React from "react";
import { motion } from "framer-motion";
const statistics = [
  {
    number: "50+",
    label: "Brands worked with",
  },
  {
    number: "500+",
    label: "Creative projects delivered",
  },
  {
    number: "10+",
    label: "Markets reached",
  },
  {
    number: "100%",
    label: "Creative commitment",
  },
];


export default function Aboutintro() {
  return (
     <section className="py-14 md:py-20 bg-white">

        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

          <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-8 lg:gap-20 items-start">

            <div>

              <p className="text-[10px] uppercase tracking-[3px] font-bold text-[#5428B0] mb-4">
                Who We Are
              </p>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-[1.08] tracking-tight">
                We help brands create
                <span className="text-[#5428B0]"> meaningful impact.</span>
              </h2>

            </div>

            <div className="lg:pt-8">

              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                VidShot Media is a creative production partner for brands,
                creators and ambitious businesses that believe great ideas
                deserve great execution.
              </p>

              <p className="text-sm md:text-base text-gray-500 leading-7 mt-5">
                We bring together creative thinking, video production,
                storytelling, design and digital marketing to help businesses
                communicate better, build stronger connections and grow.
              </p>

              <div className="flex items-center gap-3 mt-7">

                <span className="h-[2px] w-10 bg-[#F8CC10]" />

                <span className="text-[10px] font-bold uppercase tracking-[2px] text-[#5428B0]">
                  Ideas into Impact
                </span>

              </div>

            </div>

          </div>


          {/* Statistics */}

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-5 mt-12 md:mt-16">

            {statistics.map((item, index) => (

              <motion.div
                key={item.label}
                initial={{
                  opacity: 0,
                  y: 25,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.1,
                }}
                className="
                  bg-[#F8F8FA]
                  rounded-2xl
                  border border-gray-100
                  p-5 md:p-7
                  min-h-[135px]
                  flex flex-col justify-between
                  hover:border-[#5428B0]/30
                  transition-colors
                "
              >

                <h3 className="text-3xl md:text-4xl font-bold tracking-tight">
                  {item.number}
                </h3>

                <p className="text-[11px] md:text-xs text-gray-500 mt-5">
                  {item.label}
                </p>

              </motion.div>

            ))}

          </div>

        </div>

      </section>
  )}