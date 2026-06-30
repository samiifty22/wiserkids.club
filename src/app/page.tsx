"use client";

import ParentForm from "@/components/ParentForm";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F4F1EA] text-[#111111] selection:bg-[#FFC247] selection:text-white overflow-hidden">

      {/* Header Container */}
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="pt-6 px-4 sm:px-6 max-w-7xl mx-auto"
      >
        <header className="bg-white rounded-full px-4 sm:px-8 py-3 flex items-center justify-between shadow-sm border border-gray-200">
          <div className="flex items-center">
            <img
              src="/images/logo-nav.png"
              alt="WiserKids"
              className="h-8 sm:h-10 w-auto object-contain"
            />
          </div>
          <button onClick={() => document.getElementById("register")?.scrollIntoView({ behavior: "smooth" })}
            className="bg-[#FFC247] hover:bg-[#eeb136] text-white text-xs sm:text-sm font-bold px-4 sm:px-6 py-2 sm:py-2.5 rounded-full transition-colors">
            Start Your Journey
          </button>
        </header>
      </motion.div>

      {/* Hero Section */}
      <section className="relative max-w-7xl mx-auto px-6 pt-16 sm:pt-20 pb-24 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="relative z-10 space-y-6 sm:space-y-8 pr-0 lg:pr-12 text-center lg:text-left"
        >
          <motion.h1 variants={fadeInUp} className="text-4xl sm:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight">
            Being Financially Smart, Creative & Entrepreneurial
          </motion.h1>
          <motion.p variants={fadeInUp} className="text-base sm:text-lg text-gray-800 leading-relaxed max-w-lg mx-auto lg:mx-0">
            Wiser Kids gives children a warm, engaging, and supportive learning experience designed to strengthen not only what they know, but how they think, feel, and grow.
          </motion.p>
          <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 pt-4 justify-center lg:justify-start">
            <button
              onClick={() => document.getElementById("register")?.scrollIntoView({ behavior: "smooth" })}
              className="bg-[#FFC247] hover:bg-[#eeb136] text-white px-8 py-3 rounded-md font-bold transition-all w-full sm:w-auto">
              Join Wiser Kids
            </button>
            <button className="bg-transparent border border-gray-400 text-gray-600 hover:text-gray-900 px-8 py-3 rounded-md font-bold transition-all text-sm w-full sm:w-auto">
              Let's Explore
            </button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none lg:relative lg:pointer-events-auto lg:flex lg:justify-end"
        >
          <img src="/images/hero-section.png" alt="Hero Illustration" width={600} height={600} className="object-contain w-full max-w-md aspect-square opacity-10 lg:opacity-100" />
        </motion.div>
      </section>

      {/* Why WiserKids Section */}
      <section className="bg-[#F4F1EA] py-16 sm:py-24  overflow-hidden">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-6xl mx-auto px-6"
        >
          <motion.div variants={fadeInUp} className="text-center max-w-3xl mx-auto space-y-4 sm:space-y-6 mb-12 sm:mb-16">
            <h2 className="text-3xl font-extrabold">Why WiserKids ?</h2>
            <p className="text-gray-800 leading-relaxed font-medium text-sm sm:text-base">
              Children grow best when they feel supported, interested, and understood. Wiser Kids is designed to help learning feel more personal, more connected, and more aligned with the way children actually develop.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-6">
            {/* Card 1 */}
            <motion.div variants={fadeInUp} className="bg-white rounded-2xl p-6 sm:p-8 space-y-4 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-8 h-8 bg-[#FFC247] rounded-md flex items-center justify-center text-white">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" /></svg>
              </div>
              <h3 className="font-extrabold text-lg text-gray-900">Personal attention that makes a difference</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Children need more than instruction. They need to feel seen. Wiser Kids is built around care, connection, and the kind of attention that helps children grow with confidence.
              </p>
            </motion.div>
            {/* Card 2 */}
            <motion.div variants={fadeInUp} className="bg-white rounded-2xl p-6 sm:p-8 space-y-4 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-8 h-8 bg-[#FFC247] rounded-md flex items-center justify-center text-white">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>
              </div>
              <h3 className="font-extrabold text-lg text-gray-900">Learning that feels meaningful</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Children engage more deeply when learning feels connected, active, and relevant. We focus on helping learning feel alive, not just completed.
              </p>
            </motion.div>
            {/* Card 3 */}
            <motion.div variants={fadeInUp} className="bg-white rounded-2xl p-6 sm:p-8 space-y-4 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-8 h-8 bg-[#FFC247] rounded-md flex items-center justify-center text-white">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" /></svg>
              </div>
              <h3 className="font-extrabold text-lg text-gray-900">Growth beyond academics</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                We care about strong learning foundations, but we also care about confidence, communication, emotional development, and the habits that help children thrive.
              </p>
            </motion.div>
            {/* Card 4 */}
            <motion.div variants={fadeInUp} className="bg-white rounded-2xl p-6 sm:p-8 space-y-4 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-8 h-8 bg-[#FFC247] rounded-md flex items-center justify-center text-white">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16z" clipRule="evenodd" /><path d="M7 9a1 1 0 000 2h6a1 1 0 100-2H7z" clipRule="evenodd" fillRule="evenodd" /></svg>
              </div>
              <h3 className="font-extrabold text-lg text-gray-900">Support parents can actually feel</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Children engage more deeply when learning feels connected, active, and relevant. We focus on helping learning feel alive, not just completed.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Children feel supported Section */}
      <section className="bg-[#F4F1EA] py-16 pb-24 sm:pb-32 overflow-hidden">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-6xl mx-auto px-6"
        >
          <motion.div variants={fadeInUp} className="text-center max-w-3xl mx-auto space-y-4 sm:space-y-6 mb-12 sm:mb-16">
            <h2 className="text-3xl font-extrabold">Children feel supported when parents do too</h2>
            <p className="text-gray-800 leading-relaxed font-medium text-sm sm:text-base">
              Wiser Kids is built to give parents a stronger sense of clarity, connection, and confidence in their child's learning journey.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Text Review 1 */}
            <motion.div variants={fadeInUp} className="bg-white rounded-2xl p-6 shadow-sm flex flex-col justify-between aspect-auto sm:aspect-[3/4] hover:shadow-md transition-shadow">
              <p className="text-gray-800 text-sm font-bold leading-relaxed mb-4 sm:mb-0">
                So excited for my son! He just joined WiserKids, an amazing program for 6-12 year olds that goes beyond school textbooks. He will be learning real-world skills like financial literacy, critical thinking, and emotional intelligence. Can't wait to see him grow!
              </p>
              <div className="flex items-center gap-3 mt-4">
                <div className="flex-1 text-[10px] leading-tight font-bold text-gray-500">Muhammad Belayet<br />Chowdhury</div>
                <div className="w-8 h-8 bg-gray-200 rounded-md flex-shrink-0">
                  {/* PASTE AVATAR 1 IMAGE PATH BELOW */}
                  <img src="" width={32} height={32} className="rounded-md" alt="Avatar" />
                </div>
              </div>
            </motion.div>

            {/* Video Thumbnail 1 */}
            <motion.div variants={fadeInUp} className="bg-white rounded-2xl p-2 shadow-sm aspect-square sm:aspect-[3/4] relative overflow-hidden flex items-center justify-center group hover:shadow-md transition-shadow">

              <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
                <video
                  id="video1"
                  src=""
                  className="absolute inset-0 w-full h-full object-cover"
                  playsInline
                  controls
                />
                <div
                  id="playBtn1"
                  className="w-10 h-10 bg-[#FFC247] rounded-full flex items-center justify-center pl-1 cursor-pointer group-hover:scale-110 transition-transform z-20"
                  onClick={() => {
                    const video = document.getElementById("video1") as HTMLVideoElement;
                    const btn = document.getElementById("playBtn1");
                    if (video.paused) {
                      video.play();
                      if (btn) btn.style.display = "none";
                    }
                  }}
                >
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </motion.div>

            {/* Text Review 2 */}
            <motion.div variants={fadeInUp} className="bg-white rounded-2xl p-6 shadow-sm flex flex-col justify-between aspect-auto sm:aspect-[3/4] hover:shadow-md transition-shadow">
              <p className="text-gray-800 text-sm font-bold leading-relaxed mb-4 sm:mb-0">
                So excited for my son! He just joined WiserKids, an amazing program for 6-12 year olds that goes beyond school textbooks. He will be learning real-world skills like financial literacy, critical thinking, and emotional intelligence. Can't wait to see him grow!
              </p>
              <div className="flex items-center gap-3 mt-4">
                <div className="flex-1 text-[10px] leading-tight font-bold text-gray-500">Muhammad Belayet<br />Chowdhury</div>
                <div className="w-8 h-8 bg-gray-200 rounded-md flex-shrink-0">
                  {/* PASTE AVATAR 2 IMAGE PATH BELOW */}
                  <img src="" width={32} height={32} className="rounded-md" alt="Avatar" />
                </div>
              </div>
            </motion.div>

            {/* Video Thumbnail 2 */}
            <motion.div variants={fadeInUp} className="bg-white rounded-2xl p-2 shadow-sm aspect-square sm:aspect-[3/4] relative overflow-hidden flex items-center justify-center group hover:shadow-md transition-shadow">
              <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
                <video
                  id="video2"
                  src="/images/ali_interview.mp4"
                  className="absolute inset-0 w-full h-full object-cover"
                  playsInline
                  controls
                />
                <div
                  id="playBtn2"
                  className="w-10 h-10 bg-[#FFC247] rounded-full flex items-center justify-center pl-1 cursor-pointer group-hover:scale-110 transition-transform z-20"
                  onClick={() => {
                    const video = document.getElementById("video2") as HTMLVideoElement;
                    const btn = document.getElementById("playBtn2");
                    if (video.paused) {
                      video.play();
                      if (btn) btn.style.display = "none";
                    }
                  }}
                >
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Programs Section */}
      <section className="bg-[#9F8368] py-16 sm:py-24 overflow-hidden">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-6xl mx-auto px-6"
        >
          <motion.div variants={fadeInUp} className="text-center max-w-4xl mx-auto space-y-4 mb-12 sm:mb-16 text-white">
            <h2 className="text-3xl font-extrabold">Programs shaped around each stage of growth</h2>
            <p className="text-white/90 leading-relaxed font-medium text-sm sm:text-base">
              Every stage of childhood brings different needs, rhythms, and strengths. Wiser Kids supports children with learning experiences that grow with them.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            <motion.div variants={fadeInUp} whileHover={{ y: -5 }} className="bg-white rounded-xl p-8 shadow-sm transition-transform">
              <h3 className="font-extrabold text-lg text-gray-900 mb-3">Early Explorers</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                A nurturing start for younger children focused on confidence, communication, curiosity, and joyful foundations.
              </p>
            </motion.div>
            <motion.div variants={fadeInUp} whileHover={{ y: -5 }} className="bg-white rounded-xl p-8 shadow-sm transition-transform">
              <h3 className="font-extrabold text-lg text-gray-900 mb-3">Growing Learners</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                A balanced stage focused on stronger skills, deeper engagement, and a growing sense of independence.
              </p>
            </motion.div>
            <motion.div variants={fadeInUp} whileHover={{ y: -5 }} className="bg-white rounded-xl p-8 shadow-sm transition-transform">
              <h3 className="font-extrabold text-lg text-gray-900 mb-3">Confident Thinkers</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                A more advanced stage designed to strengthen expression, responsibility, and thoughtful, independent learning.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* A calmer, smarter way Section */}
      <section className="bg-[#F4F1EA] py-16 sm:py-24 overflow-hidden">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-6xl mx-auto px-6"
        >
          <motion.div variants={fadeInUp} className="text-center max-w-3xl mx-auto space-y-4 sm:space-y-6 mb-12 sm:mb-16">
            <h2 className="text-3xl font-extrabold">A calmer, smarter way to help children grow</h2>
            <p className="text-gray-800 leading-relaxed font-medium text-sm sm:text-base">
              Wiser Kids combines structure, encouragement, and engaging learning experiences to support steady progress in a way that feels thoughtful and developmentally aware.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            <motion.div variants={fadeInUp} className="bg-white rounded-2xl p-8 space-y-4 shadow-sm flex flex-col items-start hover:shadow-md transition-shadow">
              <div className="w-12 h-12 flex items-center justify-center text-[#FFC247]">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" /></svg>
              </div>
              <h3 className="font-extrabold text-lg text-gray-900">Build strong foundations</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Children develop essential skills through clear, supportive learning that helps them grow with understanding, not just repetition.
              </p>
            </motion.div>
            <motion.div variants={fadeInUp} className="bg-white rounded-2xl p-8 space-y-4 shadow-sm flex flex-col items-start hover:shadow-md transition-shadow">
              <div className="w-12 h-12 flex items-center justify-center text-[#FFC247]">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>
              </div>
              <h3 className="font-extrabold text-lg text-gray-900">Make learning active</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Discussion, creativity, exploration, and participation help children engage more deeply with what they are learning.
              </p>
            </motion.div>
            <motion.div variants={fadeInUp} className="bg-white rounded-2xl p-8 space-y-4 shadow-sm flex flex-col items-start hover:shadow-md transition-shadow">
              <div className="w-12 h-12 flex items-center justify-center text-[#FFC247]">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" /></svg>
              </div>
              <h3 className="font-extrabold text-lg text-gray-900">Support the whole child</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Confidence, communication, self awareness, and emotional growth are part of meaningful learning, not extras added later.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* From Classroom to Real World Section */}
      <section className="bg-[#F4F1EA] pb-16 sm:pb-24 overflow-hidden">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="max-w-6xl mx-auto px-6 flex justify-center"
        >
          <img src="/images/classroom-to-realworld.png" alt="From Classroom to Real World" className="w-full h-auto rounded-3xl shadow-sm" />
        </motion.div>
      </section>

      {/* Registration Form Section */}
      <section id="register" className="bg-[#9F8368] py-16 sm:py-24">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="max-w-4xl mx-auto px-6"
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold text-center text-white mb-8 sm:mb-12">Registration Form</h2>
          <ParentForm />
        </motion.div>
      </section>

      {/* FAQ Section */}
      <section className="bg-[#F4F1EA] py-16 sm:py-24">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-3xl mx-auto px-6"
        >
          <motion.h2 variants={fadeInUp} className="text-3xl sm:text-4xl font-extrabold text-center mb-8 sm:mb-12">FAQ</motion.h2>
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
                className="bg-white rounded-full px-6 sm:px-8 py-4 flex justify-between items-center cursor-pointer shadow-sm hover:shadow-md transition-all active:scale-[0.98]"
              >
                <span className="font-medium text-gray-800 text-xs sm:text-sm">{question}</span>
                <span className="text-xl sm:text-2xl font-light text-gray-500">+</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Let's Explore Section */}
      <section className="bg-[#91A6AC] py-16 sm:py-24">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-4xl mx-auto px-6 text-center text-white space-y-6"
        >
          <motion.h2 variants={fadeInUp} className="text-2xl sm:text-2xl font-extrabold leading-tight">Let's explore whether Wiser Kids is the right fit for your family</motion.h2>
          <motion.p variants={fadeInUp} className="text-white/90 text-sm sm:text-base max-w-lg mx-auto leading-relaxed">
            If you are looking for something warmer, more thoughtful, and more personal for your child, we would love to hear from you.
          </motion.p>
          <motion.button
            variants={fadeInUp}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById("register")?.scrollIntoView({ behavior: "smooth" })}
            className="bg-[#FFC247] hover:bg-[#eeb136] text-white px-8 py-3 rounded-md font-bold transition-colors inline-block mt-4 w-full sm:w-auto"
          >
            Book a call
          </motion.button>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="bg-[#F4F1EA] pt-16 pb-8 border-t border-[#E5E2DA]">
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
              <p className="text-xs font-bold text-gray-800 max-w-xs leading-relaxed">
                Being Financially Smart, Creative &<br />Entrepreneurial
              </p>
              <p className="text-xs text-gray-500 max-w-xs leading-relaxed">
                Empowering the next generation of thinkers, earners, and leaders — one child at a time.
              </p>
              {/* Social Icons */}
              <div className="flex items-center gap-3 pt-2">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"
                  className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-sm hover:bg-[#FFC247] transition-colors group">
                  <svg className="w-4 h-4 text-gray-600 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                  </svg>
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
                  className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-sm hover:bg-[#FFC247] transition-colors group">
                  <svg className="w-4 h-4 text-gray-600 group-hover:text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <circle cx="12" cy="12" r="4" />
                    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                  </svg>
                </a>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer"
                  className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-sm hover:bg-[#FFC247] transition-colors group">
                  <svg className="w-4 h-4 text-gray-600 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 001.46 6.42 29 29 0 001 12a29 29 0 00.46 5.58 2.78 2.78 0 001.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 001.95-1.96A29 29 0 0023 12a29 29 0 00-.46-5.58z" />
                    <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="white" />
                  </svg>
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
                  className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-sm hover:bg-[#FFC247] transition-colors group">
                  <svg className="w-4 h-4 text-gray-600 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-extrabold text-gray-900 mb-4 sm:mb-6 text-sm">Quick Links</h4>
              <ul className="space-y-3 text-xs font-bold text-gray-700">
                <li><a href="#" className="hover:text-[#FFC247] transition-colors">Home</a></li>
                <li><a href="#" className="hover:text-[#FFC247] transition-colors">About</a></li>
                <li><a href="#" className="hover:text-[#FFC247] transition-colors">How it Works</a></li>
                <li><a href="#" className="hover:text-[#FFC247] transition-colors">Program</a></li>
                <li><a href="#" className="hover:text-[#FFC247] transition-colors">For Parents</a></li>
                <li><a href="#" className="hover:text-[#FFC247] transition-colors">FAQ</a></li>
                <li><a href="#" className="hover:text-[#FFC247] transition-colors">Contact</a></li>
              </ul>
            </div>

            {/* Legal + Contact */}
            <div className="space-y-8">
              <div>
                <h4 className="font-extrabold text-gray-900 mb-4 sm:mb-6 text-sm">Legal</h4>
                <ul className="space-y-3 text-xs font-bold text-gray-700">
                  <li><a href="#" className="hover:text-[#FFC247] transition-colors">Privacy Policy</a></li>
                  <li><a href="#" className="hover:text-[#FFC247] transition-colors">Terms of Service</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-extrabold text-gray-900 mb-4 text-sm">Contact</h4>
                <ul className="space-y-3 text-xs font-bold text-gray-700">
                  <li>
                    <a href="mailto:info@wiserkid.club" className="hover:text-[#FFC247] transition-colors">
                      info@wiserkids.club
                    </a>
                  </li>
                  <li className="text-gray-500 font-medium">Dhaka, Bangladesh</li>
                </ul>
              </div>
            </div>

          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-gray-300 flex flex-col sm:flex-row items-center justify-between gap-2">
            <p className="text-[10px] font-bold text-gray-600">© 2026 WiserKids. All rights reserved.</p>
            <p className="text-[10px] text-gray-400">Built with ❤️ for curious kids and confident parents.</p>
          </div>
        </div>
      </footer >
    </div >
  );
}
