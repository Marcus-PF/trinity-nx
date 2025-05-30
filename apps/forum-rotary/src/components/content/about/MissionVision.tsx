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
      <div className="relative z-10 max-w-5xl mx-auto text-center mb-12 space-y-6">
        <motion.h2
          id="mission-vision-heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl md:text-5xl font-bold tracking-tight text-primary-foreground"
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
          Our club is a place where cultural pride meets purpose-driven service — a Rotary hub for those who believe in leading through action, unity, and global connection.
        </motion.p>
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
          <Card className="flex flex-col h-full bg-card text-card-foreground border border-border rounded-lg shadow-sm transition hover:shadow-md">
            <CardContent className="flex-grow p-6 md:p-8 space-y-4">
              <h3 className="text-2xl font-semibold text-secondary">Our Mission</h3>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                To unite individuals of Portuguese heritage — and those inspired by it — in meaningful service, cultural connection, and Rotary leadership. Through a virtual platform, we foster collaboration, uplift communities, and inspire lifelong engagement in service above self.
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
          <Card className="flex flex-col h-full bg-card text-card-foreground border border-border rounded-lg shadow-sm transition hover:shadow-md">
            <CardContent className="flex-grow p-6 md:p-8 space-y-4">
              <h3 className="text-2xl font-semibold text-secondary">Our Vision</h3>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                A global Rotary E-Club anchored in culture, compassion, and innovation — empowering people everywhere to lead with empathy, serve with heart, and connect across borders to create a better, more united world.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </motion.section>
  );
}
