import './App.css';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Landing';
import Pokedex from './pages/Pokedex';
import TCG from './pages/TCG';
import Nav from './components/Nav';
import ImageShuffle from './components/ImageShuffle';

function App() {
  return ( 
    <div className="App">
      <Router>
        <Nav/>
        <ImageShuffle/>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="pokedex" element={<Pokedex />}/>
          <Route path="trading-card-game" element={<TCG />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;