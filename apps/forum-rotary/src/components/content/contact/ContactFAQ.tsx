'use client';

import { motion } from 'framer-motion';
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
  Card,
  CardContent,
} from '@trinity/ui';

const faqs = [
  {
    question: 'How do I become a member of the Portuguese International Rotary E-Club?',
    answer:
      'Simply complete our membership interest form. One of our members will be in touch to guide you through the next steps and answer any questions.',
  },
  {
    question: 'Do I need an invitation to join?',
    answer:
      'Not at all. While some members are referred, we warmly welcome direct applications from anyone who shares our values and spirit of service.',
  },
  {
    question: 'What does it cost to be a member?',
    answer:
      'Membership includes a modest fee that helps cover Rotary International dues and local club operations. We’ll provide full details once you reach out.',
  },
  {
    question: 'Can I attend a meeting before I commit?',
    answer:
      'Yes! We encourage you to join a virtual session or event to experience our club culture before making a decision.',
  },
  {
    question: 'Are all meetings held online?',
    answer:
      'As an E-Club, most of our gatherings are hosted virtually — perfect for staying involved from anywhere in the world.',
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
          Answers to common questions about membership, meetings, and getting involved.
        </p>
      </div>

      <div className="max-w-3xl mx-auto">
        <Accordion type="single" collapsible className="space-y-1.5">
          {faqs.map((item, index) => (
            <AccordionItem key={index} value={`faq-${index}`} className="rounded-xl">
              <Card
                className="bg-card text-card-foreground border-border p-0 rounded-xl
                           hover:shadow-md transition-all duration-300
                           data-[state=open]:bg-secondary/10"
              >
                <AccordionTrigger
                  className="text-left text-lg md:text-xl font-medium px-3 sm:px-4 py-3 text-primary
                             hover:bg-secondary/10 focus:ring-2 focus:ring-secondary transition"
                >
                  {item.question}
                </AccordionTrigger>
                <AccordionContent>
                  <CardContent className="px-3 sm:px-4 py-3 text-base md:text-lg text-muted-foreground leading-relaxed">
                    {item.answer}
                  </CardContent>
                </AccordionContent>
              </Card>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </motion.section>
  );
}
