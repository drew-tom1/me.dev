import usaa from "./photos/usaa.jpg";
import arctex from './photos/arctex.png';
import sjsu from './photos/sjsu.png';
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
    title: "Incoming Software Engineering Intern",
    company: "United States Automotive Association (USAA)",
    department: "Contact Center Organization",
    photo: usaa,
    date: "May 2025 - August 2025",
    bullets: [
      'Java w/ Spring Boot and GraphQL',
      'JavaScript w/ React.js',
      "Agile/Scrum methodologies and SDLC"
    ]
  },
  {
    title: "Software Engineering Intern",
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