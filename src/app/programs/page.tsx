"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { fadeInUp, staggerContainer, btnPress, primaryBtn } from "@/lib/theme";

export default function ProgramsPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-white text-[#192A4B]">
      <Header />

      {/* Intro */}
      <section className="bg-white pt-16 sm:pt-24 pb-12 sm:pb-16">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="max-w-4xl mx-auto px-6 text-center space-y-5"
        >
          <motion.p variants={fadeInUp} className="text-[#F9BF3F] text-xs font-bold uppercase tracking-widest bg-[#192A4B]/5 inline-block px-4 py-2 rounded-full text-[#606F72]">
            How We Teach
          </motion.p>
          <motion.h1 variants={fadeInUp} className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight">
            Programs shaped around how children actually learn
          </motion.h1>
          <motion.p variants={fadeInUp} className="text-[#606F72] text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            Every WiserKids program blends structured lessons with hands-on activities, small-group mentorship, and real-world challenges. Children don&apos;t just memorize concepts — they practice earning, saving, creating, and leading in ways that stick. We currently offer two paths into that experience: a single-day FinDay workshop, and our full WiserKids course.
          </motion.p>
        </motion.div>
      </section>

      {/* Program Cards */}
      <section className="bg-white pb-16 sm:pb-24">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-8"
        >
          {/* FinDay */}
          <motion.div variants={fadeInUp} className="bg-[#606F72] rounded-3xl p-8 sm:p-10 flex flex-col shadow-sm">
            <span className="inline-block self-start bg-white/15 text-white text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
              Single Day
            </span>
            <h2 className="text-white font-extrabold text-2xl sm:text-3xl mb-4">FinDay</h2>
            <p className="text-white/80 text-sm sm:text-base leading-relaxed mb-6">
              A single, action-packed day introducing kids to money, budgeting, and big ideas — the perfect first taste of financial literacy for a child who&apos;s new to WiserKids.
            </p>
            <div className="space-y-3 mb-8">
              {[
                "One full day, all in one sitting — no long-term commitment",
                "Hands-on activities around earning, saving, and spending wisely",
                "Small groups so every child gets real attention",
                "A great way to try WiserKids before joining the full program",
              ].map((point) => (
                <div key={point} className="flex items-start gap-3">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#F9BF3F] flex-shrink-0" />
                  <p className="text-white/85 text-sm leading-relaxed">{point}</p>
                </div>
              ))}
            </div>
            <motion.button
              {...btnPress}
              onClick={() => router.push("/admission")}
              className={`${primaryBtn} px-8 py-3 mt-auto w-full`}
            >
              Register for FinDay
            </motion.button>
          </motion.div>

          {/* WiserKids Program / Courses */}
          <motion.div variants={fadeInUp} className="bg-[#192A4B] rounded-3xl p-8 sm:p-10 flex flex-col shadow-sm">
            <span className="inline-block self-start bg-[#F9BF3F]/15 text-[#F9BF3F] text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
              Ongoing Course
            </span>
            <h2 className="text-white font-extrabold text-2xl sm:text-3xl mb-4">WiserKids Program</h2>
            <p className="text-white/70 text-sm sm:text-base leading-relaxed mb-6">
              Our full course takes children deeper into earning, saving, investing, and entrepreneurship — with ongoing mentorship along the way, built around each stage of a child&apos;s growth.
            </p>
            <div className="space-y-3 mb-8">
              {[
                "Structured, multi-session course with a consistent group",
                "Covers finance, business, values, technology, and more",
                "Ongoing mentorship, not just a one-time class",
                "Progresses with your child as their skills grow",
              ].map((point) => (
                <div key={point} className="flex items-start gap-3">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#F9BF3F] flex-shrink-0" />
                  <p className="text-white/80 text-sm leading-relaxed">{point}</p>
                </div>
              ))}
            </div>
            <motion.button
              {...btnPress}
              onClick={() => router.push("/admission")}
              className={`${primaryBtn} px-8 py-3 mt-auto w-full`}
            >
              Join the Program
            </motion.button>
          </motion.div>
        </motion.div>
      </section>

      {/* CTA strip */}
      <section className="bg-[#606F72] py-16 sm:py-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-3xl mx-auto px-6 text-center text-white space-y-5"
        >
          <motion.h2 variants={fadeInUp} className="text-2xl sm:text-3xl font-extrabold leading-tight">
            Not sure which program fits your child?
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-white/85 text-sm sm:text-base leading-relaxed">
            Start with FinDay to try us out, or jump straight into the full program — either way, our team is happy to help you decide.
          </motion.p>
          <motion.button
            variants={fadeInUp}
            {...btnPress}
            onClick={() => router.push("/admission")}
            className={`${primaryBtn} px-8 py-3 mt-2 w-full sm:w-auto`}
          >
            Start Your Wiser Journey
          </motion.button>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}
