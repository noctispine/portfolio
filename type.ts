import { IconType } from "react-icons";

export interface SkillInterface {
  name: string;
  Icon: IconType;
}

export interface AboutInterface {
  Icon: IconType;
  title: string;
  body: string;
}

export interface ProjectInterface {
  id: number;
  name: string;
  description: string;
  image_url: string;
  live_url: string;
  github_url: string;
  tags: string[];
}

type Stack = "react" | "next.js" | "typescript" | "sass/scss" | "tailwind";
