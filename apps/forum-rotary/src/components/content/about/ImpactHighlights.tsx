'use client';

import { Card, CardContent } from '@trinity/ui';
import { motion } from 'framer-motion';
import { GraduationCap, HeartHandshake, Users, Utensils } from 'lucide-react';

const highlights = [
  {
    title: 'Youth Mentorship',
    icon: Users,
    description: 'Coaching, skills-building, and access for high school learners.',
  },
  {
    title: 'Food Security Drives',
    icon: Utensils,
    description: 'Partnered efforts to supply essentials to families in need.',
  },
  {
    title: 'Leadership Workshops',
    icon: HeartHandshake,
    description:
      'Empowering members and youth through guided learning and Rotary values.',
  },
  {
    title: 'Education Outreach',
    icon: GraduationCap,
    description:
      'School supply drives, tutoring support, and facility upgrades.',
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
          Real-world initiatives led by real people. Here’s how we’re building a
          better tomorrow.
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
