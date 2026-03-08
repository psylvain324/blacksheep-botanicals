import { Leaf } from "lucide-react";

const quickLinks = [
  { label: "Specials", href: "#specials" },
  { label: "Events", href: "#events" },
  { label: "Menu", href: "#menu" },
  { label: "Hours", href: "#schedule" },
  { label: "About Kava", href: "#about" },
  { label: "Find Us", href: "#map" },
  { label: "Contact", href: "#contact" },
];

const socialLinks = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/p/Black-Sheep-Botanicals-61555489972616/",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/blacksheepkavabar/",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
  },
];

export default function Footer() {
  const handleClick = (href: string) => {
    if (href.startsWith("#")) {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-earth-brown text-white">

      <div className="container mx-auto py-16">
        {/* <div className="grid md:grid-cols-3 gap-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Leaf className="w-6 h-6 text-earth-gold" />
              <span className="font-display text-xl font-bold">
                Black Sheep
                <span className="block text-xs font-body font-normal tracking-widest uppercase text-earth-sage">
                  Botanicals
                </span>
              </span>
            </div>
            <p className="font-body text-white/50 text-sm leading-relaxed mb-6 max-w-xs">
              St. Petersburg's neighborhood kava bar. Traditional kava, Botanical teas, and botanical drinks served in a warm, community-driven space.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="p-2.5 rounded-xl bg-white/5 text-white/60 hover:bg-earth-green/20 hover:text-earth-gold transition-colors"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display text-lg font-bold mb-4 text-earth-gold">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleClick(link.href)}
                    className="font-body text-white/50 text-sm hover:text-earth-gold transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-lg font-bold mb-4 text-earth-gold">Contact</h4>
            <div className="space-y-3 font-body text-sm text-white/50">
              <p>
                <span className="text-white/70 font-medium">Address:</span><br />
                5980 66th St N, Unit B<br />
                St. Petersburg, FL 33709
              </p>
              <p>
                <span className="text-white/70 font-medium">Phone:</span><br />
                <a href="tel:7272535583" className="hover:text-earth-gold transition-colors">
                  (727) 253-5583
                </a>
              </p>
              <p>
                <span className="text-white/70 font-medium">Hours:</span><br />
                Mon–Thu: 8AM – 11PM<br />
                Fri: 8AM – 12AM<br />
                Sat: 9AM – 12AM<br />
                Sun: 9AM – 11PM
              </p>
            </div>
          </div>
        </div> */}

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-body text-white/30 text-xs">
            &copy; {new Date().getFullYear()} Black Sheep Botanicals. All rights reserved.
          </p>
          <p className="font-body text-white/30 text-xs">
            5980 66th St N, Unit B, St. Petersburg, FL 33709
          </p>
        </div>
      </div>
    </footer>
  );
}
