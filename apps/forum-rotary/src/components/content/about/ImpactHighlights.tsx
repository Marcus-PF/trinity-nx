'use client';

import { Card, CardContent } from '@trinity/ui';
import { motion } from 'framer-motion';
import { GraduationCap, HeartHandshake, Users, Utensils } from 'lucide-react';

const highlights = [
  {
    title: 'Youth Mentorship',
    icon: Users,
    description: 'Guiding tomorrow’s leaders through coaching, skills training, and personal development.',
  },
  {
    title: 'Food Security Drives',
    icon: Utensils,
    description: 'Mobilizing resources to ensure families in need receive vital food and daily essentials.',
  },
  {
    title: 'Leadership Workshops',
    icon: HeartHandshake,
    description: 'Fostering empathy, collaboration, and confidence through values-based learning experiences.',
  },
  {
    title: 'Education Outreach',
    icon: GraduationCap,
    description: 'Supporting schools with supplies, tutoring, and facility improvements for lasting impact.',
  },
];

export function ImpactHighlights() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-primary text-primary-foreground px-4 py-20 sm:px-6 md:px-8 md:py-28"
      aria-labelledby="impact-highlights-heading"
    >
      <div className="max-w-6xl mx-auto text-center mb-12 space-y-4">
        <h2
          id="impact-highlights-heading"
          className="text-3xl md:text-4xl font-bold tracking-tight text-primary-foreground"
        >
          Our Work in Action
        </h2>
        <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
          From food relief to youth development, our members drive meaningful change where it’s needed most.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {highlights.map((item, index) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full bg-card border border-border shadow-sm hover:shadow-md transition">
                <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                  <Icon className="w-10 h-10 text-accent" aria-hidden="true" />
                  <h3 className="text-lg font-bold text-secondary">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </motion.section>
  );
}
