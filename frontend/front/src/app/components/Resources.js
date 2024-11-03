// components/Resources.js
"use client";
import React from 'react';

const Resources = () => {
  return (
    <div className="p-8 bg-gradient-to-b from-blue-50 to-white min-h-screen">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-blue-700 text-center mb-8">Mental Health Resources</h1>
        <p className="text-lg text-gray-700 text-center mb-10">
          Here are some helpful resources and support options for anyone in need of assistance.
        </p>

        {/* Emergency Contacts Section */}
        <section className="mb-10">
          <h2 className="text-3xl font-semibold text-blue-700 mb-4">📞 Emergency Contacts</h2>
          <div className="bg-white p-6 rounded-lg shadow-md space-y-4">
            <p className="text-gray-800">
              <strong>National Suicide Prevention Lifeline:</strong> <span className="text-blue-600">1-800-273-8255</span> (available 24/7)
            </p>
            <p className="text-gray-800">
              <strong>Crisis Text Line:</strong> Text <span className="text-blue-600">HOME</span> to <span className="text-blue-600">741741</span> for free, 24/7 support.
            </p>
            <p className="text-gray-800">
              <strong>National Alliance on Mental Illness (NAMI) Helpline:</strong> <span className="text-blue-600">1-800-950-NAMI (6264)</span> (Mon-Fri, 10am-10pm ET)
            </p>
          </div>
        </section>

        {/* Online Support Resources Section */}
        <section className="mb-10">
          <h2 className="text-3xl font-semibold text-blue-700 mb-4">🌐 Online Support Resources</h2>
          <div className="bg-white p-6 rounded-lg shadow-md space-y-4">
            <p className="text-gray-800">
              <a href="https://www.7cups.com/" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
                7 Cups of Tea
              </a> - Free online text chat with trained listeners, online therapists & counselors.
            </p>
            <p className="text-gray-800">
              <a href="https://www.betterhelp.com/" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
                BetterHelp
              </a> - Online therapy with licensed counselors and therapists.
            </p>
            <p className="text-gray-800">
              <a href="https://www.crisistextline.org/" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
                Crisis Text Line
              </a> - Immediate support by texting HOME to 741741.
            </p>
          </div>
        </section>

        {/* College Resources Section */}
        <section className="mb-10">
          <h2 className="text-3xl font-semibold text-blue-700 mb-4">🏫 College Counseling Resources</h2>
          <div className="bg-white p-6 rounded-lg shadow-md space-y-4">
            <p className="text-gray-800">
              <strong>On-Campus Counseling:</strong> Most colleges offer free or low-cost counseling services for students.
            </p>
            <p className="text-gray-800">
              <strong>Student Health Center:</strong> Visit your campus health center to learn more about available mental health resources.
            </p>
            <p className="text-gray-800">
              <strong>Peer Support Groups:</strong> Many universities have peer-led support groups where students can connect and support one another.
            </p>
          </div>
        </section>

        {/* Hotlines for Immediate Assistance */}
        <section className="mb-10">
          <h2 className="text-3xl font-semibold text-blue-700 mb-4">📱 Hotlines for Immediate Help</h2>
          <div className="bg-white p-6 rounded-lg shadow-md space-y-4">
            <p className="text-gray-800">
              <strong>Substance Abuse and Mental Health Services Administration (SAMHSA):</strong> <span className="text-blue-600">1-800-662-HELP (4357)</span> - Confidential, free, 24/7 help.
            </p>
            <p className="text-gray-800">
              <strong>National Domestic Violence Hotline:</strong> <span className="text-blue-600">1-800-799-SAFE (7233)</span>
            </p>
            <p className="text-gray-800">
              <strong>Veterans Crisis Line:</strong> <span className="text-blue-600">1-800-273-8255</span> (Press 1) or text <span className="text-blue-600">838255</span> for support.
            </p>
          </div>
        </section>

        {/* Final Call-to-Action Section */}
        <div className="bg-blue-50 p-6 rounded-lg shadow-lg text-center mt-8">
          <h2 className="text-3xl font-semibold text-blue-700">You Are Not Alone</h2>
          <p className="text-gray-700 mt-4">
            Remember, reaching out for help is a sign of strength. There are people who care and want to support you.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Resources;
