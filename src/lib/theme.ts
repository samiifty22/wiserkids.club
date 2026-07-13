export const fadeInUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

export const btnPress = {
  whileHover: { scale: 1.04, y: -3 },
  whileTap: { scale: 0.96, y: 0 },
  transition: { type: "spring" as const, stiffness: 400, damping: 15 },
};

export const primaryBtn =
  "bg-[#F9BF3F] hover:bg-[#e8ac28] text-white font-bold rounded-full shadow-[0_8px_20px_-6px_rgba(249,191,63,0.6)] hover:shadow-[0_10px_24px_-6px_rgba(249,191,63,0.7)] transition-all duration-200";

export const secondaryBtnLight =
  "bg-white border-2 border-[#606F72]/30 text-[#606F72] hover:border-[#192A4B] hover:text-[#192A4B] font-bold rounded-full transition-colors duration-200";

export const secondaryBtnDark =
  "bg-transparent border-2 border-white/40 text-white hover:bg-white/10 hover:border-white/60 font-bold rounded-full transition-colors duration-200";
