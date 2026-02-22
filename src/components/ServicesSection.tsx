import { motion } from "framer-motion";
import { GraduationCap, Globe2, HardHat, CalendarDays, ArrowUpRight } from "lucide-react";

import serviceAcademy from "@/assets/service-academy.jpg";
import serviceConsultancy from "@/assets/service-consultancy.png";
import serviceContech from "@/assets/service-contech.png";
import serviceEvents from "@/assets/service-events.jpg";

const services = [
  {
    title: "TRAIN — Aliko Academy",
    description:
      "Market-aligned certification in AI, data analytics, cloud computing, Digital Health, One Health, STEM, and engineering — preparing youth for real labor market needs.",
    icon: GraduationCap,
    image: serviceAcademy,
    link: "https://academy.alikohub.com/",
  },
  {
    title: "GUIDE — Aliko Consultancy",
    description:
      "Personalized mentorship, career advisory, exam and interview preparation, skill assessment, and resume building — helping youth navigate complex systems with confidence.",
    icon: Globe2,
    image: serviceConsultancy,
    link: "#",
  },
  {
    title: "CONNECT — Aliko Events",
    description:
      "Employer and talent matchmaking, investor forums, government partnerships, innovation challenges, and hackathons — linking youth to real opportunity.",
    icon: CalendarDays,
    image: serviceEvents,
    link: "#",
  },
  {
    title: "SCALE — Innovation Hubs",
    description:
      "Regional hubs across 10 African countries with incubation, investor readiness, applied labs, and public–private partnerships that help youth-led enterprises grow.",
    icon: HardHat,
    image: serviceContech,
    link: "#",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.5 },
  }),
};

export function ServicesSection() {
  return (
    <section id="services" className="relative py-24 lg:py-32">
      <div className="container mx-auto px-6">
        {/* Heading */}
        <motion.div
          className="mx-auto mb-16 max-w-2xl text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-widest text-primary">
            Our Services
          </span>
          <h2 className="font-heading text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
            One Ecosystem, <span className="text-gradient-amber">Four Pillars</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            A coordinated platform that teaches, guides, connects, and scales youth potential — where dignity, talent, and opportunity grow together.
          </p>
        </motion.div>

        {/* Service cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-2xl border border-border/50 bg-card transition-all duration-500 hover:border-primary/30 hover:shadow-[var(--shadow-card-hover)]"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
                <div className="absolute bottom-4 left-4 flex h-10 w-10 items-center justify-center rounded-xl bg-primary/20 backdrop-blur-sm">
                  <service.icon className="h-5 w-5 text-primary" />
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="font-heading text-lg font-semibold text-foreground">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground line-clamp-3">
                  {service.description}
                </p>
                <a
                  href={service.link}
                  target={service.link.startsWith("http") ? "_blank" : undefined}
                  rel={service.link.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary transition-all hover:gap-2"
                >
                  View site
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
