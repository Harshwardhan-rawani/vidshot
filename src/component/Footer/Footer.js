import React from "react";
import { Link } from "react-router-dom";
import AnimatedButton1 from "../Button/AnimatedButton1";
import { motion } from "framer-motion";
const footerLinks = {
  company: [
    { name: "About", path: "/about" },
    { name: "Our Work", path: "/work" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
  ],

  services: [
    { name: "Brand Films", path: "/services/brand-films" },
    { name: "Social Media", path: "/services/social-media" },
    { name: "Video Production", path: "/services/video-production" },
    { name: "Event Coverage", path: "/services/event-coverage" },
  ],
};

export default function Footer() {
  return (
    <footer className="relative mt-20 overflow-hidden bg-[#5428B0] text-white">

      {/* =========================================
          BACKGROUND DECORATION
      ========================================= */}

      <div
        className="
          pointer-events-none
          absolute
          -right-40
          -top-40
          h-[500px]
          w-[500px]
          rounded-full
          bg-[#F8CC10]/10
          blur-3xl
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -bottom-40
          -left-40
          h-[450px]
          w-[450px]
          rounded-full
          bg-[#351477]/40
          blur-3xl
        "
      />

      {/* =========================================
          MAIN CONTAINER
      ========================================= */}

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

        {/* =========================================
            CTA SECTION
        ========================================= */}

        <div
          className="
            relative
            overflow-hidden
            border-b
            border-white/15
            py-16
            sm:py-20
            lg:py-24
          "
        >
          <div
            className="
              absolute
              right-0
              top-1/2
              hidden
              h-48
              w-48
              -translate-y-1/2
              rounded-full
              bg-[#F8CC10]
              opacity-10
              blur-3xl
              lg:block
            "
          />

          <div
            className="
              relative
              flex
              flex-col
              gap-8
              lg:flex-row
              lg:items-end
              lg:justify-between
            "
          >
            {/* Heading */}

            <div className="max-w-3xl">

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
          }}
          transition={{
            duration: 0.7,
          }}
                className="
                  mb-5
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-white/15
                  bg-white/10
                  px-4
                  py-2
                  text-xs
                  font-semibold
                  uppercase
                  tracking-[0.18em]
                  text-white/80
                  backdrop-blur-md
                "
              >
                <span className="h-2 w-2 rounded-full bg-[#F8CC10]" />

                Let's create something
              </motion.div>

              <motion.h2
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
            duration: 1.5,
          }}
                className="
                  max-w-3xl
                  text-4xl
                  font-black
                  leading-[0.95]
                  tracking-[-0.06em]
                  sm:text-5xl
                  lg:text-7xl
                "
              >
                Your next story
                <span className="text-[#F8CC10]"> starts here.</span>
              </motion.h2>

              <p
                className="
                  mt-5
                  max-w-xl
                  text-base
                  leading-7
                  text-white/65
                  sm:text-lg
                "
              >
                Have an idea, campaign, or story in mind?
                Let's turn it into something people remember.
              </p>
            </div>

            {/* CTA Button */}

            <AnimatedButton1
            text = "Start a Project"
            to = "/contact" />
          </div>
        </div>

        {/* =========================================
            FOOTER CONTENT
        ========================================= */}

        <div className="grid gap-12 py-14 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1.2fr] lg:gap-10 lg:py-16">

          {/* =====================================
              BRAND
          ===================================== */}

          <div className="max-w-sm">

            {/* Logo */}

            <Link
              to="/"
              className="
                group
                inline-flex
                items-center
                gap-3
              "
            >
              {/* Logo mark */}

              <span
                className="
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-2xl
                  bg-[#F8CC10]
                  text-xl
                  font-black
                  text-[#5428B0]
                  shadow-[0_10px_30px_rgba(248,204,16,0.15)]
                  transition-transform
                  duration-300
                  group-hover:rotate-3
                "
              >
                V
              </span>

              {/* Logo text */}

              <span
                className="
                  text-2xl
                  font-black
                  tracking-[-0.06em]
                "
              >
                VID<span className="text-[#F8CC10]">SHOT</span>
              </span>
            </Link>

            <p
              className="
                mt-6
                text-sm
                leading-6
                text-white/60
              "
            >
              A creative production studio helping brands,
              founders, and creators turn ideas into cinematic
              stories that move people.
            </p>

            {/* Social icons */}

            <div className="mt-7 flex items-center gap-3">

              <SocialLink
                href="#"
                label="Instagram"
              >
                ◎
              </SocialLink>

              <SocialLink
                href="#"
                label="LinkedIn"
              >
                in
              </SocialLink>

              <SocialLink
                href="#"
                label="YouTube"
              >
                ▶
              </SocialLink>

              <SocialLink
                href="#"
                label="X"
              >
                𝕏
              </SocialLink>

            </div>
          </div>

          {/* =====================================
              COMPANY
          ===================================== */}

          <FooterColumn
            title="Company"
            links={footerLinks.company}
          />

          {/* =====================================
              SERVICES
          ===================================== */}

          <FooterColumn
            title="Services"
            links={footerLinks.services}
          />

          {/* =====================================
              CONTACT
          ===================================== */}

          <div>

            <p
              className="
                text-xs
                font-bold
                uppercase
                tracking-[0.18em]
                text-[#F8CC10]
              "
            >
              Get in touch
            </p>

            <div className="mt-5 space-y-4">

              <a
                href="mailto:hello@vidshotmedia.com"
                className="
                  block
                  text-lg
                  font-semibold
                  text-white
                  transition-colors
                  duration-300
                  hover:text-[#F8CC10]
                "
              >
                hello@vidshotmedia.com
              </a>

              <a
                href="tel:+919999999999"
                className="
                  block
                  text-sm
                  text-white/60
                  transition-colors
                  duration-300
                  hover:text-white
                "
              >
                +91 99999 99999
              </a>

              <p
                className="
                  max-w-xs
                  text-sm
                  leading-6
                  text-white/50
                "
              >
                India · Working globally
              </p>

            </div>

            {/* Availability */}

            <div
              className="
                mt-7
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-white/10
                bg-white/[0.07]
                px-3
                py-2
                text-xs
                text-white/70
                backdrop-blur-md
              "
            >
              <span className="relative flex h-2 w-2">
                <span
                  className="
                    absolute
                    inline-flex
                    h-full
                    w-full
                    animate-ping
                    rounded-full
                    bg-[#F8CC10]
                    opacity-50
                  "
                />

                <span
                  className="
                    relative
                    inline-flex
                    h-2
                    w-2
                    rounded-full
                    bg-[#F8CC10]
                  "
                />
              </span>

              Available for new projects
            </div>
          </div>
        </div>

        {/* =========================================
            BOTTOM BAR
        ========================================= */}

        <div
          className="
            flex
            flex-col
            gap-4
            border-t
            border-white/10
            py-6
            text-xs
            text-white/45
            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >

          <p>
            © {new Date().getFullYear()} VidShot. All rights reserved.
          </p>

          <div className="flex flex-wrap items-center gap-5">

            <Link
              to="/privacy"
              className="transition-colors hover:text-white"
            >
              Privacy
            </Link>

            <Link
              to="/terms"
              className="transition-colors hover:text-white"
            >
              Terms
            </Link>

            <Link
              to="/cookies"
              className="transition-colors hover:text-white"
            >
              Cookies
            </Link>

          </div>

        </div>
      </div>
    </footer>
  );
}


/* =====================================================
   FOOTER COLUMN
===================================================== */

function FooterColumn({ title, links }) {
  return (
    <div>
      <p
        className="
          text-xs
          font-bold
          uppercase
          tracking-[0.18em]
          text-[#F8CC10]
        "
      >
        {title}
      </p>

      <ul className="mt-5 space-y-3.5">
        {links.map((link) => (
          <li key={link.name}>
            <Link
              to={link.path}
              className="
                group
                inline-flex
                items-center
                gap-2
                text-sm
                text-white/60
                transition-colors
                duration-300
                hover:text-white
              "
            >
              <span
                className="
                  h-px
                  w-0
                  bg-[#F8CC10]
                  transition-all
                  duration-300
                  group-hover:w-3
                "
              />

              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}


/* =====================================================
   SOCIAL LINK
===================================================== */

function SocialLink({ href, label, children }) {
  return (
    <a
      href={href}
      aria-label={label}
      className="
        flex
        h-10
        w-10
        items-center
        justify-center
        rounded-full
        border
        border-white/10
        bg-white/[0.07]
        text-sm
        font-bold
        text-white/70
        backdrop-blur-md
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-[#F8CC10]/40
        hover:bg-[#F8CC10]
        hover:text-[#5428B0]
        active:scale-95
      "
    >
      {children}
    </a>
  );
}