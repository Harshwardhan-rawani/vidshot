
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import {
  FiInstagram,
  FiLinkedin,
  FiYoutube,
  FiFacebook,
  FiMail,
  FiPhone,
  FiMapPin,
} from "react-icons/fi";

import vidshot from "../../icons/vidshot.png";

import deepak from "../../Images/client/deepak pandey.jpeg";
import mohit from "../../Images/client/mohit Beriwala.jpeg";
import deven from "../../Images/client/deven u pandey.jpeg";
import nidhi from "../../Images/client/nidhi aneja.png";
import dhiren from "../../Images/client/dhiren bontra.jpeg";

import AnimatedButton from "../Button/AnimatedButton";

const footerLinks = {
  company: [
    { name: "About Us", path: "/about" },
    { name: "Our Work", path: "/portfolio" },
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

const clients = [
  { image: deepak, name: "Deepak Pandey" },
  { image: mohit, name: "Mohit Beriwala" },
  { image: deven, name: "Deven Pandey" },
  { image: nidhi, name: "Nidhi Aneja" },
  { image: dhiren, name: "Dhiren Bontra" },
];

export default function Footer() {
  return (
    <footer
      id="top"
      className="relative overflow-hidden bg-[var(--primary)] pt-16 text-white"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

        {/* TOP CTA CARD */}

        <div
          className="
            relative grid min-h-[270px] grid-cols-1
            overflow-hidden rounded-[28px]
            border border-gray-100 bg-white
            text-[#171717]
            shadow-[0_15px_45px_rgba(0,0,0,0.06)]
            lg:grid-cols-2
          "
        >
          {/* Left Content */}

          <div className="relative z-10 flex flex-col justify-center p-7 sm:p-10 lg:p-12">

            <div className="mb-5 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[var(--secondary)]" />

              <p className="text-[10px] font-semibold uppercase tracking-[3px] text-[var(--primary)]">
                Let's work together
              </p>
            </div>

            <h2 className="max-w-lg text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
              Your next big idea
              <span className="text-[var(--primary)]"> starts here.</span>
            </h2>

            <p className="my-3 max-w-md text-sm leading-relaxed text-gray-500">
              From creative storytelling to powerful digital campaigns,
              let's create meaningful experiences that help your brand
              stand out and grow.
            </p>

            <AnimatedButton
              text="Start Your Project"
              to="/contact"
            />

          </div>

          {/* Right: Client Orbit Design */}

          <div
            className="
              relative flex min-h-[260px]
              items-center justify-center
              overflow-hidden lg:min-h-full
            "
          >

            {/* Background Circle */}

            <div className="absolute h-[340px] w-[340px] rounded-full border border-[var(--primary)]/[0.07] sm:h-[420px] sm:w-[420px]" />

            {/* Orbit 1 */}

            <div className="absolute h-[260px] w-[260px] rounded-full border border-dashed border-[var(--primary)]/15 sm:h-[320px] sm:w-[320px]" />

            {/* Orbit 2 */}

            <div className="absolute h-[165px] w-[165px] rounded-full border border-[var(--primary)]/15 sm:h-[210px] sm:w-[210px]" />

            {/* Center Logo */}

            <div className="relative z-10 flex h-24 w-24 items-center justify-center rounded-full border border-[var(--primary)] bg-[var(--primary)] shadow-[0_5px_25px_rgba(0,0,0,0.08)]">

              <img
                src={vidshot}
                alt="VidShot Media"
                className="h-20 w-20 object-contain"
              />

            </div>

            {/* Client Avatars */}

            {clients.map((client, index) => {
              const positions = [
                "top-[8%] left-[49%] -translate-x-1/2",
                "top-[28%] right-[15%]",
                "bottom-[20%] right-[20%]",
                "bottom-[20%] left-[18%]",
                "top-[28%] left-[15%]",
              ];

              return (
                <motion.div
                  key={client.name}
                  initial={{ opacity: 0, scale: 0.7 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.12,
                  }}
                  whileHover={{ scale: 1.15 }}
                  className={`absolute z-20 group ${positions[index]}`}
                >

                  <div className="relative h-11 w-11 overflow-hidden rounded-full border-[3px] border-white bg-[var(--secondary)] shadow-md sm:h-12 sm:w-12">

                    <img
                      src={client.image}
                      alt={client.name}
                      className="h-full w-full object-cover"
                    />

                  </div>

                  {/* Tooltip */}

                  <span className="pointer-events-none absolute left-1/2 top-full mt-2 -translate-x-1/2 whitespace-nowrap rounded-md bg-[#171717] px-2 py-1 text-[9px] text-white opacity-0 transition-opacity group-hover:opacity-100">
                    {client.name}
                  </span>

                </motion.div>
              );
            })}

            {/* Decorative Dots */}

            <div className="absolute right-[27%] top-[18%] h-3 w-3 rounded-full bg-[var(--secondary)]" />

            <div className="absolute bottom-[13%] right-[43%] h-2 w-2 rounded-full bg-[var(--primary)]" />

          </div>

        </div>

        {/* FOOTER CONTENT */}

        <div
          className="
            grid grid-cols-1 gap-10
            py-16 sm:grid-cols-2
            lg:grid-cols-[1.5fr_0.8fr_1fr_1.2fr]
            lg:gap-12
          "
        >

          {/* Brand */}

          <div className="max-w-xs">

            <Link
              to="/"
              className="group inline-flex shrink-0 items-center"
              aria-label="VidShot Media home"
            >
              <img
                src={vidshot}
                alt="VidShot Media"
                className="h-10 w-auto rounded-lg object-contain"
              />
            </Link>

            <p className="mt-5 text-xs leading-6 text-white/75">
              A creative production studio helping brands, founders,
              and creators transform ideas into powerful visual stories.
              We combine creativity, strategy, and technology to make
              brands unforgettable.
            </p>

            {/* Social Links */}

            <div className="mt-6 flex items-center gap-2">

              <SocialLink href="#" label="Instagram">
                <FiInstagram size={17} />
              </SocialLink>

              <SocialLink href="#" label="LinkedIn">
                <FiLinkedin size={17} />
              </SocialLink>

              <SocialLink href="#" label="YouTube">
                <FiYoutube size={17} />
              </SocialLink>

              <SocialLink href="#" label="Facebook">
                <FiFacebook size={17} />
              </SocialLink>

            </div>

          </div>

          {/* Company */}

          <FooterColumn
            title="Company"
            links={footerLinks.company}
          />

          {/* Services */}

          <FooterColumn
            title="Our Services"
            links={footerLinks.services}
          />

          {/* Contact */}

          <div>

            <FooterHeading>Get in touch</FooterHeading>

            <div className="mt-5 space-y-4">

              <a
                href="mailto:vidshotmediaproduction@gmail.com"
                className="flex items-start gap-2 text-xs text-white/75 transition-colors hover:text-[var(--secondary)]"
              >
                <FiMail
                  size={15}
                  className="mt-0.5 shrink-0 text-[var(--secondary)]"
                />

                <span>
                  vidshotmediaproduction@gmail.com
                </span>
              </a>

              <a
                href="tel:+918210882863"
                className="flex items-center gap-2 text-xs text-white/75 transition-colors hover:text-[var(--secondary)]"
              >
                <FiPhone
                  size={15}
                  className="text-[var(--secondary)]"
                />

                +91 821-088-2863
              </a>

              <div className="flex items-center gap-2 text-xs text-white/75">
                <FiMapPin
                  size={15}
                  className="text-[var(--secondary)]"
                />

                India · Working Globally
              </div>

            </div>

            {/* Availability Badge */}

            <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-2">

              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-50" />

                <span className="relative inline-flex h-2 w-2 rounded-full bg-green-400" />
              </span>

              <span className="text-[10px] font-medium text-white/90">
                Available for new projects
              </span>

            </div>

          </div>

        </div>

        {/* BOTTOM BAR */}

        <div
          className="
            flex flex-col items-start justify-between
            gap-4 border-t border-white/15
            py-6 sm:flex-row sm:items-center
          "
        >

          <p className="text-[11px] text-white/60">
            © {new Date().getFullYear()} VidShot Media.
            All rights reserved.
          </p>

          <div className="flex flex-wrap items-center gap-6">

            <Link
              to="/privacy"
              className="text-[11px] text-white/70 transition-colors hover:text-[var(--secondary)]"
            >
              Privacy Policy
            </Link>

            <Link
              to="/terms"
              className="text-[11px] text-white/70 transition-colors hover:text-[var(--secondary)]"
            >
              Terms of Service
            </Link>

            <a
              href="#top"
              className="flex items-center gap-1 text-[11px] font-semibold text-[var(--secondary)] transition-colors hover:text-white"
            >
              Back to top
              <ArrowUpRight size={13} />
            </a>

          </div>

        </div>

      </div>

    </footer>
  );
}


// FOOTER COLUMN

function FooterColumn({ title, links }) {
  return (
    <div>

      <FooterHeading>{title}</FooterHeading>

      <ul className="mt-5 space-y-4">

        {links.map((link) => (
          <li key={link.name}>

            <Link
              to={link.path}
              className="
                group inline-flex items-center gap-2
                text-xs text-white/70
                transition-colors duration-300
                hover:text-[var(--secondary)]
              "
            >

              <span
                className="
                  h-px w-0 bg-[var(--secondary)]
                  transition-all duration-300
                  group-hover:w-3
                "
              />

              {link.name}

              <ArrowUpRight
                size={11}
                className="
                  -translate-y-1 opacity-0
                  transition-all duration-300
                  group-hover:translate-y-0
                  group-hover:opacity-100
                "
              />

            </Link>

          </li>
        ))}

      </ul>

    </div>
  );
}


// FOOTER HEADING

function FooterHeading({ children }) {
  return (
    <h3 className="text-[11px] font-bold uppercase tracking-[2px] text-[var(--secondary)]">
      {children}
    </h3>
  );
}


// SOCIAL LINK

function SocialLink({ href, label, children }) {
  return (
    <a
      href={href}
      aria-label={label}
      className="
        flex h-9 w-9 items-center justify-center
        rounded-full border border-white/20
        bg-white/10 text-white
        transition-all duration-300
        hover:-translate-y-1
        hover:border-[var(--secondary)]
        hover:bg-[var(--secondary)]
        hover:text-[var(--primary)]
      "
    >
      {children}
    </a>
  );
}
