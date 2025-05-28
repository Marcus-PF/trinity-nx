'use client'

import dynamic from 'next/dynamic'

const ContactIntro = dynamic(() =>
  import('../../components/content/contact/ContactIntro').then(mod => mod.ContactIntro),
  { ssr: false }
)

const ContactDetails = dynamic(() =>
  import('../../components/content/contact/ContactDetails').then(mod => mod.ContactDetails),
  { ssr: false }
)

const ContactFormSection = dynamic(() =>
  import('../../components/content/contact/ContactFormSection').then(mod => mod.ContactFormSection),
  { ssr: false }
)

const ContactFAQ = dynamic(() =>
  import('../../components/content/contact/ContactFAQ').then(mod => mod.ContactFAQ),
  { ssr: false }
)

export default function ContactPage() {
  return (
    <main className="flex flex-col space-y-20">
      <ContactIntro />
      <ContactDetails />
      <ContactFormSection />
      <ContactFAQ />
    </main>
  )
}
