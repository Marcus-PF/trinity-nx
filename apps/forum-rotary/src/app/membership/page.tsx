'use client'

import dynamic from 'next/dynamic'

const MembershipBenefits = dynamic(() =>
  import('../../components/content/membership/MembershipBenefits').then(mod => mod.MembershipBenefits),
  { ssr: false }
)

const MembershipProcess = dynamic(() =>
  import('../../components/content/membership/MembershipProcess').then(mod => mod.MembershipProcess),
  { ssr: false }
)

const MembershipForm = dynamic(() =>
  import('../../components/forms/MembershipForm').then(mod => mod.default),
  { ssr: false }
)

export default function MembershipPage() {
  return (
    <main className="flex flex-col space-y-20" id="main-content">
      {/* Intro Section */}
      <section className="bg-white px-6 py-16 md:py-24 text-center">
        <div className="max-w-5xl mx-auto space-y-4">
          <h1 id="membership-heading" className="text-4xl font-bold text-[color:var(--color-rotary-blue)]">
            Membership
          </h1>
          <p className="text-lg text-[color:var(--color-slate)] max-w-3xl mx-auto">
            Become a Rotarian and join a global network of passionate leaders, professionals, and changemakers.
            Participate in meaningful service, build lasting friendships, and grow personally and professionally.
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <MembershipBenefits />

      {/* Process Section */}
      <MembershipProcess />

      {/* Form Section */}
      <section
        className="bg-[color:var(--color-rotary-blue)] text-white px-6 py-16 md:py-24"
        aria-labelledby="interest-heading"
      >
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-10">
          <h2 id="interest-heading" className="text-3xl font-bold">
            Express Interest
          </h2>
          <p className="text-sm text-[color:var(--color-platinum)] max-w-md mx-auto">
            Submit your application and a member of our team will reach out to guide you through the next steps.
          </p>
        </div>
        <div className="bg-white text-black p-6 rounded-lg shadow-md max-w-2xl mx-auto">
          <MembershipForm />
        </div>
      </section>
    </main>
  )
}
