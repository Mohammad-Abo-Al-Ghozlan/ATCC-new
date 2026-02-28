"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import {
  Layers,
  Route,
  Factory,
  PaintBucket,
  Columns3,
  Mountain,
  Droplets,
  TreePine,
} from "lucide-react"

const services = [
  {
    icon: Layers,
    title: "Concrete Works",
    description:
      "High-strength concrete solutions for foundations, structural elements, and specialized projects using advanced mixing technology.",
  },
  {
    icon: Route,
    title: "Asphalt Works",
    description:
      "Premium road construction and asphalt paving with precision grading, lasting durability, and smooth finishes.",
  },
  {
    icon: Factory,
    title: "Industrial Works",
    description:
      "Large-scale industrial facility construction including warehouses, factories, and processing plants.",
  },
  {
    icon: PaintBucket,
    title: "Finishing Works",
    description:
      "Interior and exterior finishing services delivering premium aesthetics and long-lasting quality.",
  },
  {
    icon: Columns3,
    title: "Steel Structure Works",
    description:
      "Engineered steel frameworks for commercial, industrial, and infrastructure projects with precision fabrication.",
  },
  {
    icon: Mountain,
    title: "Earth Works",
    description:
      "Site preparation, excavation, grading, and earthmoving operations with modern heavy equipment fleet.",
  },
  {
    icon: Droplets,
    title: "Plumbing & Fire Fighting",
    description:
      "Complete MEP systems including plumbing, drainage, fire suppression, and safety installations.",
  },
  {
    icon: TreePine,
    title: "Landscape Works",
    description:
      "Professional landscaping, hardscaping, and outdoor space development for commercial properties.",
  },
]

export default function Services() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  return (
    <section id="services" ref={sectionRef} className="relative py-32 lg:py-40 bg-secondary">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-6"
        >
          <span className="text-xs font-semibold tracking-[0.3em] uppercase text-primary">
            What We Do
          </span>
          <div className="mt-2 h-px w-16 bg-primary" />
        </motion.div>

        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16 gap-6">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground leading-tight max-w-xl"
          >
            Comprehensive
            <span className="text-primary"> Construction </span>
            Services
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-muted-foreground max-w-md leading-relaxed"
          >
            From groundwork to final finishes, we deliver end-to-end construction
            solutions built on engineering excellence.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
          {services.map((service, i) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.05 }}
                className="bg-background p-8 group hover:bg-card transition-colors duration-500 relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 h-0.5 w-0 bg-primary group-hover:w-full transition-all duration-500" />
                <Icon className="h-8 w-8 text-primary mb-6 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-lg font-bold text-foreground mb-3 tracking-tight">
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
