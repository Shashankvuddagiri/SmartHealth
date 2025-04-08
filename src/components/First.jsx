import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import '../styless/First.css'; // Import the CSS file for styling

const First = () => {
    return (
        <div className="container">
            <nav className="vertical-navbar">
                <ul>
                    <li>
                        <Link to="/dashboard">Dashboard</Link>
                    </li>
                    <li>
                        <Link to="/registration">Registration</Link>
                    </li>
                    <li>
                        <Link to="/diagnostics">Diagnostics</Link>
                    </li>
                    <li>
                        <Link to="/prescription">Prescription/Consultation</Link>
                    </li>
                    <li>
                        <Link to="/first">Medicines</Link>
                    </li>
                    <li>
                        <Link to="/reports">Reports</Link>
                    </li>
                    <li>
                        <Link to="/employees">Employees</Link>
                    </li>
                    <li>
                        <Link to="/ledger">Ledger</Link>
                    </li>
                    <li>
                        <Link to="/settings">Settings</Link>
                    </li>
                </ul>
            </nav>
            <div className="content">
                <Link className="patents" to="/patents">Patents</Link>
                <Link className="doctors" to="/institutes">Institutes</Link>
            </div>
            <footer className="footer">
                <p>© 2025 Smart Health Management. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default First;
