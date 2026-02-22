import { motion } from "framer-motion";
import { GraduationCap, MapPin, Users, AlertTriangle, Leaf, Briefcase } from "lucide-react";
import { useState } from "react";

const challenges = [
  {
    icon: GraduationCap,
    color: "orange" as const,
    title: "Education–Labor Market Disconnect",
    summary: "Young people often graduate with credentials but without practical experience.",
    detail: "AlikoHub delivers market-aligned, co-designed training with applied labs, internships, and real project deployment.",
    metrics: ["85% employment target within 12 months", "150+ mentors engaged annually"],
  },
  {
    icon: MapPin,
    color: "blue" as const,
    title: "Unequal Access to Quality Education",
    summary: "Opportunity is concentrated in urban centers, excluding rural youth.",
    detail: "AlikoHub responds through hybrid learning and regionally distributed innovation hubs with targeted stipends and scholarships.",
    metrics: ["10 Regional Innovation Hubs", "Hybrid learning for maximum reach"],
  },
  {
    icon: Users,
    color: "blue" as const,
    title: "Gender Inequality in STEM & Innovation",
    summary: "Young women remain underrepresented in technology and innovation leadership.",
    detail: "AlikoHub builds gender-responsive pathways through structured mentorship, safe learning environments, and leadership tracks.",
    metrics: ["45% minimum female participation", "100% gender-disaggregated reporting"],
  },
  {
    icon: AlertTriangle,
    color: "orange" as const,
    title: "Fragmented Innovation Ecosystems",
    summary: "Support systems for mentorship, financing, research, and scaling are disconnected.",
    detail: "AlikoHub brings training, innovation, capital, and partnerships into coordinated regional hubs via a one-window model.",
    metrics: ["50 youth-led enterprises launched", "15–25 PPPs formalized per year"],
  },
  {
    icon: Leaf,
    color: "blue" as const,
    title: "Limited One Health & Climate Integration",
    summary: "Health and climate challenges are addressed in isolation.",
    detail: "AlikoHub embeds One Health and climate-linked competencies into training, applied research, and innovation challenges.",
    metrics: ["100% aligned with Agenda 2063 & SDGs", "Climate & zoonotic monitoring integration"],
  },
  {
    icon: Briefcase,
    color: "blue" as const,
    title: "Youth Unemployment & Underemployment",
    summary: "Effort does not translate into opportunity for many young people.",
    detail: "AlikoHub connects skills to livelihoods through entrepreneurship support, employer matchmaking, and innovation pathways.",
    metrics: ["50,000 youth targeted", "25–40 youth enterprises supported"],
  },
];

function ChallengeCard({ challenge, index }: { challenge: typeof challenges[0]; index: number }) {
  const [flipped, setFlipped] = useState(false);
  const isOrange = challenge.color === "orange";

  return (
    <motion.div
      className="group relative cursor-pointer"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08 }}
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
      onClick={() => setFlipped(!flipped)}
    >
      {/* Front */}
      <div
        className={`rounded-2xl border p-6 transition-all duration-300 min-h-[220px] flex flex-col ${
          flipped ? "opacity-0 pointer-events-none absolute inset-0" : "opacity-100"
        } ${
          isOrange
            ? "border-primary/30 bg-primary/5"
            : "border-accent/30 bg-accent/5"
        }`}
      >
        <div
          className={`mb-4 flex h-12 w-12 items-center justify-center rounded-full ${
            isOrange ? "bg-primary/15 text-primary" : "bg-accent/15 text-accent-foreground"
          }`}
        >
          <challenge.icon className="h-6 w-6" />
        </div>
        <h3 className={`font-heading text-lg font-bold ${isOrange ? "text-primary" : "text-foreground"}`}>
          {challenge.title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{challenge.summary}</p>
        <span className="mt-auto pt-3 text-xs text-muted-foreground/60">Hover for details</span>
      </div>

      {/* Back */}
      <div
        className={`rounded-2xl border border-primary/30 p-6 transition-all duration-300 min-h-[220px] flex flex-col ${
          flipped ? "opacity-100" : "opacity-0 pointer-events-none absolute inset-0"
        }`}
        style={{ background: "var(--gradient-card)" }}
      >
        <h3 className="font-heading text-lg font-bold text-primary mb-2">AlikoHub Response</h3>
        <p className="text-sm leading-relaxed text-muted-foreground mb-4">{challenge.detail}</p>
        <div className="mt-auto space-y-2">
          {challenge.metrics.map((m) => (
            <div key={m} className="flex items-center gap-2 text-sm font-medium text-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
              {m}
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export function ChallengesSection() {
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
            The Challenge
          </span>
          <h2 className="font-heading text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
            Systemic Challenges Require{" "}
            <span className="text-gradient-amber">Systemic Solutions</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            All six systemic barriers that AlikoHub will address through a coordinated, continental, and partnership-driven model.
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {challenges.map((challenge, i) => (
            <ChallengeCard key={challenge.title} challenge={challenge} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
