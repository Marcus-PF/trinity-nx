'use client';

import dynamic from 'next/dynamic';

const RotaryMembershipForm = dynamic(() =>
  import('../../forms/MembershipForm').then((mod) => mod.RotaryMembershipForm),
  { ssr: false }
);

export function MembershipFormBlock() {
  return (
    <section
      className="bg-primary text-primary-foreground px-6 py-16 md:py-24"
      aria-labelledby="interest-heading"
    >
      <div className="max-w-6xl mx-auto text-center space-y-4 mb-10">
        <h2 id="interest-heading" className="text-3xl md:text-4xl font-bold tracking-tight">
          Express Interest
        </h2>
        <p className="text-base md:text-lg text-primary-foreground/90 max-w-xl mx-auto">
          Submit your application and a member of our team will reach out to guide you through the next steps.
        </p>
      </div>

      <div className="bg-card text-card-foreground border border-input p-6 md:p-8 rounded-lg shadow-sm max-w-2xl mx-auto">
        <RotaryMembershipForm />
      </div>
    </section>
  );
}
