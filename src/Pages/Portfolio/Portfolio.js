import React from "react";
import {  motion} from "framer-motion";

import ReelSlider from "./ReelSlider";
import LongFormVideoSlider from "./LongFormVideoSlider";
import GreenScreenComparison from "./GreenScreenComparison";
import AnimatedGallery from "./AnimatedGallery";
import LaptopPortfolioShowcase from "./LaptopPortfolioShowcase";
import SocialMediaSlider from "./SocialMediaSlider";



/**
 * Vidshot Portfolio
 * Theme matched to the supplied website code:
 * Purple: #5428B0 | Yellow: #F8CC10 | White background
 *
 * Replace the image paths below with your real portfolio assets.
 */


const EASE = [0.22, 1, 0.36, 1];

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};


export default function Portfolio() {


  return (
    <main className="relative min-h-screen overflow-hidden bg-white text-[#171717]">



      {/* Hero */}
      <section className="relative z-10 px-5 pb-20 pt-24 md:pb-20 ">
              {/* Subtle site-wide background details */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-48 top-48 h-[420px] w-[420px] rounded-full bg-[#5428B0]/[0.045] blur-3xl" />
        <div className="absolute -right-48 top-[38%] h-[380px] w-[380px] rounded-full bg-[#F8CC10]/[0.07] blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: "linear-gradient(#17122a 1px, transparent 1px), linear-gradient(90deg, #17122a 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
      </div>
        <div className="mx-auto max-w-[1250px] text-center">
          
          {/* Heading */}
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="visible"
            className="text-center mb-10 md:mb-5 px-5"
          >
        
            <motion.p
              variants={fadeUp}
              className="text-[10px] font-bold uppercase tracking-[3px] text-[#5428B0] mb-3"
            >
              Let's Connect
            </motion.p>
        
            <motion.h1
              variants={fadeUp}
              className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-[-0.06em] text-[#171717]"
            >
              Portfolio <span className="text-[#5428B0]">Us.</span>
            </motion.h1>
        
            <motion.p
              variants={fadeUp}
              className="text-sm text-gray-500 mt-4 max-w-md mx-auto leading-relaxed"
            >
              Have a project in mind? Let's create something meaningful together.
            </motion.p>
        
          </motion.div>
      


        </div>

   
<LaptopPortfolioShowcase
  autoPlay={true}
  interval={3500}
/>

      </section>
     {/* ReelSlider */}
      <ReelSlider
                  className="max-w-[1350px] mx-auto"
            title="Our Reel Edits"
            subtitle="Creative videos that capture attention."
            reels={[
              {
                src: "/portfolio/reel-1.mp4",
                title: "Brand Story",
                category: "Video Editing",
              },
              {
                src: "/portfolio/reel-2.mp4",
                title: "Product Showcase",
                category: "Reels",
              },
              {
                src: "/portfolio/reel-3.mp4",
                title: "Social Media Campaign",
                category: "Creative",
              },
              {
                src: "/portfolio/reel-4.mp4",
                title: "Business Story",
                category: "Reels",
              },
                  {
                src: "/portfolio/reel-4.mp4",
                title: "Business Story",
                category: "Reels",
              },
           
            ]}
          />
         {/* Green screen and Edited video */}
          <GreenScreenComparison
  rawSrc="/portfolio/green-screen.mp4"
  editedSrc="/portfolio/edited-reel.mp4"
  rawTitle="Raw Green Screen"
  editedTitle="Product Showcase"
/>
          <LongFormVideoSlider
  title="Our Long-Form Videos"
  videos={[
    {
      src: "/portfolio/video-1.mp4",
      poster: "/portfolio/video-1.jpg",
      title: "Podcast Episode 01",
      category: "Podcast",
      duration: "18:42",
    },
    {
      src: "/portfolio/video-2.mp4",
      poster: "/portfolio/video-2.jpg",
      title: "Brand Documentary",
      category: "Video Production",
      duration: "12:30",
    },
        {
      src: "/portfolio/video-1.mp4",
      poster: "/portfolio/video-1.jpg",
      title: "Podcast Episode 01",
      category: "Podcast",
      duration: "18:42",
    },
    {
      src: "/portfolio/video-2.mp4",
      poster: "/portfolio/video-2.jpg",
      title: "Brand Documentary",
      category: "Video Production",
      duration: "12:30",
    },
  ]}
/>
<SocialMediaSlider
  images={[
    {
      src: "/portfolio/social-1.jpg",
      alt: "Instagram post designs",
      category: "Instagram Posts",
    },
        {
      src: "/portfolio/social-1.jpg",
      alt: "Instagram post designs",
      category: "Instagram Posts",
    },
    

    {
      src: "/portfolio/social-2.jpg",
      alt: "Brand campaign",
      category: "Campaign",
    },
    {
      src: "/portfolio/social-3.jpg",
      alt: "Instagram carousel",
      category: "Carousel",
    },
    {
      src: "/portfolio/social-4.jpg",
      alt: "Social media creatives",
      category: "Creative Designs",
    },
  ]}
/>
<AnimatedGallery/>


    </main>
  );
}
