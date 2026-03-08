import { motion } from "framer-motion";
import { BookOpen, Leaf, Droplets, Heart, Shield, Smile } from "lucide-react";

const KAVA_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663397693691/hEsC9x2VFLWg57pnbicY3y/kava-preparation-4SoVCiZXwwzuhQJUbWYAGA.webp";
const BOTANICAL_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663397693691/hEsC9x2VFLWg57pnbicY3y/kratom-leaves-o84xmiMJNpfDykWKpGM4jX.webp";

const kavaFacts = [
  { icon: Droplets, title: "What Is It?", text: "Kava (Piper methysticum) is a plant native to the South Pacific islands. The root is ground and strained with water to create a calming, earthy drink that has been used ceremonially for over 3,000 years." },
  { icon: Smile, title: "How It Feels", text: "Kava promotes a sense of calm and relaxation without impairing mental clarity. Many describe it as a gentle wave of ease that softens tension in the body and mind." },
  { icon: Heart, title: "The Culture", text: "In Pacific Island cultures, kava is shared in social gatherings called 'nakamals.' It brings people together. That same spirit of community is what we bring to Black Sheep." },
];

const botanicalFacts = [
  { icon: Leaf, title: "What Is It?", text: "Botanical Tea (Mitragyna speciosa) is a tropical tree from Southeast Asia, related to the coffee family. Its leaves have been used traditionally for centuries as a tea for energy and well-being." },
  { icon: Shield, title: "How It's Used", text: "It is typically brewed as a tea. Different strains and amounts can produce different effects — from a gentle energy boost to a more relaxed, mellow feeling." },
  { icon: Heart, title: "Our Approach", text: "We serve high-quality botanical teas prepared with care. Our kavatenders can help you find the right option for your needs, whether you're a first-timer or experienced." },
];

export default function AboutSection() {
  return (
    <section id="about" className="bg-earth-linen py-20 sm:py-28">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-earth-green/10 text-earth-green rounded-full text-sm font-medium mb-4">
            <BookOpen className="w-4 h-4" />
            Learn More
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-earth-brown mb-4">
            What Are
            <span className="text-earth-green"> Kava & Botanical Teas?</span>
          </h2>
          <p className="font-body text-earth-brown-light text-lg max-w-2xl mx-auto">
            New to the world of botanicals? Here's everything you need to know before your first visit.
          </p>
        </motion.div>

        {/* Kava Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
          >
            <div className="rounded-3xl overflow-hidden shadow-xl shadow-earth-brown/10">
              <img
                src={KAVA_IMG}
                alt="Traditional kava preparation — straining kava through cloth"
                className="w-full h-[350px] sm:h-[420px] object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="font-display text-3xl sm:text-4xl font-bold text-earth-brown mb-2">
              Kava <span className="text-earth-green">— The Root of Relaxation</span>
            </h3>
            <p className="font-body text-earth-brown-light text-base mb-8 italic">
              "Bula!" — the traditional Fijian greeting shared when drinking kava together.
            </p>
            <div className="space-y-5">
              {kavaFacts.map((fact, i) => (
                <motion.div
                  key={fact.title}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="p-2.5 rounded-xl bg-earth-green/10 shrink-0">
                    <fact.icon className="w-5 h-5 text-earth-green" />
                  </div>
                  <div>
                    <h4 className="font-display text-lg font-bold text-earth-brown mb-1">{fact.title}</h4>
                    <p className="font-body text-earth-brown-light text-sm leading-relaxed">{fact.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Botanical Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="order-2 lg:order-1"
          >
            <h3 className="font-display text-3xl sm:text-4xl font-bold text-earth-brown mb-2">
              Mitragyna Speciosa <span className="text-earth-terracotta">— Nature's Leaf</span>
            </h3>
            <p className="font-body text-earth-brown-light text-base mb-8 italic">
              A member of the coffee family, used for centuries in Southeast Asian tradition.
            </p>
            <div className="space-y-5">
              {botanicalFacts.map((fact, i) => (
                <motion.div
                  key={fact.title}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="p-2.5 rounded-xl bg-earth-terracotta/10 shrink-0">
                    <fact.icon className="w-5 h-5 text-earth-terracotta" />
                  </div>
                  <div>
                    <h4 className="font-display text-lg font-bold text-earth-brown mb-1">{fact.title}</h4>
                    <p className="font-body text-earth-brown-light text-sm leading-relaxed">{fact.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="order-1 lg:order-2"
          >
            <div className="rounded-3xl overflow-hidden shadow-xl shadow-earth-brown/10">
              <img
                src={BOTANICAL_IMG}
                alt="Fresh botanical tea leaves and powder on wooden surface"
                className="w-full h-[350px] sm:h-[420px] object-cover"
              />
            </div>
          </motion.div>
        </div>

        {/* Disclaimer */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-16 p-6 rounded-2xl bg-earth-cream border border-earth-green/10 text-center"
        >
          <p className="font-body text-earth-brown-light text-sm leading-relaxed max-w-2xl mx-auto">
            <strong className="text-earth-brown">A note on wellness:</strong> Kava and botanical teas are botanical products, not medications. 
            They are not intended to diagnose, treat, cure, or prevent any disease. If you have health concerns or are taking medication, 
            please consult with a healthcare professional. Our kavatenders are happy to answer any questions about our products.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
