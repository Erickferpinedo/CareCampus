// components/MainLayout.js
import React from 'react';

const MainLayout = ({ children, setView }) => {
  return (
    <div className="flex">
      <div className="w-64 h-screen fixed bg-blue-700 text-white flex flex-col p-6 shadow-lg">
        <h2 className="text-3xl font-semibold mb-6">CampusCare</h2>
        <p className="mb-8 text-sm">Your mental health companion</p>
        <nav className="space-y-4">
          <button
            onClick={() => setView("home")}
            className="text-left w-full text-white hover:text-blue-200 transition-colors"
          >
            <span>🏠</span><span>Home</span>
          </button>
          <button
            onClick={() => setView("journal")}
            className="text-left w-full text-white hover:text-blue-200 transition-colors"
          >
            <span>📓</span><span>Journal</span>
          </button>
          <button
            onClick={() => setView("ai")}
            className="text-left w-full text-white hover:text-blue-200 transition-colors"
          >
           <span>💬</span><span>AI Support Bot</span>
          </button>

          <button
            onClick={() => setView("resources")}
            className="text-left w-full text-white hover:text-blue-200 transition-colors"
          >
           <span>📘</span><span>Resources</span>
          </button>
        </nav>
        <div className="mt-auto pt-8 text-xs italic text-blue-200">
        "Caring for your mental health is a journey, and we're here to support you along the way."
      </div>
      </div>
      
      <div className="ml-64 p-8 w-full">{children}</div> {/* Content area that changes based on view */}
    </div>
  );
};

export default MainLayout;
