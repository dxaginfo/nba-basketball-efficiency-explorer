import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-sm">
        <div className="mb-2 md:mb-0">
          <p>© {new Date().getFullYear()} NBA Basketball Efficiency Explorer. All rights reserved.</p>
        </div>
        <div className="flex space-x-4">
          <a href="#" className="hover:text-gray-300 transition-colors duration-200">Terms of Service</a>
          <a href="#" className="hover:text-gray-300 transition-colors duration-200">Privacy Policy</a>
          <a href="#" className="hover:text-gray-300 transition-colors duration-200">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
