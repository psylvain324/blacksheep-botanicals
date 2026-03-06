import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Leaf } from "lucide-react";

const navLinks = [
  { label: "Specials", href: "#specials" },
  { label: "Events", href: "#events" },
  { label: "Menu", href: "#menu" },
  { label: "Hours", href: "#schedule" },
  { label: "About", href: "#about" },
  { label: "Find Us", href: "#map" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-earth-linen/95 backdrop-blur-md shadow-lg shadow-earth-brown/5"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between py-4">
        {/* Logo */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="flex items-center gap-2 group"
        >
          <Leaf
            className={`w-7 h-7 transition-colors duration-300 ${
              scrolled ? "text-earth-green" : "text-earth-gold"
            }`}
          />
          <span
            className={`font-display text-xl font-bold tracking-tight transition-colors duration-300 ${
              scrolled ? "text-earth-brown" : "text-white"
            }`}
          >
            Black Sheep
            <span className={`block text-xs font-body font-normal tracking-widest uppercase ${
              scrolled ? "text-earth-green" : "text-earth-gold-light"
            }`}>
              Botanicals
            </span>
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleClick(link.href)}
              className={`px-3 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:bg-earth-green/10 ${
                scrolled
                  ? "text-earth-brown-light hover:text-earth-green"
                  : "text-white/80 hover:text-white"
              }`}
            >
              {link.label}
            </button>
          ))}
          <a
            href="tel:7272535583"
            className="ml-3 px-5 py-2.5 bg-earth-terracotta text-white rounded-full text-sm font-semibold hover:bg-earth-terracotta-light transition-colors shadow-md shadow-earth-terracotta/20"
          >
            Call Us
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className={`lg:hidden p-2 rounded-lg transition-colors ${
            scrolled ? "text-earth-brown" : "text-white"
          }`}
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-earth-linen/98 backdrop-blur-lg border-t border-earth-green/10"
          >
            <div className="container mx-auto py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleClick(link.href)}
                  className="text-left px-4 py-3 rounded-xl text-earth-brown font-medium hover:bg-earth-green/10 hover:text-earth-green transition-colors"
                >
                  {link.label}
                </button>
              ))}
              <a
                href="tel:7272535583"
                className="mt-2 mx-4 px-5 py-3 bg-earth-terracotta text-white rounded-full text-center font-semibold hover:bg-earth-terracotta-light transition-colors"
              >
                Call Us — (727) 253-5583
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
