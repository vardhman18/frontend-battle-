import React from 'react';
import { Code, Palette, Zap, Globe, Shield, Users } from 'lucide-react';

const FeatureCards = () => {
  const features = [
    {
      icon: <Code className="h-8 w-8" />,
      title: "Custom Development",
      description: "Tailored solutions built with cutting-edge technologies to meet your unique business needs."
    },
    {
      icon: <Palette className="h-8 w-8" />,
      title: "Creative Design",
      description: "Stunning visual designs that capture your brand essence and engage your audience."
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Performance Optimization",
      description: "Lightning-fast websites and applications optimized for speed and user experience."
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Digital Strategy",
      description: "Comprehensive digital strategies that drive growth and maximize your online presence."
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Security First",
      description: "Robust security measures to protect your digital assets and user data."
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "User Experience",
      description: "Intuitive interfaces designed with your users in mind for maximum engagement."
    }
  ];

  return (
    <section id="features" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Our Features & Services
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            We provide comprehensive digital solutions to help your business thrive in the modern world
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-gray-200 dark:border-gray-700"
            >
              <div className="text-purple-600 dark:text-purple-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureCards;