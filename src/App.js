import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Services from './components/Services';
import AboutUs from './components/AboutUs';
import Meditation from './components/Meditation';
import TherapySessions from './components/TherapySessions';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/meditation" element={<Meditation />} />
          <Route path="/therapy-sessions" element={<TherapySessions />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
