'use client';

import { useForm, ValidationError } from '@formspree/react';
import { Input, Button, Textarea } from '@trinity/ui';
import { CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ContactForm() {
  const [state, handleSubmit] = useForm('mldbaonn');

  if (state.succeeded) {
    return (
      <motion.div
        className="bg-primary text-primary-foreground py-12 px-6 rounded-lg text-center shadow-md"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        role="status"
        aria-live="polite"
        aria-labelledby="contact-success"
      >
        <div className="max-w-md mx-auto space-y-3">
          <CheckCircle className="w-10 h-10 text-secondary mx-auto" aria-hidden="true" />
          <h2 id="contact-success" className="text-2xl font-semibold">
            Message Sent!
          </h2>
          <p className="text-sm text-primary-foreground/90">
            Thank you for getting in touch. We’ll respond as soon as possible.
          </p>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="space-y-5 max-w-xl mx-auto"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      aria-labelledby="contact-form-heading"
      aria-live="polite"
    >
      {/* Hidden honeypot anti-bot field */}
      <input type="text" name="_gotcha" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />

      <div>
        <Input
          id="fullname"
          type="text"
          name="fullname"
          placeholder="Your Full Name"
          required
          aria-label="Full Name"
          className="border-border focus:ring-secondary"
        />
        <ValidationError prefix="Name" field="fullname" errors={state.errors} className="text-sm text-destructive mt-1" />
      </div>

      <div>
        <Input
          id="user_email"
          type="email"
          name="user_email"
          placeholder="Your Email Address"
          required
          aria-label="Email"
          className="border-border focus:ring-secondary"
        />
        <ValidationError prefix="Email" field="user_email" errors={state.errors} className="text-sm text-destructive mt-1" />
      </div>

      <div>
        <Textarea
          id="message"
          name="message"
          placeholder="Your Message"
          rows={6}
          required
          aria-label="Message"
          className="border-border focus:ring-secondary"
        />
        <ValidationError prefix="Message" field="message" errors={state.errors} className="text-sm text-destructive mt-1" />
      </div>

      <div>
        <Button
          type="submit"
          disabled={state.submitting}
          className="w-full sm:w-auto bg-secondary text-secondary-foreground hover:bg-secondary/90 focus:ring-2 focus:ring-secondary"
        >
          {state.submitting ? 'Sending…' : 'Send Message'}
        </Button>
      </div>

      {/* General form error */}
      {Array.isArray(state.errors) && state.errors.length > 0 && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-sm text-destructive mt-2"
          role="alert"
        >
          There was an issue submitting your form. Please check your inputs and try again.
        </motion.p>
      )}
    </motion.form>
  );
}
