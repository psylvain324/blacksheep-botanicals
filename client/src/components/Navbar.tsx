import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Specials", href: "#specials" },
  { label: "Events", href: "#events" },
  { label: "Menu", href: "#menu" },
  { label: "Contact", href: "#contact" },
  { label: "Hours", href: "#schedule" },
  { label: "About", href: "#about" },
  { label: "Find Us", href: "#map" },
];

const SCROLL_DOWN_THRESHOLD = 60;
const SCROLL_UP_THRESHOLD = 20;

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [animateKey, setAnimateKey] = useState(0);
  const [activeSection, setActiveSection] = useState("");
  const [mobileOpen, setMobileOpen] = useState(false);

  const scrolledRef = useRef(scrolled);
  scrolledRef.current = scrolled;

  useEffect(() => {
    const sectionIds = navLinks.map((l) => l.href.slice(1));

    const handleScroll = () => {
      const y = window.scrollY;

      // Scroll state with hysteresis
      const next = scrolledRef.current
        ? y > SCROLL_UP_THRESHOLD
        : y > SCROLL_DOWN_THRESHOLD;
      if (next !== scrolledRef.current) {
        if (next && !scrolledRef.current) {
          setAnimateKey((k) => k + 1);
        }
        scrolledRef.current = next;
        setScrolled(next);
      }

      // Active section detection
      const navHeight = document.querySelector("nav")?.offsetHeight ?? 80;
      let current = "";
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= navHeight + 100 && rect.bottom > navHeight) {
            current = id;
          }
        }
      }
      setActiveSection(current);
    };

    const initial = window.scrollY > SCROLL_DOWN_THRESHOLD;
    scrolledRef.current = initial;
    setScrolled(initial);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
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
      className="fixed top-0 left-0 right-0 z-50 bg-orange-900/90 backdrop-blur-md pb-[10px]"
    >
      <div className="container mx-auto relative flex items-center justify-between py-5">
        <div className="w-10 lg:invisible" aria-hidden />

        {/* Desktop Nav */}
        <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 items-center gap-3 overflow-visible">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={animateKey}
              initial={animateKey > 0 ? { opacity: 0, y: -20, filter: "blur(6px)" } : false}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="flex items-center gap-3"
            >
              {navLinks.map((link, i) => {
                const isActive = activeSection === link.href.slice(1);
                return (
                  <motion.button
                    key={link.href}
                    onClick={() => handleClick(link.href)}
                    initial={animateKey > 0 ? { opacity: 0, y: 12, scale: 0.9 } : false}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{
                      duration: 0.6,
                      delay: animateKey > 0 ? 0.15 + i * 0.07 : 0,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    whileHover={{ scale: 1.04, y: -1 }}
                    whileTap={{ scale: 0.98 }}
                    className="group relative px-4 py-2.5 rounded-lg text-sm font-display font-semibold tracking-wide overflow-hidden uppercase whitespace-nowrap"
                  >
                    <span
                      className={`relative z-10 transition-colors duration-300 ${
                        isActive
                          ? "text-earth-gold"
                          : "text-white/95 group-hover:text-earth-gold"
                      }`}
                    >
                      {link.label}
                    </span>
                    {/* Active indicator - animated gold underline */}
                    <motion.span
                      className="absolute bottom-1 left-3 right-3 h-[2px] rounded-full bg-earth-gold"
                      initial={false}
                      animate={{ scaleX: isActive ? 1 : 0, opacity: isActive ? 1 : 0 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                      style={{ originX: 0.5 }}
                    />
                    <motion.span
                      className="absolute inset-0 rounded-lg border border-transparent group-hover:border-earth-gold/60 bg-transparent group-hover:bg-earth-gold/20"
                      initial={false}
                      animate={isActive ? { borderColor: "rgba(212,168,75,0.3)", backgroundColor: "rgba(212,168,75,0.08)" } : {}}
                      transition={{ duration: 0.3 }}
                    />
                    <motion.span
                      className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100"
                      style={{ boxShadow: "0 0 24px rgba(212,168,75,0.25)" }}
                      initial={false}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.button>
                );
              })}
            </motion.div>
          </AnimatePresence>
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
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.slice(1);
                return (
                  <button
                    key={link.href}
                    onClick={() => handleClick(link.href)}
                    className={`text-left px-4 py-3 rounded-xl font-medium transition-all duration-300 border-l-4 ${
                      isActive
                        ? "bg-earth-gold/15 text-earth-brown border-earth-gold"
                        : "text-earth-brown border-transparent hover:bg-earth-gold/15 hover:text-earth-brown hover:border-earth-gold"
                    }`}
                  >
                    {link.label}
                  </button>
                );
              })}
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
