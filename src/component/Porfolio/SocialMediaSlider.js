import React, { useMemo, useRef } from "react";
import Slider from "react-slick";

import {
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaYoutube,
  FaTiktok,
} from "react-icons/fa";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const socialMediaImages = [
  {
    src: "/images/social-1.jpg",
    alt: "Client social media campaign",
    clientName: "Brand One",
    platform: "instagram",
    category: "Social Media Management",
  },
  {
    src: "/images/social-2.jpg",
    alt: "Client social media campaign",
    clientName: "Brand Two",
    platform: "facebook",
    category: "Campaign",
  },
  {
    src: "/images/social-3.jpg",
    alt: "Client content design",
    clientName: "Brand Three",
    platform: "linkedin",
    category: "Content Creation",
  },
  {
    src: "/images/social-4.jpg",
    alt: "Client brand design",
    clientName: "Brand Four",
    platform: "youtube",
    category: "Branding",
  },
  {
    src: "/images/social-5.jpg",
    alt: "Client Instagram carousel",
    clientName: "Brand Five",
    platform: "instagram",
    category: "Carousel",
  },
  {
    src: "/images/social-6.jpg",
    alt: "Client social media creative",
    clientName: "Brand Six",
    platform: "tiktok",
    category: "Creative",
  },
];

const platformIcons = {
  instagram: FaInstagram,
  facebook: FaFacebookF,
  linkedin: FaLinkedinIn,
  youtube: FaYoutube,
  tiktok: FaTiktok,
};

export default function SocialMediaSlider({
  images = socialMediaImages,
  title = "Social Media Management",
  subtitle = "Creating consistent, engaging and visually compelling social media experiences for brands.",
  className = "",
  speed = 6000,
}) {
  const sliderRef = useRef(null);

  const safeImages = useMemo(
    () => images.filter((image) => image?.src),
    [images]
  );

  const settings = {
    dots: false,
    arrows: false,
    infinite: safeImages.length > 1,
    autoplay: safeImages.length > 1,
    autoplaySpeed: 0,
    speed,
    cssEase: "linear",
    slidesToShow: Math.min(4, safeImages.length),
    slidesToScroll: 1,
    pauseOnHover: true,
    pauseOnFocus: true,
    swipe: true,
    draggable: true,
    swipeToSlide: true,
    touchMove: true,
    accessibility: true,
    rtl: true,

    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: Math.min(3, safeImages.length),
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: Math.min(2, safeImages.length),
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: Math.min(1, safeImages.length),
          centerMode: safeImages.length > 1,
          centerPadding: "35px",
        },
      },
    ],
  };

  if (!safeImages.length) return null;

  return (
    <section
      className={`w-full overflow-hidden bg-white py-16 sm:py-20 ${className}`}
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

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

        {/* Client Portfolio Slider */}

        <div className="social-media-slider">
          <Slider ref={sliderRef} {...settings}>

            {safeImages.map((image, index) => {
              const PlatformIcon =
                platformIcons[image.platform?.toLowerCase()];

              return (
                <div
                  key={`${image.src}-${index}`}
                  className="px-2 py-5 sm:px-3"
                >
                  <article className="group relative aspect-[9/16] w-full overflow-hidden rounded-xl bg-neutral-100 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#5428B0]/15">

                    {/* Client Image */}

                    <img
                      src={image.src}
                      alt={
                        image.alt ||
                        image.clientName ||
                        `Client ${index + 1}`
                      }
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />

                    {/* Social Media Icon - Top Right */}

                    {PlatformIcon && (
                      <div className="absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-black/40 text-lg text-white shadow-lg backdrop-blur-md">
                        <PlatformIcon />
                      </div>
                    )}

                    {/* Bottom Gradient */}

                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-100" />

                    {/* Client Information - Bottom */}

                    <div className="absolute bottom-0 left-0 right-0 z-10 p-5">

                      {image.category && (
                        <p className="mb-1 text-[9px] font-semibold uppercase tracking-[2px] text-white/70">
                          {image.category}
                        </p>
                      )}

                      <h3 className="text-lg font-bold tracking-tight text-white sm:text-xl">
                        {image.clientName || "Our Client"}
                      </h3>

                      <div className="mt-2 h-[2px] w-8 bg-[#F8CC10] transition-all duration-500 group-hover:w-14" />

                    </div>

                    {/* Border */}

                    <div className="pointer-events-none absolute inset-0 rounded-xl border border-white/20 transition-colors duration-300 group-hover:border-[#5428B0]" />

                  </article>
                </div>
              );
            })}

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

        @media (prefers-reduced-motion: reduce) {
          .social-media-slider .slick-track {
            transition-duration: 0ms !important;
          }
        }
      `}</style>
    </section>
  );
}