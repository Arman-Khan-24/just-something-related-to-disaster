import React, { useState } from 'react';
import { motion } from 'framer-motion';

const MenuItem = ({ text, href = "#" }) => {
  return (
    <motion.a
      href={href}
      className="relative rounded-lg px-4 py-2 text-sm text-gray-100 transition-colors hover:text-white"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {text}
    </motion.a>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 z-50 w-full bg-black/50 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <a href="/" className="text-2xl font-bold text-white">
              DisasterGuard
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-4">
              <MenuItem text="Home" href="#" />
              <MenuItem text="Features" href="#features" />
              <MenuItem text="How it Works" href="#how-it-works" />
              <MenuItem text="Testimonials" href="#testimonials" />
              <MenuItem text="Contact" href="#contact" />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-100 hover:text-white"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden"
          >
            <div className="space-y-1 px-2 pb-3 pt-2">
              <MenuItem text="Home" href="#" />
              <MenuItem text="Features" href="#features" />
              <MenuItem text="How it Works" href="#how-it-works" />
              <MenuItem text="Testimonials" href="#testimonials" />
              <MenuItem text="Contact" href="#contact" />
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;