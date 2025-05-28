'use client'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@trinity/ui'

export function MembershipProcess() {
  return (
    <section
      className="bg-background text-foreground px-6 py-20"
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
          <AccordionItem value="step-1">
            <AccordionTrigger className="text-lg font-medium text-primary">
              1. Submit Your Interest
            </AccordionTrigger>
            <AccordionContent className="text-base text-muted-foreground leading-relaxed">
              Fill out the form to let us know you’re interested in joining the club.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="step-2">
            <AccordionTrigger className="text-lg font-medium text-primary">
              2. Meet & Greet
            </AccordionTrigger>
            <AccordionContent className="text-base text-muted-foreground leading-relaxed">
              A current member will reach out to connect, introduce you to the club, and answer questions.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="step-3">
            <AccordionTrigger className="text-lg font-medium text-primary">
              3. Attend an Event
            </AccordionTrigger>
            <AccordionContent className="text-base text-muted-foreground leading-relaxed">
              You’ll be invited to attend a meeting or service event to see us in action.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="step-4">
            <AccordionTrigger className="text-lg font-medium text-primary">
              4. Complete Membership Onboarding
            </AccordionTrigger>
            <AccordionContent className="text-base text-muted-foreground leading-relaxed">
              Finalize your application, submit any forms, and begin your journey with Rotary.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  )
}
