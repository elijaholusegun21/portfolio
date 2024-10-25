import React from 'react';

function AboutMe() {
  return (
    <section id="about" className="bg-gradient-to-b from-gray-100 to-gray-200 py-20">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-10">About Me</h2>
        
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Image */}
          <div className="mb-8 md:mb-0 md:w-1/3 text-center">
            <img
              src="https://via.placeholder.com/300"
              alt="Your Name"
              className="rounded-full shadow-xl w-64 h-64 mx-auto object-cover hover:shadow-xl transition-shadow duration-300 ease-in-out"
            />
          </div>

          {/* Bio and Skills */}
          <div className="md:w-2/3 md:pl-8">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Hi! I'm <span className="font-bold text-gray-900">Elijah Omokolade Ashaolu</span>, a passionate developer who loves crafting beautiful and functional web applications. I specialize in HTML, CSS, React, and Tailwind CSS, focusing on creating user-friendly and responsive designs.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              I enjoy solving problems and constantly learning new technologies to improve my skills and create high-performance web applications.
            </p>

            {/* Skills List */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
              <span className="bg-white py-3 px-4 rounded-lg shadow hover:shadow-lg transform hover:scale-105 transition-transform duration-300 text-gray-900 text-center">React</span>
              <span className="bg-white py-3 px-4 rounded-lg shadow hover:shadow-lg transform hover:scale-105 transition-transform duration-300 text-gray-900 text-center">JavaScript</span>
              <span className="bg-white py-3 px-4 rounded-lg shadow hover:shadow-lg transform hover:scale-105 transition-transform duration-300 text-gray-900 text-center">Tailwind CSS</span>
              <span className="bg-white py-3 px-4 rounded-lg shadow hover:shadow-lg transform hover:scale-105 transition-transform duration-300 text-gray-900 text-center">HTML</span>
              <span className="bg-white py-3 px-4 rounded-lg shadow hover:shadow-lg transform hover:scale-105 transition-transform duration-300 text-gray-900 text-center">CSS</span>
              <span className="bg-white py-3 px-4 rounded-lg shadow hover:shadow-lg transform hover:scale-105 transition-transform duration-300 text-gray-900 text-center">Git & GitHub</span>
            </div>

            {/* Resume Download Button */}
            <div className="text-center md:text-left">
              <a
                href="#"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-8 rounded-full shadow-lg hover:from-purple-600 hover:to-blue-600 transition-all duration-300"
                download
              >
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
