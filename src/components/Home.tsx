import React from 'react';
import { ArrowRight, Download, Github, Linkedin, Mail } from 'lucide-react';

const Home: React.FC = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      const headerHeight = 64;
      const elementPosition = element.offsetTop - headerHeight;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  const scrollToPortfolio = () => {
    const element = document.getElementById('portfolio');
    if (element) {
      const headerHeight = 64;
      const elementPosition = element.offsetTop - headerHeight;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-100 flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Hi, I'm{' '}
                <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                  Santhosh
                </span>
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-700">
                DevOps Engineer | Software Engineer
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl">
                Building scalable and automated DevOps solutions for modern software teams.
              </p>
            </div>

            <div className="prose prose-lg text-gray-600 max-w-2xl">
              <p>
                I'm a DevOps engineer passionate about streamlining development cycles and optimizing operational efficiency. 
                I build robust, scalable, and automated systems that empower teams to deliver high-quality software faster and more reliably.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={scrollToPortfolio}
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200 shadow-lg hover:shadow-xl"
              >
                View My Work
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <a 
                href="https://docs.google.com/document/d/1wKxJu8zry1Iqeq1zSsOrtYLcdMQ-KxVv/edit#heading=h.vtfexgv8p3bc" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200 shadow-lg hover:shadow-xl"
              >
                View Resume
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </div>

            <div className="flex space-x-6">
              <a href="https://mail.google.com/mail/?view=cm&fs=1&to=santhosh.nuthakki.1@gmail.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-600 transition-colors duration-200">
                <Mail className="h-6 w-6" />
              </a>
              <a href="https://linkedin.com/in/santhosh-nuthakki-a4343121b" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-600 transition-colors duration-200">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="https://github.com/SanthoshNuthakki" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-600 transition-colors duration-200">
                <Github className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Profile Picture */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 p-1 shadow-2xl">
                <div className="w-full h-full rounded-full overflow-hidden">
                  <img 
                    src="https://i.postimg.cc/wT54PQgW/professional-dp.jpg" 
                    alt="Santhosh Nuthakki - DevOps Engineer"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-sm">DevOps</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;