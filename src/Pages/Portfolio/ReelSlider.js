import React, { useCallback, useMemo, useRef, useState } from "react";
import Slider from "react-slick";
import {
  FiPlay,
  FiPause,
  FiVolume2,
  FiVolumeX,
  FiMaximize2,
} from "react-icons/fi";


/**
 * ReelSlider
 * Automatic, smooth left-to-right reel slider built with react-slick.
 * No arrows, dots, pagination, or manual navigation controls.
 * Each reel card uses a 9:16 aspect ratio.
 */
export default function ReelSlider({
  reels = [],
    title = "Long-Form Video Projects",
  subtitle = "Stories, interviews and conversations edited to keep audiences watching.",
  className = "",
  speed = 6000,
}) {
  const sliderRef = useRef(null);
  const videoRefs = useRef([]);
  const [playingIndex, setPlayingIndex] = useState(null);
  const [muted, setMuted] = useState(true);

  const safeReels = useMemo(
    () => reels.filter((reel) => reel?.src),
    [reels]
  );

  const pauseOtherVideos = useCallback((keepIndex) => {
    videoRefs.current.forEach((video, index) => {
      if (video && index !== keepIndex && !video.paused) video.pause();
    });
  }, []);

  const handlePlay = useCallback(
    async (index) => {
      const video = videoRefs.current[index];
      if (!video) return;

      if (!video.paused) {
        video.pause();
        return;
      }

      pauseOtherVideos(index);
      sliderRef.current?.slickPause();
      video.muted = muted;

      try {
        await video.play();
        setPlayingIndex(index);
      } catch {
        setPlayingIndex(null);
        sliderRef.current?.slickPlay();
      }
    },
    [muted, pauseOtherVideos]
  );

  const handlePause = (index) => {
    setPlayingIndex((current) => (current === index ? null : current));
    sliderRef.current?.slickPlay();
  };

  const toggleMute = (index) => {
    const nextMuted = !muted;
    setMuted(nextMuted);
    const video = videoRefs.current[index];
    if (video) video.muted = nextMuted;
  };

  const openFullscreen = (index) => {
    const video = videoRefs.current[index];
    if (video?.requestFullscreen) video.requestFullscreen();
    else if (video?.webkitEnterFullscreen) video.webkitEnterFullscreen();
  };

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
    pauseOnHover: true,
    pauseOnFocus: true,
    swipe: true,
    draggable: true,
    accessibility: true,
    responsive: [
      // Small laptops and landscape tablets
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: Math.min(3, safeReels.length),
          slidesToScroll: 1,
        },
      },
      // Tablets
      {
        breakpoint: 900,
        settings: {
          slidesToShow: Math.min(2.5, safeReels.length),
          slidesToScroll: 1,
        },
      },
      // Large phones
      {
        breakpoint: 640,
        settings: {
          slidesToShow: Math.min(2, safeReels.length),
          slidesToScroll: 1,
        },
      },
      // Standard phones
      {
        breakpoint: 480,
        settings: {
          slidesToShow: Math.min(1.2, safeReels.length),
          slidesToScroll: 1,
        },
      },
      // Very small phones
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
          Add reel video sources to display the slider.
        </p>
      </section>
    );
  }

  return (
    <section className={`w-full overflow-hidden bg-white py-14 sm:py-20 ${className}`}>
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        {/* header */}
          <div className="mb-8 grid items-start gap-8 lg:mb-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <p className="mb-4 text-[10px] font-bold uppercase tracking-[3px] text-[#5428B0]">
              Long-form video
            </p>

            <h2 className="text-3xl font-bold leading-[1.08] tracking-tight text-[#171717] sm:text-4xl md:text-5xl">
              {title}
            </h2>
          </div>

          <div className="lg:pt-8">
            {subtitle && (
              <p className="text-base leading-relaxed text-gray-700 md:text-lg">
                {subtitle}
              </p>
            )}

            <p className="mt-5 text-sm leading-7 text-gray-500 md:text-base">
              From podcasts and interviews to brand films and in-depth stories,
              we shape every frame to keep your audience engaged.
            </p>

            <div className="mt-7 flex items-center gap-3">
              <span className="h-[2px] w-10 bg-[#F8CC10]" />
              <span className="text-[10px] font-bold uppercase tracking-[2px] text-[#5428B0]">
                Stories that stay with you
              </span>
            </div>
          </div>
        </div>
         {/* Slider */}
        <div className="vidshot-reel-slider overflow-hidden">
          <Slider ref={sliderRef} {...settings}>
            {safeReels.map((reel, index) => (
              <div key={`${reel.src}-${index}`} className="px-2 sm:px-3">
                <article className="reel-card aspect-[9/16] group relative w-full overflow-hidden rounded-2xl bg-neutral-950 shadow-lg">
                  <video
                    ref={(node) => {
                      videoRefs.current[index] = node;
                    }}
                    src={reel.src}
                    poster={reel.poster}
                    playsInline
                    preload="metadata"
                    muted={muted}
                    loop
                    controls={false}
                    onPlay={() => {
                      pauseOtherVideos(index);
                      setPlayingIndex(index);
                      sliderRef.current?.slickPause();
                    }}
                    onPause={() => handlePause(index)}
                    onEnded={() => handlePause(index)}
                    className="absolute inset-0 h-full w-full object-cover"
                  />

                  {playingIndex !== index && (
                    <button
                      type="button"
                      onClick={() => handlePlay(index)}
                      aria-label={`Play ${reel.title || `reel ${index + 1}`}`}
                      className="absolute inset-0 z-10 grid place-items-center bg-black/15 transition-colors hover:bg-black/30"
                    >
                      <span className="grid h-14 w-14 place-items-center rounded-full border border-white/70 bg-white/20 text-white shadow-xl backdrop-blur-md">
                        <FiPlay className="ml-1" size={24} fill="currentColor" />
                      </span>
                    </button>
                  )}

                  {playingIndex === index && (
                    <button
                      type="button"
                      onClick={() => handlePlay(index)}
                      aria-label={`Pause ${reel.title || `reel ${index + 1}`}`}
                      className="absolute right-3 top-3 z-20 grid h-9 w-9 place-items-center rounded-full bg-black/50 text-white opacity-100 backdrop-blur-sm transition sm:opacity-0 sm:group-hover:opacity-100"
                    >
                      <FiPause size={17} />
                    </button>
                  )}

                  <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 bg-gradient-to-t from-black/85 via-black/25 to-transparent px-4 pb-4 pt-16 text-white sm:px-5 sm:pb-5">
                    {reel.category && (
                      <p className="mb-1 text-[9px] font-bold uppercase tracking-[0.18em] text-[#F8CC10] sm:text-[10px]">
                        {reel.category}
                      </p>
                    )}
                    <h3 className="line-clamp-2 text-sm font-bold sm:text-base">
                      {reel.title || `Reel ${index + 1}`}
                    </h3>
                  </div>

                  <div className="absolute bottom-3 right-3 z-30 flex gap-1.5 sm:bottom-4 sm:right-4">
                    <button
                      type="button"
                      onClick={() => toggleMute(index)}
                      aria-label={muted ? "Unmute video" : "Mute video"}
                      className="grid h-8 w-8 place-items-center rounded-full bg-black/50 text-white backdrop-blur-sm transition hover:bg-black/75"
                    >
                      {muted ? <FiVolumeX size={15} /> : <FiVolume2 size={15} />}
                    </button>
                    <button
                      type="button"
                      onClick={() => openFullscreen(index)}
                      aria-label="View fullscreen"
                      className="grid h-8 w-8 place-items-center rounded-full bg-black/50 text-white backdrop-blur-sm transition hover:bg-black/75"
                    >
                      <FiMaximize2 size={14} />
                    </button>
                  </div>
                </article>
              </div>
            ))}
          </Slider>
        </div>
      </div>

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
        .reel-card {
          aspect-ratio: 9 / 16;
          isolation: isolate;
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
