import React from "react";
import { FiArrowUpRight,FiZap,FiTarget,FiLayers } from "react-icons/fi";
import { motion } from "framer-motion";



const capabilities = [
  {
    icon: FiZap,
    title: "Creative Thinking",
    description:
      "Looking beyond the obvious to find ideas and directions that give your brand a distinct voice ",
  },
  {
    icon: FiTarget,
    title: "Strategic Execution",
    description:
      "Connecting creativity with your business objectives, so every piece of work has a reason behind it. ",
  },
  {
    icon: FiLayers,
    title: "Complete Production",
    description:
      "From planning and shooting to editing, design, and delivery, we bring the entire creative process together.",
  },
];

export default function Aboutwwd() {
  return (
    
      <section className="py-20 md:py-28 bg-[#F7F7F9]">

        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-5 mb-12">

            <div>

              <p className="text-[10px] uppercase tracking-[3px] font-bold text-[#5428B0] mb-3">
                Our Approach
              </p>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
                Where Big Ideas Get <br/>
                <span className="text-[#5428B0]"> Their Game Plan.</span>
              </h2>

            </div>

            <p className="text-sm text-gray-500 leading-6 max-w-sm">
A great-looking idea is only the beginning. It needs the right direction, thoughtful 
execution, and a purpose behind every creative decision, and we have you covered. e.
            </p>

          </div>


          <div className="grid md:grid-cols-3 gap-5">

            {capabilities.map((item, index) => {

              const Icon = item.icon;

              return (

                <motion.div
                  key={item.title}
                  initial={{
                    opacity: 0,
                    y: 30,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{ once: true }}
                  transition={{
                    delay: index * 0.12,
                  }}
                  whileHover={{ y: -7 }}
                  className="
                    bg-[#ffff]
                    border border-gray-100
                    rounded-2xl
                    p-7 md:p-9
                    group
                    transition-all duration-300
                    hover:shadow-xl
                    hover:border-[#5428B0]/20
                  "
                >

                  <div className="
                    w-12 h-12
                    flex items-center justify-center
                    rounded-xl
                    bg-[#5428B0]
                    text-[#F8CC10]
                    group-hover:scale-110
                    transition-transform
                  ">
                    <Icon size={21} />
                  </div>

                  <h3 className="text-xl font-bold mt-7">
                    {item.title}
                  </h3>

                  <p className="text-sm text-gray-500 leading-7 mt-3">
                    {item.description}
                  </p>

                  <div className="mt-7 flex items-center justify-between">

                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                      0{index + 1}
                    </span>

                    <FiArrowUpRight
                      size={18}
                      className="text-[#5428B0] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                    />

                  </div>

                </motion.div>

              );
            })}

          </div>

        </div>

      </section>

  )}