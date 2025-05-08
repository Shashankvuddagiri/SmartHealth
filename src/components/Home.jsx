import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import '../styless/First.css'; // Import the CSS file for styling

const Home = () => {
    const navigate = useNavigate(); // Initialize the navigate function

    return (
        <div className="container">
            <nav className="vertical-navbar">
                <ul>
                    <li>
                        <button onClick={() => navigate('/dashboard')}>Dashboard</button>
                    </li>
                    <li>
                        <button onClick={() => navigate('/registration')}>Registration</button>
                    </li>
                    <li>
                        <button onClick={() => navigate('/diagnostics')}>Diagnostics</button>
                    </li>
                    <li>
                        <button onClick={() => navigate('/prescription')}>Prescription/Consultation</button>
                    </li>
                    <li>
                        <button onClick={() => navigate('/first')}>Medicines</button>
                    </li>
                    <li>
                        <button onClick={() => navigate('/reports')}>Reports</button>
                    </li>
                    <li>
                        <button onClick={() => navigate('/employees')}>Employees</button> {/* Redirect to Employee.jsx */}
                    </li>
                    <li>
                        <button onClick={() => navigate('/ledger')}>Ledger</button>
                    </li>
                    <li>
                        <button onClick={() => navigate('/settings')}>Settings</button>
                    </li>
                </ul>
            </nav>
            <footer className="footer">
                <p>© 2025 Smart Health Management. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Home;
