"use client";
import React, { useState } from 'react';
import MainLayout from './components/MainLayout';
import Home from './components/Home';
import JournalEntries from './components/JournalEntries';
import AddJournalEntry from './components/AddJournalEntry';
import AIBot from './components/AIBot';
import Resources from './components/Resources';
require('dotenv').config();

const Page = () => {
  const [view, setView] = useState("home"); // Initial view set to "home"
  const [entries, setEntries] = useState([]);

  const handleAddEntry = (newEntry) => {
    setEntries([newEntry, ...entries]);
  };

  return (
    <MainLayout setView={setView}> {/* Pass setView to the layout to change views */}
      {view === "home" && <Home setView={setView} />} {/* Pass setView as a prop */}
      {view === "journal" && (
        <div className="p-8">
          <h1 className="text-3xl font-semibold text-center text-blue-700 mb-6">CampusCare Journal</h1>
          <AddJournalEntry onAddEntry={handleAddEntry} />
          <JournalEntries entries={entries} />
        </div>
      )}
      {view === "ai" && <AIBot />}
      {view === "resources" && <Resources />}
    </MainLayout>
  );
};

export default Page;
