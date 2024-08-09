import React from 'react';
import { Element } from 'react-scroll';

function Projects() {
  const projects = [
    {
      title: 'Project One',
      description: 'This is a brief description of Project One.',
      link: 'https://projectone.com',
    },
    {
      title: 'Project Two',
      description: 'This is a brief description of Project Two.',
      link: 'https://projecttwo.com',
    },
    {
      title: 'Project Three',
      description: 'This is a brief description of Project Three.',
      link: 'https://projectthree.com',
    },
  ];
  
  return (
<Element name='projects'>
<section id="projects" className="py-12 bg-[#FFFFFF]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-2xl font-semibold mb-4">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <a
                href={project.link}
                className="text-blue-500 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  </Element>
  );
}

export default Projects;
