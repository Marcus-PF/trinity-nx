'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from '@trinity/ui';

export function HeroSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8 }}
      aria-labelledby="club-heading"
      className="relative bg-background text-foreground px-4 py-12 sm:px-6 sm:py-16 md:px-8 md:py-20 overflow-hidden"
    >
      <div className="max-w-8xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-6 md:gap-8 min-h-[250px]">
        {/* Left: Background gradient + transparent PNG */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative w-full aspect-[16/9] rounded-xl overflow-hidden shadow-lg"
        >
          <div className="absolute inset-0 z-10 bg-gradient-to-br from-primary/25 to-secondary/25" />
          <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden shadow-lg">
            <Image
              src="/images/world-in-hands.webp"
              alt="Portuguese community with Portugal flag"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-contain"
              priority
            />
          </div>
        </motion.div>

        {/* Right: Messaging + CTAs */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="z-20 space-y-2 md:space-y-4 p-6 md:p-8 text-center md:text-left"
        >
          <h1 id="club-heading" className="text-2xl md:text-5xl font-extrabold text-primary">
            Portuguese International
          </h1>
          <h2 id="club-sub-heading" className="text-lg md:text-3xl text-secondary">
            Rotary E-Club of D9400, South Africa.
          </h2>
          <h3 className="text-md md:text-2xl font-bold text-accent">
            Connecting Global Communities Through Service.
          </h3>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
            Join the Portuguese International Rotary E-Club - a vibrant community connecting professionals worldwide to serve, lead, and create lasting change, all from the convenience of a virtual space.
          </p>
          <div className="flex flex-wrap gap-4 pt-2 justify-center md:justify-start">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link href="/about">
                <Button
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-secondary transition"
                >
                  Our Mission
                </Button>
              </Link>
            </motion.div>
            <Link href="/membership">
              <Button
                variant="outline"
                size="lg"
                className="border-primary text-primary hover:bg-primary/10 transition"
              >
                Become a Member
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
