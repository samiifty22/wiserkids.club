"use client";

import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ParentForm from "@/components/ParentForm";
import { fadeInUp, staggerContainer } from "@/lib/theme";

export default function AdmissionPage() {
  return (
    <div className="min-h-screen bg-white text-[#192A4B]">
      <Header />

      <section className="bg-[#192A4B] py-16 sm:py-24">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="max-w-4xl mx-auto px-6"
        >
          <motion.div variants={fadeInUp} className="text-center mb-8 sm:mb-12 space-y-3">
            <p className="text-[#F9BF3F] text-xs font-bold uppercase tracking-widest">Save Your Child&apos;s Spot</p>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white">Registration Form</h1>
            <p className="text-white/70 text-sm sm:text-base max-w-xl mx-auto">
              Fill in a few details below and our team will reach out to confirm the next steps.
            </p>
          </motion.div>
          <motion.div variants={fadeInUp}>
            <ParentForm />
          </motion.div>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}
