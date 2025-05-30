'use client';

import { Card, CardHeader, CardContent } from '@trinity/ui';

interface BenefitCardProps {
  title: string;
  description: string;
}

export function BenefitCard({ title, description }: BenefitCardProps) {
  return (
    <Card
      className="bg-background h-full shadow-sm border border-border hover:shadow-lg transition-shadow duration-300"
    >
      <CardHeader className="text-xl font-semibold text-secondary">
        {title}
      </CardHeader>
      <CardContent className="text-base text-muted-foreground">
        {description}
      </CardContent>
    </Card>
  );
}
