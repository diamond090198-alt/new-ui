import "./MarqueeBanner.css";
import { motion } from "motion/react";

const items = [
  "Free Shipping on Orders Over ₹2,500", "★",
  "Sustainably Sourced Ingredients", "★",
  "Complimentary Gift Wrapping", "★",
  "100% Cruelty Free", "★",
  "Proudly Made in India", "★",
  "Cash on Delivery Available", "★",
];

export function MarqueeBanner() {
  const track = [...items, ...items];
  return (
    <div className="marquee">
      <motion.div
        className="marquee__track"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
      >
        {track.map((item, i) => (
          <span key={i} className="marquee__item">{item}</span>
        ))}
      </motion.div>
    </div>
  );
}
