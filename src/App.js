// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import LRU from './components/LRU';
import MRU from './components/MRU';
import FIFO from './components/FIFO';
import LIFO from './components/LIFO';
import ARC from './components/ARC';
import Random from './components/Random';
import Optimal from './components/Optimal';
import Clock from './components/Clock';

// Importa el archivo CSS
import './App.css';

function App() {
    return (
        <Router>
            <nav>
                <ul>
                    <li><Link to="/lru">LRU</Link></li>
                    <li><Link to="/mru">MRU</Link></li>
                    <li><Link to="/fifo">FIFO</Link></li>
                    <li><Link to="/lifo">LIFO</Link></li>
                    <li><Link to="/arc">ARC</Link></li>
                    <li><Link to="/random">Random</Link></li>
                    <li><Link to="/optimal">Optimal</Link></li>
                    <li><Link to="/clock">Clock</Link></li>
                </ul>
            </nav>

            <Routes>
                <Route path="/lru" element={<LRU />} />
                <Route path="/mru" element={<MRU />} />
                <Route path="/fifo" element={<FIFO />} />
                <Route path="/lifo" element={<LIFO />} />
                <Route path="/arc" element={<ARC />} />
                <Route path="/random" element={<Random />} />
                <Route path="/optimal" element={<Optimal />} />
                <Route path="/clock" element={<Clock />} />
            </Routes>
        </Router>
    );
}

export default App;
