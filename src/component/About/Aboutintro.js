
import React from "react";
import { motion, useMotionValue, useInView, animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const metrics = [
  {
    value: 200,
    suffix: "+",
    label: "Monthly Reels Posts",
  },
  {
    value: 30,
    suffix: "+",
    label: "Monthly Long-Form Video Posts",
  },
  {
    value: 4.7,
    suffix: "/5",
    decimals: 1,
    label: "Average Client Rating",
  },
  {
    value: 7,
    suffix: "M+",
    label: "Monthly Views Generated",
  },
];

function AnimatedCounter({ value, suffix = "", decimals = 0 }) {
  const ref = useRef(null);
  const motionValue = useMotionValue(0);
  const isInView = useInView(ref, { once: true });
  const [displayValue, setDisplayValue] = useState("0");

  useEffect(() => {
    const unsubscribe = motionValue.on("change", (latest) => {
      setDisplayValue(latest.toFixed(decimals));
    });

    return unsubscribe;
  }, [motionValue, decimals]);

  useEffect(() => {
    if (!isInView) return;

    const controls = animate(motionValue, value, {
      duration: 2,
      ease: "easeOut",
    });

    return () => controls.stop();
  }, [isInView, motionValue, value]);

  return (
    <h3
      ref={ref}
      className="text-3xl md:text-4xl font-bold tracking-tight text-[#171717]"
    >
      {displayValue}
      {suffix}
    </h3>
  );
}

export default function Aboutintro() {
  return (
    <section className="py-14 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

        {/* Introduction */}
        <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-8 lg:gap-20 items-start">

          <div>
            <p className="text-[10px] uppercase tracking-[3px] font-bold text-[#5428B0] mb-4">
              Who We Are
            </p>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-[1.08] tracking-tight">
              Your Creative Partner, From
              <span className="text-[#5428B0]">
                {" "}First Idea to Final Execution.
              </span>
            </h2>
          </div>

          <div className="lg:pt-8">

            <p className="text-base md:text-lg text-gray-700 leading-relaxed">
              VidShot Media Production works with brands, creators, and
              ambitious businesses that believe great ideas deserve great
              execution.
            </p>

            <p className="text-sm md:text-base text-gray-500 leading-7 mt-5">
              We bring together creative thinking, video production,
              storytelling, design, and digital marketing under one roof,
              so you spend less time coordinating and more time building
              your brand.
            </p>

            <div className="flex items-center gap-3 mt-7">
              <span className="h-[2px] w-10 bg-[#F8CC10]" />

              <span className="text-[10px] font-bold uppercase tracking-[2px] text-[#5428B0]">
                Ideas into Impact
              </span>
            </div>

          </div>
        </div>

        {/* Statistics / Metrics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-5 mt-12 md:mt-16">

          {metrics.map((item, index) => (
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
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.6,
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
                hover:-translate-y-1
                transition-all duration-300
              "
            >
              <AnimatedCounter
                value={item.value}
                suffix={item.suffix}
                decimals={item.decimals || 0}
              />

              <p className="text-[11px] md:text-xs text-gray-500 mt-5">
                {item.label}
              </p>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}
