import "./Categories.css";
import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "motion/react";

const tabs = [
  {
    id: "skincare",
    label: "Skincare",
    subtitle: "Glow & Grace",
    badge: "New Arrivals",
    image: "https://images.unsplash.com/photo-1613803745799-ba6c10aace85?w=800&h=1000&fit=crop&auto=format",
    description:
      "Handcrafted by master leather artisans.Handcrafted by master leather artisans.Handcrafted by master leather artisans.Handcrafted by master leather artisans.Handcrafted by master leather artisans.Handcrafted by master leather artisans.Handcrafted by master leather artisans.",
    contributors: [
      { name: "Contributor 1", location: "Kerala" },
      { name: "Contributor 2", location: "Uttar Pradesh" },
      { name: "Contributor 3", location: "Bengaluru" },
      { name: "Contributor 4", location: "Tamil Nadu" },
    ],
    products: [
      { name: "Product 1", price: "₹4,200" },
      { name: "Product 2", price: "₹3,100" },
      { name: "Product 3", price: "₹2,600" },
      { name: "Product 4", price: "₹5,400" },
    ],
  },
  {
    id: "bags",
    label: "Bags",
    subtitle: "Artisan Craft",
    badge: "Bestseller",
    image: "https://images.unsplash.com/photo-1562869323-d3d7be3e88a6?w=800&h=1000&fit=crop&auto=format",
    description:
      "Handcrafted by master leather artisans.Handcrafted by master leather artisans.Handcrafted by master leather artisans.Handcrafted by master leather artisans.Handcrafted by master leather artisans.Handcrafted by master leather artisans.Handcrafted by master leather artisans.Handcrafted by master leather artisans.Handcrafted by master leather artisans.",
    contributors: [
      { name: "Contributor 1", location: "Kerala" },
      { name: "Contributor 2", location: "Uttar Pradesh" },
      { name: "Contributor 3", location: "Bengaluru" },
      { name: "Contributor 4", location: "Tamil Nadu" },
    ],
    products: [
      { name: "Product 1", price: "₹4,200" },
      { name: "Product 2", price: "₹3,100" },
      { name: "Product 3", price: "₹2,600" },
      { name: "Product 4", price: "₹5,400" },
    ],
  },
  {
    id: "fragrance",
    label: "Fragrance",
    subtitle: "Scent & Soul",
    badge: "Limited Edition",
    image: "https://images.unsplash.com/photo-1774682060997-f8959850a7d4?w=800&h=1000&fit=crop&auto=format",
    description:
      "Handcrafted by master leather artisans.Handcrafted by master leather artisans.Handcrafted by master leather artisans.Handcrafted by master leather artisans.Handcrafted by master leather artisans.Handcrafted by master leather artisans.Handcrafted by master leather artisans.",
    contributors: [
      { name: "Contributor 1", location: "Kerala" },
      { name: "Contributor 2", location: "Uttar Pradesh" },
      { name: "Contributor 3", location: "Bengaluru" },
      { name: "Contributor 4", location: "Tamil Nadu" },
    ],
    products: [
      { name: "Product 1", price: "₹4,200" },
      { name: "Product 2", price: "₹3,100" },
      { name: "Product 3", price: "₹2,600" },
      { name: "Product 4", price: "₹5,400" },
    ],
  },
];

export function Categories() {
  const [active, setActive] = useState(0);
  const titleRef = useRef<HTMLDivElement>(null);
  const titleInView = useInView(titleRef, { once: true, margin: "-60px" });
  const tab = tabs[active];

  return (
    <section className="categories" id="skincare">
      <div className="categories__inner">
        {/* Header */}
        <div ref={titleRef} className="categories__header">
          <motion.span
            className="elore-label"
            initial={{ opacity: 0, y: 10 }}
            animate={titleInView ? { opacity: 1, y: 0 } : {}}
          >
            Elore Collections
          </motion.span>
          <motion.h2
            className="categories__title"
            initial={{ opacity: 0, y: 24 }}
            animate={titleInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
          >
            Three Pillars of Luxury
          </motion.h2>
          <motion.div
            className="elore-divider"
            style={{ margin: "0 auto" }}
            initial={{ scaleX: 0 }}
            animate={titleInView ? { scaleX: 1 } : {}}
            transition={{ delay: 0.3 }}
          />
        </div>

        {/* Tab strip */}
        <div className="categories__tabs">
          {tabs.map((t, i) => (
            <button
              key={t.id}
              className={`categories__tab ${active === i ? "categories__tab--active" : ""}`}
              onClick={() => setActive(i)}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* Tab panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            className="categories__panel"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Left: image */}
            <div className="categories__panel-image">
              <img src={tab.image} alt={tab.label} />
              <div className="categories__panel-image-overlay" />
              <span className="categories__panel-badge">{tab.badge}</span>
            </div>

            {/* Right: content */}
            <div className="categories__panel-content">
              {/* Intro */}
              <div>
                <p className="categories__panel-subtitle">{tab.subtitle}</p>
                <h3 className="categories__panel-title">{tab.label}</h3>
                <p className="categories__panel-desc">{tab.description}</p>
              </div>

              {/* Contributors */}
              <div>
                <p className="categories__contributors-title">Our Contributors</p>
                {tab.contributors.map((c) => (
                  <div key={c.name} className="categories__contributor">
                    <span className="categories__contributor-dot" />
                    <span className="categories__contributor-name">{c.name}</span>
                    <span className="categories__contributor-loc">{c.location}</span>
                  </div>
                ))}
              </div>

              {/* Products */}
              <div>
                <p className="categories__products-title">Featured Products</p>
                {tab.products.map((p) => (
                  <div key={p.name} className="categories__product-item">
                    <span className="categories__product-name">{p.name}</span>
                    <span className="categories__product-price">{p.price}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
