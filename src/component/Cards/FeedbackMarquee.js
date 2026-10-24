import React from "react";
import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";

const testimonials = [
  {
    id: 1,
    rating: 4,
    feedback:
      "Throughout the process, they kept me informed and involved, ensuring I was happy with the direction. I came to them with a vague idea, and they helped me refine it into a concrete plan.",
    name: "Ema Watson",
    role: "Founder at Ritof",
    image:
      "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=200",
  },
  {
    id: 2,
    rating: 5,
    feedback:
      "The team understood our vision from day one and transformed our ideas into content that actually connected with our audience.",
    name: "Sarah Miller",
    role: "Marketing Director",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200",
  },
  {
    id: 3,
    rating: 5,
    feedback:
      "From concept to final delivery, everything was handled professionally. The creative quality and attention to detail were outstanding.",
    name: "Daniel Carter",
    role: "CEO at Nova",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200",
  },
  {
    id: 4,
    rating: 4,
    feedback:
      "They took our rough concept and turned it into a clear creative direction. Communication was smooth and the final result exceeded our expectations.",
    name: "Olivia Brown",
    role: "Brand Manager",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200",
  },
  {
    id: 5,
    rating: 5,
    feedback:
      "A genuinely creative team that understands what brands need today. The content felt authentic, engaging and completely aligned with our brand.",
    name: "James Wilson",
    role: "Founder at Elevate",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200",
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
          }}
          transition={{
            duration: 0.7,
          }}
      className="
        group mx-2 flex w-[calc(100vw-40px)] max-w-[420px]
        shrink-0 flex-col rounded-2xl border border-black/[0.04]
        bg-[#f6f6f8] p-5
        transition-all duration-300
        sm:mx-3 sm:w-[400px] sm:rounded-3xl sm:p-7
        md:w-[440px] md:p-8
        lg:w-[480px]
        xl:w-[500px]
        2xl:w-[520px]
      "
    >
      {/* Rating */}
      <Stars rating={testimonial.rating}/>

      {/* Feedback */}
      <p
        className="
          mt-5 text-sm font-normal leading-7 tracking-[-0.01em]
          text-[#303036]
          sm:mt-6 sm:text-base sm:leading-7
          lg:text-[17px] lg:leading-8
        "
      >
        {testimonial.feedback}
      </p>

      {/* Divider */}
      <div className="my-5 border-t border-dashed border-[#d1d1d5] sm:my-6" />

      {/* User information */}
      <div className="mt-auto flex items-center gap-3 sm:gap-4">
        {/* Avatar */}
        <div
          className="
            h-11 w-11 shrink-0 overflow-hidden rounded-full
            border border-[#dedede] bg-white p-[2px]
            sm:h-14 sm:w-14
          "
        >
          <img
            src={testimonial.image}
            alt={testimonial.name}
            loading="lazy"
            className="h-full w-full rounded-full object-cover"
          />
        </div>

        {/* Name and role */}
        <div className="min-w-0">
          <h3
            className="
              truncate text-base font-semibold tracking-tight
              text-[var(--dark)]
              sm:text-lg
              lg:text-xl
            "
          >
            {testimonial.name}
          </h3>

          <p
            className="
              mt-1 break-words text-xs font-medium leading-5
              text-[#77777d]
              sm:text-sm
            "
          >
            {testimonial.role}
          </p>
        </div>
      </div>
    </motion.article>
  );
}

export default function FeedbackMarquee() {
  return (
    <section
      className="
        relative 
        w-full 
        overflow-hidden 
        bg-[var(--neutral)]
        py-12 sm:py-16 lg:py-20
      "
    >
      {/* Section container */}
      <div className="mx-auto w-full max-w-[1600px] px-5 sm:px-8 md:px-10 lg:px-12 2xl:px-16">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="
            mb-8 flex flex-col gap-5
            sm:mb-10 sm:gap-6
            md:mb-12
            lg:flex-row lg:items-end lg:justify-between
          "
        >
          {/* Heading content */}
          <div className="min-w-0 flex-1">
            {/* Label */}
            <div className="mb-4 flex items-center gap-3 sm:mb-5">
              <span
                className="
                  h-2 w-2 shrink-0 rounded-full
                  bg-[var(--secondary-dark,#f8cc10)]
                  sm:h-2.5 sm:w-2.5
                "
              />

              <span
                className="
                  text-[10px] font-semibold uppercase
                  tracking-[0.18em]
                  text-[var(--primary-dark,#4820a0)]
                  sm:text-xs sm:tracking-[0.2em]
                "
              >
                Client Feedback
              </span>
            </div>

            {/* Main heading */}
            <h2
              className="
                max-w-4xl text-[clamp(2rem,5vw,3rem)]
                font-black leading-[1.02]
                text-[var(--dark)]
              "
            >
              What Our Clients
              <br />

              <span className="text-[var(--primary-dark,#4820a0)]">
                Say About Us
              </span>
            </h2>
          </div>

          {/* Description */}
          <p
            className="
              max-w-lg text-sm leading-6 text-[var(--dark)]
              sm:text-base sm:leading-7
              lg:max-w-sm lg:pb-1
              xl:max-w-md
            "
          >
            A team of directors, designers, strategists and creators who turn
            ambitious ideas into memorable visual experiences.
          </p>
        </motion.div>
      </div>

      {/* Full-width marquee */}
      <div className="relative w-full">
        {/* Left gradient */}
        <div
          aria-hidden="true"
          className="
            pointer-events-none absolute inset-y-0 left-0 z-10
            w-5 bg-gradient-to-r from-[var(--neutral)] to-transparent
            sm:w-10 md:w-16 lg:w-24
          "
        />

        {/* Right gradient */}
        <div
          aria-hidden="true"
          className="
            pointer-events-none absolute inset-y-0 right-0 z-10
            w-5 bg-gradient-to-l from-[var(--neutral)] to-transparent
            sm:w-10 md:w-16 lg:w-24
          "
        />

        <Marquee
          direction="left"
          speed={35}
          pauseOnHover
          gradient={false}
          loop={0}
          autoFill
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

