import { useEffect, useState } from "react";
import { FiX, FiMaximize2 } from "react-icons/fi";

import thumbnailA from "../../Images/thumbnail/thumbnailA.jpeg"
import thumbnailB from "../../Images/thumbnail/thumbnailB.jpeg"
import thumbnailC from "../../Images/thumbnail/thumbnailC.jpeg"
import thumbnailD from "../../Images/thumbnail/thumbnailD.jpeg"
import cover1 from "../../Images/thumbnail/cover1.jpeg"
import cover2 from "../../Images/thumbnail/cover2.jpeg"
import cover3 from "../../Images/thumbnail/cover3.jpeg"
const galleryItems = [
  {
    src: thumbnailA,
    alt: "Main creative project",
    ratio: "landscape",
    position: "lg:col-span-5 lg:col-start-1 lg:row-start-1",
  },
  {
    src: thumbnailB,
    alt: "Creative campaign",
    ratio: "landscape",
    position: "lg:col-span-5 lg:col-start-1 lg:row-start-2",
  },
  {
    src: cover1,
    alt: "Creative process",
    ratio: "portrait",
    position: "lg:col-span-3 lg:col-start-6 lg:row-span-2 lg:row-start-1",
  },
  {
     src: cover2,
    alt: "Behind the scenes",
    ratio: "portrait",
    position: "lg:col-span-3 lg:col-start-9 lg:row-span-2 lg:row-start-1",
  },
  {
    src: cover3,
    alt: "Video editing",
    ratio: "portrait",
    position: "lg:col-span-3 lg:col-start-1 lg:row-span-2 lg:row-start-3",
  },
  {
     src: cover1,
    alt: "Social media creative",
    ratio: "portrait",
    position: "lg:col-span-3 lg:col-start-4 lg:row-span-2 lg:row-start-3",
  },
  {
    src: thumbnailC,
    alt: "Project details",
    ratio: "landscape",
    position: "lg:col-span-5 lg:col-start-7 lg:row-start-3",
  },
  {
    src: thumbnailD,
    alt: "Final creative project",
    ratio: "landscape",
    position: "lg:col-span-5 lg:col-start-7 lg:row-start-4",
  },
];

export default function AnimatedGallery() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 150);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setSelectedImage(null);
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    document.body.style.overflow = selectedImage ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedImage]);

  return (
    <section className="w-full overflow-hidden bg-white px-4 py-16 sm:px-6 md:py-20 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">

        {/* Section Heading */}
        <div className="mb-10 grid items-start gap-6 lg:mb-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <p className="mb-4 text-[10px] font-bold uppercase tracking-[3px] text-[#5428B0]">
              Visuals That Speak for Your Brand 
            </p>

            <h2 className="text-3xl font-bold leading-[1.08] tracking-tight text-[#171717] sm:text-4xl md:text-5xl lg:text-[56px]">
              A Little More 
              <br />
              <span className="text-[#5428B0]">
                Than Just Good Design 
              </span>
            </h2>
          </div>

          <div className="lg:pt-8">
            <p className="max-w-2xl text-base leading-relaxed text-gray-700 md:text-lg">
Thumbnails, posters, reel covers, and more — all designed to catch the eye and tell your story 
            </p>

      

            <div className="mt-6 flex items-center gap-3">
              <span className="h-[2px] w-10 bg-[#F8CC10]" />
              <span className="text-[10px] font-bold uppercase tracking-[2px] text-[#5428B0]">
                Creativity Beyond Frames
              </span>
            </div>
          </div>
        </div>

        {/* Asymmetric Gallery */}
        <div className="grid grid-cols-2 md:ml-14 lg:ml-24 gap-3 sm:gap-4 lg:grid-cols-12 lg:auto-rows-[clamp(160px,23.4vw,280px)] lg:gap-5">

          {galleryItems.map((item, index) => (
            <button
              key={item.src + index}
              type="button"
              onClick={() => setSelectedImage(item)}
              aria-label={`View ${item.alt} in fullscreen`}
              style={{
                transitionDelay: visible ? `${index * 90}ms` : "0ms",
              }}
              className={`
                group relative block w-full overflow-hidden
                rounded-lg bg-neutral-100 text-left
                transition-all duration-700 ease-out
                focus-visible:outline-none focus-visible:ring-2
                focus-visible:ring-[#5428B0] focus-visible:ring-offset-2
                ${item.position}
                ${
                  item.ratio === "landscape"
                    ? "aspect-[16/9]"
                    : "aspect-[9/16]"
                }
                ${
                  visible
                    ? "translate-y-0 scale-100 opacity-100"
                    : "translate-y-8 scale-[0.96] opacity-0"
                }
                lg:aspect-auto
              `}
            >
              <img
                src={item.src}
                alt={item.alt}
       
                  loading="lazy"
  decoding="async"
                className="
                  absolute inset-0 h-full w-full object-cover
                  transition-transform duration-700 ease-out
                  group-hover:scale-105
                "
              />

              {/* Hover Overlay */}
              <div className="
                absolute inset-0 flex items-center justify-center
                bg-black/0 opacity-0
                transition-all duration-300
                group-hover:bg-black/20
                group-hover:opacity-100
              ">
                <span className="
                  translate-y-3 rounded-full
                  border border-white/30
                  bg-white/20 p-3 text-white
                  shadow-lg backdrop-blur-md
                  transition-transform duration-300
                  group-hover:translate-y-0
                ">
                  <FiMaximize2 size={20} />
                </span>
              </div>

              {/* Subtle Border */}
              <div className="
                pointer-events-none absolute inset-0
                rounded-lg border border-black/5
                transition-colors duration-300
                group-hover:border-[#5428B0]/50
              " />
            </button>
          ))}

        </div>
      </div>

      {/* Fullscreen Image Preview */}
      {selectedImage && (
        <div
          onClick={() => setSelectedImage(null)}
          role="dialog"
          aria-modal="true"
          aria-label={selectedImage.alt}
          className="
            fixed inset-0 z-[100]
            flex items-center justify-center
            bg-black/95 p-4 backdrop-blur-md
            sm:p-8
          "
        >
          <button
            type="button"
            onClick={() => setSelectedImage(null)}
            aria-label="Close image preview"
            className="
              absolute right-4 top-4 z-50
              rounded-full border border-white/20
              bg-white/10 p-3 text-white
              backdrop-blur-md transition-all
              hover:rotate-90 hover:bg-white/20
              sm:right-8 sm:top-8
            "
          >
            <FiX size={24} />
          </button>

          <img
            src={selectedImage.src}
            alt={selectedImage.alt}
            onClick={(e) => e.stopPropagation()}
              loading="lazy"
  decoding="async"
            className="
              max-h-[90vh] max-w-[95vw]
              rounded-lg object-contain shadow-2xl
              sm:max-w-[90vw]
            "
          />
        </div>
      )}
    </section>
  );
}