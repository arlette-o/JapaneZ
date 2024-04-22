import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Hiragana from './pages/Hiragana';
import Katakana from './pages/Katakana';

const App: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Hiragana />}></Route>
                <Route path="/katakana" element={<Katakana/>}></Route>
            </Routes>
        </Router>
    );
};

export default App;
