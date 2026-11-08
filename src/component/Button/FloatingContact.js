import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import {

  X,
  Mail,
  Phone,
} from "lucide-react";
import AnimatedButton1 from "./AnimatedButton1";

const FloatingContact = () => {
  const [isOpen, setIsOpen] = useState(false);

  const contactLinks = [
    {
      label: " vidshotmediaproduction@gmail.com",
      href: "mailto: vidshotmediaproduction@gmail.com",
      icon: Mail,
    },
    {
      label: "+91 821-088-2863",
      href: "tel:+918210882863",
      icon: Phone,
    },
 
  ];

  return (
    <div className="fixed bottom-6 right-6 z-[100]">

      <motion.div
        initial={false}
        animate={{
          width: isOpen ? 300 : 60,
          height: isOpen ? "auto" : 60,
          borderRadius: isOpen ? 24 : 100,
        }}
        transition={{
          type: "spring",
          stiffness: 180,
          damping: 22,
        }}
        className="
          relative
          overflow-hidden
          bg-[#5428B0]
          shadow-2xl
          shadow-purple-900/30
        "
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
      >

        {/* Contact Toggle Button */}
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label={
            isOpen ? "Close contact panel" : "Open contact panel"
          }
          aria-expanded={isOpen}
          className="
            absolute right-0 top-0 z-30
            flex h-[60px] w-[60px]
            items-center justify-center
            rounded-full
            bg-[#F8CC10]
            text-[#5428B0]
            transition-transform
            hover:scale-95
            focus:outline-none
          "
        >
          <AnimatePresence mode="wait">
            <motion.span
              key={isOpen ? "close" : "open"}
              initial={{ opacity: 0, rotate: -90, scale: 0.7 }}
              animate={{ opacity: 1, rotate: 0, scale: 1 }}
              exit={{ opacity: 0, rotate: 90, scale: 0.7 }}
              transition={{ duration: 0.2 }}
            >
              {isOpen ? (
                <X size={30} className="m-5"/>
              ) : (
                <Phone size={25} />
              )}
            </motion.span>
          </AnimatePresence>
        </button>

        {/* Contact Information */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{
                opacity: 0,
                y: 15,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: 15,
              }}
              transition={{
                duration: 0.25,
                delay: 0.08,
              }}
              className="
                w-[300px]
                px-5
                pb-5
                pt-[75px]
                text-white
              "
            >

              {/* Heading */}
              <p className="
                text-xs
                font-semibold
                uppercase
                tracking-[3px]
                text-[#F8CC10]
              ">
                Let's Connect
              </p>

              <h3 className="mt-2 text-xl font-bold">
                Have a project in mind?
              </h3>

              <p className="
                mt-2
                text-sm
                leading-relaxed
                text-white/70
              ">
                Let's discuss your ideas and create something amazing
                together.
              </p>

              {/* Contact Links */}
              <div className="mt-6 space-y-4">

                {contactLinks.map((item) => {
                  const Icon = item.icon;

                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      target={item.external ? "_blank" : undefined}
                      rel={item.external ? "noopener noreferrer" : undefined}
                      className="
                        group/link
                        flex items-center
                        gap-3
                        text-xs
                        text-white/90
                        transition-colors
                        hover:text-[#F8CC10]
                      "
                    >
                      <Icon
                        size={18}
                        className="shrink-0"
                      />

                      <span>{item.label}</span>

                    </a>
                  );
                })}

              </div>

              {/* CTA */}
           
              <AnimatedButton1
                text="Start Your Project"
                className="mt-6 justify-center w-full"
                to="/contact"
              />
              {/* Footer */}
              <p className="
                mt-4
                text-center
                text-[10px]
                tracking-wide
                text-white/50
              ">
                VIDSHOT MEDIA · LET'S CREATE SOMETHING GREAT
              </p>

            </motion.div>
          )}
        </AnimatePresence>

      </motion.div>
    </div>
  );
};

export default FloatingContact;