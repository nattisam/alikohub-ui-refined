import { motion } from "framer-motion";
import { GraduationCap, MapPin, Users, AlertTriangle, Leaf, Briefcase, TrendingUp, Target, Globe, Handshake, HeartPulse, Rocket } from "lucide-react";

const challenges = [
  {
    icon: GraduationCap,
    color: "orange" as const,
    title: "Education–Labor Market Disconnect",
    summary: "Young people often graduate with credentials but without practical experience.",
  },
  {
    icon: MapPin,
    color: "blue" as const,
    title: "Unequal Access to Quality Education",
    summary: "Opportunity is concentrated in urban centers, excluding rural youth.",
  },
  {
    icon: Users,
    color: "blue" as const,
    title: "Gender Inequality in STEM & Innovation",
    summary: "Young women remain underrepresented in technology and innovation leadership.",
  },
  {
    icon: AlertTriangle,
    color: "orange" as const,
    title: "Fragmented Innovation Ecosystems",
    summary: "Support systems for mentorship, financing, research, and scaling are disconnected.",
  },
  {
    icon: Leaf,
    color: "blue" as const,
    title: "Limited One Health & Climate Integration",
    summary: "Health and climate challenges are addressed in isolation.",
  },
  {
    icon: Briefcase,
    color: "blue" as const,
    title: "Youth Unemployment & Underemployment",
    summary: "Effort does not translate into opportunity for many young people.",
  },
];

const responses = [
  {
    icon: TrendingUp,
    label: "Employment Rate",
    value: "85%",
    description: "Target placement within 12 months",
    progress: 85,
  },
  {
    icon: Globe,
    label: "Regional Hubs",
    value: "10",
    description: "Distributed innovation centers with hybrid learning",
    progress: 60,
  },
  {
    icon: Target,
    label: "Female Participation",
    value: "45%+",
    description: "Minimum across all programs and tracks",
    progress: 45,
  },
  {
    icon: Handshake,
    label: "Partnerships",
    value: "15–25",
    description: "Public-private partnerships formalized per year",
    progress: 70,
  },
  {
    icon: HeartPulse,
    label: "SDG & Agenda 2063",
    value: "100%",
    description: "Alignment with climate and One Health frameworks",
    progress: 100,
  },
  {
    icon: Rocket,
    label: "Youth Trained",
    value: "50K",
    description: "Over 5 years with direct job pipelines",
    progress: 75,
  },
];

function ChallengeCard({ challenge, index }: { challenge: typeof challenges[0]; index: number }) {
  const isOrange = challenge.color === "orange";

  return (
    <motion.div
      className={`rounded-2xl border p-6 min-h-[180px] flex flex-col shadow-sm hover:shadow-md transition-shadow duration-300 ${
        isOrange
          ? "border-primary/30 bg-primary/5"
          : "border-accent/30 bg-accent/5"
      }`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08 }}
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
    </motion.div>
  );
}

function MetricCard({ item, index }: { item: typeof responses[0]; index: number }) {
  return (
    <motion.div
      className="rounded-2xl border border-primary/20 p-6 flex flex-col shadow-sm hover:shadow-md transition-shadow duration-300"
      style={{ background: "var(--gradient-card)" }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08 }}
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/15 text-primary">
          <item.icon className="h-5 w-5" />
        </div>
        <motion.span
          className="font-heading text-3xl font-bold text-primary"
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.08 + 0.2, type: "spring" }}
        >
          {item.value}
        </motion.span>
      </div>

      <h3 className="font-heading text-sm font-semibold uppercase tracking-wide text-foreground mb-1">
        {item.label}
      </h3>
      <p className="text-sm text-muted-foreground mb-4">{item.description}</p>

      {/* Progress bar */}
      <div className="mt-auto">
        <div className="h-2 w-full rounded-full bg-muted overflow-hidden">
          <motion.div
            className="h-full rounded-full bg-primary"
            initial={{ width: 0 }}
            whileInView={{ width: `${item.progress}%` }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08 + 0.3, duration: 0.8, ease: "easeOut" }}
          />
        </div>
      </div>
    </motion.div>
  );
}

export function ChallengesSection() {
  return (
    <section className="py-24 lg:py-32 bg-card/30">
      <div className="container mx-auto px-6">
        {/* Challenges */}
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
            Young people are not held back by a lack of ambition or talent, but by systems that have not kept pace with their realities.
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {challenges.map((challenge, i) => (
            <ChallengeCard key={challenge.title} challenge={challenge} index={i} />
          ))}
        </div>

        {/* AlikoHub Response - Visual Metrics */}
        <motion.div
          className="mx-auto mt-24 mb-16 max-w-2xl text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-widest text-primary">
            Our Response
          </span>
          <h2 className="font-heading text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
            How <span className="text-gradient-amber">AlikoHub</span> Responds
          </h2>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {responses.map((item, i) => (
            <MetricCard key={item.label} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
