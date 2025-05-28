'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  AspectRatio,
  Button,
  Separator,
} from '@trinity/ui'

export function MissionPreview() {
  return (
    <section
      className="bg-background text-foreground px-6 py-20 md:py-28"
      aria-labelledby="mission-heading"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Text Section (left) */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-6 md:pr-6"
        >
          <h2
            id="mission-heading"
            className="text-3xl md:text-4xl font-bold tracking-tight text-primary"
          >
            Our Mission
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            We unite people of action to create lasting impact — uplifting communities through
            service, education, and compassion.
          </p>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            As part of Rotary International, our mission is rooted in ethical leadership and global
            citizenship. We’re here to solve real-world challenges with heart, hands, and hope.
          </p>

          <Separator className="my-4 max-w-sm" />

          <Link href="/about">
            <Button
              variant="outline"
              size="lg"
              className="text-primary border-primary hover:bg-secondary hover:text-secondary-foreground transition text-lg"
            >
              Learn More
            </Button>
          </Link>
        </motion.div>

        {/* Image Section (right) */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <AspectRatio ratio={16 / 10} className="rounded-xl shadow-md ring-1 ring-border overflow-hidden">
            <Image
              src="/images/lisbon-portugal-ocean.jpg"
              alt="Rotary members supporting education in local communities"
              fill
              className="object-cover"
              priority
            />
          </AspectRatio>
        </motion.div>
      </div>
    </section>
  )
}
