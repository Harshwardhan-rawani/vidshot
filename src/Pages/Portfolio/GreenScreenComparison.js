import React, { useCallback, useRef, useState } from "react";
import {
  FiPlay,
  FiPause,
  FiVolume2,
  FiVolumeX,
  FiMaximize2,
} from "react-icons/fi";

export default function GreenScreenComparison({
  rawSrc,
  editedSrc,
  rawPoster,
  editedPoster,
  rawTitle = "Green Screen Raw",
  editedTitle = "Product Showcase",
  rawCategory = "RAW FOOTAGE",
  editedCategory = "REELS",
  className = "",
}) {
  const videoRefs = useRef([]);

  const [playing, setPlaying] = useState([false, false]);
  const [muted, setMuted] = useState([true, true]);

  const pauseOther = useCallback((activeIndex) => {
    videoRefs.current.forEach((video, index) => {
      if (video && index !== activeIndex) video.pause();
    });

    setPlaying((current) =>
      current.map((_, index) => index === activeIndex)
    );
  }, []);

  const togglePlay = async (index) => {
    const video = videoRefs.current[index];
    if (!video) return;

    if (!video.paused) {
      video.pause();
      return;
    }

    pauseOther(index);

    try {
      await video.play();
    } catch {
      setPlaying((current) =>
        current.map((value, i) => (i === index ? false : value))
      );
    }
  };

  const toggleMute = (index) => {
    const video = videoRefs.current[index];
    if (!video) return;

    const nextMuted = !muted[index];

    video.muted = nextMuted;

    setMuted((current) =>
      current.map((value, i) => (i === index ? nextMuted : value))
    );
  };

  const openFullscreen = (index) => {
    const video = videoRefs.current[index];
    if (!video) return;

    if (video.requestFullscreen) {
      video.requestFullscreen();
    } else if (video.webkitEnterFullscreen) {
      video.webkitEnterFullscreen();
    }
  };

  const cards = [
    {
      src: rawSrc,
      poster: rawPoster,
      title: rawTitle,
      category: rawCategory,
    },
    {
      src: editedSrc,
      poster: editedPoster,
      title: editedTitle,
      category: editedCategory,
    },
  ];

  return (
    <section className={`w-full bg-white py-12 sm:py-16 ${className}`}>
      {/* Heading */}
<div className="mx-auto mb-10 grid max-w-7xl items-start gap-6 px-10 sm:mb-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">

  {/* Left Heading */}
  <div>
    <p className="mb-4 text-[10px] font-bold uppercase tracking-[3px] text-[#5428B0]">
      Mobile Video Editing
    </p>

    <h2 className="text-3xl font-bold leading-[1.08] tracking-tight text-[#171717] sm:text-4xl md:text-5xl">
      Raw Footage. <br />
      <span className="text-[#5428B0]">Remarkable Results.</span>
    </h2>
  </div>

  {/* Right Description */}
  <div className="lg:pt-8">

    <p className="text-base leading-relaxed text-gray-700 md:text-lg">
      See the transformation from raw green screen footage to
      professionally edited, engaging video content.
    </p>

    <p className="mt-4 text-sm leading-7 text-gray-500 md:text-base">
      We combine creative editing, seamless transitions, background
      replacement and visual storytelling to turn ordinary footage
      into attention-grabbing reels.
    </p>

    <div className="mt-6 flex items-center gap-3">
      <span className="h-[2px] w-10 bg-[#F8CC10]" />

      <span className="text-[10px] font-bold uppercase tracking-[2px] text-[#5428B0]">
        From Raw To Refined
      </span>
    </div>

  </div>

</div>

      <div className="mx-auto max-w-5xl px-4">

        {/* iPhone Devices */}
        <div className="flex flex-wrap items-center justify-around w-full gap-8 sm:gap-12">

          {cards.map((card, index) => (
            <div
              key={`${card.src || "video"}-${index}`}
              className="group flex w-full max-w-[330px] flex-col items-center"
            >

              {/* iPhone Frame */}
              <div className="relative w-full rounded-[44px] border-[5px] border-[#333438] bg-gradient-to-br from-[#55565A] via-[#17181C] to-[#45464A] p-[5px] shadow-[0_20px_50px_rgba(0,0,0,0.18)] transition-transform duration-500 hover:-translate-y-2">

                {/* Inner Frame */}
                <div className="relative aspect-[9/16] overflow-hidden rounded-[37px] bg-black">

                  {/* Video Screen */}
                  {card.src ? (
                    <video
                      ref={(node) => {
                        videoRefs.current[index] = node;
                      }}
                      src={card.src}
                      poster={card.poster}
                      playsInline
                      preload="metadata"
                      muted={muted[index]}
                      loop
                      onPlay={() => {
                        pauseOther(index);
                        setPlaying((current) =>
                          current.map((_, i) => i === index)
                        );
                      }}
                      onPause={() =>
                        setPlaying((current) =>
                          current.map((value, i) =>
                            i === index ? false : value
                          )
                        )
                      }
                      className="absolute inset-0 h-full w-full object-contain"
                    />
                  ) : (
                    <div className="absolute inset-0 grid place-items-center text-xs text-white/50">
                      Add video source
                    </div>
                  )}

                  {/* Top Status Bar */}
                  <div className="pointer-events-none absolute inset-x-0 top-0 z-30 flex h-10 items-center justify-between px-6 text-[10px] font-semibold text-white">

                    <span>9:41</span>

                    <div className="flex items-center gap-1.5">
                      <span className="text-[9px]">●●●</span>
                      <span className="text-xs">Wi-Fi</span>
                      <div className="h-[9px] w-[17px] rounded-[2px] border border-white/80 p-[1px]">
                        <div className="h-full w-[75%] rounded-[1px] bg-white" />
                      </div>
                    </div>

                  </div>

                  {/* Dynamic Island */}
                  <div className="pointer-events-none absolute left-1/2 top-[10px] z-40 h-[23px] w-[82px] -translate-x-1/2 rounded-full bg-black shadow-sm" />

                  {/* Play Button */}
                  {card.src && !playing[index] && (
                    <button
                      type="button"
                      onClick={() => togglePlay(index)}
                      aria-label={`Play ${card.title}`}
                      className="absolute inset-0 z-20 grid place-items-center bg-black/5 transition hover:bg-black/15"
                    >
                      <span className="grid h-14 w-14 place-items-center rounded-full border border-white/70 bg-white/20 text-white shadow-xl backdrop-blur-md transition-transform group-hover:scale-110">
                        <FiPlay size={25} fill="currentColor" className="ml-1" />
                      </span>
                    </button>
                  )}

                  {/* Pause Button */}
                  {card.src && playing[index] && (
                    <button
                      type="button"
                      onClick={() => togglePlay(index)}
                      aria-label={`Pause ${card.title}`}
                      className="absolute right-4 top-14 z-30 grid h-9 w-9 place-items-center rounded-full bg-black/45 text-white opacity-100 backdrop-blur-md transition sm:opacity-0 sm:group-hover:opacity-100"
                    >
                      <FiPause size={16} />
                    </button>
                  )}

                  {/* Video Bottom Content */}
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 bg-gradient-to-t from-black/90 via-black/40 to-transparent px-4 pb-8 pt-24 text-white">

                    <p className="mb-1.5 text-[9px] font-extrabold uppercase tracking-[2px] text-[#F8CC10]">
                      {card.category}
                    </p>

                    <h3 className="text-base font-extrabold leading-tight">
                      {card.title}
                    </h3>

                  </div>

                  {/* Video Controls */}
                  {card.src && (
                    <div className="absolute bottom-10 right-3 z-30 flex items-center gap-2">

                      <button
                        type="button"
                        onClick={() => toggleMute(index)}
                        aria-label={muted[index] ? "Unmute video" : "Mute video"}
                        className="grid h-8 w-8 place-items-center rounded-full bg-black/50 text-white backdrop-blur-md transition hover:bg-black/80"
                      >
                        {muted[index] ? (
                          <FiVolumeX size={15} />
                        ) : (
                          <FiVolume2 size={15} />
                        )}
                      </button>

                      <button
                        type="button"
                        onClick={() => openFullscreen(index)}
                        aria-label="View fullscreen"
                        className="grid h-8 w-8 place-items-center rounded-full bg-black/50 text-white backdrop-blur-md transition hover:bg-black/80"
                      >
                        <FiMaximize2 size={14} />
                      </button>

                    </div>
                  )}

                  {/* Home Indicator */}
                  <div className="pointer-events-none absolute bottom-[7px] left-1/2 z-40 h-[4px] w-[75px] -translate-x-1/2 rounded-full bg-white/90" />

                </div>
              </div>

              {/* Device Label */}
              <div className="mt-5 text-center">
                <p className="text-[10px] font-bold uppercase tracking-[2px] text-[#5428B0]">
                  {card.category}
                </p>

                <h3 className="mt-1 text-sm font-bold text-[#171717]">
                  {card.title}
                </h3>
              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}