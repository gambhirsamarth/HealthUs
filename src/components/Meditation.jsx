import React, { useState } from 'react';

const Meditation = () => {
  const [showResources, setShowResources] = useState(false);

  const toggleResources = () => {
    setShowResources(!showResources);
  };

  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Meditation</h2>
        <p className="text-gray-700 mb-4">
          Welcome to our Meditation section! Here, you can find a list of meditation resources to help calm your mind and promote relaxation.
        </p>
        <button
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          onClick={toggleResources}
        >
          {showResources ? 'Hide Resources' : 'Show Resources'}
        </button>
        {showResources && (
          <div className="mt-8">
            <h3 className="text-xl font-bold mb-4">Guided Meditation</h3>
            <ul className="list-disc list-inside text-gray-700">
              <li>
                <a
                  href="https://www.calm.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  Calm
                </a>
              </li>
              <li>
                <a
                  href="https://www.headspace.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  Headspace
                </a>
              </li>
              <li>
                <a
                  href="https://www.insighttimer.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  Insight Timer
                </a>
              </li>
            </ul>
            <h3 className="text-xl font-bold mt-8 mb-4">Meditation Apps</h3>
            <ul className="list-disc list-inside text-gray-700">
              <li>
                <a
                  href="https://www.smilingmind.com.au/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  Smiling Mind
                </a>
              </li>
              <li>
                <a
                  href="https://www.tenpercent.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  Ten Percent Happier
                </a>
              </li>
              <li>
                <a
                  href="https://www.stopbreathethink.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  Stop, Breathe & Think
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </section>
  );
};

export default Meditation;
