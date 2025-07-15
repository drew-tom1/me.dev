import usaa from "./photos/usaa.png";
import arctex from './photos/arctex.png';
import sjsu from './photos/sjsu.png';
import thetatau from './photos/thetatau.png';
import { StaticImageData } from "next/image";

export type Experience = {
  title: string,
  company: string,
  department: string,
  photo: StaticImageData,
  date: string,
  bullets: Array<string>
}

export const workExperiences: Experience[] = [
  {
    title: "Software Engineering Intern",
    company: "United Services Automotive Association",
    department: "Contact Center Technologies",
    photo: usaa,
    date: "May 2025 - August 2025",
    bullets: [
      'Java w/ Spring Boot and GraphQL',
      'JavaScript w/ React.js',
      "Agile/Scrum methodologies and SDLC"
    ]
  },
  {
    title: "Software Engineering Intern (Backend)",
    company: "Arctex Inc",
    department: "CollegeAppAssist Team",
    photo: arctex,
    date: "September 2024 - January 2025",
    bullets: [
      'RESTful APIs w/ Express.js and MongoDB',
      'JavaScript w/ React.js',
      "API Testing w/ Postman"
    ]
  },
  {
    title: "Software Engineering Intern",
    company: "San Jose State University (SJSU)",
    department: "Development Team",
    photo: sjsu,
    date: "April 2024 - September 2024",
    bullets: [
      'Python w/ FastAPI',
      'JavaScript w/ React.js',
      "SQLite and Express.js"
    ]
  }
]
/**
 * todo
 */
export type Extracurricular = {
  title: string,
  organization: string,
  tenure: string,
  photo: StaticImageData
  bullets: Array<string>
}

export const campusInvolvement: Extracurricular[] = [
  {
    title: "Treasurer & Software Engineer",
    organization: "Theta Tau - Omega Epsilon Chapter",
    tenure: "Spring 2025 - Spring 2026",
    photo: thetatau,
    bullets: [
      'Lead Software Engineer on Chapter Finance Tool',
      ''
    ]
  }
]