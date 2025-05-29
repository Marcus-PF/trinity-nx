'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Info, UserPlus, Mail } from 'lucide-react';
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  Button,
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@trinity/ui';

const ctas = [
  {
    title: 'About Us',
    description: 'Discover how our E-Club serves Portugal and beyond with purpose.',
    href: '/about',
    icon: Info,
  },
  {
    title: 'Membership',
    description: 'Join a global network of Rotarians making a difference in Portugal.',
    href: '/membership',
    icon: UserPlus,
  },
  {
    title: 'Contact Us',
    description: 'Reach out to collaborate or learn about our initiatives.',
    href: '/contact',
    icon: Mail,
  },
];

export function CtaGrid() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8 }}
      className="bg-primary text-primary-foreground px-4 py-12 sm:px-6 sm:py-16 md:px-8 md:py-20"
      aria-labelledby="cta-heading"
    >
      <div className="max-w-6xl mx-auto text-center mb-12 space-y-4">
        <h2 id="cta-heading" className="text-4xl md:text-5xl text-primary-foreground font-bold tracking-tight">
          Ready to Take Action?
        </h2>
        <p className="text-base md:text-lg max-w-2xl mx-auto text-primary-foreground/90">
          Learn more, get involved, or reach out — we’d love to hear from you.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-6xl mx-auto">
        <TooltipProvider>
          {ctas.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="group motion-reduce:transform-none"
              >
                <Card
                  role="region"
                  aria-labelledby={`cta-${index}`}
                  className="bg-background text-foreground border border-border shadow-sm
                             hover:shadow-lg transition-all duration-300
                             group-hover:-translate-y-1 group-hover:scale-[1.03]
                             min-h-[200px] flex flex-col justify-between"
                >
                  <CardHeader className="flex items-center gap-4 px-4 py-4 sm:px-6 sm:py-5">
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <div
                          className="p-3 rounded-md bg-accent text-accent-foreground"
                          aria-label={`${item.title} icon`}
                        >
                          <Icon className="w-8 h-8" aria-hidden="true" />
                        </div>
                      </TooltipTrigger>
                      <TooltipContent>{item.title}</TooltipContent>
                    </Tooltip>
                    <CardTitle
                      id={`cta-${index}`}
                      className="text-xl md:text-2xl font-bold"
                    >
                      {item.title}
                    </CardTitle>
                  </CardHeader>

                  <CardContent className="space-y-4 text-base px-4 pb-6 sm:px-6 flex-grow text-muted-foreground">
                    <p>{item.description}</p>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Link href={item.href}>
                        <Button
                          size="lg"
                          variant="outline"
                          className="text-secondary border-secondary hover:bg-secondary/10 focus-visible:ring-2 focus-visible:ring-ring transition"
                          data-event="cta-click"
                          data-cta={item.title}
                        >
                          {item.title === 'Contact Us'
                            ? 'Connect With Us'
                            : item.title === 'Membership'
                            ? 'Join Today'
                            : 'Our Mission'}
                        </Button>
                      </Link>
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </TooltipProvider>
      </div>
    </motion.section>
  );
}
