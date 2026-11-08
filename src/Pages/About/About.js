import React from "react";
import Abouthero from "../../component/About/Abouthero";
import Aboutfaq from "../../component/About/Aboutfaq";
import Aboutcarusel from "../../component/About/Aboutcarusel";
import Aboutintro from "../../component/About/Aboutintro";
import Aboutfounder from "../../component/About/Aboutfounder";
import Aboutwwd from "../../component/About/Aboutwwd";
import Abouthww from "../../component/About/Abouthww.js";
import Aboutcta from "../../component/About/Aboutcta.js";



/* =========================================
   ABOUT PAGE
========================================= */

export default function About() {

 return (
    <main className="overflow-hidden bg-[#FAFAFA] text-[#171717]">

      {/* =========================================
          01. HERO / IMAGE COLLAGE
      ========================================= */}
     <Abouthero />

      {/* =========================================
          02. INTRODUCTION
      ========================================= */}

    <Aboutintro/>



    {/* =========================================
    03. MISSION / VISION CAROUSEL
========================================= */}

   <Aboutcarusel/>




      {/* =========================================
          05. WHAT WE DO
      ========================================= */}
    <Aboutwwd/>

          {/* =========================================
          04. FOUNDER SECTION
      ========================================= */}
    <Aboutfounder/>



      {/* =========================================
          06. HOW WE WORK
      ========================================= */}
      <Abouthww/>



      {/* =========================================
          07. FAQ SECTION
      ========================================= */}
      <Aboutfaq/>

      {/* =========================================
          08. FINAL CTA
      ========================================= */}

    <Aboutcta/>

    </main>
  );
}