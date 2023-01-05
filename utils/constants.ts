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
    content: "A modern music application that allows users to explore and listen to music.",
    tech: ["Next.js", "React", "Redux Toolkit", "Redux RTK Query", "Styled Components", "Shazam API"],
    link: "https://lyriks-music-jngo27.vercel.app/home",
    github: "https://github.com/JNGO27/Lyriks",
  },
  {
    caseStudy: 2,
    laptopImg: FilmpireLaptop,
    tabletImg: FilmpireTablet,
    mobileImg: FilmpireMobile,
    title: "Filmpire",
    content: "A movie exploration application where users can find all their favorite movies and genres.",
    tech: ["React", "CSS Modules", "Redux Toolkit", "Redux RTK Query", "TMDB API"],
    link: "https://main--filmpire-jngo27.netlify.app/",
    github: "https://github.com/JNGO27/Filmpire-JNGO27",
  },
  {
    caseStudy: 3,
    laptopImg: MorrentLaptop,
    tabletImg: MorrentTablet,
    mobileImg: MorrentMobile,
    title: "Morrent",
    content: "An online booking system designed to meet the needs of any car-renting business",
    tech: ["TypeScript", "React", "Styled Components", "Express", "MongoDB", "Google OAuth 2.0", "Passport.js", "Stripe"],
    link: "",
    github: "",
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