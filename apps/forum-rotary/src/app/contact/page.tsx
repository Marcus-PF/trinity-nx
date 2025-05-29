'use client'

import dynamic from 'next/dynamic'

const ContactIntro = dynamic(() =>
  import('../../components/content/contact/ContactIntro').then(mod => mod.ContactIntro),
  { ssr: false }
)

const ContactSection = dynamic(() =>
  import('../../components/content/contact/ContactSection').then(mod => mod.ContactSection),
  { ssr: false }
)

const ContactFAQ = dynamic(() =>
  import('../../components/content/contact/ContactFAQ').then(mod => mod.ContactFAQ),
  { ssr: false }
)

export default function ContactPage() {
  return (
    <main className="flex flex-col space-y-8">
      <ContactIntro />
      <ContactSection />
      <ContactFAQ />
    </main>
  )
}
