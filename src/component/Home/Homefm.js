import React from "react";
import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";

import deepak from "../../Images/client/deepak pandey.jpeg"
import mohit from "../../Images/client/mohit Beriwala.jpeg"
import deven from "../../Images/client/deven u pandey.jpeg"
import nidhi from "../../Images/client/nidhi aneja.png"
import dhiren from "../../Images/client/dhiren bontra.jpeg" 
const testimonials = [
  {
    id: 1,
    rating: 5,
    feedback:
      "VidShot Media did an excellent job bringing our ideas to life. Their creative approach, attention to detail, and commitment to quality made the entire experience smooth and professional. Highly recommended!",
    name: "Deepak Pandey",
    role: "Client",
    image: deepak,
  },
  {
    id: 2,
    rating: 5,
    feedback:
      "What impressed me most was their understanding of our vision. The team delivered creative content with great attention to detail and made the entire process effortless. Really appreciate their work!",
    name: "Mohit Beriwala",
    role: "Client",
    image: mohit,
  },
  {
    id: 3,
    rating: 5,
    feedback:
      "A talented and dedicated team with a great understanding of modern branding and content creation. They brought fresh ideas to the table and delivered results that truly stood out.",
    name: "Deven U. Pandey",
    role: "Client",
    image: deven,
  },
  {
    id: 4,
    rating: 5,
    feedback:
      "Working with VidShot Media was a great experience. Their creativity, communication, and professionalism made a real difference. They understand how to turn ideas into impactful visual content.",
    name: "Nidhi Aneja",
    role: "Client",
    image: nidhi,
  },
  {
    id: 5,
    rating: 5,
    feedback:
      "The team brings a perfect combination of creativity and professionalism. From understanding the requirements to delivering the final work, everything was handled with care and dedication.",
    name: "Dhiren Bontra",
    role: "Client",
    image: dhiren,
  },
];
function Stars({ rating }) {
  return (
    <div
      className="flex items-center gap-1"
      aria-label={`${rating} out of 5 stars`}
    >
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          viewBox="0 0 24 24"
          aria-hidden="true"
          className={`h-4 w-4 shrink-0 sm:h-5 sm:w-5 ${
            star <= rating
              ? "fill-[#D9A441] text-[#D9A441]"
              : "fill-[#D9D9D9] text-[#D9D9D9]"
          }`}
        >
          <path d="M12 2.5l2.93 5.94 6.56.95-4.74 4.62 1.12 6.53L12 17.46l-5.87 3.08 1.12-6.53L2.51 9.39l6.56-.95L12 2.5z" />
        </svg>
      ))}
    </div>
  );
}

function TestimonialCard({ testimonial }) {
  return (
    <motion.article
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
        amount: 0.1,
      }}
      transition={{
        duration: 0.1,
        ease: "easeOut",
      }}
      className="
         group mx-3 flex shrink-0 flex-col
        w-[340px] h-[280px]
        rounded-2xl
        border border-black/[0.04]
        bg-[#f6f6f8]
        p-5
        transition-all duration-300
        hover:-translate-y-1
        hover:shadow-lg
      "
    >
      {/* Rating */}
      <div className="shrink-0">
        <Stars rating={testimonial.rating} />
      </div>

      {/* Feedback */}
      <p
        className="
          mt-4 flex-1 overflow-hidden
          text-xs font-normal
          leading-[1.65]
          tracking-normal
          text-[#303036]
        "
      >
        {testimonial.feedback}
      </p>

      {/* Divider */}
      <div className="my-4 shrink-0 border-t border-dashed border-[#d1d1d5]" />

      {/* User Information */}
      <div className="mt-auto flex shrink-0 items-center gap-3">

        {/* Avatar */}
        <div
          className="
            h-11 w-11 shrink-0
            overflow-hidden rounded-full
            border border-[#dedede]
            bg-white p-[2px]
          "
        >
          <img
            src={testimonial.image}
            alt={testimonial.name}
            loading="lazy"
            className="h-full w-full rounded-full object-cover"
          />
        </div>

        {/* Name and Role */}
        <div className="min-w-0 flex-1">
          <h3
            className="
              truncate text-sm
              font-semibold tracking-tight
              text-[var(--dark)]
            "
          >
            {testimonial.name}
          </h3>

          <p
            className="
              mt-1 truncate
              text-[11px] font-medium
              leading-4 text-[#77777d]
            "
          >
            {testimonial.role}
          </p>
        </div>
      </div>
    </motion.article>
  );
}

export default function Homefm() {
  return (
    <section
      className="
        relative 
        w-full 
        overflow-hidden 
        bg-[var(--neutral)]
        py-10 sm:py-16 
      
      "
    >
      {/* Section container */}
      <div className="mx-auto w-full max-w-[1600px] px-5 sm:px-8 md:px-10 lg:px-12 2xl:px-16">
        {/* Section heading */}


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

    <p className="text-[10px] uppercase tracking-[3px] font-bold text-[#5428B0] mb-4">
      Client Feedback
    </p>

    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-[1.08] tracking-tight text-[#101418]">
      Stories that
      <span className="text-[#5428B0]"> speak for us.</span>
    </h2>

  </div>

  {/* Right Content */}

  <div className="lg:pt-8">

    <p className="text-base md:text-lg text-gray-700 leading-relaxed">
      The best measure of our work is the trust and satisfaction
      of the people we work with. Their experiences inspire us
      to keep creating better.
    </p>



    <div className="flex items-center gap-3 mt-7">

      <span className="h-[2px] w-10 bg-[#F8CC10]" />

      <span className="text-[10px] font-bold uppercase tracking-[2px] text-[#5428B0]">
        Real People. Real Experiences.
      </span>

    </div>

  </div>

</motion.div>

      </div>

     {/* ===============================
      SMOOTH INFINITE MARQUEE
=============================== */}

<div className="relative w-full">

  {/* Left Gradient */}
  <div
    className="
      pointer-events-none absolute
      inset-y-0 left-0 z-10
      w-12 sm:w-20 lg:w-32
      bg-gradient-to-r
      from-[var(--neutral)]
      to-transparent
    "
  />

  {/* Right Gradient */}
  <div
    className="
      pointer-events-none absolute
      inset-y-0 right-0 z-10
      w-12 sm:w-20 lg:w-32
      bg-gradient-to-l
      from-[var(--neutral)]
      to-transparent
    "
  />

  <Marquee
    direction="left"
    speed={30}
    delay={0}
    loop={0}
    autoFill={true}
    play={true}
    pauseOnHover={true}
    pauseOnClick={false}
    gradient={false}
    className=" overflow-hidden"
  >
    {testimonials.map((testimonial) => (
      <TestimonialCard
        key={testimonial.id}
        testimonial={testimonial}
      />
    ))}
  </Marquee>

</div>
    </section>
  );
}

