"use client";

import { useState } from "react";

export default function ParentForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

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
      <div className="bg-white p-8 rounded-2xl text-center shadow-sm">
        <h3 className="text-2xl font-bold mb-2 text-[#9F8368]">Registration Successful! 🎉</h3>
        <p className="text-gray-600">Thank you for registering. We will be in touch with you shortly.</p>
      </div>
    );
  }

  const inputClass = "w-full px-4 py-3 rounded-md bg-white border-none focus:ring-2 focus:ring-[#FFC247] text-gray-800 placeholder-gray-400 text-sm";

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-3xl mx-auto space-y-4">

      <input
        required
        type="text"
        name="participantName"
        className={inputClass}
        placeholder="Participants Name"
      />

      <input
        type="text"
        name="schoolName"
        className={inputClass}
        placeholder="School Name"
      />

      <div className="flex flex-col md:flex-row gap-4 items-center">
        <input
          required
          type="text"
          name="age"
          className={`${inputClass} md:w-1/4`}
          placeholder="Age"
        />
        <input
          type="text"
          name="bloodGroup"
          className={`${inputClass} md:w-1/4`}
          placeholder="Blood Group"
        />
        <div className="flex items-center gap-4 text-white text-sm md:w-1/2 md:justify-end w-full">
          <span>Gender</span>
          <label className="flex items-center gap-2 cursor-pointer">
            <input required type="radio" name="gender" value="Male" className="accent-[#FFC247] w-4 h-4" /> Male
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input required type="radio" name="gender" value="Female" className="accent-[#FFC247] w-4 h-4" /> Female
          </label>
        </div>
      </div>

      <input
        required
        type="text"
        name="parentName"
        className={inputClass}
        placeholder="Parents Name"
      />

      <input
        type="text"
        name="parentOccupation"
        className={inputClass}
        placeholder="Parents Occupation"
      />

      <input
        required
        type="tel"
        name="phone"
        className={inputClass}
        placeholder="Phone No."
      />

      <input
        required
        type="email"
        name="email"
        className={inputClass}
        placeholder="Email"
      />

      <div className="flex items-center gap-6 text-white text-sm py-2">
        <span className="w-32 font-medium">Admission for</span>
        <label className="flex items-center gap-2 cursor-pointer">
          <input required type="radio" name="admissionFor" value="Workshop" className="accent-[#FFC247] w-4 h-4" /> Workshop
        </label>
        <label className="flex items-center gap-2 cursor-pointer">
          <input required type="radio" name="admissionFor" value="Course" className="accent-[#FFC247] w-4 h-4" /> Course
        </label>
      </div>

      <textarea
        name="note"
        rows={4}
        className={`${inputClass} resize-none`}
        placeholder="Note"
      />

      {status === "error" && (
        <div className="bg-red-50 border border-red-200 rounded-md p-3 text-center">
          <p className="text-red-500 text-sm font-medium">{errorMessage}</p>
        </div>
      )}

      <div className="text-center pt-4">
        <button
          type="submit"
          disabled={status === "loading"}
          className="bg-[#FFC247] hover:bg-[#eeb136] text-white font-bold py-3 px-12 rounded-md transition-all disabled:opacity-50"
        >
          {status === "loading" ? "Submitting..." : "Submit"}
        </button>
      </div>

    </form>
  );
}