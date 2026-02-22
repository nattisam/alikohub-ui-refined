import { motion } from "framer-motion";
import { GraduationCap, Globe2, HardHat, CalendarDays, Droplets, ArrowUpRight } from "lucide-react";

import serviceAcademy from "@/assets/service-academy.jpg";
import serviceConsultancy from "@/assets/service-consultancy.png";
import serviceContech from "@/assets/service-contech.png";
import serviceEvents from "@/assets/service-events.jpg";
import serviceAlikowash from "@/assets/service-alikowash.png";

const services = [
  {
    title: "Aliko Academy",
    description:
      "Workforce development and certification pathways aligned with global labor markets.",
    icon: GraduationCap,
    image: serviceAcademy,
    link: "https://academy.alikohub.com/",
  },
  {
    title: "Aliko Consultancy",
    description:
      "Career advisory, professional development, and global mentorship services.",
    icon: Globe2,
    image: serviceConsultancy,
    link: "#",
  },
  {
    title: "Aliko Events",
    description:
      "Industry matchmaking, innovation forums, and ecosystem-building engagements.",
    icon: CalendarDays,
    image: serviceEvents,
    link: "#",
  },
  {
    title: "Aliko Engineering Technology",
    description:
      "Applied engineering, digital infrastructure, and technology-driven solutions.",
    icon: HardHat,
    image: serviceContech,
    link: "#",
  },
  {
    title: "Aliko WASH",
    description:
      "Water, sanitation, and hygiene solutions driving public health impact and community resilience across Africa.",
    icon: Droplets,
    image: serviceAlikowash,
    link: "https://alikowash.lovable.app/",
    darkOverlay: true,
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
    <section id="ventures" className="relative py-24 lg:py-32">
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
            AlikoHub Ventures
          </span>
          <h2 className="font-heading text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
            Our <span className="text-gradient-amber">Ventures</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Independent operating companies powering the AlikoHub ecosystem and driving sustainable impact across Digital Health, STEM, innovation, and enterprise.
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
                <div className={`absolute inset-0 ${(service as any).darkOverlay ? 'bg-gradient-to-t from-card via-card/70 to-card/40' : 'bg-gradient-to-t from-card via-card/50 to-transparent'}`} />
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
