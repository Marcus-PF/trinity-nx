'use client'

import { Card, CardContent } from '@trinity/ui'
import Image from 'next/image'
import { motion } from 'framer-motion'

const team = [
  {
    name: 'Manny Ferreirinha',
    role: 'President',
    bio: 'Lifelong Rotarian, passionate about education and inclusive leadership.',
    image: '/team/joana.jpg',
  },
  {
    name: 'Paula Franco',
    role: 'President Elect',
    bio: 'Community entrepreneur focused on outreach and event partnerships.',
    image: '/team/marco.jpg',
  },
  {
    name: 'Zelia de Nobrego',
    role: 'Secretary',
    bio: 'Governance and educational outreach with a passion for transparency.',
    image: '/team/tania.jpg',
  },
  {
    name: 'Jenna-Lee Kyriakides',
    role: 'Treasurer',
    bio: 'Finance expert dedicated to sustainable nonprofit funding.',
    image: '/team/ricardo.jpg',
  },
  {
    name: 'Mel Araujo',
    role: 'Membership Chair',
    bio: 'Storytelling, brand presence, and community partnerships.',
    image: '/team/sofia.jpg',
  },
  {
    name: 'Nelson Texeira',
    role: 'Rotary Foundation Chair',
    bio: 'Welcomes and mentors new members, ensuring an engaging experience.',
    image: '/team/miguel.jpg',
  },
]

export function TeamGrid() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-muted text-foreground px-6 py-20 md:py-28"
      aria-labelledby="team-heading"
    >
      <div className="max-w-6xl mx-auto text-center mb-12 space-y-4">
        <h2
          id="team-heading"
          className="text-3xl md:text-4xl font-bold tracking-tight text-primary"
        >
          Meet the Team
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Get to know the dedicated leaders behind the Portuguese Forum Rotary Club.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {team.map((member, index) => (
          <motion.div
            key={member.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Card className="h-full bg-background border border-border shadow-sm">
              <CardContent className="p-6 flex flex-col items-center text-center space-y-2">
                <div className="w-24 h-24 relative rounded-full overflow-hidden border-2 border-secondary">
                  <Image
                    src={member.image}
                    alt={`Portrait of ${member.name}, ${member.role}`}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                <h3 className="text-xl font-semibold text-primary">{member.name}</h3>
                <p className="text-sm font-medium text-secondary">{member.role}</p>
                <p className="text-sm text-muted-foreground">{member.bio}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}
