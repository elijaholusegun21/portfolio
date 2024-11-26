import React from 'react';

const projects = [
  {
    title: 'e-commerce store',
    description: 'How an e-commerce store should look like.',
    image: 'https://images.pexels.com/photos/6214479/pexels-photo-6214479.jpeg?auto=compress&cs=tinysrgb&w=600',
    demoLink: 'https://my-shop-dusky.vercel.app/',
    repoLink: 'https://github.com/elijaholusegun21/myShop.git',
  },
  {
    title: 'Project Two',
    description: 'This is a super admin dashboard.',
    image: 'https://www.google.com/imgres?q=admin%20dashboard%20page%20image&imgurl=https%3A%2F%2Fthemewagon.com%2Fwp-content%2Fuploads%2F2021%2F07%2Fruang-1.png&imgrefurl=https%3A%2F%2Fthemewagon.com%2Fthemes%2Ffree-bootstrap-4-html-5-admin-dashboard-website-template-ruang%2F&docid=p8LITmAxy2DF3M&tbnid=ubc6JHDkPQDPdM&vet=12ahUKEwjO7f3KhPuJAxUVV0EAHVyOBOUQM3oECB0QAA..i&w=1920&h=1178&hcb=2&ved=2ahUKEwjO7f3KhPuJAxUVV0EAHVyOBOUQM3oECB0QAA',
    demoLink: 'https://playden-superadmin.vercel.app/',
    repoLink: 'https://github.com/PLAY-DEN/playden-superadmin.git',
  },
  {
    title: 'Project Three',
    description: 'This is a brief description of project three.',
    image: 'https://via.placeholder.com/300',
    demoLink: '#',
    repoLink: '#',
  }
];

function Projects() {
  return (
    <section id="projects" className="bg-gray-900 py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-white mb-10">Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
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
        
        {/* View More Button */}
        <div className="mt-10 text-center">
          <a
            href="/moreProjects" 
            className="bg-gradient-to-r from-purple-500 to-blue-500 text-white py-3 px-6 rounded-lg text-lg font-semibold hover:from-blue-500 hover:to-purple-500 transition duration-300 inline-block"
          >
            View More Projects
          </a>
        </div>
      </div>
    </section>
  );
}

export default Projects;