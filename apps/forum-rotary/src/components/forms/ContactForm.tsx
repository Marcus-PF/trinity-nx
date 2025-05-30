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
        className="bg-primary text-primary-foreground py-16 px-6 text-center rounded-lg shadow-sm"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        role="status"
        aria-live="polite"
        aria-labelledby="contact-success"
      >
        <div className="max-w-md mx-auto space-y-3">
          <CheckCircle className="w-12 h-12 text-secondary mx-auto" aria-hidden="true" />
          <h2 id="contact-success" className="text-3xl font-semibold">
            Message Sent!
          </h2>
          <p className="text-sm text-primary-foreground/80">
            Thank you for getting in touch. We’ll respond as soon as possible.
          </p>
        </div>
      </motion.div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6"
      aria-labelledby="contact-form-heading"
      aria-live="polite"
    >
      {/* Honeypot field to block bots */}
      <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" />

      {/* Full Name */}
      <div className="space-y-1">
        <Input
          id="fullname"
          type="text"
          name="fullname"
          placeholder="Your Full Name"
          required
          aria-label="Full Name"
          className="w-full bg-card text-card-foreground border border-input rounded-md shadow-sm px-4 py-2 focus:outline-none focus:ring-2 focus:ring-ring transition"
        />
        <ValidationError
          prefix="Name"
          field="fullname"
          errors={state.errors}
          className="text-sm text-destructive"
        />
      </div>

      {/* Email */}
      <div className="space-y-1">
        <Input
          id="user_email"
          type="email"
          name="user_email"
          placeholder="Your Email Address"
          required
          aria-label="Email"
          className="w-full bg-card text-card-foreground border border-input rounded-md shadow-sm px-4 py-2 focus:outline-none focus:ring-2 focus:ring-ring transition"
        />
        <ValidationError
          prefix="Email"
          field="user_email"
          errors={state.errors}
          className="text-sm text-destructive"
        />
      </div>

      {/* Message */}
      <div className="space-y-1">
        <Textarea
          id="message"
          name="message"
          placeholder="Your Message"
          rows={6}
          required
          aria-label="Message"
          className="w-full bg-card text-card-foreground border border-input rounded-md shadow-sm px-4 py-2 focus:outline-none focus:ring-2 focus:ring-ring transition"
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
          className="text-sm text-destructive"
        />
      </div>

      {/* Submit */}
      <Button
        type="submit"
        disabled={state.submitting}
        aria-busy={state.submitting}
        className="w-full sm:w-auto bg-secondary text-secondary-foreground hover:bg-secondary/90 transition px-6 py-3 rounded-md focus-visible:ring-2 focus-visible:ring-ring"
      >
        {state.submitting ? 'Sending…' : 'Send Message'}
      </Button>

      {/* Generic Errors */}
      {Array.isArray(state.errors) && state.errors.length > 0 && (
        <div className="space-y-1 mt-2" role="alert">
          {state.errors.map((error, idx) => (
            <p key={idx} className="text-sm text-destructive">
              {error.message}
            </p>
          ))}
        </div>
      )}
    </form>
  );
}
