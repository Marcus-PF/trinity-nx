'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { AspectRatio, Button, Separator } from '@trinity/ui';

export function MissionPreview() {
  return (
    <section
      className="bg-background text-foreground px-4 py-12 sm:px-6 sm:py-16 md:px-8 md:py-20"
      aria-labelledby="mission-heading"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10 items-start md:items-center">
        {/* Text Section (left) */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          role="region"
          aria-labelledby="mission-heading"
          className="space-y-6 md:pr-8 md:pl-4 text-center md:text-left"
        >
          <h2
            id="mission-heading"
            className="text-4xl md:text-5xl font-bold tracking-tight text-primary"
          >
            Our Mission
          </h2>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
            We unite Portugal’s communities to create lasting impact through
            service, education, and ethical leadership.
          </p>
          <p className="text-sm md:text-base text-muted-foreground/80 leading-relaxed">
            As part of Rotary International, we solve real-world challenges with
            compassion and hope.
          </p>
          <Separator className="my-4 w-full max-w-md bg-primary/50" />
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link href="/about">
              <Button
                size="lg"
                className="bg-primary text-primary-foreground
                           hover:bg-secondary hover:text-secondary-foreground
                           transition px-4 py-2 focus:ring-2 focus:ring-secondary"
                data-event="mission-cta-click"
              >
                Discover Our Mission
              </Button>
            </Link>
          </motion.div>
        </motion.div>

        {/* Image Section (right) */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="motion-reduce:transform-none"
        >
          <AspectRatio
            ratio={4 / 3}
            className="rounded-xl shadow-md ring-1 ring-primary/20 overflow-hidden"
          >
            <Image
              src="/images/lisbon-portugal-ocean.jpg"
              alt="Portuguese Rotarians supporting local education initiatives"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </AspectRatio>
        </motion.div>
      </div>
    </section>
  );
}
