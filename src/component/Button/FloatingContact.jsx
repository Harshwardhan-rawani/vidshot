import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MessageCircle,
  X,
  Mail,
  Phone,
  Instagram,
  ArrowUpRight,
} from "lucide-react";

const FloatingContact = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-[100]">

      <motion.div
        initial={false}
        animate={{
          width: isOpen ? 290 : 58,
          height: isOpen ? "auto" : 58,
          borderRadius: isOpen ? 24 : 100,
        }}
        transition={{
          type: "spring",
          stiffness: 180,
          damping: 22,
        }}
        className="relative overflow-hidden bg-[#5428B0] shadow-2xl shadow-purple-900/30"
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
      >
        {/* Contact Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close contact panel" : "Open contact panel"}
          className="absolute right-0 top-0 z-20 flex h-[58px] w-[58px] items-center justify-center rounded-full bg-[#F8CC10] text-[#5428B0] transition-transform hover:scale-95"
        >
          {isOpen ? <X size={23} /> : <MessageCircle size={24} />}
        </button>

        {/* Contact Information */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 15 }}
              transition={{ duration: 0.25, delay: 0.08 }}
              className="px-5 pb-5 pt-[72px] text-white"
            >
              <p className="text-xs font-semibold uppercase tracking-[3px] text-[#F8CC10]">
                Let's Connect
              </p>

              <h3 className="mt-2 text-xl font-bold">
                Have a project in mind?
              </h3>

              <p className="mt-2 text-sm leading-relaxed text-white/70">
                Let's discuss your ideas and create something amazing together.
              </p>

              <div className="mt-5 space-y-3">

                <a
                  href="mailto:hello@vidshotmedia.com"
                  className="flex items-center gap-3 text-sm transition hover:text-[#F8CC10]"
                >
                  <Mail size={17} />
                  hello@vidshotmedia.com
                  <ArrowUpRight size={14} className="ml-auto" />
                </a>

                <a
                  href="tel:+911234567890"
                  className="flex items-center gap-3 text-sm transition hover:text-[#F8CC10]"
                >
                  <Phone size={17} />
                  +91 12345 67890
                  <ArrowUpRight size={14} className="ml-auto" />
                </a>

                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 text-sm transition hover:text-[#F8CC10]"
                >
                  <Instagram size={17} />
                  Instagram
                  <ArrowUpRight size={14} className="ml-auto" />
                </a>

              </div>

              <a
                href="/contact"
                className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-[#F8CC10] px-4 py-3 text-sm font-bold text-[#5428B0] transition hover:bg-white"
              >
                Start a Project
                <ArrowUpRight size={16} />
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default FloatingContact;