import React, { useEffect, useState } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import AnimatedButton from "../Button/AnimatedButton";
import vidshot from "../../icons/vidshot.png";

const navItems = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Portfolio", path: "/portfolio" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const location = useLocation();

  // Glass effect activates on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Close mobile menu when navigating
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`
        fixed inset-x-0 top-0 z-50
        transition-all duration-300 ease-in-out
        ${
          scrolled
            ? "border-b border-white/40 bg-white/75 shadow-[0_4px_30px_rgba(0,0,0,0.06)] backdrop-blur-xl"
            : "border-b border-transparent bg-white/95"
        }
      `}
    >
      <div className="mx-auto max-w-8xl px-5 sm:px-8 lg:px-16 py-2">
        <div className="flex h-[72px] items-center justify-between gap-6">

          {/* LOGO */}
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

          {/* DESKTOP NAVIGATION */}
          <nav
            aria-label="Main navigation"
            className="hidden items-center gap-7 md:flex lg:gap-9"
          >
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                end={item.path === "/"}
                className={({ isActive }) =>
                  `
                    relative py-2 text-[13px] font-medium
                    transition-colors duration-200
                    after:absolute after:bottom-0 after:left-0
                    after:h-[2px] after:rounded-full
                    after:bg-[#5428B0] after:transition-all after:duration-300
                    ${
                      isActive
                        ? "text-[#5428B0] after:w-full"
                        : "text-[#55515D] after:w-0 hover:text-[#5428B0] hover:after:w-full"
                    }
                  `
                }
              >
                {item.name}
              </NavLink>
            ))}
          </nav>

          {/* DESKTOP CTA */}
          <AnimatedButton
          className="md:block hidden"
          text="Let's Talk"
          to = "/contact"/>
      

          {/* MOBILE MENU BUTTON */}
          <button
            type="button"
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((prev) => !prev)}
            className="
              flex h-10 w-10 items-center justify-center
              rounded-full border border-[#5428B0]/15
              text-[#17122A] transition-colors
              hover:bg-[#5428B0]/5 md:hidden
            "
          >
            <span className="relative block h-4 w-5">
              <span
                className={`
                  absolute left-0 h-[1.5px] w-5 rounded-full bg-current
                  transition-all duration-300
                  ${menuOpen ? "top-[7px] rotate-45" : "top-[3px]"}
                `}
              />

              <span
                className={`
                  absolute left-0 top-[7px] h-[1.5px] w-5
                  rounded-full bg-current transition-all duration-300
                  ${menuOpen ? "scale-0 opacity-0" : "scale-100 opacity-100"}
                `}
              />

              <span
                className={`
                  absolute left-0 h-[1.5px] w-5 rounded-full bg-current
                  transition-all duration-300
                  ${menuOpen ? "top-[7px] -rotate-45" : "top-[11px]"}
                `}
              />
            </span>
          </button>
        </div>
      </div>

      {/* MOBILE NAVIGATION */}
      <div
        className={`
          overflow-hidden border-t border-[#5428B0]/10
          bg-white/95 backdrop-blur-xl
          transition-all duration-300 ease-in-out
          md:hidden
          ${
            menuOpen
              ? "visible max-h-[420px] opacity-100"
              : "invisible max-h-0 opacity-0"
          }
        `}
      >
        <nav
          aria-label="Mobile navigation"
          className="mx-auto flex max-w-7xl flex-col px-5 py-3 sm:px-8"
        >
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              end={item.path === "/"}
              className={({ isActive }) =>
                `
                  flex items-center justify-between
                  border-b border-[#17122A]/5 py-3.5
                  text-sm font-medium transition-colors
                  ${
                    isActive
                      ? "text-[#5428B0]"
                      : "text-[#55515D] hover:text-[#5428B0]"
                  }
                `
              }
            >
              {item.name}
              <span aria-hidden="true" className="text-base opacity-50">
                ↗
              </span>
            </NavLink>
          ))}
          
     
        
        </nav>
      </div>
    </header>
  );
}