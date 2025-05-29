'use client'

import dynamic from 'next/dynamic'

const HeroSection = dynamic(() =>
  import('../components/content/home/HeroSection').then(mod => mod.HeroSection),
  { ssr: false }
)

const ClubWelcomeSection = dynamic(() =>
  import('../components/content/home/ClubWelcomeSection').then(mod => mod.ClubWelcomeSection),
  { ssr: false }
)

const CtaGrid = dynamic(() =>
  import('../components/content/home/CtaGrid').then(mod => mod.CtaGrid),
  { ssr: false }
)

const ValueProp = dynamic(() =>
  import('../components/content/home/ValueProp').then(mod => mod.ValueProp),
  { ssr: false }
)

const FourWayTest = dynamic(() =>
  import('../components/content/home/FourWayTest').then(mod => mod.FourWayTest),
  { ssr: false }
)

const NewsletterForm = dynamic(() =>
  import('../components/forms/NewsletterForm').then(mod => mod.NewsletterForm),
  { ssr: false }
)


export default function HomePage() {
  return (
    <main className="flex flex-col space-y-8">
      <HeroSection />
      <CtaGrid />
      <ClubWelcomeSection />
      <ValueProp />
      <FourWayTest />
      <NewsletterForm />
    </main>
  )
}
