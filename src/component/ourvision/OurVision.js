import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowUpRight,
  Camera,
  Clapperboard,
} from "lucide-react";

const visionWords = ["Stories", "Ideas", "Brands", "Creators"];

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

export default function OurVision() {
  const sectionRef = React.useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 85%", "end 20%"],
  });

  const visualY = useTransform(scrollYProgress, [0, 1], [55, -35]);
  const visualRotate = useTransform(scrollYProgress, [0, 1], [-4, 4]);
  const headingY = useTransform(scrollYProgress, [0, 1], [20, -10]);

  return (
    <section
      ref={sectionRef}
      className="
        relative overflow-hidden
        bg-white px-5 py-20 text-[#17122a]
        sm:px-8 sm:py-5
        lg:px-10 lg:py-3
      "
    >
      {/* =====================================================
          BACKGROUND — WHITE / PURPLE / YELLOW
      ===================================================== */}

      <div className="pointer-events-none absolute inset-0">
        {/* Very subtle editorial grid */}
        <div
          className="
            absolute inset-0 opacity-[0.035]
            [background-image:linear-gradient(#5428B0_1px,transparent_1px),linear-gradient(90deg,#5428B0_1px,transparent_1px)]
            [background-size:64px_64px]
          "
        />

        {/* Purple ambient glow */}
        <motion.div
          animate={{
            x: [0, 45, -25, 0],
            y: [0, -25, 30, 0],
            scale: [1, 1.08, 0.96, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute -left-32 top-10
            h-[380px] w-[380px]
            rounded-full bg-[#5428B0]/7 blur-[120px]
          "
        />

        {/* Yellow accent glow */}
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.16, 0.28, 0.16],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute -right-24 top-[18%]
            h-[300px] w-[300px]
            rounded-full bg-[#F8CC10]/12 blur-[110px]
          "
        />

        {/* Bottom purple glow */}
        <div
          className="
            absolute -bottom-44 left-1/3
            h-[360px] w-[360px]
            rounded-full bg-[#5428B0]/5 blur-[120px]
          "
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* =====================================================
            TOP LABEL
        ===================================================== */}


        {/* =====================================================
            MAIN VISION
        ===================================================== */}

        <div
          className="
            grid items-center gap-12
            py-16 sm:py-20
            lg:grid-cols-[1.08fr_0.92fr]
            lg:gap-10 lg:py-24
          "
        >
          {/* =================================================
              LEFT — TYPOGRAPHY
          ================================================= */}

          <div className="relative">
            {/* Small floating camera */}
            <motion.div
              initial={{ opacity: 0, scale: 0.7, rotate: -15 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="
                absolute -right-2 -top-5 hidden
                h-12 w-12 items-center justify-center
                rounded-2xl border border-[#5428B0]/10
                bg-[#5428B0]/5 text-[#5428B0]
                lg:flex
              "
            >
              <Camera size={20} />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="
                text-[11px] font-bold uppercase
                tracking-[0.25em] text-[#5428B0]
              "
            >
              We believe in the power of
            </motion.p>

            <motion.h2
              style={{ y: headingY }}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.9,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                mt-5 max-w-4xl
                text-5xl font-black
                leading-[0.9] 
                text-[#17122a]
                sm:text-4xl
                md:text-5xl
                lg:text-[60px]
              "
            >
              Turning
              <br />

              <span className="relative inline-block">
                <span className="relative z-10 text-[#5428B0]">
                  ideas
                </span>

                <motion.span
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.9, delay: 0.45 }}
                  className="
                    absolute bottom-1 left-0 h-2
                    bg-[#F8CC10]/60 sm:h-3
                  "
                />
              </span>

              <br />

              <span className="text-[#17122a]">
                into <span className="text-[#5428B0]">impact.</span>
              </span>
            </motion.h2>

            {/* Accent line */}
            <motion.div
              initial={{ width: 0, opacity: 0 }}
              whileInView={{ width: 72, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.65 }}
              className="mt-7 h-1 rounded-full bg-[#F8CC10]"
            />

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="
                mt-7 max-w-xl text-sm leading-7
                text-[#71697e] sm:text-base
              "
            >
              Our vision is simple — build a creative ecosystem where
              brands, creators, and ideas don't just get noticed,
              they become impossible to ignore.
            </motion.p>

            {/* CTA */}
            <motion.a
              href="/contact"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              whileHover={{ y: -4 }}
              whileTap={{ scale: 0.96 }}
              className="
                group mt-8 inline-flex items-center gap-3
                rounded-full bg-[#5428B0]
                px-5 py-3 text-sm font-bold text-white
                shadow-[0_14px_35px_rgba(84,40,176,0.20)]
                transition-shadow duration-300
                hover:shadow-[0_18px_45px_rgba(84,40,176,0.30)]
              "
            >
              Build with us

              <span
                className="
                  flex h-7 w-7 items-center justify-center
                  rounded-full bg-[#F8CC10] text-[#5428B0]
                  transition-transform duration-300
                  group-hover:rotate-45
                "
              >
                <ArrowUpRight size={15} />
              </span>
            </motion.a>

            {/* Word chips */}
            <div className="mt-10 flex flex-wrap gap-2">
              {visionWords.map((word, index) => (
                <motion.span
                  key={word}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.55 + index * 0.08 }}
                  whileHover={{ y: -3 }}
                  className={`
                    rounded-full border px-3 py-1.5
                    text-[10px] font-semibold
                    transition-all duration-300
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
            </div>
          </div>

          {/* =================================================
              RIGHT — LIGHT ORBIT VISUAL
          ================================================= */}

          <div className="relative mx-auto w-full max-w-[540px] hidden lg:block">
            <motion.div
              style={{
                y: visualY,
                rotate: visualRotate,
              }}
              className="relative aspect-square"
            >
              {/* Purple glow */}
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
                  absolute left-1/2 top-1/2
                  h-[52%] w-[52%]
                  -translate-x-1/2 -translate-y-1/2
                  rounded-full bg-[#5428B0]/10 blur-[75px]
                "
              />

              {/* Yellow glow */}
              <motion.div
                animate={{
                  scale: [1, 1.15, 1],
                  opacity: [0.1, 0.24, 0.1],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="
                  absolute left-1/2 top-1/2
                  h-[30%] w-[30%]
                  -translate-x-1/2 -translate-y-1/2
                  rounded-full bg-[#F8CC10]/20 blur-[55px]
                "
              />

              {/* Outer orbit */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{
                  duration: 35,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="
                  absolute left-1/2 top-1/2
                  h-[92%] w-[92%]
                  -translate-x-1/2 -translate-y-1/2
                  rounded-full border border-[#5428B0]/10
                "
              >
                <span
                  className="
                    absolute left-1/2 top-[-4px]
                    h-2.5 w-2.5 -translate-x-1/2
                    rounded-full bg-[#F8CC10]
                    shadow-[0_0_18px_rgba(248,204,16,0.9)]
                  "
                />
              </motion.div>

              {/* Dashed orbit */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{
                  duration: 28,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="
                  absolute left-1/2 top-1/2
                  h-[72%] w-[72%]
                  -translate-x-1/2 -translate-y-1/2
                  rounded-full border border-dashed
                  border-[#5428B0]/15
                "
              />

              {/* Inner orbit */}
              <div
                className="
                  absolute left-1/2 top-1/2
                  h-[49%] w-[49%]
                  -translate-x-1/2 -translate-y-1/2
                  rounded-full border border-[#17122a]/10
                "
              />

              {/* Decorative camera card */}
              <motion.div
                animate={{
                  y: [0, -8, 0],
                  rotate: [-3, 2, -3],
                }}
                transition={{
                  duration: 4.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="
                  absolute left-[4%] top-[18%]
                  flex h-14 w-14 items-center justify-center
                  rounded-2xl border border-[#5428B0]/10
                  bg-white/90 text-[#5428B0]
                  shadow-[0_15px_40px_rgba(23,18,42,0.10)]
                  backdrop-blur-xl
                  sm:h-16 sm:w-16
                "
              >
                <Camera size={24} />
              </motion.div>

              {/* Decorative clapper card */}
              <motion.div
                animate={{
                  y: [0, 8, 0],
                  rotate: [4, -2, 4],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="
                  absolute right-[3%] top-[30%]
                  flex h-14 w-14 items-center justify-center
                  rounded-2xl border border-[#F8CC10]/40
                  bg-[#F8CC10]/15 text-[#5428B0]
                  shadow-[0_15px_40px_rgba(248,204,16,0.12)]
                  backdrop-blur-xl
                  sm:h-16 sm:w-16
                "
              >
                <Clapperboard size={24} />
              </motion.div>

              {/* Center */}
              <motion.div
                animate={{ scale: [1, 1.04, 1] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="
                  absolute left-1/2 top-1/2 z-20
                  flex h-[34%] w-[34%]
                  -translate-x-1/2 -translate-y-1/2
                  flex-col items-center justify-center
                  rounded-full bg-[#17122a]
                  text-center
                  shadow-[0_30px_80px_rgba(23,18,42,0.20)]
                "
              >
                <span className="text-[8px] font-semibold uppercase tracking-[0.25em] text-white/45 sm:text-[10px]">
                  We create
                </span>

                <span className="mt-1 text-xl font-black tracking-[-0.05em] text-white sm:text-2xl md:text-3xl">
                  Impact
                </span>

                <span className="mt-2 h-1 w-8 rounded-full bg-[#F8CC10]" />

                <span className="mt-3 text-[8px] font-medium uppercase tracking-[0.18em] text-white/30">
                  VidShot
                </span>
              </motion.div>

              {/* Orbit dots */}
              <motion.span
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.3, 1, 0.3],
                }}
                transition={{ duration: 2.5, repeat: Infinity }}
                className="
                  absolute left-[12%] top-[54%]
                  h-2 w-2 rounded-full bg-[#F8CC10]
                "
              />

              <motion.span
                animate={{
                  scale: [1, 1.4, 1],
                  opacity: [0.3, 1, 0.3],
                }}
                transition={{ duration: 3, repeat: Infinity }}
                className="
                  absolute right-[10%] top-[18%]
                  h-1.5 w-1.5 rounded-full bg-[#5428B0]
                "
              />

              <motion.span
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="
                  absolute bottom-[14%] left-[23%]
                  h-1.5 w-1.5 rounded-full bg-[#5428B0]/50
                "
              />
            </motion.div>
          </div>
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
