import React from "react";
import rohitsir from "../../Images/client/rohitsir.jpeg";
import { motion } from "framer-motion";
import {
  fadeUp,
  stagger, } from "../../Animation/Fadeup";
export default function Aboutfounder() {
  return (
        <section className="py-20 md:py-28 bg-[#ffff]">

        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

          <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-12 lg:gap-20 items-center">

            {/* Founder Image */}

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative max-w-[430px] mx-auto w-full"
            >

         

              <div className="
                relative
                h-[430px] md:h-[500px]
                rounded-2xl
                overflow-hidden
                bg-gray-200
              ">

                <img
                  src={rohitsir}
                  alt="Rohit Kumar Singh - Founder of VidShot Media"
                  className="w-full h-full object-cover object-top"
                />

                <div className="
                  absolute inset-0
                  bg-gradient-to-t
                  from-black/75 via-transparent to-transparent
                " />

                <div className="absolute bottom-7 left-7">

                  <p className="text-[10px] uppercase tracking-[3px] font-bold text-[#F8CC10]">
                    Founder & CEO
                  </p>

                  <h3 className="text-2xl md:text-3xl font-bold text-white mt-2">
                    Rohit Kumar Singh
                  </h3>

                </div>

              </div>

            </motion.div>


            {/* Founder Content */}

            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >

              <motion.p
                variants={fadeUp}
                className="text-[10px] uppercase tracking-[3px] font-bold text-[#5428B0]"
              >
                A Message From Our Founder
              </motion.p>

              <motion.h2
                variants={fadeUp}
                className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight tracking-tight mt-4"
              >
                Every great brand begins with
                <span className="text-[#5428B0]"> an idea.</span>
              </motion.h2>

              <motion.p
                variants={fadeUp}
                className="text-base text-gray-700 leading-7 mt-7"
              >
                But turning that idea into something people remember takes
                creativity, strategy and execution.
              </motion.p>

              <motion.p
                variants={fadeUp}
                className="text-sm text-gray-500 leading-7 mt-5"
              >
                At VidShot Media, our vision is to bring creative thinking,
                storytelling and digital innovation together to help brands
                build meaningful connections with their audiences.
              </motion.p>

              <motion.p
                variants={fadeUp}
                className="text-sm text-gray-500 leading-7 mt-4"
              >
                We believe that content should do more than capture attention.
                It should communicate a story, create an impact and help
                businesses grow.
              </motion.p>

              {/* Founder Details */}

              <motion.div
                variants={fadeUp}
                className="mt-8 pt-6 border-t border-gray-200 flex items-center gap-4"
              >

                <div className="
                  w-12 h-12
                  rounded-full
                  bg-white
                  shadow-lg
                  border-2
                  border-red-100
                  text-[#F8CC10]
                  flex items-center justify-center
                  font-bold text-xl
                ">
                  R
                </div>

                <div>

                  <p className="text-sm font-bold">
                    Rohit Kumar Singh
                  </p>

                  <p className="text-[11px] text-gray-500 mt-1">
                    Founder & CEO, VidShot Media
                  </p>

                </div>

              </motion.div>

            </motion.div>

          </div>

        </div>

      </section>
  )}