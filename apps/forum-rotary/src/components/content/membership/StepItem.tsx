'use client';

import {
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@trinity/ui';

interface StepItemProps {
  value: string;
  title: string;
  description: string;
}

export function StepItem({ value, title, description }: StepItemProps) {
  return (
    <AccordionItem
      value={value}
      className="border border-border rounded-lg bg-card shadow-sm
                 hover:shadow-md transition-all duration-300
                 data-[state=open]:bg-secondary/10"
    >
      <AccordionTrigger
        className="flex justify-between items-center px-4 sm:px-6 py-3
                   text-lg font-medium text-primary
                   hover:bg-secondary/10 focus:outline-none focus:bg-secondary/10 focus:ring-2 focus:ring-secondary transition"
      >
        {title}
      </AccordionTrigger>
      <AccordionContent className="px-4 sm:px-6 py-3 text-base text-muted-foreground leading-relaxed">
        {description}
      </AccordionContent>
    </AccordionItem>
  );
}
