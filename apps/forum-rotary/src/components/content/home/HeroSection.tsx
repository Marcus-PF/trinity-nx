'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from '@trinity/ui';

export function HeroSection() {
  return (
    <section
      aria-labelledby="club-heading"
      className="relative bg-background text-foreground px-4 py-12 sm:px-6 sm:py-16 md:px-8 md:py-20 overflow-hidden"
    >
      <div className="max-w-8xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-6 md:gap-8 min-h-[250px]">
        {/* Left: Background gradient + transparent PNG */}
        <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden shadow-lg">
          {/* Gradient behind image */}
          <div className="absolute inset-0 z-0 bg-gradient-to-br from-primary to-secondary" />

          {/* Foreground image with transparency */}
          <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden shadow-lg">
            <Image
              src="/images/portuguese-people-portugal-flag.png"
              alt="Portuguese community with Portugal flag"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-contain"
              priority
            />
          </div>
        </div>

        {/* Right: Messaging + CTAs */}
        <div className="z-20 space-y-2 md:space-y-4 p-6 md:p-8 text-left">
          <h1
            id="club-heading"
            className="text-2xl md:text-5xl font-extrabold text-primary"
          >
            Portuguese Forum International
          </h1>
          <h2
            id="club-sub-heading"
            className="text-lg md:text-4xl text-secondary"
          >
            Rotary E-Club
          </h2>
          <h3 className="text-2xl md:text-4xl font-bold text-accent">
            People of Action. United in Purpose.
          </h3>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
            The Portuguese Forum Rotary E-Club connects global Rotarians with
            Portugal’s vibrant communities. We drive meaningful change through
            leadership and service.
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link href="/membership">
                <Button
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-secondary transition"
                >
                  Become a Member
                </Button>
              </Link>
            </motion.div>
            <Link href="/about">
              <Button
                variant="outline"
                size="lg"
                className="border-primary text-primary hover:bg-primary/10 transition"
              >
                Our Impact
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
