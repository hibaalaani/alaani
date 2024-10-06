// pages/Projects.js
import React from 'react';
import ProjectCard from '../components/ProjectCard';

const Projects = () => {
  const projects = [
    {
      title: 'Candy Color',
      description: 'A brief description of Project One.',
      imageUrl: `${import.meta.env.VITE_API_URL}/assets/img/Candy.png`,
      link: "https://alaani-candy-color.netlify.app/",
    },
    {
        title: "Color Game",
        description: "A beautiful image gallery.",
        imageUrl: `${import.meta.env.VITE_API_URL}/assets/img/gameColor.png`,
        link: "https://color-game-guess.netlify.app/",
      },
      {
        title: "The Image Gallery",
        description: "A beautiful image gallery.",
        imageUrl: `${import.meta.env.VITE_API_URL}/assets/img/Gallery.png`,
        link: "https://alaani-image-gallery.netlify.app/",
      },
  
    {
      title: 'Tgif',
      description: 'A brief description of Project Two.',
      imageUrl: `${import.meta.env.VITE_API_URL}/assets/img/Tgif.png`,
      link: "https://alaani-tgif.netlify.app/",
    },
    {
        title: "More Info , if you like more automation with Python",
        description: "Double Check my GITHUB",
        imageUrl: `${import.meta.env.VITE_API_URL}/assets/img/download.jpg`,
        link: "https://github.com/hibaalaani",
      },
  ];

  return (
    <section  className="py-10  bg-gray-500 bg-gray-100">
    
      <h2 className="text-3xl text-white font-bold text-center my-10">Projects</h2>
      <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project}   imageUrl = {project.imageUrl}/>
        ))}
     </div>
      </div>
    </section>
  );
};

export default Projects;
