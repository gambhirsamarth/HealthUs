import React from 'react';

const AboutUs = () => {
  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">About Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Existing content */}
        </div>
        <div className="mt-12">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
            <p className="text-gray-700">
              At XYZ Mental Health, our mission is to provide accessible and high-quality mental health services to individuals
              in need. We are dedicated to promoting mental well-being, fostering resilience, and empowering our clients to lead
              fulfilling lives. We strive to create a safe and inclusive space where everyone feels heard, understood, and supported
              on their journey towards emotional wellness.
            </p>
          </div>
        </div>
        <div className="mt-12">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold mb-4">Our Values</h3>
            <ul className="list-disc list-inside text-gray-700">
              <li>Compassion: We approach every individual with empathy, compassion, and respect.</li>
              <li>Inclusivity: We believe in creating an inclusive and welcoming environment for people of all backgrounds and identities.</li>
              <li>Collaboration: We collaborate with our clients to develop personalized treatment plans and empower them to actively participate in their mental health journey.</li>
              <li>Evidence-based: We rely on evidence-based practices and stay up-to-date with the latest research in the field of mental health.</li>
              <li>Confidentiality: We prioritize client confidentiality and maintain the highest standards of privacy and ethical conduct.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
