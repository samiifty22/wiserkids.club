"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_REGEX = /^(?:\+8801[3-9]\d{8}|01[3-9]\d{8}|\+[1-9]\d{9,14})$/;

type Errors = Partial<Record<"participantName" | "age" | "gender" | "parentName" | "phone" | "email" | "admissionFor", string>>;

export default function ParentForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [fieldErrors, setFieldErrors] = useState<Errors>({});

  function validate(data: Record<string, FormDataEntryValue>): Errors {
    const errors: Errors = {};

    if (!String(data.participantName || "").trim()) {
      errors.participantName = "Participant name is required.";
    }

    if (!String(data.age || "").trim()) {
      errors.age = "Age is required.";
    }

    if (!String(data.gender || "").trim()) {
      errors.gender = "Please select a gender.";
    }

    if (!String(data.parentName || "").trim()) {
      errors.parentName = "Parent name is required.";
    }

    const phone = String(data.phone || "").trim();
    if (!phone) {
      errors.phone = "Phone number is required.";
    } else if (!PHONE_REGEX.test(phone)) {
      errors.phone = "Enter a valid phone number (e.g. 01XXXXXXXXX or +8801XXXXXXXXX).";
    }

    const email = String(data.email || "").trim();
    if (!email) {
      errors.email = "Email is required.";
    } else if (!EMAIL_REGEX.test(email)) {
      errors.email = "Enter a valid email address.";
    }

    if (!String(data.admissionFor || "").trim()) {
      errors.admissionFor = "Please select Workshop or Course.";
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
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (res.ok) {
        setStatus("success");
      } else {
        console.error("Server error:", result.error);
        setErrorMessage(result.error || "Something went wrong. Please try again.");
        setStatus("error");
      }
    } catch (err) {
      console.error("Fetch error:", err);
      setErrorMessage("Network error. Please check your connection and try again.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white p-8 sm:p-12 rounded-3xl text-center shadow-xl"
      >
        <h3 className="text-2xl font-extrabold mb-2 text-[#192A4B]">Registration Successful</h3>
        <p className="text-[#606F72] max-w-md mx-auto">
          Thank you for registering. We will be in touch with you shortly.
        </p>
      </motion.div>
    );
  }

  const labelClass = "block text-xs font-bold uppercase tracking-wide text-[#606F72] mb-1.5";
  const inputClass = (field: keyof Errors) =>
    `w-full px-4 py-3 rounded-xl bg-gray-50 border text-[#192A4B] placeholder-gray-400 text-sm focus:ring-2 focus:ring-[#192A4B] outline-none transition-colors ${
      fieldErrors[field] ? "border-red-400" : "border-transparent"
    }`;

  const pillInput = (name: string, value: string, checked: boolean) => (
    <label key={value} className="cursor-pointer">
      <input type="radio" name={name} value={value} defaultChecked={checked} className="peer sr-only" />
      <span className="inline-block px-5 py-2.5 rounded-full border border-gray-300 text-sm font-bold text-[#606F72] peer-checked:bg-[#192A4B] peer-checked:text-white peer-checked:border-[#192A4B] transition-colors">
        {value}
      </span>
    </label>
  );

  return (
    <motion.form
      onSubmit={handleSubmit}
      noValidate
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={staggerContainer}
      className="bg-white rounded-3xl shadow-xl p-6 sm:p-10 md:p-12 space-y-10"
    >
      {/* Participant Details */}
      <motion.div variants={fadeInUp} className="space-y-5">
        <h3 className="text-sm font-extrabold text-[#192A4B] uppercase tracking-wide">
          Participant Details
        </h3>

        <div className="grid sm:grid-cols-2 gap-5">
          <div>
            <label className={labelClass}>Participant&apos;s Name</label>
            <input type="text" name="participantName" className={inputClass("participantName")} placeholder="e.g. Ayesha Rahman" />
            {fieldErrors.participantName && <p className="text-red-500 text-xs mt-1">{fieldErrors.participantName}</p>}
          </div>
          <div>
            <label className={labelClass}>School Name</label>
            <input type="text" name="schoolName" className={inputClass("participantName" as keyof Errors).replace("border-red-400", "border-transparent")} placeholder="e.g. Sunshine School" />
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          <div>
            <label className={labelClass}>Age</label>
            <input type="number" min={1} max={18} name="age" className={inputClass("age")} placeholder="e.g. 9" />
            {fieldErrors.age && <p className="text-red-500 text-xs mt-1">{fieldErrors.age}</p>}
          </div>
          <div>
            <label className={labelClass}>Blood Group</label>
            <input type="text" name="bloodGroup" className={inputClass("age" as keyof Errors).replace("border-red-400", "border-transparent")} placeholder="e.g. O+" />
          </div>
        </div>

        <div>
          <label className={labelClass}>Gender</label>
          <div className="flex flex-wrap gap-3">
            {pillInput("gender", "Male", false)}
            {pillInput("gender", "Female", false)}
          </div>
          {fieldErrors.gender && <p className="text-red-500 text-xs mt-1">{fieldErrors.gender}</p>}
        </div>
      </motion.div>

      {/* Parent Details */}
      <motion.div variants={fadeInUp} className="space-y-5 pt-2 border-t border-gray-100">
        <h3 className="text-sm font-extrabold text-[#192A4B] uppercase tracking-wide pt-6">
          Parent Details
        </h3>

        <div className="grid sm:grid-cols-2 gap-5">
          <div>
            <label className={labelClass}>Parent&apos;s Name</label>
            <input type="text" name="parentName" className={inputClass("parentName")} placeholder="e.g. Kamal Rahman" />
            {fieldErrors.parentName && <p className="text-red-500 text-xs mt-1">{fieldErrors.parentName}</p>}
          </div>
          <div>
            <label className={labelClass}>Parent&apos;s Occupation</label>
            <input type="text" name="parentOccupation" className={inputClass("parentName" as keyof Errors).replace("border-red-400", "border-transparent")} placeholder="e.g. Engineer" />
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          <div>
            <label className={labelClass}>Phone Number</label>
            <input type="tel" name="phone" className={inputClass("phone")} placeholder="01XXXXXXXXX" />
            {fieldErrors.phone && <p className="text-red-500 text-xs mt-1">{fieldErrors.phone}</p>}
          </div>
          <div>
            <label className={labelClass}>Email Address</label>
            <input type="email" name="email" className={inputClass("email")} placeholder="parent@email.com" />
            {fieldErrors.email && <p className="text-red-500 text-xs mt-1">{fieldErrors.email}</p>}
          </div>
        </div>
      </motion.div>

      {/* Program Choice */}
      <motion.div variants={fadeInUp} className="space-y-5 pt-6 border-t border-gray-100">
        <h3 className="text-sm font-extrabold text-[#192A4B] uppercase tracking-wide">
          Program Choice
        </h3>
        <div>
          <label className={labelClass}>Admission For</label>
          <div className="flex flex-wrap gap-3">
            {pillInput("admissionFor", "Workshop", false)}
            {pillInput("admissionFor", "Course", false)}
          </div>
          {fieldErrors.admissionFor && <p className="text-red-500 text-xs mt-1">{fieldErrors.admissionFor}</p>}
        </div>

        <div>
          <label className={labelClass}>Note (optional)</label>
          <textarea
            name="note"
            rows={4}
            className={`${inputClass("participantName" as keyof Errors).replace("border-red-400", "border-transparent")} resize-none`}
            placeholder="Anything else you'd like us to know?"
          />
        </div>
      </motion.div>

      {status === "error" && errorMessage && (
        <motion.div variants={fadeInUp} className="bg-red-50 border border-red-200 rounded-md p-3 text-center">
          <p className="text-red-500 text-sm font-medium">{errorMessage}</p>
        </motion.div>
      )}

      <motion.div variants={fadeInUp} className="text-center pt-2">
        <motion.button
          whileHover={{ scale: 1.04, y: -3 }}
          whileTap={{ scale: 0.96, y: 0 }}
          transition={{ type: "spring", stiffness: 400, damping: 15 }}
          type="submit"
          disabled={status === "loading"}
          className="bg-[#F9BF3F] hover:bg-[#e8ac28] text-white font-bold py-3.5 px-14 rounded-full transition-all duration-200 disabled:opacity-50 shadow-[0_8px_20px_-6px_rgba(249,191,63,0.6)] hover:shadow-[0_10px_24px_-6px_rgba(249,191,63,0.7)]"
        >
          {status === "loading" ? "Submitting..." : "Submit Registration"}
        </motion.button>
      </motion.div>
    </motion.form>
  );
}
