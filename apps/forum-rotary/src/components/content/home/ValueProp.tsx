'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Card,
  CardContent,
  Button,
} from '@trinity/ui';

const items = [
  {
    value: 'portuguese-heritage-flourishes',
    title: 'Rooted in Portuguese Heritage',
    description:
      'Celebrate a legacy of resilience and culture. Our club honors Portuguese heritage while embracing diversity, fostering unity among members who share a love for tradition and service.',
  },
  {
    value: 'global-community-thrives',
    title: 'A Global Rotary Family',
    description:
      'Connect across continents. Our digital-first model brings together professionals and changemakers from around the world, creating a collaborative network with international reach and local impact.',
  },
  {
    value: 'meaningful-service-takes-action',
    title: 'Driven by Service, Powered by Purpose',
    description:
      'Guided by Rotary International’s vision, we champion projects that matter—whether supporting youth, education, or humanitarian aid—with a special focus on Portuguese-speaking communities.',
  },
  {
    value: 'flexible-engagement-is-key',
    title: 'Service Without Borders or Boundaries',
    description:
      'Life is busy—we get it. Our virtual format empowers you to participate meaningfully, no matter your schedule or location, making service more accessible than ever.',
  },
];

export function ValueProp() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8 }}
      className="bg-primary text-primary-foreground px-4 py-6 sm:px-6 sm:py-8 md:px-8 md:py-10"
      aria-labelledby="value-heading"
    >
      <div className="max-w-4xl mx-auto text-center mb-10 space-y-4">
        <h2 id="value-heading" className="text-4xl md:text-5xl font-bold tracking-tight text-primary-foreground">
          Why Join Rotary?
        </h2>
        <p className="text-base md:text-lg text-primary-foreground/90 max-w-2xl mx-auto">
          Explore what makes the Portuguese International Rotary E-Club a unique space for purpose-driven connection and cultural pride.
        </p>
      </div>

      <div className="max-w-3xl md:max-w-4xl mx-auto">
        <Accordion type="single" collapsible className="space-y-3">
          {items.map((item, index) => (
            <motion.div
              key={item.value}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="p-0 m-0 motion-reduce:transform-none"
            >
              <AccordionItem
                value={item.value}
                className="rounded-xl"
                aria-labelledby={`trigger-${index}`}
              >
                <Card
                  className="bg-card text-card-foreground border border-border rounded-xl p-0
                             hover:shadow-md hover:-translate-y-1 transition-all duration-300
                             data-[state=open]:bg-secondary/10"
                >
                  <AccordionTrigger
                    id={`trigger-${index}`}
                    className="px-3 sm:px-4 py-3 text-lg md:text-xl text-secondary
                               font-semibold hover:bg-secondary/10 focus:outline-none
                               focus:bg-secondary/10 focus-visible:ring-2 focus-visible:ring-ring
                               transition"
                  >
                    {item.title}
                  </AccordionTrigger>
                  <AccordionContent>
                    <CardContent className="px-3 sm:px-4 py-3 text-base md:text-lg text-muted-foreground leading-relaxed">
                      <p>{item.description}</p>
                    </CardContent>
                  </AccordionContent>
                </Card>
              </AccordionItem>
            </motion.div>
          ))}
        </Accordion>

        <div className="flex justify-center mt-8">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link href="/membership">
              <Button
                size="lg"
                className="bg-secondary text-primary-foreground
                           hover:bg-secondary/90 focus-visible:ring-2 focus-visible:ring-ring
                           transition px-6 py-3"
                data-event="value-cta-click"
              >
                Join Us Today
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
