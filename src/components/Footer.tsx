import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Santhosh Nuthakki</h3>
            <p className="text-gray-300 mb-4">
              DevOps Engineer passionate about building scalable and automated solutions for modern software teams.
            </p>
            <div className="flex space-x-4">
              <a href="mailto:santhosh.nuthakki.1@gmail.com" className="text-gray-300 hover:text-white transition-colors duration-200">
                <Mail className="h-5 w-5" />
              </a>
              <a href="https://linkedin.com/in/santhosh-nuthakki-a4343121b" className="text-gray-300 hover:text-white transition-colors duration-200">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="https://github.com/SanthoshNuthakki" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors duration-200">
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors duration-200">About</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200">Experience</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200">Skills</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200">Services</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-2 text-gray-300">
              <p>santhosh.nuthakki.1@gmail.com</p>
              <p>+91 9666805477</p>
              <p>Hyderabad, India</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-300 flex items-center justify-center space-x-2">
            <span>&copy; 2026 Santhosh Nuthakki. Built with</span>
            <Heart className="h-4 w-4 text-red-500" />
            <span>and React</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;