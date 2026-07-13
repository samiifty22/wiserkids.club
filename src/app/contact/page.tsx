"use client";

import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { fadeInUp, staggerContainer } from "@/lib/theme";

const offices = [
  {
    city: "Dhaka",
    lines: ["House 87-89, Road 4, Niketon,", "Block B, Gulshan-1, Dhaka 1212,", "Bangladesh"],
  },
  {
    city: "Dubai",
    lines: ["Level 1, Innovation One,", "Dubai International Financial", "Centre (DIFC), Dubai,", "UAE"],
  },
];

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white text-[#192A4B]">
      <Header />

      {/* Intro */}
      <section className="bg-white pt-16 sm:pt-24 pb-12 sm:pb-16">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="max-w-3xl mx-auto px-6 text-center space-y-4"
        >
          <motion.p variants={fadeInUp} className="text-[#606F72] text-xs font-bold uppercase tracking-widest">
            Get In Touch
          </motion.p>
          <motion.h1 variants={fadeInUp} className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight">
            We&apos;d love to hear from you
          </motion.h1>
          <motion.p variants={fadeInUp} className="text-[#606F72] text-sm sm:text-base leading-relaxed max-w-xl mx-auto">
            Whether you have a question about our programs or just want to say hello, our team across Dhaka and Dubai is here to help.
          </motion.p>
        </motion.div>
      </section>

      {/* Office Locations */}
      <section className="bg-[#192A4B] py-16 sm:py-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-5xl mx-auto px-6"
        >
          <div className="grid sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-white/15">
            {offices.map((office) => (
              <motion.div
                key={office.city}
                variants={fadeInUp}
                className="py-8 sm:py-2 sm:px-10 first:sm:pl-0 last:sm:pr-0"
              >
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-2 h-2 rounded-full bg-[#F9BF3F]" />
                  <h2 className="text-white font-extrabold text-lg">{office.city}</h2>
                </div>
                <p className="text-white/60 text-sm leading-relaxed">
                  {office.lines.map((line, i) => (
                    <span key={i}>
                      {line}
                      {i < office.lines.length - 1 && <br />}
                    </span>
                  ))}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Contact Form */}
      <section className="bg-white py-16 sm:py-24">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-xl mx-auto px-6"
        >
          <motion.div variants={fadeInUp} className="text-center mb-8 space-y-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#192A4B]">Send Us a Message</h2>
            <p className="text-[#606F72] text-sm">We usually reply within one business day.</p>
          </motion.div>
          <motion.div variants={fadeInUp}>
            <ContactForm />
          </motion.div>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}
