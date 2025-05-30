'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export function AboutIntro() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8 }}
      className="relative bg-background text-foreground px-6 py-24 md:py-32 text-center overflow-hidden"
      aria-labelledby="about-heading"
    >
      {/* Rotary watermark background logo */}
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

      {/* Foreground Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative z-10 max-w-5xl mx-auto space-y-6"
      >
        <h1
          id="about-heading"
          className="text-4xl md:text-5xl font-bold tracking-tight text-primary"
        >
          About Our Club
        </h1>

        <div className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto space-y-4">
          <p>
            The Portuguese International Rotary E-Club is a modern Rotary experience — digitally connected, culturally rooted, and globally minded.
            We bring together individuals of Portuguese descent and those inspired by our values to serve communities across borders.
          </p>
          <p>
            With flexible, virtual meetings and a focus on impact, our club is a bridge between tradition and innovation — where service meets storytelling, leadership, and legacy.
          </p>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="italic font-medium text-accent"
          >
            “Service Above Self.”
          </motion.p>
        </div>

        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="w-24 h-0.5 bg-secondary mx-auto mt-4 origin-left"
        />
      </motion.div>
    </motion.section>
  );
}
