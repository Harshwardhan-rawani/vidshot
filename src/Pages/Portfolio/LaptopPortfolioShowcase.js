import React, { useEffect, useState, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  FiPlay,

} from "react-icons/fi";

const portfolioSlides = [
  {
    id: 1,
    category: "LONG-FORM VIDEOS",
    title: "Long-form Video Editing",
    description: "Stories that keep your audience watching.",
    type: "video",
    items: [
      "/portfolio/long-1.jpg",
      "/portfolio/long-2.jpg",
      "/portfolio/long-3.jpg",
    ],
  },
  {
    id: 2,
    category: "REELS",
    title: "Short-form Video Editing",
    description: "Short videos. Powerful storytelling.",
    type: "reels",
    items: [
      "/portfolio/reel-1.jpg",
      "/portfolio/reel-2.jpg",
      "/portfolio/reel-3.jpg",
      "/portfolio/reel-4.jpg",
    ],
  },
  {
    id: 3,
    category: "YOUTUBE THUMBNAILS",
    title: "Thumbnails That Get Clicks",
    description: "Creative visuals that capture attention.",
    type: "thumbnails",
    items: [
      "/portfolio/thumb-1.jpg",
      "/portfolio/thumb-2.jpg",
      "/portfolio/thumb-3.jpg",
      "/portfolio/thumb-4.jpg",
    ],
  },
  {
    id: 4,
    category: "REEL COVERS",
    title: "Scroll-Stopping Reel Covers",
    description: "Make every first impression count.",
    type: "covers",
    items: [
      "/portfolio/cover-1.jpg",
      "/portfolio/cover-2.jpg",
      "/portfolio/cover-3.jpg",
    ],
  },
  {
    id: 5,
    category: "POSTERS & GRAPHICS",
    title: "Creative Graphic Design",
    description: "Visual identities designed to stand out.",
    type: "posters",
    items: [
      "/portfolio/poster-1.jpg",
      "/portfolio/poster-2.jpg",
      "/portfolio/poster-3.jpg",
    ],
  },
];

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

export default function LaptopPortfolioShowcase({
  className = "",
  autoPlay = true,
  interval = 3500,
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const activeSlide = portfolioSlides[activeIndex];

  const nextSlide = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % portfolioSlides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setActiveIndex(
      (prev) =>
        (prev - 1 + portfolioSlides.length) % portfolioSlides.length
    );
  }, []);

  // Automatic slider
  useEffect(() => {
    if (!autoPlay || isPaused) return;

    const timer = setInterval(nextSlide, interval);

    return () => clearInterval(timer);
  }, [autoPlay, isPaused, interval, nextSlide]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowRight") nextSlide();
      if (e.key === "ArrowLeft") prevSlide();
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [nextSlide, prevSlide]);

  // Touch and mouse swipe
  let touchStart = 0;

  const handleTouchStart = (e) => {
    touchStart = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    const touchEnd = e.changedTouches[0].clientX;
    const difference = touchStart - touchEnd;

    if (difference > 50) nextSlide();
    if (difference < -50) prevSlide();
  };

  return (
    <section
      className={`w-full overflow-hidden bg-white px-4 py-16 sm:py-20 md:py-24 ${className}`}
    >
      <div className="mx-auto max-w-6xl">

  

        {/* Laptop Container */}
        <div
          className="relative mx-auto max-w-5xl"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >

          {/* Laptop Screen */}
          <div className="relative mx-auto w-[94%] rounded-t-[18px] border-[7px] border-b-0 border-[#292929] bg-[#111] p-[5px] shadow-[0_15px_60px_rgba(0,0,0,0.15)] sm:rounded-t-[24px] sm:border-[10px] sm:border-b-0">

            {/* Camera */}
            <div className="absolute left-1/2 top-[2px] z-30 h-[5px] w-[5px] -translate-x-1/2 rounded-full bg-[#555]" />

            {/* Screen */}
            <div className="relative aspect-[16/9] overflow-hidden rounded-t-[8px] bg-[#F8F8FA]">

              {/* Browser Header */}
              <div className="absolute inset-x-0 top-0 z-20 flex h-7 items-center justify-between border-b border-gray-200 bg-white px-3 sm:h-9 sm:px-5">

                <div className="flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-[#FF605C]" />
                  <span className="h-2 w-2 rounded-full bg-[#FFBD44]" />
                  <span className="h-2 w-2 rounded-full bg-[#00CA4E]" />
                </div>

                <div className="absolute left-1/2 -translate-x-1/2 rounded-md bg-gray-100 px-4 py-1 text-[6px] font-medium text-gray-400 sm:text-[9px]">
                  www.yourportfolio.com
                </div>

                <span className="text-[7px] font-semibold text-[#5428B0] sm:text-[9px]">
                  PORTFOLIO
                </span>

              </div>

              {/* Slide Content */}
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
                  className="absolute inset-0 flex flex-col bg-[#F8F8FA] px-4 pb-3 pt-10 sm:px-10 sm:pb-6 sm:pt-14"
                >

                  {/* Category Heading */}
                  <div className="mb-3 flex items-end justify-between sm:mb-5">

                    <div>
                      <p className="mb-1 text-[6px] font-bold uppercase tracking-[2px] text-[#5428B0] sm:text-[9px]">
                        {activeSlide.category}
                      </p>

                      <h3 className="text-sm font-extrabold tracking-tight text-[#171717] sm:text-2xl">
                        {activeSlide.title}
                      </h3>

                      <p className="mt-1 hidden text-[10px] text-gray-500 sm:block sm:text-xs">
                        {activeSlide.description}
                      </p>
                    </div>

                    <div className="text-[8px] font-bold text-gray-400 sm:text-xs">
                      0{activeIndex + 1} / 0{portfolioSlides.length}
                    </div>

                  </div>

                  {/* Media Gallery */}
                  <div
                    className={`grid min-h-0 flex-1 gap-2 sm:gap-4 ${
                      activeSlide.type === "reels"
                        ? "grid-cols-4"
                        : activeSlide.type === "video"
                        ? "grid-cols-3"
                        : "grid-cols-2"
                    }`}
                  >

                    {activeSlide.items.map((item, index) => (
                      <motion.div
                        key={item}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                          delay: index * 0.08,
                          duration: 0.4,
                        }}
                        className={`group relative min-h-0 overflow-hidden rounded-md bg-gray-200 shadow-sm sm:rounded-xl ${
                          activeSlide.type === "reels"
                            ? "aspect-[9/16] self-center"
                            : activeSlide.type === "thumbnails"
                            ? "aspect-video self-center"
                            : activeSlide.type === "covers"
                            ? "aspect-[9/16] self-center"
                            : activeSlide.type === "posters"
                            ? "aspect-[3/4] self-center"
                            : "aspect-video self-center"
                        }`}
                      >

                        <img
                          src={item}
                          alt={`${activeSlide.category} ${index + 1}`}
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />

                        {activeSlide.type === "video" && (
                          <div className="absolute inset-0 flex items-center justify-center bg-black/10">
                            <span className="grid h-7 w-7 place-items-center rounded-full bg-white/90 text-[#5428B0] sm:h-12 sm:w-12">
                              <FiPlay size={18} fill="currentColor" />
                            </span>
                          </div>
                        )}

                      </motion.div>
                    ))}

                  </div>

                  {/* Bottom Label */}
                  <div className="mt-3 flex items-center justify-between sm:mt-5">

                    <span className="text-[6px] font-bold uppercase tracking-[2px] text-gray-400 sm:text-[9px]">
                      Creative Work • Visual Stories
                    </span>

                    <div className="flex gap-1">
                      {portfolioSlides.map((_, index) => (
                        <span
                          key={index}
                          className={`h-1 rounded-full transition-all duration-300 ${
                            activeIndex === index
                              ? "w-5 bg-[#5428B0]"
                              : "w-1.5 bg-gray-300"
                          }`}
                        />
                      ))}
                    </div>

                  </div>

                </motion.div>

              </AnimatePresence>

            </div>
          </div>

          {/* Laptop Bottom / Base */}
          <div className="relative mx-auto h-[9px] w-full rounded-b-[100%] bg-gradient-to-b from-[#A5A5A5] via-[#55565A] to-[#252525] shadow-lg sm:h-[13px]">

            <div className="absolute left-1/2 top-0 h-[3px] w-[16%] -translate-x-1/2 rounded-b-full bg-[#777]" />

          </div>

          {/* Laptop Shadow */}
          <div className="mx-auto h-4 w-[80%] rounded-full bg-black/10 blur-xl" />

    

        </div>
      </div>
    </section>
  );
}