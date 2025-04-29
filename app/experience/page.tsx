"use client";

import "../global.css";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import Image from 'next/image';
import { Experience, workExperiences } from "./items";

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-4xl mb-6 tracking-tighter">
        work experiences!
      </h1>
      <hr className="border-gray-700 mb-6" />
      <VerticalTimeline layout="1-column">
        {workExperiences.map((experience: Experience, index) => (
          <VerticalTimelineElement key={index}  icon={<Image src={experience.photo} alt="company logo" width={40} height={40} className="rounded-2xl"/>} visible={true} contentStyle={{ background: 'var(--color-zinc-900)', color: '#fff', border: 'solid', borderWidth: '1px'}} date={experience.date} dateClassName="text-center">
            <h3>{experience.title}</h3>
            <h4>{experience.company}</h4>
            <p>{experience.department}</p>
            <ul>
              {experience.bullets.map((bullet, i) => (
                <li key={i}>- {bullet}</li>
              ))}
            </ul>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </section>
  )
};