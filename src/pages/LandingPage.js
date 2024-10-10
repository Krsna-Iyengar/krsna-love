import React from 'react';
import PeacockFeather from '../assets/PeacockFeather.jpeg'

const LandingPage = () => {
  return (
    <div className="landing-page">
      <h1>Welcome to krsna.love</h1>
      <img className="main-photo" src={PeacockFeather} />
      <p>Discover my portfolio of projects and more.</p>
    </div>
  );
};

export default LandingPage;
