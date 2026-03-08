import { motion } from "framer-motion";
import { ChevronDown, MapPin, Clock } from "lucide-react";

const HERO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663397693691/hEsC9x2VFLWg57pnbicY3y/hero-bg-7cyB5oj84uQNZC9Vk4zmkn.webp";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image - 50% larger (zoomed) */}
      <div className="absolute inset-0 overflow-hidden" style={{ opacity: 0.8 }}>
        <img
          src={HERO_IMG}
          alt="Kava shells and botanicals on wooden bar"
          className="w-full h-full object-cover scale-150 origin-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-earth-brown/70 via-earth-brown/50 to-earth-green-dark/70" />
      </div>

      {/* Content - shifted halfway up toward header */}
      <div className="relative z-10 container mx-auto text-center px-4 pt-20 -mt-[28vh]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <img
            src="/Images/BlackSheepLogo_Transparent.png"
            alt="Black Sheep Botanicals"
            className="h-36 sm:h-40 md:h-56 lg:h-64 w-auto mx-auto mb-4 drop-shadow-lg"
          />
          <p className="font-body font-semibold text-earth-gold-light tracking-[0.3em] uppercase text-sm mb-6">
            St. Petersburg, Florida
          </p>
          <p className="font-body text-white/80 text-base sm:text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
            Your neighborhood kava bar — serving traditional kava, botanical teas,
            and botanical drinks in a warm, community-driven space.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
        >
          <a
            href="#menu"
            className="px-6 py-3 bg-earth-terracotta text-white rounded-full font-semibold text-base hover:bg-earth-terracotta-light transition-all shadow-xl shadow-earth-terracotta/30 hover:shadow-2xl hover:shadow-earth-terracotta/40 hover:-translate-y-0.5"
          >
            View Our Menu
          </a>
          <a
            href="#about"
            className="px-6 py-3 bg-white/10 backdrop-blur-sm text-white border border-white/20 rounded-full font-semibold text-base hover:bg-white/20 transition-all"
          >
            Learn About Kava
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 text-white/70 text-base font-semibold"
        >
          <span className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-earth-gold" />
            5980 66th St N, St. Petersburg
          </span>
          <span className="hidden sm:block w-1 h-1 rounded-full bg-white/30" />
          <span className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-earth-gold" />
            Open Daily — 8AM to 11PM+
          </span>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-6 h-6 text-white/50" />
        </motion.div>
      </motion.div>
    </section>
  );
}
