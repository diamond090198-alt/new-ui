import "../styles/global.css";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { MarqueeBanner } from "./components/MarqueeBanner";
import { Categories } from "./components/Categories";
import { FeaturedProducts } from "./components/FeaturedProducts";
import { Philosophy } from "./components/Philosophy";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div style={{ minHeight: "100vh", backgroundColor: "var(--color-bg)", color: "var(--color-dark)", overflowX: "hidden" }}>
      <Navbar />
      <Hero />
      <MarqueeBanner />
      <Categories />
      {/* <FeaturedProducts /> */}
      {/* <Philosophy /> */}
      {/* <Footer /> */}
    </div>
  );
}
