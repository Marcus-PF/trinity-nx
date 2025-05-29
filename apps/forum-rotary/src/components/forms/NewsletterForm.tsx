'use client';

import { useForm } from '@formspree/react';
import { Input } from '@trinity/ui';
import { Button } from '@trinity/ui';
import { CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export function NewsletterForm({ formId = 'xrbqrrao' }) {
  const [state, handleSubmit] = useForm(formId);

  if (state.succeeded) {
    return (
      <motion.section
        className="bg-primary text-primary-foreground py-16 px-6 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        role="alert"
        aria-live="polite"
        aria-labelledby="newsletter-success"
      >
        <div className="max-w-md mx-auto space-y-3 py-6">
          <motion.div
            className="bounce-in"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 200, damping: 20 }}
          >
            <CheckCircle
              className="w-12 h-12 text-secondary mx-auto"
              aria-hidden="true"
            />
          </motion.div>
          <h2
            id="newsletter-success"
            className="text-3xl md:text-4xl font-semibold"
          >
            You’re Subscribed!
          </h2>
          <p className="text-sm text-primary-foreground/80">
            Thank you for joining our community. We’ll keep you updated with the
            latest news and events.
          </p>
        </div>
      </motion.section>
    );
  }

  return (
    <section
      className="relative bg-primary text-primary-foreground py-16 px-6 md:px-12 md:py-20"
      aria-labelledby="newsletter-heading"
    >
      <div className="relative z-10 max-w-2xl mx-auto text-center space-y-6">
        <div className="space-y-2">
          <h2
            id="newsletter-heading"
            className="text-4xl md:text-5xl font-bold text-primary-foreground"
          >
            Stay Connected
          </h2>
          <p className="text-base md:text-lg max-w-lg mx-auto text-primary-foreground/90">
            Get the latest updates on Rotary events, initiatives, and impact —
            delivered straight to your inbox.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center"
          aria-live="polite"
        >
          <label htmlFor="email" className="sr-only">
            Email address
          </label>
          <Input
            id="email"
            type="email"
            name="email"
            required
            placeholder="you@example.com"
            aria-label="Email address"
            className="bg-card text-card-foreground w-full sm:w-80 md:w-96 border border-input shadow-sm
                       focus-visible:ring-2 focus-visible:ring-ring rounded-lg"
          />
          <Button
            type="submit"
            disabled={state.submitting}
            aria-busy={state.submitting}
            className="bg-secondary text-secondary-foreground hover:bg-secondary/90
                       rounded-lg px-6 py-3 focus-visible:ring-2 focus-visible:ring-ring transition"
          >
            {state.submitting ? 'Signing Up…' : 'Sign Up'}
          </Button>
        </form>

        {state.errors && (
          <div className="text-sm text-destructive mt-2" role="alert">
            {Object.entries(state.errors).map(([key, error]) => (
              <p key={key}>{error?.message}</p>
            ))}
          </div>
        )}

        <p className="text-sm text-primary-foreground/80">
          We respect your privacy. No spam —{' '}
          <Link
            href="/unsubscribe"
            className="underline hover:text-secondary transition"
          >
            unsubscribe at any time
          </Link>
          .
        </p>
      </div>
    </section>
  );
}
