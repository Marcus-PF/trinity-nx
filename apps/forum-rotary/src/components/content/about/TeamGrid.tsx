'use client';

import {
  Card,
  CardContent,
} from '@trinity/ui';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { TeamDialog } from '../../content/about/TeamDialog';


const team = [
  {
    name: 'Manny Ferreirinha',
    role: 'President',
    bio: 'Award-winning entrepreneur and community leader committed to empowering Portuguese South Africans through business, culture, and grassroots development.',
    fullBio: `Manuel Ferreirinha is a dynamic entrepreneur and visionary community leader born in South Africa to Madeiran parents. With a commercial journey that began in 1977, he has built a legacy of business innovation, civic engagement, and cultural advocacy.

In 2019, Manuel was awarded "Entrepreneur of the Year" by the ACIF (Associação de Comercial e Industrial do Funchal – Madeira), presented by President Miguel Albuquerque of Madeira, honoring a career that spans decades. He began in his father’s wood packaging business and went on to acquire Verulam Sawmills in 1984, eventually joining and remaining an active member of Sawmilling South Africa.

His entrepreneurial ventures include:
- Founder, Mannys Trusses (1987) – Timber construction solutions  
- Founder, Mannys Hardware Supplies (1987) – General hardware and building materials  
- Member, Institute for Timber Construction SA  
- Founder, CMS (Community Monitoring Services, 1997) – Community-driven security network  

In 2016, Manuel received a crime prevention award from Emperors Palace for CMS’s work in Ekurhuleni, including the creation of rapid-response communication systems and foot patrol training.

He co-founded the Portuguese Forum of South Africa in 2001 alongside Father Carlos Gabriel, establishing a national NPO to uplift the Portuguese community while engaging government at all levels. Through the Forum, he also launched the community newspaper *Voz Portuguesa* in 2003 to unify and inform Portuguese South Africans.

Manuel assumed the role of President of the Rotary Portuguese Forum Universal in May 2025.

Notable Projects:
- 2020: Social Solidarity Food Drive – 700+ tonnes of food collected during COVID-19 lockdown  
- 2015: National Portuguese Community Showcase – celebrating leaders in business, culture, youth, and politics  
- 2017–2023: Caravela Portuguese Festival – fundraising and cultural celebration  
- 2022–2023: Madeira Fest – charity and cultural upliftment  
- 2007: Tembisa Community Policing Forum Project  

Government Engagements:
- 2002: Delegation visits to Madeira and Lisbon  
- 2004: Meeting with former President Jacob Zuma  
- 2012: Meeting with Deputy President Kgalema Motlanthe  
- 2019: Q&A with President Cyril Ramaphosa, hosted by HIP Alliance  

As National Chairman of the Portuguese Forum, Manuel continues to be a driving force for transformation, unity, and cultural pride.  
His guiding words: “The secret of my life is determination. To never hesitate. The value of strength is to unite.”`,
    image: '/images/team/manny-ferreirinha.webp',
  },
  {
    name: 'Paula Franco',
    role: 'President Elect',
    bio: 'Dynamic leader with 30+ years in business, marketing, and community development, shaping impactful initiatives across Southern Africa.',
    fullBio: `Paula Franco is a seasoned executive and community leader with over 30 years of experience spanning financial planning, marketing, events, business development, and nonprofit advocacy. Known for her resilience, leadership, and results-driven mindset, she brings energy and excellence to every initiative she leads.

Paula’s professional journey began in 1989 at Liberty Life, where she contributed to numerous successes, including a joint venture with Standard Bank. Her work in marketing, training, and consultant development earned her the position of Area Marketing Manager for Liberty Life in Mozambique. After 18 years with the company, she returned to South Africa and transitioned into nonprofit and community leadership.

As National Project and Events Manager of the Portuguese Forum of South Africa, and later its Executive Director, Paula played a pivotal role in expanding national programs and initiatives. Under her leadership:
- The Portuguese Women’s and Men’s Business Groups were established.  
- The Portuguese Youth Group was expanded and restructured.  
- Strategic fundraising partnerships and events were launched in collaboration with major businesses.  

In 2024, Paula spearheaded the creation of national Community Cluster Groups to empower local leaders—both men and women—through training and collaborative networking platforms aimed at community unity.

Recent leadership roles include:
- Vice-President, Johannesburg Chamber of Commerce (May 2025)  
- Vice-President, Rotary Portuguese Forum Universal (May 2025)  
- Council Board Member, South African Chamber of Commerce and Industry (joined November 2024)  

Paula also acts as a liaison between the Portuguese Forum and the Portuguese Consulate in Johannesburg, where she serves as a trusted member of the Consulate’s advisory body.

Her approach is deeply rooted in connecting people, building bridges between cultures, and ensuring that economic growth benefits communities at all levels. Paula Franco is a powerhouse of strategy, compassion, and action.`,

    image: '/images/team/paula-franco.webp',
  },
  {
    name: 'Jenna-Lee Kyriakides',
    role: 'Treasurer',
    bio: 'Chartered Accountant (SA) and seasoned financial leader across diverse industries, driven by integrity and impact.',
    fullBio: `Jenna-Lee Kyriakides is a dedicated Chartered Accountant (SA) with a passion for lifelong learning, community service, and financial leadership. She holds a B.Com Honours in Accounting Sciences from the University of Pretoria and completed her articles at Deloitte Johannesburg, gaining a solid foundation in audit and financial services.

Since qualifying in 2013, Jenna has worked across retail, construction, security, and medical sectors, consistently bringing strategic insight and ethical rigor to her roles. She is known for her sharp attention to detail, strong work ethic, and collaborative, solutions-oriented approach.

Currently, Jenna holds several leadership positions:
- Director, Awaken Design (Construction & Design)  
- Director, Mannys Hardware Supplies (Retail Trade)  
- Director, Nitro-Med Emergency Medical Services (Ambulance Services)  
- Senior Financial Manager, Community Monitoring Services (Security Services)  

Her commitment to the community is equally inspiring. She has led and contributed to initiatives such as:
- Social Solidarity Food Drive (2020) — over 700 tonnes of food collected during COVID-19 lockdown  
- Caravela Portuguese Festival (2017, 2018, 2023) — fundraising for local charities and cultural organizations  
- Madeira Fest (2023) — cultural celebration and charitable support  

Jenna also engaged with government through roles like:
- EXCO Member, Human Resource Development Council of South Africa (2013–2019)  
- Delegate at Union Buildings meeting with Deputy President Kgalema Motlanthe (2012)  

A believer in purpose-driven leadership, Jenna combines professional excellence with a deep commitment to positive social impact.`,
    image: '/images/team/jenna-kyriakides.webp',
  },
  {
    name: 'Zelia de Nobrego',
    role: 'Secretary',
    bio: 'Multidisciplinary leader with 20+ years across finance, legal, and telecoms, dedicated to excellence and vibrant community development.',
    fullBio: `Zelia de Nobrega is a seasoned professional whose career spans over two decades across finance, telecommunications, legal services, and community development. Her reputation for versatility, strategic thinking, and integrity defines her contribution in both corporate and civic spaces.

Zelia began her journey in the banking sector at Standard Bank, one of South Africa’s premier financial institutions. Here, she honed her analytical and operational skills, managing complex financial processes and building a robust foundation in fiscal management.

She later transitioned to the telecommunications industry, where she managed collections—an area requiring both technical credit expertise and empathetic customer engagement. Her agility in adapting to high-pressure environments cemented her ability to lead across industries.

Her entrepreneurial spirit led her into the fishing industry, where she applied her strategic and operational insight to explore new commercial opportunities.

Zelia also boasts 25 years of service as a paralegal, specializing in family law, contract law, and litigation. Her depth of legal knowledge and precision in documentation made her an indispensable ally in high-stakes legal proceedings.

In parallel with her professional career, Zelia is a committed community leader. She actively serves in the Portuguese Forum of South Africa as Cluster Leader for the Randburg, Sandton, and Norwood regions. In this role, she drives grassroots initiatives, cultural preservation, and social cohesion.

Her legacy is marked by professionalism, leadership, and a tireless commitment to uplifting both people and institutions around her.`,

    image: '/images/team/zelia-de-nobrega.webp',
  },
  {
    name: 'Mel Araujo',
    role: 'Membership Chair',
    bio: 'Sales and marketing expert with 25+ years in FMCG and pharma, passionate about community upliftment and building lasting relationships.',
    fullBio: `Marilia Araujo, affectionately known as Mel, is a seasoned Sales and Marketing professional with over 25 years of experience across the fast-moving consumer goods (FMCG) and pharmaceutical sectors. Her career is defined by strategic insight, a strong client-first ethos, and a consistent ability to deliver results.

Mel began her journey in the FMCG industry at Double T Distributors, where she served as a Sales Representative, supplying service stations, cafes, and retail outlets. This early role instilled in her a deep appreciation for customer service and laid the foundation for her client-centric approach.

Her pivot to the pharmaceutical industry marked a major turning point. At BioterHealth, she worked closely with pharmacists and nursing professionals, offering in-depth product support. She further expanded her expertise at Akaciahealth and Ascendis Health, managing corporate accounts, delivering staff training, and coordinating merchandising initiatives—gaining a comprehensive view of pharmaceutical sales and its unique challenges.

In a leadership role at Cosmo Sales and Marketing, Mel took the reins as Sales and Marketing Director. She oversaw major initiatives such as importing U.S. FMCG brands, listing new products with major retail chains, developing campaign materials, and leading a team of sales professionals. Her strategic leadership directly contributed to growth and stronger market presence.

Currently, Mel is a Sales Executive at *The Voz Portuguesa*, a leading Portuguese community newspaper, where she handles advertising sales and maintains strong client relationships.

Since January 2024, Mel has served as a Cluster Leader for the Portuguese Forum, overseeing community development in the East Rand region. She is deeply committed to preserving Portuguese heritage and fostering meaningful connections. Her guiding belief: strong community foundations and relationships are the key to a brighter future.

Mel’s journey is defined by adaptability, leadership, and a passion for both business success and cultural empowerment.`,

    image: '/images/team/mel-araujo.webp',
  },
  {
    name: 'Nelson Texeira',
    role: 'Rotary Foundation Chair',
    bio: 'Entrepreneur and community leader with deep roots in retail, storage, and cultural advocacy across South Africa’s Portuguese community.',
    fullBio: `Nelson Rodrigues Teixeira is a first-generation South African, born to Portuguese immigrant parents whose values of hard work, family, and cultural pride shaped his life from the beginning. His earliest entrepreneurial lessons came behind the till of his father’s supermarket, where he worked throughout his youth.

Though he initially pursued civil engineering, Nelson’s pragmatic instincts soon drew him back into business. He joined the family supermarket full-time, and within a year, co-invested in an independent venture that rapidly grew under his stewardship. After selling that business successfully, he returned to expand the family enterprise with his brother—eventually rebranding it into a thriving Spar Supermarket that became a cornerstone of the local community.

Driven by a passion for innovation, Nelson diversified into other sectors. He co-developed a meat wholesale operation and launched a self-storage brand, *U Can Store*, which now operates in seven locations and continues to grow across the region.

Outside of business, Nelson is a DIY enthusiast, avid traveler, and devoted family man. His life is centered around close relationships, hands-on problem-solving, and the joy of building things—both literally and figuratively.

Equally impactful is his dedication to cultural service. As a committed member of the Portuguese church, Nelson revitalized long-dormant fundraising events, reviving attendance and community spirit. His active role in the Portuguese Forum of South Africa highlights his mission to preserve and promote Portuguese heritage while contributing to broader civic progress.

Resilient, resourceful, and relationship-driven, Nelson Rodrigues Teixeira is a model of modern entrepreneurship rooted in tradition and community.`,

    image: '/images/team/nelson-teixeira.webp',
  },
];

export function TeamGrid() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-background px-6 py-20 md:py-28"
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
            <Card className="h-full bg-card border border-border hover:border-accent shadow-sm hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                <div className="w-60 h-60 relative rounded-full overflow-hidden ring-4 ring-primary hover:ring-6 hover:ring-accent transition-all">
                  <Image
                    src={member.image}
                    alt={`Portrait of ${member.name}, ${member.role}`}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl md:text-2xl font-semibold text-primary">
                  {member.name}
                </h3>
                <p className="text-sm md:text-base font-medium text-secondary uppercase tracking-wide">
                  {member.role}
                </p>
                <p className="text-sm text-muted-foreground">{member.bio}</p>

                <TeamDialog
                  name={member.name}
                  role={member.role}
                  fullBio={member.fullBio}
                />
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}