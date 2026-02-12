import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-dark text-gray-400 py-12 text-center text-sm">
      <div className="max-w-4xl mx-auto px-6">
        <div className="mb-4">
          <a 
            href="/privacy" 
            className="text-gray-400 hover:text-white transition-colors duration-200 mx-3"
          >
            Privacy Policy
          </a>
          <span className="text-gray-600">|</span>
          <a 
            href="/terms" 
            className="text-gray-400 hover:text-white transition-colors duration-200 mx-3"
          >
            Terms & Conditions
          </a>
          <span className="text-gray-600">|</span>
          <a 
            href="mailto:joe@revitk.com" 
            className="text-gray-400 hover:text-white transition-colors duration-200 mx-3"
          >
            Contact Us
          </a>
        </div>
        <p>&copy; {new Date().getFullYear()} Revitk. All rights reserved.</p>
        <p className="mt-2">The Sync Selling System.</p>
        <p className="mt-2 text-xs">Company No. 15929263 | Revitk Ltd, 107 Louth Road, Sheffield, S11 7AU</p>
      </div>
    </footer>
  );
};
