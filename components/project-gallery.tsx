"use client"

import { useState, useEffect, useCallback, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react"
import type { Project } from "@/lib/project-data"

interface ProjectGalleryProps {
  project: Project
  onClose: () => void
}

const FALLBACK_IMAGE =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='600'%3E%3Crect width='800' height='600' fill='%23181818'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' fill='%23555' font-size='24' font-family='sans-serif'%3EImage unavailable%3C/text%3E%3C/svg%3E"

export default function ProjectGallery({ project, onClose }: ProjectGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [failedImages, setFailedImages] = useState<Set<number>>(new Set())
  const [direction, setDirection] = useState(0)
  const thumbnailRef = useRef<HTMLDivElement>(null)

  const images = project.images

  const goTo = useCallback(
    (index: number) => {
      setDirection(index > currentIndex ? 1 : -1)
      setCurrentIndex(index)
    },
    [currentIndex]
  )

  const goNext = useCallback(() => {
    setDirection(1)
    setCurrentIndex((prev) => (prev + 1) % images.length)
  }, [images.length])

  const goPrev = useCallback(() => {
    setDirection(-1)
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
  }, [images.length])

  // Keyboard navigation
  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose()
      if (e.key === "ArrowRight") goNext()
      if (e.key === "ArrowLeft") goPrev()
    }
    window.addEventListener("keydown", handleKey)
    return () => window.removeEventListener("keydown", handleKey)
  }, [onClose, goNext, goPrev])

  // Lock body scroll
  useEffect(() => {
    document.body.style.overflow = "hidden"
    return () => {
      document.body.style.overflow = ""
    }
  }, [])

  // Scroll active thumbnail into view
  useEffect(() => {
    const track = thumbnailRef.current
    if (!track) return
    const activeThumb = track.children[currentIndex] as HTMLElement | undefined
    if (activeThumb) {
      activeThumb.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" })
    }
  }, [currentIndex])

  function handleImageError(index: number) {
    setFailedImages((prev) => new Set(prev).add(index))
  }

  const imageVariants = {
    enter: (dir: number) => ({ x: dir > 0 ? 300 : -300, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? -300 : 300, opacity: 0 }),
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      onClick={onClose}
      className="fixed inset-0 z-[70] bg-background/95 backdrop-blur-md flex flex-col"
    >
      {/* Top bar */}
      <div
        className="flex items-center justify-between px-4 sm:px-8 py-4 border-b border-border/40 flex-shrink-0"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="min-w-0">
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-primary block">
            {project.category}
          </span>
          <h2 className="text-lg sm:text-xl font-bold text-foreground tracking-tight truncate">
            {project.title}
          </h2>
        </div>
        <div className="flex items-center gap-4 flex-shrink-0 ml-4">
          <span className="text-xs text-muted-foreground hidden sm:block">
            {currentIndex + 1} / {images.length}
          </span>
          <button
            onClick={onClose}
            className="p-2 hover:bg-secondary text-foreground hover:text-primary transition-colors rounded-sm"
            aria-label="Close gallery"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Main content */}
      <div
        className="flex-1 flex flex-col lg:flex-row overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Large image area */}
        <div className="flex-1 relative flex items-center justify-center p-4 sm:p-8 min-h-0">
          {/* Navigation buttons */}
          {images.length > 1 && (
            <>
              <button
                onClick={goPrev}
                className="absolute left-2 sm:left-4 z-20 p-2 sm:p-3 bg-background/60 border border-border/40 hover:bg-primary/20 hover:border-primary/40 text-foreground transition-all rounded-sm"
                aria-label="Previous image"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={goNext}
                className="absolute right-2 sm:right-4 z-20 p-2 sm:p-3 bg-background/60 border border-border/40 hover:bg-primary/20 hover:border-primary/40 text-foreground transition-all rounded-sm"
                aria-label="Next image"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </>
          )}

          {/* Animated image */}
          <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.img
                key={currentIndex}
                custom={direction}
                variants={imageVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.3, ease: "easeInOut" }}
                src={failedImages.has(currentIndex) ? FALLBACK_IMAGE : images[currentIndex]}
                alt={`${project.title} — photo ${currentIndex + 1}`}
                className="max-h-full max-w-full object-contain rounded-sm select-none"
                draggable={false}
                onError={() => handleImageError(currentIndex)}
              />
            </AnimatePresence>
          </div>
        </div>

        {/* Side panel — description + thumbnails (desktop) / bottom strip (mobile) */}
        <div className="lg:w-80 xl:w-96 flex flex-col border-t lg:border-t-0 lg:border-l border-border/40 bg-card/50">
          {/* Description (visible on lg+) */}
          <div className="hidden lg:block p-6 border-b border-border/30">
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-1.5">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[10px] font-semibold tracking-wider uppercase px-2 py-0.5 border border-primary/30 text-primary/80"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Thumbnail grid / strip */}
          <div className="flex-1 overflow-hidden">
            {/* Mobile: horizontal strip */}
            <div
              ref={thumbnailRef}
              className="lg:hidden flex gap-2 p-3 overflow-x-auto scroll-smooth"
              style={{ scrollbarWidth: "none" }}
            >
              {images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  className={`flex-shrink-0 w-16 h-16 overflow-hidden rounded-sm border-2 transition-all ${
                    i === currentIndex
                      ? "border-primary ring-1 ring-primary/30"
                      : "border-transparent hover:border-border"
                  }`}
                >
                  <img
                    src={failedImages.has(i) ? FALLBACK_IMAGE : img}
                    alt={`Thumbnail ${i + 1}`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    onError={() => handleImageError(i)}
                  />
                </button>
              ))}
            </div>

            {/* Desktop: scrollable grid */}
            <div className="hidden lg:block p-4 overflow-y-auto h-full" style={{ scrollbarWidth: "thin" }}>
              <div className="grid grid-cols-3 gap-2">
                {images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => goTo(i)}
                    className={`relative aspect-square overflow-hidden rounded-sm border-2 transition-all group/thumb ${
                      i === currentIndex
                        ? "border-primary ring-1 ring-primary/30"
                        : "border-transparent hover:border-border"
                    }`}
                  >
                    <img
                      src={failedImages.has(i) ? FALLBACK_IMAGE : img}
                      alt={`Thumbnail ${i + 1}`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                      onError={() => handleImageError(i)}
                    />
                    <div className="absolute inset-0 bg-background/0 group-hover/thumb:bg-background/30 transition-colors flex items-center justify-center">
                      <ZoomIn className="h-4 w-4 text-white opacity-0 group-hover/thumb:opacity-80 transition-opacity" />
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
