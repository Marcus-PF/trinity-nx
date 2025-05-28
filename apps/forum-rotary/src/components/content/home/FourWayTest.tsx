'use client';

import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Scale, Users, HeartHandshake } from 'lucide-react';
import { Card, CardTitle, CardContent, Badge, Button } from '@trinity/ui';
import Image from 'next/image';
import Link from 'next/link';

const items = [
  {
    id: 1,
    question: 'Is it the TRUTH?',
    description: 'We uphold honesty and integrity in all our actions in Portugal.',
    icon: ShieldCheck,
  },
  {
    id: 3,
    question: 'Will it build GOODWILL and BETTER FRIENDSHIPS?',
    description: 'We foster trust and kindness through community connections.',
    icon: HeartHandshake,
  },
  {
    id: 2,
    question: 'Is it FAIR to all concerned?',
    description: 'We promote equity and fairness in our Portuguese communities.',
    icon: Scale,
  },
  {
    id: 4,
    question: 'Will it be BENEFICIAL to all concerned?',
    description: 'Our work supports the greater good in Portugal and beyond.',
    icon: Users,
  },
];

export function FourWayTest() {
  const [activeId, setActiveId] = useState<number | null>(null);
  const wheelRef = useRef<HTMLDivElement>(null);

  const wheelSize = wheelRef.current?.offsetWidth || 320;

  return (
    <section
      className="bg-background text-foreground px-4 py-12 sm:px-6 sm:py-16 md:px-8 md:py-20 overflow-hidden"
      aria-labelledby="fourway-heading"
    >
      <div className="relative z-10 max-w-6xl mx-auto text-center space-y-4 mb-12">
        <h2 id="fourway-heading" className="text-4xl md:text-5xl font-bold text-primary">
          The Four-Way Test
        </h2>
        <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
          Explore Rotary’s ethical principles guiding our service in Portugal and beyond.
        </p>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center gap-6 sm:gap-8 md:gap-10 max-w-7xl mx-auto">
        {/* Left column */}
        <div className="flex flex-col gap-6 w-full md:w-1/3">
          {[items[0], items[1]].filter(Boolean).map((item) => {
            if (!item) return null;
            const Icon = item.icon;
            const isActive = activeId === item.id;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4 }}
                role="button"
                aria-label={`Select ${item.question}`}
                onClick={() => setActiveId(isActive ? null : item.id)}
                className={`cursor-pointer transition-all duration-300 w-full ${
                  isActive
                    ? 'bg-primary text-primary-foreground scale-110 ring-2 ring-secondary'
                    : 'bg-background hover:bg-secondary/10'
                }`}
              >
                <Card className="border-border">
                  <CardContent className="flex flex-col items-center justify-center p-4 sm:p-6 text-center gap-4">
                    <Badge className="text-base font-bold px-3 py-1 bg-primary text-primary-foreground">
                      {item.id}
                    </Badge>
                    <Icon className="w-10 h-10 text-primary" />
                    <CardTitle className="text-xl md:text-2xl font-semibold text-primary">
                      {item.question}
                    </CardTitle>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Wheel */}
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

          {items.map((item, index) => {
            if (!item) return null;
            const angleMap = [225, 135, 315, 45];
            const angle = angleMap[index];
            if (angle === undefined) return null;

            const rad = (angle * Math.PI) / 180;
            const radius = wheelSize / 2;
            const x = Math.cos(rad) * radius;
            const y = Math.sin(rad) * radius;
            const Icon = item.icon;
            const isActive = activeId === item.id;

            return (
              <motion.div
                key={item.id}
                className="absolute cursor-pointer"
                style={{
                  top: '40%',
                  left: '40%',
                  transform: `translate(${x}px, ${y}px)`,
                }}
                role="button"
                aria-label={`Select ${item.question}`}
                onClick={() => setActiveId(isActive ? null : item.id)}
              >
                <motion.div
                  className={`p-4 bg-background rounded-full shadow-lg transition-all duration-300 ${
                    isActive ? 'ring-2 ring-secondary' : ''
                  }`}
                  whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
                  style={{ transformOrigin: 'center' }}
                >
                  <Icon className="w-10 h-10 text-primary" />
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* Right column */}
        <div className="flex flex-col gap-6 w-full md:w-1/3">
          {[items[2], items[3]].filter(Boolean).map((item) => {
            if (!item) return null;
            const Icon = item.icon;
            const isActive = activeId === item.id;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4 }}
                role="button"
                aria-label={`Select ${item.question}`}
                onClick={() => setActiveId(isActive ? null : item.id)}
                className={`cursor-pointer transition-all duration-300 w-full ${
                  isActive
                    ? 'bg-primary text-primary-foreground scale-110 ring-2 ring-secondary'
                    : 'bg-background hover:bg-secondary/10'
                }`}
              >
                <Card className="border-border">
                  <CardContent className="flex flex-col items-center justify-center p-4 sm:p-6 text-center gap-4">
                    <Badge className="text-base font-bold px-3 py-1 bg-primary text-primary-foreground">
                      {item.id}
                    </Badge>
                    <Icon className="w-10 h-10 text-primary" />
                    <CardTitle className="text-xl md:text-2xl font-semibold text-primary">
                      {item.question}
                    </CardTitle>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* CTA */}
      <div className="mt-8 text-center">
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Link href="/membership">
            <Button
              size="lg"
              className="bg-secondary text-secondary-foreground hover:bg-secondary/80 transition px-6 py-3 focus:ring-2 focus:ring-secondary"
              data-event="fourway-cta-click"
            >
              Join Us Today
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
