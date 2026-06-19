import "./Philosophy.css";
import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "motion/react";

const pillars = [
  { number: "01", title: "Heritage",
    text: "Every ingredient traces back to India's ancient knowledge — wildcrafted herbs from the Himalayas, cold-pressed oils from Kerala, rare resins from Rajasthan's dry forests." },
  { number: "02", title: "Craft",
    text: "Our artisans spend decades mastering their craft. Each bottle, each stitch, each formula is the result of obsessive, patient dedication to Indian excellence." },
  { number: "03", title: "Elore",
    text: "We believe beauty is a daily practice — a quiet moment of intention, a choice to honour yourself with the finest India has to offer." },
];

export function Philosophy() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"], layoutEffect: false });
  const imgY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  const titleRef = useRef<HTMLDivElement>(null);
  const titleInView = useInView(titleRef, { once: true, margin: "-80px" });

  return (
    <section ref={sectionRef} className="philosophy">
      <div className="philosophy__inner">
        <div className="philosophy__grid">
          {/* Image */}
          <div className="philosophy__img-wrap">
            <motion.div className="philosophy__img-inner" style={{ y: imgY }}>
              <img src="https://images.unsplash.com/photo-1676302144341-10563603f99a?w=900&h=1100&fit=crop&auto=format"
                alt="Elore sanctuary" />
              <div className="philosophy__img-overlay" />
            </motion.div>
            <div className="philosophy__corner-tl" />
            <div className="philosophy__corner-br" />
            <motion.div
              className="philosophy__quote"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <p>"सौंदर्य बाहर नहीं, भीतर के प्रकाश में है।"</p>
              <cite>— Ancient Indian Wisdom</cite>
            </motion.div>
          </div>

          {/* Text */}
          <div ref={titleRef}>
            <motion.span className="elore-label" style={{ display: "block", marginBottom: 12 }}
              initial={{ opacity: 0 }} animate={titleInView ? { opacity: 1 } : {}}>
              The Elore Way
            </motion.span>
            <motion.h2 className="philosophy__heading"
              initial={{ opacity: 0, y: 24 }} animate={titleInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.1 }}>
              Where Ancient India<br />
              <em>Meets Modern Luxury</em>
            </motion.h2>

            <div style={{ display: "flex", flexDirection: "column", gap: 36 }}>
              {pillars.map((p, i) => (
                <motion.div key={p.number} className="philosophy__pillar"
                  initial={{ opacity: 0, x: 28 }}
                  animate={titleInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.2 + i * 0.15 }}>
                  <span className="philosophy__pillar-num">{p.number}</span>
                  <div className="philosophy__pillar-body">
                    <h4 className="philosophy__pillar-title">{p.title}</h4>
                    <p className="philosophy__pillar-text">{p.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
