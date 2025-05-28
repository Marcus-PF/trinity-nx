'use client';

import { AboutIntro } from '../../components/content/about/AboutIntro';
import { MissionVision } from '../../components/content/about/MissionVision';
import { ClubMilestones } from '../../components/content/about/ClubMilestones';
import { TeamGrid } from '../../components/content/about/TeamGrid';
import { ImpactHighlights } from '../../components/content/about/ImpactHighlights';

export default function AboutPage() {
  return (
    <main className="flex flex-col space-y-20">
      <AboutIntro />
      <MissionVision />
      <div className="bg-muted">
        <ClubMilestones />
      </div>
      <div className="bg-background">
        <TeamGrid />
      </div>
      <div className="bg-[#003087] text-white">
        <ImpactHighlights />
      </div>
    </main>
  );
}