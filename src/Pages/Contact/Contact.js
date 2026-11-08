import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import {
  ArrowLeft,
  ArrowRight,
  Check,
  Send,
} from "lucide-react";


const projectTypes = [
  "Reels",
  "Brand Video",
  "Design",
  "Social Media",
  "Ads",
  "Others",
];

const budgets = [
  "Below ₹10,000",
  "₹10,000 - ₹25,000",
  "₹25,000 - ₹50,000",
  "₹50,000 - ₹1,00,000",
  "₹1,00,000+",
  "Let's Discuss",
];

/* =========================================
   ANIMATION VARIANTS
========================================= */

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const ContactSection = ({ services }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedServices, setSelectedServices] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    budget: "",
    details: "",
  });

  const activeService = services[activeIndex];

  // Automatic carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % services.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [services.length]);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % services.length);
  };

  const prevSlide = () => {
    setActiveIndex(
      (prev) => (prev - 1 + services.length) % services.length
    );
  };

  const toggleService = (service) => {
    setSelectedServices((prev) =>
      prev.includes(service)
        ? prev.filter((item) => item !== service)
        : [...prev, service]
    );
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const inquiry = {
      ...formData,
      services: selectedServices,
    };

    console.log("Inquiry Submitted:", inquiry);

    // Connect your email / Google Sheets API here.
  };

  return (
<div className="relative w-full bg-[#FAFAFA] pt-24 pb-16 lg:pt-28 lg:pb-20">
      {/* =========================================================
          BACKGROUND
      ========================================================= */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* purple glow */}
        <div className="absolute -left-40 top-20 h-[420px] w-[420px] rounded-full bg-[#5428B0]/[0.05] blur-3xl" />

        {/* yellow glow */}
        <div className="absolute -right-40 top-[35%] h-[350px] w-[350px] rounded-full bg-[#F8CC10]/[0.06] blur-3xl" />

        {/* grid */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: `
              linear-gradient(#17122a 1px, transparent 1px),
              linear-gradient(90deg, #17122a 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px",
          }}
        />
      </div>
  {/* Heading */}
  <motion.div
    variants={stagger}
    initial="hidden"
    animate="visible"
    className="text-center mb-10 md:mb-12 px-5"
  >

    <motion.p
      variants={fadeUp}
      className="text-[10px] font-bold uppercase tracking-[3px] text-[#5428B0] mb-3"
    >
      Let's Connect
    </motion.p>

    <motion.h1
      variants={fadeUp}
      className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-[-0.06em] text-[#171717]"
    >
      Contact <span className="text-[#5428B0]">Us.</span>
    </motion.h1>

    <motion.p
      variants={fadeUp}
      className="text-sm text-gray-500 mt-4 max-w-md mx-auto leading-relaxed"
    >
      Have a project in mind? Let's create something meaningful together.
    </motion.p>

  </motion.div>

  {/* Contact Form Section */}
  <section className="
    w-[94%] lg:w-[85%]
    max-w-[1450px]
    mx-auto
    shadow-lg
    px-5 md:px-8
    rounded-2xl
    py-6
    bg-white
  ">

  <div className="w-full h-full">

    <div className="grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-4 h-full">

      {/* LEFT FORM */}
<div className="bg-white rounded-2xl p-2 lg:p-5 h-full">

  {/* Heading */}
  <div className="mb-5">
    <h2 className="text-3xl lg:text-5xl font-bold tracking-tight text-[#171717]">
      Get in <span className="text-[#5428b0]">Touch.</span>
    </h2>

    <p className="text-xs text-gray-500 mt-1">
      Tell us about your project. Let's create something amazing together.
    </p>
  </div>

  {/* Form */}
  <form onSubmit={handleSubmit} className="space-y-3">

    {/* Name */}
   

      <div>
        <label className="block text-[12px] font-semibold text-gray-700 mb-1">
          Full Name
        </label>

        <input
          type="text"
          name="name"
          placeholder="Your name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-xs text-gray-800 outline-none transition-all focus:border-[#5428b0] focus:ring-2 focus:ring-[#5428b0]/10"
        />
      </div>
{/* Email */}
   <div>
        <label className="block text-[12px] font-semibold text-gray-700 mb-1">
          Email Address
        </label>

        <input
          type="email"
          name="email"
          placeholder="you@company.com"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-xs text-gray-800 outline-none transition-all focus:border-[#5428b0] focus:ring-2 focus:ring-[#5428b0]/10"
        />
      </div>
    {/* Contact + Budget */}
    <div className="grid grid-cols-2 gap-3">

      <div>
        <label className="block text-[12px] font-semibold text-gray-700 mb-1">
          Contact Number
        </label>

        <input
          type="tel"
          name="contact"
          placeholder="+91 00000 00000"
          value={formData.contact}
          onChange={handleChange}
          required
          className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-xs text-gray-800 outline-none transition-all focus:border-[#5428b0] focus:ring-2 focus:ring-[#5428b0]/10"
        />
      </div>

      <div>
        <label className="block text-[12px] font-semibold text-gray-700 mb-1">
          Estimated Budget
        </label>

        <select
          name="budget"
          value={formData.budget}
          onChange={handleChange}
          required
          className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-xs text-gray-600 bg-white outline-none transition-all focus:border-[#5428b0] focus:ring-2 focus:ring-[#5428b0]/10"
        >
          <option value="">Select budget</option>

          {budgets.map((budget) => (
            <option key={budget} value={budget}>
              {budget}
            </option>
          ))}
        </select>
      </div>

    </div>

    {/* Services */}
    <div>
      <label className="block text-[12px] font-semibold text-gray-700 mb-2">
        What do you need?
      </label>

      <div className="flex flex-wrap gap-2">
        {projectTypes.map((type) => {
          const selected = selectedServices.includes(type);

          return (
            <button
              key={type}
              type="button"
              onClick={() => toggleService(type)}
              className={`px-3 py-1.5 rounded-full text-[10px] font-medium border transition-all flex items-center gap-1
                ${
                  selected
                    ? "bg-[#5428b0] text-white border-[#5428b0]"
                    : "bg-white text-gray-600 border-gray-300 hover:border-[#5428b0] hover:text-[#5428b0]"
                }`}
            >
              {selected && <Check size={11} />}
              {type}
            </button>
          );
        })}
      </div>
    </div>

    {/* Project Details */}
    <div>
      <label className="block text-[12px] font-semibold text-gray-700 mb-1">
        Project Details
      </label>

      <textarea
        name="details"
        rows="3"
        placeholder="Tell us about your project..."
        value={formData.details}
        onChange={handleChange}
        required
        className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-xs text-gray-800 outline-none resize-none transition-all focus:border-[#5428b0] focus:ring-2 focus:ring-[#5428b0]/10"
      />
    </div>

    {/* Submit Button */}
    <button
      type="submit"
      className="group w-full bg-[#5428b0] text-white rounded-lg py-3 px-4 flex items-center justify-between border border-[#5428b0] hover:bg-[#f8cc10] hover:border-[#f8cc10] hover:text-black transition-all duration-300"
    >
      <span className="text-xs font-semibold">
        Send Inquiry
      </span>

      <Send
        size={15}
        className="transition-transform duration-300 group-hover:translate-x-1"
      />
    </button>

    <p className="text-[10px] text-gray-400 text-center">
      Your information is safe with us. We'll get back to you within 24 hours.
    </p>

  </form>
</div>

          {/* ================= RIGHT SERVICE CAROUSEL ================= */}

             <div className="relative h-[500px] lg:h-full min-h-0 rounded-2xl overflow-hidden bg-[#19142c]">

            <AnimatePresence mode="wait">

              <motion.div
                key={activeService.id}
                initial={{ opacity: 0, scale: 1.04 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.6 }}
                className="absolute inset-0"
              >

                {/* Background Image */}

                <img
                  src={activeService.image}
                  alt={activeService.title}
                  className="w-full h-full object-cover"
                />

              </motion.div>

            </AnimatePresence>


            {/* Dark Overlay */}

            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-black/10" />

            <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent" />


            {/* Top Label */}

            <div className="absolute top-7 left-7 right-7 flex items-center justify-between z-10">

              <div className="flex items-center gap-2">

                <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse" />

                <span className="text-white text-xs tracking-[2px] uppercase font-medium">
                  Our Expertise
                </span>

              </div>

              <span className="text-white/70 text-xs tracking-widest">
                {String(activeIndex + 1).padStart(2, "0")} /{" "}
                {String(services.length).padStart(2, "0")}
              </span>

            </div>


            {/* Service Content */}

            <div className="absolute bottom-0 left-0 right-0 p-7 md:p-10 z-10">

              <AnimatePresence mode="wait">

                <motion.div
                  key={activeService.id}
                  initial={{ opacity: 0, y: 25 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.4 }}
                >

                  {/* Number */}

                  <span className="text-yellow-400 text-sm font-medium tracking-[3px]">
                    SERVICE {activeService.number}
                  </span>

                  {/* Heading */}

                  <h3 className="text-white text-3xl md:text-5xl font-semibold mt-4 mb-4 tracking-tight max-w-xl">

                    {activeService.title}

                  </h3>

                  {/* Description */}

                  <p className="text-white/75 text-sm md:text-base leading-relaxed max-w-lg">

                    {activeService.description}

                  </p>

                  {/* Tags */}

                  <div className="flex flex-wrap gap-2 mt-6 max-w-lg">

                    {activeService.tags.map((tag) => (

                      <span
                        key={tag}
                        className="px-3 py-1.5 text-[12px] md:text-xs text-white border border-white/30 bg-white/10 backdrop-blur-md rounded-full"
                      >
                        {tag}
                      </span>

                    ))}

                  </div>

                </motion.div>

              </AnimatePresence>


              {/* Bottom Navigation */}

              <div className="flex items-center justify-between mt-9 pt-5 border-t border-white/20">

                {/* Pagination */}

                <div className="flex items-center gap-2">

                  {services.map((service, index) => (

                    <button
                      key={service.id}
                      onClick={() => setActiveIndex(index)}
                      aria-label={`Go to ${service.title}`}
                      className={`h-1 rounded-full transition-all duration-500 ${
                        index === activeIndex
                          ? "w-9 bg-yellow-400"
                          : "w-3 bg-white/40 hover:bg-white"
                      }`}
                    />

                  ))}

                </div>


                {/* Arrows */}

                <div className="flex items-center gap-2">

                  <button
                    onClick={prevSlide}
                    aria-label="Previous service"
                    className="w-10 h-10 rounded-full border border-white/40 text-white flex items-center justify-center hover:bg-white hover:text-black transition-all"
                  >
                    <ArrowLeft size={18} />
                  </button>

                  <button
                    onClick={nextSlide}
                    aria-label="Next service"
                    className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center hover:bg-yellow-400 transition-all"
                  >
                    <ArrowRight size={18} />
                  </button>

                </div>

              </div>

            </div>

          </div>

        </div>
   
      </div>


    </section>
    </div>
  );
};

export default ContactSection;