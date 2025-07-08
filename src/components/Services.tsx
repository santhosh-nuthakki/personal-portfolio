import React from 'react';
import { Cloud, Cog, ArrowRight, CheckCircle } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      title: 'Cloud Infrastructure Setup',
      description: 'Deploying secure, scalable cloud architectures using AWS and Terraform',
      icon: <Cloud className="h-8 w-8" />,
      features: [
        'AWS Infrastructure Design & Implementation',
        'Terraform Infrastructure as Code',
        'Auto-scaling and Load Balancing',
        'Security Best Practices',
        'Cost Optimization Strategies',
        'Disaster Recovery Planning'
      ],
      color: 'from-blue-500 to-blue-600'
    },
    {
      title: 'Automation Solutions',
      description: 'Implementing CI/CD pipelines and scripting for seamless workflows',
      icon: <Cog className="h-8 w-8" />,
      features: [
        'CI/CD Pipeline Development',
        'Automated Testing Integration',
        'Deployment Automation',
        'Custom Shell Scripting',
        'Monitoring & Alerting Setup',
        'Process Optimization'
      ],
      color: 'from-green-500 to-green-600'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive DevOps solutions to streamline your development and operations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {services.map((service) => (
            <div key={service.title} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className={`bg-gradient-to-r ${service.color} px-8 py-6`}>
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center text-white">
                    {service.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">{service.title}</h3>
                  </div>
                </div>
              </div>
              
              <div className="p-8">
                <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <div className="space-y-4 mb-8">
                  {service.features.map((feature) => (
                    <div key={feature} className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <button className="w-full bg-gray-900 text-white py-3 px-6 rounded-lg hover:bg-gray-800 transition-colors duration-200 flex items-center justify-center space-x-2">
                  <span>Learn More</span>
                  <ArrowRight className="h-5 w-5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Optimize Your DevOps?</h3>
            <p className="text-gray-600 mb-6">
              Let's discuss how I can help streamline your development processes and enhance your operational efficiency.
            </p>
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 inline-flex items-center space-x-2">
              <span>Get Started</span>
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;