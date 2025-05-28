'use client';

import { motion } from 'framer-motion';

export function ContactIntro() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-background px-6 py-20 md:py-28 text-center"
      aria-labelledby="contact-heading"
    >
      <div className="max-w-3xl mx-auto space-y-4">
        <h1
          id="contact-heading"
          className="text-4xl md:text-5xl font-extrabold tracking-tight text-primary"
        >
          Contact Us
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
          We’d love to connect! Whether you’re interested in joining, collaborating, or just want to say hello —
          drop us a message or reach out directly below.
        </p>
      </div>
    </motion.section>
  );
}
