import "./Hero.css";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { ArrowRight } from "lucide-react";

// const HERO_IMAGE = "https://images.unsplash.com/photo-1631730486572-226d1f595b68?w=1600&h=1200&fit=crop&auto=format";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "28%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "55%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.55], [1, 0]);

  return (
    <section ref={ref} className="hero">
      <motion.div className="hero__bg" style={{ y: imgY }}>
        <img src="/banner9.jpg" alt="Elore — refined elegance" />
        <div className="hero__overlay-h" />
        <div className="hero__overlay-v" />
      </motion.div>

      <motion.div
        className="hero__glow"
        animate={{ scale: [1, 1.3, 1], opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div className="hero__content" style={{ y: textY, opacity }}>
        <motion.span
          className="hero__eyebrow"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          New Collection 2026
        </motion.span>

        <motion.h1
          className="hero__title"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
        >
          The Art of{" "}
          <em>Refined</em>
          <br />
          Elegance
        </motion.h1>

        <motion.p
          className="hero__body"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.75 }}
        >
          Elore curates luxury skincare, artisan fragrances, and handcrafted bags — rooted in India's finest heritage and crafted for the discerning.
        </motion.p>

        <motion.div
          className="hero__actions"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.95 }}
        >
          <motion.a
            href="#skincare"
            className="elore-btn-primary"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            Explore Collection <ArrowRight size={14} />
          </motion.a>
          <motion.a href="#fragrance" className="hero__link-secondary" whileHover={{ x: 4 }}>
            View Fragrances <ArrowRight size={14} />
          </motion.a>
        </motion.div>
      </motion.div>

      <motion.div
        className="hero__scroll"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        <span className="hero__scroll-label">Scroll</span>
        <motion.div
          className="hero__scroll-line"
          animate={{ scaleY: [0, 1, 0] }}
          style={{ originY: 0 }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>

      <motion.div
        className="hero__stats"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.4, duration: 0.7 }}
      >
        {[
          { num: "200+", label: "Luxury Products" },
          { num: "18", label: "Indian States" },
          { num: "98%", label: "Satisfaction" },
        ].map(({ num, label }) => (
          <div key={label} className="hero__stat">
            <div className="hero__stat-num">{num}</div>
            <div className="hero__stat-label">{label}</div>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
