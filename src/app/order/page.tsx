"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import CheckoutForm from "@/components/CheckoutForm";

const UNIT_PRICE = 955;

export default function OrderPage() {
  return (
    <div className="min-h-screen bg-white text-[#192A4B]">
      <div className="pt-6 px-4 sm:px-6 max-w-7xl mx-auto">
        <header className="bg-white rounded-full px-4 sm:px-8 py-3 flex items-center justify-between shadow-sm border border-gray-200">
          <Link href="/" className="flex items-center">
            <img src="/images/logo-nav.png" alt="WiserKids" className="h-8 sm:h-10 w-auto object-contain" />
          </Link>
          <Link
            href="/"
            className="text-xs sm:text-sm font-bold text-[#606F72] hover:text-[#192A4B] transition-colors"
          >
            ← Back to home
          </Link>
        </header>
      </div>

      <section className="max-w-5xl mx-auto px-6 py-12 sm:py-20 grid lg:grid-cols-2 gap-10 items-start">
        {/* Order Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="lg:sticky lg:top-10 bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8 space-y-6"
        >
          <h2 className="text-xl font-extrabold text-[#192A4B]">Order Summary</h2>
          <div className="flex gap-4 items-center">
            <img
              src="/images/mock up PNG 2.png"
              alt="WiserKids Handbook — Financial Literacy for Smart Kids"
              className="w-20 h-24 object-contain flex-shrink-0"
            />
            <div>
              <h3 className="font-extrabold text-[#192A4B] leading-tight">WiserKids Handbook</h3>
              <p className="text-xs text-[#606F72] mt-1">Being Financially Smart, Creative &amp; Entrepreneurial</p>
              <p className="text-sm font-bold text-[#192A4B] mt-2">৳{UNIT_PRICE.toLocaleString()} / piece</p>
            </div>
          </div>
          <div className="border-t border-gray-100 pt-4 text-xs text-[#606F72] leading-relaxed">
            No login required. Submit your details below and our team will contact you to confirm payment and delivery.
          </div>
        </motion.div>

        {/* Checkout Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
          className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8"
        >
          <h2 className="text-xl font-extrabold mb-6 text-[#192A4B]">Delivery &amp; Contact Details</h2>
          <CheckoutForm />
        </motion.div>
      </section>
    </div>
  );
}
