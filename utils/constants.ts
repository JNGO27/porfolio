import { LyriksLaptop, LyriksTablet, LyriksMobile, FilmpireLaptop, FilmpireTablet, FilmpireMobile, MorrentLaptop, MorrentTablet, MorrentMobile } from '../assets/projectImages';
import { TS, JS, React, HTML, CSS, StyledComponents, Redux, Next, API, Node, MongoDB, SQL, PostGres, Git } from '../assets/technologies';

import { ProjectType, SkillListType } from '../types';

export const projectsArr: ProjectType[] = [
  {
    caseStudy: 1,
    laptopImg: LyriksLaptop,
    tabletImg: LyriksTablet,
    mobileImg: LyriksMobile,
    title: "Lyriks",
    content: "A media player",
    tech: ["Next.js", "React", "Redux Toolkit", "Redux RTK Query", "Styled Components", "Shazam API"],
  },
  {
    caseStudy: 2,
    laptopImg: FilmpireLaptop,
    tabletImg: FilmpireTablet,
    mobileImg: FilmpireMobile,
    title: "Filmpire",
    content: "A Movie application",
    tech: ["React", "CSS Modules", "Redux Toolkit", "Redux RTK Query", "TMDB API"],
  },
  {
    caseStudy: 3,
    laptopImg: MorrentLaptop,
    tabletImg: MorrentTablet,
    mobileImg: MorrentMobile,
    title: "Morrent",
    content: "A Car Rental Marketplace",
    tech: ["TypeScript", "React", "Styled Components", "Express", "MongoDB", "Google OAuth 2.0", "Passport.js", "Stripe"],
  },
];

export const allSkills: SkillListType[] = [
  {
    type: "Front-End",
    skills: [
      { skill: TS, skillName: "TypeScript"}, 
      { skill: JS, skillName: "JavaScript"}, 
      { skill: React, skillName: "React" }, 
      { skill: HTML, skillName: "HTML" }, 
      { skill: CSS, skillName: "CSS" }, 
      { skill: StyledComponents, skillName: "Styled Components" }, 
      { skill: Redux, skillName: "Redux Toolkit" }, 
      { skill: API, skillName: "API Data Fetching" }, 
      { skill: Next, skillName: "Next.js" } 
    ]
  },
  {
    type: "Back-End",
    skills: [
      { skill: API, skillName: "RESTFUL API'S", }, 
      { skill: Node, skillName: "Node.js" }, 
      { skill: MongoDB, skillName: "MongoDB" }, 
      { skill: SQL, skillName: "SQL" }, 
      { skill: PostGres, skillName: "PostGreSQL" },
    ]
  },
  {
    type: "Other",
    skills: [
      { skill: Git, skillName: "Git", },
    ]
  }
 ];