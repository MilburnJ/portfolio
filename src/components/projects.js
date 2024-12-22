import React from "react";

const Projects = () => {
    const projectList = [
      {
        title: "Marine Debris Detection",
        description: "Used Faster R-CNN to detect marine debris in satellite imagery.",
      },
      {
        title: "Gaussian & Laplacian Pyramids",
        description: "Implemented multi-resolution image analysis using Python.",
      },
      {
        title: "Interactive Doodle Prototype",
        description: "Built an Android doodle app with custom brush tools.",
      },
    ];
  
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
        <h1 className="text-4xl font-bold text-blue-600">My Projects</h1>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl">
          {projectList.map((project, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg p-6 text-center"
            >
              <h2 className="text-2xl font-bold text-gray-800">{project.title}</h2>
              <p className="mt-4 text-gray-600">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Projects;
  