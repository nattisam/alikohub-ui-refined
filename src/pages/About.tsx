import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Target, Sparkles, Globe, Users, BookOpen, Lightbulb } from "lucide-react";

const differentiators = [
  { icon: BookOpen, text: "Learning and application linked directly to employment and enterprise" },
  { icon: Users, text: "People and systems — youth, institutions, markets, and policy actors connected" },
  { icon: Globe, text: "Local relevance with continental vision through regionally grounded hubs" },
  { icon: Target, text: "Human values paired with measurable results — dignity with data and accountability" },
  { icon: Lightbulb, text: "Aliko LMS hosting 30+ market-aligned courses designed with employer expectations" },
  { icon: Sparkles, text: "Global mentorship network spanning Africa, the United States, and Canada" },
];

const timeline = [
  {
    phase: "Phase 1",
    years: "Years 1–2",
    title: "Ecosystem Establishment",
    items: [
      "Launch Regional Innovation Hubs",
      "Deploy Aliko LMS and hybrid learning system",
      "Build partnerships with universities, ministries, and private sector",
      "Establish MEL systems",
    ],
  },
  {
    phase: "Phase 2",
    years: "Years 3–4",
    title: "Consolidation & Evidence",
    items: [
      "Identify high-performing hubs based on outcomes",
      "Strengthen applied research and innovation incubation",
      "Publish policy briefs and workforce impact reports",
      "Deepen public–private partnerships",
    ],
  },
  {
    phase: "Phase 3",
    years: "Year 5+",
    title: "Centers of Excellence",
    items: [
      "Designate selected hubs as regional Centers of Excellence",
      "Support governments with advisory and replication models",
      "Serve as knowledge and innovation anchors",
      "Strengthen global pathways across continents",
    ],
  },
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Who We Are */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-6">
          <motion.div
            className="mx-auto max-w-3xl text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-widest text-primary">
              Who We Are
            </span>
            <h1 className="font-heading text-4xl font-bold text-foreground sm:text-5xl lg:text-6xl">
              A Pan-African Youth{" "}
              <span className="text-gradient-amber">Empowerment Ecosystem</span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              AlikoHub is designed to unlock human potential where opportunity has historically been uneven. Rooted in dignity, compassion, and systems thinking, we bring together education, innovation, employment pathways, and partnerships to enable young people to thrive as contributors, leaders, and problem solvers.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              Established in 2025 as a sister company to Genshifter Technologies, AlikoHub operates at the intersection of Digital Health, One Health, STEM, and entrepreneurship. We do not view young people as beneficiaries — they are co-creators of Africa's future.
            </p>
          </motion.div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="py-24 lg:py-32 bg-card/50">
        <div className="container mx-auto px-6">
          <motion.div
            className="mx-auto mb-16 max-w-2xl text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-widest text-primary">
              Our Approach
            </span>
            <h2 className="font-heading text-3xl font-bold text-foreground sm:text-4xl">
              What Makes AlikoHub <span className="text-gradient-amber">Different</span>
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Our ecosystem approach integrates learning, innovation, and opportunity into a single, coherent model.
            </p>
          </motion.div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {differentiators.map((item, i) => (
              <motion.div
                key={i}
                className="group rounded-2xl border border-border/50 p-6 transition-all duration-300 hover:border-primary/30 hover:shadow-[var(--shadow-card-hover)] hover:scale-[1.02]"
                style={{ background: "var(--gradient-card)" }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pathway to Centers of Excellence */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-6">
          <motion.div
            className="mx-auto mb-16 max-w-2xl text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-widest text-primary">
              Our Journey
            </span>
            <h2 className="font-heading text-3xl font-bold text-foreground sm:text-4xl">
              Pathway to <span className="text-gradient-amber">Centers of Excellence</span>
            </h2>
          </motion.div>

          <div className="grid gap-8 lg:grid-cols-3">
            {timeline.map((phase, i) => (
              <motion.div
                key={phase.phase}
                className="relative rounded-2xl border border-border/50 p-8 transition-all duration-300 hover:border-primary/30 hover:shadow-[var(--shadow-card-hover)]"
                style={{ background: "var(--gradient-card)" }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
              >
                <div className="mb-2 inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                  {phase.phase} · {phase.years}
                </div>
                <h3 className="font-heading text-xl font-bold text-foreground mb-4">{phase.title}</h3>
                <ul className="space-y-2">
                  {phase.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
