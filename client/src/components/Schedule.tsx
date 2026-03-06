import { motion } from "framer-motion";
import { Clock, Sun, Moon } from "lucide-react";

const schedule = [
  { day: "Monday", hours: "8:00 AM — 11:00 PM", isWeekend: false },
  { day: "Tuesday", hours: "8:00 AM — 11:00 PM", isWeekend: false },
  { day: "Wednesday", hours: "8:00 AM — 11:00 PM", isWeekend: false },
  { day: "Thursday", hours: "8:00 AM — 11:00 PM", isWeekend: false },
  { day: "Friday", hours: "8:00 AM — 12:00 AM", isWeekend: true },
  { day: "Saturday", hours: "9:00 AM — 12:00 AM", isWeekend: true },
  { day: "Sunday", hours: "9:00 AM — 11:00 PM", isWeekend: false },
];

function getCurrentDay() {
  return new Date().toLocaleDateString("en-US", { weekday: "long" });
}

export default function Schedule() {
  const today = getCurrentDay();

  return (
    <section id="schedule" className="bg-earth-green-dark py-20 sm:py-28 relative overflow-hidden">
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.3) 1px, transparent 0)`,
            backgroundSize: "40px 40px",
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
            <Clock className="w-4 h-4" />
            Hours & Schedule
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4">
            When We're
            <span className="text-earth-gold"> Open</span>
          </h2>
          <p className="font-body text-white/70 text-lg max-w-xl mx-auto">
            Open seven days a week. Late nights on Friday and Saturday. Come hang out anytime.
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          <div className="space-y-2">
            {schedule.map((item, i) => {
              const isToday = item.day === today;
              return (
                <motion.div
                  key={item.day}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                  className={`flex items-center justify-between p-4 sm:px-6 sm:py-4 rounded-xl transition-all ${
                    isToday
                      ? "bg-earth-gold/20 border border-earth-gold/30"
                      : "bg-white/5 hover:bg-white/8 border border-transparent"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    {item.isWeekend ? (
                      <Moon className={`w-4 h-4 ${isToday ? "text-earth-gold" : "text-earth-sage"}`} />
                    ) : (
                      <Sun className={`w-4 h-4 ${isToday ? "text-earth-gold" : "text-white/40"}`} />
                    )}
                    <span className={`font-display text-lg font-semibold ${
                      isToday ? "text-earth-gold" : "text-white"
                    }`}>
                      {item.day}
                    </span>
                    {isToday && (
                      <span className="px-2 py-0.5 bg-earth-gold text-earth-brown text-xs font-bold rounded-full">
                        Today
                      </span>
                    )}
                  </div>
                  <span className={`font-body text-sm sm:text-base font-medium ${
                    isToday ? "text-earth-gold" : "text-white/70"
                  }`}>
                    {item.hours}
                  </span>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-8 text-center"
          >
            <p className="text-white/50 text-sm font-body">
              Hours may vary on holidays. Follow us on social media for any schedule changes.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
