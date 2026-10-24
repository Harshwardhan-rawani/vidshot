

import React from "react";
import { Link } from "react-router-dom";
import "./AnimatedButton.css";
export default function AnimatedButton({
  text,
  to,
  className = "",
  icon = "↗",
}) {
  return (
    <Link
      to={to}
      className={`group relative inline-flex rounded-full ${className}`}
    >
      {/* =========================================
          OUTER GLOW
      ========================================= */}

      <span
        className="
          pointer-events-none
          absolute
          -inset-[1px]
          rounded-full
          bg-gradient-to-r
          from-[var(--primary)]
          via-[var(--secondary)]
          to-[var(--primary)]
          opacity-0
          blur-[5px]
          transition-opacity
          duration-500
          group-hover:opacity-40
        "
      />

      {/* =========================================
          BUTTON
      ========================================= */}

      <span
        className="
          relative
          inline-flex
          items-center
          gap-3
          overflow-hidden
          rounded-full
    
          border
          border-[var(--primary-dark)]
          
          bg-[var(--primary-dark)]
          px-5
          py-2

          text-sm
          font-semibold
          text-[var(--neutral)]

          shadow-[0_8px_25px_rgba(84,40,176,0.18)]

          transition-all
          duration-500
          ease-[cubic-bezier(0.22,1,0.36,1)]

          hover:-translate-y-1
          hover:shadow-[0_14px_35px_rgba(84,40,176,0.28)]

          active:translate-y-0
          active:scale-[0.96]
        "
      >

        {/* =========================================
            SUBTLE INNER HIGHLIGHT
        ========================================= */}

        <span
          className="
            pointer-events-none
            absolute
            inset-0
            rounded-full
            border
            border-[var(--primary-dark)]
          "
        />

        {/* =========================================
            PREMIUM AMBIENT GLOW
        ========================================= */}

        <span
          className="
            pointer-events-none
            absolute
            -top-[80%]
            left-[10%]
            h-[200%]
            w-[35%]
            rotate-[25deg]
            bg-[var(--neutral)]/[0.07]
            blur-2xl
          "
        />

        {/* =========================================
            CONTINUOUS SHINE
        ========================================= */}

     <span
  className="
    pointer-events-none
    absolute
    inset-y-[-80%]
    left-[-30%]
    z-20
    w-[25%]
    rotate-[20deg]

    bg-gradient-to-r
    from-transparent
    via-white/40
    to-transparent

    blur-[2px]

    animate-button-shine
  "
/>

        {/* =========================================
            YELLOW SHINE
        ========================================= */}

        <span
          className="
            pointer-events-none
            absolute
            inset-y-0
            -left-[120%]

            z-[21]

            w-[25%]

            skew-x-[-20deg]

            bg-gradient-to-r
            from-transparent
            via-[var(--neutral)]
            to-transparent

            opacity-0

            transition-all
            duration-700
            ease-[cubic-bezier(0.22,1,0.36,1)]

            group-hover:left-[140%]
            group-hover:opacity-100
          "
        />

        {/* =========================================
            TEXT
        ========================================= */}

        <span
          className="
            relative
            z-30
            whitespace-nowrap

            text-[var(--neutral)]

            transition-colors
            duration-400
            ease-out

            group-hover:text-[var(--neutral)]
          "
        >
          {text}
        </span>

        {/* =========================================
            ICON
        ========================================= */}

        <span
          className="
            relative
            z-30

            flex
            h-7
            w-7
            shrink-0
            items-center
            justify-center

            overflow-hidden
            rounded-full

            bg-[var(--secondary-dark)]
            text-[var(--primary-dark)]

            shadow-[0_3px_10px_rgba(248,204,16,0.25)]

            transition-all
            duration-500
            ease-[cubic-bezier(0.22,1,0.36,1)]

            group-hover:rotate-45
            group-hover:scale-105
            group-hover:shadow-[0_4px_15px_rgba(248,204,16,0.4)]
          "
        >

          {/* OLD ICON */}

          <span
            className="
              absolute

              translate-x-0
              translate-y-0

              opacity-100

              transition-all
              duration-300
              ease-[cubic-bezier(0.22,1,0.36,1)]

              group-hover:translate-x-[18px]
              group-hover:-translate-y-[18px]
              group-hover:opacity-0
            "
          >
            {icon}
          </span>

          {/* NEW ICON */}

          <span
            className="
              absolute

              -translate-x-[18px]
              translate-y-[18px]

              opacity-0

              transition-all
              delay-50
              duration-300
              ease-[cubic-bezier(0.22,1,0.36,1)]

              group-hover:translate-x-0
              group-hover:translate-y-0
              group-hover:opacity-100
            "
          >
            {icon}
          </span>
        </span>

        {/* =========================================
            MICRO DOT
        ========================================= */}

        <span
          className="
            pointer-events-none
            absolute
            right-[42px]
            top-[4px]

            h-1
            w-1

            rounded-full
            bg-[var(--neutral)]/40

            opacity-0

            transition-opacity
            duration-300

            group-hover:opacity-100
          "
        />

      </span>
    </Link>
  );
}