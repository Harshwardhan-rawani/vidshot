import React, { useEffect, useState } from "react";
import { FiX } from "react-icons/fi";

import AnimatedButton1 from "../Button/AnimatedButton1";

export default function LeadPopup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem("vidshot-popup-shown")) return;

    const timer = setTimeout(() => {
      setIsOpen(true);
      sessionStorage.setItem("vidshot-popup-shown", "true");
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") setIsOpen(false);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/75 px-4 py-6 backdrop-blur-md animate-in fade-in duration-300"
      onClick={() => setIsOpen(false)}
    >
      {/* Popup Card */}
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="vidshot-popup-title"
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-4xl overflow-hidden rounded-3xl border border-white/15 bg-[#5428B0] px-6 py-14 text-center shadow-2xl shadow-black/40 sm:px-12 sm:py-16 md:px-16 md:py-20 animate-in zoom-in-95 duration-500"
      >
        {/* Background Decorative Elements */}
        <div className="pointer-events-none absolute -left-24 -top-32 h-72 w-72 rounded-full bg-white/10 blur-[100px]" />

        <div className="pointer-events-none absolute -bottom-32 -right-20 h-72 w-72 rounded-full bg-[#F8CC10]/20 blur-[100px]" />


        {/* Close Button */}
        <button
          type="button"
          onClick={() => setIsOpen(false)}
          aria-label="Close popup"
          className="absolute right-4 top-4 z-20 rounded-full border border-white/20 bg-white/10 p-2.5 text-white transition-all duration-300 hover:rotate-90 hover:bg-[#F8CC10] hover:text-[#5428B0] sm:right-6 sm:top-6"
        >
          <FiX size={22} />
        </button>

        {/* Content */}
        <div className="relative z-10 mx-auto max-w-3xl">

          {/* Heading */}
          <h2
            id="vidshot-popup-title"
            className="font-sans text-3xl font-extrabold leading-[1.2] tracking-tight text-white sm:text-4xl md:text-5xl lg:text-[54px]"
          >
            Ready for{" "}
            <span className="text-[#F8CC10]">3X Growth?</span>
          </h2>

          {/* Description */}
          <p className="mx-auto mt-9 max-w-2xl text-sm font-medium leading-7 text-white/80 sm:text-base md:text-lg md:leading-8">
            We bring ideas off the leash and bring them to life through creative
            execution that helps{" "}
            <span className="font-bold text-[#F8CC10]">
              your brand build visibility, reach more people, and create
              stronger opportunities
            </span>{" "}
            for growth.
          </p>

          {/* CTA */}
          <div className="mt-2 flex justify-center">
            <AnimatedButton1
              to="/contact"
              text="Connect With Us"
            />
          </div>

          {/* Bottom Text */}
          <p className="mt-6 text-xs font-semibold tracking-wide text-white/75 sm:text-sm">
            Your brand awaits the right creative partner.
          </p>

        

        </div>
      </div>
    </div>
  );
}