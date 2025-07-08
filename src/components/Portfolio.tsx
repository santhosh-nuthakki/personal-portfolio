import React from 'react';
import { Folder, ExternalLink, Github, Clock } from 'lucide-react';

const Portfolio: React.FC = () => {
  const upcomingProjects = [
    {
      title: 'CI/CD Pipeline Optimizer using AI',
      description: 'Train a model to analyze pipeline data and suggest time-saving optimizations or predict build failures.',
      technologies: ['Jenkins/GitHub Actions', 'Python', 'Pandas', 'ML Classification'],
      skills: 'ML in CI/CD, pipeline efficiency, automation'
    },
    {
      title: 'Self-Healing Infrastructure with AI',
      description: 'Create a basic Kubernetes or Docker setup that uses AI to detect and restart failed containers or pods automatically.',
      technologies: ['Kubernetes', 'Prometheus', 'Python', 'TensorFlow'],
      skills: 'MLOps, container orchestration, monitoring'
    },
    {
      title: 'Predictive Auto-Scaling',
      description: 'Train a model to predict traffic/load and automatically scale cloud resources accordingly.',
      technologies: ['AWS/GCP', 'Python', 'Prophet', 'Terraform'],
      skills: 'Cloud DevOps, forecasting, infrastructure as code'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Portfolio</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Showcasing my DevOps projects and implementations.
          </p>
        </div>

        {/* Coming Soon Section */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 mb-12 text-center">
            <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <Clock className="h-10 w-10 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">AIOps Portfolio Coming Soon</h3>
            <p className="text-gray-600 text-lg mb-6">
              I'm currently working on AIOps (Artificial Intelligence for Operations) projects that combine 
              machine learning with DevOps practices. Check back soon for detailed project showcases including 
              AI model implementations, automation strategies, and performance metrics.
            </p>
            <div className="inline-flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-lg">
              <span className="text-sm font-medium">Expected Launch: Q4 2025</span>
            </div>
          </div>

          {/* Upcoming Projects Preview */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-gray-900 mb-8 text-center">Upcoming AIOps Project Showcases</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {upcomingProjects.map((project, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Folder className="h-5 w-5 text-blue-600" />
                    </div>
                    <h4 className="font-semibold text-gray-900">{project.title}</h4>
                  </div>
                  <p className="text-gray-600 mb-4 text-sm">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="bg-white text-gray-700 px-3 py-1 rounded-full text-xs font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <p className="text-xs text-gray-500 font-medium">Skills Showcased:</p>
                    <p className="text-xs text-gray-600 mt-1">{project.skills}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* GitHub Section */}
          <div className="bg-gray-900 rounded-2xl p-8 text-center">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6">
              <Github className="h-8 w-8 text-gray-900" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Open Source Contributions</h3>
            <p className="text-gray-300 mb-6">
              Explore my code repositories and contributions to the DevOps and AIOps community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://github.com/SanthoshNuthakki" target="_blank" rel="noopener noreferrer" className="bg-white text-gray-900 px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors duration-200 inline-flex items-center space-x-2">
                <Github className="h-5 w-5" />
                <span>View GitHub Profile</span>
              </a>
              <a href="https://github.com/SanthoshNuthakki?tab=repositories" target="_blank" rel="noopener noreferrer" className="border border-white text-white px-6 py-3 rounded-lg hover:bg-white hover:text-gray-900 transition-colors duration-200 inline-flex items-center space-x-2">
                <ExternalLink className="h-5 w-5" />
                <span>View Projects</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;