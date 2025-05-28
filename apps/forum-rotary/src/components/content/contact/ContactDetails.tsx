'use client'

import { Mail, Phone, MapPin } from 'lucide-react'

export function ContactDetails() {
  return (
    <section
      className="bg-muted text-foreground px-6 py-20"
      aria-labelledby="contact-details-heading"
    >
      <div className="max-w-4xl mx-auto text-center mb-10 space-y-3">
        <h2
          id="contact-details-heading"
          className="text-3xl md:text-4xl font-bold text-primary"
        >
          Get in Touch
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Whether you're looking to collaborate, inquire, or just say hello, we’d love to hear from you.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-left max-w-4xl mx-auto text-muted-foreground">
        <div className="flex items-start gap-4">
          <Mail className="text-primary w-6 h-6 mt-1" />
          <div>
            <p className="font-semibold text-foreground">Email</p>
            <a
              href="mailto:info@portugueserotaryeclub.org"
              className="text-primary underline underline-offset-2 hover:text-accent transition"
            >
              info@portugueserotaryeclub.org
            </a>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <Phone className="text-primary w-6 h-6 mt-1" />
          <div>
            <p className="font-semibold text-foreground">Phone</p>
            <p>+27 (0)12 345 6789</p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <MapPin className="text-primary w-6 h-6 mt-1" />
          <div>
            <p className="font-semibold text-foreground">Mailing Address</p>
            <p>
              Portuguese Forum International Rotary E-Club
              <br />
              Gauteng, South Africa
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
