import './App.css';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Landing';
import Pokedex from './components/Pokedex';
import TCG from './components/TCG';
import Nav from './components/Nav';


function App() {
  return ( 
    <div className="App">
      <Router>
        <Nav/>
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