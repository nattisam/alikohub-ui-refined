import { motion } from "framer-motion";
import { Target, Eye, Lightbulb, Globe } from "lucide-react";

const cards = [
  {
    icon: Target,
    title: "Our Mission",
    text: "Empower Africa's youth as capable and dignified agents of transformation through integrated Digital Health, One Health, STEM, and entrepreneurship pathways.",
  },
  {
    icon: Eye,
    title: "Our Vision",
    text: "Build a globally connected youth empowerment ecosystem where talent is matched with opportunity in ways that are equitable, scalable, and sustainable.",
  },
  {
    icon: Lightbulb,
    title: "What Makes Us Different",
    text: "A one-window resourcefulness ecosystem, not a traditional training center, where education, mentorship, capital, and opportunity converge.",
  },
  {
    icon: Globe,
    title: "Pan-African Reach",
    text: "10 regional innovation hubs across Africa with complementary pathways in the United States and Canada for global learning and innovation exchange.",
  },
];

export function MissionSection() {
  return (
    <section id="about" className="relative py-24 lg:py-32 bg-card/50">
      <div className="container mx-auto px-6">
        <motion.div
          className="mx-auto mb-16 max-w-2xl text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-widest text-primary">
            Who We Are
          </span>
          <h2 className="font-heading text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
            Who <span className="text-gradient-amber">We Are</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            A human-centered development model that links skills to opportunity, learning to livelihoods, and innovation to public value.
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              className="group relative rounded-2xl border border-border/50 p-6 transition-all duration-300 hover:border-primary/30"
              style={{ background: "var(--gradient-card)" }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                <card.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-heading text-lg font-semibold text-foreground">{card.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{card.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
