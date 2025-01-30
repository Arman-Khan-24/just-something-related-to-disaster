import React from 'react';
import { motion } from 'framer-motion';

const TestimonialCard = ({ name, role, content, image }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-gray-900 p-6 sm:p-8 rounded-xl border border-gray-800"
    >
      <div className="flex items-center mb-4">
        <img
          src={image}
          alt={name}
          className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover mr-4"
        />
        <div>
          <h4 className="text-base sm:text-lg font-semibold text-white">{name}</h4>
          <p className="text-sm sm:text-base text-gray-400">{role}</p>
        </div>
      </div>
      <p className="text-sm sm:text-base text-gray-300">{content}</p>
    </motion.div>
  );
};

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Homeowner",
      content: "DisasterGuard's alerts helped my family evacuate safely during a wildfire. The emergency plan was invaluable.",
      image: "https://randomuser.me/api/portraits/women/1.jpg"
    },
    {
      name: "Michael Chen",
      role: "Community Leader",
      content: "As a community organizer, I recommend DisasterGuard to everyone. It's made our neighborhood more resilient.",
      image: "https://randomuser.me/api/portraits/men/2.jpg"
    },
    {
      name: "Emily Rodriguez",
      role: "School Teacher",
      content: "The resource locator feature helped us find the nearest shelter during a severe storm. Thank you, DisasterGuard!",
      image: "https://randomuser.me/api/portraits/women/3.jpg"
    }
  ];

  return (
    <section id="testimonials" className="py-16 sm:py-20 bg-black">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">What Our Users Say</h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base">
            Real stories from people who've experienced the benefits of DisasterGuard.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;