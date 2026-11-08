import React, { useEffect, useState } from "react";
import { motion} from "framer-motion";

import vidshot from "../../icons/vidshot.png";
import {
  ChevronLeft,
  ChevronRight,
  ArrowUpRight,
 
} from "lucide-react";

// SVG ICONS
import InstagramIcon from "../../icons/instagram.svg";
import YoutubeIcon from "../../icons/youtube.svg";
import FacebookIcon from "../../icons/facebook.svg";
import MetaIcon from "../../icons/meta-ads.svg";
import Videoediting from "../../icons/video-editing.svg";
import PodcastIcon from "../../icons/poadcast.svg";

// Import images
import deepak from "../../Images/client/deepak pandey.jpeg"
import mohit from "../../Images/client/mohit Beriwala.jpeg"
import deven from "../../Images/client/deven u pandey.jpeg"
import nidhi from "../../Images/client/nidhi aneja.png"
import dhiren from "../../Images/client/dhiren bontra.jpeg"
import ssalam from "../../Images/client/ssalam.jpeg"


/* =========================================================
   CLIENT DATA
========================================================= */

const clients = [
  {
    id: 1,
    name: "Deven U Pandey",
    category: "Creator",
     type : "Social Media Management",
    socials: [
      {
        platform: "Instagram",
        icon: InstagramIcon,
        followers: "101K",
      },
      {
        platform: "YouTube",
        icon: YoutubeIcon,
        followers: "52.4K",
      },
    ],

    images: [
      deven
      
    ],
  },

  {
    id: 2,
    name: "Deepak Pandey",
    category: "Creator",
    type : "AI Tech and Business",

  
    images: [
      deepak
    ],
  },

  {
    id: 3,
    name: "Mohit Beriwala",
    category: "Founder",
    type : "Shree Rama Manager LLP",


    images: [
    mohit
    ],
  },

  {
    id: 4,
    name: "Nidhi Aneja",
    category: "Creator",
     type : "Social Media Management",
    socials: [
      {
        platform: "Instagram",
        icon: InstagramIcon,
        followers: "96K",
      },
      {
        platform: "Facebook",
        icon: FacebookIcon,
        followers: "54K",
      },
      {
        platform: "YouTube",
        icon: YoutubeIcon,
        followers: "31K",
      },
    ],

    images: [
     nidhi
    ],
  },
   {
    id: 5,
    name: "Dhiren Bontra",
    category: "Creator",
     type : "Social Media Management",
    socials: [
      {
        platform: "Instagram",
        icon: InstagramIcon,
        followers: "96K",
      },
      {
        platform: "Facebook",
        icon: FacebookIcon,
        followers: "54K",
      },
      {
        platform: "YouTube",
        icon: YoutubeIcon,
        followers: "31K",
      },
    ],

    images: [
     dhiren
    ],
  },
   {
    id: 6,
    name: "S S Alam",
    category: "Creator",
     type : "Social Media Management",
    socials: [
      {
        platform: "Instagram",
        icon: InstagramIcon,
        followers: "101K",
      },
      {
        platform: "YouTube",
        icon: YoutubeIcon,
        followers: "52.4K",
      },
    ],

    images: [
      ssalam
      
    ],
  },
];

/* =========================================================
   ORBIT ICONS
========================================================= */

const orbitIcons = [
  {
    name: "Instagram",
    icon: InstagramIcon,
    angle: 0,
    distance: 200,
    orbit: "outer",
  },
  {
    name: "YouTube",
    icon: YoutubeIcon,
    angle: 60,
    distance: 150,
    orbit: "outer",
  },
  {
    name: "Facebook",
    icon: FacebookIcon,
    angle: 120,
    distance: 200,
    orbit: "outer",
  },
  {
    name: "Meta Ads",
    icon: MetaIcon,
    angle: 180,
    distance: 150,
    orbit: "outer",
  },
  {
    name: "Design",
    icon: PodcastIcon,
    angle: 240,
    distance: 200,
    orbit: "inner",
  },
  {
    name: "Video",
    icon: Videoediting,
    angle: 300,
    distance: 150,
    orbit: "inner",
  },
];

/* =========================================================
   ORBIT ICON
========================================================= */

function OrbitIcon({ item }) {
  const angle = (item.angle * Math.PI) / 180;

  const radius = item.distance;

  const x = Math.cos(angle) * radius;
  const y = Math.sin(angle) * radius;

  const isOuter = item.orbit === "outer";

  return (
    <motion.div
      className="absolute left-1/2 top-1/2 z-50"
      style={{
        marginLeft: -24,
        marginTop: -24,
      }}
      animate={{
        x,
        y,
      }}
      transition={{
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <motion.div
        animate={{
          y: [0, -5, 0],
        }}
        transition={{
          duration: isOuter ? 3.2 : 2.8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: item.angle * 0.003,
        }}
        whileHover={{
          scale: 1.15,
        }}
        className="group relative cursor-pointer"
      >
        {/* Glow */}

        <div className="absolute inset-[-12px] rounded-full bg-[#5428B0]/20 opacity-0 blur-xl transition-opacity group-hover:opacity-100" />

        {/* Icon Container */}

        <div
          className="
            relative flex h-12 w-12 items-center justify-center
            rounded-full border border-[#17122a]/10
            bg-white shadow-[0_10px_30px_rgba(23,18,42,.15)]
            transition-all duration-500
            group-hover:border-[#5428B0]/40
            group-hover:shadow-[0_15px_40px_rgba(84,40,176,.25)]
            sm:h-14 sm:w-14
          "
        >
          <img
            src={item.icon}
            alt={item.name}
            onError={(e) => {
              console.error("Icon failed to load:", item.icon);
              e.currentTarget.style.display = "none";
            }}
            className="h-6 w-6 object-contain sm:h-7 sm:w-7"
          />
        </div>

        {/* Label */}

        <div
          className="
            pointer-events-none absolute left-1/2 top-full z-50
            mt-2 -translate-x-1/2 whitespace-nowrap
            rounded-full bg-[#17122a] px-3 py-1
            text-[9px] font-semibold text-white
            opacity-0 transition-all duration-300
            group-hover:opacity-100
          "
        >
          {item.name}
        </div>
      </motion.div>
    </motion.div>
  );
}

/* =========================================================
   CLIENT CARD
========================================================= */


function ClientCard({ client, position }) {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay: position * 0.05,
      }}
      className="
        group
        relative
        h-full
        min-w-0
        overflow-hidden
        rounded-[24px]
        bg-[#17122a]
        shadow-[0_20px_60px_rgba(23,18,42,.12)]
        transition-all
        duration-500
        hover:-translate-y-2
        hover:shadow-[0_30px_70px_rgba(84,40,176,.3)]
        sm:rounded-[28px]
      "
    >
      {/* =========================================
          ANIMATED BORDER
 

      {/* =========================================
          IMAGE CONTAINER
      ========================================== */}

      <div className="relative aspect-[4/5] w-full overflow-hidden">

        {/* Main Image */}

        <motion.img
          src={client.images?.[0]}
          alt={`${client.name} campaign`}
          onLoad={() => setImageLoaded(true)}
          initial={{ scale: 1.08 }}
          animate={{
            scale: imageLoaded ? 1 : 1.08,
          }}
          transition={{
            duration: 1.2,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            absolute
            inset-0
            h-full
            w-full
            object-cover object-top
            transition-transform
            duration-1000
            ease-out
            group-hover:scale-110
          "
        />

        {/* =========================================
            SHINE EFFECT
        ========================================== */}

        <div
          className="
            pointer-events-none
            absolute
            inset-0
            z-10
            -translate-x-[150%]
            skew-x-[-20deg]
            bg-gradient-to-r
            from-transparent
            via-white/25
            to-transparent
            transition-transform
            duration-[1200ms]
            ease-in-out
            group-hover:translate-x-[150%]
          "
        />


        {/* =========================================
            IMAGE OVERLAY
        ========================================== */}

        <div
          className="
            pointer-events-none
            absolute
            inset-0
            z-10
            bg-gradient-to-b
            from-black/30
            via-transparent
            to-black/90
          "
        />

        {/* =========================================
            CATEGORY BADGE
        ========================================== */}

        <div
          className="
            absolute
            right-3
            top-3
            z-20
            sm:right-5
            sm:top-5
          "
        >
          <span
            className="
              inline-flex
              items-center
              rounded-full
              border
              border-white/20
              bg-black/30
              px-3
              py-1.5
              text-[8px]
              font-bold
              uppercase
              tracking-[0.15em]
              text-white
              shadow-lg
              backdrop-blur-xl
              transition-all
              duration-300
              group-hover:border-[#F8CC10]/60
              group-hover:bg-[#5428B0]/70
              sm:px-4
              sm:py-2
              sm:text-[9px]
            "
          >
            {client.category}
          </span>
        </div>

        {/* =========================================
            CLIENT NUMBER
        ========================================== */}

        <div
          className="
            absolute
            left-3
            top-3
            z-20
            sm:left-5
            sm:top-5
          "
        >
          <span
            className="
              text-[9px]
              font-bold
              tracking-[0.15em]
              text-white/70
              transition-colors
              duration-300
              group-hover:text-[#F8CC10]
              sm:text-[10px]
            "
          >
            {String(client.id ?? position + 1).padStart(2, "0")}
          </span>
        </div>

        {/* =========================================
            BOTTOM CONTENT
        ========================================== */}

        <div
          className="
            absolute
            inset-x-0
            bottom-0
            z-20
            p-4
            sm:p-5
            md:p-6
          "
        >
          {/* Client Name */}

          <div className="pr-10">

            <h3
              className="
                text-xl
                font-black
                leading-none
                tracking-[-0.045em]
                text-white
                transition-all
                duration-500
                group-hover:translate-x-1
                group-hover:text-[#F8CC10]
                sm:text-2xl
                md:text-3xl
              "
            >
              {client.name}
            </h3>

            <p
              className="
                mt-2
                text-[9px]
                font-medium
                uppercase
                tracking-[0.12em]
                text-white/75
                transition-colors
                duration-300
                group-hover:text-white
                sm:text-[10px]
              "
            >
              {client.type}
            </p>

            {/* Animated Accent Line */}

            <div
              className="
                mt-3
                h-[2px]
                w-8
                rounded-full
                bg-[#F8CC10]
                transition-all
                duration-500
                group-hover:w-16
              "
            />

          </div>

          {/* =========================================
              SOCIAL PLATFORMS
          ========================================== */}

          <div className="mt-4 flex flex-wrap gap-1.5 sm:gap-2">

            {client.socials?.map((social) => (
              <div
                key={social.platform}
                className="
                  flex
                  items-center
                  gap-1.5
                  rounded-full
                  border
                  border-white/15
                  bg-black/30
                  px-2.5
                  py-1.5
                  backdrop-blur-xl
                  transition-all
                  duration-300
                  group-hover:border-white/30
                  group-hover:bg-[#5428B0]/50
                  sm:gap-2
                  sm:px-3
                "
              >
                <img
                  src={social.icon}
                  alt={social.platform}
                  className="
                    h-3
                    w-3
                    shrink-0
                    object-contain
                    transition-transform
                    duration-300
                    group-hover:scale-110
                    sm:h-3.5
                    sm:w-3.5
                  "
                />

                <span
                  className="
                    text-[9px]
                    font-semibold
                    text-white/90
                    sm:text-[10px]
                  "
                >
                  {social.followers}
                </span>
              </div>
            ))}

          </div>
        </div>

        {/* =========================================
            ANIMATED ARROW
        ========================================== */}

        <div
          className="
            absolute
            bottom-4
            right-4
            z-30
            sm:bottom-5
            sm:right-5
          "
        >
          <motion.div
            whileHover={{
              scale: 1.12,
              rotate: 45,
            }}
            whileTap={{
              scale: 0.9,
            }}
            className="
              flex
              h-9
              w-9
              items-center
              justify-center
              rounded-full
              bg-white
              text-[#17122a]
              shadow-[0_10px_30px_rgba(0,0,0,.2)]
              transition-colors
              duration-300
              group-hover:bg-[#F8CC10]
              sm:h-11
              sm:w-11
            "
          >
            <ArrowUpRight
              size={17}
              className="sm:h-[19px] sm:w-[19px]"
            />
          </motion.div>
        </div>

      

      </div>
    </motion.article>
  );
}



/* =========================================================
   MAIN COMPONENT
========================================================= */



const ClientCarousel = ({ clients = [] }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  // Responsive layout
  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const total = clients.length;
  const visibleCount = isDesktop ? 2 : 1;
  const maxIndex = Math.max(0, total - visibleCount);

  // Next: move the track left
  const nextSlide = () => {
    setActiveIndex((prev) =>
      prev >= maxIndex ? 0 : prev + 1
    );
  };

  // Previous: move the track right
  const prevSlide = () => {
    setActiveIndex((prev) =>
      prev <= 0 ? maxIndex : prev - 1
    );
  };

  // Navigate using dots
  const goToSlide = (index) => {
    setActiveIndex(index);
  };

  // Keep index valid when responsive layout changes
  useEffect(() => {
    setActiveIndex((prev) => Math.min(prev, maxIndex));
  }, [maxIndex]);

  // Automatic right-to-left sliding
  useEffect(() => {
    if (isPaused || maxIndex === 0) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) =>
        prev >= maxIndex ? 0 : prev + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [isPaused, maxIndex]);

  if (total === 0) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="w-full min-w-0"
    >
      <div
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        role="region"
        aria-roledescription="carousel"
        aria-label="Client portfolio"
      >
        {/* SLIDER */}
        <div className="overflow-hidden">
          <motion.div
            className="flex"
            animate={{
              x: `-${activeIndex * (100 / visibleCount)}%`,
            }}
            transition={{
              duration: 0.65,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {clients.map((client, index) => (
              <div
                key={client.id ?? index}
                className="w-full shrink-0 px-2 md:w-1/2"
              >
                <ClientCard
                  client={client}
                  position={index}
                />
              </div>
            ))}
          </motion.div>
        </div>

        {/* CONTROLS */}
        <div className="mt-6 flex items-center justify-between gap-4">

          {/* CLICKABLE DOTS */}
          <div className="flex flex-wrap items-center gap-2">
            {Array.from({ length: maxIndex + 1 }).map(
              (_, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => goToSlide(index)}
                  aria-label={`Go to slide ${index + 1}`}
                  aria-current={
                    activeIndex === index ? "true" : undefined
                  }
                  className={`
                    h-2 rounded-full
                    transition-all duration-300
                    ${
                      activeIndex === index
                        ? "w-8 bg-[#5428b0]"
                        : "w-2 bg-gray-300 hover:bg-gray-400"
                    }
                  `}
                />
              )
            )}
          </div>

          {/* PREVIOUS / NEXT BUTTONS */}
          <div className="flex shrink-0 items-center gap-3">

            <button
              type="button"
              onClick={prevSlide}
              aria-label="Previous slide"
              className="
                flex h-11 w-11 items-center justify-center
                rounded-full border border-gray-200 bg-white
                text-[#5428b0] transition-all duration-300
                hover:bg-[#5428b0] hover:text-white
                active:scale-95
              "
            >
              <ChevronLeft size={20} />
            </button>

            <button
              type="button"
              onClick={nextSlide}
              aria-label="Next slide"
              className="
                flex h-11 w-11 items-center justify-center
                rounded-full border border-gray-200 bg-white
                text-[#5428b0] transition-all duration-300
                hover:bg-[#5428b0] hover:text-white
                active:scale-95
              "
            >
              <ChevronRight size={20} />
            </button>

          </div>
        </div>
      </div>
    </motion.div>
  );
};





export default function OurClients() {
 

  return (
    <section
      className="
        relative
        overflow-hidden
        bg-gradient-to-t
        from-[#5428B0]/10
        via-[#5428B0]/5
        to-white
        px-5
        py-20
        sm:px-8
        sm:py-24
        lg:px-12
        lg:py-28
      "
    >
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Purple glow */}

        <motion.div
          animate={{
            x: [0, 60, -30, 0],
            y: [0, -40, 30, 0],
            scale: [1, 1.1, 0.95, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            left-[-10%]
            top-[15%]
            h-[350px]
            w-[350px]
            rounded-full
            bg-[#5428B0]/5
            blur-[100px]
          "
        />

        {/* Yellow glow */}

        <motion.div
          animate={{
            x: [0, -50, 40, 0],
            y: [0, 30, -40, 0],
            scale: [1, 0.9, 1.1, 1],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            bottom-[-10%]
            right-[-5%]
            h-[400px]
            w-[400px]
            rounded-full
            bg-[#F8CC10]/10
            blur-[120px]
          "
        />

        {/* Small floating dots */}

        <motion.span
          animate={{
            y: [0, -15, 0],
            opacity: [0.2, 0.7, 0.2],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            left-[15%]
            top-[20%]
            h-2
            w-2
            rounded-full
            bg-[#F8CC10]
          "
        />

        <motion.span
          animate={{
            y: [0, 12, 0],
            opacity: [0.2, 0.8, 0.2],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            right-[20%]
            top-[30%]
            h-1.5
            w-1.5
            rounded-full
            bg-[#5428B0]
          "
        />
      </div>

      {/* =====================================================
          MAIN CONTAINER
      ====================================================== */}

      <div className="relative mx-auto max-w-[1400px]">
        {/* ===================================================
            HEADER
        ==================================================== */}

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
            lg:mb-16
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
                Our Clients
              </span>
            </div>

            {/* Heading */}

            <h2
              className="
                max-w-3xl
                text-4xl
                font-black
                leading-[0.95]
                text-[clamp(2rem,5vw,3rem)]
                text-[var(--dark)]
                sm:text-4xl
                lg:text-5xl
              "
            >
              Brands We
              <br />

              <span className="text-[var(--primary-dark)]">
                Have Worked With
              </span>
            </h2>
          </div>

          {/* Description */}

          <p
            className="
              max-w-sm
              text-sm
              leading-6
              text-slate-500
              md:text-base
            "
          >
            A simple, strategic process that turns your
            vision into content people remember.
          </p>
        </motion.div>

        {/* ===================================================
            MAIN GRID
        ==================================================== */}

        <div
          className="
            grid
            items-center
            gap-16
            lg:grid-cols-[1.15fr_0.85fr]
            lg:gap-20
          "
        >
          {/* =================================================
              LEFT — CLIENT CAROUSEL
          ================================================== */}

          <ClientCarousel clients={clients} />

          {/* =================================================
              RIGHT — ORBIT SYSTEM
          ================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.92,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            viewport={{
              once: true,
              amount: 0.1,
            }}
            transition={{
              duration: 1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
            
              relative
              mx-auto
              hidden
              lg:flex
              aspect-square
              w-full
              max-w-[540px]
              items-center
              justify-center
            "
          >
            {/* =================================================
                AMBIENT GLOW
            ================================================== */}

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
                absolute
                h-[55%]
                w-[55%]
                rounded-full
                bg-[#5428B0]/10
                blur-[80px]
              "
            />

            {/* =================================================
                OUTER ORBIT
            ================================================== */}

            <motion.div
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 40,
                repeat: Infinity,
                ease: "linear",
              }}
              className="
                absolute
                h-[80%]
                w-[80%]
                rounded-full
                border
                border-[#17122a]/10
              "
            >
         
            </motion.div>


            {/* =================================================
                MIDDLE ORBIT
            ================================================== */}

            <motion.div
              animate={{
                rotate: -360,
              }}
              transition={{
                duration: 28,
                repeat: Infinity,
                ease: "linear",
              }}
              className="
                absolute
                h-[60%]
                w-[60%]
                rounded-full
                border
                border-[#17122a]/10
              "
            >
              
            </motion.div>

            {/* =================================================
                INNER ORBIT
            ================================================== */}

            <div
              className="
                absolute
                h-[40%]
                w-[40%]
                rounded-full
                border
                border-[#17122a]/10
              "
            />

            {/* =================================================
                ROTATING ICON SYSTEM
            ================================================== */}

            <motion.div
              className="absolute inset-0"
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 35,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              {orbitIcons.map((item) => (
                <OrbitIcon
                  key={item.name}
                  item={item}
                />
              ))}
            </motion.div>

            {/* =================================================
                CENTER PLANET
            ================================================== */}

          <div className="
                     relative z-10
                     w-36 h-36
                     rounded-full
                     bg-[#5503b0]
                     border border-[#5503b0]
                     shadow-[0_5px_25px_rgba(0,0,0,0.08)]
                     flex items-center justify-center
                   ">
                     <img
                       src={vidshot}
                       alt="VidShot Media"
                       className="w-28 h-28 object-contain"
                     />
                   </div>

            {/* =================================================
                FLOATING DOTS
            ================================================== */}

            <motion.span
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.3, 1, 0.3],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
              }}
              className="
                absolute
                left-[9%]
                top-[32%]
                h-2
                w-2
                rounded-full
                bg-[#F8CC10]
              "
            />

            <motion.span
              animate={{
                scale: [1, 1.4, 1],
                opacity: [0.3, 1, 0.3],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
              className="
                absolute
                right-[9%]
                top-[27%]
                h-1.5
                w-1.5
                rounded-full
                bg-[#5428B0]
              "
            />

            <motion.span
              animate={{
                y: [0, -8, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                absolute
                bottom-[17%]
                left-[19%]
                h-1.5
                w-1.5
                rounded-full
                bg-[#5428B0]/50
              "
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}