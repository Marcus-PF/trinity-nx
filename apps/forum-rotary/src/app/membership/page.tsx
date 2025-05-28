'use client'

import dynamic from 'next/dynamic'

const MembershipIntro = dynamic(() =>
  import('../../components/content/membership/MembershipIntro').then(mod => mod.MembershipIntro),
  { ssr: false }
)

const MembershipBenefitsGrid = dynamic(() =>
  import('../../components/content/membership/MembershipBenefitsGrid').then(mod => mod.MembershipBenefitsGrid),
  { ssr: false }
)

const MembershipStepAccordion = dynamic(() =>
  import('../../components/content/membership/MembershipStepAccordion').then(mod => mod.MembershipStepAccordion),
  { ssr: false }
)

const MembershipFormBlock = dynamic(() =>
  import('../../components/content/membership/MembershipFormBlock').then(mod => mod.MembershipFormBlock),
  { ssr: false }
)

export default function MembershipPage() {
  return (
    <main className="flex flex-col space-y-20" id="main-content">
      <MembershipIntro />
      <MembershipBenefitsGrid />
      <MembershipStepAccordion />
      <MembershipFormBlock />
    </main>
  )
}
