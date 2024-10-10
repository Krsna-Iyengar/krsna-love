import React from 'react';
import '../CSS/Header.css'; // Styling for the header

const Header = () => {
  return (
    <header className="header">
      <div className="logo">krsna.love</div>
      <div className="krsna-love">krsna.love</div>
      <div className="header-buttons">
        <button className="header-btn">Btn 1</button>
        <button className="header-btn">Btn 2</button>
      </div>
    </header>
  );
};

export default Header;
