import React from 'react';

const moreProjects = [
  {
    title: 'Project Four',
    description: 'Description of project four.',
    image: 'https://via.placeholder.com/300',
    demoLink: '#',
    repoLink: '#',
  },
  {
    title: 'Project Five',
    description: 'Description of project five.',
    image: 'https://via.placeholder.com/300',
    demoLink: '#',
    repoLink: '#',
  },
  {
    title: 'Project Six',
    description: 'Description of project six.',
    image: 'https://via.placeholder.com/300',
    demoLink: '#',
    repoLink: '#',
  },
 
];

function MoreProjects() {
  return (
    <section className="bg-gray-900 py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-white mb-10">More Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {moreProjects.map((project, index) => (
            <div key={index} className="bg-gray-800 rounded-lg shadow-lg transform hover:scale-105 transition duration-300 ease-in-out">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2 text-white">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex justify-between mt-4">
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-purple-500 to-blue-500 text-white py-2 px-4 rounded-lg hover:from-blue-500 hover:to-purple-500 transition duration-300"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.repoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-gray-700 to-gray-900 text-white py-2 px-4 rounded-lg hover:from-gray-900 hover:to-gray-700 transition duration-300"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default MoreProjects;
