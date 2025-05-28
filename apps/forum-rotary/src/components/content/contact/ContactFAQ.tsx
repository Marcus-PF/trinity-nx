'use client';

import { motion } from 'framer-motion';
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@trinity/ui';

const faqs = [
  {
    question: 'How can I join the Portuguese Forum Rotary Club?',
    answer:
      'You can express your interest by filling out our membership application form. After submission, a club representative will contact you to discuss the next steps.',
  },
  {
    question: 'Do I need to be invited to join?',
    answer:
      'While Rotary clubs often invite prospective members, we also welcome direct applications from individuals who align with our values and mission.',
  },
  {
    question: 'What are the membership fees?',
    answer:
      'Membership fees vary by club and cover administrative costs and contributions to Rotary International. Please contact us for specific details.',
  },
  {
    question: 'Can I attend a meeting before deciding to join?',
    answer:
      'Absolutely! We encourage prospective members to attend a meeting to learn more about our club and activities.',
  },
  {
    question: 'Are there online meetings available?',
    answer:
      'Yes, we offer virtual meetings for members who cannot attend in person. Please reach out for more information on our meeting schedule.',
  },
];

export function ContactFAQ() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="px-6 py-20 md:py-28 bg-background"
      aria-labelledby="contact-faq-heading"
    >
      <div className="max-w-4xl mx-auto text-center mb-12 space-y-4">
        <h2
          id="contact-faq-heading"
          className="text-3xl md:text-4xl font-bold tracking-tight text-primary"
        >
          Frequently Asked Questions
        </h2>
        <p className="text-lg text-muted-foreground max-w-xl mx-auto">
          Everything you need to know before becoming a part of our Rotary family.
        </p>
      </div>

      <div className="max-w-3xl mx-auto">
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((item, index) => (
            <AccordionItem
              key={index}
              value={`faq-${index}`}
              className="border border-border rounded-lg"
            >
              <AccordionTrigger className="text-left text-lg font-medium px-4 py-3 text-foreground hover:text-accent hover:underline">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="px-4 pb-4 text-base text-muted-foreground/80 leading-relaxed">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </motion.section>
  );
}
