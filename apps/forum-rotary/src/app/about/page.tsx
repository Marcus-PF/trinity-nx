'use client';

import { AboutIntro } from '../../components/content/about/AboutIntro';
import { MissionVision } from '../../components/content/about/MissionVision';
import { TeamGrid } from '../../components/content/about/TeamGrid';
import { ImpactHighlights } from '../../components/content/about/ImpactHighlights';

export default function AboutPage() {
  return (
    <main className="flex flex-col space-y-8">
      <AboutIntro />
      <MissionVision />
        <TeamGrid />
        <ImpactHighlights />
    </main>
  );
}