'use client';

export function MembershipIntro() {
  return (
    <section
      className="bg-white px-4 py-12 sm:px-6 sm:py-16 md:px-8 md:py-20 text-center"
      aria-labelledby="membership-heading"
    >
      <div className="max-w-5xl mx-auto space-y-4">
        <h1
          id="membership-heading"
          className="text-4xl md:text-5xl font-bold text-primary tracking-tight"
        >
          Membership
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          Become a Rotarian and join a global network of passionate leaders, professionals, and changemakers.
          Participate in meaningful service, build lasting friendships, and grow personally and professionally.
        </p>
      </div>
    </section>
  );
}
