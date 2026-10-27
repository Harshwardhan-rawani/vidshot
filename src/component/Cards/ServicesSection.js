import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Play,
  Smartphone,
  Palette,
  Megaphone,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";

import videoediting from "../../Images/Services/Video_editing.jpeg"
import social_media from "../../Images/Services/Social_media.jpeg"
import creative_desing from "../../Images/Services/Creative_Design.jpeg"
import performance from "../../Images/Services/Performance.jpeg"
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
    title: "Social Media",
    shortTitle: "Social",
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
    shortTitle: "Design",
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
      creative_desing
  },

  {
    id: 4,
    number: "04",
    title: "Performance Marketing",
    shortTitle: "Marketing",
    description:
      "Creative campaigns built around performance, helping brands turn attention into measurable business growth.",
    tags: [
      "Paid Ads",
      "Campaigns",
      "Performance Creative",
      "Analytics",
    ],
    icon: Megaphone,
    image:
      performance
  },

{
  id: 5,
  number: "05",
  title: "AI Ads",
  shortTitle: "AI Ads",
  description:
    "Create high-impact, AI-powered advertisements with stunning visuals, cinematic storytelling, and intelligent automation to boost engagement and drive conversions.",
  tags: [
    "AI Video Ads",
    "AI Avatars",
    "Product Visuals",
    "Ad Creatives",
  ],
  icon: Sparkles,
  image:
    "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200",
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
      transition={{ duration: 0.3 }}
      className="
   
      
        absolute
        inset-0
        flex
        flex-col
        items-center
        justify-between
        py-7
      "
    >
      {/* Number */}

      <span className="text-xs font-semibold text-slate-400">
        {service.number}
      </span>

      {/* Vertical title */}

      <div className="flex flex-1 items-center justify-center">
        <span
          className="
            whitespace-nowrap
            text-sm
            font-bold
            uppercase
            tracking-[0.15em]
            text-slate-700
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
          scale: 1.1,
          rotate: 5,
        }}
        className="
          flex
          h-10
          w-10
          items-center
          justify-center
          rounded-full
          bg-white
          text-slate-700
          shadow-sm
        "
      >
        <Icon size={17} />
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
              text-3xl
              font-black
              leading-[0.95]
              tracking-[-0.05em]
              text-white
              sm:text-4xl
              lg:text-5xl
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

          <motion.div
            initial={{
              opacity: 0,
              y: 10,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.4,
              duration: 0.5,
            }}
            className="
              mt-7
              flex
              items-center
              gap-2
              text-sm
              font-semibold
              text-white
            "
          >
            Explore service

            <span
              className="
                flex
                h-7
                w-7
                items-center
                justify-center
                rounded-full
                bg-[#f15b38]
              "
            >
              <ArrowUpRight size={15} />
            </span>

          </motion.div>

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
}) {
  const Icon = service.icon;

  return (
    <motion.article
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
        amount: 0.15,
      }}
      transition={{
        duration: 0.65,
        delay: index * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileTap={{
        scale: 0.985,
      }}
      className="
        group
        relative
        overflow-hidden
        rounded-[26px]
        border
        border-slate-200
        bg-white
        shadow-[0_10px_35px_rgba(15,23,42,0.05)]
      "
    >

      {/* =================================================
          IMAGE
      ================================================= */}

      <div className="relative h-[220px] overflow-hidden">

        <motion.img
          src={service.image}
          alt={service.title}
          className="
            h-full
            w-full
            object-cover
          "
          whileHover={{
            scale: 1.06,
          }}
          transition={{
            duration: 0.7,
          }}
        />

        {/* Gradient */}

        <div
          className="
            absolute
            inset-0
            bg-gradient-to-t
            from-[#121821]/80
            via-[#121821]/20
            to-transparent
          "
        />

        {/* Number */}

        <div
          className="
            absolute
            left-5
            top-5
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded-full
            bg-white/90
            text-xs
            font-bold
            text-[#121821]
            backdrop-blur-sm
          "
        >
          {service.number}
        </div>

        {/* Icon */}

        <div
          className="
            absolute
            right-5
            top-5
            flex
            h-11
            w-11
            items-center
            justify-center
            rounded-full
            bg-white
            text-[#121821]
            shadow-lg
          "
        >
          <Icon size={18} />
        </div>

      </div>

      {/* =================================================
          CONTENT
      ================================================= */}

      <div className="p-6">

        <h3
          className="
            text-2xl
            font-black
            tracking-[-0.04em]
            text-[#121821]
          "
        >
          {service.title}
        </h3>

        <p
          className="
            mt-3
            text-sm
            leading-6
            text-slate-500
          "
        >
          {service.description}
        </p>

        {/* Tags */}

        <div className="mt-5 flex flex-wrap gap-2">

          {service.tags.map((tag) => (
            <span
              key={tag}
              className="
                rounded-full
                border
                border-slate-200
                bg-slate-50
                px-3
                py-1.5
                text-xs
                font-medium
                text-slate-600
              "
            >
              {tag}
            </span>
          ))}

        </div>

        {/* CTA */}

        <div
          className="
            mt-6
            flex
            items-center
            justify-between
            border-t
            border-slate-100
            pt-5
          "
        >

          <span
            className="
              text-sm
              font-semibold
              text-[#121821]
            "
          >
            Explore service
          </span>

          <motion.span
            whileHover={{
              rotate: 45,
            }}
            className="
              flex
              h-9
              w-9
              items-center
              justify-center
              rounded-full
              bg-[#121821]
              text-white
              transition-colors
              duration-300
              group-hover:bg-[#f15b38]
            "
          >
            <ArrowUpRight size={16} />
          </motion.span>

        </div>

      </div>

    </motion.article>
  );
}

/* =========================================================
   MAIN SERVICES SECTION
========================================================= */

export default function ServicesSection() {

  const [activeService, setActiveService] = useState(0);

  return (
    <section
      className="
        relative
        overflow-hidden
        bg-white
        px-5
        py-24
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
          }}
          transition={{
            duration: 0.7,
          }}
          className="
            mb-12
            flex
            flex-col
            justify-between
            gap-6
            md:flex-row
            md:items-end
          "
        >

          <div>

            {/* Label */}

            <div className="mb-5 flex items-center gap-3">

              <span
                className="
                  h-2.5
                  w-2.5
                  rounded-full
                  bg-[var(--secondary-dark)]
                "
              />

              <span
                className="
                  text-xs
                  font-semibold
                  uppercase
                  tracking-[0.2em]
                  text-[var(--primary-dark)]

                "
              >
                What we do
              </span>

            </div>

            {/* Heading */}

            <h2
              className="
                max-w-3xl
                text-3xl
                font-black
                leading-[0.95]
                text-[#101418]
                sm:text-5xl
                lg:text-5xl
              
              ">
              Creative services
              <br />

              <span className="text-[var(--primary-dark)]">
                built to move.
              </span>
            </h2>

          </div>

          {/* Description */}

          <p
            className="
              max-w-sm
              text-sm
              leading-6
              text-[var(--dark)]
              md:text-base
            "
          >
            From the first idea to the final frame, we
            build content experiences that make brands
            impossible to ignore.
          </p>

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

        <div
          className="
            flex
            flex-col
            gap-4
            lg:hidden
          "
        >

          {services.map((service, index) => (
            <MobileServiceCard
              key={service.id}
              service={service}
              index={index}
            />
          ))}

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