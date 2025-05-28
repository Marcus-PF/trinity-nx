'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  Button,
} from '@trinity/ui'

export function HeroSection() {
  return (
    <section
      aria-labelledby="club-heading"
      className="relative bg-background text-foreground px-6 py-20 md:py-28 overflow-hidden"
    >
      <div className="max-w-8xl mx-auto relative grid grid-cols-1 md:grid-cols-2 items-center gap-10 min-h-[250px]">
        {/* Rotating favicon in center */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 80, ease: 'linear' }}
          className="hidden md:block absolute z-20 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] h-[320px] opacity-90"
          aria-hidden="true"
        >
          <div className="relative w-full h-full">
            <Image
              src="/rotary-favicon.svg"
              alt="Rotary International Gear"
              fill
              className="object-contain"
            />
          </div>
        </motion.div>

        {/* Left: Image with club name (h1) overlay */}
        <div className="relative h-[200px] md:h-[500px] w-full">
          <Image
            src="/images/lisbon-portugal-ocean.jpg"
            alt="Lisbon coastline with ocean cliffs"
            fill
            className="object-cover object-center rounded-xl shadow-md"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/80 via-black/50 to-black/20 mix-blend-multiply rounded-xl" />
          <h1
            id="club-heading"
            className="relative text-center md:text-left top-10 md:top-1/4 md:left-6 text-white text-2xl md:text-6xl font-extrabold tracking-tight drop-shadow-md leading-snug"
          >
            Portuguese Forum<br />International Rotary<br />E-Club
          </h1>
        </div>

        {/* Right: Hero message and CTAs */}
        {/* Adjusted padding on the right for md and larger screens */}
        <div className="space-y-8 text-center md:text-right z-10 md:pl-10 md:pr-10"> {/* Added md:pr-10 */}
          <h2
            id="hero-title"
            className="text-3xl md:text-5xl font-extrabold tracking-tight text-primary drop-shadow"
          >
            People of Action. <br className="hidden md:inline" />
            United in Purpose.
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto md:ml-auto md:mr-0 leading-relaxed">
            The Portuguese Forum Rotary Club brings global values to local impact — building
            communities, fostering leadership, and creating lasting change.
          </p>
          <div className="flex flex-wrap justify-center md:justify-end gap-4 mt-4">
            <Link href="/membership">
              {/* Increased button size using Tailwind's 'size' or 'h' and 'w' classes if 'size' isn't available from @trinity/ui */}
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-secondary hover:text-secondary-foreground transition px-6 py-3 text-lg"> {/* Added px-6 py-3 text-lg for visual size */}
                Join the Movement
              </Button>
            </Link>
            <Link href="/about">
              <Button
                variant="outline"
                size="lg" // Increased button size
                className="border-secondary text-secondary-foreground hover:bg-secondary/10 hover:text-secondary-foreground transition px-6 py-3 text-lg" // Added px-6 py-3 text-lg for visual size
              >
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}