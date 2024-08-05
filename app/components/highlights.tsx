import React from 'react';

interface HighlightItemProps {
  date: string;
  title: string;
  description: string;
}

const HighlightItem: React.FC<HighlightItemProps> = ({ date, title, description }) => {
  return (
    <div className="flex flex-col md:flex-row md:items-center">
      <div className="bg-gray-200 rounded-full h-2 w-2 flex-shrink-0"></div>
      <div className="flex flex-col md:ml-4 mt-4 md:mt-0">
        <span className="text-sm font-semibold">{date}</span>
        <h3 className="text-l font-bold">{title}</h3>
        <p className="text-white italic">{description}</p>
      </div>
    </div>
  );
};

const Highlights: React.FC = () => {
  const highlightItems = [
    {
      date: 'Jun 2024 - Present',
      title: 'Software Developer @ DataAnnotation.tech',
      description: '',
    },
    {
      date: 'May 2024 - Present',
      title: 'Software Engineering Intern @ SJSU Computer and Software Engineering Society',
      description: '',
    },
    {
      date: 'Jul 2024 - Present',
      title: 'Software Engineering Fellow @ Headstarter',
      description: '',
    },
  ];

  return (
    <div className="flex flex-col gap-8 mt-2">
      {highlightItems.map((item, index) => (
        <HighlightItem key={index} date={item.date} title={item.title} description={item.description} />
      ))}
    </div>
  );
};

export default Highlights;
