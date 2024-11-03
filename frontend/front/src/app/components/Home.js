"use client";
import React from 'react';

const Home = ({ setView }) => {
  return (
    <div className="p-8 bg-gradient-to-b from-blue-50 to-white min-h-screen">
      <div className="max-w-4xl mx-auto text-center">
        {/* Hero Section */}
        <h1 className="text-5xl font-bold text-blue-700 mb-4">Welcome to CampusCare</h1>
        <p className="text-lg text-gray-700 mb-10">
          Your Companion for Mental Health and Well-being on Campus.
        </p>

        {/* Why Choose CampusCare Section */}
        <div className="bg-blue-700 text-white p-6 rounded-lg shadow-lg mb-12">
          <h2 className="text-3xl font-semibold">Why Choose CampusCare?</h2>
          <p className="mt-4 text-base">
            We understand that college life can be both exciting and overwhelming. CampusCare provides tools to help you feel supported, encouraged, and balanced.
          </p>
        </div>

        {/* Featured Sections */}
        <section className="space-y-12 text-left">
          {/* Mental Health Tips */}
          <div className="bg-white shadow-lg rounded-lg p-8">
            <h3 className="text-3xl font-bold text-blue-700">🌱 Mental Health Tips for Students</h3>
            <ul className="list-disc list-inside mt-4 text-gray-700">
              <li>Practice mindfulness by taking a few minutes each day to breathe deeply and relax.</li>
              <li>Stay connected with friends and family, even if you’re far from home.</li>
              <li>Try to maintain a healthy routine with regular sleep, exercise, and nutritious meals.</li>
              <li>Take breaks from screens and social media to reset your mind.</li>
            </ul>
          </div>

          {/* Journaling */}
          <div className="bg-white shadow-lg rounded-lg p-8">
            <h3 className="text-3xl font-bold text-blue-700">✍️ Journaling for Self-Reflection</h3>
            <p className="text-gray-700 mt-2">
              Reflecting on your day can help you process your emotions and find clarity. Use CampusCare’s journal to write down your thoughts, feelings, and experiences.
            </p>
            <p className="text-gray-500 mt-2">
              <strong>Tip:</strong> Write at least one thing you’re grateful for every day. This simple practice can help shift your mindset toward positivity.
            </p>
          </div>

          {/* Stress Management */}
          <div className="bg-white shadow-lg rounded-lg p-8">
            <h3 className="text-3xl font-bold text-blue-700">💆 Stress Management Techniques</h3>
            <p className="text-gray-700 mt-2">
              College can be stressful, but there are proven techniques to manage it:
            </p>
            <ul className="list-disc list-inside mt-2 text-gray-700">
              <li>Practice progressive muscle relaxation.</li>
              <li>Take a 10-minute walk outdoors to clear your mind.</li>
              <li>Listen to calming music or try a short guided meditation.</li>
              <li>Break down large tasks into manageable steps to avoid overwhelm.</li>
            </ul>
          </div>

          {/* Resources for Anxiety and Depression */}
          <div className="bg-white shadow-lg rounded-lg p-8">
            <h3 className="text-3xl font-bold text-blue-700">📘 Resources for Anxiety and Depression</h3>
            <p className="text-gray-700 mt-2">
              Mental health challenges are common among students. Here are some free resources:
            </p>
            <ul className="list-disc list-inside mt-2 text-gray-700">
              <li><a href="https://www.samhsa.gov/" className="text-blue-500 underline">SAMHSA’s National Helpline</a>: Free, confidential treatment referral and information service.</li>
              <li><a href="https://www.crisistextline.org/" className="text-blue-500 underline">Crisis Text Line</a>: Text HOME to 741741 for free support 24/7.</li>
              <li><a href="https://www.activeminds.org/" className="text-blue-500 underline">Active Minds</a>: Promotes mental health awareness and education for young adults.</li>
            </ul>
          </div>

          {/* AI Support Bot */}
          <div className="bg-blue-100 shadow-lg rounded-lg p-8 text-left text-blue-900">
            <h3 className="text-3xl font-bold text-blue-700">💬 Meet Your AI Support Bot</h3>
            <p className="text-gray-700 mt-2">
              Sometimes, you just need someone to talk to. Our friendly AI Bot is here 24/7, ready to chat whenever you’re feeling down or need a bit of encouragement. With advanced sentiment analysis, it can understand how you're feeling and provide words of comfort and positivity. This tool is available anytime you need it, so you're never truly alone.
            </p>
            <button
            onClick={() => setView("ai")}
            className="mt-4 px-8 py-2 bg-blue-700 text-white font-semibold rounded-lg hover:bg-blue-800 transition-colors">
              Chat with the AI Bot
            </button>
          </div>

          {/* Importance of Sleep */}
          <div className="bg-white shadow-lg rounded-lg p-8">
            <h3 className="text-3xl font-bold text-blue-700">💤 The Importance of Quality Sleep</h3>
            <p className="text-gray-700 mt-2">
              Sleep is essential for mental clarity and emotional balance. Here’s how to improve your sleep:
            </p>
            <ul className="list-disc list-inside mt-2 text-gray-700">
              <li>Avoid screens at least an hour before bed.</li>
              <li>Create a relaxing bedtime routine.</li>
              <li>Limit caffeine intake, especially in the afternoon and evening.</li>
            </ul>
          </div>

          {/* Emergency Support */}
          <div className="bg-white shadow-lg rounded-lg p-8">
            <h3 className="text-3xl font-bold text-blue-700">📞 Emergency Support at Your Fingertips</h3>
            <p className="text-gray-700 mt-2">
              In times of crisis, quick access to help is crucial. CampusCare has emergency contacts and helplines for when you need immediate support.
            </p>
            <button
              onClick={() => setView("resources")}
              className="mt-4 px-8 py-2 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors"
            >
              Get Emergency Help
            </button>
          </div>
        </section>

        {/* Final Call-to-Action Section */}
        <div className="bg-blue-50 p-6 rounded-lg shadow-lg mt-12 text-center">
          <h2 className="text-3xl font-semibold text-blue-700">Join CampusCare Today</h2>
          <p className="mt-4 text-gray-700">
            Start your journey to better mental health. Reflect on your day, connect with our community, and take control of your well-being.
          </p>
          <button href="https://discord.gg/QW7cpFGM" className="mt-6 px-8 py-2 bg-blue-700 text-white font-semibold rounded-lg hover:bg-blue-800 transition-colors">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
