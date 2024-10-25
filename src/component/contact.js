import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

function Contact() {
  return (
    <section id="contact" className="bg-gray-100 py-16">
      <div className="container mx-auto px-4 md:px-8 lg:px-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-8">Contact Me</h2>
        
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Contact Form */}
          <div className="w-full md:w-1/2 mb-8 md:mb-0 px-4 md:px-0">
            <form className="bg-white p-6 md:p-8 rounded-lg shadow-lg">
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-blue-500"
                  placeholder="Your Name"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-blue-500"
                  placeholder="Your Email"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">Message</label>
                <textarea
                  id="message"
                  rows="4"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-blue-500"
                  placeholder="Your Message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-4 rounded-full shadow-md hover:from-purple-600 hover:to-blue-600 transition-all duration-300"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Social Links */}
          <div className="w-full md:w-1/2 px-4 md:px-0 text-center">
            <p className="text-gray-700 text-lg mb-4">Or connect with me on:</p>
            <div className="flex justify-center space-x-6">
              <a href="https://github.com.git" target="_blank" rel="noopener noreferrer" className="text-3xl text-gray-700 hover:text-blue-600 transition-colors duration-300">
                <FaGithub />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-3xl text-gray-700 hover:text-blue-600 transition-colors duration-300">
                <FaLinkedin />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-3xl text-gray-700 hover:text-blue-600 transition-colors duration-300">
                <FaTwitter />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
