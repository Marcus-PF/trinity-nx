'use client';

import { StepItem } from './StepItem';
import { Accordion } from '@trinity/ui';

const steps = [
  {
    id: 'step-1',
    title: '1. Submit Your Interest',
    description: 'Fill out the form to let us know you’re interested in joining the club.',
  },
  {
    id: 'step-2',
    title: '2. Meet & Greet',
    description: 'A current member will reach out to connect, introduce you to the club, and answer questions.',
  },
  {
    id: 'step-3',
    title: '3. Attend an Event',
    description: 'You’ll be invited to attend a meeting or service event to see us in action.',
  },
  {
    id: 'step-4',
    title: '4. Complete Membership Onboarding',
    description: 'Finalize your application, submit any forms, and begin your journey with Rotary.',
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
          Becoming a member is simple. Here’s how you can get involved:
        </p>
      </div>

      <div className="max-w-2xl mx-auto">
        <Accordion type="single" collapsible className="space-y-4">
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
