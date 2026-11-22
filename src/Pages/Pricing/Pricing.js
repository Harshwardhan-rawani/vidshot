
import React, { useEffect, useState } from "react";
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

// Replace this with your Vidshot WhatsApp Business number (country code + number).
// Example: "919876543210" — do not include +, spaces or dashes.
const WHATSAPP_NUMBER = "91XXXXXXXXXX";

export default function Pricing() {
  const [activeTab, setActiveTab] = useState(0);
  const activeGroup = pricingGroups[activeTab];
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [customer, setCustomer] = useState({
    name: "",
    email: "",
    phone: "",
    business: "",
    message: "",
  });

  const handleGetStarted = (group, plan) => {
    setSelectedPlan({ ...plan, category: group.title });
    setShowPaymentModal(true);
  };

  const closePaymentModal = () => setShowPaymentModal(false);

  // Lock background scrolling and support closing the popup with Escape.
  useEffect(() => {
    if (!showPaymentModal) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event) => {
      if (event.key === "Escape") closePaymentModal();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [showPaymentModal]);

  const handleCheckoutRequest = (event) => {
    event.preventDefault();
    if (!selectedPlan) return;

    const message = [
      "Hi Vidshot! I would like to get started with this plan.",
      "",
      `Service: ${selectedPlan.category}`,
      `Plan: ${selectedPlan.name}`,
      `Price: ${selectedPlan.price} ${selectedPlan.unit}`,
      selectedPlan.sub ? `Note: ${selectedPlan.sub}` : "",
      "",
      `Name: ${customer.name}`,
      `Email: ${customer.email}`,
      `Phone: ${customer.phone}`,
      customer.business ? `Business: ${customer.business}` : "",
      customer.message ? `Project details: ${customer.message}` : "",
      "",
      "Please share the next steps and a secure payment link.",
    ].filter(Boolean).join("\\n");

    if (WHATSAPP_NUMBER.includes("X")) {
      window.alert("Please add your Vidshot WhatsApp Business number in the WHATSAPP_NUMBER constant before using this button.");
      return;
    }

    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer"
    );
  };



  return (
    <main className="min-h-screen mt-24 overflow-hidden bg-white text-[#111111]">
  {/* Heading */}
  <motion.div
    variants={stagger}
    initial="hidden"
    animate="visible"
    className="text-center mb-10 md:mb-12 px-5"
  >

    <motion.p
      variants={fadeUp}
      className="text-[10px] font-bold uppercase tracking-[3px] text-[var(--primary)] mb-3"
    >
      Let's Connect
    </motion.p>

    <motion.h1
      variants={fadeUp}
      className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-[-0.06em] text-[#111111]"
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
<div className="mb-10 flex justify-center">
  <div
    className="
      flex w-full max-w-full items-center
      justify-center overflow-x-auto
      border-b border-neutral-200
      scrollbar-hide
    "
    role="tablist"
    aria-label="Pricing categories"
  >
    {pricingGroups.map((group, index) => (
      <button
        key={group.label}
        type="button"
        role="tab"
        aria-selected={activeTab === index}
        onClick={() => setActiveTab(index)}
        className={`
          relative shrink-0 whitespace-nowrap
          px-5 py-3.5 sm:px-7 sm:py-4
          text-xs font-semibold sm:text-sm
          transition-all duration-300 ease-in-out

          ${
            activeTab === index
              ? "rounded-t-lg bg-[#5428B0] text-white"
              : "text-neutral-500 hover:bg-[#5428B0]/5 hover:text-[#5428B0]"
          }

          focus-visible:outline-none
          focus-visible:ring-2
          focus-visible:ring-[#5428B0]
          focus-visible:ring-inset
        `}
      >
        {group.label}

        {/* Active Indicator */}
        {activeTab === index && (
          <span className="
            absolute bottom-0 left-0
            h-[3px] w-full
            rounded-t-full bg-[#F8CC10]
          " />
        )}
      </button>
    ))}
  </div>
</div>

          {/* ACTIVE CATEGORY HEADING */}
          <div className="mb-9 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="mb-2 text-[10px] font-bold uppercase tracking-[2.5px] text-[var(--primary)]">
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
                      ? "border-[var(--primary)] bg-[var(--primary)] text-white shadow-xl shadow-[var(--primary)]/15"
                      : "border-neutral-200 bg-white text-[#111111] hover:border-[var(--primary)]/40 hover:shadow-xl hover:shadow-[var(--primary)]/5"
                  }`}
                >
                  {/* Popular badge */}
                  {plan.popular && (
                    <div className="absolute right-5 top-5">
                      <span className="rounded-full bg-[var(--secondary)] px-3 py-1.5 text-[9px] font-extrabold uppercase tracking-[1.5px] text-[#111111]">
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
                        plan.popular ? "text-[var(--secondary)]" : "text-[var(--primary)]"
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
                            ? "bg-[var(--secondary)]/15 text-[var(--secondary)]"
                            : "bg-[var(--primary)]/10 text-[var(--primary)]"
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
                   
                    onClick={() => handleGetStarted(activeGroup, plan)}
                    className={`group/btn mt-9 flex min-h-12 w-full items-center justify-center gap-2 rounded-lg px-5 text-xs font-bold transition-all duration-300 ${
                      plan.popular
                        ? "bg-[var(--secondary)] text-[#111111] hover:bg-white"
                        : "bg-[var(--primary)] text-white hover:bg-black"
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
            <a href="#contact" className="font-bold text-[var(--primary)] hover:underline">
              Talk to our team
            </a>
          </p>
        </div>
      </section>

      {/* ADD-ONS */}
      <section id="addons" className="bg-[#FFFFFF] px-5 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl">

          <div className="mb-10 max-w-2xl">
            <p className="mb-3 text-[10px] font-bold uppercase tracking-[3px] text-[var(--primary)]">
              Flexible Extras
            </p>

            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Add-ons & <span className="text-[var(--primary)]">Extra Services.</span>
            </h2>

            <p className="mt-4 text-sm leading-7 text-gray-500">
              Need something beyond your selected package? Add the services
              you need without changing your entire plan.
            </p>
          </div>

          <div className="overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm">
            <div className="hidden grid-cols-[1fr_1.5fr_0.7fr] gap-6 bg-[#111111] px-7 py-5 text-[10px] font-bold uppercase tracking-[2px] text-white sm:grid">
              <span>Service</span>
              <span>What's Included</span>
              <span className="text-right">Price</span>
            </div>

            {addons.map((addon, index) => (
              <div
                key={addon.name}
                className="grid gap-2 border-b border-neutral-100 px-5 py-5 last:border-0 sm:grid-cols-[1fr_1.5fr_0.7fr] sm:items-center sm:gap-6 sm:px-7"
              >
                <h3 className="text-sm font-bold text-[#111111]">
                  {addon.name}
                </h3>

                <p className="text-xs leading-6 text-gray-500">
                  {addon.scope}
                </p>

                <p className="text-sm font-bold text-[var(--primary)] sm:text-right">
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
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[var(--primary)]/10 text-[var(--primary)]">
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
<section className="relative overflow-hidden bg-white px-5 py-20 text-[#171717] sm:py-28">

  {/* Background Accents */}
  <div className="pointer-events-none absolute -right-32 -top-40 h-[400px] w-[400px] rounded-full bg-[#5428B0]/10 blur-[110px]" />
  <div className="pointer-events-none absolute -bottom-40 -left-32 h-[350px] w-[350px] rounded-full bg-[#F8CC10]/15 blur-[100px]" />

  <div className="relative mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1fr_0.8fr]">

    {/* Left Content */}
    <div>
      <p className="mb-4 text-[10px] font-bold uppercase tracking-[3px] text-[#5428B0]">
        Let's Work Together
      </p>

      <h2 className="max-w-2xl text-3xl font-bold leading-tight tracking-tight text-[#171717] sm:text-4xl md:text-5xl">
        Not sure which plan
        <span className="text-[#5428B0]"> fits your brand?</span>
      </h2>

      <p className="mt-5 max-w-xl text-sm leading-7 text-gray-600 sm:text-base">
        Tell us what you're creating, how often you publish and
        where you want to grow. We'll help you find the right plan.
      </p>

      <a
        href="#contact"
        className="group mt-8 inline-flex items-center gap-3 rounded-lg bg-[#F8CC10] px-7 py-4 text-sm font-bold text-[#171717] transition-all duration-300 hover:-translate-y-1 hover:bg-[#5428B0] hover:text-white"
      >
        Let's Talk
        <FiArrowRight className="transition-transform group-hover:translate-x-1" />
      </a>
    </div>

    {/* Right Card */}
    <div className="rounded-2xl border border-[#5428B0]/10 bg-white p-6 shadow-[0_15px_50px_rgba(84,40,176,0.08)] sm:p-8">

      <div className="mb-6 flex items-center gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#5428B0] text-white">
          <FiMessageCircle size={20} />
        </div>

        <div>
          <h3 className="text-base font-bold text-[#171717]">
            Talk to Vidshot
          </h3>
          <p className="text-xs text-gray-500">
            Let's discuss your next project.
          </p>
        </div>
      </div>

      <p className="text-sm leading-7 text-gray-600">
        Whether you need a single video edit or complete social media
        management, our team can help you plan the right approach.
      </p>

      <a
        href="#contact"
        className="mt-7 flex items-center justify-between border-t border-gray-100 pt-5 text-sm font-semibold text-[#5428B0] transition-colors hover:text-[#E0AD00]"
      >
        Contact our team
        <FiArrowUpRight size={19} />
      </a>

    </div>
  </div>
</section>

      {/* PLAN / PAYMENT POPUP */}
      <AnimatePresence>
        {showPaymentModal && selectedPlan && (
          <motion.div
            className="fixed inset-0 z-[1000] flex items-center justify-center overflow-y-auto bg-black/60 p-3 backdrop-blur-sm sm:p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onMouseDown={(event) => {
              if (event.target === event.currentTarget) closePaymentModal();
            }}
          >
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-labelledby="checkout-title"
              initial={{ opacity: 0, y: 24, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 18, scale: 0.98 }}
              transition={{ duration: 0.25, ease: EASE }}
              className="relative my-auto grid w-full max-w-5xl overflow-hidden rounded-2xl bg-white shadow-2xl md:grid-cols-[1.05fr_0.95fr]"
            >
              <button
                type="button"
                onClick={closePaymentModal}
                aria-label="Close checkout"
                className="absolute right-4 top-4 z-20 flex h-9 w-9 items-center justify-center rounded-full border border-black/10 bg-white text-2xl leading-none text-gray-600 transition hover:bg-gray-100"
              >
                ×
              </button>

              {/* LEFT: CUSTOMER DETAILS / PAYMENT REQUEST */}
              <div className="p-6 pt-14 sm:p-9 sm:pt-10">
                <p className="mb-2 text-[10px] font-bold uppercase tracking-[2.5px] text-[var(--primary)]">
                  Get Started with Vidshot
                </p>
                <h2 id="checkout-title" className="text-2xl font-bold tracking-tight text-[#111111] sm:text-3xl">
                  Let’s make it happen.
                </h2>
                <p className="mt-2 max-w-md text-sm leading-6 text-gray-500">
                  Share your details. Our team will confirm the scope and send you a secure payment link.
                </p>

                <form onSubmit={handleCheckoutRequest} className="mt-7 space-y-4">
                  <div>
                    <label htmlFor="checkout-name" className="mb-1.5 block text-xs font-semibold text-gray-700">
                      Full name *
                    </label>
                    <input
                      id="checkout-name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      required
                      value={customer.name}
                      onChange={(event) => setCustomer({ ...customer, name: event.target.value })}
                      placeholder="Your name"
                      className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm outline-none transition placeholder:text-gray-400 focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--primary)]/10"
                    />
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label htmlFor="checkout-email" className="mb-1.5 block text-xs font-semibold text-gray-700">
                        Email address *
                      </label>
                      <input
                        id="checkout-email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        value={customer.email}
                        onChange={(event) => setCustomer({ ...customer, email: event.target.value })}
                        placeholder="you@example.com"
                        className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm outline-none transition placeholder:text-gray-400 focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--primary)]/10"
                      />
                    </div>
                    <div>
                      <label htmlFor="checkout-phone" className="mb-1.5 block text-xs font-semibold text-gray-700">
                        Phone number *
                      </label>
                      <input
                        id="checkout-phone"
                        name="phone"
                        type="tel"
                        autoComplete="tel"
                        required
                        value={customer.phone}
                        onChange={(event) => setCustomer({ ...customer, phone: event.target.value })}
                        placeholder="+91 98765 43210"
                        className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm outline-none transition placeholder:text-gray-400 focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--primary)]/10"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="checkout-business" className="mb-1.5 block text-xs font-semibold text-gray-700">
                      Company / brand <span className="font-normal text-gray-400">(optional)</span>
                    </label>
                    <input
                      id="checkout-business"
                      name="business"
                      type="text"
                      value={customer.business}
                      onChange={(event) => setCustomer({ ...customer, business: event.target.value })}
                      placeholder="Your business name"
                      className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm outline-none transition placeholder:text-gray-400 focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--primary)]/10"
                    />
                  </div>

                  <div>
                    <label htmlFor="checkout-message" className="mb-1.5 block text-xs font-semibold text-gray-700">
                      Tell us about your project <span className="font-normal text-gray-400">(optional)</span>
                    </label>
                    <textarea
                      id="checkout-message"
                      name="message"
                      rows={2}
                      value={customer.message}
                      onChange={(event) => setCustomer({ ...customer, message: event.target.value })}
                      placeholder="Any goals, requirements or questions?"
                      className="w-full resize-none rounded-lg border border-gray-200 px-4 py-3 text-sm outline-none transition placeholder:text-gray-400 focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--primary)]/10"
                    />
                  </div>

                  <button
                    type="submit"
                    className="flex min-h-12 w-full items-center justify-center gap-2 rounded-lg bg-[var(--primary)] px-5 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-black"
                  >
                    Request Payment Link
                    <FiArrowUpRight size={17} />
                  </button>

                  <p className="text-center text-[10px] leading-5 text-gray-400">
                    You won’t be charged now. We’ll confirm the details before sharing payment instructions.
                  </p>
                </form>
              </div>

              {/* RIGHT: SELECTED PLAN SUMMARY */}
              <div className="relative overflow-hidden bg-[#4B0DAA] p-6 text-white sm:p-9">
                <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
                <div className="relative">
                  <p className="text-[10px] font-bold uppercase tracking-[2.5px] text-white/55">
                    Your selected plan
                  </p>

                  <p className="mt-5 text-sm font-medium text-white/70">
                    {selectedPlan.category}
                  </p>
                  <h3 className="mt-1 pr-8 text-2xl font-bold tracking-tight sm:text-3xl">
                    {selectedPlan.name}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-white/65">
                    {selectedPlan.description}
                  </p>

                  <div className="mt-7 border-y border-white/20 py-6">
                    <p className="text-[10px] font-bold uppercase tracking-[2px] text-white/50">
                      Plan price
                    </p>
                    <div className="mt-2 flex flex-wrap items-baseline gap-2">
                      <span className="text-4xl font-bold tracking-tight sm:text-5xl">
                        {selectedPlan.price}
                      </span>
                      <span className="text-sm text-white/65">
                        {selectedPlan.unit}
                      </span>
                    </div>
                    {selectedPlan.sub && (
                      <p className="mt-2 text-xs font-semibold text-[var(--secondary)]">
                        {selectedPlan.sub}
                      </p>
                    )}
                  </div>

                  <div className="mt-7">
                    <p className="mb-5 text-[10px] font-bold uppercase tracking-[2px] text-white/50">
                      What’s included
                    </p>
                    <ul className="space-y-4">
                      {selectedPlan.features.map((feature, index) => (
                        <li key={`${feature}-${index}`} className="flex items-start gap-3 text-sm leading-6 text-white/85">
                          <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[var(--secondary)]/15 text-[var(--secondary)]">
                            <FiCheck size={12} strokeWidth={3} />
                          </span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-9 rounded-xl border border-white/15 bg-white/10 p-4">
                    <div className="flex items-center gap-2 text-sm font-semibold">
                      <FiShield className="text-[var(--secondary)]" />
                      Secure payment process
                    </div>
                    <p className="mt-2 text-xs leading-5 text-white/60">
                      Your plan and final scope will be confirmed by our team. We’ll then share the appropriate payment link.
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={closePaymentModal}
                    className="mt-5 text-xs font-semibold text-white/60 underline decoration-white/30 underline-offset-4 transition hover:text-white"
                  >
                    Go back to pricing
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
