import React from 'react';

export const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 bg-brand-dark text-white py-4 px-6 shadow-md">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-lg md:text-xl font-bold">
          Revitk - The Sync Selling System
        </h1>
      </div>
    </header>
  );
};
