import React, { useEffect, useRef } from "react";
import {
  motion,
  useMotionValue,
  useTransform,
  useInView,
  animate,
} from "framer-motion";

/* -----------------------------------------
   METRICS DATA
----------------------------------------- */

const metrics = [
  {
    value: 120,
    suffix: "+",
    label: "brand stories launched",
  },
  {
    value: 4.9,
    suffix: "/5",
    decimals: 1,
    label: "average client rating",
  },
  {
    value: 8,
    suffix: "x",
    label: "faster campaign turnaround",
  },
  {
    value: 28,
    suffix: "K",
    label: "monthly views generated",
  },
];

/* -----------------------------------------
   COUNT UP ANIMATION
----------------------------------------- */

function CountUp({ value, suffix = "", decimals = 0 }) {
  const ref = useRef(null);

  // Trigger only once when visible
  const isInView = useInView(ref, {
    once: true,
    amount: 0.6,
  });

  const count = useMotionValue(0);

  const formattedValue = useTransform(count, (latest) => {
    return `${latest.toFixed(decimals)}${suffix}`;
  });

  useEffect(() => {
    if (!isInView) return;

    const controls = animate(count, value, {
      duration: 2,
      ease: [0.16, 1, 0.3, 1],
    });

    return () => controls.stop();
  }, [isInView, count, value]);

  return (
    <motion.span ref={ref}>
      {formattedValue}
    </motion.span>
  );
}

/* -----------------------------------------
   MAIN SECTION
----------------------------------------- */

export default function Homems() {
  return (
    <section className="
      grid
      grid-cols-2
      gap-x-4
      gap-y-10
      xl:grid-cols-4
      xl:gap-8
    ">

      {metrics.map((item, index) => (
        <motion.div
          key={item.label}
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 0.6,
            delay: index * 0.12,
          }}
          className="
            group
            flex
            flex-col
            items-center
            justify-center
            px-2
            py-3
            text-center
          "
        >

          {/* Animated Metric Value */}

          <h3 className="
            text-3xl
            font-semibold
            tracking-[-0.06em]
            text-[#111111]
            transition-transform
            duration-300
            group-hover:scale-105
            sm:text-4xl
            lg:text-[42px]
          ">
            <CountUp
              value={item.value}
              suffix={item.suffix}
              decimals={item.decimals || 0}
            />
          </h3>

          {/* Metric Label */}

          <p className="
            mt-3
            max-w-[180px]
            text-xs
            font-medium
            leading-5
            text-[#777777]
            sm:text-sm
          ">
            {item.label}
          </p>

        </motion.div>
      ))}

    </section>
  );
}