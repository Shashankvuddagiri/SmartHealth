import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './components/Homepage';
import Login from './components/Login';
import Signup from './components/Signup'; // Import Signup component
import './App.css';
import First from './components/First'; // Import First component

function App() {
    return (
        <Router>
            <Routes>
                {/* Route for Homepage */}
                <Route path="/" element={<Homepage />} />
                
                {/* Route for Login */}
                <Route path="/login" element={<Login />} />

                {/* Route for Signup */}
                <Route path="/signup" element={<Signup />} />
                <Route path="/first" element={<First />} />
            </Routes>
        </Router>
    );
}

export default App;