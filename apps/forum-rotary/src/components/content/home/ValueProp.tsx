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
    title: 'Portuguese Heritage Flourishes',
    description:
      'Celebrate and connect with our rich cultural identity, fostering fellowship among members who share a common heritage or appreciation for Portuguese culture.',
  },
  {
    value: 'global-community-thrives',
    title: 'Global Community Thrives',
    description:
      'Break down geographical barriers. Our virtual meetings and international membership allow for diverse perspectives, global networking, and collaborative projects that span continents.',
  },
  {
    value: 'meaningful-service-takes-action',
    title: 'Meaningful Service Takes Action',
    description:
      'Inspired by Rotary Internationals global initiatives, we focus our service efforts on areas that resonate with our members and directly benefit communities, particularly those with Portuguese ties.',
  },
  {
    value: 'flexible-engagement-is-key',
    title: 'Flexible Engagement is Key',
    description:
      'As an e-club, we meet virtually, making it easier for busy professionals and international members to participate actively and contribute to our collective mission without the constraints of traditional club meetings.',
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
        <h2 id="value-heading" className="text-4xl md:text-5xl font-bold tracking-tight">
          Why Join Rotary?
        </h2>
        <p className="text-base md:text-lg text-primary-foreground/90 max-w-2xl mx-auto">
          Discover what makes the Portuguese Forum Rotary E-Club a place for growth, service, and connection.
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
                  className="bg-card text-card-foreground border-primary/20 rounded-xl p-0
                             hover:shadow-md hover:-translate-y-1 transition-all duration-300
                             data-[state=open]:bg-secondary/10"
                >
                  <AccordionTrigger
                    id={`trigger-${index}`}
                    className="px-3 sm:px-4 py-3 text-lg md:text-xl text-primary
                               font-semibold hover:bg-secondary/10 focus:outline-none
                               focus:bg-secondary/10 focus:ring-2 focus:ring-secondary
                               transition"
                  >
                    {item.title}
                  </AccordionTrigger>
                  <AccordionContent>
                    <CardContent className="px-3 sm:px-4 py-3 text-base md:text-lg text-muted-foreground leading-relaxed">
                      <p dangerouslySetInnerHTML={{ __html: item.description }} />
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
                className="bg-secondary text-secondary-foreground
                           hover:bg-secondary/90 transition px-6 py-3
                           focus:ring-2 focus:ring-secondary"
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
