import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export default function WeeklySpecials() {
  return (
    <section id="specials" className="bg-earth-cream py-16 sm:py-20">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-earth-terracotta/10 text-earth-terracotta rounded-full text-sm font-medium mb-3">
            <Sparkles className="w-4 h-4" />
            Weekly Specials
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-earth-brown mb-2">
            Best Specials In Town!
          </h2>
          <p className="font-body text-earth-brown-light text-base max-w-xl mx-auto">
            $5 Double Tea · $15 Half Gallon (Mon/Wed/Fri)
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="grid sm:grid-cols-2 gap-4 sm:gap-6"
        >
          <div className="rounded-2xl overflow-hidden shadow-lg shadow-earth-brown/10">
            <img
              src="/Images/IMG_3581.jpeg"
              alt="Kava bar specials"
              className="w-full h-48 sm:h-56 object-cover"
            />
          </div>
          <div className="rounded-2xl overflow-hidden shadow-lg shadow-earth-brown/10">
            <img
              src="/Images/IMG_3582.jpeg"
              alt="Kava bar atmosphere"
              className="w-full h-48 sm:h-56 object-cover"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mt-12 sm:mt-16"
        >
          <h3 className="font-display text-2xl sm:text-3xl font-bold text-earth-brown mb-3">
            Our Awesome Kavatenders
          </h3>
          <p className="font-body text-earth-brown-light text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            We have the best team in town — friendly, knowledgeable, and passionate about botanicals. 
            Enjoy the best-priced, high-quality tea served with a smile.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
