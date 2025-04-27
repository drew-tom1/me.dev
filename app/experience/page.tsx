"use client";

import Highlights from "app/components/highlights";
import "../global.css";
import { hobbyItems, projectItems, resumeItems } from "./items";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-4xl mb-6 tracking-tighter">
        work experiences!
      </h1>
      <hr className="border-gray-700 mb-6" />
      <VerticalTimeline layout="1-column">
        <VerticalTimelineElement visible={true} contentStyle={{ background: 'var(--color-zinc-900)', color: '#fff', border: 'solid', borderWidth: '1px'}} date="September 2024 - January 2025" dateClassName="text-center">
          <h3>Software Engineering Intern</h3>
          <h4>Arctex Inc</h4>
          <p>
            Creative Direction, User Experience, Visual Design, Project Management, Team Leading
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement visible={true} contentStyle={{ background: 'var(--color-zinc-900)', color: '#fff', border: 'solid', borderWidth: '1px'}} date="September 2024 - January 2025" dateClassName="text-center">
          <h3>Creative Director</h3>
          <h4>Miami, FL</h4>
          <p>
            Creative Direction, User Experience, Visual Design, Project Management, Team Leading
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement visible={true} contentStyle={{ background: 'var(--color-zinc-900)', color: '#fff', border: 'solid', borderWidth: '1px'}} date="September 2024 - January 2025" dateClassName="text-center">
          <h3>Creative Director</h3>
          <h4>Miami, FL</h4>
          <p>
            Creative Direction, User Experience, Visual Design, Project Management, Team Leading
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement visible={true} contentStyle={{ background: 'var(--color-zinc-900)', color: '#fff', border: 'solid', borderWidth: '1px'}} date="September 2024 - January 2025" dateClassName="text-center">
          <h3>Creative Director</h3>
          <h4>Miami, FL</h4>
          <p>
            Creative Direction, User Experience, Visual Design, Project Management, Team Leading
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </section>
  )
};