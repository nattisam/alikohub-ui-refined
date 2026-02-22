import { motion } from "framer-motion";
import { GraduationCap, Compass, Plug, Rocket } from "lucide-react";

const steps = [
  {
    icon: GraduationCap,
    title: "TRAIN",
    description: "Market-aligned skills through Aliko Academy's certification programs and applied learning.",
  },
  {
    icon: Compass,
    title: "GUIDE",
    description: "Mentorship, career advisory, and professional development through Aliko Consultancy.",
  },
  {
    icon: Plug,
    title: "CONNECT",
    description: "Employer matchmaking, investor forums, and innovation challenges through Aliko Events.",
  },
  {
    icon: Rocket,
    title: "SCALE",
    description: "Partnerships that enable youth-led enterprises and regional hubs to grow across borders.",
  },
];

export function EcosystemFlow() {
  return (
    <section className="py-24 lg:py-32 bg-card/30">
      <div className="container mx-auto px-6">
        <motion.div
          className="mx-auto mb-16 max-w-2xl text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-widest text-primary">
            Our Model
          </span>
          <h2 className="font-heading text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
            The Resourcefulness <span className="text-gradient-amber">Ecosystem</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            A four-part journey from learning to leadership — integrated, human-centered, and designed for scale.
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              className="group relative rounded-2xl border border-border/50 p-6 text-center transition-all duration-300 hover:border-primary/30 hover:shadow-[var(--shadow-card-hover)] hover:scale-[1.02]"
              style={{ background: "var(--gradient-card)" }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
            >
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                <step.icon className="h-7 w-7 text-primary" />
              </div>
              <div className="inline-flex items-center gap-1 rounded-full bg-primary/10 px-3 py-1 text-xs font-bold text-primary mb-3">
                {`0${i + 1}`}
              </div>
              <h3 className="font-heading text-xl font-bold text-foreground">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.description}</p>
              {i < steps.length - 1 && (
                <div className="absolute -right-3 top-1/2 -translate-y-1/2 hidden text-primary/40 lg:block text-2xl">
                  →
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
