'use client';

import { StepItem } from './StepItem';
import { Accordion } from '@trinity/ui';

const steps = [
  {
    id: 'step-1',
    title: '1. Submit Your Interest',
    description: 'Let us know you’re ready to connect by filling out our quick online form.',
  },
  {
    id: 'step-2',
    title: '2. Meet & Greet',
    description: 'A member of our team will reach out to welcome you, share what we’re about, and answer your questions.',
  },
  {
    id: 'step-3',
    title: '3. Join a Session or Project',
    description: 'Get a feel for the community by attending a virtual meeting or participating in a service event.',
  },
  {
    id: 'step-4',
    title: '4. Finalize Your Membership',
    description: 'Complete your registration, meet the onboarding requirements, and officially begin your Rotary journey.',
  },
];

export function MembershipStepAccordion() {
  return (
    <section
      className="bg-background text-foreground px-4 py-16 sm:px-6 sm:py-20 md:px-8 md:py-28"
      aria-labelledby="membership-process-heading"
    >
      <div className="max-w-3xl mx-auto text-center mb-12 space-y-4">
        <h2
          id="membership-process-heading"
          className="text-3xl md:text-4xl font-bold tracking-tight text-primary"
        >
          How to Join
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
          Becoming a member is simple and meaningful. Here’s how to start your Rotary journey with us:
        </p>
      </div>

      <div className="max-w-2xl mx-auto">
        <Accordion type="single" collapsible className="space-y-1.5">
          {steps.map((step) => (
            <StepItem
              key={step.id}
              value={step.id}
              title={step.title}
              description={step.description}
            />
          ))}
        </Accordion>
      </div>
    </section>
  );
}
