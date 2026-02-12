import React from 'react';

export const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 bg-brand-dark shadow-md">
      <div className="max-w-7xl mx-auto py-3 px-6 text-center">
        <div className="flex items-center justify-center gap-3">
          <span className="text-white text-xl md:text-2xl font-bold tracking-wide">
            REVITK
          </span>
          <span className="text-gray-400 text-xl md:text-2xl">|</span>
          <span className="text-gray-500 text-sm md:text-base">
            The Sync Selling System
          </span>
        </div>
      </div>
      <div className="h-1 bg-brand-accent"></div>
    </header>
  );
};
