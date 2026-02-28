"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { asset } from "@/lib/config"

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2200)
    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[100] bg-background flex items-center justify-center"
        >
          <div className="flex flex-col items-center gap-6">
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              <img src={asset("/assets/atcc-logo-n.png")} alt="ATCC Logo" className="h-16 w-auto" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="flex flex-col items-center gap-2"
            >
              <span className="text-sm font-bold tracking-[0.3em] uppercase text-foreground">
                ATCC
              </span>
              <span className="text-xs tracking-[0.2em] uppercase text-muted-foreground">
                Building Excellence
              </span>
            </motion.div>

            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.5, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className="h-0.5 w-32 bg-primary origin-left"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
