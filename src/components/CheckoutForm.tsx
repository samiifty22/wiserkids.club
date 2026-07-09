"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const UNIT_PRICE = 955;

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MOBILE_REGEX = /^(?:\+8801[3-9]\d{8}|01[3-9]\d{8}|\+[1-9]\d{9,14})$/;

type Errors = Partial<Record<"fullName" | "mobile" | "email" | "addressLine" | "city", string>>;

export default function CheckoutForm() {
  const [quantity, setQuantity] = useState(1);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [fieldErrors, setFieldErrors] = useState<Errors>({});

  const total = quantity * UNIT_PRICE;

  function validate(data: Record<string, FormDataEntryValue>): Errors {
    const errors: Errors = {};

    if (!String(data.fullName || "").trim()) {
      errors.fullName = "Full name is required.";
    }

    const mobile = String(data.mobile || "").trim();
    if (!mobile) {
      errors.mobile = "Mobile number is required.";
    } else if (!MOBILE_REGEX.test(mobile)) {
      errors.mobile = "Enter a valid mobile number (e.g. 01XXXXXXXXX or +8801XXXXXXXXX).";
    }

    const email = String(data.email || "").trim();
    if (!email) {
      errors.email = "Email is required.";
    } else if (!EMAIL_REGEX.test(email)) {
      errors.email = "Enter a valid email address.";
    }

    if (!String(data.addressLine || "").trim()) {
      errors.addressLine = "Delivery address is required.";
    }

    if (!String(data.city || "").trim()) {
      errors.city = "City / area is required.";
    }

    return errors;
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErrorMessage("");

    const formData = new FormData(e.currentTarget);
    const entries = Object.fromEntries(formData.entries());

    const errors = validate(entries);
    setFieldErrors(errors);
    if (Object.keys(errors).length > 0) {
      setStatus("error");
      setErrorMessage("Please fix the highlighted fields below.");
      return;
    }

    setStatus("loading");

    try {
      const res = await fetch("/api/order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...entries, quantity, unitPrice: UNIT_PRICE }),
      });

      const result = await res.json();

      if (res.ok) {
        setStatus("success");
      } else {
        setErrorMessage(result.error || "Something went wrong. Please try again.");
        setStatus("error");
      }
    } catch {
      setErrorMessage("Network error. Please check your connection and try again.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white p-8 sm:p-12 rounded-2xl text-center shadow-sm"
      >
        <h3 className="text-2xl font-extrabold mb-2 text-[#192A4B]">Order Received</h3>
        <p className="text-[#606F72] max-w-md mx-auto">
          Thank you for your order. Our team will contact you shortly at the number or email you provided to confirm payment and delivery details.
        </p>
      </motion.div>
    );
  }

  const inputClass = (field: keyof Errors) =>
    `w-full px-4 py-3 rounded-md bg-gray-50 border text-[#192A4B] placeholder-gray-400 text-sm focus:ring-2 focus:ring-[#192A4B] outline-none transition-colors ${
      fieldErrors[field] ? "border-red-400" : "border-transparent"
    }`;

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-4">
      <div>
        <input
          type="text"
          name="fullName"
          className={inputClass("fullName")}
          placeholder="Full Name"
        />
        {fieldErrors.fullName && <p className="text-red-500 text-xs mt-1">{fieldErrors.fullName}</p>}
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <input
            type="tel"
            name="mobile"
            className={inputClass("mobile")}
            placeholder="Mobile Number (e.g. 01XXXXXXXXX)"
          />
          {fieldErrors.mobile && <p className="text-red-500 text-xs mt-1">{fieldErrors.mobile}</p>}
        </div>
        <div>
          <input
            type="email"
            name="email"
            className={inputClass("email")}
            placeholder="Email Address"
          />
          {fieldErrors.email && <p className="text-red-500 text-xs mt-1">{fieldErrors.email}</p>}
        </div>
      </div>

      <div>
        <input
          type="text"
          name="addressLine"
          className={inputClass("addressLine")}
          placeholder="Delivery Address"
        />
        {fieldErrors.addressLine && <p className="text-red-500 text-xs mt-1">{fieldErrors.addressLine}</p>}
      </div>

      <div>
        <input
          type="text"
          name="city"
          className={inputClass("city")}
          placeholder="City / Area"
        />
        {fieldErrors.city && <p className="text-red-500 text-xs mt-1">{fieldErrors.city}</p>}
      </div>

      <textarea
        name="notes"
        rows={3}
        className={`${inputClass("fullName" as keyof Errors).replace("border-red-400", "border-transparent")} resize-none`}
        placeholder="Notes (optional)"
      />

      <div className="flex items-center justify-between bg-gray-50 rounded-md px-4 py-3">
        <span className="text-sm font-bold text-[#606F72]">Quantity</span>
        <div className="flex items-center gap-4">
          <button
            type="button"
            onClick={() => setQuantity((q) => Math.max(1, q - 1))}
            className="w-8 h-8 rounded-full bg-white shadow-sm flex items-center justify-center font-bold text-[#606F72] hover:bg-[#192A4B] hover:text-white transition-colors"
          >
            −
          </button>
          <span className="w-6 text-center font-bold text-[#192A4B]">{quantity}</span>
          <button
            type="button"
            onClick={() => setQuantity((q) => q + 1)}
            className="w-8 h-8 rounded-full bg-white shadow-sm flex items-center justify-center font-bold text-[#606F72] hover:bg-[#192A4B] hover:text-white transition-colors"
          >
            +
          </button>
        </div>
      </div>

      <div className="flex items-center justify-between px-4 py-3 border-t border-gray-200">
        <span className="font-extrabold text-[#192A4B]">Total</span>
        <span className="font-extrabold text-lg text-[#192A4B]">৳{total.toLocaleString()}</span>
      </div>

      {status === "error" && errorMessage && (
        <div className="bg-red-50 border border-red-200 rounded-md p-3 text-center">
          <p className="text-red-500 text-sm font-medium">{errorMessage}</p>
        </div>
      )}

      <motion.button
        whileHover={{ scale: 1.03, y: -3 }}
        whileTap={{ scale: 0.97, y: 0 }}
        transition={{ type: "spring", stiffness: 400, damping: 15 }}
        type="submit"
        disabled={status === "loading"}
        className="w-full bg-[#F9BF3F] hover:bg-[#e8ac28] text-white font-bold py-3.5 rounded-full transition-all duration-200 disabled:opacity-50 shadow-[0_8px_20px_-6px_rgba(249,191,63,0.6)] hover:shadow-[0_10px_24px_-6px_rgba(249,191,63,0.7)]"
      >
        {status === "loading" ? "Placing Order..." : "Place Order"}
      </motion.button>

      <p className="text-xs text-[#606F72] text-center pt-1">
        No account needed. We'll reach out to confirm payment and delivery — cash on delivery available.
      </p>
    </form>
  );
}
