import { CSSProperties } from "react";
import { StaticImageData } from 'next/image';

export interface ImageStyles extends CSSProperties {
  [cssProp: string]: string | number | undefined;
}

export type ProjectType = {
  caseStudy: number;
  laptopImg: StaticImageData;
  tabletImg: StaticImageData;
  mobileImg: StaticImageData;
  title: string;
  content: string;
  tech: string[];
};

export type SkillListType = { 
  skill: StaticImageData;
  skillName: string;
  type?: "Front-End" | "Back-End" | "Other";
}[];

export type AllSkills = SkillListType[];