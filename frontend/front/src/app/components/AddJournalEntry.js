import React, { useState } from 'react';

const AddJournalEntry = ({ onAddEntry }) => {
  const [mood, setMood] = useState('');
  const [reflection, setReflection] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (mood && reflection) {
      const newEntry = { mood, reflection, date: new Date().toLocaleDateString() };
      onAddEntry(newEntry);
      setMood('');
      setReflection('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className=" flex flex-col items-center justify-center ">
      <div className='w-1/2'>
        <label className="block text-gray-700 text-center py-3 font-semibold mb-1">Mood</label>
        <input
          type="text"
          placeholder="How are you feeling?"
          value={mood}
          onChange={(e) => setMood(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
        />
      </div>
      <div className='w-1/2'>
        <label className=" text-center block text-gray-700 py-3 font-semibold mb-1">Reflection</label>
        <textarea
          placeholder="Write about your day..."
          value={reflection}
          onChange={(e) => setReflection(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          rows="3"
        />
      </div>
      <button
        type="submit"
        className="w-1/2 py-3 bg-blue-700 text-white font-semibold rounded-lg hover:bg-blue-800 transition-colors"
      >
        Add Entry
      </button>
    </form>
  );
};

export default AddJournalEntry;
