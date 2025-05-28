'use client'

export function ContactIntro() {
  return (
    <section
      className="bg-background text-foreground px-6 py-20 text-center"
      aria-labelledby="contact-heading"
    >
      <div className="max-w-3xl mx-auto space-y-4">
        <h1
          id="contact-heading"
          className="text-3xl md:text-4xl font-extrabold tracking-tight text-primary"
        >
          Contact Us
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
          We’d love to connect! Whether you’re interested in joining, collaborating, or just want to say hello —
          drop us a message or reach out directly below.
        </p>
      </div>
    </section>
  )
}
