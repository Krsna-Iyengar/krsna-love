import React from 'react';
import BadriKrsna from'../assets/BadriKrsna.jpeg'

const About = () => {
  return (
    <div className="about">
      <h1>About Me</h1>
      <img className="main-photo" src={BadriKrsna} />
      <p>Badri Narayana Tulsi Ram Iyengar aka Krsna</p>
      <p>Born in Paris, France</p>
      <p>Raised in Los Angeles, CA, USA</p>
      <p>Currently in Chennai, TN, India</p>

    </div>
  );
};

export default About;
