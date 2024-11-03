"use client";
import React from 'react';

const Sidebar = ({ setView }) => {
  return (
    <div className="w-64 h-screen fixed bg-blue-700 text-white flex flex-col p-6 shadow-lg">
      <h2 className="text-3xl font-semibold mb-6">CampusCare</h2>
      <p className="mb-8 text-sm">Your mental health companion</p>
      <nav className="space-y-4">
        <button
          onClick={() => setView("home")}
          className="text-left w-full text-white hover:text-blue-200 transition-colors"
        >
          Home
        </button>
        <button
          onClick={() => setView("journal")}
          className="text-left w-full text-white hover:text-blue-200 transition-colors"
        >
          Journal
        </button>
        <button
          onClick={() => setView("ai")}
          className="text-left w-full text-white hover:text-blue-200 transition-colors"
        >
          AI Support Bot
        </button>
        <button
          onClick={() => setView("resources")}
          className="text-left w-full text-white hover:text-blue-200 transition-colors"
        >
          Resources
        </button>
      </nav>
    </div>
  );
};

export default Sidebar;
