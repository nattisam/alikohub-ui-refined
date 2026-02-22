import { motion } from "framer-motion";
import { BookOpen, Globe, Building2, Users } from "lucide-react";
import impactImg from "@/assets/impact-illustration.svg";

const stats = [
  { label: "Industry-Ready Tech Courses", value: "30+", icon: BookOpen },
  { label: "Global Visas Processed", value: "4,000+", icon: Globe },
  { label: "Projects Digitally Managed", value: "23+", icon: Building2 },
  { label: "Partner Satisfaction Rate", value: "90%", icon: Users },
];

export function StatsSection() {
  return (
    <section id="impact" className="relative py-24 lg:py-32">
      {/* Subtle glow */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-primary/5 blur-[120px]" />

      <div className="container relative mx-auto px-6">
        <motion.div
          className="mx-auto mb-16 max-w-2xl text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-widest text-primary">
            Our Impact
          </span>
          <h2 className="font-heading text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
            Real Impact, <span className="text-gradient-amber">Real Results</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            From student success to smarter construction — AlikoHub is making digital progress visible.
          </p>
        </motion.div>

        <div className="flex flex-col items-center gap-16 lg:flex-row">
          {/* Stats grid */}
          <div className="grid flex-1 grid-cols-2 gap-6">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                className="group rounded-2xl border border-border/50 bg-card p-6 text-center transition-all duration-300 hover:border-primary/30 hover:shadow-[var(--shadow-card-hover)]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary/20">
                  <stat.icon className="h-6 w-6 text-primary" />
                </div>
                <div className="font-heading text-3xl font-bold text-foreground">{stat.value}</div>
                <div className="mt-1 text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          {/* Illustration */}
          <motion.div
            className="flex-1"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <img
              src={impactImg}
              alt="Social impact illustration"
              className="mx-auto max-w-sm animate-float"
              loading="lazy"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
