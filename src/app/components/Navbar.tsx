import "./Navbar.css";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Search, ShoppingBag, Menu, X, User } from "lucide-react";

const navLinks = ["Skincare", "Bags", "Fragrance", "Gifts", "About"];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartCount] = useState(2);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}
      >
        <div className="navbar__inner">
          <motion.a href="#" whileHover={{ opacity: 0.8 }}>
            <span className="navbar__logo-name">ELORE</span>
            <span className="navbar__logo-sub">Luxury · India</span>
          </motion.a>

          <nav className="navbar__links" style={{ display: "none" }} aria-label="main">
            {navLinks.map((link, i) => (
              <motion.a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="navbar__link"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.08 }}
              >
                {link}
              </motion.a>
            ))}
          </nav>
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link, i) => (
              <motion.a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="navbar__link"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.08 }}
              >
                {link}
              </motion.a>
            ))}
          </div>

          <div className="navbar__icons">
            <motion.button className="navbar__icon-btn" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <Search size={18} />
            </motion.button>
            <motion.button className="navbar__icon-btn hidden md:flex" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <User size={18} />
            </motion.button>
            <motion.button className="navbar__icon-btn" style={{ position: "relative" }} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <ShoppingBag size={18} />
              {cartCount > 0 && <span className="navbar__cart-badge">{cartCount}</span>}
            </motion.button>
            <motion.button
              className="navbar__icon-btn md:hidden"
              whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}
              onClick={() => setMenuOpen(true)}
            >
              <Menu size={20} />
            </motion.button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="navbar__drawer"
            initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex justify-between items-center mb-12">
              <span className="navbar__logo-name">ELORE</span>
              <button onClick={() => setMenuOpen(false)} style={{ color: "var(--color-muted-text)" }}>
                <X size={24} />
              </button>
            </div>
            <div className="flex flex-col gap-8">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="navbar__drawer-link"
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.07 }}
                  onClick={() => setMenuOpen(false)}
                >
                  {link}
                </motion.a>
              ))}
            </div>
            <div className="navbar__drawer-footer">Luxury. Heritage. Elore.</div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
