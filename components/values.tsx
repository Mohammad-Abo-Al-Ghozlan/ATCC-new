"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import {
  Shield,
  Award,
  Lightbulb,
  Lock,
  Heart,
  Scale,
  Leaf,
} from "lucide-react"

const values = [
  { icon: Shield, title: "Integrity", description: "Transparent, honest, and ethical in every interaction and project." },
  { icon: Award, title: "Excellence", description: "Relentless pursuit of the highest standards in every deliverable." },
  { icon: Lightbulb, title: "Innovation", description: "Embracing new technologies and methods for superior outcomes." },
  { icon: Lock, title: "Confidentiality", description: "Protecting our clients' information and proprietary details." },
  { icon: Heart, title: "Customer Satisfaction", description: "Placing client needs at the core of every decision we make." },
  { icon: Scale, title: "Ethical Leadership", description: "Leading with principle, fairness, and accountability." },
  { icon: Leaf, title: "Sustainability", description: "Building responsibly for a better, greener tomorrow." },
]

export default function Values() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  return (
    <section id="values" ref={sectionRef} className="relative py-32 lg:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs font-semibold tracking-[0.3em] uppercase text-primary">
              Our Foundation
            </span>
            <div className="mt-2 mx-auto h-px w-16 bg-primary" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mt-6 text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground"
          >
            Core <span className="text-primary">Values</span>
          </motion.h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, i) => {
            const Icon = value.icon
            return (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.06 }}
                className="group text-center p-8 border border-border hover:border-primary/30 bg-card hover:bg-secondary transition-all duration-500"
              >
                <div className="mx-auto h-14 w-14 flex items-center justify-center border border-primary/20 group-hover:border-primary/50 group-hover:bg-primary/10 transition-all duration-300 mb-6">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-base font-bold text-foreground mb-2 tracking-tight">
                  {value.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
