import './App.css';

import React, { lazy, Suspense } from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './component/Navbar/Navbar';
import Footer from './component/Footer/Footer';
import ScrollToTop from './ScrollToTop';

import FloatingContact from './component/Button/FloatingContact';
import LeadPopup from './component/Home/LeadPopup';

import videoediting from "./Images/Services/Video_editing.jpeg";
import social_media from "./Images/Services/social media.png";
import metaads from "./Images/Services/metaads.png";
import graphic from "./Images/Services/Graphic.jpeg";
import content from "./Images/Services/content.jpeg";

import {
  Play,
  Smartphone,
  Palette,
  PenTool,
  Target,
} from "lucide-react";


// Lazy load pages
const Home = lazy(() => import('./Pages/Home/Home'));
const About = lazy(() => import('./Pages/About/About'));
const Services = lazy(() => import('./Pages/Services/Services'));
const Contact = lazy(() => import('./Pages/Contact/Contact'));
const Portfolio = lazy(() => import('./Pages/Portfolio/Portfolio'));
const Pricing = lazy(() => import('./Pages/Pricing/Pricing'));


// Services Data
const services = [
  {
    id: 1,
    number: "01",
    title: "Video Editing",
    shortTitle: "Video Editing",
    description:
      "From brand films to cinematic campaigns, we create videos that tell your story and make people stop scrolling.",
    tags: [
      "Brand Films",
      "Commercials",
      "Product Videos",
      "Corporate Films",
    ],
    icon: Play,
    image: videoediting,
  },

  {
    id: 2,
    number: "02",
    title: "Social Media Management",
    shortTitle: "Social Media",
    description:
      "Scroll-stopping short-form content designed to build attention, engagement and a recognizable brand presence.",
    tags: [
      "Reels",
      "Shorts",
      "Social Ads",
      "Content Strategy",
    ],
    icon: Smartphone,
    image: social_media,
  },

  {
    id: 3,
    number: "03",
    title: "Creative & Design",
    shortTitle: "Graphic Design",
    description:
      "Visual identities and creative systems that give your brand a distinct personality across every touchpoint.",
    tags: [
      "Brand Identity",
      "Motion Design",
      "Graphic Design",
      "Creative Direction",
    ],
    icon: Palette,
    image: graphic,
  },

  {
    id: 4,
    number: "04",
    title: "Content Writing",
    shortTitle: "Content",
    description:
      "Create engaging, compelling, and SEO-friendly content that communicates your brand message, connects with your audience, and turns ideas into meaningful engagement.",
    tags: [
      "Website Content",
      "SEO Writing",
      "Social Media Copy",
      "Blog Writing",
      "Brand Storytelling",
    ],
    icon: PenTool,
    image: content,
  },

  {
    id: 5,
    number: "05",
    title: "Meta Ads",
    shortTitle: "Meta Ads",
    description:
      "Reach the right audience with powerful Facebook and Instagram ad campaigns. Generate quality leads, boost conversions, and maximize your business growth.",
    tags: [
      "Facebook Ads",
      "Instagram Ads",
      "Lead Generation",
      "Audience Targeting",
    ],
    icon: Target,
    image: metaads,
  },
];


// Loading Animation Component
const PageLoader = () => {
  return (
    <div className="page-loader">
      <div className="loader-content">

        <div className="loader-logo">
          VID<span>SHOT</span>
        </div>

        <div className="loader-spinner"></div>

        <p>Creating Something Amazing...</p>

      </div>
    </div>
  );
};


function App() {

  return (
    <BrowserRouter>

      <div className="app-shell">

        <LeadPopup />

        <Navbar />

        <FloatingContact />

        <main className="route-content bg-white">

          <ScrollToTop />

          <Suspense fallback={<PageLoader />}>

            <Routes>

              <Route
                path="/"
                element={<Home services={services} />}
              />

              <Route
                path="/about"
                element={<About />}
              />

              <Route
                path="/services"
                element={<Services services={services} />}
              />

              <Route
                path="/portfolio"
                element={<Portfolio />}
              />

              <Route
                path="/pricing"
                element={<Pricing />}
              />

              <Route
                path="/contact"
                element={<Contact services={services} />}
              />

            </Routes>

          </Suspense>

        </main>

        <Footer />

      </div>

    </BrowserRouter>
  );
}

export default App;