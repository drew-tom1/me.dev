"use client";

import Highlights from "app/components/highlights";
import "../global.css";
import { hobbyItems, projectItems, resumeItems } from "./items";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

export default function Page() {
  return (
    <VerticalTimeline>
      <VerticalTimelineElement visible={true}>
        <h3>Creative Director</h3>
        <h4>Miami, FL</h4>
        <p>
          Creative Direction, User Experience, Visual Design, Project Management, Team Leading
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement visible={true}>
        <h3>Creative Director</h3>
        <h4>Miami, FL</h4>
        <p>
          Creative Direction, User Experience, Visual Design, Project Management, Team Leading
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement visible={true}>
        <h3>Creative Director</h3>
        <h4>Miami, FL</h4>
        <p>
          Creative Direction, User Experience, Visual Design, Project Management, Team Leading
        </p>
      </VerticalTimelineElement>
    </VerticalTimeline>
  )
};