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
      "We provide video production, video editing, social media management, creative design, content creation, Meta Ads and performance marketing.",
  },
  {
    question: "How do we start working together?",
    answer:
      "Simply contact us through our inquiry form. We'll understand your requirements, discuss your goals and suggest the right creative solution.",
  },
  {
    question: "Do you work with startups and small businesses?",
    answer:
      "Yes. We work with startups, growing businesses, established brands and creators looking to improve their digital presence.",
  },
  {
    question: "Can you manage our complete social media presence?",
    answer:
      "Yes. We can help with content strategy, creative production, editing, publishing and performance-focused social media management.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "Timelines depend on the project scope. We'll share a clear production schedule and delivery expectations before starting.",
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