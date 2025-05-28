'use client';

import { Card, CardContent, Button, Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter, DialogClose } from '@trinity/ui';
import Image from 'next/image';
import { motion } from 'framer-motion';

const team = [
  {
    name: 'Manny Ferreirinha',
    role: 'President',
    bio: 'Lifelong Rotarian, passionate about education and inclusive leadership.',
    fullBio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    image: '/team/joana.jpg',
  },
  {
    name: 'Paula Franco',
    role: 'President Elect',
    bio: 'Community entrepreneur focused on outreach and event partnerships.',
    fullBio: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.',
    image: '/team/marco.jpg',
  },
  {
    name: 'Zelia de Nobrego',
    role: 'Secretary',
    bio: 'Governance and educational outreach with a passion for transparency.',
    fullBio: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.',
    image: '/team/tania.jpg',
  },
  {
    name: 'Jenna-Lee Kyriakides',
    role: 'Treasurer',
    bio: 'Finance expert dedicated to sustainable nonprofit funding.',
    fullBio: 'Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis.',
    image: '/team/ricardo.jpg',
  },
  {
    name: 'Mel Araujo',
    role: 'Membership Chair',
    bio: 'Storytelling, brand presence, and community partnerships.',
    fullBio: 'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam.',
    image: '/team/sofia.jpg',
  },
  {
    name: 'Nelson Texeira',
    role: 'Rotary Foundation Chair',
    bio: 'Welcomes and mentors new members, ensuring an engaging experience.',
    fullBio: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
    image: '/team/miguel.jpg',
  },
];

export function TeamGrid() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-muted px-6 py-20 md:py-28"
      aria-labelledby="team-heading"
    >
      <div className="max-w-6xl mx-auto text-center mb-12 space-y-4">
        <h2
          id="team-heading"
          className="text-3xl md:text-4xl font-bold tracking-tight text-primary"
        >
          Meet the Team
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Get to know the dedicated leaders behind the Portuguese Forum Rotary Club.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {team.map((member, index) => (
          <motion.div
            key={member.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Card className="h-full bg-background border border-border shadow-sm">
              <CardContent className="p-6 flex flex-col items-center text-center space-y-3">
                <div className="w-24 h-24 relative rounded-full overflow-hidden border-2 border-secondary">
                  <Image
                    src={member.image}
                    alt={`Portrait of ${member.name}, ${member.role}`}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-md font-semibold text-primary">{member.name}</h3>
                <p className="text-sm font-medium text-secondary">{member.role}</p>
                <p className="text-sm text-muted-foreground">{member.bio}</p>
                
                {/* Dialog Trigger */}
                <Dialog>
                  <DialogTrigger asChild>
                    <Button
                      variant="outline"
                      size="sm"
                      className="mt-2 border-primary text-primary hover:bg-primary/10"
                    >
                      Read More
                    </Button>
                  </DialogTrigger>

                  {/* Dialog Content */}
                  <DialogContent className="sm:max-w-md z-50 bg-white fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] overflow-visible">
                    <DialogHeader>
                      <DialogTitle className="text-primary">{member.name} - {member.role}</DialogTitle>
                      <DialogDescription className="text-muted-foreground">
                        Learn more about {member.name}'s contributions to the Portuguese Forum Rotary Club.
                      </DialogDescription>
                    </DialogHeader>
                    <div className="p-4">
                      <p className="text-sm text-muted-foreground leading-relaxed">{member.fullBio}</p>
                    </div>
                    <DialogFooter>
                      <DialogClose asChild>
                        <Button
                          variant="outline"
                          className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 bg-primary text-primary-foreground hover:bg-primary/90 h-9 px-4 py-2"
                        >
                          Close
                        </Button>
                      </DialogClose>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
