import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Schedule from './pages/Schedule';
import Contact from './pages/Contact';
import RadioPlayer from './components/RadioPlayer';
import Upcoming from './pages/Upcoming';

const App = () => {
  return (
    <div className="container">
    <Router>
      <RadioPlayer />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/upcoming" element={<Upcoming />} />
      </Routes>
    </Router>
    </div>
  );
};

export default App;
