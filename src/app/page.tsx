"use client";

import { useState } from "react";
import ParentForm from "@/components/ParentForm";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

const YOUTUBE_VIDEO_ID = "0iRbD5rM5qc";

function DotGrid({ className }: { className?: string }) {
  return (
    <div className={`grid grid-cols-5 gap-1.5 ${className || ""}`}>
      {Array.from({ length: 15 }).map((_, i) => (
        <span key={i} className="w-1.5 h-1.5 rounded-full bg-white/30" />
      ))}
    </div>
  );
}

const fadeInUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const btnPress = {
  whileHover: { scale: 1.04, y: -3 },
  whileTap: { scale: 0.96, y: 0 },
  transition: { type: "spring" as const, stiffness: 400, damping: 15 },
};

const primaryBtn =
  "bg-[#F9BF3F] hover:bg-[#e8ac28] text-white font-bold rounded-full shadow-[0_8px_20px_-6px_rgba(249,191,63,0.6)] hover:shadow-[0_10px_24px_-6px_rgba(249,191,63,0.7)] transition-all duration-200";

const secondaryBtnLight =
  "bg-white border-2 border-[#606F72]/30 text-[#606F72] hover:border-[#192A4B] hover:text-[#192A4B] font-bold rounded-full transition-colors duration-200";

const secondaryBtnDark =
  "bg-transparent border-2 border-white/40 text-white hover:bg-white/10 hover:border-white/60 font-bold rounded-full transition-colors duration-200";

export default function Home() {
  const router = useRouter();
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  return (
    <div className="min-h-screen bg-white text-[#192A4B] selection:bg-[#192A4B] selection:text-white overflow-hidden">

      {/* Header Container */}
      <motion.div
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="w-full bg-white border-b border-gray-200"
      >
        <header className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center">
            <img
              src="/images/logo-nav.png"
              alt="WiserKids"
              className="h-8 sm:h-10 w-auto object-contain"
            />
          </div>
          <motion.button
            {...btnPress}
            onClick={() => document.getElementById("register")?.scrollIntoView({ behavior: "smooth" })}
            className={`${primaryBtn} text-xs sm:text-sm px-4 sm:px-6 py-2 sm:py-2.5`}
          >
            Start Your Wiser Journey
          </motion.button>
        </header>
      </motion.div>

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-16 sm:pt-20 pb-24 lg:pb-24">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="relative z-10 space-y-6 sm:space-y-8 pr-0 lg:pr-12 text-center lg:text-left"
          >
            <motion.h1 variants={fadeInUp} className="text-4xl sm:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight text-[#192A4B]">
              Being Financially Smart, Creative &amp; Entrepreneurial
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-base sm:text-lg text-[#606F72] leading-relaxed max-w-lg mx-auto lg:mx-0">
              WiserKids gives children a warm, engaging, and supportive learning experience designed to strengthen not only what they know, but how they think, feel, and grow.
            </motion.p>
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 pt-4 justify-center lg:justify-start">
              <motion.button
                {...btnPress}
                onClick={() => document.getElementById("register")?.scrollIntoView({ behavior: "smooth" })}
                className={`${primaryBtn} px-8 py-3 w-full sm:w-auto`}
              >
                Join Wiser Kids
              </motion.button>
              <motion.button {...btnPress} className={`${secondaryBtnLight} px-8 py-3 text-sm w-full sm:w-auto`}>
                Let&apos;s Explore
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Desktop: illustration column, anchored right next to the text via the grid gap, tall enough to extend well down the page */}
          <div className="hidden lg:block relative h-[46rem]">
            <motion.img
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              src="/images/Hero-section-Png.png"
              alt="Hero Illustration"
              className="absolute inset-y-0 left-0 h-full w-auto max-w-none object-contain"
            />
          </div>
        </div>

        {/* Mobile: faint background illustration (unchanged) */}
        <img
          src="/images/hero-section.png"
          alt="Hero Illustration"
          width={600}
          height={600}
          className="absolute inset-0 z-0 w-full h-full object-contain opacity-10 pointer-events-none lg:hidden"
        />
      </section>

      {/* Why WiserKids Section */}
      <section id="why-wiserkids" className="bg-white py-16 sm:py-24 overflow-hidden">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-6xl mx-auto px-6"
        >
          <motion.div variants={fadeInUp} className="text-center max-w-3xl mx-auto space-y-4 sm:space-y-6 mb-12 sm:mb-16">
            <h2 className="text-3xl font-extrabold text-[#192A4B]">Why WiserKids?</h2>
            <p className="text-[#606F72] leading-relaxed font-medium text-sm sm:text-base">
              Children grow best when they feel supported, interested, and understood. Wiser Kids is designed to help learning feel more personal, more connected, and more aligned with the way children actually develop.
            </p>
          </motion.div>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-5xl mx-auto px-6"
        >
          <motion.div
            variants={fadeInUp}
            className="rounded-3xl border border-gray-100 shadow-sm bg-white p-8 sm:p-12 grid lg:grid-cols-2 gap-10 items-center"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#192A4B] leading-tight text-center lg:text-left">
              Subjects Covered
              <br className="hidden sm:block" /> In WiserKids
            </h2>

            <div className="flex flex-wrap gap-3 sm:gap-4 justify-center lg:justify-start">
              {[
                { label: "Finance & Business", bg: "#F9BF3F" },
                { label: "Learning to Learn", bg: "#606F72" },
                { label: "Values & Communication", bg: "#192A4B" },
                { label: "Economics", bg: "#F9BF3F" },
                { label: "Technology & AI", bg: "#606F72" },
                { label: "History & Stories", bg: "#192A4B" },
              ].map((subject) => (
                <motion.span
                  key={subject.label}
                  whileHover={{ rotate: [0, -4, 4, -4, 0], scale: 1.06 }}
                  transition={{ duration: 0.4 }}
                  style={{ backgroundColor: subject.bg }}
                  className="inline-flex items-center px-5 sm:px-6 py-3 rounded-full text-sm sm:text-base font-bold text-white shadow-sm cursor-default whitespace-nowrap"
                >
                  {subject.label}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Get Financially Literate Section */}
      <section className="bg-[#192A4B] py-20 sm:py-28 overflow-hidden">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center"
        >
          {/* Photo Collage */}
          <motion.div variants={fadeInUp} className="relative">
            <DotGrid className="absolute -top-6 -left-6 opacity-40 hidden sm:grid" />
            <div className="grid grid-cols-2 grid-rows-2 gap-3 sm:gap-4 aspect-square max-w-md mx-auto lg:mx-0">
              <motion.div whileHover={{ scale: 1.03 }} className="relative rounded-2xl overflow-hidden shadow-xl">
                <img src="/3.JPG" alt="WiserKids workshop group" className="absolute inset-0 w-full h-full object-cover" />
              </motion.div>
              <motion.div whileHover={{ scale: 1.03 }} className="relative rounded-2xl overflow-hidden shadow-xl">
                <img src="/2.JPG" alt="Financial Literacy for Smart Kids handbook" className="absolute inset-0 w-full h-full object-cover" />
              </motion.div>
              <motion.div whileHover={{ scale: 1.03 }} className="relative rounded-2xl overflow-hidden shadow-xl">
                <img src="/4.JPG" alt="Kids engaged in a WiserKids session" className="absolute inset-0 w-full h-full object-cover" />
              </motion.div>
              <motion.div whileHover={{ scale: 1.03 }} className="relative rounded-2xl overflow-hidden shadow-xl">
                <img src="/1.JPG" alt="WiserKids starter kit" className="absolute inset-0 w-full h-full object-cover" />
              </motion.div>
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div variants={fadeInUp} className="text-center lg:text-left space-y-5">
            <p className="text-[#F9BF3F] text-xs font-bold uppercase tracking-widest">From Our Sessions</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
              Get Financially Literate
            </h2>
            <p className="text-white/70 leading-relaxed text-sm sm:text-base max-w-lg mx-auto lg:mx-0">
              Every kit, every book, every session is designed to turn pocket money into powerful lessons. From hands-on starter kits to real workshops with real kids, WiserKids makes financial literacy something children actually enjoy — and remember.
            </p>
            <div className="pt-2">
              <motion.button
                {...btnPress}
                onClick={() => document.getElementById("why-wiserkids")?.scrollIntoView({ behavior: "smooth" })}
                className={`${primaryBtn} px-8 py-3 w-full sm:w-auto`}
              >
                Learn Now
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Watch Their Story Section */}
      <section className="bg-[#192A4B] py-20 sm:py-28 overflow-hidden border-t border-white/10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center"
        >
          {/* Text Content */}
          <motion.div variants={fadeInUp} className="space-y-5 text-center lg:text-left">
            <p className="text-[#F9BF3F] text-xs font-bold uppercase tracking-widest">Real Stories, Real Growth</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
              Children feel supported when parents do too
            </h2>
            <p className="text-white/70 leading-relaxed text-sm sm:text-base max-w-lg mx-auto lg:mx-0">
              Wiser Kids is built to give parents a stronger sense of clarity, connection, and confidence in their child&apos;s learning journey.
            </p>
            <div className="pt-2">
              <motion.button
                {...btnPress}
                onClick={() => setIsVideoPlaying(true)}
                className={`inline-flex items-center gap-2 ${primaryBtn} text-sm uppercase tracking-wide px-8 py-3.5`}
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                </svg>
                Watch The Story
              </motion.button>
            </div>
          </motion.div>

          {/* Video Showcase */}
          <motion.div variants={fadeInUp} className="relative flex justify-center lg:justify-end">
            <DotGrid className="absolute -top-8 right-4 sm:right-10 opacity-40 hidden sm:grid" />

            <motion.div
              whileHover={{ scale: 1.01 }}
              className="relative z-10 w-full max-w-md aspect-video rounded-2xl overflow-hidden shadow-2xl bg-black"
            >
              {isVideoPlaying ? (
                <iframe
                  src={`https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}?autoplay=1`}
                  title="WiserKids Story"
                  className="absolute inset-0 w-full h-full"
                  allow="autoplay; encrypted-media; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <button
                  type="button"
                  onClick={() => setIsVideoPlaying(true)}
                  className="absolute inset-0 w-full h-full group"
                  aria-label="Play video"
                >
                  <img
                    src={`https://img.youtube.com/vi/${YOUTUBE_VIDEO_ID}/hqdefault.jpg`}
                    alt="WiserKids Story thumbnail"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors" />
                  <span className="absolute inset-0 flex items-center justify-center">
                    <motion.span
                      whileHover={{ scale: 1.08 }}
                      className="w-16 h-16 rounded-full bg-[#F9BF3F] flex items-center justify-center pl-1 shadow-lg"
                    >
                      <svg className="w-7 h-7 text-[#192A4B]" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                      </svg>
                    </motion.span>
                  </span>
                </button>
              )}
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* Financial Literacy Courses Section */}
      <section className="bg-white py-16 sm:py-24 overflow-hidden">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center"
        >
          {/* Logo + Tagline */}
          <motion.div variants={fadeInUp} className="text-center lg:text-left space-y-6">
            <img
              src="/images/logo-nav.png"
              alt="WiserKids"
              className="h-16 sm:h-20 w-auto mx-auto lg:mx-0"
            />
            <h2 className="text-3xl sm:text-4xl font-extrabold leading-tight text-[#192A4B]">
              Financial Literacy<br className="hidden sm:block" /> Courses
            </h2>
            <p className="text-[#606F72] leading-relaxed text-sm sm:text-base max-w-md mx-auto lg:mx-0">
              Earn it. Save it. Grow it. Give your child the confidence to think smarter about money — one fun, hands-on lesson at a time.
            </p>
          </motion.div>

          {/* Offer Cards */}
          <div className="grid sm:grid-cols-2 gap-6">
            {/* Fin Day Card */}
            <motion.div
              variants={fadeInUp}
              whileHover={{ y: -6 }}
              className="bg-[#606F72] rounded-2xl p-6 sm:p-8 shadow-sm flex flex-col justify-between min-h-[260px] transition-transform"
            >
              <div>
                <h3 className="text-white font-extrabold text-xl mb-3">Fin Day</h3>
                <p className="text-white/80 text-sm leading-relaxed">
                  A single, action-packed day introducing kids to money, budgeting, and big ideas — the perfect first taste of financial literacy.
                </p>
              </div>
              <motion.button
                {...btnPress}
                onClick={() => document.getElementById("register")?.scrollIntoView({ behavior: "smooth" })}
                className={`mt-6 ${primaryBtn} text-sm py-3 w-full`}
              >
                Register
              </motion.button>
            </motion.div>

            {/* WiserKids Program Card */}
            <motion.div
              variants={fadeInUp}
              whileHover={{ y: -6 }}
              className="bg-[#192A4B] rounded-2xl p-6 sm:p-8 shadow-sm flex flex-col justify-between min-h-[260px] transition-transform"
            >
              <div>
                <h3 className="text-white font-extrabold text-xl mb-3">WiserKids Program</h3>
                <p className="text-white/70 text-sm leading-relaxed">
                  Our full course takes children deeper into earning, saving, investing, and entrepreneurship — with ongoing mentorship along the way.
                </p>
              </div>
              <motion.button
                {...btnPress}
                onClick={() => document.getElementById("register")?.scrollIntoView({ behavior: "smooth" })}
                className={`mt-6 ${primaryBtn} text-sm py-3 w-full`}
              >
                Join Now
              </motion.button>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* WiserKids Handbook Promo Section */}
      <section className="bg-[#192A4B] py-20 sm:py-28 overflow-hidden border-t border-white/10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center"
        >
          {/* Book / Handbook Mockup */}
          <motion.div variants={fadeInUp} className="flex justify-center order-1">
            <motion.img
              whileHover={{ scale: 1.02 }}
              src="/images/Financial Literracy for smart kids mock up PNG 3.png"
              alt="Financial Literacy for Smart Kids — WiserKids Handbook"
              className="w-64 sm:w-80 h-auto object-contain drop-shadow-2xl"
            />
          </motion.div>

          {/* Text Content */}
          <div className="order-2 text-center lg:text-left space-y-6">
            <motion.p variants={fadeInUp} className="text-[#F9BF3F] text-xs font-bold uppercase tracking-widest">
              The WiserKids Handbook
            </motion.p>

            <motion.h2 variants={fadeInUp} className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
              Being Financially Smart, Creative &amp; Entrepreneurial
            </motion.h2>

            <motion.p variants={fadeInUp} className="text-white/70 leading-relaxed text-sm sm:text-base max-w-lg mx-auto lg:mx-0">
              The WiserKids Handbook turns pocket money, playtime, and everyday choices into real lessons on earning, saving, creating, and leading — the hands-on companion to everything your child learns inside our program.
            </motion.p>

            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 pt-2 justify-center lg:justify-start">
              <motion.button
                {...btnPress}
                onClick={() => router.push("/order")}
                className={`${primaryBtn} px-8 py-3 w-full sm:w-auto`}
              >
                Order Now
              </motion.button>
              <motion.button
                {...btnPress}
                onClick={() => document.getElementById("why-wiserkids")?.scrollIntoView({ behavior: "smooth" })}
                className={`${secondaryBtnDark} px-8 py-3 w-full sm:w-auto`}
              >
                Learn More
              </motion.button>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Registration Form Section */}
      <section id="register" className="bg-[#192A4B] py-16 sm:py-24 border-t border-white/10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-4xl mx-auto px-6"
        >
          <motion.div variants={fadeInUp} className="text-center mb-8 sm:mb-12 space-y-3">
            <p className="text-[#F9BF3F] text-xs font-bold uppercase tracking-widest">Save Your Child&apos;s Spot</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Registration Form</h2>
            <p className="text-white/70 text-sm sm:text-base max-w-xl mx-auto">
              Fill in a few details below and our team will reach out to confirm the next steps.
            </p>
          </motion.div>
          <motion.div variants={fadeInUp}>
            <ParentForm />
          </motion.div>
        </motion.div>
      </section>

      {/* FAQ Section */}
      <section className="bg-white py-16 sm:py-24">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-3xl mx-auto px-6"
        >
          <motion.h2 variants={fadeInUp} className="text-3xl sm:text-4xl font-extrabold text-center mb-8 sm:mb-12 text-[#192A4B]">FAQ</motion.h2>
          <div className="space-y-4">
            {[
              "Is Wiser Kids right for my child?",
              "How does the learning experience work?",
              "How involved do parents need to be?",
              "How do you support different learners?",
              "What happens after I book a call?"
            ].map((question, i) => (
              <motion.div
                variants={fadeInUp}
                key={i}
                className="bg-white rounded-full px-6 sm:px-8 py-4 flex justify-between items-center cursor-pointer shadow-sm border border-gray-100 hover:shadow-md transition-all active:scale-[0.98]"
              >
                <span className="font-medium text-[#192A4B] text-xs sm:text-sm">{question}</span>
                <span className="text-xl sm:text-2xl font-light text-[#606F72]">+</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Let's Explore Section */}
      <section className="bg-[#192A4B] py-16 sm:py-24">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-4xl mx-auto px-6 text-center text-white space-y-6"
        >
          <motion.h2 variants={fadeInUp} className="text-2xl sm:text-2xl font-extrabold leading-tight">Let&apos;s explore whether Wiser Kids is the right fit for your family</motion.h2>
          <motion.p variants={fadeInUp} className="text-white/85 text-sm sm:text-base max-w-lg mx-auto leading-relaxed">
            If you are looking for something warmer, more thoughtful, and more personal for your child, we would love to hear from you.
          </motion.p>
          <motion.button
            variants={fadeInUp}
            whileHover={{ scale: 1.04, y: -3 }}
            whileTap={{ scale: 0.96, y: 0 }}
            transition={{ type: "spring", stiffness: 400, damping: 15 }}
            onClick={() => document.getElementById("register")?.scrollIntoView({ behavior: "smooth" })}
            className={`${primaryBtn} px-8 py-3 inline-block mt-4 w-full sm:w-auto`}
          >
            Book a call
          </motion.button>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="bg-white pt-16 pb-8 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">

            {/* Logo + Tagline + Social */}
            <div className="space-y-4 col-span-2">
              <div className="flex items-center">
                <img
                  src="/images/logo-footer.png"
                  alt="WiserKids"
                  className="h-30 w-auto object-contain"
                />
              </div>
              <p className="text-xs font-bold text-[#192A4B] max-w-xs leading-relaxed">
                Being Financially Smart, Creative &amp;<br />Entrepreneurial
              </p>
              <p className="text-xs text-[#606F72] max-w-xs leading-relaxed">
                Empowering the next generation of thinkers, earners, and leaders — one child at a time.
              </p>
              {/* Social Icons */}
              <div className="flex items-center gap-3 pt-2">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"
                  className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-[#192A4B] transition-colors group">
                  <svg className="w-4 h-4 text-[#606F72] group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                  </svg>
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
                  className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-[#192A4B] transition-colors group">
                  <svg className="w-4 h-4 text-[#606F72] group-hover:text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <circle cx="12" cy="12" r="4" />
                    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                  </svg>
                </a>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer"
                  className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-[#192A4B] transition-colors group">
                  <svg className="w-4 h-4 text-[#606F72] group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 001.46 6.42 29 29 0 001 12a29 29 0 00.46 5.58 2.78 2.78 0 001.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 001.95-1.96A29 29 0 0023 12a29 29 0 00-.46-5.58z" />
                    <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="white" />
                  </svg>
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
                  className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-[#192A4B] transition-colors group">
                  <svg className="w-4 h-4 text-[#606F72] group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-extrabold text-[#192A4B] mb-4 sm:mb-6 text-sm">Quick Links</h4>
              <ul className="space-y-3 text-xs font-bold text-[#606F72]">
                <li><a href="#" className="hover:text-[#192A4B] transition-colors">Home</a></li>
                <li><a href="#" className="hover:text-[#192A4B] transition-colors">About</a></li>
                <li><a href="#" className="hover:text-[#192A4B] transition-colors">How it Works</a></li>
                <li><a href="#" className="hover:text-[#192A4B] transition-colors">Program</a></li>
                <li><a href="#" className="hover:text-[#192A4B] transition-colors">Contact</a></li>
              </ul>
            </div>

            {/* Legal + Contact */}
            <div className="space-y-8">
              <div>
                <h4 className="font-extrabold text-[#192A4B] mb-4 sm:mb-6 text-sm">Legal</h4>
                <ul className="space-y-3 text-xs font-bold text-[#606F72]">
                  <li><a href="#" className="hover:text-[#192A4B] transition-colors">Privacy Policy</a></li>
                  <li><a href="#" className="hover:text-[#192A4B] transition-colors">Terms of Service</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-extrabold text-[#192A4B] mb-4 text-sm">Contact</h4>
                <ul className="space-y-3 text-xs font-bold text-[#606F72]">
                  <li>
                    <a href="mailto:info@wiserkids.club" className="hover:text-[#192A4B] transition-colors">
                      info@wiserkids.club
                    </a>
                  </li>
                  <li className="text-[#606F72] font-medium">Dhaka, Bangladesh</li>
                </ul>
              </div>
            </div>

          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-2">
            <p className="text-[10px] font-bold text-[#606F72]">© 2026 WiserKids. All rights reserved.</p>
            <p className="text-[10px] text-[#606F72]/70">Built for curious kids and confident parents.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
