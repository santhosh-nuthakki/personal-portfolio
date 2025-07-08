import React from 'react';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Bridging the gap between development and operations to foster collaboration and continuous improvement.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Profile Picture */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative">
              <div className="w-64 h-64 rounded-2xl bg-gradient-to-br from-blue-400 to-blue-600 p-1 shadow-xl">
                <div className="w-full h-full rounded-2xl overflow-hidden">
                  <img 
                    src="https://i.postimg.cc/wT54PQgW/professional-dp.jpg" 
                    alt="Santhosh Nuthakki - DevOps Engineer"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              {/* DevOps Badge */}
              <div className="absolute -top-3 -right-3 w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center shadow-lg border-4 border-white">
                <div className="text-white text-xs font-bold text-center leading-tight">
                  <div>3.5+</div>
                  <div>YRS</div>
                </div>
              </div>
              {/* Tech Stack Indicator */}
              <div className="absolute -bottom-3 -left-3 w-14 h-14 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center shadow-lg border-4 border-white">
                <div className="text-white text-xs font-bold">AWS</div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div className="prose prose-lg text-gray-600 max-w-none">
              <p>
                I'm a DevOps engineer passionate about streamlining development cycles and optimizing operational efficiency. 
                I build robust, scalable, and automated systems that empower teams to deliver high-quality software faster and more reliably.
              </p>
              <p>
                My expertise lies in bridging the gap between development and operations teams, fostering collaboration and 
                continuous improvement. I believe in the power of automation to eliminate repetitive tasks and reduce human error, 
                allowing teams to focus on what matters most - building great software.
              </p>
              <p>
                When I'm not optimizing CI/CD pipelines or managing cloud infrastructure, I enjoy exploring new technologies 
                and contributing to the DevOps community through knowledge sharing and best practices.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 space-y-4">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Education</h3>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <GraduationCap className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">B.Tech in Electronics and Communication Engineering</h4>
                  <div className="flex items-center space-x-4 text-sm text-gray-600 mt-1">
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span>Graduated 2021</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-blue-50 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-blue-600">3+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
              <div className="bg-green-50 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-green-600">20+</div>
                <div className="text-sm text-gray-600">Projects Deployed</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;