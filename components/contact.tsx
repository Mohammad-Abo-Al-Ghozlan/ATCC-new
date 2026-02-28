"use client"

import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { MapPin, Phone, Mail, ArrowUpRight } from "lucide-react"

export default function Contact() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })
  const [submitted, setSubmitted] = useState(false)

  return (
    <section id="contact" ref={sectionRef} className="relative py-32 lg:py-40 bg-secondary">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-6"
        >
          <span className="text-xs font-semibold tracking-[0.3em] uppercase text-primary">
            Get in Touch
          </span>
          <div className="mt-2 h-px w-16 bg-primary" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground leading-tight mb-16 max-w-xl"
        >
          {"Let's Build "}
          <span className="text-primary">Together</span>
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col gap-8"
          >
            <p className="text-lg text-muted-foreground leading-relaxed">
              Ready to bring your next construction project to life? Contact our
              team for a consultation and discover how ATCC can deliver
              excellence for your vision.
            </p>

            <div className="flex flex-col gap-6">
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 bg-primary/10 flex items-center justify-center shrink-0">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <div className="font-semibold text-foreground mb-1">Head Office</div>
                  <div className="text-sm text-muted-foreground">
                    Riyadh, Kingdom of Saudi Arabia
                  </div>
                  <div className="text-xs text-muted-foreground mt-0.5">
                    VAT: 310198822200003 | C.R: 4700116838
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="h-12 w-12 bg-primary/10 flex items-center justify-center shrink-0">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <div className="font-semibold text-foreground mb-1">Phone</div>
                  <a href="tel:+966544777959" className="text-sm text-muted-foreground hover:text-primary transition-colors block">
                    +966 544 777 959
                  </a>
                  <a href="tel:+96605336999619" className="text-sm text-muted-foreground hover:text-primary transition-colors block">
                    +966 533 699 9619
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="h-12 w-12 bg-primary/10 flex items-center justify-center shrink-0">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <div className="font-semibold text-foreground mb-1">Email</div>
                  <a href="mailto:info@afkaraltatweer.com" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    info@atcc-ksa.com
                  </a>
                </div>
              </div>
            </div>

            {/* Google Map */}
            <div className="mt-4 aspect-video bg-background border border-border overflow-hidden relative">
              <iframe
                title="ATCC Office Location – Riyadh"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d463876.2357352948!2d46.54234865!3d24.7253981!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f03890d489399%3A0xba974d1c98e79fd5!2sRiyadh%20Saudi%20Arabia!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                className="absolute inset-0 w-full h-full border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {submitted ? (
              <div className="h-full flex items-center justify-center border border-primary/30 bg-primary/5 p-12">
                <div className="text-center">
                  <div className="h-16 w-16 bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <ArrowUpRight className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">Message Sent</h3>
                  <p className="text-muted-foreground">
                    Our team will get back to you within 24 hours.
                  </p>
                </div>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault()
                  setSubmitted(true)
                }}
                className="flex flex-col gap-6"
              >
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full bg-background border border-border px-4 py-3 text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                      placeholder="John Smith"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      className="w-full bg-background border border-border px-4 py-3 text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                      placeholder="Your Company"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full bg-background border border-border px-4 py-3 text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                    placeholder="john@company.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    className="w-full bg-background border border-border px-4 py-3 text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                    placeholder="+966 XXXXXXXXX"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Project Details
                  </label>
                  <textarea
                    rows={5}
                    required
                    className="w-full bg-background border border-border px-4 py-3 text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none"
                    placeholder="Tell us about your project requirements..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary text-primary-foreground py-4 font-semibold text-sm tracking-wide uppercase hover:bg-primary/90 transition-colors"
                >
                  Send Message
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
