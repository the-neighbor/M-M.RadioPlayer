import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Schedule from './pages/Schedule';
import Contact from './pages/Contact';
import RadioPlayer from './components/RadioPlayer';
import Upcoming from './pages/Upcoming';
import { useEffect, useState } from 'react';

const App = () => {

  const style = {
    position: 'fixed',
    top: 0,
    left: 0,
    height: '100%',
    width: '100%',
    zIndex: -1,
    background: 'url(/images/offline.jpg) no-repeat center center fixed',
    backgroundSize: 'cover',
    filter: 'blur(10px)',
  };
  //fetch data from api and store in state every 1 minute

  const fetchData = async () => {

    try {
      const response = await fetch(
        'https://m-m-radiostation.onrender.com/nowplaying'
      );
      const data = await response.json();
      setData(data);
    } catch (error) {
      console.error(error);
    }
  }

  const [data, setData] = useState(null);
  useEffect(() => 
  {
    fetchData();
    const interval = setInterval(() => {
      fetchData();
    }, 60000);
    return () => clearInterval(interval);
  }
  ,[]);

  if (data) {
    if (data.background_img) {
      style.background = `url(${data.background_img}) no-repeat center center fixed`;
      style.backgroundSize = 'cover';
    }
  }


  return (
    <div className="container">
    <Router>
    <div className="background" style={style}></div>
      <RadioPlayer data={data}/>
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
