'use client'

import { useForm, ValidationError } from '@formspree/react'
import { Input, Button, Textarea, Card, CardContent } from '@trinity/ui'
import { CheckCircle } from 'lucide-react'
import { motion } from 'framer-motion'

export default function MembershipForm() {
  const [state, handleSubmit] = useForm('xovdypnp')

  if (state.succeeded) {
    return (
      <motion.div
        className="bg-primary text-primary-foreground py-12 px-6 rounded-lg text-center shadow-md"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        role="status"
        aria-live="polite"
        aria-labelledby="membership-success"
      >
        <div className="max-w-md mx-auto space-y-3">
          <CheckCircle className="w-10 h-10 text-secondary mx-auto" aria-hidden="true" />
          <h2 id="membership-success" className="text-2xl font-semibold">
            Thank You!
          </h2>
          <p className="text-sm text-primary-foreground/90">
            Your application has been submitted. We’ll be in touch shortly.
          </p>
        </div>
      </motion.div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-5 max-w-2xl mx-auto"
      aria-labelledby="membership-form-heading"
      aria-live="polite"
    >
      <input type="text" name="_gotcha" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />

      <div>
        <Input
          name="fullname"
          type="text"
          placeholder="Full Name"
          aria-label="Full Name"
          required
        />
        <ValidationError prefix="Full Name" field="fullname" errors={state.errors} />
      </div>

      <div>
        <Input
          name="email"
          type="email"
          placeholder="Email Address"
          aria-label="Email"
          required
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
      </div>

      <div>
        <Input
          name="phone"
          type="tel"
          placeholder="Phone Number"
          aria-label="Phone"
          required
        />
        <ValidationError prefix="Phone" field="phone" errors={state.errors} />
      </div>

      <div>
        <Input
          name="occupation"
          type="text"
          placeholder="Occupation / Profession"
          aria-label="Occupation"
          required
        />
        <ValidationError prefix="Occupation" field="occupation" errors={state.errors} />
      </div>

      <div>
        <Textarea
          name="reason"
          placeholder="Why would you like to join Rotary?"
          aria-label="Reason for joining"
          rows={5}
          required
        />
        <ValidationError prefix="Reason" field="reason" errors={state.errors} />
      </div>

      <div>
        <Textarea
          name="skills"
          placeholder="What skills or experience can you contribute?"
          aria-label="Skills and experience"
          rows={4}
          required
        />
        <ValidationError prefix="Skills" field="skills" errors={state.errors} />
      </div>

      <div>
        <Button
          type="submit"
          disabled={state.submitting}
          className="w-full sm:w-auto"
        >
          {state.submitting ? 'Submitting…' : 'Submit Application'}
        </Button>
      </div>

      {state.errors &&
        Object.entries(state.errors).map(([key, error]) => (
          <p key={key} className="text-sm text-destructive" role="alert">
            {error?.message}
          </p>
        ))}
    </form>
  )
}
