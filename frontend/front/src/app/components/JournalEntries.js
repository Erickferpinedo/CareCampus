import React from 'react';

const JournalEntries = ({ entries }) => {
  return (
    <div className="flex flex-row py-3 items-center justify-center">
      {entries.map((entry, index) => (
        <div
          key={index}
          className="bg-blue-50 border border-blue-200 p-3 rounded-lg shadow-sm"
        >
          <p className="text-gray-700 text-sm mb-1"><strong>Date:</strong> {entry.date}</p>
          <p className="text-gray-700 mb-1"><strong>Mood:</strong> {entry.mood}</p>
          <p className="text-gray-700"><strong>Reflection:</strong> {entry.reflection}</p>
        </div>
      ))}
    </div>
  );
};

export default JournalEntries;
