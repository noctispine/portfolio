import { SkillInterface, AboutInterface, ProjectInterface } from "./type";
import {
  // STack Icons
  SiC,
  SiCplusplus,
  SiPython,
  SiJavascript,
  SiGit,
  SiNextDotJs,
  SiReact,
  SiTypescript,
  SiSass,
  SiTailwindcss,
  SiLinux,
  SiJest,
} from "react-icons/si";

import { FaLaptopCode, FaServer, FaCode, FaRegImages } from "react-icons/fa";

export const programmingSkills: SkillInterface[] = [
  {
    name: "Javascript",
    Icon: SiJavascript,
  },
  {
    name: "Python",
    Icon: SiPython,
  },
  {
    name: "C",
    Icon: SiC,
  },
  {
    name: "C++",
    Icon: SiCplusplus,
  },
];
export const webSkills: SkillInterface[] = [
  {
    name: "React.js",
    Icon: SiReact,
  },
  {
    name: "Next.js",
    Icon: SiNextDotJs,
  },
  {
    name: "Typescript",
    Icon: SiTypescript,
  },
  {
    name: "Jest",
    Icon: SiJest,
  },
  {
    name: "SASS/SCSS",
    Icon: SiSass,
  },
  {
    name: "TailwindCSS",
    Icon: SiTailwindcss,
  },
];

export const otherSkills: SkillInterface[] = [
  {
    name: "Linux",
    Icon: SiLinux,
  },
  {
    name: "Git",
    Icon: SiGit,
  },
];

export const about: AboutInterface[] = [
  {
    Icon: FaLaptopCode,
    title: "Frontend Development",
    body: "I feel prepared to be a junior frontend developer and am currently, looking for a job.",
  },
  {
    Icon: FaServer,
    title: "Backend Development",
    body: "Currently learning nodejs and expressjs.",
  },
  {
    Icon: FaRegImages,
    title: "Image Processing",
    body: "I process images for my university's uav (unmanned aerial vehicle) team.",
  },
  {
    Icon: FaCode,
    title: "Problem Solving",
    body: "I am interested in competitive programming questions, and I've been trying to solve as many as possible in my spare time.",
  },
];

// update the links of portfolio!!
export const projects: ProjectInterface[] = [
  {
    id: 1,
    name: "Portfolio",
    description: "It's my personal portfolio website.",
    image_url: "/images/portfolio.png",
    live_url: "https://www.erencam.dev/",
    github_url: "https://github.com/noctispine/portfolio",
    tags: ["nextjs", "typescript", "tailwindcss"],
  },

  {
    id: 2,
    name: "Battleship Game",
    description:
      "The classic naval combat board game which was developed by using Test-driven development (TDD). Also, reducer was used to handle complex statement.",
    image_url: "/images/battleship-game.png",
    live_url: "https://noctispine.github.io/battleship-game/",
    github_url: "https://github.com/noctispine/battleship-game",
    tags: ["react", "jest"],
  },
  {
    id: 3,
    name: "CV App",
    description:
      "This app provides for creating cv fastly. Also it is possible to download the created cv as pdf. ",
    image_url: "/images/react-cv-app.png",
    live_url: "https://noctispine.github.io/React-Cv-App/",
    github_url: "https://github.com/noctispine/React-Cv-App",
    tags: ["react", "scss"],
  },
  {
    id: 4,
    name: "Typing Game",
    description: "Quote typing game.",
    image_url: "/images/quote-typing.png",
    live_url: "https://codepen.io/researcher-pine/pen/qBqjjge",
    github_url: "https://github.com/noctispine/javascript-quote-typing-game",
    tags: ["vanillajs"],
  },

  {
    id: 5,
    name: "Message Board",
    description:
      "Basic message board website where visiters can post comments. I did it to practice Express, specifically routes and CRUD.",
    image_url: "/images/message-board.png",
    live_url: "http://blooming-springs-71172.herokuapp.com/",
    github_url: "https://github.com/noctispine/message-board",
    tags: ["express"],
  },
];
