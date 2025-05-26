'use client';

import { useForm, ValidationError } from '@formspree/react';
import { Input, Button, Textarea, Card, CardContent } from '@trinity/ui';
import { CheckCircle } from 'lucide-react';

export default function MembershipForm() {
  const [state, handleSubmit] = useForm("xovdypnp");

  if (state.succeeded) {
    return (
      <Card className="bg-[color:var(--color-light-gray)] text-center shadow">
        <CardContent className="p-6">
          <CheckCircle className="w-8 h-8 mx-auto text-[color:var(--color-rotary-gold)] mb-2" />
          <h3 className="text-lg font-semibold text-[color:var(--color-rotary-blue)]">Thank You!</h3>
          <p className="text-sm text-[color:var(--color-slate)]">
            Your application has been submitted. We’ll be in touch shortly.
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-2xl text-[color:var(--color-black)]">
      <input type="text" name="_gotcha" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />

      <Input
        name="fullname"
        type="text"
        placeholder="Full Name"
        aria-label="Full Name"
        required
      />
      <ValidationError prefix="Full Name" field="fullname" errors={state.errors} />

      <Input
        name="email"
        type="email"
        placeholder="Email Address"
        aria-label="Email"
        required
      />
      <ValidationError prefix="Email" field="email" errors={state.errors} />

      <Input
        name="phone"
        type="tel"
        placeholder="Phone Number"
        aria-label="Phone"
        required
      />
      <ValidationError prefix="Phone" field="phone" errors={state.errors} />

      <Input
        name="occupation"
        type="text"
        placeholder="Occupation / Profession"
        aria-label="Occupation"
        required
      />
      <ValidationError prefix="Occupation" field="occupation" errors={state.errors} />

      <Textarea
        name="reason"
        placeholder="Why would you like to join Rotary?"
        aria-label="Reason for joining"
        rows={5}
        required
      />
      <ValidationError prefix="Reason" field="reason" errors={state.errors} />

      <Textarea
        name="skills"
        placeholder="What skills or experience can you contribute?"
        aria-label="Skills and experience"
        rows={4}
        required
      />
      <ValidationError prefix="Skills" field="skills" errors={state.errors} />

      <Button
        type="submit"
        disabled={state.submitting}
        className="w-full sm:w-auto"
      >
        {state.submitting ? 'Submitting…' : 'Submit Application'}
      </Button>
    </form>
  );
}
