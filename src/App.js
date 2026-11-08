import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './component/Navbar/Navbar';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Services from './Pages/Services/Services';
import Work from './Pages/Work/Work';
import Contact from './Pages/Contact/Contact';
import Footer from './component/Footer/Footer';
import ScrollToTop from './ScrollToTop';
import FloatingContact from './component/Button/FloatingContact';
import videoediting from "./Images/Services/Video_editing.jpeg"
import social_media from "./Images/Services/social media.png"
import metaads from "./Images/Services/metaads.png"
import graphic from "./Images/Services/Graphic.jpeg"
import content from "./Images/Services/content.jpeg"



/* =========================================================
   SERVICES DATA
========================================================= */
import {
  Play,
  Smartphone,
  Palette,
  PenTool,
  Target,
} from "lucide-react";

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
    image:
      videoediting
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
    image:
      social_media
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
    image:
      graphic
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
  image:
    content
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
  image:
    metaads
},
];

function App() {
  return (
    <BrowserRouter>
      <div className="app-shell">
        <Navbar />
        <FloatingContact/>
        <main className="route-content bg-white">
             <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home services={services}/>} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services services={services} />} />
            <Route path="/portfolio" element={<Work />} />
            <Route path="/contact" element={<Contact services={services}/>} />
          </Routes>
        </main>
      </div>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
