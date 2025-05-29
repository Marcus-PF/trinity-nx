'use client';

import {
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
  Card,
  CardContent,
} from '@trinity/ui';

interface StepItemProps {
  value: string;
  title: string;
  description: string;
}

export function StepItem({ value, title, description }: StepItemProps) {
  return (
    <AccordionItem value={value} className="rounded-xl">
      <Card
        className="bg-card text-card-foreground border-border p-0 rounded-xl
                   hover:shadow-md transition-all duration-300
                   data-[state=open]:bg-secondary/10"
      >
        <AccordionTrigger
          className="px-3 sm:px-4 py-3 text-lg md:text-xl font-medium text-primary
                     hover:bg-secondary/10 focus:outline-none focus:ring-2 focus:ring-secondary
                     transition"
        >
          {title}
        </AccordionTrigger>
        <AccordionContent>
          <CardContent
            className="px-3 sm:px-4 py-3 text-base md:text-lg text-muted-foreground leading-relaxed"
          >
            {description}
          </CardContent>
        </AccordionContent>
      </Card>
    </AccordionItem>
  );
}
