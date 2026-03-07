import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Menu", href: "#menu" },
  { label: "Specials", href: "#specials" },
  { label: "Hours", href: "#schedule" },
  { label: "Events", href: "#events" },
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
    <motion.nav
      initial={false}
      animate={{
        boxShadow: scrolled
          ? "0 12px 40px rgba(0,0,0,0.35), 0 4px 12px rgba(120,53,15,0.2), 0 0 0 1px rgba(212,168,75,0.08)"
          : "0 4px 20px rgba(0,0,0,0.15), 0 0 0 1px rgba(255,255,255,0.05)",
      }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-orange-900/90 backdrop-blur-md relative pb-[10px]"
    >
      <div className="container mx-auto relative flex items-center justify-between py-5">
        {/* Spacer for centering (matches mobile toggle width) */}
        <div className="w-10 lg:invisible" aria-hidden />

        {/* Desktop Nav - centered, larger with font-display */}
        <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 items-center gap-3">
          {navLinks.map((link, i) => (
            <motion.button
              key={link.href}
              onClick={() => handleClick(link.href)}
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.06, ease: "easeOut" }}
              whileHover={{ scale: 1.04, y: -1 }}
              whileTap={{ scale: 0.98 }}
              className="group relative px-4 py-2.5 rounded-lg text-sm font-display font-semibold tracking-wide overflow-hidden uppercase whitespace-nowrap"
            >
              <span className="relative z-10 text-white/95 group-hover:text-earth-gold transition-colors duration-300">
                {link.label}
              </span>
              <motion.span
                className="absolute inset-0 rounded-lg border border-transparent group-hover:border-earth-gold/60 bg-transparent group-hover:bg-earth-gold/20"
                initial={false}
                transition={{ duration: 0.3 }}
              />
              <motion.span
                className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100"
                style={{ boxShadow: "0 0 24px rgba(212,168,75,0.25)" }}
                initial={false}
                transition={{ duration: 0.3 }}
              />
            </motion.button>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden p-2 rounded-lg transition-colors text-white"
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
                  className="text-left px-4 py-3 rounded-xl text-earth-brown font-medium transition-all duration-300 hover:bg-earth-gold/15 hover:text-earth-brown border-l-4 border-transparent hover:border-earth-gold"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Jagged bottom border */}
      <svg
        className="absolute bottom-0 left-0 w-full h-4 pointer-events-none"
        viewBox="0 0 400 16"
        preserveAspectRatio="none"
      >
        <path
          d="M0,16 L0,8 L12,16 L24,8 L36,16 L48,8 L60,16 L72,8 L84,16 L96,8 L108,16 L120,8 L132,16 L144,8 L156,16 L168,8 L180,16 L192,8 L204,16 L216,8 L228,16 L240,8 L252,16 L264,8 L276,16 L288,8 L300,16 L312,8 L324,16 L336,8 L348,16 L360,8 L372,16 L384,8 L400,16 L400,16 L0,16 Z"
          fill="rgba(0,0,0,0.15)"
        />
        <path
          d="M0,8 L12,16 L24,8 L36,16 L48,8 L60,16 L72,8 L84,16 L96,8 L108,16 L120,8 L132,16 L144,8 L156,16 L168,8 L180,16 L192,8 L204,16 L216,8 L228,16 L240,8 L252,16 L264,8 L276,16 L288,8 L300,16 L312,8 L324,16 L336,8 L348,16 L360,8 L372,16 L384,8 L400,16"
          fill="none"
          stroke="rgba(212,168,75,0.25)"
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </motion.nav>
  );
}
