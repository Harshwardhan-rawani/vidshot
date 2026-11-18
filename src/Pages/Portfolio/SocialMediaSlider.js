
import React, { useMemo, useRef } from "react";
import Slider from "react-slick";


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const socialMediaImages = [
  {
    src: "/images/social-1.jpg",
    alt: "Instagram social media post design",
    category: "Instagram",
  },
  {
    src: "/images/social-2.jpg",
    alt: "Social media campaign design",
    category: "Campaign",
  },
  {
    src: "/images/social-3.jpg",
    alt: "Social media content design",
    category: "Content Creation",
  },
  {
    src: "/images/social-4.jpg",
    alt: "Brand social media design",
    category: "Branding",
  },
  {
    src: "/images/social-5.jpg",
    alt: "Instagram carousel design",
    category: "Carousel",
  },
  {
    src: "/images/social-6.jpg",
    alt: "Social media creative design",
    category: "Creative",
  },
];

export default function SocialMediaSlider({
  images = socialMediaImages,
  title = "Social Media Management",
  subtitle = "Creating consistent, engaging and visually compelling social media experiences for brands.",
  className = "",
    speed = 6000,
}) {
  const sliderRef = useRef(null);

  
    const safeReels = useMemo(
      () => images.filter((reel) => reel?.src),
      [images]
    );

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
    rtl: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: Math.min(3, images.length || 1),
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: Math.min(2, images.length || 1),
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          centerMode: images.length > 1,
          centerPadding: "35px",
        },
      },
    ],
  };

  if (!images.length) return null;

  return (
    <section
      className={`w-full overflow-hidden bg-white py-16 sm:py-20 ${className}`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

        {/* Header */}
        <div className="mb-8 grid items-start gap-8 lg:mb-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <p className="mb-4 text-[10px] font-bold uppercase tracking-[3px] text-[#5428B0]">
              Social Media Management
            </p>

            <h2 className="text-3xl font-bold leading-[1.08] tracking-tight text-[#171717] sm:text-4xl md:text-5xl">
              Building Brands.
              <br />
              <span className="text-[#5428B0]">
                One Post at a Time.
              </span>
            </h2>
          </div>

          <div className="lg:pt-8">
            <p className="text-base leading-relaxed text-gray-700 md:text-lg">
              {subtitle}
            </p>

            <p className="mt-5 text-sm leading-7 text-gray-500 md:text-base">
              From creative content and engaging posts to cohesive brand
              storytelling, we manage every detail of your social media presence.
            </p>

            <div className="mt-7 flex items-center gap-3">
              <span className="h-[2px] w-10 bg-[#F8CC10]" />
              <span className="text-[10px] font-bold uppercase tracking-[2px] text-[#5428B0]">
                Content That Connects
              </span>
            </div>
          </div>
        </div>

 

        {/* Screenshot Slider */}
        <div className="social-media-slider">
          <Slider ref={sliderRef} {...settings}>
            {images.map((image, index) => (
              <div key={`${image.src}-${index}`} className="px-2 py-5 sm:px-3">
                <div className="group relative aspect-[4/5] w-full overflow-hidden rounded-xl bg-neutral-100 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#5428B0]/10">

                  {/* Screenshot */}
                  <img
                    src={image.src}
                    alt={image.alt || `Social media design ${index + 1}`}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />

                  {/* Bottom Gradient */}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                  {/* Category */}
                  {image.category && (
                    <div className="pointer-events-none absolute bottom-4 left-4 translate-y-3 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                      <span className="rounded-full border border-white/30 bg-black/30 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-white backdrop-blur-md">
                        {image.category}
                      </span>
                    </div>
                  )}

                  {/* Border */}
                  <div className="pointer-events-none absolute inset-0 rounded-xl border border-black/5 transition-colors duration-300 group-hover:border-[#5428B0]/40" />
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>

      {/* Slick Styling */}
      <style>{`
        .social-media-slider .slick-list {
          margin-left: -8px;
          margin-right: -8px;
          overflow: hidden;
        }

        .social-media-slider .slick-track {
          display: flex;
          align-items: stretch;
        }

        .social-media-slider .slick-slide {
          height: inherit;
        }

        .social-media-slider .slick-slide > div {
          height: 100%;
        }

        .social-media-slider .slick-dots,
        .social-media-slider .slick-arrow {
          display: none !important;
        }

        .social-media-slider .slick-slide img {
          user-select: none;
          -webkit-user-drag: none;
        }

        @media (max-width: 600px) {
          .social-media-slider .slick-list {
            margin-left: -4px;
            margin-right: -4px;
          }
        }
      `}</style>
    </section>
  );
}
