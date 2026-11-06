import React from "react";
import { motion } from "framer-motion";
import {
  Sparkles,
  Target,
  Lightbulb,
  Heart,
  Layers,
  Quote,
  MoveUpRight,
} from "lucide-react";
import AnimatedButton1 from "../../component/Button/AnimatedButton1";
import AnimatedButton from "../../component/Button/AnimatedButton";


import rohitsir from "../../Images/client/rohitsir.jpeg";
/* =========================================================
   ANIMATION
========================================================= */

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

/* =========================================================
   ABOUT PAGE
========================================================= */

export default function About() {
  return (
    <main className="overflow-hidden bg-white text-[#17122a]">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative min-h-[90vh] overflow-hidden">

        {/* Background */}

        <div className="pointer-events-none absolute inset-0">

          <div
            className="
              absolute
              -right-40
              -top-40
              h-[600px]
              w-[600px]
              rounded-full
              bg-[#5428B0]/[0.06]
              blur-[120px]
            "
          />

          <div
            className="
              absolute
              -bottom-40
              -left-40
              h-[500px]
              w-[500px]
              rounded-full
              bg-[#F8CC10]/[0.08]
              blur-[120px]
            "
          />

          {/* Grid */}

          <div
            className="
              absolute
              inset-0
              opacity-[0.025]
              [background-image:linear-gradient(#5428B0_1px,transparent_1px),linear-gradient(90deg,#5428B0_1px,transparent_1px)]
              [background-size:70px_70px]
            "
          />

        </div>

        <div
          className="
            relative
            z-10
            mx-auto
            flex
            min-h-[90vh]
            max-w-7xl
            items-center
            px-5
            py-24
            sm:px-8
            lg:px-10
          "
        >

          <div className="grid w-full items-center gap-14 lg:grid-cols-[1fr_0.85fr]">

            {/* LEFT */}

            <motion.div
              variants={stagger}
              initial="hidden"
              animate="visible"
            >

              {/* Label */}

              <motion.div
                variants={fadeUp}
                className="
                  mb-7
                  inline-flex
                  items-center
                  gap-2.5
                  rounded-full
                  border
                  border-[#5428B0]/15
                  bg-[#5428B0]/[0.04]
                  px-4
                  py-2
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-[0.2em]
                  text-[#5428B0]
                "
              >
                <span className="h-2 w-2 rounded-full bg-[#F8CC10]" />
                About VidShot
              </motion.div>

              {/* Heading */}

              <motion.h1
                variants={fadeUp}
                className="
                  max-w-5xl
                  text-5xl
                  font-black
                  leading-[0.95]

                  sm:text-5xl
                  md:text-6xl
                  lg:text-[4rem]
                "
              >
                We make brands

                <br />

                <span className="relative text-[#5428B0]">

                  impossible

                  <span
                    className="
                      absolute
                      -bottom-2
                      right-0
                      h-2
                      w-36
                      rounded-full
                      bg-[#F8CC10]

                      sm:-bottom-3
                      sm:h-3
                      sm:w-24
                    "
                  />

                </span>

                <br />

                to ignore.
              </motion.h1>

              {/* Description */}

              <motion.p
                variants={fadeUp}
                className="
                  mt-8
                  max-w-2xl
                  text-base
                  leading-7
                  text-[#71697e]

                  sm:text-lg
                  sm:leading-8
                "
              >
                VidShot is a creative production partner for
                brands, creators and ambitious teams that believe
                great ideas deserve great execution.
              </motion.p>

              {/* CTA */}

              <motion.div
                variants={fadeUp}
                className="mt-9 flex flex-wrap items-center gap-4"
              >

           <AnimatedButton
           text = "Let's Work Together"
           to = "/contact" />
           <AnimatedButton1
            text = "See our work"
            to = "/portfolio" />

               

              </motion.div>

            </motion.div>

            {/* RIGHT VISUAL */}

            <motion.div
              initial={{
                opacity: 0,
                scale: 0.85,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              transition={{
                duration: 1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                relative
                mx-auto
                aspect-square
                w-full
                max-w-[560px]
              "
            >

              {/* Orbital circles */}

              <motion.div
                animate={{ rotate: 360 }}
                transition={{
                  duration: 35,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="
                  absolute
                  inset-[8%]
                  rounded-full
                  border
                  border-[#5428B0]/15
                "
              />

              <motion.div
                animate={{ rotate: -360 }}
                transition={{
                  duration: 25,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="
                  absolute
                  inset-[18%]
                  rounded-full
                  border
                  border-dashed
                  border-[#17122a]/10
                "
              />

              {/* Center */}

              <motion.div
                animate={{
                  y: [0, -12, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="
                  absolute
                  left-1/4
                  top-1/4
                  flex
                  h-52
                  w-52
                  -translate-x-1/2
                  -translate-y-1/2
                  flex-col
                  items-center
                  justify-center
                  rounded-full
                  bg-[#17122a]
                  text-center
                  shadow-[0_35px_80px_rgba(23,18,42,0.22)]

                  sm:h-64
                  sm:w-64
                "
              >

                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/40">
                  Our mindset
                </span>

                <span className="mt-3 text-4xl font-black tracking-[-0.06em] text-white">
                  Create.
                </span>

                <span className="text-4xl font-black tracking-[-0.06em] text-[#F8CC10]">
                  Connect.
                </span>

                <span className="mt-3 h-1 w-10 rounded-full bg-[#5428B0]" />

              </motion.div>

              {/* Floating cards */}

              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                }}
                className="
                  absolute
                  left-[3%]
                  top-[23%]
                  flex
                  items-center
                  gap-2
                  rounded-2xl
                  border
                  border-white
                  bg-white/90
                  px-3
                  py-2
                  text-xs
                  font-bold
                  shadow-[0_15px_40px_rgba(23,18,42,0.10)]
                  backdrop-blur-xl
                "
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#5428B0] text-white">
                  <Sparkles size={15} />
                </span>
                Ideas
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                }}
                className="
                  absolute
                  bottom-[20%]
                  right-[4%]
                  flex
                  items-center
                  gap-2
                  rounded-2xl
                  border
                  border-white
                  bg-white/90
                  px-3
                  py-2
                  text-xs
                  font-bold
                  shadow-[0_15px_40px_rgba(23,18,42,0.10)]
                  backdrop-blur-xl
                "
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#F8CC10] text-[#17122a]">
                  <Target size={15} />
                </span>
                Impact
              </motion.div>

              {/* Yellow dot */}

              <motion.span
                animate={{
                  scale: [1, 1.4, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
                className="
                  absolute
                  right-[14%]
                  top-[12%]
                  h-3
                  w-3
                  rounded-full
                  bg-[#F8CC10]
                  shadow-[0_0_20px_rgba(248,204,16,0.8)]
                "
              />

            </motion.div>

          </div>

        </div>
      </section>

      {/* =====================================================
          MARQUEE
      ===================================================== */}

      <section className="border-y border-[#17122a]/[0.07] bg-[#F8F8F7] py-5">

        <div className="overflow-hidden">

          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear",
            }}
            className="
              flex
              w-max
              items-center
              gap-8
              whitespace-nowrap
            "
          >

            {[
              "CREATIVE PRODUCTION",
              "CONTENT",
              "DESIGN",
              "STORYTELLING",
              "BRAND",
              "SOCIAL",
              "VIDEO",
              "IDEAS",
              "CREATIVE PRODUCTION",
              "CONTENT",
              "DESIGN",
              "STORYTELLING",
            ].map((item, index) => (
              <React.Fragment key={index}>

                <span
                  className="
                    text-xs
                    font-black
                    tracking-[0.18em]
                    text-[#17122a]/40
                  "
                >
                  {item}
                </span>

                <span className="text-[#F8CC10]">
                  ✦
                </span>

              </React.Fragment>
            ))}

          </motion.div>

        </div>
      </section>

{/* =====================================================
    MEET OUR FOUNDER
===================================================== */}

<section className="relative overflow-hidden bg-[#F8F8F7] py-24 sm:py-32">

  {/* Background Decoration */}
  <div className="pointer-events-none absolute -right-40 top-0 h-96 w-96 rounded-full bg-[#5428B0]/[0.06] blur-[100px]" />

  <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

    {/* Section Heading */}
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="mb-16"
    >
      <div className="mb-5 flex items-center gap-3">
        <span className="h-2 w-2 rounded-full bg-[#F8CC10]" />

        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#5428B0]">
          The Person Behind VidShot
        </span>
      </div>

      <h2 className="max-w-3xl text-4xl font-black leading-[0.95] tracking-[-0.06em] sm:text-5xl md:text-6xl">
        Meet the mind behind
        <span className="text-[#5428B0]"> the vision.</span>
      </h2>
    </motion.div>

    {/* Founder Content */}
    <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">

      {/* Founder Image */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative mx-auto w-full max-w-[480px]"
      >

        {/* Yellow Background */}
        <div className="absolute -bottom-5 -right-5 h-full w-full rounded-[30px] bg-[#F8CC10]" />

        <div className="relative aspect-[4/5] overflow-hidden rounded-[30px] bg-[#17122a]">

          <img
            src= {rohitsir}
            alt="Rohit Kumar Singh - Founder and CEO of VidShot Media"
            className="h-full w-full object-cover object-top"
          />

          {/* Image Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#17122a]/70 via-transparent to-transparent" />

          <div className="absolute bottom-7 left-7">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#F8CC10]">
              Founder & CEO
            </span>

            <h3 className="mt-2 text-3xl font-black text-white">
              Rohit Kumar Singh
            </h3>
          </div>

        </div>

        {/* Floating Badge */}
        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="absolute -left-5 top-12 rounded-2xl border border-white bg-white px-5 py-4 shadow-xl"
        >
          <Sparkles className="mb-2 text-[#5428B0]" size={22} />

          <p className="text-xs font-black text-[#17122a]">
            Creative Vision
          </p>

          <p className="text-[10px] text-[#71697e]">
            Ideas into Impact
          </p>
        </motion.div>

      </motion.div>

      {/* Founder Information */}
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="relative"
      >

        <motion.span
          variants={fadeUp}
          className="text-xs font-bold uppercase tracking-[0.2em] text-[#5428B0]"
        >
          A Message From Our Founder
        </motion.span>

        <motion.h3
          variants={fadeUp}
          className="mt-5 text-3xl font-black leading-tight tracking-[-0.05em] sm:text-4xl"
        >
          Rohit Kumar Singh

          <span className="mt-2 block text-lg font-semibold tracking-normal text-[#5428B0]">
            Founder & CEO, VidShot Media
          </span>
        </motion.h3>

        <motion.p
          variants={fadeUp}
          className="mt-8 text-lg leading-8 text-[#17122a]"
        >
          Every great brand begins with an idea.
          But turning that idea into something people
          remember takes creativity, strategy and execution.
        </motion.p>

        <motion.p
          variants={fadeUp}
          className="mt-5 text-base leading-8 text-[#71697e]"
        >
          At VidShot Media, our vision is to bring creative
          thinking, storytelling and digital innovation
          together to help brands build meaningful connections
          with their audiences.
        </motion.p>

        <motion.p
          variants={fadeUp}
          className="mt-5 text-base leading-8 text-[#71697e]"
        >
          We believe that content should do more than
          capture attention. It should communicate a story,
          create an impact and help businesses grow.
        </motion.p>

        {/* Signature */}
        <motion.div
          variants={fadeUp}
          className="mt-10 flex items-center gap-4 border-t border-[#17122a]/10 pt-7"
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#5428B0] text-xl font-black text-[#F8CC10]">
            R
          </div>

          <div>
            <p className="font-black text-[#17122a]">
              Rohit Kumar Singh
            </p>

            <p className="mt-1 text-xs text-[#71697e]">
              Founder & CEO
            </p>
          </div>
        </motion.div>

      </motion.div>

    </div>
  </div>
</section>
      {/* =====================================================
          OUR STORY
      ===================================================== */}

      <section className="bg-white py-24 sm:py-32">

        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

          <div className="grid gap-14 lg:grid-cols-2 lg:gap-24">

            {/* Heading */}

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >

              <div className="mb-5 flex items-center gap-3">

                <span className="h-2 w-2 rounded-full bg-[#F8CC10]" />

                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#5428B0]">
                  Our story
                </span>

              </div>

              <h2
                className="
                  max-w-xl
                  text-4xl
                  font-black
                  leading-[0.95]
                  tracking-[-0.06em]

                  sm:text-5xl
                  md:text-6xl
                "
              >
                Built around one simple belief:

                <span className="text-[#5428B0]">
                  {" "}
                  good ideas deserve attention.
                </span>
              </h2>

            </motion.div>

            {/* Copy */}

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="space-y-6"
            >

              <p className="text-lg leading-8 text-[#17122a]">
                The internet is full of content. Very little of it
                actually makes people stop.
              </p>

              <p className="text-base leading-8 text-[#71697e]">
                That's where VidShot comes in. We bring together
                strategy, production, design and storytelling to
                create content that doesn't simply fill a feed —
                it gives brands something worth remembering.
              </p>

              <p className="text-base leading-8 text-[#71697e]">
                From a single reel to a complete brand campaign,
                we work closely with our clients to understand the
                idea first, then find the most powerful way to
                bring it to life.
              </p>

              <div className="flex items-center gap-3 pt-2">

                <div className="h-px w-12 bg-[#F8CC10]" />

                <span className="text-xs font-bold uppercase tracking-[0.15em] text-[#5428B0]">
                  Ideas → Stories → Impact
                </span>

              </div>

            </motion.div>

          </div>

        </div>

      </section>

      {/* =====================================================
          NUMBERS
      ===================================================== */}

      <section className="bg-[#17122a] py-20 text-white sm:py-24">

        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

          <div className="grid grid-cols-2 gap-y-12 md:grid-cols-4">

            {[
              ["50+", "Brands worked with"],
              ["500+", "Pieces of content"],
              ["10+", "Markets reached"],
              ["∞", "Ideas created"],
            ].map(([number, label], index) => (

              <motion.div
                key={label}
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  delay: index * 0.1,
                }}
                className="relative px-4 first:pl-0"
              >

                <div
                  className={`
                    text-4xl
                    font-black
                    tracking-[-0.05em]

                    sm:text-5xl

                    ${
                      index % 2 === 0
                        ? "text-[#F8CC10]"
                        : "text-white"
                    }
                  `}
                >
                  {number}
                </div>

                <p className="mt-2 max-w-[150px] text-xs leading-5 text-white/45">
                  {label}
                </p>

                {index !== 3 && (
                  <span className="absolute right-0 top-0 hidden h-14 w-px bg-white/10 md:block" />
                )}

              </motion.div>

            ))}

          </div>

        </div>

      </section>

      {/* =====================================================
          WHAT WE BELIEVE
      ===================================================== */}

      <section className="bg-[#F8F8F7] py-24 sm:py-32">

        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

          <div className="mb-14 max-w-3xl">

            <div className="mb-5 flex items-center gap-3">

              <span className="h-2 w-2 rounded-full bg-[#F8CC10]" />

              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#5428B0]">
                What we believe
              </span>

            </div>

            <h2
              className="
                text-4xl
                font-black
                leading-[0.95]
                tracking-[-0.06em]

                sm:text-5xl
                md:text-6xl
              "
            >
              The principles behind
              <span className="text-[#5428B0]">
                {" "}every frame.
              </span>
            </h2>

          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">

            {[
              {
                icon: Lightbulb,
                number: "01",
                title: "Ideas first",
                text: "Great execution starts with a clear idea. We solve the story before we shoot it.",
              },
              {
                icon: Target,
                number: "02",
                title: "Purpose matters",
                text: "Every frame should have a reason. We create for attention, connection and results.",
              },
              {
                icon: Heart,
                number: "03",
                title: "People first",
                text: "We collaborate closely, communicate openly and treat every project like our own.",
              },
              {
                icon: Layers,
                number: "04",
                title: "Details matter",
                text: "The small things create the big difference. We obsess over the final 10%.",
              },
            ].map((item, index) => {

              const Icon = item.icon;

              return (
                <motion.div
                  key={item.number}
                  initial={{
                    opacity: 0,
                    y: 35,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.2,
                  }}
                  transition={{
                    delay: index * 0.08,
                  }}
                  whileHover={{
                    y: -8,
                  }}
                  className="
                    group
                    relative
                    overflow-hidden
                    rounded-[25px]
                    border
                    border-[#17122a]/[0.07]
                    bg-white
                    p-6

                    transition-shadow
                    duration-500

                    hover:shadow-[0_20px_50px_rgba(23,18,42,0.08)]
                  "
                >

                  <div className="flex items-center justify-between">

                    <span className="text-[10px] font-bold tracking-[0.15em] text-[#71697e]">
                      {item.number}
                    </span>

                    <span
                      className="
                        flex
                        h-10
                        w-10
                        items-center
                        justify-center
                        rounded-xl
                        bg-[#5428B0]/[0.07]
                        text-[#5428B0]

                        transition-all
                        duration-500

                        group-hover:bg-[#5428B0]
                        group-hover:text-white
                        group-hover:rotate-6
                      "
                    >
                      <Icon size={18} />
                    </span>

                  </div>

                  <h3 className="mt-8 text-xl font-black tracking-[-0.04em]">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-[#71697e]">
                    {item.text}
                  </p>

                  <div className="mt-7 h-1 w-8 rounded-full bg-[#F8CC10] transition-all duration-500 group-hover:w-16" />

                </motion.div>
              );
            })}

          </div>

        </div>

      </section>

      {/* =====================================================
          HOW WE WORK
      ===================================================== */}

      <section className="bg-white py-24 sm:py-32">

        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

          <div className="grid gap-14 lg:grid-cols-[0.75fr_1.25fr] lg:gap-24">

            <div>

              <div className="mb-5 flex items-center gap-3">

                <span className="h-2 w-2 rounded-full bg-[#F8CC10]" />

                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#5428B0]">
                  Our process
                </span>

              </div>

              <h2
                className="
                  text-4xl
                  font-black
                  leading-[0.95]
                  tracking-[-0.06em]

                  sm:text-5xl
                  md:text-6xl
                "
              >
                Simple process.

                <br />

                <span className="text-[#5428B0]">
                  Serious output.
                </span>
              </h2>

              <p className="mt-6 max-w-md text-base leading-7 text-[#71697e]">
                We keep the process collaborative, transparent and
                focused on creating work that actually moves your
                brand forward.
              </p>

            </div>

            <div className="space-y-0">

              {[
                [
                  "01",
                  "Discover",
                  "We understand your brand, audience, goals and the problem we're solving.",
                ],
                [
                  "02",
                  "Define",
                  "We turn the initial idea into a clear creative direction and production plan.",
                ],
                [
                  "03",
                  "Create",
                  "Our team handles production, design, editing, motion and everything in between.",
                ],
                [
                  "04",
                  "Deliver",
                  "You get polished, platform-ready content built to perform.",
                ],
              ].map(([number, title, text], index) => (

                <motion.div
                  key={number}
                  initial={{
                    opacity: 0,
                    x: 30,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    delay: index * 0.1,
                  }}
                  className="
                    group
                    grid
                    grid-cols-[55px_1fr]
                    gap-5
                    border-t
                    border-[#17122a]/10
                    py-7

                    md:grid-cols-[70px_1fr]
                  "
                >

                  <span
                    className="
                      text-sm
                      font-black
                      text-[#5428B0]
                    "
                  >
                    {number}
                  </span>

                  <div>

                    <h3
                      className="
                        text-xl
                        font-black
                        tracking-[-0.04em]
                        transition-colors
                        group-hover:text-[#5428B0]
                      "
                    >
                      {title}
                    </h3>

                    <p className="mt-2 max-w-xl text-sm leading-6 text-[#71697e]">
                      {text}
                    </p>

                  </div>

                </motion.div>

              ))}

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          QUOTE
      ===================================================== */}

      <section className="relative overflow-hidden bg-[#5428B0] py-24 sm:py-32">

        {/* Decorative circles */}

        <div
          className="
            pointer-events-none
            absolute
            -right-32
            -top-32
            h-80
            w-80
            rounded-full
            border
            border-white/10
          "
        />

        <div
          className="
            pointer-events-none
            absolute
            -bottom-40
            -left-40
            h-96
            w-96
            rounded-full
            border
            border-[#F8CC10]/20
          "
        />

        <div className="relative mx-auto max-w-5xl px-5 text-center sm:px-8">

          <Quote
            className="
              mx-auto
              h-10
              w-10
              text-[#F8CC10]
            "
          />

          <motion.blockquote
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            className="
              mt-7
              text-3xl
              font-black
              leading-[1.1]
              tracking-[-0.05em]
              text-white

              sm:text-4xl

              md:text-5xl
            "
          >
            "The goal isn't to make more content.
            It's to make something worth remembering."
          </motion.blockquote>

          <div className="mt-8 flex items-center justify-center gap-3">

            <span className="h-px w-8 bg-[#F8CC10]" />

            <span className="text-xs font-bold uppercase tracking-[0.2em] text-white/60">
              The VidShot philosophy
            </span>

            <span className="h-px w-8 bg-[#F8CC10]" />

          </div>

        </div>

      </section>

      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <section className="bg-white py-24 sm:py-32">

        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

          <div
            className="
              relative
              overflow-hidden
              rounded-[35px]
              bg-[#F8F8F7]
              px-6
              py-16
              text-center

              sm:px-10
              sm:py-20
            "
          >

            {/* Purple circle */}

            <div
              className="
                pointer-events-none
                absolute
                -right-20
                -top-20
                h-64
                w-64
                rounded-full
                bg-[#5428B0]/10
                blur-3xl
              "
            />

            {/* Yellow circle */}

            <div
              className="
                pointer-events-none
                absolute
                -bottom-20
                -left-20
                h-56
                w-56
                rounded-full
                bg-[#F8CC10]/15
                blur-3xl
              "
            />

            <div className="relative">

              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-[#5428B0] text-[#F8CC10]">
                <MoveUpRight size={20} />
              </div>

              <h2
                className="
                  mx-auto
                  mt-7
                  max-w-3xl
                  text-4xl
                  font-black
                  leading-[0.95]
                  tracking-[-0.06em]

                  sm:text-5xl
                  md:text-6xl
                "
              >
                Have an idea?

                <br />

                <span className="text-[#5428B0]">
                  Let's make it real.
                </span>
              </h2>

              <p className="mx-auto mt-5 mb-3 max-w-xl text-base leading-7 text-[#71697e]">
                Tell us what you're building. We'll bring the
                creative thinking, production and energy to make
                it happen.
              </p>
              <AnimatedButton
                text = "Start a Project"
                to = "/contact" />
           

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}