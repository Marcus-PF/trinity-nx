'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export function ContactIntro() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8 }}
      className="relative bg-background px-6 py-24 md:py-32 text-center overflow-hidden"
      aria-labelledby="contact-heading"
    >
      {/* Rotary logo watermark background */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
      >
        <Image
          src="/rotary-favicon.svg"
          alt="Rotary watermark"
          width={400}
          height={400}
          className="w-80 md:w-[400px] h-auto"
          priority
        />
      </motion.div>

      <div className="relative z-10 max-w-5xl mx-auto space-y-6">
        <motion.h1
          id="contact-heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl md:text-5xl font-bold tracking-tight text-primary"
        >
          Contact Us
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto space-y-4"
        >
          <p>
            We’d love to hear from you — whether you’re interested in membership, collaboration, or simply learning more about our work.
          </p>
          <p className="italic font-medium text-accent">
            Every connection starts with a conversation. Let’s talk.
          </p>
        </motion.div>

        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="w-24 h-0.5 bg-secondary mx-auto mt-4 origin-left"
        />
      </div>
    </motion.section>
  );
}
