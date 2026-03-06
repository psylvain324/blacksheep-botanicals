import { motion } from "framer-motion";
import { Sparkles, Tag } from "lucide-react";

const specials = [
  {
    day: "Monday",
    title: "$5 Kratom Teas",
    description: "Start your week right with $5 kratom teas all day long.",
    icon: "🍵",
    accent: "bg-earth-green/10 border-earth-green/20",
    tagColor: "bg-earth-green text-white",
  },
  {
    day: "Wednesday",
    title: "$5 Kratom Teas",
    description: "Midweek pick-me-up — all kratom teas just $5.",
    icon: "🌿",
    accent: "bg-earth-terracotta/10 border-earth-terracotta/20",
    tagColor: "bg-earth-terracotta text-white",
  },
  {
    day: "Friday",
    title: "$5 Kratom Teas",
    description: "Kick off the weekend with $5 kratom teas to unwind.",
    icon: "🎉",
    accent: "bg-earth-gold/10 border-earth-gold/30",
    tagColor: "bg-earth-gold text-earth-brown",
  },
];

export default function WeeklySpecials() {
  return (
    <section id="specials" className="bg-earth-cream py-20 sm:py-28">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-earth-terracotta/10 text-earth-terracotta rounded-full text-sm font-medium mb-4">
            <Sparkles className="w-4 h-4" />
            Weekly Specials
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-earth-brown mb-4">
            Deals That Keep
            <span className="text-earth-green"> You Coming Back</span>
          </h2>
          <p className="font-body text-earth-brown-light text-lg max-w-xl mx-auto">
            We believe great botanicals should be accessible. Enjoy these weekly specials every single week.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {specials.map((special, i) => (
            <motion.div
              key={special.day}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className={`relative p-8 rounded-2xl border ${special.accent} hover:shadow-lg hover:shadow-earth-green/5 transition-all duration-300 hover:-translate-y-1`}
            >
              <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4 ${special.tagColor}`}>
                {special.day}
              </span>
              <div className="text-4xl mb-3">{special.icon}</div>
              <h3 className="font-display text-2xl font-bold text-earth-brown mb-2">
                {special.title}
              </h3>
              <p className="font-body text-earth-brown-light text-sm leading-relaxed">
                {special.description}
              </p>
              <div className="mt-4 flex items-center gap-1 text-earth-green">
                <Tag className="w-4 h-4" />
                <span className="text-sm font-semibold">$5 All Day</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
