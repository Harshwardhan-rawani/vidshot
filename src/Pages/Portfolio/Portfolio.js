import React from "react";
import {  motion} from "framer-motion";

import ReelSlider from "../../component/Porfolio/ReelSlider";
import LongFormVideoSlider from "../../component/Porfolio/LongFormVideoSlider";
import LaptopPortfolioShowcase from "../../component/Porfolio/LaptopPortfolioShowcase";
import SocialMediaSlider from "../../component/Porfolio/SocialMediaSlider";
import GreenScreenComparison from "../../component/Porfolio/GreenScreenComparison";
import AnimatedGallery from "../../component/Porfolio/AnimatedGallery";



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
             Let’s get to work 
            </motion.p>
        
            <motion.h1
              variants={fadeUp}
              className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-[-0.06em] text-[#171717]"
            >
              Our <span className="text-[#5428B0]">Portfolio</span>
            </motion.h1>
        
            <motion.p
              variants={fadeUp}
              className="text-sm text-gray-500 mt-4 max-w-md mx-auto leading-relaxed"
            >
             Take a Peek at Our World of Creativity.  
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
              
            title="Our Reel Edits"
            subtitle="Creative videos that capture attention."
            reels={[
  {
    url: "https://res.cloudinary.com/dpxi1q0nl/video/upload/v1795165740/Video-33522.mp4",
    poster: "/images/reel1.jpg",
       views: "17.7K",
  },
  {
    url: "https://res.cloudinary.com/dpxi1q0nl/video/upload/v1795165751/Video-53323.mp4",
    poster: "/images/reel2.jpg",
       views: "8.2K",
  },
  {
    url: "https://res.cloudinary.com/dpxi1q0nl/video/upload/v1795165753/Video-24651.mp4",
    poster: "/images/reel3.jpg",
       views: "20.2K",
  },
    {
    url: "https://res.cloudinary.com/dpxi1q0nl/video/upload/v1795165772/Video-85690.mp4",
    poster: "/images/reel3.jpg",
       views: "327K",
  },
    {
    url: "https://res.cloudinary.com/dpxi1q0nl/video/upload/v1795165841/4_Tips_for_Distraction-Free_Studying_2.mp4",
    poster: "/images/reel3.jpg",
       views: "8.2K",
  },

           
            ]}
          />
         {/* Green screen and Edited video */}
          <GreenScreenComparison
  rawSrc="https://res.cloudinary.com/devg82est/video/upload/v1795158072/raw_d9aelo.mp4"
  editedSrc="https://res.cloudinary.com/devg82est/video/upload/v1795158176/4_Tips_for_Distraction-Free_Studying_2_whfbvv.mp4"
  rawTitle="Raw Green Screen"
  editedTitle="Edited Showcase"
/>
          <LongFormVideoSlider
  title="Our Long-Form Videos"
  videos={[
 
  {
    title: "Business Growth Podcast",
    src: "https://res.cloudinary.com/dpxi1q0nl/video/upload/v1795403735/kolkata_jeweller_intro_1_1.mp4",
    category: "Podcast",
  },
  {
    title: "Brand Story",
    src: "https://res.cloudinary.com/dpxi1q0nl/video/upload/v1795403731/Sanjay_sir_jio_ipo_starting_for_website.mp4",
    category: "Brand Film",
  },
  {
    title: "Business Growth Podcast",
    src: "https://res.cloudinary.com/dpxi1q0nl/video/upload/v1795403708/10_STEPS_VERIFICATIO_Intro.mp4",
    category: "Podcast",
  },

  ]}
/>
<SocialMediaSlider
  images={[
{
  src: "/images/client-photo.jpg",
  alt: "Client portfolio",
  clientName: "Your Client Name",
  platform: "instagram",
  category: "Social Media Management",
},
{
  src: "/images/client-photo.jpg",
  alt: "Client portfolio",
  clientName: "Your Client Name",
  platform: "instagram",
  category: "Social Media Management",
},
{
  src: "/images/client-photo.jpg",
  alt: "Client portfolio",
  clientName: "Your Client Name",
  platform: "instagram",
  category: "Social Media Management",
},
{
  src: "/images/client-photo.jpg",
  alt: "Client portfolio",
  clientName: "Your Client Name",
  platform: "instagram",
  category: "Social Media Management",
}
  ]}
/>
<AnimatedGallery/>


    </main>
  );
}
