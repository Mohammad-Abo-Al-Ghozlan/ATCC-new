"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { ShieldCheck, Users, Cpu, HardHat, Award } from "lucide-react"

const reasons = [
  {
    icon: Users,
    title: "Expert Engineering Team",
    description:
      "Highly qualified engineers and project managers with decades of combined experience in mega infrastructure projects.",
  },
  {
    icon: Cpu,
    title: "Modern Equipment",
    description:
      "State-of-the-art construction machinery and technology ensuring precision, efficiency, and timely project delivery.",
  },
  {
    icon: Award,
    title: "International Standards",
    description:
      "All projects adhere to ISO quality management standards and international building codes for unmatched reliability.",
  },
  {
    icon: HardHat,
    title: "Safety Commitment",
    description:
      "Zero-compromise safety culture with comprehensive HSE programs, regular audits, and industry-leading safety records.",
  },
  {
    icon: ShieldCheck,
    title: "Innovation-Driven Execution",
    description:
      "Leveraging advanced construction methods, BIM technology, and sustainable practices to push boundaries.",
  },
]

export default function WhyATCC() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  return (
    <section id="why-atcc" ref={sectionRef} className="relative py-32 lg:py-40 bg-secondary">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-6"
        >
          <span className="text-xs font-semibold tracking-[0.3em] uppercase text-primary">
            Our Edge
          </span>
          <div className="mt-2 h-px w-16 bg-primary" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground leading-tight mb-16 max-w-xl"
        >
          Why Choose
          <span className="text-primary"> ATCC</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, i) => {
            const Icon = reason.icon
            return (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.15 + i * 0.08 }}
                className="group relative border border-border bg-background p-8 hover:border-primary/30 transition-all duration-500"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="h-12 w-12 bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-5xl font-extrabold text-border group-hover:text-border/70 transition-colors">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                </div>
                <h3 className="text-lg font-bold text-foreground mb-3 tracking-tight">
                  {reason.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {reason.description}
                </p>
              </motion.div>
            )
          })}

          {/* Quality Badge */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="border border-primary/30 bg-primary/5 p-8 flex flex-col items-center justify-center text-center"
          >
            <div className="h-16 w-16 border-2 border-primary flex items-center justify-center mb-4">
              <span className="text-primary font-extrabold text-2xl">ISO</span>
            </div>
            <h3 className="text-lg font-bold text-foreground mb-2">
              Quality Certified
            </h3>
            <p className="text-sm text-muted-foreground">
              International quality management systems applied across all projects
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
