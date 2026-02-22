import { motion } from "framer-motion";

const cards = [
  {
    title: "Transforming Key Sectors",
    text: "Digitize construction processes and deliver personalized educational consulting.",
    bg: "bg-[hsl(210,40%,88%)]",
    textColor: "text-[hsl(210,60%,25%)]",
    span: "col-span-1",
    rowSpan: "",
  },
  {
    title: "Inclusive and Sustainable Growth",
    text: "Leverage technology to drive long-term development.",
    bg: "bg-[hsl(190,60%,78%)]",
    textColor: "text-[hsl(190,70%,20%)]",
    span: "col-span-1",
    rowSpan: "",
  },
  {
    title: "Vision",
    text: "AlikoHub envisions leading Africa's digital transformation by innovating in construction, education, and consulting while fostering inclusive, sustainable progress.",
    bg: "bg-[hsl(40,85%,75%)]",
    textColor: "text-[hsl(30,70%,20%)]",
    span: "col-span-1",
    rowSpan: "row-span-2",
  },
  {
    title: "Mission",
    text: "AlikoHub's mission is to digitally empower African individuals and communities by bridging global opportunities and driving innovation.",
    bg: "bg-[hsl(20,80%,75%)]",
    textColor: "text-[hsl(20,60%,20%)]",
    span: "col-span-2",
    rowSpan: "row-span-1",
  },
  {
    title: "Empowerment Through Innovation",
    text: "Foster inclusive growth and collaboration by enabling access to transformative digital solutions.",
    bg: "bg-[hsl(25,70%,82%)]",
    textColor: "text-[hsl(25,60%,22%)]",
    span: "col-span-1",
    rowSpan: "",
  },
  {
    title: "Connecting Africa to the World",
    text: "Build a seamless digital hub that links Africa with global opportunities.",
    bg: "bg-[hsl(210,50%,82%)]",
    textColor: "text-[hsl(210,60%,22%)]",
    span: "col-span-1",
    rowSpan: "",
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

        {/* Bento grid matching the reference design */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[minmax(180px,auto)]">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              className={`${card.bg} ${card.span} ${card.rowSpan} rounded-2xl p-8 flex flex-col justify-end relative overflow-hidden transition-transform duration-300 hover:scale-[1.02]`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              {/* Diagonal line texture */}
              <div
                className="absolute inset-0 opacity-[0.08] pointer-events-none"
                style={{
                  backgroundImage: `repeating-linear-gradient(
                    135deg,
                    currentColor 0px,
                    currentColor 1px,
                    transparent 1px,
                    transparent 12px
                  )`,
                }}
              />
              <div className="relative z-10">
                <h3 className={`font-heading text-xl md:text-2xl font-bold ${card.textColor} mb-3`}>
                  {card.title}
                </h3>
                <p className={`text-sm md:text-base leading-relaxed ${card.textColor} opacity-80`}>
                  {card.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
