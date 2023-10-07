import React from 'react';
import Navbar from './components/Navbar';
import History from './pages/History/History'
import Culinary from './pages/Culinary/Culinary'
import Tour from './pages/Tour/Tour'
import Economy from './pages/Economy/Economy'
import Culture from './pages/Culture/Culture';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/history" element={<History />} />
          <Route exact path="/culinary" element={<Culinary />} />
          <Route exact path="/tour" element={<Tour />} />
          <Route exact path="/economy" element={<Economy />} />
          <Route exact path="/culture" element={<Culture />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
