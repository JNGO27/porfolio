import { LyriksLaptop, LyriksTablet, LyriksMobile, FilmpireLaptop, FilmpireTablet, FilmpireMobile, MorrentLaptop, MorrentTablet, MorrentMobile } from '../assets/projectImages';
import { TS, JS, React, HTML, CSS, StyledComponents, Redux, Next, API, Node, MongoDB, SQL, PostGres, Git } from '../assets/technologies';

import { ProjectType, SkillListType, AllSkills } from '../types';

const Lyriks: ProjectType = {
  caseStudy: 1,
  laptopImg: LyriksLaptop,
  tabletImg: LyriksTablet,
  mobileImg: LyriksMobile,
  title: "Lyriks",
  content: "A media player",
  tech: ["Next.js", "React", "Redux Toolkit", "Redux RTK Query", "Styled Components", "Shazam API"],
}; 

const Filmpire: ProjectType = {
  caseStudy: 2,
  laptopImg: FilmpireLaptop,
  tabletImg: FilmpireTablet,
  mobileImg: FilmpireMobile,
  title: "Filmpire",
  content: "A Movie application",
  tech: ["React", "CSS Modules", "Redux Toolkit", "Redux RTK Query", "TMDB API"],
}; 

const Morrent: ProjectType = {
  caseStudy: 3,
  laptopImg: MorrentLaptop,
  tabletImg: MorrentTablet,
  mobileImg: MorrentMobile,
  title: "Morrent",
  content: "A Car Rental Marketplace",
  tech: ["TypeScript", "React", "Styled Components", "Express", "MongoDB", "Google OAuth 2.0", "Passport.js", "Stripe"],
};

export const projectsArr = [Lyriks, Filmpire, Morrent];

export const frontEndSkills: SkillListType = [ 
  { skill: TS, skillName: "TypeScript", type: "Front-End" }, 
  { skill: JS, skillName: "JavaScript"}, 
  { skill: React, skillName: "React" }, 
  { skill: HTML, skillName: "HTML" }, 
  { skill: CSS, skillName: "CSS" }, 
  { skill: StyledComponents, skillName: "Styled Components" }, 
  { skill: Redux, skillName: "Redux Toolkit" }, 
  { skill: API, skillName: "API Data Fetching" }, 
  { skill: Next, skillName: "Next.js" } 
];

export const backEndSkills: SkillListType = [ 
  { skill: API, skillName: "RESTFUL API'S", type: "Back-End"}, 
  { skill: Node, skillName: "Node.js" }, 
  { skill: MongoDB, skillName: "MongoDB" }, 
  { skill: SQL, skillName: "SQL" }, 
  { skill: PostGres, skillName: "PostGreSQL" } 
];

export const other: SkillListType = [ { skill: Git, skillName: "Git", type: "Other"} ];

export const allSkills: AllSkills = [ frontEndSkills, backEndSkills, other ];