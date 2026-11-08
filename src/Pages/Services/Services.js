import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import {
  ArrowUpRight,
} from "lucide-react";

import {
  fadeUp,
  stagger, } from "../../Animation/Fadeup";


function ServiceCollage({services}) {
  const [activeService, setActiveService] = useState(services[0]);

const cardPositions = [
  "lg:col-span-2 lg:row-span-1",
  "lg:col-span-2 lg:row-span-1",
  "lg:col-span-2 lg:row-span-1",
  "lg:col-span-2 lg:row-span-1",
  "lg:col-span-2 lg:row-span-1",
  "lg:col-span-2 lg:row-span-1",
];

  return (
  <section className="relative w-full overflow-hidden bg-transparent px-4 lg:px-8">

  <motion.div
  variants={stagger}
  className="w-full mx-auto">

    {/* TWO-SIDED LAYOUT */}

    <motion.div 
    variants={fadeUp}
    className="grid w-full grid-cols-1 items-stretch gap-6 lg:grid-cols-2 lg:gap-6">

      {/* LEFT SIDE */}
      <div className="relative min-h-[600px] overflow-hidden rounded-[28px] bg-[#121821] shadow-xl">
            <AnimatePresence mode="wait">

              <motion.div
                key={activeService.id}
                initial={{ opacity: 0, scale: 1.03 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.45, ease: "easeInOut" }}
                className="absolute inset-0"
              >

                {/* BACKGROUND IMAGE */}

                <img
                  src={activeService.image}
                  alt={activeService.title}
                  className="absolute inset-0 h-full w-full object-cover"
                />

                {/* IMAGE OVERLAY */}

                <div className="absolute inset-0 bg-gradient-to-t from-[#121821] via-[#121821]/75 to-[#121821]/10" />

                <div className="relative z-10 flex h-full flex-col justify-between p-6 sm:p-9 lg:p-10">

                  {/* TOP CONTENT */}

                  <div className="flex items-center justify-between">

                    <span className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold tracking-widest text-[#F8CC10] backdrop-blur-md">
                      SERVICE {activeService.number}
                    </span>

                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#F8CC10] text-[#5428B0]">
                      {React.createElement(activeService.icon, {
                        size: 23,
                      })}
                    </div>

                  </div>

                  {/* BOTTOM CONTENT */}

                  <div>

                    <motion.span
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 }}
                      className="mb-3 block text-sm font-semibold uppercase tracking-[0.2em] text-[#F8CC10]"
                    >
                      VidShot Media
                    </motion.span>

                    <motion.h3
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.15 }}
                      className="max-w-xl text-3xl font-black leading-tight text-white sm:text-4xl lg:text-5xl"
                    >
                      {activeService.title}
                    </motion.h3>

                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                      className="mt-5 max-w-xl text-sm leading-7 text-white/75 sm:text-base"
                    >
                      {activeService.description}
                    </motion.p>

                    {/* TAGS */}

                    <motion.div
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.25 }}
                      className="mt-5 flex flex-wrap gap-2"
                    >
                      {activeService.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-white/20 bg-white/10 px-3 py-2 text-[10px] font-semibold text-white/90 backdrop-blur-md sm:text-xs"
                        >
                          {tag}
                        </span>
                      ))}
                    </motion.div>

                    {/* CTA */}

                    <motion.a
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                      href="/contact"
                      className="mt-7 inline-flex items-center gap-3 rounded-full bg-[#F8CC10] px-6 py-3.5 text-sm font-bold text-[#5428B0] transition-all duration-300 hover:bg-white hover:shadow-lg"
                    >
                      Discuss Your Project
                      <ArrowUpRight size={18} />
                    </motion.a>

                  </div>

                </div>
              </motion.div>

            </AnimatePresence>

          </div>

          {/* RIGHT SIDE - SERVICES COLLAGE */}

          <div className="flex flex-col">

            <div className="mb-5 flex items-center justify-between">
              <h3 className="text-lg font-bold text-[#121821] sm:text-xl">
                Explore Our Services
              </h3>

              <span className="text-xs font-semibold text-gray-400">
                {services.length} SERVICES
              </span>
            </div>

            <div className="grid flex-1 grid-cols-2 gap-3 lg:grid-cols-4 lg:grid-rows-[190px_190px_190px] lg:gap-4">

              {services.map((service, index) => {
                const Icon = service.icon;
                const isActive = activeService.id === service.id;

                return (
                  <motion.article
                    key={service.id}
                    layout
                    onMouseEnter={() => setActiveService(service)}
                    onFocus={() => setActiveService(service)}
                    onClick={() => setActiveService(service)}
                    whileHover={{ scale: 1.025 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{
                      duration: 0.3,
                      ease: "easeOut",
                    }}
                    tabIndex={0}
                    role="button"
                    aria-pressed={isActive}
                    className={`
                      group relative min-h-[155px] cursor-pointer
                      overflow-hidden rounded-[20px]
                      bg-[#121821] shadow-md outline-none
                      sm:min-h-[190px] lg:min-h-0
                      ${cardPositions[index]}
                      ${
                        isActive
                          ? "shadow-xl"
                          : "hover:shadow-xl"
                      }
                    `}
                  >

                    {/* CARD IMAGE */}

                    <img
                      src={service.image}
                      alt=""
                      className={`
                        absolute inset-0 h-full w-full object-cover
                        transition-transform duration-700
                        group-hover:scale-110
                        ${isActive ? "scale-110" : "scale-100"}
                      `}
                    />

                    {/* CARD OVERLAY */}

                    <div
                      className={`
                        absolute inset-0 transition-all duration-300
                        ${
                        isActive
  ? "bg-gradient-to-t from-black/95 via-[#121212]/75 to-black/20"
  : "bg-gradient-to-t from-black/90 via-[#121212]/50 to-black/20 group-hover:from-black/95 group-hover:via-black/65"
                        }
                      `}
                    />

                    {/* CARD CONTENT */}

                    <div className="relative z-10 flex h-full min-h-[155px] flex-col justify-between p-4 sm:min-h-[190px] sm:p-5">

                      <div className="flex items-center justify-between">

                        <span className="text-[10px] font-bold tracking-widest text-[#F8CC10] sm:text-xs">
                          {service.number}
                        </span>

                        <div
                          className={`
                            flex h-8 w-8 items-center justify-center
                            rounded-full transition-all duration-300
                            ${
                              isActive
                                ? "bg-[#F8CC10] text-[#5428B0]"
                                : "bg-white/20 text-white backdrop-blur-md"
                            }
                          `}
                        >
                          <Icon size={16} />
                        </div>

                      </div>

                      <div>

                        <h4 className="text-sm font-black leading-tight text-white sm:text-lg lg:text-xl">
                          {service.shortTitle || service.title}
                        </h4>

                        <div
                          className={`
                            mt-2 flex items-center gap-2 text-[10px]
                            font-semibold transition-colors sm:text-xs
                            ${
                              isActive
                                ? "text-[#F8CC10]"
                                : "text-white/70 group-hover:text-[#F8CC10]"
                            }
                          `}
                        >
                          {isActive ? "Currently Viewing" : "Explore Service"}
                          <ArrowUpRight size={13} />
                        </div>

                      </div>

                    </div>

                  </motion.article>
                );
              })}

            </div>

            {/* BOTTOM NOTE */}

            <p className="mt-5 text-xs leading-6 text-gray-400 sm:text-sm">
              {`Hover over a service to discover what we can create for your brand.`}
            </p>

          </div>

        </motion.div>

      </motion.div>

    </section>
  );
}



export default function Services({services}) {
  

  return (
    <section
      id="services"
      className="relative overflow-hidden bg-white py-24 md:py-24"
    >
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

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* =========================================================
            HEADER
        ========================================================= */}

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
              Our <span className="text-[#5428B0]">Services.</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="text-sm text-gray-500 mt-4 max-w-md mx-auto leading-relaxed"
            >
              A creative team turning ideas into stories, experiences and
              meaningful brand connections.
            </motion.p>

          </motion.div>
     
  <ServiceCollage services={services}/>
      
      </div>
    </section>
  );
}