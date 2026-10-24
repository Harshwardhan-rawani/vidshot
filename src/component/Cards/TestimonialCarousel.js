import React, { useEffect, useState, useCallback } from "react";
import { motion } from "framer-motion";
const team = [
  {
    id: 1,
    name: "Arjun Mehta",
    role: "Creative Director",
    experience: "10+ Years Experience",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=1200&q=85",
  },
  {
    id: 2,
    name: "Sarah Williams",
    role: "Film Director",
    experience: "8+ Years Experience",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=1200&q=85",
  },
  {
    id: 3,
    name: "Rohan Kapoor",
    role: "Motion Designer",
    experience: "7+ Years Experience",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=1200&q=85",
  },
  {
    id: 4,
    name: "Maya Sharma",
    role: "Brand Strategist",
    experience: "9+ Years Experience",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=1200&q=85",
  },
  {
    id: 5,
    name: "Daniel Cooper",
    role: "Video Producer",
    experience: "6+ Years Experience",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&q=85",
  },
  {
    id: 6,
    name: "Ananya Rao",
    role: "Content Lead",
    experience: "5+ Years Experience",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=1200&q=85",
  },
];

export default function TestimonialCarousel() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(true);

  /*
    Number of cards visible based on screen width.

    Mobile  → 1
    Tablet  → 2
    Desktop → 3
    Large   → 4
  */

  const [visibleCards, setVisibleCards] = useState(3);

  useEffect(() => {
    const updateCards = () => {
      if (window.innerWidth < 640) {
        setVisibleCards(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCards(2);
      } else if (window.innerWidth < 1280) {
        setVisibleCards(3);
      } else {
        setVisibleCards(4);
      }
    };

    updateCards();

    window.addEventListener("resize", updateCards);

    return () => {
      window.removeEventListener("resize", updateCards);
    };
  }, []);

  /*
    Maximum position the slider can move to.
  */

  const maxIndex = Math.max(team.length - visibleCards, 0);

  /*
    NEXT
  */

const nextSlide = useCallback(() => {
  setCurrent((prevIndex) =>
    prevIndex >= maxIndex ? 0 : prevIndex + 1
  );
}, [maxIndex]);

  /*
    PREVIOUS
  */

  const previousSlide = () => {
    setCurrent((prev) => {
      if (prev <= 0) {
        return maxIndex;
      }

      return prev - 1;
    });
  };

  /*
    AUTO SLIDE
  */

useEffect(() => {
  if (isPaused) return;

  const interval = setInterval(() => {
    nextSlide();
  }, 2000);

  return () => clearInterval(interval);
}, [isPaused, nextSlide]);

  /*
    Calculate width of each card.

    gap is handled separately.
  */

  const cardWidth =
    visibleCards === 1
      ? "calc((100% - 0px) / 1)"
      : visibleCards === 2
        ? "calc((100% - 16px) / 2)"
        : visibleCards === 3
          ? "calc((100% - 32px) / 3)"
          : "calc((100% - 48px) / 4)";

  return (
    <section
      className="
        relative
        w-full
        overflow-hidden
        py-16
        sm:py-20
        lg:py-20
      "
    >
      {/* =========================================
          HEADER
      ========================================= */}
  <div className="relative mx-auto max-w-7xl">
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
              Our Team
              </span>

            </div>

            {/* Heading */}

            <h2
              className="
                max-w-3xl
                text-4xl
                font-black
                leading-[0.95]
               
                text-[var(--dark)]
                sm:text-4xl
                lg:text-5xl
              "
            >
              Creative Minds
              <br />

              <span className="text-[var(--primary-dark)]">
                Big Stories
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
        A team of directors, designers, strategists and creators who turn ambitious ideas 
        into memorable visual experiences.
          </p>

        </motion.div>
     </div>

      {/* =========================================
          SLIDER
      ========================================= */}

      <motion.div
          initial={{
            opacity: 0,
            y: 50,
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
        className="relative mx-auto max-w-[1600px] bg-white p-5" 
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="overflow-hidden px-5 sm:px-8 lg:px-10">

          {/* TRACK */}

          <div
            className="
              flex
              gap-4
              transition-transform
              duration-700
              ease-[cubic-bezier(0.22,1,0.36,1)]
            "
            style={{
              transform: `translateX(
                calc(
                  -${current} * (
                    (100% + 16px) / ${visibleCards}
                  )
                )
              )`,
            }}
          >
            {team.map((person) => (
              <a
                href={`/team/${person.id}`}
                key={person.id}
                className="
                  group
                  relative
                  block
                  shrink-0
                  overflow-hidden
                  rounded-[28px]
                  bg-neutral-200
                  shadow-[0_15px_40px_rgba(23,18,42,0.10)]
                  transition-all
                  duration-500
                  hover:-translate-x-2
                  hover:-translate-y-1
                  hover:shadow-[0_25px_60px_rgba(84,40,176,0.20)]
                "
                style={{
                  width: cardWidth,
                }}
              >

                {/* =====================================
                    IMAGE
                ===================================== */}

                <div className="relative aspect-[3/4] w-full overflow-hidden">

                  <img
                    src={person.image}
                    alt={person.name}
                    className="
                      h-full
                      w-full
                      object-cover
                      transition-transform
                      duration-700
                      ease-[cubic-bezier(0.22,1,0.36,1)]
                      group-hover:scale-110
                    "
                  />

                  {/* =================================
                      IMAGE GRADIENT
                  ================================= */}

                  <div
                    className="
                      absolute
                      inset-0
                      bg-gradient-to-t
                      from-[#17122A]
                      via-[#17122A]/20
                      to-transparent
                      opacity-90
                    "
                  />

                  {/* =================================
                      PURPLE HOVER OVERLAY
                  ================================= */}

                  <div
                    className="
                      absolute
                      inset-0
                      bg-[#5428B0]/0
                      transition-all
                      duration-500
                     
                    "
                  />

                  {/* =================================
                      SHINE EFFECT
                  ================================= */}

                  <div
                    className="
                      pointer-events-none
                      absolute
                      inset-y-0
                      -left-[120%]
                      w-[60%]
                      skew-x-[-20deg]
                      bg-gradient-to-r
                      from-transparent
                      via-white/30
                      to-transparent
                      transition-all
                      duration-700
                      group-hover:left-[140%]
                    "
                  />

                  {/* =================================
                      ARROW
                  ================================= */}

                  <div
                    className="
                      absolute
                      right-5
                      top-5
                      flex
                      h-11
                      w-11
                      translate-x-3
                      -translate-y-3
                      items-center
                      justify-center
                      rounded-full
                      bg-[#F8CC10]
                      text-lg
                      text-[#5428B0]
                      opacity-0
                      shadow-lg
                      transition-all
                      duration-400
                      group-hover:translate-x-0
                      group-hover:translate-y-0
                      group-hover:rotate-45
                      group-hover:opacity-100
                    "
                  >
                    ↗
                  </div>

                  {/* =================================
                      TEXT CONTENT
                  ================================= */}

                  <div
                    className="
                      absolute
                      bottom-0
                      left-0
                      right-0
                      p-5
                      sm:p-6
                    "
                  >
                    {/* Role */}

                    <p
                      className="
                        mb-2
                        text-[10px]
                        font-bold
                        uppercase
                        tracking-[0.18em]
                        text-[#F8CC10]
                        transition-transform
                        duration-500
                        group-hover:translate-x-1
                      "
                    >
                      {person.role}
                    </p>

                    {/* Name */}

                    <h3
                      className="
                        text-2xl
                        font-bold
                        tracking-[-0.04em]
                        text-white
                        transition-transform
                        duration-500
                        group-hover:translate-x-1
                      "
                    >
                      {person.name}
                    </h3>

                    {/* Experience */}

                    <div
                      className="
                        mt-2
                        flex
                        items-center
                        gap-2
                        text-xs
                        text-white/60
                      "
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-[#F8CC10]" />

                      {person.experience}
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </motion.div>

      {/* =========================================
          CONTROLS
      ========================================= */}

      <div
        className="
          mx-auto
          mt-8
          flex
          max-w-7xl
          items-center
          justify-between
          px-5
          sm:px-8
          lg:px-10
        "
      >

        {/* =====================================
            DOTS
        ===================================== */}

        <div className="flex items-center gap-2">
          {Array.from({
            length: maxIndex + 1,
          }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              aria-label={`Go to slide ${index + 1}`}
              className={`
                h-1.5
                rounded-full
                transition-all
                duration-300
                ${
                  current === index
                    ? "w-10 bg-[#5428B0]"
                    : "w-2 bg-neutral-300 hover:bg-neutral-400"
                }
              `}
            />
          ))}
        </div>

        {/* =====================================
            PREVIOUS / NEXT
        ===================================== */}

        <div className="flex items-center gap-2">

          <button
            type="button"
            onClick={previousSlide}
            aria-label="Previous"
            className="
              flex
              h-11
              w-11
              items-center
              justify-center
              rounded-full
              border
              border-neutral-200
              bg-white
              text-[#5428B0]
              shadow-sm
              transition-all
              duration-300
              hover:-translate-x-1
              hover:border-[#5428B0]/30
              hover:bg-[#F3EEFF]
              active:scale-90
            "
          >
            ←
          </button>

          <button
            type="button"
            onClick={nextSlide}
            aria-label="Next"
            className="
              flex
              h-11
              w-11
              items-center
              justify-center
              rounded-full
              bg-[#5428B0]
              text-white
              shadow-[0_10px_25px_rgba(84,40,176,0.25)]
              transition-all
              duration-300
              hover:translate-x-1
              hover:bg-[#F8CC10]
              hover:text-[#5428B0]
              active:scale-90
            "
          >
            →
          </button>

        </div>
      </div>
    </section>
  );
}