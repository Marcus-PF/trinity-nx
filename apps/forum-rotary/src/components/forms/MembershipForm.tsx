'use client';

import { useForm, ValidationError } from '@formspree/react';
import { Input, Textarea, Button } from '@trinity/ui';
import { FormSuccessMessage } from '../../components/content/membership/FormSuccessMessage';

export function RotaryMembershipForm() {
  const [state, handleSubmit] = useForm('xovdypnp');

  if (state.succeeded) {
    return <FormSuccessMessage />;
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 max-w-2xl mx-auto"
      aria-labelledby="membership-form-heading"
      aria-live="polite"
    >
      <h3 id="membership-form-heading" className="sr-only">
        Membership Application
      </h3>

      {/* Honeypot */}
      <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" />

      {[
        { name: 'fullname', placeholder: 'Full Name', label: 'Full Name', type: 'text' },
        { name: 'email', placeholder: 'Email Address', label: 'Email', type: 'email' },
        { name: 'phone', placeholder: 'Phone Number', label: 'Phone', type: 'tel' },
        { name: 'occupation', placeholder: 'Occupation / Profession', label: 'Occupation', type: 'text' },
      ].map((field) => (
        <div key={field.name} className="space-y-1">
          <Input
            name={field.name}
            type={field.type}
            placeholder={field.placeholder}
            aria-label={field.label}
            required
            className="w-full bg-card text-card-foreground border border-input rounded-md px-4 py-2 shadow-sm
                       focus:outline-none focus:ring-2 focus:ring-secondary transition"
          />
          <ValidationError prefix={field.label} field={field.name} errors={state.errors} className="text-sm text-destructive" />
        </div>
      ))}

      {[
        { name: 'reason', placeholder: 'Why would you like to join Rotary?', label: 'Reason for joining', rows: 5 },
        { name: 'skills', placeholder: 'What skills or experience can you contribute?', label: 'Skills and experience', rows: 4 },
      ].map((field) => (
        <div key={field.name} className="space-y-1">
          <Textarea
            name={field.name}
            placeholder={field.placeholder}
            aria-label={field.label}
            rows={field.rows}
            required
            className="w-full bg-card text-card-foreground border border-input rounded-md px-4 py-2 shadow-sm
                       focus:outline-none focus:ring-2 focus:ring-secondary transition"
          />
          <ValidationError prefix={field.label} field={field.name} errors={state.errors} className="text-sm text-destructive" />
        </div>
      ))}

      <div>
        <Button
          type="submit"
          disabled={state.submitting}
          aria-busy={state.submitting}
          className="w-full sm:w-auto bg-secondary text-secondary-foreground hover:bg-secondary/90 transition
                     focus:outline-none focus:ring-2 focus:ring-secondary rounded-md px-6 py-3"
        >
          {state.submitting ? 'Submitting…' : 'Submit Application'}
        </Button>
      </div>

      {/* Handle errors correctly */}
      {Array.isArray(state.errors) && (
        <div className="space-y-1">
          {state.errors.map((error: { message: string }, idx: number) => (
            <p key={idx} className="text-sm text-destructive" role="alert">
              {error.message}
            </p>
          ))}
        </div>
      )}
    </form>
  );
}
