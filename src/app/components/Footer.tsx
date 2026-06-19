import "./Footer.css";
import { motion } from "motion/react";
import { Instagram, Twitter, Youtube } from "lucide-react";

const links = {
  Shop:    ["Skincare", "Bags", "Fragrance", "Gift Sets", "New Arrivals"],
  Company: ["Our Story", "Sustainability", "Careers", "Press", "Stockists"],
  Help:    ["FAQ", "Shipping & Returns", "COD Orders", "Contact Us", "Track Order"],
};

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer__newsletter">
        <div className="footer__newsletter-inner">
          <div>
            <h3 className="footer__newsletter-title">Join the Inner Circle</h3>
            <p className="footer__newsletter-sub">Exclusive access to new collections, private launches, and members-only offers.</p>
          </div>
          <div className="footer__form">
            <input className="footer__input" type="email" placeholder="Your email address" />
            <motion.button className="footer__submit" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              Subscribe
            </motion.button>
          </div>
        </div>
      </div>

      <div className="footer__main">
        <div className="footer__main-inner">
          <div>
            <span className="footer__brand-name">ELORE</span>
            <span className="footer__brand-sub">Luxury · India</span>
            <p className="footer__brand-desc">
              Elore brings India's finest heritage of beauty and craft to those who believe that elegance is a way of living.
            </p>
            <div className="footer__socials">
              {[Instagram, Twitter, Youtube].map((Icon, i) => (
                <motion.a key={i} href="#" className="footer__social" whileHover={{ scale: 1.15 }}>
                  <Icon size={15} />
                </motion.a>
              ))}
            </div>
          </div>

          {Object.entries(links).map(([section, items]) => (
            <div key={section}>
              <h5 className="footer__col-title">{section}</h5>
              <div>
                {items.map((item) => (
                  <a key={item} href="#" className="footer__col-link">{item}</a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="footer__bottom">
        <div className="footer__bottom-inner">
          <p className="footer__copy">© 2026 Elore. All rights reserved. GST: 27AAAAA0000A1Z5</p>
          <div className="footer__legal">
            {["Privacy Policy", "Terms of Use", "Cookie Settings"].map((link) => (
              <a key={link} href="#" className="footer__legal-link">{link}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
