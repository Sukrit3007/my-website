import React from 'react';
import './Work.css'; 
import Card from './Card';

const Work = () => {
  const projectsData = [
    {
      link: 'https://example.com/project1',
    //   imageSrc="path-to-your-image/image1.jpg",
      title: 'e-commerce website using react',
      description: 'Description of Project 1.',
    },
    {
      link: 'https://example.com/project2',
      title: 'Project 2',
      description: 'Description of Project 2.',
    },
    {
      link: 'https://example.com/project2',
      title: 'Project 2',
      description: 'Description of Project 2.',
    },
    

  ];

  return (
    <div className="work-page">
      <h1>my work</h1>
      <div className="card-container">
        {projectsData.map((project, index) => (
          <Card
            key={index}
            link={project.link}
            title={project.title}
            description={project.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Work;
