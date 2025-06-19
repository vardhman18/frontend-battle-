import React from 'react';

const Loader = ({ isLoading }) => {
  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center z-50">
      <div className="relative">
        <div className="w-20 h-20 border-4 border-purple-300 border-t-transparent rounded-full animate-spin"></div>
        <div className="absolute inset-0 w-16 h-16 m-auto border-4 border-blue-300 border-b-transparent rounded-full animate-spin animate-reverse"></div>
        <div className="absolute inset-0 w-12 h-12 m-auto border-4 border-pink-300 border-l-transparent rounded-full animate-spin"></div>
      </div>
      <div className="absolute mt-32 text-white text-xl font-bold tracking-wider animate-pulse">
        PixelCraft
      </div>
    </div>
  );
};

export default Loader;