import React from 'react';
import { Building, Calendar, MapPin, CheckCircle } from 'lucide-react';

const Experience: React.FC = () => {
  const responsibilities = [
    'Implemented CI/CD pipelines to automate software deployment processes',
    'Managed cloud infrastructure using AWS services and Terraform',
    'Developed automation scripts to streamline operational workflows',
    'Collaborated with development teams to optimize deployment strategies',
    'Monitored system performance and implemented proactive scaling solutions',
    'Maintained high availability and disaster recovery procedures'
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Experience</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            My professional journey in DevOps and software engineering.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="bg-gradient-to-r from-blue-600 to-blue-800 px-8 py-6">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center">
                  <Building className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Software Engineer</h3>
                  <p className="text-blue-100 text-lg">ValueLabs</p>
                </div>
              </div>
            </div>

            <div className="px-8 py-6">
              <div className="flex items-center space-x-6 mb-6">
                <div className="flex items-center space-x-2 text-gray-600">
                  <Calendar className="h-5 w-5" />
                  <span className="font-medium">Dec 2021 – Present</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-600">
                  <MapPin className="h-5 w-5" />
                  <span className="font-medium">Hyderabad, India</span>
                </div>
              </div>

              <div className="mb-6">
                <p className="text-gray-700 text-lg leading-relaxed">
                  As a DevOps-focused Software Engineer at ValueLabs, I specialize in building and maintaining 
                  robust CI/CD pipelines, managing cloud infrastructure, and implementing automation solutions 
                  that enhance development productivity and operational efficiency.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Key Responsibilities & Achievements</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {responsibilities.map((responsibility, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{responsibility}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <div className="inline-flex items-center space-x-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full">
              <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
              <span className="text-sm font-medium">Currently employed</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;