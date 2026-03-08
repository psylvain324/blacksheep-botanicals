import { motion } from "framer-motion";
import { Phone, MapPin, MessageCircle } from "lucide-react";

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

const socialLinks = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/p/Black-Sheep-Botanicals-61555489972616/",
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/blacksheepkavabar/",
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
  },
];

export default function Contact() {
  return (
    <section id="contact" className="bg-earth-brown text-white py-14 sm:py-20 relative overflow-hidden">
      {/* Subtle texture */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
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
          className="text-center mb-10"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 text-earth-gold-light rounded-full text-sm font-medium mb-3">
            <Phone className="w-4 h-4" />
            Get In Touch
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-white mb-3">
            We'd Love To
            <span className="text-earth-gold"> Hear From You</span>
          </h2>
          <p className="font-body text-white/60 text-lg max-w-xl mx-auto">
            Questions about kava? Want to host an event? Just want to say hi? Reach out anytime.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-5 max-w-4xl mx-auto mb-12">
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
              className="group p-5 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 text-center"
            >
              <div className={`inline-flex p-3 rounded-xl ${method.bgColor} mb-3`}>
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

        {/* Compact footer bar */}
        <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-body text-white/40 text-xs">
            &copy; {new Date().getFullYear()} Black Sheep Botanicals
          </p>
          <p className="font-body text-white/40 text-xs text-center sm:text-left">
            5980 66th St N, Unit B · St. Petersburg, FL 33709
          </p>
          <div className="flex gap-2">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="p-1.5 rounded-lg text-white/40 hover:text-earth-gold hover:bg-white/5 transition-colors"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
