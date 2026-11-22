import React, { useEffect, useRef, useState } from "react";
import { FiVolume2, FiVolumeX } from "react-icons/fi";

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
  const sectionRef = useRef(null);
  const videoRefs = useRef([]);

  // Both videos start muted
  const [muted, setMuted] = useState([true, true]);

  // Automatically play videos when section enters viewport
  useEffect(() => {
    const section = sectionRef.current;

    // Store the video refs locally for safe cleanup
    const videos = videoRefs.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Always start muted
          videos.forEach((video) => {
            if (video) {
              video.muted = true;

              video.play().catch((error) => {
                console.warn("Video autoplay was blocked:", error);
              });
            }
          });

          setMuted([true, true]);
        } else {
          // Pause videos when user scrolls away
          videos.forEach((video) => {
            if (video) {
              video.pause();
            }
          });
        }
      },
      {
        threshold: 0.35,
      }
    );

    observer.observe(section);

    return () => {
      observer.disconnect();

      // Pause videos using the locally stored reference
      videos.forEach((video) => {
        if (video) {
          video.pause();
        }
      });
    };
  }, []);

  // Mute / Unmute
  const toggleMute = (index) => {
    const video = videoRefs.current[index];

    if (!video) return;

    const nextMuted = !video.muted;

    video.muted = nextMuted;

    setMuted((current) =>
      current.map((value, i) =>
        i === index ? nextMuted : value
      )
    );
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
    <section
      ref={sectionRef}
      className={`w-full bg-white py-12 sm:py-16 ${className}`}
    >
      {/* Heading */}
      <div className="mx-auto mb-10 grid max-w-7xl items-start gap-6 px-10 sm:mb-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">

        {/* Left Heading */}
        <div>
          <p className="mb-4 text-[10px] font-bold uppercase tracking-[3px] text-[#5428B0]">
            Raw Footage to Engaging Content.
          </p>

          <h2 className="text-3xl font-bold leading-[1.08] tracking-tight text-[#171717] sm:text-4xl md:text-5xl">
            Take a little look
            <br />
            <span className="text-[#5428B0]">
              behind the edit
            </span>
          </h2>
        </div>

        {/* Right Description */}
        <div className="lg:pt-8">
          <p className="text-base leading-relaxed text-gray-700 md:text-lg">
            That's where the editing magic happens. We play with cuts,
            transitions, and backgrounds to give your footage a fresh,
            engaging look.
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
        <div className="flex w-full flex-wrap items-center justify-around gap-8 sm:gap-12">

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
                      muted
                      loop
                      autoPlay={false}
                      preload="metadata"
                      controls={false}
                      disablePictureInPicture
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

                  {/* Video Bottom Content */}
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 bg-gradient-to-t from-black/90 via-black/40 to-transparent px-4 pb-8 pt-24 text-white">
                    <p className="mb-1.5 text-[9px] font-extrabold uppercase tracking-[2px] text-[#F8CC10]">
                      {card.category}
                    </p>

                    <h3 className="text-base font-extrabold leading-tight">
                      {card.title}
                    </h3>
                  </div>

                  {/* Mute / Unmute Control */}
                  {card.src && (
                    <div className="absolute bottom-10 right-3 z-30">
                      <button
                        type="button"
                        onClick={() => toggleMute(index)}
                        aria-label={
                          muted[index] ? "Unmute video" : "Mute video"
                        }
                        className="grid h-9 w-9 place-items-center rounded-full bg-black/55 text-white backdrop-blur-md transition hover:bg-black/85"
                      >
                        {muted[index] ? (
                          <FiVolumeX size={16} />
                        ) : (
                          <FiVolume2 size={16} />
                        )}
                      </button>
                    </div>
                  )}

                  {/* Home Indicator */}
                  <div className="pointer-events-none absolute bottom-[7px] left-1/2 z-40 h-[4px] w-[75px] -translate-x-1/2 rounded-full bg-white/90" />

                </div>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}