'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';
import ContactForm from '../../forms/ContactForm';
import { Button } from '@trinity/ui';

export function ContactSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-primary text-primary-foreground px-6 py-20 md:py-28"
      aria-labelledby="contact-heading"
    >
      <div className="max-w-6xl mx-auto text-center mb-12 space-y-4">
        <h2
          id="contact-heading"
          className="text-3xl md:text-4xl font-bold tracking-tight text-primary-foreground"
        >
          Get in Touch
        </h2>
        <p className="text-lg text-primary-foreground max-w-2xl mx-auto">
          Whether you’re looking to collaborate, inquire, or just say hello, we’d love to hear from you.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {/* Contact Info */}
        <div className="space-y-6">
          {[
            {
              icon: Mail,
              title: 'Email',
              content: (
                <a
                  href="mailto:info@portugueserotaryeclub.org"
                  className="text-accent-foreground underline underline-offset-2 hover:text-secondary transition"
                >
                  info@portugueserotaryeclub.org
                </a>
              ),
            },
            {
              icon: Phone,
              title: 'Phone',
              content: (
                <a
                  href="tel:+27115785604"
                  className="text-accent-foreground underline underline-offset-2 hover:text-secondary transition"
                >
                  +27 (0)11 578 5604
                </a>
              ),
            },
            {
              icon: MapPin,
              title: 'Location',
              content: (
                <p>
                  Portuguese Forum International Rotary E-Club
                  <br />
                  Gauteng, South Africa
                </p>
              ),
            },
          ].map(({ icon: Icon, title, content }, idx) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex items-start gap-4">
                <Icon className="text-secondary w-6 h-6 mt-1" />
                <div>
                  <p className="font-semibold text-secondary text-base md:text-lg">{title}</p>
                  <div className="text-accent-foreground text-sm">{content}</div>
                </div>
              </div>
            </motion.div>
          ))}

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="pt-4">
            <a href="mailto:info@portugueserotaryeclub.org">
              <Button
                className="bg-secondary text-secondary-foreground hover:bg-secondary/90 transition"
              >
                Contact Us Directly
              </Button>
            </a>
          </motion.div>
        </div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-card text-card-foreground border border-border p-6 md:p-8 rounded-lg shadow-sm"
        >
          <ContactForm />
        </motion.div>
      </div>
    </motion.section>
  );
}
