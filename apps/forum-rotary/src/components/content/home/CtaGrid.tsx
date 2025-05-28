'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  Info,
  UserPlus,
  Mail,
} from 'lucide-react'
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
} from '@trinity/ui'

const ctas = [
  {
    title: 'About Us',
    description: 'Learn what drives us and how we serve with purpose.',
    href: '/about',
    icon: Info,
  },
  {
    title: 'Membership',
    description: 'Become a Rotarian and amplify your impact today.',
    href: '/membership',
    icon: UserPlus,
  },
  {
    title: 'Contact Us',
    description: 'Have a question? We’d love to connect, reach out to us.',
    href: '/contact',
    icon: Mail,
  },
]

export function CtaGrid() {
  return (
    <section
      className="bg-primary text-primary-foreground px-6 py-20"
      aria-labelledby="cta-heading"
    >
      <div className="max-w-6xl mx-auto text-center mb-10 space-y-2">
        <h2 id="cta-heading" className="text-3xl md:text-4xl font-bold">
          Ready to Take Action?
        </h2>
        <p className="text-lg md:text-xl max-w-2xl mx-auto text-primary-foreground/90"> {/* Using primary-foreground/90 for consistency */}
          Learn more, get involved, or reach out — we’d love to hear from you.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <TooltipProvider>
          {ctas.map((item, index) => {
            const Icon = item.icon
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group" // Added group class for group-hover
              >
                <Card className="bg-background text-foreground border border-border shadow-sm hover:shadow-md transition-all
                                 group-hover:-translate-y-1 group-hover:scale-[1.01]"> {/* Added group-hover effects */}
                  <CardHeader className="flex flex-row items-start gap-4">
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <div className="p-2 rounded-md bg-secondary text-secondary-foreground">
                          <Icon className="w-5 h-5" aria-hidden="true" />
                        </div>
                      </TooltipTrigger>
                      <TooltipContent>{item.title}</TooltipContent>
                    </Tooltip>
                    <CardTitle className="text-lg md:text-xl font-semibold">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4 text-base md:text-lg text-muted-foreground">
                    <p>{item.description}</p>
                    <Link href={item.href} passHref>
                      <Button variant="ghost" className="px-0 text-primary hover:text-accent underline underline-offset-4">
                        {item.title === 'Contact Us' ? 'Get in Touch →' : 'Explore →'}
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </TooltipProvider>
      </div>
    </section>
  )
}