import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

function Footer() {
  return (
        <footer className="bg-gray-900 text-gray-300 py-8">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="flex flex-col md:flex-row justify-between items-center">
          
          {/* Links Section */}
          <div className="mb-6 md:mb-0">
            <ul className="flex space-x-4">
              <li>
                <a href="#terms" className="hover:text-white transition-colors duration-300">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#privacy" className="hover:text-white transition-colors duration-300">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors duration-300">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media Icons */}
          <div className="flex space-x-4 ">
              <a href="https://github.com.git" target="_blank" rel="noopener noreferrer" className="text-3xl text-gray-300 hover:text-blue-600 transition-colors duration-300">
                   <FaGithub />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-3xl text-gray-300 hover:text-blue-600 transition-colors duration-300">
                <FaLinkedin />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-3xl text-gray-300 hover:text-blue-600 transition-colors duration-300">
                <FaTwitter />
              </a>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-6 text-center text-sm">
          &copy; {new Date().getFullYear()} Elijah Omokolade Ashaolu. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
