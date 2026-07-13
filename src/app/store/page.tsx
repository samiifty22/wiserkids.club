"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { fadeInUp, staggerContainer, btnPress, primaryBtn } from "@/lib/theme";

const UNIT_PRICE = 955;

export default function StorePage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-white text-[#192A4B]">
      <Header />

      <section className="py-16 sm:py-24">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="max-w-3xl mx-auto px-6 text-center mb-12 sm:mb-16 space-y-3"
        >
          <motion.p variants={fadeInUp} className="text-[#606F72] text-xs font-bold uppercase tracking-widest">
            The WiserKids Store
          </motion.p>
          <motion.h1 variants={fadeInUp} className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight">
            One book. A world of money lessons.
          </motion.h1>
        </motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="max-w-5xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center"
        >
          {/* Product Image */}
          <motion.div variants={fadeInUp} className="flex justify-center">
            <motion.img
              whileHover={{ scale: 1.02 }}
              src="/images/Financial Literracy for smart kids mock up PNG 3.png"
              alt="Financial Literacy for Smart Kids — WiserKids Handbook"
              className="w-64 sm:w-80 h-auto object-contain drop-shadow-2xl"
            />
          </motion.div>

          {/* Product Details */}
          <motion.div variants={fadeInUp} className="text-center lg:text-left space-y-6">
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#192A4B]">WiserKids Handbook</h2>
              <p className="text-[#606F72] text-sm sm:text-base mt-1">Financial Literacy for Smart Kids</p>
            </div>

            <p className="text-[#606F72] leading-relaxed text-sm sm:text-base">
              The WiserKids Handbook turns pocket money, playtime, and everyday choices into real lessons on earning, saving, creating, and leading — the hands-on companion to everything your child learns inside our program.
            </p>

            <div className="space-y-3">
              {[
                "Practical, age-appropriate money lessons for curious kids",
                "Activities designed to be done together with a parent",
                "The same handbook used inside our WiserKids program",
              ].map((point) => (
                <div key={point} className="flex items-start gap-3 justify-center lg:justify-start">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#F9BF3F] flex-shrink-0" />
                  <p className="text-[#606F72] text-sm leading-relaxed text-left">{point}</p>
                </div>
              ))}
            </div>

            <div className="flex items-center justify-center lg:justify-start gap-3 pt-2">
              <span className="text-3xl font-extrabold text-[#192A4B]">৳{UNIT_PRICE.toLocaleString()}</span>
              <span className="text-[#606F72] text-sm">/ piece</span>
            </div>

            <motion.button
              {...btnPress}
              onClick={() => router.push("/order")}
              className={`${primaryBtn} px-10 py-3.5 w-full sm:w-auto`}
            >
              Order Now
            </motion.button>

            <p className="text-xs text-[#606F72]">
              No account needed — place your order and our team will confirm payment and delivery.
            </p>
          </motion.div>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}
