import React from "react";
import { motion } from "framer-motion";
export default function Abouthww() {
  return (
      <section className="py-20 md:py-28 bg-[#F7F7F9]">

        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

          <div className="text-center max-w-2xl mx-auto mb-14">

            <p className="text-[10px] uppercase tracking-[3px] font-bold text-[#5428B0] mb-3">
              Our Process
            </p>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
              From idea to
              <span className="text-[#5428B0]"> impact.</span>
            </h2>

            <p className="text-sm text-gray-500 mt-4 leading-6">
              A simple, collaborative process that keeps every project
              focused and moving forward.
            </p>

          </div>


          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">

            {[
              {
                number: "01",
                title: "Discover",
                text: "We understand your brand, audience and goals.",
              },
              {
                number: "02",
                title: "Define",
                text: "We build a clear creative direction and plan.",
              },
              {
                number: "03",
                title: "Create",
                text: "We bring the concept to life through production and design.",
              },
              {
                number: "04",
                title: "Deliver",
                text: "We deliver polished, platform-ready creative work.",
              },
            ].map((item, index) => (

              <motion.div
                key={item.number}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="
                  bg-white
                  rounded-2xl
                  p-6 md:p-7
                  border border-gray-100
                "
              >

                <span className="
                  text-4xl font-bold
                  text-[#5428B0]/20
                ">
                  {item.number}
                </span>

                <h3 className="text-xl font-bold mt-7">
                  {item.title}
                </h3>

                <p className="text-xs text-gray-500 leading-6 mt-3">
                  {item.text}
                </p>

                <div className="w-9 h-1 bg-[#F8CC10] rounded-full mt-7" />

              </motion.div>

            ))}

          </div>

        </div>

      </section>
  )}