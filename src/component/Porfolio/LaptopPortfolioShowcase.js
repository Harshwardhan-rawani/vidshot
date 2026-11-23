
import React, {
  useEffect,
  useState,
  useCallback,
  useRef,
} from "react";

import { AnimatePresence, motion } from "framer-motion";

import {
  FiPlay,
} from "react-icons/fi";

import thumbnailA from "../../Images/thumbnail/thumbnailA.jpeg";
import thumbnailB from "../../Images/thumbnail/thumbnailB.jpeg";

import cover1 from "../../Images/thumbnail/cover1.jpeg";
import cover2 from "../../Images/thumbnail/cover2.jpeg";
import cover3 from "../../Images/thumbnail/cover3.jpeg";
import cover4 from "../../Images/thumbnail/cover4.png";

// ========================================
// PORTFOLIO DATA
// ========================================

const portfolioSlides = [
  {
    id: 1,
    category: "LONG-FORM VIDEOS",
    title: "Long-form Video Editing",
    description: "Stories that keep your audience watching.",
    type: "video",

    items: [
      "https://res.cloudinary.com/dpxi1q0nl/video/upload/v1795403735/kolkata_jeweller_intro_1_1.mp4",
      "https://res.cloudinary.com/dpxi1q0nl/video/upload/v1795403731/Sanjay_sir_jio_ipo_starting_for_website.mp4",
    ],
  },

  {
    id: 2,
    category: "REELS",
    title: "Short-form Video Editing",
    description: "Short videos. Powerful storytelling.",
    type: "reels",

    items: [
      "https://res.cloudinary.com/dpxi1q0nl/video/upload/v1795165740/Video-33522.mp4",
      "https://res.cloudinary.com/dpxi1q0nl/video/upload/v1795165751/Video-53323.mp4",
      "https://res.cloudinary.com/dpxi1q0nl/video/upload/v1795165753/Video-24651.mp4",
      "https://res.cloudinary.com/dpxi1q0nl/video/upload/v1795165841/4_Tips_for_Distraction-Free_Studying_2.mp4",
    ],
  },

  {
    id: 3,
    category: "YOUTUBE THUMBNAILS",
    title: "Thumbnails That Get Clicks",
    description: "Creative visuals that capture attention.",
    type: "thumbnails",

    items: [
      thumbnailA,
      thumbnailB,
    ],
  },

  {
    id: 4,
    category: "REEL COVERS",
    title: "Scroll-Stopping Reel Covers",
    description: "Make every first impression count.",
    type: "covers",

    items: [
      cover1,
      cover2,
      cover3,
      cover4
    ],
  },
];

// ========================================
// ANIMATION
// ========================================

const slideVariants = {
  enter: {
    opacity: 0,
    x: 100,
    scale: 0.97,
  },

  center: {
    opacity: 1,
    x: 0,
    scale: 1,
  },

  exit: {
    opacity: 0,
    x: -100,
    scale: 0.97,
  },
};

// ========================================
// MAIN COMPONENT
// ========================================

export default function LaptopPortfolioShowcase({
  className = "",
  autoPlay = true,
  interval = 15000,
}) {

  const [activeIndex, setActiveIndex] = useState(0);

  const [isPaused, setIsPaused] = useState(false);

  const touchStart = useRef(0);

  const activeSlide = portfolioSlides[activeIndex];

  // ========================================
  // SLIDER NAVIGATION
  // ========================================

  const nextSlide = useCallback(() => {
    setActiveIndex((prev) =>
      (prev + 1) % portfolioSlides.length
    );
  }, []);

  const prevSlide = useCallback(() => {
    setActiveIndex((prev) =>
      (prev - 1 + portfolioSlides.length) %
      portfolioSlides.length
    );
  }, []);

  // ========================================
  // AUTOMATIC SLIDER
  // ========================================

  useEffect(() => {

    if (!autoPlay || isPaused) return;

    const timer = setInterval(() => {
      nextSlide();
    }, interval);

    return () => clearInterval(timer);

  }, [autoPlay, isPaused, interval, nextSlide]);

  // ========================================
  // KEYBOARD NAVIGATION
  // ========================================

  useEffect(() => {

    const handleKeyDown = (e) => {

      if (e.key === "ArrowRight") {
        nextSlide();
      }

      if (e.key === "ArrowLeft") {
        prevSlide();
      }

    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };

  }, [nextSlide, prevSlide]);

  // ========================================
  // TOUCH / SWIPE
  // ========================================

  const handleTouchStart = (e) => {
    touchStart.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {

    const touchEnd = e.changedTouches[0].clientX;

    const difference = touchStart.current - touchEnd;

    if (difference > 50) {
      nextSlide();
    }

    if (difference < -50) {
      prevSlide();
    }

  };

  // ========================================
  // RENDER
  // ========================================

  return (

    <section
      className={`
        w-full
        overflow-hidden
        bg-white
        px-4
        py-16
        sm:py-20
        md:py-24
        ${className}
      `}
    >

      <div className="mx-auto max-w-6xl">

        {/* LAPTOP CONTAINER */}

        <div
          className="relative mx-auto max-w-5xl"

          onMouseEnter={() => setIsPaused(true)}

          onMouseLeave={() => setIsPaused(false)}

          onTouchStart={handleTouchStart}

          onTouchEnd={handleTouchEnd}
        >

          {/* LAPTOP SCREEN */}

          <div
            className="
              relative
              mx-auto
              w-[94%]
              rounded-t-[18px]
              border-[7px]
              border-b-0
              border-[#292929]
              bg-[#111]
              p-[5px]
              shadow-[0_15px_60px_rgba(0,0,0,0.15)]
              sm:rounded-t-[24px]
              sm:border-[10px]
              sm:border-b-0
            "
          >

            {/* CAMERA */}

            <div
              className="
                absolute
                left-1/2
                top-[2px]
                z-30
                h-[5px]
                w-[5px]
                -translate-x-1/2
                rounded-full
                bg-[#555]
              "
            />

            {/* SCREEN */}

            <div
              className="
                relative
                aspect-[16/9]
                overflow-hidden
                rounded-t-[8px]
                bg-[#F8F8FA]
              "
            >

              {/* BROWSER HEADER */}

              <div
                className="
                  absolute
                  inset-x-0
                  top-0
                  z-20
                  flex
                  h-7
                  items-center
                  justify-between
                  border-b
                  border-gray-200
                  bg-white
                  px-3
                  sm:h-9
                  sm:px-5
                "
              >

                <div className="flex items-center gap-1.5">

                  <span className="h-2 w-2 rounded-full bg-[#FF605C]" />

                  <span className="h-2 w-2 rounded-full bg-[#FFBD44]" />

                  <span className="h-2 w-2 rounded-full bg-[#00CA4E]" />

                </div>

                <div
                  className="
                    absolute
                    left-1/2
                    -translate-x-1/2
                    rounded-md
                    bg-gray-100
                    px-4
                    py-1
                    text-[6px]
                    font-medium
                    text-gray-400
                    sm:text-[9px]
                  "
                >
                  www.yourportfolio.com
                </div>

                <span
                  className="
                    text-[7px]
                    font-semibold
                    text-[#5428B0]
                    sm:text-[9px]
                  "
                >
                  PORTFOLIO
                </span>

              </div>

              {/* SLIDE CONTENT */}

              <AnimatePresence mode="wait">

                <motion.div
                  key={activeSlide.id}

                  variants={slideVariants}

                  initial="enter"

                  animate="center"

                  exit="exit"

                  transition={{
                    duration: 0.55,
                    ease: [0.22, 1, 0.36, 1],
                  }}

                  className="
                    absolute
                    inset-0
                    flex
                    flex-col
                    bg-[#F8F8FA]
                    px-4
                    pb-3
                    pt-10
                    sm:px-10
                    sm:pb-6
                    sm:pt-14
                  "
                >

                  {/* CATEGORY HEADING */}

                  <div
                    className="
                      mb-3
                      flex
                      items-end
                      justify-between
                      sm:mb-5
                    "
                  >

                    <div>

                      <p
                        className="
                          mb-1
                          text-[6px]
                          font-bold
                          uppercase
                          tracking-[2px]
                          text-[#5428B0]
                          sm:text-[9px]
                        "
                      >
                        {activeSlide.category}
                      </p>

                      <h3
                        className="
                          text-sm
                          font-extrabold
                          tracking-tight
                          text-[#171717]
                          sm:text-2xl
                        "
                      >
                        {activeSlide.title}
                      </h3>

                      <p
                        className="
                          mt-1
                          hidden
                          text-[10px]
                          text-gray-500
                          sm:block
                          sm:text-xs
                        "
                      >
                        {activeSlide.description}
                      </p>

                    </div>

                    <div
                      className="
                        text-[8px]
                        font-bold
                        text-gray-400
                        sm:text-xs
                      "
                    >
                      0{activeIndex + 1} / 0{portfolioSlides.length}
                    </div>

                  </div>

                  {/* MEDIA GALLERY */}

                  <div
                    className={`
                      grid
                      min-h-0
                      min-w-0
                      flex-1
                      items-center
                      justify-items-center

                      ${
                        activeSlide.type === "reels" ||
                        activeSlide.type === "covers"
                          ? "grid-cols-4 gap-2 sm:gap-4"
                          : "grid-cols-2 gap-3 sm:gap-5"
                      }
                    `}
                  >

                    {activeSlide.items.map((item, index) => {

                      const isPortrait =
                        activeSlide.type === "reels" ||
                        activeSlide.type === "covers";

                      const isVideo =
                        activeSlide.type === "video" ||
                        activeSlide.type === "reels";

                      const aspectClass = isPortrait
                        ? "aspect-[9/16]"
                        : "aspect-video";

                      return (

                        <motion.div
                          key={`${item}-${index}`}

                          initial={{
                            opacity: 0,
                            y: 15,
                          }}

                          animate={{
                            opacity: 1,
                            y: 0,
                          }}

                          transition={{
                            delay: index * 0.08,
                            duration: 0.4,
                          }}

                          className={`
                            group
                            relative
                            w-full
                            min-w-0
                            overflow-hidden
                            rounded-lg
                            bg-gray-200
                            shadow-sm
                            sm:rounded-xl
                            ${aspectClass}
                          `}
                        >

                          {/* AUTOMATIC VIDEO PLAYBACK */}

                          {isVideo ? (

                            <video
                              key={item}

                              src={item}

                              autoPlay

                              muted

                              loop

                              playsInline

                              controls

                              preload="auto"

                              disablePictureInPicture

                              onError={(e) => {
                                console.error(
                                  "Video failed to load:",
                                  item
                                );
                              }}

                              className="
                                absolute
                                inset-0
                                h-full
                                w-full
                                bg-black
                                object-cover
                              "
                            />

                          ) : (

                            /* STATIC IMAGES */

                            <img
                              src={item}

                              alt={`${activeSlide.category} ${index + 1}`}

                              loading="lazy"

                              className="
                                absolute
                                inset-0
                                h-full
                                w-full
                                object-cover
                                transition-transform
                                duration-500
                                group-hover:scale-105
                              "
                            />

                          )}

                          {/* PLAY ICON FOR STATIC VIDEO PREVIEW FALLBACK */}

                          {!isVideo && activeSlide.type === "video" && (

                            <div
                              className="
                                absolute
                                inset-0
                                flex
                                items-center
                                justify-center
                                bg-black/10
                              "
                            >

                              <span
                                className="
                                  grid
                                  h-7
                                  w-7
                                  place-items-center
                                  rounded-full
                                  bg-white/90
                                  text-[#5428B0]
                                  sm:h-12
                                  sm:w-12
                                "
                              >
                                <FiPlay
                                  size={18}
                                  fill="currentColor"
                                />
                              </span>

                            </div>

                          )}

                        </motion.div>

                      );

                    })}

                  </div>

                  {/* BOTTOM LABEL */}

                  <div
                    className="
                      mt-3
                      flex
                      items-center
                      justify-between
                      sm:mt-5
                    "
                  >

                    <span
                      className="
                        text-[6px]
                        font-bold
                        uppercase
                        tracking-[2px]
                        text-gray-400
                        sm:text-[9px]
                      "
                    >
                      Creative Work • Visual Stories
                    </span>

                    {/* SLIDER INDICATORS */}

                    <div className="flex gap-1">

                      {portfolioSlides.map((slide, index) => (

                        <button
                          key={slide.id}

                          type="button"

                          onClick={() => setActiveIndex(index)}

                          aria-label={`Go to ${slide.category}`}

                          className={`
                            h-1
                            rounded-full
                            transition-all
                            duration-300

                            ${
                              activeIndex === index
                                ? "w-5 bg-[#5428B0]"
                                : "w-1.5 bg-gray-300"
                            }
                          `}
                        />

                      ))}

                    </div>

                  </div>

                </motion.div>

              </AnimatePresence>

            </div>

          </div>

          {/* LAPTOP BASE */}

          <div
            className="
              relative
              mx-auto
              h-[9px]
              w-full
              rounded-b-[100%]
              bg-gradient-to-b
              from-[#A5A5A5]
              via-[#55565A]
              to-[#252525]
              shadow-lg
              sm:h-[13px]
            "
          >

            <div
              className="
                absolute
                left-1/2
                top-0
                h-[3px]
                w-[16%]
                -translate-x-1/2
                rounded-b-full
                bg-[#777]
              "
            />

          </div>

          {/* LAPTOP SHADOW */}

          <div
            className="
              mx-auto
              h-4
              w-[80%]
              rounded-full
              bg-black/10
              blur-xl
            "
          />

        </div>

      </div>

    </section>

  );
}
