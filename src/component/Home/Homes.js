import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  Play,
  Smartphone,
  Palette,
  PenTool,
  ArrowUpRight,
  Target,
} from "lucide-react";

import videoediting from "../../Images/Services/Video_editing.jpeg"
import social_media from "../../Images/Services/social media.png"
import metaads from "../../Images/Services/metaads.png"
import graphic from "../../Images/Services/Graphic.jpeg"
import content from "../../Images/Services/content.jpeg"

/* =========================================================
   SERVICES DATA
========================================================= */

const services = [
  {
    id: 1,
    number: "01",
    title: "Video Editing",
    shortTitle: "Video Editing",
    description:
      "From brand films to cinematic campaigns, we create videos that tell your story and make people stop scrolling.",
    tags: [
      "Brand Films",
      "Commercials",
      "Product Videos",
      "Corporate Films",
    ],
    icon: Play,
    image:
      videoediting
  },

  {
    id: 2,
    number: "02",
    title: "Social Media Management",
    shortTitle: "Social Media",
    description:
      "Scroll-stopping short-form content designed to build attention, engagement and a recognizable brand presence.",
    tags: [
      "Reels",
      "Shorts",
      "Social Ads",
      "Content Strategy",
    ],
    icon: Smartphone,
    image:
      social_media
  },

  {
    id: 3,
    number: "03",
    title: "Creative & Design",
    shortTitle: "Graphic Design",
    description:
      "Visual identities and creative systems that give your brand a distinct personality across every touchpoint.",
    tags: [
      "Brand Identity",
      "Motion Design",
      "Graphic Design",
      "Creative Direction",
    ],
    icon: Palette,
    image:
      graphic
  },
{
  id: 4,
  number: "04",
  title: "Content Writing",
  shortTitle: "Content",
  description:
    "Create engaging, compelling, and SEO-friendly content that communicates your brand message, connects with your audience, and turns ideas into meaningful engagement.",
  tags: [
    "Website Content",
    "SEO Writing",
    "Social Media Copy",
    "Blog Writing",
    "Brand Storytelling",
  ],
  icon: PenTool,
  image:
    content
},

{
  id: 5,
  number: "05",
  title: "Meta Ads",
  shortTitle: "Meta Ads",
  description:
    "Reach the right audience with powerful Facebook and Instagram ad campaigns. Generate quality leads, boost conversions, and maximize your business growth.",
  tags: [
    "Facebook Ads",
    "Instagram Ads",
    "Lead Generation",
    "Audience Targeting",
   
  ],
  icon: Target,
  image:
    metaads
},
];

/* =========================================================
   DESKTOP CLOSED PANEL
========================================================= */

function ClosedService({ service }) {
  const Icon = service.icon;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="
        absolute inset-0
        flex flex-col
        items-center justify-between
        overflow-hidden
        rounded-[24px]
        py-7
        bg-slate-900
      "
    >
      {/* Background Image */}
      {service.image && (
        <motion.img
          src={service.image}
          alt={service.title}
          className="
            absolute inset-0
            h-full w-full
            object-cover
          "
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8 }}
        />
      )}

      {/* Dark overlay for readability */}
      <div
        className="
          absolute inset-0
          bg-gradient-to-b
          from-black/65
          via-black/35
          to-black/80
        "
      />

      {/* Subtle purple overlay */}
      <div className="
        absolute inset-0
        bg-[#5428B0]/15
        mix-blend-multiply
      " />

      {/* Number */}
      <span className="
        relative z-10
        text-xs
        font-bold
        tracking-widest
        text-white
        drop-shadow-lg
      ">
        {service.number}
      </span>

      {/* Vertical Title */}
      <div className="
        relative z-10
        flex flex-1
        items-center
        justify-center
      ">
        <span
          className="
            whitespace-nowrap
            text-xl
          
            uppercase
           
            text-white
           font-bold tracking-tight
            drop-shadow-[0_2px_5px_rgba(0,0,0,0.9)]
            [writing-mode:vertical-rl]
            rotate-180
          "
        >
          {service.shortTitle}
        </span>
      </div>

      {/* Icon */}
      <motion.div
        whileHover={{
          scale: 1.12,
          rotate: 5,
        }}
        className="
          relative z-10
          flex h-11 w-11
          items-center justify-center
          rounded-full
          border border-white/30
          bg-white/20
          text-white
          shadow-xl
          backdrop-blur-md
        "
      >
        <Icon size={19} strokeWidth={2.2} />
      </motion.div>
    </motion.div>
  );
}

/* =========================================================
   DESKTOP ACTIVE PANEL
========================================================= */

function ActiveService({ service }) {
  const Icon = service.icon;

  return (
    <motion.div
      key={service.id}
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
      }}
      transition={{
        duration: 0.35,
      }}
      className="absolute inset-0"
    >
      {/* Background image */}

      <div className="absolute inset-0 overflow-hidden">

        <motion.img
          initial={{
            scale: 1.08,
          }}
          animate={{
            scale: 1,
          }}
          transition={{
            duration: 1.2,
            ease: "easeOut",
          }}
          src={service.image}
          alt={service.title}
          className="
            h-full
            w-full
            object-cover
            opacity-45
          "
        />

        {/* Dark overlay */}

        <div
          className="
            absolute
            inset-0
            bg-gradient-to-t
            from-[#12182191]
            via-[#121821]/10
            to-[#12182100]
          "
        />

      </div>

      {/* Content */}

      <div
        className="
          relative
          flex
          h-full
          flex-col
          justify-between
          p-7
          sm:p-9
          lg:p-10
        "
      >

        {/* =================================================
            TOP
        ================================================= */}

        <div className="flex items-start justify-between">

          <div className="flex items-center gap-3">

            <span className="text-sm font-semibold text-white/50">
              {service.number}
            </span>

            <div className="h-px w-10 bg-white/20" />

            <span
              className="
                text-xs
                font-medium
                uppercase
                tracking-[0.15em]
                text-white/50
              "
            >
              Service
            </span>

          </div>

          {/* Icon */}

          <motion.div
            initial={{
              scale: 0,
              rotate: -30,
            }}
            animate={{
              scale: 1,
              rotate: 0,
            }}
            transition={{
              delay: 0.15,
              duration: 0.4,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              flex
              h-12
              w-12
              items-center
              justify-center
              rounded-full
              bg-white
              text-[#121821]
            "
          >
            <Icon size={20} />
          </motion.div>

        </div>

        {/* =================================================
            BOTTOM
        ================================================= */}

        <div>

          {/* Title */}

          <motion.h3
            initial={{
              y: 20,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            transition={{
              delay: 0.1,
              duration: 0.5,
            }}
            className="
              max-w-2xl
         
              leading-[0.95]
          
              text-white
              sm:text-4xl
              lg:text-5xl
              text-3xl md:text-5xl font-bold tracking-tight
            "
          >
            {service.title}
          </motion.h3>

          {/* Description */}

          <motion.p
            initial={{
              y: 15,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            transition={{
              delay: 0.2,
              duration: 0.5,
            }}
            className="
              mt-5
              max-w-xl
              text-sm
              leading-6
              text-white/65
              sm:text-base
            "
          >
            {service.description}
          </motion.p>

          {/* Tags */}

          <motion.div
            initial={{
              y: 15,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            transition={{
              delay: 0.3,
              duration: 0.5,
            }}
            className="
              mt-6
              flex
              flex-wrap
              gap-2
            "
          >
            {service.tags.map((tag) => (
              <span
                key={tag}
                className="
                  rounded-full
                  border
                  border-white/15
                  bg-white/10
                  px-3
                  py-1.5
                  text-xs
                  font-medium
                  text-white/80
                  backdrop-blur-sm
                "
              >
                {tag}
              </span>
            ))}
          </motion.div>

          {/* CTA */}

        <Link to="/services" className="inline-block">
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{
      delay: 0.4,
      duration: 0.5,
    }}
   
    className="
      mt-7 flex items-center gap-2
      text-sm font-semibold text-white
      cursor-pointer group
    "
  >
    Explore services

    <span
      className="
        flex h-7 w-7 items-center justify-center
        rounded-full bg-white text-[#5428B0]
        transition-transform duration-300
        group-hover:rotate-45
      "
    >
      <ArrowUpRight size={15} />
    </span>
  </motion.div>
</Link>

        </div>
      </div>
    </motion.div>
  );
}

/* =========================================================
   MOBILE SERVICE CARD
========================================================= */

function MobileServiceCard({
  service,
  index,
  isActive,
  onClick,
}) {
  const Icon = service.icon;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.45,
        delay: index * 0.06,
      }}
      onClick={onClick}
      className={`
        relative
        w-full
        overflow-hidden
        rounded-[24px]
        border
        cursor-pointer
        transition-colors duration-300
        ${
          isActive
            ? "border-[#5428B0]/30 bg-[#121821]"
            : "border-slate-200 bg-white"
        }
      `}
    >

      {/* =================================
          BACKGROUND IMAGE
      ================================= */}

      <div className="absolute inset-0">

        <motion.img
          src={service.image}
          alt={service.title}
          animate={{
            scale: isActive ? 1.05 : 1,
          }}
          transition={{ duration: 0.8 }}
          className={`
            h-full w-full
            object-cover
            transition-opacity duration-500
           
          `}
        />

        <div
          className={`
            absolute inset-0
            ${
             isActive
  ? "bg-gradient-to-r from-[#121821]/90 via-[#121821]/50 to-[#121821]/10"
  : "bg-gradient-to-r from-[#121821]/75 to-[#121821]/75"
            }
          `}
        />

      </div>


      {/* =================================
          CARD HEADER
      ================================= */}

      <div
        className="
          relative z-10
          flex items-center
          justify-between
          gap-3
          px-5 py-5
        "
      >

        {/* Number + Title */}

        <div className="flex min-w-0 items-center gap-4">

          <span className="
            text-xs
            font-bold
            tracking-widest
            text-[#F8CC10]
          ">
            {service.number}
          </span>

          <div className="h-7 w-px bg-white/25" />

          <h3 className="
            truncate
            font-bold
            tracking-tight
            text-white
            sm:text-lg

            
          ">
            {service.shortTitle || service.title}
          </h3>

        </div>


        {/* Icon + Expand Indicator */}

        <div className="flex shrink-0 items-center gap-3">

          <div className="
            flex h-10 w-10
            items-center justify-center
            rounded-full
            border border-white/20
            bg-white/10
            text-white
            backdrop-blur-md
          ">
            <Icon size={19} />
          </div>

          <motion.div
            animate={{
              rotate: isActive ? 45 : 0,
            }}
            transition={{ duration: 0.3 }}
            className="
              flex h-7 w-7
              items-center justify-center
              rounded-full
              bg-[#F8CC10]
              text-[#5428B0]
            "
          >
            <ArrowUpRight size={16} />
          </motion.div>

        </div>

      </div>


      {/* =================================
          EXPANDED CONTENT
      ================================= */}

      <AnimatePresence initial={false}>

        {isActive && (

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
              duration: 0.45,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative z-10 overflow-hidden"
          >

            <div className="px-5 pb-6 pt-2">

              {/* Divider */}

              <div className="mb-5 h-px w-full bg-white/15" />


              {/* Category */}

              <p className="
                text-[10px]
                font-bold
                uppercase
                tracking-[0.2em]
                text-[#F8CC10]
              ">
                Our Expertise
              </p>


              {/* Description */}

              <p className="
                mt-3
                max-w-xl
                text-sm
                leading-7
                text-white/75
              ">
                {service.description}
              </p>


              {/* Tags */}

              <div className="mt-5 flex flex-wrap gap-2">

                {service.tags.map((tag) => (

                  <span
                    key={tag}
                    className="
                      rounded-full
                      border border-white/15
                      bg-white/10
                      px-3 py-2
                      text-[10px]
                      font-medium
                      text-white/85
                      backdrop-blur-sm
                    "
                  >
                    {tag}
                  </span>

                ))}

              </div>


              {/* CTA */}

              <a
                href="/services"
                onClick={(e) => e.stopPropagation()}
                className="
                  mt-6
                  inline-flex
                  items-center
                  gap-3
                  rounded-full
                  text-xs
                  font-bold
                  text-white
                "
              >
                Explore Service

                <span className="
                  flex h-6 w-6
                  items-center justify-center
                  rounded-full
                  bg-white
                  text-[#5428B0]
                ">
                  <ArrowUpRight size={14} />
                </span>

              </a>

            </div>

          </motion.div>

        )}

      </AnimatePresence>

    </motion.div>
  );
}

/* =========================================================
   MAIN SERVICES SECTION
========================================================= */

export default function Homes() {

  const [activeService, setActiveService] = useState(0);

  return (
    <section
      className="
        relative
        overflow-hidden
        bg-white
        px-5
        py-10
        md:py-16
        sm:px-8
        lg:px-12
      "
    >

      {/* =================================================
          BACKGROUND
      ================================================= */}

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          h-[600px]
          w-[600px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-[#f15b38]/5
          blur-[120px]
        "
      />

      <div className="relative mx-auto max-w-7xl">

        {/* =================================================
            HEADER
        ================================================= */}

     
<motion.div
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
    amount: 0.2,
  }}
  transition={{
    duration: 0.8,
    ease: "easeOut",
  }}
  className="grid lg:grid-cols-[0.8fr_1.2fr] gap-8 lg:gap-20 items-start mb-16"
>
  {/* Left Content */}

  <div>
    <p className="text-[10px] uppercase tracking-[3px] font-bold text-[#5428B0] mb-4">
      What We Do
    </p>

    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-[1.08] tracking-tight text-[#101418]">
      Creative services
      <span className="text-[#5428B0]"> built to move.</span>
    </h2>
  </div>

  {/* Right Content */}

  <div className="lg:pt-8">
    <p className="text-base md:text-lg text-gray-700 leading-relaxed">
      From the first idea to the final frame, we create meaningful
      brand experiences that capture attention and inspire action.
    </p>

  

    <div className="flex items-center gap-3 mt-7">
      <span className="h-[2px] w-10 bg-[#F8CC10]" />

      <span className="text-[10px] font-bold uppercase tracking-[2px] text-[#5428B0]">
        Creativity Meets Strategy
      </span>
    </div>
  </div>
</motion.div>


        {/* =================================================
            DESKTOP ACCORDION

            Visible only >= lg
        ================================================= */}

        <motion.div
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
            duration: 1,
          }}
          className="
            hidden
            h-[500px]
            w-full
            overflow-hidden
            rounded-[32px]
            border
            border-slate-200
            bg-[var(--neutral)]
            p-2
            shadow-[0_25px_80px_rgba(15,23,42,0.07)]
            lg:flex
          "
        >

          {services.map((service, index) => {

            const isActive =
              activeService === index;

            return (
              <motion.div
                key={service.id}
                layout
                onMouseEnter={() =>
                  setActiveService(index)
                }
                onClick={() =>
                  setActiveService(index)
                }
                animate={{
                  flex: isActive
                    ? 4.5
                    : 0.75,
                }}
                transition={{
                  duration: 0.65,
                  ease: [
                    0.22,
                    1,
                    0.36,
                    1,
                  ],
                }}
                className={`
                  group
                  m-1
                  relative
                  min-w-0
                  cursor-pointer
                  overflow-hidden
                  rounded-[25px]
                  ${
                    isActive
                      ? "bg-[#121821]"
                      : "bg-[#f3f4f6]"
                  }
                `}
              >

                {/* Closed */}

                {!isActive && (
                  <ClosedService
                    service={service}
                  />
                )}

                {/* Active */}

                <AnimatePresence mode="wait">

                  {isActive && (
                    <ActiveService
                      service={service}
                    />
                  )}

                </AnimatePresence>

              </motion.div>
            );
          })}

        </motion.div>


        {/* =================================================
            DESKTOP HINT
        ================================================= */}

        <div
          className="
            mt-5
            hidden
            items-center
            justify-between
            lg:flex
          "
        >

          <p
            className="
              text-xs
              font-medium
              uppercase
              tracking-[0.15em]
              text-slate-400
            "
          >
            Hover to explore
          </p>

          <div
            className="
              flex
              items-center
              gap-2
              text-xs
              text-slate-400
            "
          >
            <span>01</span>

            <div className="h-px w-10 bg-slate-300" />

            <span>05</span>
          </div>

        </div>


        {/* =================================================
            MOBILE / TABLET CARDS

            Visible below lg
        ================================================= */}

     <div className="flex flex-col gap-3 lg:hidden">

  {services.map((service, index) => {
    const isActive = activeService === index;

    return (
      <MobileServiceCard
        key={service.id}
        service={service}
        index={index}
        isActive={isActive}
        onClick={() =>
          setActiveService(isActive ? -1 : index)
        }
      />
    );
  })}

</div>


        {/* =================================================
            MOBILE HINT
        ================================================= */}

        <div
          className="
            mt-6
            flex
            items-center
            justify-center
            lg:hidden
          "
        >

          <p
            className="
              text-xs
              font-medium
              uppercase
              tracking-[0.15em]
              text-slate-400
            "
          >
            Explore our services
          </p>

        </div>

      </div>

    </section>
  );
}