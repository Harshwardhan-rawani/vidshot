import React from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// SVG ICONS
import InstagramIcon from "../../icons/instagram.svg";
import YoutubeIcon from "../../icons/youtube.svg";
import FacebookIcon from "../../icons/facebook.svg";

// Keep your existing client image imports here.
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
    category: "Founder",
     type : "IRA Skills",
    socials: [

      {
        platform: "YouTube",
        icon: YoutubeIcon,
        followers: "55.7K",
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
    type : "AI and Technology",
    socials :[
      {
        platform: "YouTube",
        icon: YoutubeIcon,
        followers: "2.3K",
      },
      {  platform: "Instagram",
        icon: InstagramIcon,
        followers: "453",
      },
    ],
    images: [
      deepak
    ],
  },

  {
    id: 3,
    name: "Mohit Beriwala",
    category: "Founder",
    type : "Shree Rama Manager LLP",
      socials: [
          {
        platform: "YouTube",
        icon: YoutubeIcon,
        followers: "1.2K",
      },
      {
        platform: "Instagram",
        icon: InstagramIcon,
        followers: "2.9K",
      },
      {
        platform: "Facebook",
        icon: FacebookIcon,
        followers: "5.5k",
      },
    ],

    images: [
    mohit
    ],
  },

  {
    id: 4,
    name: "Nidhi Aneja",
    category: "CEO",
     type : "IRA Skills",
    socials: [
      {
        platform: "Instagram",
        icon: InstagramIcon,
        followers: "53.4k",
      },

    ],

    images: [
     nidhi
    ],
  },
   {
    id: 5,
    name: "Dhiren Bontra",
    category: "Brand",
     type : "Cyclist",
    socials: [
      {
        platform: "Instagram",
        icon: InstagramIcon,
        followers: "5k",
      },
 
    ],

    images: [
     dhiren
    ],
  },
   {
    id: 6,
    name: "S S Alam",
    category: "Fonder",
     type : "Jewellery Manufacture",
    socials: [
          {
        platform: "YouTube",
        icon: YoutubeIcon,
        followers: "1.2K",
      },
      {
        platform: "Instagram",
        icon: InstagramIcon,
        followers: "11.1K",
      },
      {
        platform: "Facebook",
        icon: FacebookIcon,
        followers: "46k",
      },
  
    ],

    images: [
      ssalam  
    ],
  },
];


export default function Homeoc() {
  const settings = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    speed: 9000,
    cssEase: "linear",
    arrows: false,
    dots: false,
    draggable: true,
    swipe: true,
    swipeToSlide: true,
    touchMove: true,
    pauseOnHover: true,
    pauseOnFocus: true,
    rtl: false,
    responsive: [
      {
        breakpoint: 1280,
        settings: { slidesToShow: 3, slidesToScroll: 1 },
      },
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2, slidesToScroll: 1 },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1, slidesToScroll: 1 },
      },
    ],
  };

  return (
    <section className="w-full overflow-hidden mx-auto max-w-7xl  bg-white py-10 md:py-16">
      {/* HEADER */}
      <div className="relative px-5">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-12 grid items-start gap-8 lg:mb-16 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20"
        >
          <div>
            <p className="mb-4 text-[10px] font-bold uppercase tracking-[3px] text-[var(--primary)]">
              Our Clients
            </p>
            <h2 className="text-3xl font-bold leading-[1.08] tracking-tight text-[var(--text)] sm:text-4xl md:text-5xl">
              Good Work Begins
              <span className="text-[var(--primary)]"> With Good Partnerships.</span>
            </h2>
          </div>

          <div className="lg:pt-8">
            <p className="text-base leading-relaxed text-gray-700 md:text-lg">
              Great partnerships create great results. We're proud to
              collaborate with brands and businesses that trust us to
              bring their ideas to life.
            </p>
            <div className="mt-7 flex items-center gap-3">
              <span className="h-[2px] w-10 bg-[var(--secondary)]" />
              <span className="text-[10px] font-bold uppercase tracking-[2px] text-[var(--primary)]">
                Making Good Ideas a Habit
              </span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* CONTINUOUS CLIENT SLIDER */}
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="client-marquee-slider mx-auto max-w-[1600px] px-3 sm:px-5 lg:px-8"
      >
        <Slider {...settings}>
          {clients.map((client) => (
            <div key={client.id} className="px-2 py-3">
              <article className="group relative overflow-hidden rounded-3xl bg-neutral-900 shadow-lg">
                <div className="relative aspect-[7/10] w-full overflow-hidden">
                  <img
                    src={client.images?.[0]}
                    alt={client.name}
              
                      loading="lazy"
                      decoding="async"
                    draggable="false"
                    className="h-full w-full select-none object-cover object-top transition-transform duration-700 ease-out group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />

                  <div className="pointer-events-none absolute inset-0 z-20 overflow-hidden">
                    <div className="absolute -left-[100%] top-0 h-full w-[65%] -skew-x-[25deg] bg-gradient-to-r from-transparent via-white/35 to-transparent opacity-0 transition-all duration-1000 ease-in-out group-hover:left-[150%] group-hover:opacity-100" />
                  </div>

                  <div className="absolute left-5 top-5 z-10">
                    <span className="rounded-full border border-white/30 bg-white/10 px-4 py-2 text-[10px] font-semibold uppercase tracking-widest text-white backdrop-blur-md">
                      {client.category}
                    </span>
                  </div>

                  <div className="absolute right-5 top-5 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-[var(--secondary)] text-lg text-[var(--primary)] transition-transform duration-500 group-hover:rotate-45">
                    ↗
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 z-10 p-5 sm:p-6">
                    <h3 className="text-xl font-bold tracking-tight text-white sm:text-2xl">
                      {client.name}
                    </h3>
                    <p className="mt-1 text-xs font-medium text-white/70">
                      {client.type}
                    </p>

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
            </div>
          ))}
        </Slider>
      </motion.div>

      {/* Slick track styling: continuous linear motion, no controls */}
      <style>{`
        .client-marquee-slider .slick-track {
          display: flex !important;
          transition-timing-function: linear !important;
        }
        .client-marquee-slider .slick-slide {
          height: auto;
        }
        .client-marquee-slider .slick-slide > div {
          height: 100%;
        }
        .client-marquee-slider .slick-list {
          overflow: hidden;
          cursor: grab;
        }
        .client-marquee-slider .slick-list:active {
          cursor: grabbing;
        }
      `}</style>
    </section>
  );
}
