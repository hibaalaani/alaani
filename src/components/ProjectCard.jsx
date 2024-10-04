import React from "react";

const ProjectCard = ({ title, description, link , imageUrl}) => {
  return (
    <div className="bg-white shadow-md p-5 rounded-md hover:shadow-lg transition duration-300">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <img className="w-full" src={imageUrl} alt="Project" />
      <h3 className="text-2xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <a href={link} className="text-blue-600 hover:underline">
        View Project
      </a>
    </div>
    </div>
  );
};

export default ProjectCard;
