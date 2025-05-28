'use client'

import dynamic from 'next/dynamic'

const MissionVision = dynamic(() =>
  import('../../components/content/about/MissionVision').then(mod => mod.MissionVision),
  { ssr: false }
)

const ClubMilestones = dynamic(() =>
  import('../../components/content/about/ClubMilestones').then(mod => mod.ClubMilestones),
  { ssr: false }
)

const TeamGrid = dynamic(() =>
  import('../../components/content/about/TeamGrid').then(mod => mod.TeamGrid),
  { ssr: false }
)

const ImpactHighlights = dynamic(() =>
  import('../../components/content/about/ImpactHighlights').then(mod => mod.ImpactHighlights),
  { ssr: false }
)

import Image from 'next/image'

export default function AboutPage() {
  return (
    <main className="flex flex-col space-y-20">
      {/* Intro + Who We Are */}
      <section className="bg-background px-6 py-20 text-center space-y-10" aria-labelledby="about-heading">
        <div className="max-w-5xl mx-auto">
          <h1 id="about-heading" className="text-4xl font-bold text-primary mb-4">
            About Our Club
          </h1>
          <p className="text-lg text-muted-foreground mb-10 max-w-3xl mx-auto">
            The Portuguese Forum Rotary Club is a dynamic community of leaders, visionaries, and changemakers
            united by the Rotary motto: <strong>“Service Above Self.”</strong>
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-center max-w-6xl mx-auto text-left">
          <div className="aspect-video relative rounded-xl overflow-hidden shadow-md">
            <Image
              src="/rotary-about-placeholder.jpg"
              alt="Rotary community gathering"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-primary mb-3">Who We Are</h2>
            <p className="text-muted-foreground leading-relaxed">
              We are professionals, entrepreneurs, students, and citizens bound by a common calling —
              to do good in the world. From our roots in the Portuguese community, we lead through cultural
              richness, service, and meaningful collaboration.
            </p>
          </div>
        </div>
      </section>

      {/* Values: Service, Leadership, Fellowship */}
      <section className="bg-muted px-6 py-20" aria-labelledby="values-heading">
        <div className="max-w-6xl mx-auto text-center space-y-10">
          <h2 id="values-heading" className="text-3xl font-bold text-primary">
            What We Stand For
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: 'Service',
                description: 'We give our time, talents, and resources to uplift others and respond to real-world needs.',
              },
              {
                title: 'Leadership',
                description: 'We grow as leaders by practicing empathy, accountability, and innovation in service.',
              },
              {
                title: 'Fellowship',
                description: 'We build lifelong friendships through shared action, purpose, and fun.',
              },
            ].map(({ title, description }) => (
              <div key={title} className="bg-background border border-border rounded-lg shadow-sm p-6 text-left space-y-2">
                <h3 className="text-xl font-semibold text-primary">{title}</h3>
                <p className="text-sm text-muted-foreground">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <MissionVision />

      {/* Club Milestones */}
      <div className="bg-muted">
        <ClubMilestones />
      </div>

      {/* Team Grid */}
      <div className="bg-background">
        <TeamGrid />
      </div>

      {/* Impact Highlights */}
      <div className="bg-primary text-primary-foreground">
        <ImpactHighlights />
      </div>
    </main>
  )
}
