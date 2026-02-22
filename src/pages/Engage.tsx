import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Building2, Users2, Globe, Briefcase } from "lucide-react";

const options = [
  {
    icon: Building2,
    title: "Partner as Investor",
    description:
      "Provide investment capital or contract funding to support program implementation and scale.",
    audience: "Foundations, DFIs, Impact Investors, Development Partners",
  },
  {
    icon: Users2,
    title: "Partner as Implementer",
    description:
      "Collaborate on program delivery, provide technical assistance, or co-create training content.",
    audience: "Development Organizations, Technical Partners, Training Institutions",
  },
  {
    icon: Globe,
    title: "Partner as Government",
    description:
      "Align with national policy, co-invest in infrastructure, or integrate with public systems.",
    audience: "Ministries, Government Agencies, Regional Bodies",
  },
  {
    icon: Briefcase,
    title: "Partner as Our Next Venture",
    description:
      "Employ, train, and mentor our youth. Be part of our workforce pipeline and help shape the next generation of innovators.",
    audience: "Employers, Corporates, Startups, Industry Leaders",
  },
];

const Engage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-card to-background py-20 lg:py-28">
        <div className="container mx-auto px-6 text-center">
          <motion.span
            className="mb-3 inline-block text-sm font-semibold uppercase tracking-widest text-primary"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            How to Engage
          </motion.span>
          <motion.h1
            className="font-heading text-4xl font-bold text-foreground sm:text-5xl lg:text-6xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            Partnership{" "}
            <span className="text-gradient-amber">Options</span>
          </motion.h1>
          <motion.p
            className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Multiple pathways to support and collaborate with AlikoHub.
          </motion.p>
        </div>
      </section>

      {/* Cards */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-6">
          <div className="grid gap-8 sm:grid-cols-2">
            {options.map((opt, i) => (
              <motion.div
                key={opt.title}
                className="group rounded-2xl border border-border/60 bg-card p-8 shadow-sm transition-shadow duration-300 hover:shadow-md"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <opt.icon className="h-6 w-6" />
                </div>
                <h3 className="font-heading text-xl font-bold text-foreground">
                  {opt.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {opt.description}
                </p>
                <p className="mt-4 text-sm font-medium text-primary">
                  For: {opt.audience}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Engage;
