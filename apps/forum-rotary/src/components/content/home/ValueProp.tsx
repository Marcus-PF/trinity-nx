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
    value: 'working-together',
    title: 'Working Together',
    description:
      'We unite in <span className="font-semibold">Service Above Self</span> to uplift Portugal’s communities through collaboration.',
    href: '/about',
  },
  {
    value: 'community-projects',
    title: 'Community Projects',
    description:
      'Our local projects in Portugal support education, clean water, and youth empowerment.',
    href: '/projects',
  },
  {
    value: 'global-initiatives',
    title: 'Global Initiatives',
    description:
      'We contribute to Rotary’s global efforts, including polio eradication and peacebuilding.',
    href: '/global',
  },
  {
    value: 'leadership-development',
    title: 'Leadership & Development',
    description:
      'Our mentorship programs empower members to lead in Portugal and beyond.',
    href: '/leadership',
  },
];

export function ValueProp() {
  return (
    <section
      className="bg-primary text-primary-foreground px-4 py-12 sm:px-6 sm:py-16 md:px-8 md:py-20"
      aria-labelledby="value-heading"
    >
      <div className="max-w-4xl mx-auto text-center mb-10 space-y-4">
        <h2
          id="value-heading"
          className="text-4xl md:text-5xl font-bold tracking-tight"
        >
          Why Join Rotary?
        </h2>
        <p className="text-base md:text-lg text-primary-foreground/90 max-w-2xl mx-auto">
          Discover what makes the Portuguese Forum Rotary E-Club a place for
          growth, service, and connection.
        </p>
      </div>

      <div className="max-w-3xl md:max-w-4xl mx-auto">
        <Accordion type="single" collapsible className="space-y-6">
          {items.map((item, index) => (
            <motion.div
              key={item.value}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="motion-reduce:transform-none"
            >
              <AccordionItem
                value={item.value}
                className="rounded-xl"
                aria-labelledby={`trigger-${index}`}
              >
                <Card
                  className="bg-card text-card-foreground border-primary/20
                             hover:shadow-md hover:-translate-y-1 transition-all duration-300
                             data-[state=open]:bg-secondary/10"
                >
                  <AccordionTrigger
                    id={`trigger-${index}`}
                    className="px-4 sm:px-6 py-4 text-xl md:text-2xl text-primary
                               font-semibold hover:bg-secondary/10 focus:outline-none
                               focus:bg-secondary/10 focus:ring-2 focus:ring-secondary
                               transition"
                  >
                    {item.title}
                  </AccordionTrigger>
                  <AccordionContent>
                    <CardContent className="px-4 sm:px-6 py-4 text-base md:text-lg text-muted-foreground leading-relaxed">
                      <p dangerouslySetInnerHTML={{ __html: item.description }} />
                      <Link
                        href={item.href}
                        className="text-primary hover:underline mt-2 inline-block"
                      >
                        Learn More
                      </Link>
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
    </section>
  );
}
