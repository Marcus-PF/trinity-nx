'use client';

import { motion } from 'framer-motion';
import { BenefitCard } from './BenefitCard';

const benefits = [
  {
    title: 'Community Impact',
    description: 'Be part of meaningful service initiatives that uplift lives, solve real problems, and strengthen communities.',
  },
  {
    title: 'Global Network',
    description: 'Join a worldwide family of 1.4 million Rotarians — all working together to make a difference, wherever they are.',
  },
  {
    title: 'Leadership Growth',
    description: 'Develop your leadership through service roles, mentorship, and purpose-driven collaboration.',
  },
  {
    title: 'Professional Connections',
    description: 'Engage with professionals across industries, creating lifelong partnerships and growth opportunities.',
  },
];

export function MembershipBenefitsGrid() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8 }}
      className="bg-primary text-primary-foreground px-6 py-24 md:py-32"
      aria-labelledby="membership-benefits-heading"
    >
      <div className="max-w-6xl mx-auto text-center mb-12 space-y-4">
        <motion.h2
          id="membership-benefits-heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-3xl md:text-4xl font-bold tracking-tight text-primary-foreground"
        >
          Why Join Rotary?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-lg md:text-xl text-primary-foreground/90 max-w-2xl mx-auto leading-relaxed"
        >
          Rotary brings together people of action — connected by values, driven by service, and empowered to create lasting change.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {benefits.map((benefit, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <BenefitCard
              title={benefit.title}
              description={benefit.description}
            />
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
