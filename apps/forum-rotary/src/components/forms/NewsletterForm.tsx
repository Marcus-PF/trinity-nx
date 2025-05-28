'use client'

import { useForm } from '@formspree/react'
import { Input } from '@trinity/ui'
import { Button } from '@trinity/ui'
import { CheckCircle } from 'lucide-react'
import { motion } from 'framer-motion'
import Image from 'next/image'

export function NewsletterForm() {
  const [state, handleSubmit] = useForm('xrbqrrao')

  if (state.succeeded) {
    return (
      <motion.section
        className="bg-primary text-primary-foreground py-16 px-6 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        role="status"
        aria-live="polite"
        aria-labelledby="newsletter-success"
      >
        <div className="max-w-md mx-auto space-y-3">
          <CheckCircle className="w-10 h-10 text-secondary mx-auto" aria-hidden="true" />
          <h2 id="newsletter-success" className="text-2xl font-semibold">
            You’re Subscribed!
          </h2>
          <p className="text-sm text-muted-foreground">
            Thank you for joining our community. We’ll keep you updated with the latest news and events.
          </p>
        </div>
      </motion.section>
    )
  }

  return (
    <section
      className="relative bg-primary text-primary-foreground py-16 px-6"
      aria-labelledby="newsletter-heading"
    >
      {/* Optional Rotary logo background watermark */}
      <div className="absolute inset-0 opacity-5 z-0">
        <Image
          src="/rotary-favicon.svg"
          alt=""
          fill
          className="object-cover pointer-events-none select-none"
        />
      </div>

      <div className="relative z-10 max-w-x2 mx-auto text-center space-y-6">
        <div className="space-y-2">
          <h2 id="newsletter-heading" className="text-3xl font-bold">
            Stay Connected
          </h2>
          <p className="text-lg md:text-xl max-w-lg mx-auto text-primary-foreground/90">
            Get the latest updates on Rotary events, initiatives, and impact — delivered straight to your inbox.
          </p>
        </div>

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
            className="bg-white text-black w-full sm:w-72 focus-visible:ring-2 focus-visible:ring-secondary"
          />
          <Button
            type="submit"
            disabled={state.submitting}
            className="bg-secondary text-secondary-foreground hover:bg-accent hover:text-white"
          >
            {state.submitting ? 'Signing Up…' : 'Sign Up'}
          </Button>
        </form>

        {state.errors &&
          Object.entries(state.errors).map(([key, error]) => (
            <p
              key={key}
              className="text-sm text-destructive mt-2"
              role="alert"
            >
              {error?.message}
            </p>
          ))}

        <p className="text-sm text-primary-foreground/80">
          We respect your privacy. No spam — unsubscribe at any time.
        </p>
      </div>
    </section>
  )
}
