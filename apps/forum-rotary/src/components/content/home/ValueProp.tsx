'use client'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Card,
  CardContent,
} from '@trinity/ui'

export function ValueProp() {
  return (
    <section
      className="bg-primary text-primary-foreground px-6 py-20"
      aria-labelledby="value-heading"
    >
      <div className="max-w-4xl mx-auto text-center mb-10 space-y-2">
        <h2
          id="value-heading"
          className="text-3xl md:text-4xl font-bold"
        >
          Why Join Rotary?
        </h2>
        <p className="text-lg md:text-xl text-primary-foreground/90 max-w-2xl mx-auto">
          Discover what makes the Portuguese Forum Rotary Club a place for growth, service, and connection.
        </p>
      </div>

      <div className="max-w-2xl mx-auto">
        <Accordion type="single" collapsible className="space-y-4">
          <AccordionItem value="working-together" className="rounded-xl">
            <Card className="bg-card border border-border">
              <AccordionTrigger className="w-full text-left px-4 py-3 text-2xl text-primary font-semibold border-b border-border">
                Working Together
              </AccordionTrigger>
              <AccordionContent>
                <CardContent className="text-base text-muted-foreground leading-relaxed">
                  Rooted in <strong>Service Above Self</strong>, we believe the greatest reward lies in uplifting others.
                  Our strength comes from shared values, collaboration, and the belief that we profit most when we serve best.
                </CardContent>
              </AccordionContent>
            </Card>
          </AccordionItem>

          <AccordionItem value="community-projects" className="rounded-xl">
            <Card className="border border-border">
              <AccordionTrigger className="w-full text-left px-4 py-3 text-2xl text-primary font-semibold border-b border-border">
                Community Projects
              </AccordionTrigger>
              <AccordionContent>
                <CardContent className="text-base text-muted-foreground leading-relaxed">
                  We lead local projects that directly serve our communities — from clean water and sanitation,
                  to educational support, youth empowerment, and food security.
                </CardContent>
              </AccordionContent>
            </Card>
          </AccordionItem>

          <AccordionItem value="global-initiatives" className="rounded-xl">
            <Card className="border border-border">
              <AccordionTrigger className="w-full text-left px-4 py-3 text-2xl text-primary font-semibold border-b border-border">
                Global Initiatives
              </AccordionTrigger>
              <AccordionContent>
                <CardContent className="text-base text-muted-foreground leading-relaxed">
                  As part of Rotary International, our impact extends beyond borders. We join global efforts to end polio,
                  promote peace, and advance environmental and health solutions.
                </CardContent>
              </AccordionContent>
            </Card>
          </AccordionItem>

          <AccordionItem value="leadership-development" className="rounded-xl">
            <Card className="border border-border">
              <AccordionTrigger className="w-full text-left px-4 py-3 text-2xl text-primary font-semibold border-b border-border">
                Leadership & Development
              </AccordionTrigger>
              <AccordionContent>
                <CardContent className="text-base text-muted-foreground leading-relaxed">
                  Through mentorship, networking, and service, members gain confidence and leadership skills to take initiative — in their communities and beyond.
                </CardContent>
              </AccordionContent>
            </Card>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  )
}
