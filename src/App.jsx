import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './components/Homepage';
import Login from './components/Login';
import Signup from './components/Signup'; // Import Signup component
import First from './components/First'; // Import First component
import Patent from './components/Patent'; // Import Patent component
import Institute from './components/Institute';
import Home from './components/Home';
import Employee from './components/Employee';
import Researcher from './components/Researcher';
import './App.css';

function App() {
    return (
        <Router>
            <Routes>
                {/* Route for Homepage */}
                <Route path="/" element={<Homepage />} /> {/* Route for Homepage */}
                
                {/* Route for Login */}
                <Route path="/login" element={<Login />} />

                {/* Route for Signup */}
                <Route path="/signup" element={<Signup />} />
                
                {/* Route for First */}
                <Route path="/first" element={<First />} />
                {/* <Route path="/home" element={<Home />} /> */}
                <Route path="/employees" element={<Employee />} /> {/* Route for Employee */}

                {/* Route for Patents */}
                <Route path="/patents" element={<Patent />} />
                <Route path="/institutes" element={<Institute />} />
                <Route path="/researcher" element={<Researcher />} />
            </Routes>
        </Router>
    );
}

export default App;