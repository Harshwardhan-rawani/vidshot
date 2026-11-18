
import { useEffect, useState } from "react";
import { FiX, FiMaximize2 } from "react-icons/fi";

const galleryItems = [
  { src: "/images/gallery-1.jpg", alt: "Main project" },
  { src: "/images/gallery-2.jpg", alt: "Interior design" },
  { src: "/images/gallery-3.jpg", alt: "Creative process" },
  { src: "/images/gallery-4.jpg", alt: "Behind the scenes" },
  { src: "/images/gallery-5.jpg", alt: "Editing" },
  { src: "/images/gallery-6.jpg", alt: "Creative work" },
  { src: "/images/gallery-7.jpg", alt: "Project details" },
  { src: "/images/gallery-8.jpg", alt: "Final project" },
];

const gridPositions = [
  "md:col-span-6 md:row-span-4 md:col-start-4 md:row-start-1",
  "md:col-span-2 md:row-span-3 md:col-start-2 md:row-start-2",
  "md:col-span-3 md:row-span-4 md:col-start-1 md:row-start-5",
  "md:col-span-4 md:row-span-4 md:col-start-4 md:row-start-5",
  "md:col-span-2 md:row-span-4 md:col-start-8 md:row-start-5",
  "md:col-span-2 md:row-span-3 md:col-start-10 md:row-start-2",
  "md:col-span-3 md:row-span-2 md:col-start-10 md:row-start-5",
  "md:col-span-3 md:row-span-2 md:col-start-10 md:row-start-7",
];

export default function AnimatedGallery() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
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

        {/* Header */}
        <div className="mb-10 grid items-start gap-6 sm:mb-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">

          <div>
            <p className="mb-4 text-[10px] font-bold uppercase tracking-[3px] text-[#5428B0]">
              Creative Designs
            </p>

            <h2 className="text-3xl font-bold leading-[1.08] tracking-tight text-[#171717] sm:text-4xl md:text-5xl lg:text-[56px]">
              Visuals That
              <br />
              <span className="text-[#5428B0]">
                Make An Impact.
              </span>
            </h2>
          </div>

          <div className="lg:pt-8">
            <p className="max-w-2xl text-base leading-relaxed text-gray-700 md:text-lg">
              From eye-catching thumbnails and reel covers to creative posters
              and graphic designs, we turn ideas into visuals that capture attention.
            </p>

            <p className="mt-4 max-w-2xl text-sm leading-7 text-gray-500 md:text-base">
              Every design is crafted with the right balance of creativity,
              storytelling and visual identity to make your content stand out.
            </p>

            <div className="mt-6 flex items-center gap-3">
              <span className="h-[2px] w-10 bg-[#F8CC10]" />
              <span className="text-[10px] font-bold uppercase tracking-[2px] text-[#5428B0]">
                Creativity Beyond Frames
              </span>
            </div>
          </div>

        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 auto-rows-[130px] gap-3 sm:grid-cols-4 sm:auto-rows-[150px] sm:gap-4 md:grid-cols-12 md:auto-rows-[65px] md:gap-3">

          {galleryItems.map((item, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setSelectedImage(item)}
              aria-label={`View ${item.alt} in fullscreen`}
              style={{
                transitionDelay: visible ? `${index * 80}ms` : "0ms",
              }}
              className={`
                group relative min-w-0 overflow-hidden rounded-lg
                bg-neutral-100 text-left
                transition-all duration-700 ease-out
                focus-visible:outline-none focus-visible:ring-2
                focus-visible:ring-[#5428B0] focus-visible:ring-offset-2
                ${visible
                  ? "translate-y-0 scale-100 opacity-100"
                  : "translate-y-8 scale-95 opacity-0"
                }

                ${index === 0 ? "col-span-2 row-span-2 sm:col-span-2 sm:row-span-2" : ""}
                ${index === 1 ? "col-span-1 row-span-2 sm:col-span-2 sm:row-span-2" : ""}
                ${index === 2 ? "col-span-1 row-span-2 sm:col-span-2 sm:row-span-2" : ""}
                ${index === 3 ? "col-span-2 row-span-2 sm:col-span-2 sm:row-span-2" : ""}
                ${index === 4 ? "col-span-1 row-span-2 sm:col-span-2 sm:row-span-2" : ""}
                ${index === 5 ? "col-span-1 row-span-2 sm:col-span-2 sm:row-span-2" : ""}
                ${index === 6 ? "col-span-1 row-span-2 sm:col-span-2 sm:row-span-2" : ""}
                ${index === 7 ? "col-span-1 row-span-2 sm:col-span-2 sm:row-span-2" : ""}

                ${gridPositions[index]}
              `}
            >
              <img
                src={item.src}
                alt={item.alt}
                loading="lazy"
                className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-105 group-hover:brightness-75"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/0 opacity-0 transition-all duration-300 group-hover:bg-black/15 group-hover:opacity-100">
                <span className="translate-y-3 rounded-full border border-white/30 bg-white/20 p-3 text-white shadow-lg backdrop-blur-md transition-transform duration-300 group-hover:translate-y-0">
                  <FiMaximize2 size={20} />
                </span>
              </div>
            </button>
          ))}

        </div>
      </div>

      {/* Fullscreen Popup */}
      {selectedImage && (
        <div
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 backdrop-blur-md sm:p-8"
          role="dialog"
          aria-modal="true"
          aria-label={selectedImage.alt}
        >
          <button
            type="button"
            onClick={() => setSelectedImage(null)}
            aria-label="Close image preview"
            className="absolute right-4 top-4 z-50 rounded-full border border-white/20 bg-white/10 p-3 text-white backdrop-blur-md transition hover:rotate-90 hover:bg-white/20 sm:right-8 sm:top-8"
          >
            <FiX size={24} />
          </button>

          <img
            src={selectedImage.src}
            alt={selectedImage.alt}
            onClick={(e) => e.stopPropagation()}
            className="max-h-[85vh] max-w-[95vw] rounded-lg object-contain shadow-2xl sm:max-w-[90vw]"
          />
        </div>
      )}
    </section>
  );
}
