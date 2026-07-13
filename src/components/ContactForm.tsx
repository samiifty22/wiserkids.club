"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type Errors = Partial<Record<"name" | "email" | "message", string>>;

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [fieldErrors, setFieldErrors] = useState<Errors>({});

  function validate(data: Record<string, FormDataEntryValue>): Errors {
    const errors: Errors = {};

    if (!String(data.name || "").trim()) {
      errors.name = "Name is required.";
    }

    const email = String(data.email || "").trim();
    if (!email) {
      errors.email = "Email is required.";
    } else if (!EMAIL_REGEX.test(email)) {
      errors.email = "Enter a valid email address.";
    }

    if (!String(data.message || "").trim()) {
      errors.message = "Please write a short message.";
    }

    return errors;
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErrorMessage("");

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    const errors = validate(data);
    setFieldErrors(errors);
    if (Object.keys(errors).length > 0) {
      setStatus("error");
      setErrorMessage("Please fix the highlighted fields below.");
      return;
    }

    setStatus("loading");

    try {
      const res = await fetch("/api/contact-us", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
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
        className="bg-white p-8 sm:p-10 rounded-2xl text-center shadow-sm"
      >
        <h3 className="text-xl font-extrabold mb-2 text-[#192A4B]">Message Sent</h3>
        <p className="text-[#606F72]">Thanks for reaching out — our team will get back to you shortly.</p>
      </motion.div>
    );
  }

  const inputClass = (field: keyof Errors) =>
    `w-full px-4 py-3 rounded-md bg-gray-50 border text-[#192A4B] placeholder-gray-400 text-sm focus:ring-2 focus:ring-[#192A4B] outline-none transition-colors ${
      fieldErrors[field] ? "border-red-400" : "border-transparent"
    }`;

  return (
    <form onSubmit={handleSubmit} noValidate className="bg-white rounded-2xl shadow-sm p-6 sm:p-8 space-y-4">
      <div>
        <input type="text" name="name" className={inputClass("name")} placeholder="Your Name" />
        {fieldErrors.name && <p className="text-red-500 text-xs mt-1">{fieldErrors.name}</p>}
      </div>

      <div>
        <input type="email" name="email" className={inputClass("email")} placeholder="Your Email" />
        {fieldErrors.email && <p className="text-red-500 text-xs mt-1">{fieldErrors.email}</p>}
      </div>

      <div>
        <textarea
          name="message"
          rows={5}
          className={`${inputClass("message")} resize-none`}
          placeholder="How can we help?"
        />
        {fieldErrors.message && <p className="text-red-500 text-xs mt-1">{fieldErrors.message}</p>}
      </div>

      {status === "error" && errorMessage && (
        <div className="bg-red-50 border border-red-200 rounded-md p-3 text-center">
          <p className="text-red-500 text-sm font-medium">{errorMessage}</p>
        </div>
      )}

      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        type="submit"
        disabled={status === "loading"}
        className="w-full bg-[#F9BF3F] hover:bg-[#e8ac28] text-white font-bold py-3.5 rounded-full transition-all duration-200 disabled:opacity-50 shadow-[0_8px_20px_-6px_rgba(249,191,63,0.6)] hover:shadow-[0_10px_24px_-6px_rgba(249,191,63,0.7)]"
      >
        {status === "loading" ? "Sending..." : "Send Message"}
      </motion.button>
    </form>
  );
}
