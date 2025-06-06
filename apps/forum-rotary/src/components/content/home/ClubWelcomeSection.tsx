'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { AspectRatio, Button, Separator } from '@trinity/ui';

export function ClubWelcomeSection() {
  return (
    <section
      className="bg-background text-foreground px-4 py-20 sm:px-6 md:px-8 md:py-28"
      aria-labelledby="welcome-heading"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-start md:items-center">
        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="space-y-6 md:pr-6 text-center md:text-left"
        >
          <h2
            id="welcome-heading"
            className="text-3xl md:text-4xl font-bold tracking-tight text-primary"
          >
            Welcome to the Portuguese International Rotary E-Club!
          </h2>

          <div className="text-base md:text-lg text-muted-foreground leading-relaxed space-y-4">
            <p>
              We are a dynamic new Rotary E-Club, proudly inspired by the legacy of the Portuguese Forum of South Africa.
            </p>
            <p>
              Our members represent a global community—connected through Portuguese heritage, shared values, and a deep commitment to <strong>Service Above Self</strong>.
            </p>
            <p>
              As a fully virtual club, we embrace flexibility, foster cross-border friendships, and drive meaningful change from anywhere in the world.
            </p>
          </div>

          <Separator className="my-4 w-24 bg-border mx-auto md:mx-0" />

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link href="/about">
              <Button
                size="lg"
                className="className='bg-secondary text-primary-foreground hover:bg-secondary/90 focus-visible:ring-2 focus-visible:ring-ring transition px-6 py-3"
              >
                Learn More About Us
              </Button>
            </Link>
          </motion.div>
        </motion.div>

        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="motion-reduce:transform-none"
        >
          <AspectRatio
            ratio={4 / 3}
            className="rounded-xl shadow-md ring-1 ring-border overflow-hidden"
          >
            <Image
              src="/images/portugal-flag-in-sky.webp"
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
