import React, { useMemo, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const getYouTubeId = (url = "") => {
  if (!url) return null;

  const patterns = [
    /(?:youtube\.com\/watch\?v=)([^&]+)/,
    /(?:youtu\.be\/)([^?&]+)/,
    /(?:youtube\.com\/embed\/)([^?&]+)/,
    /(?:youtube\.com\/shorts\/)([^?&]+)/,
  ];

  for (const pattern of patterns) {
    const match = url.match(pattern);
    if (match) return match[1];
  }

  return null;
};

export default function LongFormVideoSlider({
  videos = [],
  className = "",
}) {
  const sliderRef = useRef(null);

  const safeVideos = useMemo(() => {
    return videos
      .map((video) => {
        const videoId = getYouTubeId(video.src || video.url || "");

        return {
          ...video,
          videoId,
        };
      })
      .filter((video) => video.videoId);
  }, [videos]);

  const settings = {
    dots: false,
    arrows: false,
    infinite: safeVideos.length > 2,
    autoplay: safeVideos.length > 1,
    autoplaySpeed: 10000,
    speed: 750,
    slidesToShow: Math.min(2, safeVideos.length || 1),
    slidesToScroll: 1,
    cssEase: "cubic-bezier(0.22, 1, 0.36, 1)",
    pauseOnHover: false,
    pauseOnFocus: false,
    swipe: true,
    draggable: true,
    adaptiveHeight: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: Math.min(2, safeVideos.length || 1),
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerMode: safeVideos.length > 1,
          centerPadding: "24px",
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          centerMode: false,
          centerPadding: "0px",
        },
      },
    ],
  };

  if (!safeVideos.length) {
    return (
      <section className={`w-full py-12 text-center ${className}`}>
        <p className="text-sm text-neutral-500">
          Add YouTube video links to display your projects.
        </p>
      </section>
    );
  }

  return (
    <section
      className={`w-full overflow-hidden bg-white py-14 sm:py-20 ${className}`}
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* Header */}
        <div className="mb-8 grid items-start gap-8 lg:mb-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <p className="mb-4 text-[10px] font-bold uppercase tracking-[3px] text-[#5428B0]">
              Our Long Form Videos
            </p>

            <h2 className="text-3xl font-bold leading-[1.08] tracking-tight text-[#171717] sm:text-4xl md:text-5xl">
              Let Good Stories Take Their Time.
            </h2>
          </div>

          <div className="lg:pt-8">
            <p className="text-base leading-relaxed text-gray-700 md:text-lg">
              Connecting your brand to its people through thoughtful content
              and conversations that feel genuine.
            </p>

            <div className="mt-7 flex items-center gap-3">
              <span className="h-[2px] w-10 bg-[#F8CC10]" />

              <span className="text-[10px] font-bold uppercase tracking-[2px] text-[#5428B0]">
                Stories that stay with you
              </span>
            </div>
          </div>
        </div>

        {/* YouTube Video Cards */}
        <div className="long-form-slider">
          <Slider ref={sliderRef} {...settings}>
            {safeVideos.map((video, index) => (
              <div
                key={`${video.videoId}-${index}`}
                className="px-2 py-3 sm:px-3"
              >
                <article className="group relative isolate aspect-[16/9] overflow-hidden rounded-xl bg-neutral-950 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#5428B0]/15">
                  <iframe
                    src={`https://www.youtube.com/embed/${video.videoId}?enablejsapi=1&origin=${encodeURIComponent(
                      window.location.origin
                    )}`}
                    title={video.title || `Video ${index + 1}`}
                    className="absolute inset-0 h-full w-full"
                    allow="autoplay; encrypted-media; picture-in-picture; gyroscope; accelerometer; clipboard-write; web-share"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="strict-origin-when-cross-origin"
                  />

                  {video.category && (
                    <div className="pointer-events-none absolute left-0 top-0 z-10 p-4 sm:p-5">
                      <span className="inline-flex rounded-full border border-white/30 bg-black/30 px-3 py-1.5 text-[9px] font-bold uppercase tracking-[2px] text-white backdrop-blur-md">
                        {video.category}
                      </span>
                    </div>
                  )}

                  <div className="pointer-events-none absolute inset-0 rounded-xl border border-white/10 transition-colors duration-300 group-hover:border-[#5428B0]/70" />
                </article>
              </div>
            ))}
          </Slider>
        </div>
      </div>

      <style>{`
        .long-form-slider .slick-list {
          margin-left: -8px;
          margin-right: -8px;
        }

        .long-form-slider .slick-track {
          display: flex;
          align-items: stretch;
        }

        .long-form-slider .slick-slide {
          height: inherit;
        }

        .long-form-slider .slick-slide > div {
          height: 100%;
        }

        .long-form-slider .slick-dots,
        .long-form-slider .slick-arrow {
          display: none !important;
        }

        @media (max-width: 600px) {
          .long-form-slider .slick-list {
            margin-left: -4px;
            margin-right: -4px;
          }
        }
      `}</style>
    </section>
  );
}