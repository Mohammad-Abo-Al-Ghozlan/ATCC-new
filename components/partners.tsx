"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { asset } from "@/lib/config"

const partners = [
  { name: "ARCO Construction", logo: asset("/assets/contributes/arco.jpeg") },
  { name: "ASG Group", logo: asset("/assets/contributes/asg.jpeg") },
  { name: "COBRA Engineering", logo: asset("/assets/contributes/cobra.jpeg") },
  { name: "Jada Tatweer", logo: asset("/assets/contributes/jada-tatweer.jpeg") },
  { name: "Al Areef", logo: asset("/assets/contributes/l5areef.jpeg") },
  { name: "May Del", logo: asset("/assets/contributes/may-del.jpeg") },
  { name: "Rayis", logo: asset("/assets/contributes/rayis.jpeg") },
  { name: "SA Kharaba", logo: asset("/assets/contributes/sa-khrba.jpeg") },
  { name: "Sama China", logo: asset("/assets/contributes/sama-china.jpeg") },
  { name: "Sama", logo: asset("/assets/contributes/sama.jpeg") },
  { name: "Tedagua", logo: asset("/assets/contributes/tedagua.jpeg") },
  { name: "NEOM", logo: asset("/assets/contributes/neom.jpeg") },
  { name: "NWC", logo: asset("/assets/contributes/NWC.jpeg") },
]

export default function Partners() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  return (
    <section ref={sectionRef} className="relative py-24 bg-secondary border-y border-border overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="text-xs font-semibold tracking-[0.3em] uppercase text-primary">
            Trusted By Industry Leaders
          </span>
        </motion.div>
      </div>

      {/* Marquee */}
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-secondary to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-secondary to-transparent z-10" />

        <div className="flex animate-marquee-fast">
          {[...partners, ...partners].map((partner, i) => (
            <div
              key={`${partner.name}-${i}`}
              className="flex-shrink-0 mx-6 flex items-center"
            >
              <div className="p-3 border border-border bg-background/50 hover:border-primary/30 transition-colors rounded-sm">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="h-14 w-24 object-contain"
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
