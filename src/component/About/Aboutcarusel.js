import React,{useEffect,useState} from "react";
import { motion } from "framer-motion";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { AnimatePresence } from "framer-motion";


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

export default function Aboutcarusel() {
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

  )}