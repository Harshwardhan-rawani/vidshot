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

// Client Images
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
    <footer className="relative bg-[#f8f8f8] text-[#171717] overflow-hidden pt-16">

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

        {/* ===================================
            TOP CTA CARD
        =================================== */}

        <div className="
          relative overflow-hidden
          min-h-[270px]
          bg-white
          rounded-[28px]
          border border-gray-100
          shadow-[0_15px_45px_rgba(0,0,0,0.06)]
          grid grid-cols-1 lg:grid-cols-2
        ">

          {/* Left Content */}
          <div className="
            relative z-10
            flex flex-col justify-center
            p-7 sm:p-10 lg:p-12
          ">

            <div className="flex items-center gap-2 mb-5">

              <span className="w-2 h-2 rounded-full bg-[#F8CC10]" />

              <p className="text-[10px] font-semibold uppercase tracking-[3px] text-[#5428B0]">
                Let's work together
              </p>

            </div>

            <h2 className="
              text-3xl sm:text-4xl
              font-bold tracking-tight
              leading-tight
              max-w-lg
            ">
              Your next big idea
              <span className="text-[#5428B0]"> starts here.</span>
            </h2>

            <p className="my-3 text-sm text-gray-500 leading-relaxed max-w-md">
              From creative storytelling to powerful digital campaigns,
              let's build something people remember.
            </p>

         
             <AnimatedButton
              text="Start Your Project"
              to="/contact"/>
          </div>


          {/* Right: Client Orbit Design */}
          <div className="
            relative
            min-h-[260px]
            lg:min-h-full
            flex items-center justify-center
            overflow-hidden
          ">

            {/* Background Circle */}
            <div className="
              absolute
              w-[340px] h-[340px]
              sm:w-[420px] sm:h-[420px]
              rounded-full
              border border-[#5428B0]/[0.07]
            " />

            {/* Orbit 1 */}
            <div className="
              absolute
              w-[260px] h-[260px]
              sm:w-[320px] sm:h-[320px]
              rounded-full
              border border-dashed border-[#5428B0]/15
            " />

            {/* Orbit 2 */}
            <div className="
              absolute
              w-[165px] h-[165px]
              sm:w-[210px] sm:h-[210px]
              rounded-full
              border border-[#5428B0]/15
            " />

            {/* Center Logo */}
            <div className="
              relative z-10
              w-24 h-24
              rounded-full
              bg-[#5503b0]
              border border-[#5503b0]
              shadow-[0_5px_25px_rgba(0,0,0,0.08)]
              flex items-center justify-center
            ">
              <img
                src={vidshot}
                alt="VidShot Media"
                className="w-20 h-20 object-contain"
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
                  className={`
                    absolute z-20
                    ${positions[index]}
                    group
                  `}
                >
                  <div className="
                    relative
                    w-11 h-11 sm:w-12 sm:h-12
                    rounded-full
                    border-[3px] border-white
                    shadow-md
                    overflow-hidden
                    bg-[#F8CC10]
                  ">
                    <img
                      src={client.image}
                      alt={client.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Tooltip */}
                  <span className="
                    absolute left-1/2 -translate-x-1/2
                    top-full mt-2
                    whitespace-nowrap
                    rounded-md
                    bg-[#171717]
                    text-white
                    text-[9px]
                    px-2 py-1
                    opacity-0
                    group-hover:opacity-100
                    transition-opacity
                    pointer-events-none
                  ">
                    {client.name}
                  </span>
                </motion.div>
              );
            })}

            {/* Yellow Decorative Dot */}
            <div className="
              absolute top-[18%] right-[27%]
              w-3 h-3 rounded-full
              bg-[#F8CC10]
            " />

            <div className="
              absolute bottom-[13%] right-[43%]
              w-2 h-2 rounded-full
              bg-[#5428B0]
            " />

          </div>

        </div>


        {/* ===================================
            FOOTER CONTENT
        =================================== */}

        <div className="
          grid grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-[1.5fr_0.8fr_1fr_1.2fr]
          gap-10 lg:gap-12
          py-16
        ">

          {/* Brand */}
          <div className="max-w-xs">

                  <Link
            to="/"
            className="group inline-flex shrink-0 items-center"
            aria-label="VidShot Media home"
          >
            <img
              src= {vidshot}
              alt="VidShot Media"
              className="
              rounded-lg
                h-10
                w-auto
                object-contain
                
              "
            />
          </Link>

            <p className="
              mt-5
              text-xs
              leading-6
              text-gray-500
            ">
              A creative production studio helping brands, founders,
              and creators turn ideas into cinematic stories that
              move people.
            </p>

            {/* Social Links */}
          <div className="flex items-center gap-2 mt-6">

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
            title="Services"
            links={footerLinks.services}
          />


          {/* Contact */}
          <div>

            <FooterHeading>Get in touch</FooterHeading>

            <div className="mt-5 space-y-4">

           <a href="mailto:vidshotmediaproduction@gmail.com" className="flex items-start gap-2 text-xs text-gray-600 hover:text-[#5428B0]">
  <FiMail size={15} className="shrink-0 mt-0.5 text-[#5428B0]" />
  vidshotmediaproduction@gmail.com
</a>

<a href="tel:+918210882863" className="flex items-center gap-2 text-xs text-gray-600 hover:text-[#5428B0]">
  <FiPhone size={15} className="text-[#5428B0]" />
  +91 821-088-2863
</a>

<div className="flex items-center gap-2 text-xs text-gray-500">
  <FiMapPin size={15} className="text-[#5428B0]" />
  India · Working globally
</div>

            </div>

            {/* Availability Badge */}
            <div className="
              mt-6 inline-flex items-center gap-2
              rounded-full
              bg-white
              border border-gray-200
              px-3 py-2
            ">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-50 animate-ping" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
              </span>

              <span className="text-[10px] font-medium text-gray-600">
                Available for new projects
              </span>
            </div>

          </div>

        </div>


        {/* ===================================
            BOTTOM BAR
        =================================== */}

        <div className="
          border-t border-gray-200
          py-6
          flex flex-col
          sm:flex-row
          items-start sm:items-center
          justify-between
          gap-4
        ">

          <p className="text-[11px] text-gray-400">
            © {new Date().getFullYear()} VidShot Media. All rights reserved.
          </p>

          <div className="flex flex-wrap items-center gap-6">

            <Link
              to="/privacy"
              className="text-[11px] text-gray-500 hover:text-[#5428B0] transition-colors"
            >
              Privacy Policy
            </Link>

            <Link
              to="/terms"
              className="text-[11px] text-gray-500 hover:text-[#5428B0] transition-colors"
            >
              Terms of Service
            </Link>

            <a
              href="#top"
              className="
                flex items-center gap-1
                text-[11px] font-semibold
                text-[#5428B0]
                hover:text-black
                transition-colors
              "
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


// ===================================
// FOOTER COLUMN
// ===================================

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
                text-xs text-gray-500
                transition-colors duration-300
                hover:text-[#5428B0]
              "
            >
              <span className="
                w-0 h-px
                bg-[#F8CC10]
                transition-all duration-300
                group-hover:w-3
              " />

              {link.name}

              <ArrowUpRight
                size={11}
                className="
                  opacity-0 -translate-y-1
                  transition-all duration-300
                  group-hover:opacity-100
                  group-hover:translate-y-0
                "
              />
            </Link>
          </li>
        ))}

      </ul>

    </div>
  );
}


// ===================================
// FOOTER HEADING
// ===================================

function FooterHeading({ children }) {
  return (
    <h3 className="
      text-[11px]
      font-bold
      uppercase
      tracking-[2px]
      text-[#5428B0]
    ">
      {children}
    </h3>
  );
}


// ===================================
// SOCIAL LINK
// ===================================

function SocialLink({ href, label, children }) {
  return (
    <a
      href={href}
      aria-label={label}
      className="
        w-9 h-9
        flex items-center justify-center
        rounded-full
        border border-gray-200
        bg-white
        text-gray-500
        transition-all duration-300
        hover:bg-[#5428B0]
        hover:border-[#5428B0]
        hover:text-white
        hover:-translate-y-1
      "
    >
      {children}
    </a>
  );
}