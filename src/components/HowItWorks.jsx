import React from 'react';
import { motion } from 'framer-motion';

const HowItWorks = () => {
  const steps = [
    {
      title: "Sign Up",
      description: "Create your account and set up your profile with location and preferences.",
      icon: "📝"
    },
    {
      title: "Get Alerts",
      description: "Receive real-time notifications about potential disasters in your area.",
      icon: "🔔"
    },
    {
      title: "Stay Prepared",
      description: "Access emergency plans and resources tailored to different scenarios.",
      icon: "🎯"
    },
    {
      title: "Find Help",
      description: "Locate nearby emergency services and shelters when you need them.",
      icon: "🆘"
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">How It Works</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Getting started with DisasterGuard is easy. Follow these simple steps to ensure your safety.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative p-6 bg-gray-900 rounded-xl border border-gray-800"
            >
              <div className="text-4xl mb-4">{step.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-2">{step.title}</h3>
              <p className="text-gray-400">{step.description}</p>
              <div className="absolute top-0 right-0 -mt-2 -mr-2 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                {index + 1}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;