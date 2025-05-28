'use client'

import ContactForm from '../../forms/ContactForm'

export function ContactFormSection() {
  return (
    <section
      className="bg-background text-foreground px-6 py-20"
      aria-labelledby="contact-form-heading"
    >
      <div className="max-w-4xl mx-auto text-center space-y-4 mb-10">
        <h2
          id="contact-form-heading"
          className="text-3xl md:text-4xl font-bold text-primary"
        >
          Send a Message
        </h2>
        <p className="text-muted-foreground text-lg max-w-xl mx-auto">
          Reach out with any questions, ideas, or feedback — we’re here to help.
        </p>
      </div>

      <div className="bg-muted border border-border p-6 md:p-8 rounded-xl shadow-md max-w-4xl mx-auto">
        <ContactForm />
      </div>
    </section>
  )
}
