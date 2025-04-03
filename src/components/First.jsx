import React from 'react';
import '../styless/First.css'; // Import the CSS file for styling

const First = () => {
    return (
        <div className="container">
            <nav className="vertical-navbar">
                <ul>
                    <li>Dashboard</li>
                    <li>Registration</li>
                    <li>Diagnostics</li>
                    <li>Prescription/Consultation</li>
                    <li>Medicines</li>
                    <li>Reports</li>
                    <li>Employees</li>
                    <li>Ledger</li>
                    <li>Settings</li>
                </ul>
            </nav>
            <div className="content">
                <button className="patents">Patents</button>
                <button className="doctors">Doctors</button>
            </div>
        </div>
    );
};

export default First;
