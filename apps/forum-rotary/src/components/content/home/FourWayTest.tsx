'use client'

import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { ShieldCheck, Scale, Users, HeartHandshake } from 'lucide-react'
import { Card, CardTitle, CardContent, Badge } from '@trinity/ui'
import Image from 'next/image'

const items = [
  {
    id: 1,
    question: 'Is it the TRUTH?',
    description: 'We commit to honesty, transparency, and integrity in all we do.',
    icon: ShieldCheck,
  },
  {
    id: 2,
    question: 'Is it FAIR to all concerned?',
    description: 'We foster equity and fairness for everyone involved.',
    icon: Scale,
  },
  {
    id: 3,
    question: 'Will it build GOODWILL and BETTER FRIENDSHIPS?',
    description: 'We build relationships based on trust, kindness, and respect.',
    icon: HeartHandshake,
  },
  {
    id: 4,
    question: 'Will it be BENEFICIAL to all concerned?',
    description: 'We ensure our actions uplift and support the greater good.',
    icon: Users,
  },
]

export function FourWayTest() {
  const [activeId, setActiveId] = useState<number | null>(null)
  const wheelRef = useRef<HTMLDivElement>(null)

  return (
    <section
      className="relative bg-background text-foreground px-6 py-10 overflow-hidden"
      aria-labelledby="fourway-heading"
    >
      <div className="relative z-10 max-w-6xl mx-auto text-center space-y-3 mb-12">
        <h2 id="fourway-heading" className="text-3xl md:text-4xl font-bold text-primary">
          The Four-Way Test
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
          A playful, reflective experience built to explore Rotary’s ethical questions.
        </p>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center gap-8 max-w-7xl mx-auto">
        <div className="flex flex-col gap-6 w-full md:w-1/3">
          {[items[0], items[1]].map((item) => {
            const Icon = item.icon
            const isActive = activeId === item.id

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4 }}
                onClick={() => setActiveId(isActive ? null : item.id)}
                className={`cursor-pointer transform transition-all duration-300 ${
                  isActive ? 'bg-primary text-white scale-105' : 'bg-background hover:bg-primary/10'
                }`}
              >
                <Card>
                  <CardContent className="flex flex-col items-center justify-center p-6 text-center gap-4">
                    <Badge variant="secondary" className="text-lg font-bold px-3 py-1">
                      {item.id}
                    </Badge>
                    <Icon className="w-8 h-8 text-primary" />
                    <CardTitle className="text-lg font-semibold text-primary">
                      {item.question}
                    </CardTitle>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>

        <div
          ref={wheelRef}
          className="relative w-[320px] h-[320px] rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 shadow-inner"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 120, ease: 'linear' }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <Image
              src="/rotary-favicon.svg"
              alt="Rotary Emblem"
              width={300}
              height={300}
              className="z-10 opacity-90"
            />
          </motion.div>

          {[items[0], items[1], items[2], items[3]].map((item, index) => {
            const angleMap = [225, 135, 315, 45] // TL, BL, TR, BR[135, 225, 45, 315]
            const angle = angleMap[index]
            const rad = (angle * Math.PI) / 180
            const radius = 160
            const x = Math.cos(rad) * radius
            const y = Math.sin(rad) * radius

            const Icon = item.icon

            return (
              <motion.div
                key={item.id}
                className="absolute flex flex-col items-center cursor-pointer"
                style={{ top: '40%', left: '40%', transform: `translate(${x}px, ${y}px)` }}
                onClick={() => setActiveId(item.id)}
              >
                <div className={`p-4 bg-background rounded-full shadow-lg ${activeId === item.id ? 'ring-2 ring-primary' : ''}`}>
                  <Icon className="w-8 h-8 text-primary" />
                </div>
              </motion.div>
            )
          })}
        </div>

        <div className="flex flex-col gap-6 w-full md:w-1/3">
          {[items[2], items[3]].map((item) => {
            const Icon = item.icon
            const isActive = activeId === item.id

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4 }}
                onClick={() => setActiveId(isActive ? null : item.id)}
                className={`cursor-pointer transform transition-all duration-300 ${
                  isActive ? 'bg-primary text-white scale-105' : 'bg-background hover:bg-primary/10'
                }`}
              >
                <Card>
                  <CardContent className="flex flex-col items-center justify-center p-6 text-center gap-4">
                    <Badge variant="secondary" className="text-lg font-bold px-3 py-1">
                      {item.id}
                    </Badge>
                    <Icon className="w-8 h-8 text-primary" />
                    <CardTitle className="text-lg font-semibold text-primary">
                      {item.question}
                    </CardTitle>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
