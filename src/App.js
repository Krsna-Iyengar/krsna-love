import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import PortfolioPage from './pages/PortfolioPage';
import About from './pages/About';
import Header from './components/Header';
import NavBar from './components/NavBar';
import './CSS/App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
          <div className="content">
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/portfolio" element={<PortfolioPage />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </div>
        <NavBar />
      </div>
    </Router>
  );
}

export default App;
