import React, { useState } from "react";
import {
  ArrowUpRight,
  Mail,
  Phone,
  MapPin,
  Sparkles,
  Check,
  Loader2,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";
import { motion } from "framer-motion";

import deepak from "../../Images/client/deepak pandey.jpeg";
import mohit from "../../Images/client/mohit Beriwala.jpeg";
import deven from "../../Images/client/deven u pandey.jpeg";
import nidhi from "../../Images/client/nidhi aneja.png";
import dhiren from "../../Images/client/dhiren bontra.jpeg";
import ssalam from "../../Images/client/ssalam.jpeg";

const SCRIPT_URL = process.env.REACT_APP_GOOGLE_APPS_SCRIPT_URL || "";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    budget: "",
    services: [],
    details: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleServiceToggle = (service) => {
    setFormData((current) => ({
      ...current,
      services: current.services.includes(service)
        ? current.services.filter((item) => item !== service)
        : [...current.services, service],
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!SCRIPT_URL) {
      setStatus("error");
      console.error(
        "Missing REACT_APP_GOOGLE_APPS_SCRIPT_URL. Add your deployed Apps Script URL to the frontend environment."
      );
      return;
    }

    if (formData.services.length === 0) {
      setStatus("Please select at least one service.");
      return;
    }

    setLoading(true);
    setStatus("");

    const payload = {
      name: formData.name.trim(),
      email: formData.email.trim(),
      budget: formData.budget,
      services: formData.services.join(", "),
      details: formData.details.trim(),
    };

    try {
      // Google Apps Script is the secure server-side bridge:
      // it sends the email and appends the inquiry to Google Sheets.
      // no-cors makes this a fire-and-forget request; the browser cannot
      // inspect Google's response, so deployment/configuration must be tested.
      await fetch(SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "text/plain;charset=utf-8",
        },
        body: JSON.stringify(payload),
      });

      setStatus("success");
      setFormData({
        name: "",
        email: "",
        budget: "",
        services: [],
        details: "",
      });
    } catch (error) {
      console.error("Contact form submission failed:", error);
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-white text-[#17122a] mt-11">

      {/* =====================================================
          BACKGROUND DECORATION
      ===================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        {/* Purple glow */}
        <div
          className="
            absolute
            -right-40
            top-20
            h-[420px]
            w-[420px]
            rounded-full
            bg-[#5428B0]/[0.06]
            blur-[100px]
          "
        />

        {/* Yellow glow */}
        <div
          className="
            absolute
            -left-40
            bottom-20
            h-[350px]
            w-[350px]
            rounded-full
            bg-[#F8CC10]/[0.08]
            blur-[100px]
          "
        />

        {/* Subtle grid */}
        <div
          className="
            absolute
            inset-0
            opacity-[0.025]
            [background-image:linear-gradient(#5428B0_1px,transparent_1px),linear-gradient(90deg,#5428B0_1px,transparent_1px)]
            [background-size:60px_60px]
          "
        />

      </div>

      {/* =====================================================
          CONTENT
      ===================================================== */}

      <div className="relative z-10 mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-28">

        {/* =================================================
            HEADER
        ================================================= */}
           <motion.header
          className="mb-14 max-w-5xl lg:mb-20"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Label */}
          <motion.div
            variants={itemVariants}
            className="
              mb-6
              inline-flex
              items-center
              gap-2.5
              rounded-full
              border
              border-[#5428B0]/15
              bg-[#5428B0]/[0.04]
              px-4
              py-2
              text-[10px]
              font-bold
              uppercase
              tracking-[0.22em]
              text-[#5428B0]
            "
          >
            <span className="relative flex h-2 w-2">
              <span
                className="
                  absolute
                  h-full
                  w-full
                  animate-ping
                  rounded-full
                  bg-[#F8CC10]
                  opacity-70
                "
              />
              <span className="relative h-2 w-2 rounded-full bg-[#F8CC10]" />
            </span>
        
            Let's Talk
          </motion.div>
        
          {/* Heading */}
          <motion.h1
            variants={itemVariants}
            className="
              max-w-4xl
              text-5xl
              font-black
              leading-[0.95]
         
              text-[#17122a]
              sm:text-5xl
              md:text-6xl
              lg:text-[4rem]
            "
          >
            Let's Build Something
        
            <span className="relative inline-block text-[#5428B0]">
              People Remember.
        
              <span
                className="
                  absolute
                  -bottom-2
                  left-0
                  h-2
                  w-[75%]
                  rounded-full
                  bg-[#F8CC10]
                  sm:-bottom-3
                  sm:h-3
                "
              />
            </span>
          </motion.h1>
        
          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="
              mt-7
              max-w-2xl
              text-base
              leading-7
              text-[#71697e]
              sm:text-lg
              sm:leading-8
            "
          >
        Have an idea, campaign, or story in mind? Tell us what you're building and we'll help turn it into something people stop, watch, and remember.
          </motion.p>
        
        </motion.header>
      

        {/* =================================================
            MAIN GRID
        ================================================= */}

        <div className="grid gap-6 lg:grid-cols-[0.75fr_1.25fr]">

          {/* =================================================
              LEFT — CONTACT INFO
          ================================================= */}

          <aside
            className="
              relative
              overflow-hidden
              rounded-[30px]
              border
              border-[#17122a]/[0.08]
              bg-[#F8F8F7]
              p-6

              sm:p-8
              lg:p-9
            "
          >

            {/* Decorative circle */}

            <div
              className="
                pointer-events-none
                absolute
                -right-20
                -top-20
                h-48
                w-48
                rounded-full
                border
                border-[#5428B0]/10
              "
            />

            <div
              className="
                pointer-events-none
                absolute
                -right-12
                -top-12
                h-32
                w-32
                rounded-full
                border
                border-dashed
                border-[#F8CC10]/40
              "
            />

            {/* Small icon */}

            <div
              className="
                relative
                flex
                h-12
                w-12
                items-center
                justify-center
                rounded-2xl
                bg-[#5428B0]
                text-[#F8CC10]
                shadow-[0_10px_30px_rgba(84,40,176,0.18)]
              "
            >
              <Sparkles size={20} />
            </div>

            {/* Heading */}

            <h2
              className="
                relative
                mt-7
                text-2xl
                font-black
                tracking-[-0.045em]
                text-[#17122a]

                sm:text-3xl
              "
            >
              Start the conversation.
            </h2>

            <p
              className="
                relative
                mt-3
                max-w-md
                text-sm
                leading-7
                text-[#71697e]
                sm:text-base
              "
            >
              Whether you're launching a brand, creating content,
              or looking for a creative partner — we'd love to
              hear what you're working on.
            </p>

            {/* =================================================
                CONTACT ITEMS
            ================================================= */}

            <div className="relative mt-8 space-y-3">

              {/* Email */}

              <a
                href="mailto:vidshotmediaproduction@gmail.com"
                className="
                  group
                  flex
                  items-center
                  gap-4
                  rounded-2xl
                  border
                  border-transparent
                  bg-white
                  p-3.5

                  transition-all
                  duration-300

                  hover:border-[#5428B0]/10
                  hover:-translate-y-0.5
                  hover:shadow-[0_10px_30px_rgba(23,18,42,0.06)]
                "
              >

                <span
                  className="
                    flex
                    h-10
                    w-10
                    shrink-0
                    items-center
                    justify-center
                    rounded-xl
                    bg-[#5428B0]/10
                    text-[#5428B0]
                    transition-colors
                    group-hover:bg-[#5428B0]
                    group-hover:text-white
                  "
                >
                  <Mail size={17} />
                </span>

                <span className="min-w-0">
                  <span className="block text-[10px] font-bold uppercase tracking-[0.15em] text-[#71697e]">
                    Email
                  </span>

                  <span className="mt-0.5 block truncate text-sm font-semibold text-[#17122a]">
                    vidshotmediaproduction@gmail.com
                  </span>
                </span>

                <ArrowUpRight
                  size={15}
                  className="
                    ml-auto
                    text-[#71697e]
                    transition-all
                    duration-300
                    group-hover:-translate-y-0.5
                    group-hover:translate-x-0.5
                    group-hover:text-[#5428B0]
                  "
                />

              </a>

              {/* Phone */}

              <a
                href="tel:+918210882863"
                className="
                  group
                  flex
                  items-center
                  gap-4
                  rounded-2xl
                  border
                  border-transparent
                  bg-white
                  p-3.5

                  transition-all
                  duration-300

                  hover:border-[#5428B0]/10
                  hover:-translate-y-0.5
                  hover:shadow-[0_10px_30px_rgba(23,18,42,0.06)]
                "
              >

                <span
                  className="
                    flex
                    h-10
                    w-10
                    shrink-0
                    items-center
                    justify-center
                    rounded-xl
                    bg-[#F8CC10]/20
                    text-[#5428B0]
                    transition-colors
                    group-hover:bg-[#F8CC10]
                  "
                >
                  <Phone size={17} />
                </span>

                <span>
                  <span className="block text-[10px] font-bold uppercase tracking-[0.15em] text-[#71697e]">
                    Phone
                  </span>

                  <span className="mt-0.5 block text-sm font-semibold text-[#17122a]">
                    +91 821-088-2863
                  </span>
                </span>

                <ArrowUpRight
                  size={15}
                  className="
                    ml-auto
                    text-[#71697e]
                    transition-all
                    duration-300
                    group-hover:-translate-y-0.5
                    group-hover:translate-x-0.5
                    group-hover:text-[#5428B0]
                  "
                />

              </a>

              {/* Location */}

              <div
                className="
                  group
                  flex
                  items-center
                  gap-4
                  rounded-2xl
                  bg-white
                  p-3.5
                "
              >

                <span
                  className="
                    flex
                    h-10
                    w-10
                    shrink-0
                    items-center
                    justify-center
                    rounded-xl
                    bg-[#5428B0]/10
                    text-[#5428B0]
                  "
                >
                  <MapPin size={17} />
                </span>

                <span>
                  <span className="block text-[10px] font-bold uppercase tracking-[0.15em] text-[#71697e]">
                    Studio
                  </span>

                  <span className="mt-0.5 block text-sm font-semibold text-[#17122a]">
                    Dhanbad, Jharkhand, India
                  </span>
                </span>

              </div>

            </div>

            {/* =================================================
                BOTTOM TRUST
            ================================================= */}

            <div
              className="
                relative
                mt-8
                flex
                items-center
                gap-3
                border-t
                border-[#17122a]/[0.07]
                pt-6
              "
            >

              {/* Avatars */}

           <div className="flex items-center">
  {[deepak, mohit, deven, nidhi, dhiren, ssalam].map(
    (image, index) => (
      <div
        key={index}
        className={`
          relative
          h-8 w-8
          overflow-hidden
          rounded-full
          border-2
          border-[#F8F8F7]
          ${index !== 0 ? "-ml-2" : ""}
        `}
      >
        <img
          src={image}
          alt={`VidShot Media client ${index + 1}`}
          className="h-full w-full object-cover"
        />
      </div>
    )
  )}

  <div
    className="
      relative -ml-2
      flex h-8 w-8
      items-center justify-center
      rounded-full
      border-2 border-[#F8F8F7]
      bg-[#5428B0]
      text-[9px] font-bold text-white
    "
  >
    6+
  </div>
</div>

              <div>
                <p className="text-xs font-bold text-[#17122a]">
                  Trusted by growing brands
                </p>

                <p className="text-[11px] text-[#71697e]">
                  Creative partners, not just vendors.
                </p>
              </div>

            </div>

          </aside>

          {/* =================================================
              RIGHT — FORM
          ================================================= */}

          <div
            className="
              rounded-[30px]
              border
              border-[#17122a]/[0.08]
              bg-white
              p-6

              shadow-[0_15px_60px_rgba(23,18,42,0.06)]

              sm:p-8
              lg:p-10
            "
          >

            {/* Form heading */}

            <div className="mb-8">

              <div className="flex items-center gap-2">

                <span className="h-2 w-2 rounded-full bg-[#F8CC10]" />

                <span
                  className="
                    text-[10px]
                    font-bold
                    uppercase
                    tracking-[0.18em]
                    text-[#5428B0]
                  "
                >
                  Project inquiry
                </span>

              </div>

              <h2
                className="
                  mt-3
                  text-3xl
                  font-black
                  tracking-[-0.055em]
                  text-[#17122a]

                  sm:text-4xl
                "
              >
                Tell us about your project.
              </h2>

              <p className="mt-2 text-sm leading-6 text-[#71697e]">
                The more you tell us, the better we can understand
                what you need.
              </p>

            </div>

         <form onSubmit={handleSubmit} className="space-y-5">

  {/* Name + Email */}
  <div className="grid gap-5 sm:grid-cols-2">

    <label>
      <span className="text-xs font-bold">Name</span>

      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Your name"
        required
        className="mt-2 w-full rounded-xl border border-[#17122a]/10 bg-[#F8F8F7] px-4 py-3.5 text-sm outline-none focus:border-[#5428B0]"
      />
    </label>

    <label>
      <span className="text-xs font-bold">Email</span>

      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="your@email.com"
        required
        className="mt-2 w-full rounded-xl border border-[#17122a]/10 bg-[#F8F8F7] px-4 py-3.5 text-sm outline-none focus:border-[#5428B0]"
      />
    </label>

  </div>

  {/* Budget */}
  <label className="block">

    <span className="text-xs font-bold">Budget</span>

    <select
      name="budget"
      value={formData.budget}
      onChange={handleChange}
      required
      className="mt-2 w-full rounded-xl border border-[#17122a]/10 bg-[#F8F8F7] px-4 py-3.5 text-sm outline-none focus:border-[#5428B0]"
    >
      <option value="" disabled>Select budget</option>
      <option value="Under ₹10,000">Under ₹10,000</option>
      <option value="₹10,000 - ₹25,000">₹10,000 - ₹25,000</option>
      <option value="₹25,000 - ₹50,000">₹25,000 - ₹50,000</option>
      <option value="₹50,000 - ₹1,00,000">₹50,000 - ₹1,00,000</option>
      <option value="₹1,00,000+">₹1,00,000+</option>
    </select>

  </label>

  {/* Services */}
  <div>

    <span className="text-xs font-bold">
      What do you need?
    </span>

    <div className="mt-3 flex flex-wrap gap-2">

      {[
        "Reels",
        "Brand Video",
        "Social Media",
        "Design",
        "Ads",
        "Other",
      ].map((service) => {

        const selected = formData.services.includes(service);

        return (
          <button
            key={service}
            type="button"
            onClick={() => handleServiceToggle(service)}
            className={`rounded-full border px-4 py-2 text-xs font-semibold transition-all ${
              selected
                ? "border-[#5428B0] bg-[#5428B0] text-white"
                : "border-[#17122a]/10 bg-white text-[#71697e] hover:border-[#5428B0]"
            }`}
          >
            {service}
          </button>
        );
      })}

    </div>

  </div>

  {/* Project Details */}
  <label className="block">

    <span className="text-xs font-bold">
      Project Details
    </span>

    <textarea
      name="details"
      value={formData.details}
      onChange={handleChange}
      placeholder="Tell us about your project..."
      required
      className="mt-2 min-h-[145px] w-full resize-none rounded-xl border border-[#17122a]/10 bg-[#F8F8F7] px-4 py-3.5 text-sm outline-none focus:border-[#5428B0]"
    />

  </label>

  {/* Status Message */}
  {status === "success" && (
    <div className="flex items-center gap-2 rounded-xl bg-green-50 p-4 text-sm text-green-700">
      <CheckCircle2 size={18} />
      Your inquiry has been sent. Thank you for contacting VidShot Media!
    </div>
  )}

  {status === "error" && (
    <div className="flex items-center gap-2 rounded-xl bg-red-50 p-4 text-sm text-red-600">
      <AlertCircle size={18} />
      We couldn't send your inquiry. Please try again or email us directly at vidshotmediaproduction@gmail.com.
    </div>
  )}

  {status && status !== "success" && status !== "error" && (
    <div className="flex items-center gap-2 rounded-xl bg-red-50 p-4 text-sm text-red-600">
      <AlertCircle size={18} />
      {status}
    </div>
  )}

  {/* Submit Button */}
  <div className="flex flex-col gap-4 pt-2 sm:flex-row sm:items-center sm:justify-between">

    <p className="flex items-center gap-2 text-[11px] text-[#71697e]">
      <Check size={15} />
      Usually reply within 24 hours
    </p>

    <button
      type="submit"
      disabled={loading}
      className="group inline-flex items-center justify-center gap-3 rounded-full bg-[#5428B0] px-6 py-3.5 text-sm font-bold text-white transition-all hover:-translate-y-1 hover:bg-[#4820A0] disabled:cursor-not-allowed disabled:opacity-60"
    >

      {loading ? (
        <>
          Sending...
          <Loader2 size={18} className="animate-spin" />
        </>
      ) : (
        <>
          Send Inquiry

          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#F8CC10] text-[#5428B0] transition-transform group-hover:rotate-45">
            <ArrowUpRight size={15} />
          </span>
        </>
      )}

    </button>

  </div>

</form>

          </div>

        </div>

      </div>
    </main>
  );
}