import "./FeaturedProducts.css";
import { useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import { ShoppingBag, Heart, Star } from "lucide-react";

const products = [
  { id: 1, name: "Kumkumadi Glow Serum",     category: "Skincare",   price: "₹4,200", rating: 4.9, reviews: 312, tag: "Bestseller",
    image: "https://images.unsplash.com/photo-1631730486572-226d1f595b68?w=600&h=750&fit=crop&auto=format" },
  { id: 2, name: "Sandalwood Radiance Mask",  category: "Skincare",   price: "₹3,100", rating: 4.8, reviews: 187, tag: "New",
    image: "https://images.unsplash.com/photo-1567721913486-6585f069b332?w=600&h=750&fit=crop&auto=format" },
  { id: 3, name: "Kanpur Leather Tote",       category: "Bags",       price: "₹12,500",rating: 5.0, reviews: 94,  tag: "Limited",
    image: "https://images.unsplash.com/photo-1562869323-d3d7be3e88a6?w=600&h=750&fit=crop&auto=format" },
  { id: 4, name: "Oud & Amber Parfum",        category: "Fragrance",  price: "₹7,800", rating: 4.9, reviews: 256, tag: "Signature",
    image: "https://images.unsplash.com/photo-1759794108525-94ff060da692?w=600&h=750&fit=crop&auto=format" },
  { id: 5, name: "Neem & Rose Face Oil",      category: "Skincare",   price: "₹2,600", rating: 4.7, reviews: 421, tag: "Popular",
    image: "https://images.unsplash.com/photo-1613803745799-ba6c10aace85?w=600&h=750&fit=crop&auto=format" },
  { id: 6, name: "Kannauj Attar Musk",        category: "Fragrance",  price: "₹6,400", rating: 4.8, reviews: 138, tag: "New",
    image: "https://images.unsplash.com/photo-1774682060992-4ae4fb77e73f?w=600&h=750&fit=crop&auto=format" },
];

function ProductCard({ product, index }: { product: typeof products[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [liked, setLiked] = useState(false);
  const [added, setAdded] = useState(false);

  return (
    <motion.div
      ref={ref}
      className="product-card"
      initial={{ opacity: 0, y: 48 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="product-card__img-wrap">
        <img className="product-card__img" src={product.image} alt={product.name} />
        <div className="product-card__img-overlay" />
        <span className="product-card__tag">{product.tag}</span>
        <motion.button
          className="product-card__wish"
          whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}
          onClick={() => setLiked(!liked)}
        >
          <Heart size={14} style={{ fill: liked ? "var(--color-coffee)" : "none", color: liked ? "var(--color-coffee)" : "rgba(26,21,16,0.5)" }} />
        </motion.button>
        <motion.button
          className={`product-card__add ${added ? "product-card__add--added" : ""}`}
          whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.98 }}
          onClick={() => { setAdded(true); setTimeout(() => setAdded(false), 1800); }}
        >
          <ShoppingBag size={13} />
          {added ? "Added to Bag ✓" : "Add to Bag"}
        </motion.button>
      </div>
      <div className="product-card__info">
        <p className="product-card__cat">{product.category}</p>
        <h4 className="product-card__name">{product.name}</h4>
        <div className="product-card__meta">
          <div className="product-card__stars">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} size={10}
                style={{ fill: i < Math.floor(product.rating) ? "var(--color-coffee)" : "var(--color-bg-muted)",
                         color: i < Math.floor(product.rating) ? "var(--color-coffee)" : "var(--color-bg-muted)" }} />
            ))}
            <span className="product-card__reviews">({product.reviews})</span>
          </div>
          <span className="product-card__price">{product.price}</span>
        </div>
      </div>
      <div className="product-card__line" />
    </motion.div>
  );
}

export function FeaturedProducts() {
  const titleRef = useRef<HTMLDivElement>(null);
  const titleInView = useInView(titleRef, { once: true, margin: "-60px" });
  const [filter, setFilter] = useState("All");
  const filters = ["All", "Skincare", "Bags", "Fragrance"];
  const filtered = filter === "All" ? products : products.filter((p) => p.category === filter);

  return (
    <section className="featured">
      <div className="featured__inner">
        <div ref={titleRef} className="featured__header">
          <div>
            <motion.span className="elore-label" style={{ display: "block", marginBottom: 10 }}
              initial={{ opacity: 0 }} animate={titleInView ? { opacity: 1 } : {}}>
              Elore Curated
            </motion.span>
            <motion.h2 className="featured__title"
              initial={{ opacity: 0, y: 20 }} animate={titleInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.1 }}>
              Featured Pieces
            </motion.h2>
          </div>
          <motion.div className="featured__filters"
            initial={{ opacity: 0 }} animate={titleInView ? { opacity: 1 } : {}} transition={{ delay: 0.25 }}>
            {filters.map((f) => (
              <button key={f} className={`featured__filter ${filter === f ? "featured__filter--active" : ""}`}
                onClick={() => setFilter(f)}>
                {f}
              </button>
            ))}
          </motion.div>
        </div>

        <div className="featured__grid">
          {filtered.map((p, i) => <ProductCard key={p.id} product={p} index={i} />)}
        </div>

        <div className="featured__cta">
          <motion.button className="elore-btn-outline"
            whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
            View Full Collection
          </motion.button>
        </div>
      </div>
    </section>
  );
}
