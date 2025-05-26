'use client';

import { useForm } from '@formspree/react';
import { Input, Button } from '@trinity/ui';;
import { CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export function NewsletterForm() {
  const [state, handleSubmit] = useForm('xrbqrrao');

  if (state.succeeded) {
    return (
      <motion.section
        className="bg-[color:var(--color-rotary-blue)] text-[color:var(--color-white)] py-16 px-6 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        role="status"
        aria-live="polite"
        aria-labelledby="newsletter-success"
      >
        <div className="max-w-lg mx-auto">
          <CheckCircle className="w-10 h-10 text-[color:var(--color-rotary-gold)] mx-auto mb-4" aria-hidden="true" />
          <h2 id="newsletter-success" className="text-2xl font-semibold mb-2">You’re Subscribed!</h2>
          <p className="text-sm text-[color:var(--color-platinum)]">
            Thank you for joining our community. We’ll keep you updated with the latest news and events.
          </p>
        </div>
      </motion.section>
    );
  }

  return (
    <section
      className="relative bg-[color:var(--color-rotary-blue)] text-[color:var(--color-white)] py-16 px-6"
      aria-labelledby="newsletter-heading"
    >
      {/* Optional: background texture or Rotary watermark */}
      <div className="absolute inset-0 opacity-5 z-0">
        <Image
          src="/rotary-favicon.svg"
          alt=""
          fill
          className="object-cover pointer-events-none select-none"
        />
      </div>

      <div className="relative z-10 max-w-xl mx-auto text-center">
        <h2 id="newsletter-heading" className="text-3xl font-bold mb-4">Stay Connected</h2>
        <p className="text-sm mb-6 text-[color:var(--color-white)]">
          Get the latest updates on Rotary events, initiatives, and impact — delivered straight to your inbox.
        </p>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          aria-live="polite"
        >
          <Input
            id="email"
            type="email"
            name="email"
            required
            placeholder="you@example.com"
            aria-label="Email address"
            className="bg-[color:var(--color-white)] text-[color:var(--color-black)] w-full sm:w-72 focus-visible:ring-2 focus-visible:ring-[color:var(--color-rotary-gold)]"
          />
          <Button
            type="submit"
            disabled={state.submitting}
            className="bg-[color:var(--color-rotary-gold)] text-[color:var(--color-rotary-blue)] hover:bg-[color:var(--color-orange)] focus-visible:ring-2 focus-visible:ring-[color:var(--color-rotary-gold)]"
          >
            {state.submitting ? 'Signing Up…' : 'Sign Up'}
          </Button>
        </form>

        {state.errors &&
          Object.entries(state.errors).map(([key, error]) => (
            <p key={key} className="text-sm mt-4 text-[color:var(--color-cranberry)]" role="alert">
              {error?.message}
            </p>
          ))}

        <p className="text-xs mt-6 text-[color:var(--color-white)]">
          We respect your privacy. No spam — unsubscribe at any time.
        </p>
      </div>
    </section>
  );
}
