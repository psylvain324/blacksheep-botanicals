import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Leaf, Coffee, Droplets, Cookie } from "lucide-react";

const categories = [
  { id: "kava", label: "Kava", icon: Droplets },
  { id: "kratom", label: "Kratom Teas", icon: Leaf },
  { id: "drinks", label: "Other Drinks", icon: Coffee },
  { id: "snacks", label: "Snacks & More", icon: Cookie },
];

interface MenuItem {
  name: string;
  description: string;
  price: string;
  tag?: string;
}

const menuItems: Record<string, MenuItem[]> = {
  kava: [
    { name: "Traditional Kava Shell", description: "Classic kava prepared the traditional way — earthy, smooth, and grounding.", price: "$3", tag: "Popular" },
    { name: "Kava Double Shell", description: "Double the relaxation. Two shells of our fresh-brewed traditional kava.", price: "$5" },
    { name: "Kava Quad", description: "Four shells for the seasoned kava drinker. Maximum chill.", price: "$10" },
    { name: "All-You-Can-Drink Kava", description: "Unlimited traditional kava for your entire visit. Best value in town.", price: "$20", tag: "Best Value" },
    { name: "Kava by the Gallon", description: "Take the kava home with you. Perfect for sharing or stocking up.", price: "Ask" },
    { name: "Flavored Kava on Tap", description: "House-made flavored kava from our taps — brewed fresh in-house daily.", price: "$6" },
  ],
  kratom: [
    { name: "Kratom Tea (Hot)", description: "Freshly brewed kratom tea served hot. Choose your strain.", price: "$7" },
    { name: "Kratom Tea (Iced)", description: "Refreshing iced kratom tea — perfect for Florida weather.", price: "$7" },
    { name: "Kratom Tea (Special Days)", description: "Available Mon, Wed, Fri at the special price. Same great quality.", price: "$5", tag: "M/W/F Special" },
    { name: "Kratom Shots", description: "Concentrated kratom extract for a quick, convenient boost.", price: "Ask" },
  ],
  drinks: [
    { name: "Hot Cocoa", description: "Rich, warming hot cocoa — a cozy alternative to kava.", price: "$4" },
    { name: "Herbal Tea", description: "Selection of herbal teas for a lighter, caffeine-free option.", price: "$4" },
    { name: "Bottled Drinks", description: "Water, sodas, and other bottled beverages available.", price: "$2+" },
  ],
  snacks: [
    { name: "Chips & Snacks", description: "Assorted chips and packaged snacks to munch on.", price: "$2+" },
    { name: "Candy & Treats", description: "Sweet treats to complement your kava experience.", price: "$1+" },
  ],
};

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState("kava");

  return (
    <section id="menu" className="bg-earth-cream py-20 sm:py-28">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-earth-green/10 text-earth-green rounded-full text-sm font-medium mb-4">
            <Leaf className="w-4 h-4" />
            Our Menu
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-earth-brown mb-4">
            Crafted With
            <span className="text-earth-green"> Care</span>
          </h2>
          <p className="font-body text-earth-brown-light text-lg max-w-xl mx-auto">
            From traditional kava shells to kratom teas and more — everything is prepared fresh with quality ingredients.
          </p>
        </motion.div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-medium text-sm transition-all duration-300 ${
                activeCategory === cat.id
                  ? "bg-earth-green text-white shadow-md shadow-earth-green/20"
                  : "bg-earth-linen text-earth-brown-light hover:bg-earth-green/10 hover:text-earth-green"
              }`}
            >
              <cat.icon className="w-4 h-4" />
              {cat.label}
            </button>
          ))}
        </div>

        {/* Menu Items */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="max-w-3xl mx-auto"
          >
            <div className="space-y-3">
              {menuItems[activeCategory]?.map((item, i) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                  className="group flex items-start justify-between gap-4 p-5 rounded-xl bg-earth-linen/60 hover:bg-earth-linen transition-colors border border-transparent hover:border-earth-green/10"
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-display text-lg font-bold text-earth-brown group-hover:text-earth-green transition-colors">
                        {item.name}
                      </h3>
                      {item.tag && (
                        <span className="px-2 py-0.5 bg-earth-terracotta/10 text-earth-terracotta text-xs font-bold rounded-full">
                          {item.tag}
                        </span>
                      )}
                    </div>
                    <p className="font-body text-earth-brown-light text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                  <span className="font-display text-xl font-bold text-earth-terracotta whitespace-nowrap">
                    {item.price}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-8 text-sm text-earth-brown-light font-body"
        >
          Prices may vary. Ask your kavatender for today's full selection and any additional specials.
        </motion.p>
      </div>
    </section>
  );
}
