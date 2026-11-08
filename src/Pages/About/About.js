import React, { useState , useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import {
  FiArrowUpRight,
  FiPlus,
  FiMinus,
  FiTarget,
   FiArrowLeft,
  FiArrowRight,
  FiLayers,
  FiZap,
} from "react-icons/fi";

import AnimatedButton from "../../component/Button/AnimatedButton";

import rohitsir from "../../Images/client/rohitsir.jpeg";


const missionSlides = [
  {
    id: 1,
    label: "Our Mission",
    title: "Making every idea",
    highlight: "worth remembering.",
    description:
      "We help brands communicate their stories through meaningful creativity, powerful visuals and thoughtful execution.",
    image:
      "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1800",
  },
  {
    id: 2,
    label: "Our Vision",
    title: "Building brands",
    highlight: "that inspire.",
    description:
      "Our vision is to create meaningful brand experiences that connect businesses with the people who matter.",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1800",
  },
  {
    id: 3,
    label: "Our Philosophy",
    title: "Creativity with",
    highlight: "a purpose.",
    description:
      "We combine creative thinking, storytelling and strategy to turn ambitious ideas into impactful experiences.",
    image:
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=1800",
  },
];


/* =========================================
   ANIMATION VARIANTS
========================================= */

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
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


/* =========================================
   IMAGE DATA
========================================= */

const galleryImages = [
  {
    image:
      "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800",
    alt: "Creative team collaborating",
    className: "h-[150px] md:h-[190px]",
  },
  {
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800",
    alt: "Modern creative workspace",
    className: "h-[120px] md:h-[155px] mt-8",
  },
  {
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800",
    alt: "Team brainstorming",
    className: "h-[170px] md:h-[220px]",
  },
  {
    image:
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=800",
    alt: "Creative office environment",
    className: "h-[125px] md:h-[165px] mt-8",
  },
  {
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800",
    alt: "Team working together",
    className: "h-[150px] md:h-[190px]",
  },
];


/* =========================================
   STATISTICS
========================================= */

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


/* =========================================
   CREATIVE CAPABILITIES
========================================= */

const capabilities = [
  {
    icon: FiZap,
    title: "Creative Thinking",
    description:
      "Fresh ideas and creative directions that make your brand stand out.",
  },
  {
    icon: FiTarget,
    title: "Strategic Execution",
    description:
      "Every creative decision is aligned with your business goals.",
  },
  {
    icon: FiLayers,
    title: "Complete Production",
    description:
      "From planning and shooting to editing, design and distribution.",
  },
];


/* =========================================
   FAQ DATA
========================================= */

const faqs = [
  {
    question: "What services does VidShot Media provide?",
    answer:
      "We provide video production, video editing, social media management, creative design, content creation, Meta Ads and performance marketing.",
  },
  {
    question: "How do we start working together?",
    answer:
      "Simply contact us through our inquiry form. We'll understand your requirements, discuss your goals and suggest the right creative solution.",
  },
  {
    question: "Do you work with startups and small businesses?",
    answer:
      "Yes. We work with startups, growing businesses, established brands and creators looking to improve their digital presence.",
  },
  {
    question: "Can you manage our complete social media presence?",
    answer:
      "Yes. We can help with content strategy, creative production, editing, publishing and performance-focused social media management.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "Timelines depend on the project scope. We'll share a clear production schedule and delivery expectations before starting.",
  },
];


/* =========================================
   ABOUT PAGE
========================================= */

export default function About() {
  const [activeFaq, setActiveFaq] = useState(0);
  const [activeSlide, setActiveSlide] = useState(0);

const nextSlide = () => {
  setActiveSlide((prev) => (prev + 1) % missionSlides.length);
};

const prevSlide = () => {
  setActiveSlide(
    (prev) => (prev - 1 + missionSlides.length) % missionSlides.length
  );
};

useEffect(() => {
  const timer = setInterval(() => {
    setActiveSlide((prev) => (prev + 1) % missionSlides.length);
  }, 5000);

  return () => clearInterval(timer);
}, []);



  return (
    <main className="overflow-hidden bg-[#FAFAFA] text-[#171717]">

      {/* =========================================
          01. HERO / IMAGE COLLAGE
      ========================================= */}

      <section className="pt-24 pb-14 md:pt-28 md:pb-20">
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
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

          {/* Heading */}

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
              About <span className="text-[#5428B0]">Us.</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="text-sm text-gray-500 mt-4 max-w-md mx-auto leading-relaxed"
            >
              A creative team turning ideas into stories, experiences and
              meaningful brand connections.
            </motion.p>

          </motion.div>


          {/* Uneven Image Collage */}

          <div className="
            grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5
            gap-3 md:gap-5
            items-center
          ">

            {galleryImages.map((item, index) => (

              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  y: 35,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
                className={`
                  relative overflow-hidden
                  rounded-2xl
                  ${item.className}
                  ${index === 4 ? "hidden lg:block" : ""}
                `}
              >

                <img
                  src={item.image}
                  alt={item.alt}
                  className="
                    w-full h-full object-cover
                    transition-transform duration-700
                    hover:scale-110
                  "
                />

                <div className="absolute inset-0 bg-black/5 hover:bg-transparent transition-colors" />

              </motion.div>

            ))}

          </div>

        </div>

      </section>


      {/* =========================================
          02. INTRODUCTION
      ========================================= */}

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



    {/* =========================================
    03. MISSION / VISION CAROUSEL
========================================= */}

<section className="py-16 md:py-20 bg-white">

  <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

    <div className="
      relative
      h-[420px] md:h-[500px] lg:h-[540px]
      overflow-hidden
      rounded-[24px]
      group
      bg-black
    ">

      <AnimatePresence mode="wait">

        <motion.div
          key={missionSlides[activeSlide].id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="absolute inset-0"
        >

          {/* Background Image */}

          <motion.img
            src={missionSlides[activeSlide].image}
            alt={missionSlides[activeSlide].label}
            initial={{ scale: 1.08 }}
            animate={{ scale: 1 }}
            transition={{ duration: 5, ease: "linear" }}
            className="
              absolute inset-0
              w-full h-full
              object-cover
            "
          />

          {/* Dark Gradient */}

          <div className="
            absolute inset-0
            bg-gradient-to-t
            from-black/90
            via-black/30
            to-black/10
          " />

          {/* Content */}

          <div className="
            absolute bottom-0 left-0
            w-full
            p-6 md:p-12
            flex flex-col md:flex-row
            md:items-end md:justify-between
            gap-8
          ">

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="max-w-2xl"
            >

              <p className="
                text-[10px] uppercase
                tracking-[3px]
                font-bold
                text-[#F8CC10]
                mb-4
              ">
                {missionSlides[activeSlide].label}
              </p>

              <h2 className="
                text-3xl sm:text-4xl
                md:text-5xl lg:text-6xl
                font-bold
                text-white
                tracking-tight
                leading-[1.1]
              ">
                {missionSlides[activeSlide].title}

                <br />

                <span className="text-[#F8CC10]">
                  {missionSlides[activeSlide].highlight}
                </span>
              </h2>

              <p className="
                text-xs md:text-sm
                text-white/70
                mt-5
                leading-relaxed
                max-w-md
              ">
                {missionSlides[activeSlide].description}
              </p>

            </motion.div>


            {/* Navigation */}

            <div className="
              flex items-center
              gap-3
              shrink-0
            ">

              {/* Previous */}

              <button
                type="button"
                onClick={prevSlide}
                aria-label="Previous slide"
                className="
                  w-11 h-11
                  rounded-full
                  border border-white/40
                  text-white
                  flex items-center justify-center
                  hover:bg-white
                  hover:text-[#5428B0]
                  transition-all duration-300
                "
              >
                <FiArrowLeft size={18} />
              </button>

              {/* Next */}

              <button
                type="button"
                onClick={nextSlide}
                aria-label="Next slide"
                className="
                  w-11 h-11
                  rounded-full
                  bg-[#F8CC10]
                  text-[#5428B0]
                  flex items-center justify-center
                  hover:bg-[#5428B0]
                  hover:text-white
                  transition-all duration-300
                "
              >
                <FiArrowRight size={18} />
              </button>

            </div>

          </div>

        </motion.div>

      </AnimatePresence>


      {/* Slide Indicators */}

      <div className="
        absolute top-6 right-6
        md:top-9 md:right-10
        z-20
        flex items-center gap-2
      ">

        {missionSlides.map((slide, index) => (

          <button
            key={slide.id}
            type="button"
            onClick={() => setActiveSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
            aria-current={activeSlide === index ? "true" : undefined}
            className={`
              h-1.5 rounded-full
              transition-all duration-300
              ${
                activeSlide === index
                  ? "w-9 bg-[#F8CC10]"
                  : "w-3 bg-white/50 hover:bg-white"
              }
            `}
          />

        ))}

      </div>


      {/* Slide Counter */}

      <div className="
        absolute top-6 left-6
        md:top-9 md:left-10
        z-20
        text-white text-xs
        font-medium tracking-widest
      ">

        <span className="text-[#F8CC10]">
          0{activeSlide + 1}
        </span>

        <span className="text-white/50 mx-2">/</span>

        <span className="text-white/60">
          0{missionSlides.length}
        </span>

      </div>

    </div>

  </div>

</section>


      {/* =========================================
          04. FOUNDER SECTION
      ========================================= */}

      <section className="py-20 md:py-28 bg-[#F7F7F9]">

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
                  bg-[#5428B0]
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


      {/* =========================================
          05. WHAT WE DO
      ========================================= */}

      <section className="py-20 md:py-28 bg-white">

        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-5 mb-12">

            <div>

              <p className="text-[10px] uppercase tracking-[3px] font-bold text-[#5428B0] mb-3">
                Our Approach
              </p>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
                Creativity meets
                <span className="text-[#5428B0]"> strategy.</span>
              </h2>

            </div>

            <p className="text-sm text-gray-500 leading-6 max-w-sm">
              We combine creative ideas with strategic thinking to create
              work that looks good and serves a purpose.
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
                    bg-[#F8F8FA]
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


      {/* =========================================
          06. HOW WE WORK
      ========================================= */}

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


      {/* =========================================
          07. FAQ SECTION
      ========================================= */}

      <section className="py-20 md:py-28 bg-white">

        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

          <div className="grid lg:grid-cols-[0.7fr_1.3fr] gap-12 lg:gap-20">

            {/* Left */}

            <div>

              <p className="text-[10px] uppercase tracking-[3px] font-bold text-[#5428B0] mb-3">
                FAQ's
              </p>

              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
                Still have
                <span className="text-[#5428B0]"> questions?</span>
              </h2>

              <p className="text-sm text-gray-500 leading-7 mt-5 max-w-sm">
                Find answers to common questions about our services,
                projects and creative process.
              </p>

              <div className="mt-7">
                <AnimatedButton
                  text="Contact Us"
                  to="/contact"
                />
              </div>

            </div>


            {/* Right: Accordion */}

            <div className="border-t border-gray-200">

              {faqs.map((faq, index) => (

                <div
                  key={faq.question}
                  className="border-b border-gray-200"
                >

                  <button
                    type="button"
                    onClick={() =>
                      setActiveFaq(activeFaq === index ? -1 : index)
                    }
                    aria-expanded={activeFaq === index}
                    className="
                      w-full
                      flex items-center justify-between
                      gap-5
                      py-6
                      text-left
                    "
                  >

                    <span className="
                      text-sm md:text-base
                      font-semibold
                      text-[#171717]
                    ">
                      {faq.question}
                    </span>

                    <span className="
                      w-8 h-8
                      shrink-0
                      rounded-full
                      bg-[#F7F5FB]
                      flex items-center justify-center
                      text-[#5428B0]
                    ">
                      {activeFaq === index
                        ? <FiMinus size={16} />
                        : <FiPlus size={16} />
                      }
                    </span>

                  </button>

                  <AnimatePresence initial={false}>

                    {activeFaq === index && (

                      <motion.div
                        initial={{
                          height: 0,
                          opacity: 0,
                        }}
                        animate={{
                          height: "auto",
                          opacity: 1,
                        }}
                        exit={{
                          height: 0,
                          opacity: 0,
                        }}
                        transition={{
                          duration: 0.3,
                        }}
                        className="overflow-hidden"
                      >

                        <p className="
                          text-sm
                          leading-7
                          text-gray-500
                          pb-6
                          pr-10
                        ">
                          {faq.answer}
                        </p>

                      </motion.div>

                    )}

                  </AnimatePresence>

                </div>

              ))}

            </div>

          </div>

        </div>

      </section>


      {/* =========================================
          08. FINAL CTA
      ========================================= */}

      <section className="bg-[#FAFAFA] py-16 md:py-24">

        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

          <div className="
            relative
            overflow-hidden
            rounded-[25px]
            bg-[#171717]
            px-6 py-16
            md:px-14 md:py-20
            text-center
          ">

            {/* Decorative Circle */}

            <div className="
              absolute
              -top-40 -right-20
              w-96 h-96
              rounded-full
              border border-white/10
            " />

            <div className="
              absolute
              -bottom-40 -left-20
              w-96 h-96
              rounded-full
              border border-[#F8CC10]/20
            " />

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

              <AnimatedButton
                text="Start a Project"
                to="/contact"
              />

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}