import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-dark text-gray-400 py-12 text-center text-sm">
      <p>&copy; {new Date().getFullYear()} Revitk. All rights reserved.</p>
      <p className="mt-2">The Sync Selling System.</p>
    </footer>
  );
};
