import React from 'react';
import { useNavigate } from 'react-router-dom';

const Homepage = () => {
    const navigate = useNavigate(); // Initialize the navigate function

    const handleGetStarted = () => {
        navigate('/login'); // Navigate to the Login page
    };

    return (
        <div className="homepage">
            <h1>Welcome</h1>
            <h2>Efficient and Smart Health Management</h2>
            <button className="btn" onClick={handleGetStarted}>
                Get Started
            </button>
        </div>
    );
};

export default Homepage;
