import { motion } from "framer-motion";
import { GraduationCap, Globe2, HardHat, CalendarDays, ArrowUpRight } from "lucide-react";

import serviceAcademy from "@/assets/service-academy.jpg";
import serviceConsultancy from "@/assets/service-consultancy.png";
import serviceContech from "@/assets/service-contech.png";
import serviceEvents from "@/assets/service-events.jpg";

const services = [
  {
    title: "Aliko Academy",
    description:
      "Career-driven courses across Technology, Health, and Engineering/STEM. From data analytics to AI — build real-world skills.",
    icon: GraduationCap,
    image: serviceAcademy,
  },
  {
    title: "Aliko Consultancy",
    description:
      "End-to-end support for international students — university admissions, visa applications, document prep, and interview coaching.",
    icon: Globe2,
    image: serviceConsultancy,
  },
  {
    title: "Aliko Con-Tech",
    description:
      "Digital innovation for construction — real-time project management, contract handling, inventory tracking, and client portals.",
    icon: HardHat,
    image: serviceContech,
  },
  {
    title: "Aliko Events",
    description:
      "Curated events connecting innovators, industry leaders, and learners across Africa and beyond.",
    icon: CalendarDays,
    image: serviceEvents,
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
            One Platform, <span className="text-gradient-amber">Four Pillars</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Building Africa's digital future — uniting education, consultancy, construction tech, and events.
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
                  href="#"
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
