import React, {useState} from "react";
import { motion } from "framer-motion";
import { FiPlus, FiMinus } from "react-icons/fi";
import { AnimatePresence } from "framer-motion";
import AnimatedButton from "../Button/AnimatedButton";

/* =========================================
   FAQ DATA
========================================= */

const faqs = [
  {
    question: "What services does VidShot Media provide?",
    answer:
      "We offer video production, video editing, social media management, content creation, graphic design, Meta Ads, and performance marketing. Whether you need one creative asset or support across multiple channels, we can help. ",
  },
  {
    question: "How do we start working together?",
    answer:
      "Simply get in touch with us. Tell us about your business, your requirements, and what you have in mind. We will discuss the brief, understand your goals, and work out the next steps together. ",
  },
  {
    question: "Do you work with startups and small businesses?",
    answer:
      "Absolutely. You do not need to be a large brand to have a great story or a strong creative idea. We work with businesses at different stages and help them find the right creative solutions for their goals. ",
  },
  {
    question: "Can you manage our complete social media presence?",
    answer:
      "Yes. We can support your social media presence through strategy, content planning, creative production, copywriting, and platform management, depending on your requirements. ",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "It depends on the scope, format, and complexity of the project. Once we understand your brief, we can share a realistic timeline and keep you informed throughout the process. ",
  },
];

export default function Aboutfaq() {
    const [activeFaq, setActiveFaq] = useState(0);
  return (
        
      <section className="py-20 md:py-28 bg-white">

        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

          <div className="grid lg:grid-cols-[0.7fr_1.3fr] gap-12 lg:gap-20">

            {/* Left */}

            <div>

              <p className="text-[10px] uppercase tracking-[3px] font-bold text-[#5428B0] mb-3">
                FAQ's
              </p>

              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
                Still have
                <span className="text-[#5428B0]"> questions?</span>
              </h2>

              <p className="text-sm text-gray-500 leading-7 mt-5 max-w-sm">
                Find answers to common questions about our services,
                projects and creative process.
              </p>

              <div className="mt-7">
                <AnimatedButton
                  text="Contact Us"
                  to="/contact"
                />
              </div>

            </div>


            {/* Right: Accordion */}

            <div className="border-t border-gray-200">

              {faqs.map((faq, index) => (

                <div
                  key={faq.question}
                  className="border-b border-gray-200"
                >

                  <button
                    type="button"
                    onClick={() =>
                      setActiveFaq(activeFaq === index ? -1 : index)
                    }
                    aria-expanded={activeFaq === index}
                    className="
                      w-full
                      flex items-center justify-between
                      gap-5
                      py-6
                      text-left
                    "
                  >

                    <span className="
                      text-sm md:text-base
                      font-semibold
                      text-[#171717]
                    ">
                      {faq.question}
                    </span>

                    <span className="
                      w-8 h-8
                      shrink-0
                      rounded-full
                      bg-[#F7F5FB]
                      flex items-center justify-center
                      text-[#5428B0]
                    ">
                      {activeFaq === index
                        ? <FiMinus size={16} />
                        : <FiPlus size={16} />
                      }
                    </span>

                  </button>

                  <AnimatePresence initial={false}>

                    {activeFaq === index && (

                      <motion.div
                        initial={{
                          height: 0,
                          opacity: 0,
                        }}
                        animate={{
                          height: "auto",
                          opacity: 1,
                        }}
                        exit={{
                          height: 0,
                          opacity: 0,
                        }}
                        transition={{
                          duration: 0.3,
                        }}
                        className="overflow-hidden"
                      >

                        <p className="
                          text-sm
                          leading-7
                          text-gray-500
                          pb-6
                          pr-10
                        ">
                          {faq.answer}
                        </p>

                      </motion.div>

                    )}

                  </AnimatePresence>

                </div>

              ))}

            </div>

          </div>

        </div>

      </section>

  )}