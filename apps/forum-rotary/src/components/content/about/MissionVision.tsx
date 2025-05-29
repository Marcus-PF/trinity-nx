'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@trinity/ui';

export function MissionVision() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8 }}
      className="relative bg-primary text-primary-foreground py-24 px-6 md:py-32 md:px-12"
      aria-labelledby="mission-vision-heading"
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
      >
      </motion.div>

      <div className="relative z-10 max-w-5xl mx-auto text-center mb-12 space-y-6">
        <motion.h2
          id="mission-vision-heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl md:text-5xl font-bold tracking-tight"
        >
          Mission & Vision
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-lg md:text-xl text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed"
        >
          At the heart of our Rotary club lies a shared belief in service, fellowship, and community-driven change.
        </motion.p>

        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="w-24 h-px bg-secondary mx-auto origin-left"
        />
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {/* Mission Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true, amount: 0.3 }}
          className="h-full"
        >
          <Card className="flex flex-col h-full bg-card text-card-foreground border border-input rounded-lg shadow-sm transition hover:shadow-md">
            <CardContent className="flex-grow p-6 md:p-8 space-y-4">
              <h3 className="text-2xl font-semibold text-primary">Our Mission</h3>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                To connect people of action from the Portuguese and broader South African community in pursuit
                of service, impact, and personal growth — guided by integrity, inclusion, and unity.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        {/* Vision Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true, amount: 0.3 }}
          className="h-full"
        >
          <Card className="flex flex-col h-full bg-card text-card-foreground border border-input rounded-lg shadow-sm transition hover:shadow-md">
            <CardContent className="flex-grow p-6 md:p-8 space-y-4">
              <h3 className="text-2xl font-semibold text-primary">Our Vision</h3>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                A South Africa where Rotary empowers every citizen to serve with purpose,
                lead with courage, and build a better tomorrow — one act of service at a time.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </motion.section>
  );
}
