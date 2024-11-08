import React, { useState } from 'react';

// Function to call the OpenAI API
export async function callOpenAI(prompt) {
  const apiKey = process.env.NEXT_PUBLIC_OPENAI_API_KEY; // Using NEXT_PUBLIC prefix
  if (!apiKey) {
    console.error("API Key is missing");
    return 'Error: Missing API key';
  }

  try {
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: 'gpt-3.5-turbo',
        messages: [
          { role: 'system', content: 'You are a supportive AI companion for mental health.' },
          { role: 'user', content: prompt },
        ],
        max_tokens: 150,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Error: ${errorText}`);
    }

    const data = await response.json();
    return data.choices[0].message.content.trim();
  } catch (err) {
    console.error('API Error:', err);
    return 'Error: Unable to process the request';
  }
}

const AIBot = () => {
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [conversation, setConversation] = useState([
    {
      role: 'assistant',
      content: "Hi there! I'm here to support you. How can I help you today?",
    },
  ]);

  async function handleSubmit(e) {
    e.preventDefault();
    if (loading || !query.trim()) return;

    const userMessage = { role: 'user', content: query };
    setConversation((prev) => [...prev, userMessage]);
    setLoading(true);
    setQuery('');

    try {
      const botResponse = await callOpenAI(query);
      const botMessage = { role: 'assistant', content: botResponse };
      setConversation((prev) => [...prev, botMessage]);
    } catch {
      const errorMessage = {
        role: 'assistant',
        content: 'Error occurred. Please try again.',
      };
      setConversation((prev) => [...prev, errorMessage]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <div className="w-full max-w-3xl bg-white rounded-lg shadow-lg p-6 space-y-4">
        <header className="text-center">
          <h2 className="text-3xl font-semibold text-blue-700">CampusCare AI Support Bot</h2>
          <p className="text-gray-500 mt-2">Your personal mental health companion.</p>
        </header>

        <div className="chat-window h-96 overflow-y-auto bg-gray-50 p-4 rounded-lg shadow-inner">
          {conversation.map((message, index) => (
            <div
              key={index}
              className={`mb-4 ${message.role === 'user' ? 'text-right' : 'text-left'}`}
            >
              <span className={`inline-block px-4 py-2 rounded-lg ${message.role === 'user' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-800'}`}>
                {message.content}
              </span>
            </div>
          ))}
          {loading && <p className="text-gray-500 text-center">Typing...</p>}
        </div>

        {/* Chat input form */}
        <form onSubmit={handleSubmit} className="flex items-center space-x-3 mt-4">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="flex-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            placeholder="Type your message here..."
          />
          <button
            type="submit"
            disabled={loading}
            className="px-6 py-3 bg-blue-700 text-white font-semibold rounded-lg hover:bg-blue-800 transition-colors"
          >
            {loading ? '...' : 'Send'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AIBot;
