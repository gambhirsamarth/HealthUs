import React from 'react';
import supportIcon from '../assets/support.png';
import meditationIcon from '../assets/meditation.png';
import therapyIcon from '../assets/therapy.png';


const Services = () => {
  const services = [
    {
      title: 'Therapy Sessions',
      description: 'All the therapy resources across the web in one place.',
      icon: therapyIcon,
    },
    {
      title: 'Meditation Classes',
      description: 'Meditation resources and tips.',
      icon: meditationIcon,
    },
    {
      title: 'Online Support',
      description: '24/7 online support for mental health concerns and queries.',
      icon: supportIcon,
    },
  ];

  return (
    <div className="container mx-auto py-8">
      <div className="max-w-screen-xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded shadow">
              <div className="flex items-center justify-center w-16 h-16 bg-green-500 text-white rounded-full text-2xl">
                <img src={service.icon} alt={service.title} className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mt-4">{service.title}</h3>
              <p className="mt-2">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
