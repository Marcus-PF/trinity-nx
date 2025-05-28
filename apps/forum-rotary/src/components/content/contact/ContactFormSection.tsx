'use client';

import { motion } from 'framer-motion';
import ContactForm from '../../forms/ContactForm';

export function ContactFormSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-background px-6 py-20 md:py-28"
      aria-labelledby="contact-form-heading"
    >
      <div className="max-w-4xl mx-auto text-center space-y-4 mb-12">
        <h2
          id="contact-form-heading"
          className="text-3xl md:text-4xl font-bold tracking-tight text-primary"
        >
          Send a Message
        </h2>
        <p className="text-lg text-muted-foreground max-w-xl mx-auto">
          Reach out with any questions, ideas, or feedback — we’re here to help.
        </p>
      </div>

      <div className="bg-muted border border-border p-6 md:p-8 rounded-xl shadow-md max-w-4xl mx-auto">
        <ContactForm />
      </div>
    </motion.section>
  );
}
