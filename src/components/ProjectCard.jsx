const ProjectCard = ({ title, description, imageUrl , live_link , github_link}) => {
    return (
        <div className="relative max-w-sm bg-white border border-gray-200 rounded-xl shadow-lg transform hover:shadow-2xl hover:scale-105 transition-all duration-500 ease-in-out hover:bg-gradient-to-br from-gray-100 to-blue-50 m-4 animate-fadeIn">
        <div className="overflow-hidden rounded-t-xl">
          <img className="w-full h-48 object-cover hover:scale-110 transition-transform duration-700" src={imageUrl} alt={title} />
        </div>
        <div className="p-6">
          <h3 className="text-2xl font-bold text-gray-800 mb-2 transition-all duration-500 ease-in-out">{title}</h3>
          <p className="text-gray-600 text-sm mb-4">{description}</p>
          <a 
            href={live_link?live_link:github_link} 
            className="inline-block px-4 py-2 text-white bg-blue-600 rounded-md shadow hover:bg-blue-700 transition-colors duration-300 ease-in-out"
          >
            View Project
          </a>
        </div>
      </div>
    );
  };
  

  export default ProjectCard