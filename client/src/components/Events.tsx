import { motion } from "framer-motion";
import { Calendar, Trophy, Brain, PartyPopper } from "lucide-react";

const BAR_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663397693691/hEsC9x2VFLWg57pnbicY3y/bar-atmosphere-U6tuo7XmjiS8beDDxsZv9e.webp";

const events = [
  {
    name: "Pool Nights",
    description: "Grab a cue and challenge your friends. Our pool table is always ready for a good time.",
    icon: Trophy,
    color: "text-earth-terracotta",
    bgColor: "bg-earth-terracotta/10",
  },
  {
    name: "Trivia Nights",
    description: "Test your knowledge and compete for bragging rights. Teams welcome!",
    icon: Brain,
    color: "text-earth-green",
    bgColor: "bg-earth-green/10",
  },
  {
    name: "Special Events",
    description: "From glow parties to live music — follow us on social media for upcoming events.",
    icon: PartyPopper,
    color: "text-earth-gold",
    bgColor: "bg-earth-gold/15",
  },
];

export default function Events() {
  return (
    <section id="events" className="bg-earth-linen py-20 sm:py-28">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="rounded-3xl overflow-hidden shadow-2xl shadow-earth-brown/10">
              <img
                src={BAR_IMG}
                alt="Warm kava bar atmosphere with people socializing"
                className="w-full h-[400px] sm:h-[500px] object-cover"
              />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-4 -right-4 sm:bottom-6 sm:right-6 bg-earth-terracotta text-white px-5 py-3 rounded-2xl shadow-lg shadow-earth-terracotta/30 font-display font-bold text-lg">
              <Calendar className="w-5 h-5 inline mr-2" />
              Events Weekly
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-earth-green/10 text-earth-green rounded-full text-sm font-medium mb-4">
              <Calendar className="w-4 h-4" />
              Things To Do
            </span>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-earth-brown mb-4">
              More Than Just
              <span className="text-earth-terracotta"> A Bar</span>
            </h2>
            <p className="font-body text-earth-brown-light text-lg mb-8 leading-relaxed">
              Black Sheep Botanicals is your community hangout. Whether you're here for the kava, the games, or the company — there's always something happening.
            </p>

            <div className="space-y-4">
              {events.map((event, i) => (
                <motion.div
                  key={event.name}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="flex items-start gap-4 p-4 rounded-xl hover:bg-earth-cream/80 transition-colors"
                >
                  <div className={`p-3 rounded-xl ${event.bgColor}`}>
                    <event.icon className={`w-6 h-6 ${event.color}`} />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-bold text-earth-brown mb-1">
                      {event.name}
                    </h3>
                    <p className="font-body text-earth-brown-light text-sm leading-relaxed">
                      {event.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <p className="mt-6 text-sm text-earth-brown-light italic font-body">
              Days and times for Pool and Trivia nights coming soon — follow our socials for updates!
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
