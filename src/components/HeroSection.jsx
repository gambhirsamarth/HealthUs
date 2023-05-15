import React from 'react';
import heroImage from '../assets/home-image.avif'; // Update the file path based on your directory structure

const HeroSection = () => {
  return (
    <section className="bg-white text-black py-12">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2">
          <h1 className="text-4xl font-bold mb-4 mt-2 mx-4">Your Mental Well-being Matters</h1>
          <p className="text-lg mb-6 mt-2 mx-4">Discover a path to mental wellness and live a fulfilling life.</p>
          <button className="bg-green-500 text-white py-2 px-4 rounded-full font-bold uppercase shadow hover:bg-green-600 mx-4">
            Get Started
          </button>
        </div>
        <div className="md:w-1/2 mt-8 md:mt-0">
          <img src={heroImage} alt="Hero" className="rounded-lg shadow-lg" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
