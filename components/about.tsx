"use client"

import { useRef, useEffect, useState } from "react"
import { motion, useInView } from "framer-motion"

function AnimatedCounter({ value, suffix = "", duration = 2 }: { value: number; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true })

  useEffect(() => {
    if (!inView) return
    let start = 0
    const increment = value / (duration * 60)
    const timer = setInterval(() => {
      start += increment
      if (start >= value) {
        setCount(value)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, 1000 / 60)
    return () => clearInterval(timer)
  }, [inView, value, duration])

  return (
    <span ref={ref}>
      {count.toLocaleString()}{suffix}
    </span>
  )
}

const stats = [
  { label: "Years Experience", value: 15, suffix: "+" },
  { label: "Projects Delivered", value: 350, suffix: "+" },
  { label: "Safety Hours", value: 500, suffix: "K+" },
  { label: "Team Members", value: 200, suffix: "+" },
]

export default function About() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  return (
    <section id="about" ref={sectionRef} className="relative py-32 lg:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Label */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-xs font-semibold tracking-[0.3em] uppercase text-primary">
            Who We Are
          </span>
          <div className="mt-2 h-px w-16 bg-primary" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Story */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground leading-tight"
            >
              Engineering the Future of
              <span className="text-primary"> Saudi Arabia</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-8 text-lg text-muted-foreground leading-relaxed"
            >
              ATCC is a premier construction company delivering high-quality
              infrastructure and contracting projects with innovation, engineering
              expertise, and international standards. We combine proven
              methodologies with cutting-edge technology to deliver mega projects
              that define skylines.
            </motion.p>

            {/* Philosophy Blocks */}
            <div className="mt-12 grid grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="border border-border p-6"
              >
                <h3 className="text-sm font-semibold tracking-wide uppercase text-primary mb-3">
                  Mission
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Deliver exceptional construction services exceeding client expectations through innovation, craftsmanship, and commitment to excellence.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="border border-border p-6"
              >
                <h3 className="text-sm font-semibold tracking-wide uppercase text-primary mb-3">
                  Vision
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Become a leading construction company recognized for quality, innovation, and sustainable development across Saudi Arabia and beyond.
                </p>
              </motion.div>
            </div>
          </div>

          {/* Stats */}
          <div className="flex flex-col justify-center">
            <div className="grid grid-cols-2 gap-8">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
                  className="border-l-2 border-primary pl-6 py-2"
                >
                  <div className="text-4xl lg:text-5xl font-extrabold text-foreground tabular-nums">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="mt-2 text-sm text-muted-foreground tracking-wide uppercase">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Timeline bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="mt-12 p-6 bg-secondary border border-border"
            >
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 bg-primary flex items-center justify-center shrink-0">
                  <span className="text-primary-foreground font-bold text-lg">A</span>
                </div>
                <div>
                  <div className="font-semibold text-foreground">
                    ATCC - Afkar AlTatWeer Contracting Co.
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Riyadh, Saudi Arabia
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
