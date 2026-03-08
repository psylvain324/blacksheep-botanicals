import { motion } from "framer-motion";
import { MapPin, Navigation } from "lucide-react";

export default function MapSection() {
  return (
    <section id="map" className="bg-earth-cream py-20 sm:py-28">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-earth-terracotta/10 text-earth-terracotta rounded-full text-sm font-medium mb-4">
            <MapPin className="w-4 h-4" />
            Find Us
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-earth-brown mb-4">
            Come
            <span className="text-earth-terracotta"> Visit Us</span>
          </h2>
          <p className="font-body text-earth-brown-light text-lg max-w-xl mx-auto">
            Located next to the Army-Navy store off of 66th St N in St. Petersburg. Easy parking, easy vibes.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="grid lg:grid-cols-3 gap-8"
        >
          {/* Photo of Black Sheep location */}
          <div className="lg:col-span-2 rounded-3xl overflow-hidden shadow-xl shadow-earth-brown/10 border border-earth-green/10">
            <img
              src="/Images/IMG_3581.jpeg"
              alt="Black Sheep Botanicals location at 5980 66th St N, St. Petersburg, FL"
              className="w-full h-[350px] sm:h-[450px] object-cover"
            />
          </div>

          {/* Address Card */}
          <div className="flex flex-col gap-4">
            <div className="p-6 rounded-2xl bg-earth-linen border border-earth-green/10 flex-1">
              <MapPin className="w-6 h-6 text-earth-terracotta mb-3" />
              <h3 className="font-display text-xl font-bold text-earth-brown mb-2">Address</h3>
              <p className="font-body text-earth-brown-light text-sm leading-relaxed mb-4">
                5980 66th St N, Unit B<br />
                St. Petersburg, FL 33709
              </p>
              <p className="font-body text-earth-brown-light text-sm mb-4">
                Located next to the Army-Navy store. Look for us in the plaza — plenty of free parking available.
              </p>
              <a
                href="https://maps.app.goo.gl/VENpiJLmCmTvSnPn6"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-earth-green text-white rounded-full text-sm font-semibold hover:bg-earth-green-light transition-colors shadow-md shadow-earth-green/20"
              >
                <Navigation className="w-4 h-4" />
                Get Directions
              </a>
            </div>

            <div className="p-6 rounded-2xl bg-earth-green-dark text-white">
              <h3 className="font-display text-lg font-bold mb-2">First Time?</h3>
              <p className="font-body text-white/80 text-sm leading-relaxed">
                Mention our website and get your first shell on us! Our kavatenders will guide you through the experience.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
