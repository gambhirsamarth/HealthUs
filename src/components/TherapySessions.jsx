import React, { useState } from 'react';

const TherapySessions = () => {
  const [showResources, setShowResources] = useState(false);

  const toggleResources = () => {
    setShowResources(!showResources);
  };

  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Therapy Sessions</h2>
        <p className="text-gray-700 mb-4">
          Welcome to our Therapy Sessions! Here, you can find a list of free and paid online therapy resources to support your mental well-being.
        </p>
        <button
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          onClick={toggleResources}
        >
          {showResources ? 'Hide Resources' : 'Show Resources'}
        </button>
        {showResources && (
          <div className="mt-8">
            <h3 className="text-xl font-bold mb-4">Free Online Therapy Resources</h3>
            <ul className="list-disc list-inside text-gray-700">
              <li>
                <a
                  href="https://www.7cups.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  7 Cups
                </a>
              </li>
              <li>
                <a
                  href="https://www.talkspace.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  Talkspace
                </a>
              </li>
              <li>
                <a
                  href="https://www.betterhelp.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  BetterHelp
                </a>
              </li>
            </ul>
            <h3 className="text-xl font-bold mt-8 mb-4">Paid Online Therapy Resources</h3>
            <ul className="list-disc list-inside text-gray-700">
              <li>
                <a
                  href="https://www.psychologytoday.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  Psychology Today
                </a>
              </li>
              <li>
                <a
                  href="https://www.takingcharge.csh.umn.edu/self-help-therapy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  Taking Charge - Self-Help Therapy
                </a>
              </li>
              <li>
                <a
                  href="https://www.ted.com/playlists/400/therapy_love"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  TED Talks - Therapy and Love
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </section>
  );
};

export default TherapySessions;
