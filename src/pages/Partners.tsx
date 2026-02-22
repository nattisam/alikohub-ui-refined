import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Landmark, Building2, GraduationCap, Globe, Users, Lightbulb, HeartHandshake } from "lucide-react";

const categories = [
  {
    icon: Landmark,
    title: "Government Ministries & Agencies",
    description: "Policy alignment, accreditation, and national rollout support — providing legitimacy, scale, and integration with national strategies.",
  },
  {
    icon: Building2,
    title: "Private Sector Companies",
    description: "Mentorship, internships, job placement, and innovation challenges — creating employment pathways, industry relevance, and co-financing.",
  },
  {
    icon: GraduationCap,
    title: "Academic & Training Institutions",
    description: "Curriculum co-development, certification, and research collaboration — ensuring quality assurance, academic rigor, and global recognition.",
  },
  {
    icon: Globe,
    title: "Development Partners & Donors",
    description: "Funding, technical assistance, and global networks — enabling resource mobilization, innovation, and MEL strengthening.",
  },
  {
    icon: Users,
    title: "Community-Based Organizations",
    description: "Youth outreach, local mobilization, and inclusion of marginalized groups — building trust, retention, and Leave No One Behind implementation.",
  },
  {
    icon: HeartHandshake,
    title: "Global Health & One Health Networks",
    description: "Technical expertise, research, and cross-border collaboration — integrating climate resilience, zoonotic risks, and global best practices.",
  },
  {
    icon: Lightbulb,
    title: "Entrepreneurship & Innovation Ecosystem",
    description: "Incubation, acceleration, and venture support — enabling startup growth, investment readiness, and reinvestment pathways.",
  },
];

const Partners = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-6">
          <motion.div
            className="mx-auto mb-16 max-w-2xl text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-widest text-primary">
              Partnership Strategy
            </span>
            <h1 className="font-heading text-4xl font-bold text-foreground sm:text-5xl">
              Multi-Sector <span className="text-gradient-amber">Collaboration</span>
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Strong partnerships with government, private sector, academia, and development partners to maximize youth impact across all hub countries.
            </p>
          </motion.div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((cat, i) => (
              <motion.div
                key={cat.title}
                className="group rounded-2xl border border-border/50 p-6 transition-all duration-300 hover:border-primary/30 hover:shadow-[var(--shadow-card-hover)] hover:scale-[1.02]"
                style={{ background: "var(--gradient-card)" }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <cat.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-heading text-lg font-semibold text-foreground">{cat.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{cat.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Partners;
