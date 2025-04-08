import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import '../styless/Employee.css'; // Import CSS for styling

const Employee = () => {
    const navigate = useNavigate(); // Initialize the navigate function

    const employees = [
        { id: 1, name: 'John Doe', role: 'Medical Staff' },
        { id: 2, name: 'Jane Smith', role: 'Researcher' },
        { id: 3, name: 'Alice Johnson', role: 'Administrative Staff' },
        { id: 4, name: 'Bob Brown', role: 'Support Staff' },
    ];

    return (
        <div className="employee-container">
            {/* Left Navbar */}
            <nav className="right-navbar">
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
                        <button onClick={() => navigate('/first')}>Medicines</button> {/* Redirect to First.jsx */}
                    </li>
                    <li>
                        <button onClick={() => navigate('/reports')}>Reports</button>
                    </li>
                    <li>
                        <button onClick={() => navigate('/employees')}>Employees</button>
                    </li>
                    <li>
                        <button onClick={() => navigate('/ledger')}>Ledger</button>
                    </li>
                    <li>
                        <button onClick={() => navigate('/settings')}>Settings</button>
                    </li>
                </ul>
            </nav>

            {/* Employee Cards */}
            <div className="employee-cards">
                {employees.map((employee) => (
                    <div key={employee.id} className="employee-card">
                        <h3>{employee.name}</h3>
                        <p>{employee.role}</p>
                    </div>
                ))}
            </div>

            {/* Right Navbar */}
            <nav className="left-navbar">
                <ul>
                <ul>
                    <li>
                        <button>Medical Staff</button>
                    </li>
                    <li>
                        <button>Administrative Staff</button>
                    </li>
                    <li>
                        <button onClick={() => navigate('/researcher')}>Researcher</button> {/* Redirect to Researcher.jsx */}
                    </li>
                    <li>
                        <button>Support Staff</button>
                    </li>
                </ul>
                </ul>
            </nav>
            <footer className="footer">
                <p>© 2025 Smart Health Management. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Employee;