"use client"

import { useRef, useState } from "react"
import { motion, useInView, AnimatePresence } from "framer-motion"
import { projects } from "@/lib/project-data"
import ProjectCard from "@/components/project-card"
import ProjectGallery from "@/components/project-gallery"

export default function Projects() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)

  return (
    <>
      <section id="projects" ref={sectionRef} className="relative py-32 lg:py-40">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <span className="text-xs font-semibold tracking-[0.3em] uppercase text-primary">
              Our Work
            </span>
            <div className="mt-2 h-px w-16 bg-primary" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground leading-tight mb-16 max-w-xl"
          >
            Featured
            <span className="text-primary"> Projects</span>
          </motion.h2>

          {/* Project Grid */}
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
            {projects.map((project, i) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={i}
                isInView={isInView}
                onOpen={() => setSelectedIndex(i)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Modal */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <ProjectGallery
            project={projects[selectedIndex]}
            onClose={() => setSelectedIndex(null)}
          />
        )}
      </AnimatePresence>
    </>
  )
}
