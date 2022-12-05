import { LyriksLaptop, LyriksTablet, LyriksMobile, FilmpireLaptop, FilmpireTablet, FilmpireMobile, MorrentLaptop, MorrentTablet, MorrentMobile } from '../assets/projectImages';
import { ProjectType } from '../types';

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
