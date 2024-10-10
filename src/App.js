import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Use Routes and Route instead of Switch
import LandingPage from './pages/LandingPage';
import PortfolioPage from './pages/PortfolioPage';
import Header from './components/Header';
import NavBar from './components/NavBar';
import './CSS/App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          {' '}
          {/* Update Switch to Routes */}
          <Route path="/" element={<LandingPage />} />{' '}
          {/* Update to element prop */}
          <Route path="/portfolio" element={<PortfolioPage />} />
        </Routes>
        <NavBar />
      </div>
    </Router>
  );
}

export default App;
