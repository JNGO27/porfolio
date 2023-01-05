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
  link: string;
  github: string;
};

export type IndividualSkill = {
  skill: StaticImageData;
  skillName: string;
};

export type SkillListType = { 
  type: "Front-End" | "Back-End" | "Other";
  skills: IndividualSkill[];
};