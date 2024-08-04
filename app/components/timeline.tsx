// components/Timeline.tsx
import React from 'react';

interface TimelineItemProps {
  date: string;
  title: string;
  description: string;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ date, title, description }) => {
  return (
    <div className="flex flex-col md:flex-row md:items-center">
      <div className="bg-gray-200 rounded-full h-8 w-8 flex-shrink-0"></div>
      <div className="flex flex-col md:ml-4 mt-4 md:mt-0">
        <span className="text-sm font-semibold">{date}</span>
        <h3 className="text-l font-bold">{title}</h3>
        <p className="text-white italic">{description}</p>
      </div>
    </div>
  );
};

const Timeline: React.FC = () => {
  const timelineItems = [
    {
      date: 'Jun 2024 - Present',
      title: 'Software Developer @ DataAnnotation.tech',
      description: 'Developing and maintaining web applications using React and Node.js.',
    },
    {
      date: 'May 2024 - Present',
      title: 'Software Engineering Intern @ SJSU Computer and Software Engineering Society',
      description: 'Assisted in the development of internal tools and participated in code reviews.',
    },
    {
      date: 'Jul 2024 - Present',
      title: 'Software Engineering Fellow @ Headstarter',
      description: 'Studied cybersecurity and software engineering. Participated in various clubs and hackathons.',
    },
  ];

  return (
    <div className="flex flex-col gap-8">
      {timelineItems.map((item, index) => (
        <TimelineItem key={index} date={item.date} title={item.title} description={item.description} />
      ))}
    </div>
  );
};

export default Timeline;
