"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ArrowUpRight, Images } from "lucide-react"
import type { Project } from "@/lib/project-data"

interface ProjectCardProps {
  project: Project
  index: number
  isInView: boolean
  onOpen: () => void
}

const FALLBACK_IMAGE =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='600'%3E%3Crect width='800' height='600' fill='%23181818'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' fill='%23555' font-size='24' font-family='sans-serif'%3EImage unavailable%3C/text%3E%3C/svg%3E"

export default function ProjectCard({ project, index, isInView, onOpen }: ProjectCardProps) {
  const [imgError, setImgError] = useState(false)

  return (
    <motion.button
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.15 + index * 0.1 }}
      onClick={onOpen}
      className="group relative overflow-hidden aspect-[4/3] text-left cursor-pointer rounded-sm"
    >
      {/* Cover image */}
      <img
        src={imgError ? FALLBACK_IMAGE : project.coverImage}
        alt={project.title}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        loading="lazy"
        onError={() => setImgError(true)}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-end p-6 sm:p-8">
        <span className="text-xs font-semibold tracking-[0.2em] uppercase text-primary mb-2">
          {project.category}
        </span>
        <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-foreground tracking-tight group-hover:text-primary transition-colors duration-300 line-clamp-2">
          {project.title}
        </h3>

        {/* Tags */}
        <div className="mt-3 flex flex-wrap gap-2">
          {project.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="text-[10px] font-semibold tracking-wider uppercase px-2 py-0.5 border border-primary/30 text-primary/80"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Hover info */}
        <div className="mt-4 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>View Gallery</span>
            <ArrowUpRight className="h-4 w-4" />
          </div>
          <div className="flex items-center gap-1 text-xs text-muted-foreground">
            <Images className="h-3.5 w-3.5" />
            <span>{project.images.length} photos</span>
          </div>
        </div>
      </div>
    </motion.button>
  )
}
