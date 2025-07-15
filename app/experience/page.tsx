"use client";

import "../global.css";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import Image from 'next/image';
import { Experience, workExperiences } from "./items";

export default function Page() {
  return (
    <div>
      <section>
        <div className="relative border border-gray-700 rounded-lg p-4">
          <div className="absolute -top-4 left-4 bg-zinc-900 px-2 text-lg text-cyan-200">
          where i've been!
          </div>
          <VerticalTimeline layout="1-column">
            {workExperiences.map((experience: Experience, index) => (
              <VerticalTimelineElement 
                key={index}  
                icon={                
                  <div className="w-full h-full flex items-center justify-center">
                    <Image
                      src={experience.photo}
                      alt="company logo"
                      width={100}
                      height={100}
                      className="rounded-xl" 
                      style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                    />
                  </div>
                }
                visible={true} 
                contentStyle={{ background: 'var(--color-zinc-900)', color: '#fff', border: '1px solid var(--color-gray-700)', boxShadow: 'none'}} 
                date={experience.date} 
                dateClassName="text-center"
              >
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
        </div>
      </section>
      <section className="mt-7">
        <div className="relative border border-gray-700 rounded-lg p-4">
          <div className="absolute -top-4 left-4 bg-zinc-900 px-2 text-lg text-cyan-200">
          extracurriculars
          </div>
        </div>
      </section>
    </div>
  )
};