'use client';

import { BenefitCard } from './BenefitCard';

const benefits = [
  {
    title: 'Community Impact',
    description: 'Engage in projects that uplift lives and create lasting change.',
  },
  {
    title: 'Global Network',
    description: 'Join 1.4 million Rotarians worldwide committed to service.',
  },
  {
    title: 'Leadership Growth',
    description: 'Gain access to leadership training and service opportunities.',
  },
  {
    title: 'Professional Development',
    description: 'Collaborate with professionals from diverse industries and backgrounds.',
  },
];

export function MembershipBenefitsGrid() {
  return (
    <section
      className="bg-muted px-6 py-20"
      aria-labelledby="membership-benefits-heading"
    >
      <div className="max-w-6xl mx-auto text-center mb-12 space-y-4">
        <h2
          id="membership-benefits-heading"
          className="text-3xl md:text-4xl font-bold tracking-tight text-primary"
        >
          Why Join Rotary?
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Rotary connects people of action — leaders who are committed to service and fellowship.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {benefits.map((benefit, index) => (
          <BenefitCard
            key={index}
            title={benefit.title}
            description={benefit.description}
          />
        ))}
      </div>
    </section>
  );
}
