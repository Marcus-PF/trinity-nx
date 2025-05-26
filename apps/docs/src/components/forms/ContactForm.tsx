'use client';

import { useForm, ValidationError } from '@formspree/react';
import { Input, Button, Textarea } from '@trinity/ui';

export default function ContactForm() {
  const [state, handleSubmit] = useForm("mldbaonn"); // ✅ using your Formspree endpoint ID

  if (state.succeeded) {
    return <p className="text-grass">Thank you! Your message has been sent.</p>;
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-xl">
      {/* Honeypot Field (hidden from real users) */}
      <input type="text" name="_gotcha" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />

      <div>
        <Input id="fullname" type="text" name="fullname" placeholder="Your Name" required />
        <ValidationError prefix="Name" field="fullname" errors={state.errors} />
      </div>

      <div>
        <Input id="user_email" type="email" name="user_email" placeholder="Your Email" required />
        <ValidationError prefix="Email" field="user_email" errors={state.errors} />
      </div>

      <div>
        <Textarea id="message" name="message" placeholder="Your Message" rows={5} required />
        <ValidationError prefix="Message" field="message" errors={state.errors} />
      </div>

      <Button type="submit" disabled={state.submitting}>
        {state.submitting ? 'Sending…' : 'Send Message'}
      </Button>
    </form>
  );
}
