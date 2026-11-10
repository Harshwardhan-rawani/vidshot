import React, {
  useEffect,
  useState,
  useCallback,
  useRef,
} from "react";
import { motion } from "framer-motion";
// SVG ICONS
import InstagramIcon from "../../icons/instagram.svg";
import YoutubeIcon from "../../icons/youtube.svg";
import FacebookIcon from "../../icons/facebook.svg";

// Keep your existing client image imports here.
// Example:
import deven from "../../Images/client/deven u pandey.jpeg";
import deepak from "../../Images/client/deepak pandey.jpeg";
import mohit from "../../Images/client/mohit Beriwala.jpeg";
import nidhi from "../../Images/client/nidhi aneja.png";
import dhiren from "../../Images/client/dhiren bontra.jpeg";
import ssalam from "../../Images/client/ssalam.jpeg";

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

export default function Homeoc() {
  const [current, setCurrent] = useState(0);
  const [visibleCards, setVisibleCards] = useState(3);
  const [isPaused, setIsPaused] = useState(false);
  const [slideStep, setSlideStep] = useState(0);

  const viewportRef = useRef(null);
  const cardRef = useRef(null);

  // Responsive card count
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

    return () => window.removeEventListener("resize", updateCards);
  }, []);

  // Calculate actual card movement distance
  useEffect(() => {
    const calculateStep = () => {
      if (cardRef.current) {
        const cardWidth = cardRef.current.getBoundingClientRect().width;
        const track = cardRef.current.parentElement;

        if (track) {
          const gap = parseFloat(getComputedStyle(track).columnGap) || 0;
          setSlideStep(cardWidth + gap);
        }
      }
    };

    calculateStep();

    const observer = new ResizeObserver(calculateStep);

    if (viewportRef.current) {
      observer.observe(viewportRef.current);
    }

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    window.addEventListener("resize", calculateStep);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", calculateStep);
    };
  }, [visibleCards]);

  // Maximum slider position
  const maxIndex = Math.max(clients.length - visibleCards, 0);

  // Reset position if screen size changes
  useEffect(() => {
    setCurrent((prev) => Math.min(prev, maxIndex));
  }, [maxIndex]);

  // Next slide
  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev >= maxIndex ? 0 : prev + 1));
  }, [maxIndex]);

  // Previous slide
  const previousSlide = useCallback(() => {
    setCurrent((prev) => (prev <= 0 ? maxIndex : prev - 1));
  }, [maxIndex]);

  // Automatic sliding
  useEffect(() => {
    if (isPaused || maxIndex === 0) return;

    const interval = setInterval(nextSlide, 3500);

    return () => clearInterval(interval);
  }, [isPaused, nextSlide, maxIndex]);

  // Responsive card width
  const cardWidth = `calc((100% - ${
    (visibleCards - 1) * 16
  }px) / ${visibleCards})`;

  return (
    <section className="relative w-full overflow-hidden bg-white      py-10
        md:py-16">

      {/* HEADER */}

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
      amount: 0.2,
    }}
    transition={{
      duration: 0.8,
      ease: "easeOut",
    }}
    className="grid lg:grid-cols-[0.8fr_1.2fr] gap-8 lg:gap-20 items-start mb-12 lg:mb-16"
  >

    {/* Left Content */}

    <div>

      <p className="text-[10px] uppercase tracking-[3px] font-bold text-[var(--primary)] mb-4">
        Our Clients
      </p>

      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-[1.08] tracking-tight text-[var(--text)]">
        Brands we've
        <span className="text-[var(--primary)]"> worked with.</span>
      </h2>

    </div>

    {/* Right Content */}

    <div className="lg:pt-8">

      <p className="text-base md:text-lg text-gray-700 leading-relaxed">
        Great partnerships create great results. We're proud to
        collaborate with brands and businesses that trust us to
        bring their ideas to life.
      </p>

      <div className="flex items-center gap-3 mt-7">

        <span className="h-[2px] w-10 bg-[var(--secondary)]" />

        <span className="text-[10px] font-bold uppercase tracking-[2px] text-[var(--primary)]">
          Built on Trust. Driven by Creativity.
        </span>

      </div>

    </div>

  </motion.div>

</div>

      {/* CAROUSEL */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative mx-auto max-w-[1600px] px-3 sm:px-5 lg:px-8"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onFocusCapture={() => setIsPaused(true)}
        onBlurCapture={(e) => {
          if (!e.currentTarget.contains(e.relatedTarget)) {
            setIsPaused(false);
          }
        }}
      >

        {/* VIEWPORT */}
        <div
          ref={viewportRef}
          className="overflow-hidden px-2 py-3 sm:px-3"
        >

          {/* TRACK */}
          <div
            className="flex gap-4 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform"
            style={{
              transform: `translate3d(-${current * slideStep}px, 0, 0)`,
            }}
          >

            {clients.map((client, index) => (
              <article
                key={client.id}
                ref={index === 0 ? cardRef : null}
                className="group relative shrink-0 overflow-hidden rounded-3xl bg-neutral-900 shadow-lg"
                style={{ width: cardWidth }}
              >

                {/* IMAGE */}
                <div className="relative aspect-[3/4] w-full overflow-hidden">

                  <img
                    src={client.images?.[0]}
                    alt={client.name}
                    loading="lazy"
                    className="h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-110"
                  />

                  {/* DARK OVERLAY */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />

                  {/* SHINE EFFECT */}
                  <div
                    className="pointer-events-none absolute inset-0 z-20 overflow-hidden"
                  >
                    <div
                      className="absolute -left-[100%] top-0 h-full w-[65%] -skew-x-[25deg] bg-gradient-to-r from-transparent via-white/35 to-transparent opacity-0 transition-all duration-1000 ease-in-out group-hover:left-[150%] group-hover:opacity-100"
                    />
                  </div>

                  {/* TOP CATEGORY */}
                  <div className="absolute left-5 top-5 z-10">
                    <span className="rounded-full border border-white/30 bg-white/10 px-4 py-2 text-[10px] font-semibold uppercase tracking-widest text-white backdrop-blur-md">
                      {client.category}
                    </span>
                  </div>

                  {/* ARROW */}
                  <div className="absolute right-5 top-5 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-[var(--secondary)] text-lg text-[var(--primary)] transition-transform duration-500 group-hover:rotate-45">
                    ↗
                  </div>

                  {/* CLIENT INFORMATION */}
                  <div className="absolute bottom-0 left-0 right-0 z-10 p-5 sm:p-6">

                    <h3 className="text-xl font-bold tracking-tight text-white sm:text-2xl">
                      {client.name}
                    </h3>

                    <p className="mt-1 text-xs font-medium text-white/70">
                      {client.type}
                    </p>

                    {/* SOCIAL PLATFORMS */}
                    {client.socials?.length > 0 && (
                      <div className="mt-4 flex flex-wrap gap-1.5 sm:gap-2">

                        {client.socials.map((social) => (
                          <div
                            key={social.platform}
                            className="flex items-center gap-1.5 rounded-full border border-white/15 bg-black/30 px-2.5 py-1.5 backdrop-blur-xl sm:gap-2 sm:px-3"
                          >
                            <img
                              src={social.icon}
                              alt={social.platform}
                              className="h-3 w-3 shrink-0 object-contain sm:h-3.5 sm:w-3.5"
                            />

                            <span className="text-[9px] font-semibold text-white/90 sm:text-[10px]">
                              {social.followers}
                            </span>
                          </div>
                        ))}

                      </div>
                    )}

                  </div>
                </div>
              </article>
            ))}

          </div>
        </div>
      </motion.div>

      {/* CAROUSEL CONTROLS */}
      <div className="mx-auto mt-8 flex max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">

        {/* DOTS */}
        <div className="flex items-center gap-2">
          {Array.from({ length: maxIndex + 1 }).map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setCurrent(index)}
              aria-label={`Go to slide ${index + 1}`}
              aria-current={current === index ? "true" : undefined}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                current === index
                  ? "w-10 bg-[var(--primary)]"
                  : "w-2 bg-neutral-300 hover:bg-neutral-400"
              }`}
            />
          ))}
        </div>

        {/* NAVIGATION */}
        <div className="flex items-center gap-2">

          <button
            type="button"
            onClick={previousSlide}
            aria-label="Previous client"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-neutral-200 bg-white text-[var(--primary)] shadow-sm transition-all duration-300 hover:-translate-x-1 hover:border-[var(--primary)]/30 hover:bg-[#F3EEFF] active:scale-90"
          >
            ←
          </button>

          <button
            type="button"
            onClick={nextSlide}
            aria-label="Next client"
            className="flex h-11 w-11 items-center justify-center rounded-full bg-[var(--primary)] text-white shadow-[0_10px_25px_rgba(84,40,176,0.25)] transition-all duration-300 hover:translate-x-1 hover:bg-[var(--secondary)] hover:text-[var(--primary)] active:scale-90"
          >
            →
          </button>

        </div>
      </div>
    </section>
  );
}