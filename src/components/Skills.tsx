import React from 'react';
import { Server, Code, Cloud, Settings, Database, Shield } from 'lucide-react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: 'CI/CD',
      icon: <Settings className="h-6 w-6" />,
      skills: ['Jenkins', 'GitHub Actions', 'Azure DevOps'],
      color: 'bg-blue-500'
    },
    {
      title: 'Cloud Platforms',
      icon: <Cloud className="h-6 w-6" />,
      skills: ['AWS', 'Azure', 'Google Cloud', 'Digital Ocean'],
      color: 'bg-green-500'
    },
    {
      title: 'Containerization',
      icon: <Server className="h-6 w-6" />,
      skills: ['Docker', 'Kubernetes', 'Docker Compose', 'Podman'],
      color: 'bg-purple-500'
    },
    {
      title: 'Infrastructure as Code',
      icon: <Code className="h-6 w-6" />,
      skills: ['Terraform', 'Ansible', 'CloudFormation', 'Pulumi'],
      color: 'bg-orange-500'
    },
    {
      title: 'Monitoring & Logging',
      icon: <Database className="h-6 w-6" />,
      skills: ['Prometheus', 'Grafana', 'ELK Stack', 'New Relic'],
      color: 'bg-red-500'
    },
    {
      title: 'Security & Compliance',
      icon: <Shield className="h-6 w-6" />,
      skills: ['OWASP', 'SSL/TLS', 'IAM', 'Security Scanning'],
      color: 'bg-indigo-500'
    }
  ];

  const coreSkills = [
    { name: 'CI/CD', level: 90 },
    { name: 'Docker', level: 80 },
    { name: 'Terraform', level: 80 },
    { name: 'AWS', level: 90 },
    { name: 'Shell Scripting', level: 90 }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Skills & Expertise</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Technologies and tools I use to build scalable and efficient DevOps solutions.
          </p>
        </div>

        {/* Core Skills Progress */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-gray-900 mb-8 text-center">Core Competencies</h3>
          <div className="max-w-3xl mx-auto space-y-6">
            {coreSkills.map((skill) => (
              <div key={skill.name} className="bg-gray-50 rounded-lg p-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-lg font-medium text-gray-900">{skill.name}</span>
                  <span className="text-sm font-medium text-gray-600">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div 
                    className="bg-gradient-to-r from-blue-500 to-blue-600 h-3 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Skills Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category) => (
            <div key={category.title} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center space-x-3 mb-4">
                <div className={`${category.color} text-white p-3 rounded-lg`}>
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900">{category.title}</h3>
              </div>
              <div className="space-y-2">
                {category.skills.map((skill) => (
                  <div key={skill} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                    <span className="text-gray-700">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills Tags */}
        <div className="mt-16">
          <h3 className="text-2xl font-semibold text-gray-900 mb-8 text-center">Additional Technologies</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {['Python', 'Bash', 'Git', 'Linux', 'Nginx', 'Apache', 'MySQL', 'PostgreSQL', 'Redis', 'RabbitMQ', 'Helm', 'Istio'].map((tech) => (
              <span key={tech} className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium hover:bg-blue-200 transition-colors duration-200">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;