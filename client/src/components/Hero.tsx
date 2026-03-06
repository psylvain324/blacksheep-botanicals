import { motion } from "framer-motion";
import { ChevronDown, MapPin, Clock } from "lucide-react";

const HERO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663397693691/hEsC9x2VFLWg57pnbicY3y/hero-bg-7cyB5oj84uQNZC9Vk4zmkn.webp";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={HERO_IMG}
          alt="Kava shells and botanicals on wooden bar"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-earth-brown/70 via-earth-brown/50 to-earth-green-dark/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto text-center px-4 pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <p className="font-body text-earth-gold-light tracking-[0.3em] uppercase text-sm mb-4">
            St. Petersburg, Florida
          </p>
          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-[0.95] mb-6">
            Black Sheep
            <span className="block text-earth-gold">Botanicals</span>
          </h1>
          <p className="font-body text-white/80 text-lg sm:text-xl max-w-2xl mx-auto mb-8 leading-relaxed">
            Your neighborhood kava bar — serving traditional kava, kratom teas,
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
            className="px-8 py-4 bg-earth-terracotta text-white rounded-full font-semibold text-lg hover:bg-earth-terracotta-light transition-all shadow-xl shadow-earth-terracotta/30 hover:shadow-2xl hover:shadow-earth-terracotta/40 hover:-translate-y-0.5"
          >
            View Our Menu
          </a>
          <a
            href="#about"
            className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white border border-white/20 rounded-full font-semibold text-lg hover:bg-white/20 transition-all"
          >
            Learn About Kava
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 text-white/70 text-sm"
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
