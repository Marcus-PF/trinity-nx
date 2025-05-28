'use client';

import { Mail, Phone, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

export function ContactDetails() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-muted px-6 py-20 md:py-28"
      aria-labelledby="contact-details-heading"
    >
      <div className="max-w-4xl mx-auto text-center mb-12 space-y-4">
        <h2
          id="contact-details-heading"
          className="text-3xl md:text-4xl font-bold tracking-tight text-primary"
        >
          Get in Touch
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Whether you're looking to collaborate, inquire, or just say hello, we’d love to hear from you.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-left max-w-4xl mx-auto text-muted-foreground">
        {/* Email Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="flex items-start gap-4">
            <Mail className="text-accent w-6 h-6 mt-1" />
            <div>
              <p className="font-semibold text-primary">Email</p>
              <a
                href="mailto:info@portugueserotaryeclub.org"
                className="text-primary underline underline-offset-2 hover:text-accent transition"
              >
                info@portugueserotaryeclub.org
              </a>
            </div>
          </div>
        </motion.div>

        {/* Phone Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <div className="flex items-start gap-4">
            <Phone className="text-accent w-6 h-6 mt-1" />
            <div>
              <p className="font-semibold text-primary">Phone</p>
              <p>+27 (0)12 345 6789</p>
            </div>
          </div>
        </motion.div>

        {/* Address Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="flex items-start gap-4">
            <MapPin className="text-accent w-6 h-6 mt-1" />
            <div>
              <p className="font-semibold text-primary">Mailing Address</p>
              <p>
                Portuguese Forum International Rotary E-Club
                <br />
                Gauteng, South Africa
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* CTA Button */}
      <div className="text-center mt-10">
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <a href="mailto:info@portugueserotaryeclub.org">
            <button className="bg-primary text-white hover:bg-secondary px-6 py-3 rounded-lg transition">
              Contact Us Directly
            </button>
          </a>
        </motion.div>
      </div>
    </motion.section>
  );
}
