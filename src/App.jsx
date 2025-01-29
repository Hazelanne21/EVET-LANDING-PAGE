// src/App.js
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import CNN from './components/CNN';
import PredictCondition from './components/PredictCondition'; 
import Result from './components/result'; 
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/CNN" element={<CNN />} />
        <Route path="/predict-condition" element={<PredictCondition />} /> 
        <Route path="/result" element={<Result />} />
      </Routes>
    </Router>
  );
}

export default App;