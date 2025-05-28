'use client'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@trinity/ui'
import { motion } from 'framer-motion'

const milestones = [
  {
    year: '2023',
    title: 'Club Chartered',
    description:
      'The Portuguese Forum Rotary Club was officially chartered under District 9400, marking the beginning of a new chapter in community service.',
  },
  {
    year: '2024',
    title: 'Youth Mentorship Program Launched',
    description:
      'Our first major initiative provided career coaching, skills training, and academic support to high school learners in Johannesburg.',
  },
  {
    year: '2024',
    title: 'Community Food Drives with Portuguese Forum',
    description:
      'Partnered with the Portuguese Forum to distribute food parcels to under-resourced neighborhoods across Gauteng.',
  },
  {
    year: '2025',
    title: 'Leadership & Digital Literacy Series',
    description:
      'Developed and hosted workshops to upskill members and youth on leadership, digital tools, and ethical decision-making.',
  },
]

export function ClubMilestones() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-background text-foreground px-6 py-20 md:py-28"
      aria-labelledby="milestones-heading"
    >
      <div className="max-w-4xl mx-auto text-center mb-12 space-y-4">
        <h2
          id="milestones-heading"
          className="text-3xl md:text-4xl font-bold tracking-tight text-primary"
        >
          Our Journey
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          A look at our growth, milestones, and impact — year by year.
        </p>
      </div>

      <div className="max-w-2xl mx-auto">
        <Accordion type="single" collapsible className="space-y-4">
          {milestones.map((item, index) => (
            <AccordionItem value={`item-${index}`} key={index}>
              <AccordionTrigger className="text-left text-lg font-medium hover:underline transition text-primary">
                <span className="mr-2 text-secondary font-semibold">{item.year}</span>
                {item.title}
              </AccordionTrigger>
              <AccordionContent className="text-base text-muted-foreground leading-relaxed">
                {item.description}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </motion.section>
  )
}
