import { motion } from "framer-motion";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";

const contactMethods = [
  {
    icon: Phone,
    label: "Call Us",
    value: "(727) 253-5583",
    href: "tel:7272535583",
    description: "Give us a ring anytime during business hours",
    color: "text-earth-green",
    bgColor: "bg-earth-green/10",
  },
  {
    icon: MapPin,
    label: "Visit Us",
    value: "5980 66th St N, Unit B",
    href: "https://maps.app.goo.gl/VENpiJLmCmTvSnPn6",
    description: "St. Petersburg, FL 33709",
    color: "text-earth-terracotta",
    bgColor: "bg-earth-terracotta/10",
  },
  {
    icon: MessageCircle,
    label: "Message Us",
    value: "Facebook & Instagram",
    href: "https://www.facebook.com/p/Black-Sheep-Botanicals-61555489972616/",
    description: "DM us on social media for quick questions",
    color: "text-earth-gold",
    bgColor: "bg-earth-gold/15",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="bg-earth-brown py-20 sm:py-28 relative overflow-hidden">
      {/* Subtle texture */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.2) 1px, transparent 0)`,
            backgroundSize: "30px 30px",
          }}
        />
      </div>

      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 text-earth-gold-light rounded-full text-sm font-medium mb-4">
            <Phone className="w-4 h-4" />
            Get In Touch
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4">
            We'd Love To
            <span className="text-earth-gold"> Hear From You</span>
          </h2>
          <p className="font-body text-white/60 text-lg max-w-xl mx-auto">
            Questions about kava? Want to host an event? Just want to say hi? Reach out anytime.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {contactMethods.map((method, i) => (
            <motion.a
              key={method.label}
              href={method.href}
              target={method.href.startsWith("http") ? "_blank" : undefined}
              rel={method.href.startsWith("http") ? "noopener noreferrer" : undefined}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 text-center"
            >
              <div className={`inline-flex p-3 rounded-xl ${method.bgColor} mb-4`}>
                <method.icon className={`w-6 h-6 ${method.color}`} />
              </div>
              <h3 className="font-display text-lg font-bold text-white mb-1">
                {method.label}
              </h3>
              <p className="font-body text-earth-gold font-semibold text-sm mb-1">
                {method.value}
              </p>
              <p className="font-body text-white/50 text-xs">
                {method.description}
              </p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
