'use client';

import { Card, CardContent } from '@trinity/ui';
import { motion } from 'framer-motion';

export function MissionVision() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-background px-4 py-20 sm:px-6 md:px-8 md:py-28"
      aria-labelledby="mission-vision-heading"
    >
      <div className="max-w-6xl mx-auto text-center mb-12 space-y-4">
        <h2
          id="mission-vision-heading"
          className="text-3xl md:text-4xl font-bold tracking-tight text-primary"
        >
          Our Mission & Vision
        </h2>
        <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
          The heart of our Rotary club lies in purpose-driven service and lasting impact.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
        {/* Mission Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Card className="bg-muted border border-border shadow-sm h-full">
            <CardContent className="p-6 space-y-3">
              <h3 className="text-xl font-semibold text-primary">Our Mission</h3>
              <p className="text-base text-muted-foreground leading-relaxed">
                To connect people of action from the Portuguese and broader South African community in pursuit
                of service, impact, and personal growth — guided by integrity and unity.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        {/* Vision Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <Card className="bg-muted border border-border shadow-sm h-full">
            <CardContent className="p-6 space-y-3">
              <h3 className="text-xl font-semibold text-primary">Our Vision</h3>
              <p className="text-base text-muted-foreground leading-relaxed">
                A South Africa where Rotary empowers every citizen to serve with purpose,
                lead with courage, and build a better tomorrow.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </motion.section>
  );
}
