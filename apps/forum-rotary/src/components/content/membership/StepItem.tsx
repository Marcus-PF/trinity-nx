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
        className="bg-card text-card-foreground border border-border rounded-xl p-0 
                   hover:shadow-md transition-all duration-300 
                   data-[state=open]:border-secondary data-[state=open]:ring-1 data-[state=open]:ring-secondary"
      >
        <AccordionTrigger
          className="px-4 py-4 text-lg md:text-xl font-semibold text-primary
                     hover:bg-secondary/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring
                     transition rounded-t-xl"
        >
          {title}
        </AccordionTrigger>
        <AccordionContent>
          <CardContent
            className="px-4 py-3 text-base md:text-lg text-muted-foreground leading-relaxed"
          >
            {description}
          </CardContent>
        </AccordionContent>
      </Card>
    </AccordionItem>
  );
}
