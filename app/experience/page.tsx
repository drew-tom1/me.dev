"use client";

import Highlights from "app/components/highlights";
import "../global.css";
import { hobbyItems, projectItems, resumeItems } from "./items";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import usaa from "./photos/usaa.jpg";
import arctex from './photos/arctex.png';
import sjsu from './photos/sjsu.png';
import Image from 'next/image';

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-4xl mb-6 tracking-tighter">
        work experiences!
      </h1>
      <hr className="border-gray-700 mb-6" />
      <VerticalTimeline layout="1-column">
        <VerticalTimelineElement icon={<Image src={usaa} alt="USAA Logo" width={40} height={40} className="rounded-2xl"/>} visible={true} contentStyle={{ background: 'var(--color-zinc-900)', color: '#fff', border: 'solid', borderWidth: '1px'}} date="May 2025 - August 2025" dateClassName="text-center">
          <h3>Incoming Software Engineering Intern</h3>
          <h4>USAA</h4>
          <p>
            Contact Center Organization
          </p>
          <li>Java w/ Spring Boot and GraphQL</li>
          <li>JavaScript w/ React.js</li>
          <li>Agile/Scrum methodologies and SDLC</li>
        </VerticalTimelineElement>
        <VerticalTimelineElement icon={<Image src={arctex} alt="USAA Logo" width={40} height={40} className="rounded-2xl"/>} visible={true} contentStyle={{ background: 'var(--color-zinc-900)', color: '#fff', border: 'solid', borderWidth: '1px'}} date="September 2024 - January 2025" dateClassName="text-center">
          <h3>Software Engineering Intern</h3>
          <h4>Arctex Inc</h4>
          <p>
            CollegeAppAssist Team
          </p>
          <li>JavaScript w/ React.js</li>
          <li>RESTful APIs w/ Express.js and MongoDB</li>
          <li>API Testing w/ Postman</li>
        </VerticalTimelineElement>
        <VerticalTimelineElement icon={<Image src={sjsu} alt="USAA Logo" width={40} height={40} className="rounded-2xl"/>} visible={true} contentStyle={{ background: 'var(--color-zinc-900)', color: '#fff', border: 'solid', borderWidth: '1px'}} date="September 2024 - January 2025" dateClassName="text-center">
          <h3>Software Engineering Intern</h3>
          <h4>San Jose State University</h4>
          <p>
            Development Team
          </p>
          <li>Python w/ FastAPI</li>
          <li>JavaScript w/ React.js</li>
          <li></li>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </section>
  )
};