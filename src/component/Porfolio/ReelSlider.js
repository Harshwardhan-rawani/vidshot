import React, { useEffect, useMemo, useRef, useState } from "react";
import Slider from "react-slick";
import {
  FiVolume2,
  FiVolumeX,
  FiEye,
} from "react-icons/fi";
export default function ReelSlider({
  reels = [],

  className = "",
  speed = 6000,
}) {
  const sliderRef = useRef(null);
  const sectionRef = useRef(null);
  const videoRefs = useRef([]);
  const [isVisible, setIsVisible] = useState(false);

const [muted, setMuted] = useState({});



const toggleMute = (index) => {
  const video = videoRefs.current[index];
  if (!video) return;

  video.muted = !video.muted;

  setMuted((prev) => ({
    ...prev,
    [index]: video.muted,
  }));
};

  const safeReels = useMemo(
    () => reels.filter((reel) => reel?.url),
    [reels]
  );

  // Play videos only when the section is visible
  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.15,
      }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  // Handle video autoplay and pause
  useEffect(() => {
    videoRefs.current.forEach((video) => {
      if (!video) return;

      video.muted = true;

      if (isVisible) {
        video.play().catch((error) => {
          console.warn("Video autoplay was blocked:", error);
        });
      } else {
        video.pause();
      }
    });
  }, [isVisible, safeReels]);

  const settings = {
    dots: false,
    arrows: false,
    infinite: safeReels.length > 1,
    autoplay: safeReels.length > 1,
    autoplaySpeed: 0,
    speed,
    cssEase: "linear",
    slidesToShow: Math.min(4, safeReels.length),
    slidesToScroll: 1,
    draggable: true,
    swipe: true,
    swipeToSlide: true,
    touchMove: true,
    pauseOnHover: true,
    pauseOnFocus: true,
    accessibility: true,

    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: Math.min(3, safeReels.length),
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: Math.min(2.5, safeReels.length),
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: Math.min(2, safeReels.length),
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: Math.min(1.2, safeReels.length),
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 360,
        settings: {
          slidesToShow: Math.min(1.15, safeReels.length),
          slidesToScroll: 1,
        },
      },
    ],
  };
  

  if (!safeReels.length) {
    return (
      <section className={`w-full py-14 text-center ${className}`}>
        <p className="text-sm text-neutral-500">
          Add Cloudinary video URLs to display the slider.
        </p>
      </section>
    );
  }

  return (
    <section
      ref={sectionRef}
      className={`w-full overflow-hidden bg-white py-14 sm:py-20 ${className}`}
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

        {/* Header */}

        <div className="mb-8 grid items-start gap-8 lg:mb-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <p className="mb-4 text-[10px] font-bold uppercase tracking-[3px] text-[#5428B0]">
              Our Real Edits 
            </p>

            <h2 className="text-3xl font-bold leading-[1.08] tracking-tight text-[#171717] sm:text-4xl md:text-5xl">
              Putting Creative Ideas in Motion  
            </h2>
          </div>

          <div className="lg:pt-8">
       
              <p className="text-base leading-relaxed text-gray-700 md:text-lg">
      From podcasts and interviews to brand films and in-depth stories, we shape every frame to keep your audience from getting bored.  
              </p>
          

      

            <div className="mt-7 flex items-center gap-3">
              <span className="h-[2px] w-10 bg-[#F8CC10]" />

              <span className="text-[10px] font-bold uppercase tracking-[2px] text-[#5428B0]">
                Stories that stay with you
              </span>
            </div>
          </div>
        </div>

        {/* Cloudinary Video Slider */}

        <div className="vidshot-reel-slider overflow-hidden">
          <Slider ref={sliderRef} {...settings}>
            {safeReels.map((reel, index) => (
              <div
                key={`${reel.url}-${index}`}
                className="px-2 sm:px-3"
              >
            <article className="relative h-[450px] w-full overflow-hidden rounded-2xl bg-black shadow-lg">

  {/* Video */}
  <video
    ref={(node) => {
      videoRefs.current[index] = node;
    }}
    src={reel.url}
    poster={reel.poster}
    playsInline
    muted
    loop
    autoPlay
    preload="metadata"
    controls={false}
    disablePictureInPicture


    className="h-full w-full object-cover"
  />

  {/* Bottom Control Bar */}
  <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between bg-gradient-to-t from-black/80 to-transparent px-4 pb-4 pt-10">

    {/* Left: Views */}
    <div className="flex items-center gap-2 text-white">
      <FiEye size={17} />
      <span className="text-sm font-semibold">
        {reel.views || "Views"}
      </span>
    </div>

    {/* Right: Video Controls */}
    <div className="flex items-center gap-2">


{/* Mute / Unmute */}
<button
  type="button"
  onClick={() => toggleMute(index)}
  aria-label={muted[index] === false ? "Mute video" : "Unmute video"}
  className="flex h-9 w-9 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-md transition hover:bg-white/40"
>
  {muted[index] === false ? (
    <FiVolume2 size={17} />
  ) : (
    <FiVolumeX size={17} />
  )}
</button>

    </div>
  </div>
</article>
              </div>
            ))}
          </Slider>
        </div>

      </div>

      {/* React Slick CSS */}

      <style>{`
        .vidshot-reel-slider .slick-list {
          overflow: visible;
          margin: 0 -4px;
        }

        .vidshot-reel-slider .slick-track {
          display: flex;
          align-items: stretch;
        }

        .vidshot-reel-slider .slick-slide {
          height: auto;
        }

        .vidshot-reel-slider .slick-slide > div {
          height: 100%;
        }

        @media (max-width: 639px) {
          .vidshot-reel-slider .slick-list {
            overflow: hidden;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .vidshot-reel-slider .slick-track {
            transition-duration: 0ms !important;
          }
        }
      `}</style>
    </section>
  );
}