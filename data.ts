import {
  SkillInterface,
  AboutInterface,
  ProjectInterface,
  BookInterface,
} from './type'
import {
  // STack Icons
  SiC,
  SiCplusplus,
  SiPython,
  SiJavascript,
  SiGit,
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiSass,
  SiTailwindcss,
  SiLinux,
  SiJest,
  SiRedux,
  SiGo,
  SiExpress,
  SiMongodb,
  SiPostgresql,
} from 'react-icons/si'

import { FaLaptopCode, FaServer, FaCode, FaRegImages } from 'react-icons/fa'

export const programmingSkills: SkillInterface[] = [
  {
    name: 'C',
    Icon: SiC,
  },
  {
    name: 'Javascript',
    Icon: SiJavascript,
  },
  {
    name: 'C++',
    Icon: SiCplusplus,
  },
  {
    name: 'Go',
    Icon: SiGo,
  },
  {
    name: 'Python',
    Icon: SiPython,
  },
]
export const webSkills: SkillInterface[] = [
  {
    name: 'React.js',
    Icon: SiReact,
  },
  {
    name: 'Next.js',
    Icon: SiNextdotjs,
  },
  {
    name: 'Typescript',
    Icon: SiTypescript,
  },
  {
    name: 'Redux',
    Icon: SiRedux,
  },
  {
    name: 'Jest',
    Icon: SiJest,
  },
  {
    name: 'SASS/SCSS',
    Icon: SiSass,
  },
  {
    name: 'TailwindCSS',
    Icon: SiTailwindcss,
  },
]

export const otherSkills: SkillInterface[] = [
  {
    name: 'Express',
    Icon: SiExpress,
  },
  {
    name: 'MongoDB',
    Icon: SiMongodb,
  },
  {
    name: 'Postgresql',
    Icon: SiPostgresql,
  },
  {
    name: 'Linux',
    Icon: SiLinux,
  },
  {
    name: 'Git',
    Icon: SiGit,
  },
]

export const about: AboutInterface[] = [
  {
    Icon: FaLaptopCode,
    title: 'Frontend Development',
    body: '',
  },
  {
    Icon: FaServer,
    title: 'Backend Development',
    body: 'CRUD API, REST API, Database Design',
  },
  {
    Icon: FaRegImages,
    title: 'image Processing',
    body: "I process images for my university's uav (unmanned aerial vehicle) team.",
  },
  {
    Icon: FaCode,
    title: 'Problem Solving',
    body: "I am interested in competitive programming questions, and I've been trying to solve as many as possible in my spare time.",
  },
]

// update the links of portfolio!!
export const projects: ProjectInterface[] = [
  {
    id: 1,
    name: 'Portfolio',
    description: "It's my personal portfolio website.",
    image_url: '/images/portfolio.png',
    live_url: 'https://www.erencam.dev/',
    github_url: 'https://github.com/noctispine/portfolio',
    tags: ['nextjs', 'typescript', 'tailwindcss'],
  },
  {
    id: 2,
    name: 'Full Stack Ecommerce App',
    description:
      'Nodejs, Express is used to deal with the backend. Authentication API is token based (I have used JWT). MongoDB is used for the db. In the frontend part, state management is handled by using redux/redux-saga.',
    image_url: '/images/ecommerce.png',
    live_url: 'https://express-ecommerce.herokuapp.com/',
    github_url: 'https://github.com/noctispine/react-ecommerce',
    tags: [
      'react',
      'redux',
      'express',
      'nodejs',
      'mongodb',
      'styled-components',
    ],
  },
  {
    id: 3,
    name: 'Battleship Game',
    description:
      'The classic naval combat board game which was developed by using Test-driven development (TDD). Also, reducer was used to handle complex statement.',
    image_url: '/images/battleship-game.png',
    live_url: 'https://noctispine.github.io/battleship-game/',
    github_url: 'https://github.com/noctispine/battleship-game',
    tags: ['react', 'jest'],
  },
  {
    id: 4,
    name: 'CV App',
    description:
      'This app provides for creating cv fastly. Also it is possible to download the created cv as pdf. ',
    image_url: '/images/react-cv-app.png',
    live_url: 'https://noctispine.github.io/React-Cv-App/',
    github_url: 'https://github.com/noctispine/React-Cv-App',
    tags: ['react', 'scss'],
  },
  {
    id: 5,
    name: 'Typing Game',
    description: 'Quote typing game.',
    image_url: '/images/quote-typing.png',
    live_url: 'https://codepen.io/researcher-pine/pen/qBqjjge',
    github_url: 'https://github.com/noctispine/javascript-quote-typing-game',
    tags: ['vanillajs'],
  },

  {
    id: 6,
    name: 'Message Board',
    description:
      'Basic message board website where visiters can post comments. I did it to practice Express, specifically routes and CRUD.',
    image_url: '/images/message-board.png',
    live_url: 'http://blooming-springs-71172.herokuapp.com/',
    github_url: 'https://github.com/noctispine/message-board',
    tags: ['express'],
  },
]

export const books: BookInterface[] = [
  {
    title: 'Database System Concepts',
    author: [
      'Henry F. Korth',
      'S. Sudarshan',
      'Abraham Silberschatz, Professor',
    ],
    image: '/images/books/Database_System_Concepts_Henry_F._Korth.png',
    url: 'http://books.google.com.tr/books?id=dc5HswEACAAJ&dq=isbn:9780078022159&hl=&cd=1&source=gbs_api',
  },
  {
    title: 'Operating System Concepts',
    author: ['Abraham Silberschatz', 'Peter B. Galvin', 'Greg Gagne'],
    image: '/images/books/Operating_System_Concepts_Abraham_Silberschatz.png',
    url: 'http://books.google.com.tr/books?id=s-TltAEACAAJ&dq=isbn:978-1-119-32091-3&hl=&cd=1&source=gbs_api',
  },
  {
    title: 'Go in Action',
    author: ['Erik St. Martin', 'William Kennedy', 'Brian Ketelsen'],
    image: '/images/books/Go_in_Action_Erik_St._Martin.png',
    url: 'http://books.google.com.tr/books?id=nDszEAAAQBAJ&printsec=frontcover&dq=isbn:9781638352020&hl=&cd=1&source=gbs_api',
  },
  {
    title: 'Programming JavaScript Applications',
    author: ['Eric Elliott'],
    image: '/images/books/Programming_JavaScript_Applications_Eric_Elliott.png',
    url: 'http://books.google.com.tr/books?id=RUjnAwAAQBAJ&printsec=frontcover&dq=isbn:9781491950258&hl=&cd=1&source=gbs_api',
  },
  {
    title: 'Eloquent JavaScript, 3rd Edition',
    author: ['Marijn Haverbeke'],
    image:
      '/images/books/Eloquent_JavaScript,_3rd_Edition_Marijn_Haverbeke.png',
    url: 'http://books.google.com.tr/books?id=p1v6DwAAQBAJ&printsec=frontcover&dq=isbn:1593279507&hl=&cd=1&source=gbs_api',
  },
  {
    title: "You Don't Know JS: Up and Going",
    author: ['Kyle Simpson'],
    image: "/images/books/You_Don't_Know_JS:_Up_and_Going_Kyle_Simpson.png",
    url: 'http://books.google.com.tr/books?id=PmELrgEACAAJ&dq=isbn:9781491924464&hl=&cd=1&source=gbs_api',
  },
  {
    title: "You Don't Know JS Yet",
    author: ['Kyle Simpson'],
    image: "/images/books/You_Don't_Know_JS_Yet_Kyle_Simpson.png",
    url: 'http://books.google.com.tr/books?id=Y_R5zQEACAAJ&dq=isbn:9798621536459&hl=&cd=1&source=gbs_api',
  },
  {
    title: "You Don't Know JS: This and Object Prototypes",
    author: ['Kyle Simpson'],
    image:
      "/images/books/You_Don't_Know_JS:_This_and_Object_Prototypes_Kyle_Simpson.png",
    url: 'http://books.google.com.tr/books?id=mIG-oAEACAAJ&dq=isbn:9781491904152&hl=&cd=1&source=gbs_api',
  },
]
