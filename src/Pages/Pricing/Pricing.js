
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiCheck,
  FiArrowUpRight,
  FiArrowRight,
  FiMessageCircle,
  FiZap,
  FiShield,
  FiClock,
} from "react-icons/fi";
import {
  fadeUp,
  stagger, } from "../../Animation/Fadeup";
const pricingGroups = [
  {
    label: "Social Media",
    title: "Instagram & Facebook Management",
    note: "Monthly retainer. You supply the raw footage.",
    plans: [
      {
        name: "Starter",
        description: "A steady presence on two platforms.",
        price: "₹15,000",
        unit: "/month",
        features: [
          "12 static posts or carousels",
          "Stories",
          "Instagram and Facebook",
          "Content calendar",
        ],
      },
      {
        name: "Growth",
        description: "Posts plus short video every week.",
        price: "₹28,000",
        unit: "/month",
        popular: true,
        features: [
          "Everything in Starter",
          "8 edited reels",
          "Community management",
          "Monthly analytics report",
        ],
      },
      {
        name: "Premium",
        description: "Full content engine with strategy.",
        price: "₹45,000",
        unit: "/month",
        features: [
          "Everything in Growth",
          "15 reels",
          "Strategy call every 2 weeks",
          "Ads and growth reporting",
        ],
      },
    ],
  },
  {
    label: "LinkedIn",
    title: "LinkedIn Management",
    note: "Monthly retainer for founders and business owners.",
    plans: [
      {
        name: "Starter",
        description: "Consistent posting in your voice.",
        price: "₹18,000",
        unit: "/month",
        features: [
          "12 ghostwritten posts",
          "Profile optimisation",
        ],
      },
      {
        name: "Premium",
        description: "Posts, formats and engagement covered.",
        price: "₹30,000",
        unit: "/month",
        popular: true,
        features: [
          "Everything in Starter",
          "Carousels or videos",
          "Engagement support",
          "Monthly newsletter",
        ],
      },
    ],
  },
  {
    label: "YouTube",
    title: "YouTube Channel Management",
    note: "Monthly retainer. Choose management alone or full production.",
    plans: [
      {
        name: "Management Only",
        description: "We run the channel. You bring the videos.",
        price: "₹20,000",
        unit: "/month",
        features: [
          "Uploads",
          "Titles, descriptions and SEO",
          "Community tab",
          "Analytics review",
        ],
      },
      {
        name: "Full Service",
        description: "Editing, shorts and thumbnails included.",
        price: "₹45,000",
        unit: "/month",
        popular: true,
        features: [
          "Everything in Management Only",
          "4 long-video edits",
          "8 shorts",
          "Thumbnail for every video",
        ],
      },
    ],
  },
  {
    label: "Reels & Shorts",
    title: "Reels & Shorts Editing",
    note: "Vertical video for Instagram, YouTube Shorts and Facebook. Two revision rounds per reel.",
    plans: [
      {
        name: "AI Avatar Reel",
        description: "A reel built around an AI presenter.",
        price: "₹2,500",
        unit: "per reel",
        features: [
          "AI avatar presenter reel",
          "Vertical 9:16 delivery",
          "2 revision rounds",
        ],
      },
      {
        name: "Single Reel",
        description: "One professionally edited reel or short.",
        price: "₹2,000",
        unit: "per reel",
        features: [
          "One edited reel or short",
          "Vertical 9:16 delivery",
          "2 revision rounds",
        ],
      },
      {
        name: "15 Reels",
        description: "A month of reels at a lower rate.",
        price: "₹22,500",
        unit: "/month",
        sub: "₹1,500 per reel",
        popular: true,
        features: [
          "15 edited reels or shorts",
          "2 revision rounds per reel",
          "Extra revisions ₹300 each",
        ],
      },
      {
        name: "30 Reels",
        description: "Daily posting at the lowest rate.",
        price: "₹39,000",
        unit: "/month",
        sub: "₹1,300 per reel",
        features: [
          "30 edited reels or shorts",
          "2 revision rounds per reel",
          "Extra revisions ₹300 each",
        ],
      },
    ],
  },
  {
    label: "Long-form",
    title: "YouTube Long-form Editing",
    note: "Raw footage in, finished video out. Priced per video.",
    plans: [
      {
        name: "Up to 10 Minutes",
        description: "One standard YouTube video.",
        price: "₹6,000",
        unit: "per video",
        features: [
          "One video up to 10 minutes",
          "Raw footage in, finished edit out",
        ],
      },
      {
        name: "10–20 Minutes",
        description: "Longer videos and deep dives.",
        price: "₹9,000",
        unit: "per video",
        features: [
          "One video of 10 to 20 minutes",
          "Past 20 minutes: ₹600 per extra minute",
        ],
      },
      {
        name: "Monthly Batch",
        description: "For channels that upload every week.",
        price: "₹5,000",
        unit: "per video",
        sub: "For 4 or more videos per month",
        popular: true,
        features: [
          "4 or more videos a month",
          "Each up to 10 minutes",
          "Save ₹1,000 on every video",
        ],
      },
    ],
  },
  {
    label: "Podcast",
    title: "Podcast Editing",
    note: "Clean cuts, sound cleanup and a trailer in every episode. Raw recordings up to 60 minutes.",
    plans: [
      {
        name: "Single Episode",
        description: "Try us on one episode.",
        price: "₹9,000",
        unit: "per podcast",
        features: [
          "Clean cuts",
          "Sound cleanup",
          "Trailer included",
          "Raw recording up to 60 minutes",
        ],
      },
      {
        name: "4 Podcasts",
        description: "A month of weekly episodes.",
        price: "₹30,000",
        unit: "for 4 podcasts",
        sub: "₹7,500 per podcast",
        popular: true,
        features: [
          "Clean cuts",
          "Sound cleanup",
          "Trailer for every episode",
          "Save ₹1,500 per episode",
        ],
      },
      {
        name: "8 Podcasts",
        description: "Twice a week, lowest rate.",
        price: "₹56,000",
        unit: "for 8 podcasts",
        sub: "₹7,000 per podcast",
        features: [
          "Clean cuts",
          "Sound cleanup",
          "Trailer for every episode",
          "Save ₹2,000 per episode",
        ],
      },
    ],
  },
];

const addons = [
  {
    name: "Thumbnail",
    scope: "2 variants and 2 copy revisions",
    price: "₹1,500 each",
  },
  {
    name: "Thumbnail Pack of 8",
    scope: "Same scope per thumbnail",
    price: "₹1,200 each",
  },
  {
    name: "Extra Revision",
    scope: "Reels, shorts and thumbnails after included rounds",
    price: "₹300 each",
  },
  {
    name: "Long-form Past 20 Minutes",
    scope: "YouTube and long-form editing",
    price: "₹600 per extra minute",
  },
  {
    name: "Podcast Raw Over 60 Minutes",
    scope: "Podcast editing",
    price: "₹2,000 per extra 30 min",
  },
];

const EASE = [0.22, 1, 0.36, 1];

export default function Pricing() {
  const [activeTab, setActiveTab] = useState(0);
  const activeGroup = pricingGroups[activeTab];

  const handlePlanSelect = (plan) => {
    const contact = document.getElementById("contact");

    if (contact) {
      contact.scrollIntoView({ behavior: "smooth" });
    }

    // Optional: pass selected plan to your contact form here.
    console.log("Selected Vidshot plan:", plan);
  };

  return (
    <main className="min-h-screen mt-24 overflow-hidden bg-white text-[#171717]">
  {/* Heading */}
  <motion.div
    variants={stagger}
    initial="hidden"
    animate="visible"
    className="text-center mb-10 md:mb-12 px-5"
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
      Pricing 
    </motion.h1>

    <motion.p
      variants={fadeUp}
      className="text-sm text-gray-500 mt-4 max-w-md mx-auto leading-relaxed"
    >
      Have a project in mind? Let's create something meaningful together.
    </motion.p>

  </motion.div>
   

      {/* PRICING PLANS */}
      <section id="plans" className="px-5 pb-20 pt-6 sm:pb-24">
        <div className="mx-auto max-w-7xl">

          {/* CATEGORY TABS */}
          <div className="mb-10 flex flex-wrap gap-2 border-b border-neutral-200 pb-5">
            {pricingGroups.map((group, index) => (
              <button
                key={group.label}
                onClick={() => setActiveTab(index)}
                className={`rounded-full border px-5 py-2.5 text-xs font-bold transition-all duration-300 sm:text-sm ${
                  activeTab === index
                    ? "border-[#5428B0] bg-[#5428B0] text-white shadow-lg shadow-[#5428B0]/20"
                    : "border-neutral-200 bg-white text-neutral-600 hover:border-[#5428B0]/40 hover:text-[#5428B0]"
                }`}
              >
                {group.label}
              </button>
            ))}
          </div>

          {/* ACTIVE CATEGORY HEADING */}
          <div className="mb-9 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="mb-2 text-[10px] font-bold uppercase tracking-[2.5px] text-[#5428B0]">
                Choose Your Service
              </p>

              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl">
                {activeGroup.title}
              </h2>

              <p className="mt-3 max-w-2xl text-sm leading-7 text-gray-500">
                {activeGroup.note}
              </p>
            </div>

            <p className="text-xs font-semibold text-gray-400">
              {activeGroup.plans.length} available plans
            </p>
          </div>

          {/* PLAN CARDS */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35, ease: EASE }}
              className={`grid items-stretch gap-5 ${
                activeGroup.plans.length === 2
                  ? "mx-auto max-w-4xl sm:grid-cols-2"
                  : activeGroup.plans.length === 4
                  ? "sm:grid-cols-2 xl:grid-cols-4"
                  : "sm:grid-cols-2 lg:grid-cols-3"
              }`}
            >
              {activeGroup.plans.map((plan, index) => (
                <motion.article
                  key={plan.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: index * 0.08,
                    duration: 0.5,
                    ease: EASE,
                  }}
                  className={`group relative flex flex-col overflow-hidden rounded-2xl border p-6 transition-all duration-500 hover:-translate-y-1 sm:p-7 ${
                    plan.popular
                      ? "border-[#5428B0] bg-[#171326] text-white shadow-xl shadow-[#5428B0]/15"
                      : "border-neutral-200 bg-white text-[#171717] hover:border-[#5428B0]/40 hover:shadow-xl hover:shadow-[#5428B0]/5"
                  }`}
                >
                  {/* Popular badge */}
                  {plan.popular && (
                    <div className="absolute right-5 top-5">
                      <span className="rounded-full bg-[#F8CC10] px-3 py-1.5 text-[9px] font-extrabold uppercase tracking-[1.5px] text-[#171717]">
                        Most Popular
                      </span>
                    </div>
                  )}

                  {/* Plan details */}
                  <div>
                    <h3 className="pr-20 text-lg font-bold tracking-tight sm:text-xl">
                      {plan.name}
                    </h3>

                    <p className={`mt-2 min-h-10 text-xs leading-6 ${
                      plan.popular ? "text-white/60" : "text-gray-500"
                    }`}>
                      {plan.description}
                    </p>
                  </div>

                  {/* Price */}
                  <div className="mb-7 mt-7 border-b border-current/10 pb-7">
                    <div className="flex flex-wrap items-baseline gap-2">
                      <span className="text-4xl font-bold tracking-tight sm:text-[42px]">
                        {plan.price}
                      </span>
                      <span className={`text-xs ${
                        plan.popular ? "text-white/60" : "text-gray-500"
                      }`}>
                        {plan.unit}
                      </span>
                    </div>

                    {plan.sub && (
                      <p className={`mt-2 text-xs font-semibold ${
                        plan.popular ? "text-[#F8CC10]" : "text-[#5428B0]"
                      }`}>
                        {plan.sub}
                      </p>
                    )}
                  </div>

                  {/* Features */}
                  <div className="flex-1 space-y-4">
                    <p className={`text-[9px] font-bold uppercase tracking-[2px] ${
                      plan.popular ? "text-white/40" : "text-gray-400"
                    }`}>
                      What's included
                    </p>

                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start gap-3">
                        <span className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
                          plan.popular
                            ? "bg-[#F8CC10]/15 text-[#F8CC10]"
                            : "bg-[#5428B0]/10 text-[#5428B0]"
                        }`}>
                          <FiCheck size={12} strokeWidth={3} />
                        </span>

                        <span className={`text-xs leading-6 ${
                          plan.popular ? "text-white/80" : "text-gray-600"
                        }`}>
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <button
                    onClick={() => handlePlanSelect(plan)}
                    className={`group/btn mt-9 flex min-h-12 w-full items-center justify-center gap-2 rounded-lg px-5 text-xs font-bold transition-all duration-300 ${
                      plan.popular
                        ? "bg-[#F8CC10] text-[#171717] hover:bg-white"
                        : "bg-[#171717] text-white hover:bg-[#5428B0]"
                    }`}
                  >
                    Get Started
                    <FiArrowUpRight className="transition-transform duration-300 group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5" />
                  </button>
                </motion.article>
              ))}
            </motion.div>
          </AnimatePresence>

          <p className="mt-7 text-center text-xs text-gray-400">
            Need a custom scope?{" "}
            <a href="#contact" className="font-bold text-[#5428B0] hover:underline">
              Talk to our team
            </a>
          </p>
        </div>
      </section>

      {/* ADD-ONS */}
      <section id="addons" className="bg-[#F8F7FC] px-5 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl">

          <div className="mb-10 max-w-2xl">
            <p className="mb-3 text-[10px] font-bold uppercase tracking-[3px] text-[#5428B0]">
              Flexible Extras
            </p>

            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Add-ons & <span className="text-[#5428B0]">Extra Services.</span>
            </h2>

            <p className="mt-4 text-sm leading-7 text-gray-500">
              Need something beyond your selected package? Add the services
              you need without changing your entire plan.
            </p>
          </div>

          <div className="overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm">
            <div className="hidden grid-cols-[1fr_1.5fr_0.7fr] gap-6 bg-[#171326] px-7 py-5 text-[10px] font-bold uppercase tracking-[2px] text-white sm:grid">
              <span>Service</span>
              <span>What's Included</span>
              <span className="text-right">Price</span>
            </div>

            {addons.map((addon, index) => (
              <div
                key={addon.name}
                className="grid gap-2 border-b border-neutral-100 px-5 py-5 last:border-0 sm:grid-cols-[1fr_1.5fr_0.7fr] sm:items-center sm:gap-6 sm:px-7"
              >
                <h3 className="text-sm font-bold text-[#171717]">
                  {addon.name}
                </h3>

                <p className="text-xs leading-6 text-gray-500">
                  {addon.scope}
                </p>

                <p className="text-sm font-bold text-[#5428B0] sm:text-right">
                  {addon.price}
                </p>
              </div>
            ))}
          </div>

          <p className="mt-4 text-[11px] leading-6 text-gray-400">
            Additional charges apply only when the requested work exceeds
            the scope or limits mentioned in the selected plan.
          </p>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="border-b border-neutral-100 bg-white px-5 py-12">
        <div className="mx-auto grid max-w-6xl gap-8 sm:grid-cols-3">
          {[
            {
              icon: FiShield,
              title: "Transparent Pricing",
              text: "Clear scope and pricing before work begins.",
            },
            {
              icon: FiZap,
              title: "Creative Execution",
              text: "Thoughtful content built around your brand.",
            },
            {
              icon: FiClock,
              title: "Reliable Delivery",
              text: "A structured workflow for every project.",
            },
          ].map((item) => (
            <div key={item.title} className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#5428B0]/10 text-[#5428B0]">
                <item.icon size={20} />
              </div>

              <div>
                <h3 className="text-sm font-bold">{item.title}</h3>
                <p className="mt-1 text-xs leading-6 text-gray-500">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT CTA */}
      <section className="relative overflow-hidden bg-[#171326] px-5 py-20 text-white sm:py-28">
        <div className="pointer-events-none absolute -right-32 -top-40 h-[400px] w-[400px] rounded-full bg-[#5428B0]/30 blur-[110px]" />
        <div className="pointer-events-none absolute -bottom-40 -left-32 h-[350px] w-[350px] rounded-full bg-[#F8CC10]/10 blur-[100px]" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1fr_0.8fr]">
          <div>
            <p className="mb-4 text-[10px] font-bold uppercase tracking-[3px] text-[#F8CC10]">
              Let's Work Together
            </p>

            <h2 className="max-w-2xl text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-5xl">
              Not sure which plan
              <span className="text-[#A88AFF]"> fits your brand?</span>
            </h2>

            <p className="mt-5 max-w-xl text-sm leading-7 text-white/60 sm:text-base">
              Tell us what you're creating, how often you publish and
              where you want to grow. We'll help you find the right plan.
            </p>

            <a
              href="#contact"
              className="group mt-8 inline-flex items-center gap-3 rounded-lg bg-[#F8CC10] px-7 py-4 text-sm font-bold text-[#171717] transition-all duration-300 hover:-translate-y-1 hover:bg-white"
            >
              Let's Talk
              <FiArrowRight className="transition-transform group-hover:translate-x-1" />
            </a>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-md sm:p-8">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#5428B0] text-white">
                <FiMessageCircle size={20} />
              </div>
              <div>
                <h3 className="text-base font-bold">Talk to Vidshot</h3>
                <p className="text-xs text-white/50">
                  Let's discuss your next project.
                </p>
              </div>
            </div>

            <p className="text-sm leading-7 text-white/60">
              Whether you need a single video edit or complete social media
              management, our team can help you plan the right approach.
            </p>

            <a
              href="#contact"
              className="mt-7 flex items-center justify-between border-t border-white/10 pt-5 text-sm font-semibold text-white transition-colors hover:text-[#F8CC10]"
            >
              Contact our team
              <FiArrowUpRight size={19} />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
