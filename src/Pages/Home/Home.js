

import FeedbackMarquee from '../../component/Cards/FeedbackMarquee';
import TrustedPartners from '../../component/TrustedPartner/TrustedPartners';
import ServicesSection from '../../component/Cards/ServicesSection';
import OurClients from '../../component/ourclient/OurClients';
import Stepper from '../../component/Stepper/Stepper';
import TestimonialCarousel from '../../component/Cards/TestimonialCarousel';
import OurVision from '../../component/ourvision/OurVision';
import AnimatedButton from '../../component/Button/AnimatedButton';
import TrustedClients from '../../component/Button/TrustedClients';

import AnimatedButton1 from '../../component/Button/AnimatedButton1';
import { motion } from 'framer-motion';

const metrics = [
  { value: '120+', label: 'brand stories launched' },
  { value: '4.9/5', label: 'average client rating' },
  { value: '8x', label: 'faster campaign turnaround' },
  { value: '28K', label: 'monthly views generated' },
];




export default function Home() {
  return (
    <div className="mx-auto max-w-9xl bg-white px-4 py-8 sm:px-6 lg:px-8 mt-20">
     

<section className="relative overflow-hidden rounded-[32px] bg-white">
  <div
    className="
      relative z-10
      grid min-h-[560px]
      items-center
      gap-10
      px-5 py-14
      sm:px-10 sm:py-16
      lg:grid-cols-[1.1fr_0.9fr]
      lg:gap-8
      lg:px-14 lg:py-20
      xl:px-20
    "
  >
    {/* LEFT CONTENT */}
    <div className="relative z-10 max-w-2xl">

      {/* Badge */}
      <div
        className="
          mb-7 inline-flex items-center gap-2.5
          rounded-full border border-gray-200
          bg-gray-50 px-4 py-2
          text-xs font-semibold uppercase
          tracking-[0.16em] text-gray-700
        "
      >
        <span className="h-2 w-2 rounded-full bg-[#F8CC10]" />
        Creative Motion Studio
      </div>

      {/* Heading */}
      <h1
        className="
          text-4xl font-extrabold
          leading-[1.08] tracking-[-0.045em]
          text-gray-950
          sm:text-5xl
          md:text-6xl
          xl:text-7xl
        "
      >
        We turn ideas into{" "}
        <span className="relative inline-block">
          <span className="relative z-10">
            cinematic stories
          </span>

          {/* Yellow underline */}
          <span
            className="
              absolute bottom-1 left-0 -z-0
              h-2 w-full rounded-full
              bg-[#F8CC10]/60
              sm:h-3
            "
          />
        </span>{" "}
        that move people.
      </h1>

      {/* Description
      <p
        className="
          mt-6 max-w-lg
          text-base leading-7
          text-gray-500
          sm:text-lg sm:leading-8
        "
      >
        We help ambitious brands stand out through
        creative storytelling, premium video production,
        and performance-driven digital experiences.
      </p> */}

      {/* Client Trust */}
      <div className="mt-8">
        <TrustedClients />
      </div>

      {/* Buttons */}
      <div className="mt-9 flex flex-wrap items-center gap-4">
        <AnimatedButton
          text="Book a discovery call"
          to="/contact"
        />

        <AnimatedButton1
          text="Explore our work"
          to="/work"
        />
      </div>

      {/* Bottom trust indicator */}
      <div
        className="
          mt-10 flex flex-wrap items-center
          gap-x-6 gap-y-3
          border-t border-gray-100
          pt-6
          text-sm text-gray-500
        "
      >
        <span className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-[#F8CC10]" />
          Creative Excellence
        </span>

        <span className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-[#F8CC10]" />
          Strategic Storytelling
        </span>
      </div>
    </div>

    {/* RIGHT VISUAL */}
    <div className="relative mx-auto w-full max-w-[500px]">

      {/* Subtle background decoration */}
      <div
        className="
          absolute -right-4 -top-4
          h-28 w-28 rounded-full
          bg-[#F8CC10]/20 blur-2xl
        "
      />

      <div
        className="
          absolute -bottom-5 -left-5
          h-32 w-32 rounded-full
          bg-purple-100/70 blur-2xl
        "
      />

      {/* Main image */}
      <div
        className="
          group relative overflow-hidden
          rounded-[28px]
          border border-gray-100
          bg-gray-50
          shadow-[0_20px_60px_rgba(0,0,0,0.08)]
        "
      >
        <img
          src="https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?w=1200&q=85"
          alt="Professional video production and cinematic storytelling"
          className="
            aspect-[4/5] w-full object-cover
            transition-transform duration-700
            group-hover:scale-105
            sm:aspect-[5/4]
            lg:aspect-[4/5]
          "
        />

        {/* Soft image overlay */}
        <div
          className="
            absolute inset-0
            bg-gradient-to-t
            from-black/65 via-transparent to-transparent
          "
        />

        {/* Image content */}
        <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
          <span
            className="
              inline-flex rounded-full
              bg-[#F8CC10] px-3 py-1.5
              text-[10px] font-bold
              uppercase tracking-[0.15em]
              text-black
            "
          >
            From vision to reality
          </span>

          <h2
            className="
              mt-4 max-w-xs
              text-2xl font-bold
              leading-tight text-white
              sm:text-3xl
            "
          >
            Stories worth watching.
            <br />
            Brands worth remembering.
          </h2>
        </div>
      </div>

      {/* Floating label */}
      <div
        className="
          absolute -left-3 top-8
          rounded-2xl border border-gray-100
          bg-white px-4 py-3
          shadow-[0_8px_30px_rgba(0,0,0,0.08)]
          sm:-left-8 sm:px-5 sm:py-4
        "
      >
        <p className="text-xs font-medium text-gray-400">
          Our approach
        </p>

        <p className="mt-1 text-sm font-bold text-gray-900 sm:text-base">
          Creative meets strategy.
        </p>
      </div>

      {/* Floating accent */}
      <div
        className="
          absolute -bottom-4 right-5
          flex h-14 w-14 items-center justify-center
          rounded-2xl bg-[#F8CC10]
          text-xl font-black text-black
          shadow-lg shadow-yellow-500/10
          sm:h-16 sm:w-16
        "
      >
        VS.
      </div>
    </div>
  </div>
</section>

  
      <section className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {metrics.map((item) => (
          <div key={item.label} className="rounded-[26px] border border-slate-200 bg-white/70 p-6 shadow-sm">
            <div className="text-3xl font-black tracking-[-0.06em] text-[#111827]">{item.value}</div>
            <p className="mt-2 text-sm uppercase tracking-[0.12em] text-slate-500">{item.label}</p>
          </div>
        ))}
      </section>
     <TrustedPartners/>
   
     <ServicesSection/>
     <Stepper/>
     <OurClients/>
     <OurVision/>
     {/* <PortfolioShowcase/> */}
     <TestimonialCarousel/>
   

   <motion.section
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
            duration: 1,
          }}
   className="relative mt-10 overflow-hidden rounded-[30px] border border-white/10 bg-[#4820A0] px-6 py-8 text-white shadow-[0_25px_80px_rgba(84,40,176,0.25)] sm:px-8 lg:px-10 lg:py-10">

  {/* ================= BACKGROUND TEXTURE ================= */}
  <div className="pointer-events-none absolute inset-0 overflow-hidden">

    {/* Main gradient */}
    <div className="absolute inset-0 bg-gradient-to-br from-[#5428B0] via-[#4820A0] to-[#24104f]" />

    {/* Purple glow */}
    <div
      className="
        absolute -left-20 -top-32
        h-80 w-80
        rounded-full
        bg-[#8b5cf6]/25
        blur-[90px]
      "
    />

    {/* Yellow glow */}
    <div
      className="
        absolute -right-20 -top-20
        h-64 w-64
        rounded-full
        bg-[#F8CC10]/15
        blur-[90px]
      "
    />

    {/* Bottom purple glow */}
    <div
      className="
        absolute -bottom-32 left-1/3
        h-72 w-72
        rounded-full
        bg-[#7c3aed]/20
        blur-[100px]
      "
    />

    {/* Subtle grid */}
    <div
      className="
        absolute inset-0 opacity-[0.07]
        [background-image:linear-gradient(rgba(255,255,255,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.5)_1px,transparent_1px)]
        [background-size:42px_42px]
      "
    />

    {/* Dot texture */}
    <div
      className="
        absolute inset-0 opacity-[0.12]
        [background-image:radial-gradient(rgba(255,255,255,0.7)_1px,transparent_1px)]
        [background-size:18px_18px]
      "
    />

    {/* Diagonal light streak */}
    <div
      className="
        absolute -right-20 top-1/2
        h-[160%] w-24
        -translate-y-1/2
        rotate-[25deg]
        bg-gradient-to-b
        from-transparent
        via-white/[0.06]
        to-transparent
        blur-sm
      "
    />

    {/* Decorative circle */}
    <div
      className="
        absolute -right-16 -bottom-24
        h-64 w-64
        rounded-full
        border border-white/[0.08]
      "
    />

    <div
      className="
        absolute -right-6 -bottom-14
        h-40 w-40
        rounded-full
        border border-[#F8CC10]/10
      "
    />

    {/* Floating yellow dot */}
    <div
      className="
        absolute right-[22%] top-8
        h-2.5 w-2.5
        rounded-full
        bg-[#F8CC10]
        shadow-[0_0_20px_rgba(248,204,16,0.7)]
      "
    />

    {/* Small decorative squares */}
    <div
      className="
        absolute right-[12%] top-1/2
        h-3 w-3
        rotate-45
        border border-[#F8CC10]/40
      "
    />

    <div
      className="
        absolute bottom-8 right-[30%]
        h-2 w-2
        rounded-full
        bg-white/30
      "
    />

  </div>

  {/* ================= CONTENT ================= */}
  <div className="relative z-10 lg:flex lg:items-center lg:justify-between lg:gap-10">

    {/* Text */}
    <div className="max-w-2xl">

      

      <h3
        className="
          max-w-2xl
          text-3xl
          font-black
          leading-[1.05]
          tracking-[-0.06em]
          sm:text-4xl
          lg:text-[42px]
        "
      >
        Ready to capture your
        <span className="text-[#F8CC10]"> next big moment?</span>
      </h3>

      <p className="mt-3 max-w-xl text-sm leading-6 text-white/70 sm:text-base">
        Let&apos;s shape a video story that feels unmistakably yours.
      </p>

    </div>

    {/* CTA */}
    <div className="relative mt-7 shrink-0 lg:mt-0">

      {/* Button glow */}
      <div className="pointer-events-none absolute inset-0 rounded-full bg-[#F8CC10]/20 blur-xl" />

      <div className="relative">
        <AnimatedButton1
          text="Start Your Project"
          to="/contact"
        />
      </div>

    </div>

  </div>

</motion.section>
   

      <FeedbackMarquee />

    </div>
  );
}
