import React from 'react';
import '../styless/Employee.css'; // Import CSS for styling

const  Researcher = () => {
    const employees = [
        { id: 1, name: 'John Doe', status: 'Active' },
        { id: 2, name: 'Jane Smith', status: 'Active' },
        { id: 3, name: 'Alice Johnson', status: 'Active' },
        { id: 4, name: 'Bob Brown', status: 'Active' },
    ];

    return (
        <div className="employee-container">
            
            <div className="employee-cards">
                {employees.map((employee) => (
                    <div key={employee.id} className="employee-card">
                        <h3>{employee.name}</h3>
                        <p>{employee.role}</p>
                    </div>
                ))}
            </div>
            <nav className="vertical-navbar">
                <ul>
                    <li>
                        <button>Medical Staff</button>
                    </li>
                    <li>
                        <button>Researcher</button>
                    </li>
                    <li>
                        <button>Administrative Staff</button>
                    </li>
                    <li>
                        <button>Support Staff</button>
                    </li>
                </ul>
            </nav>
            <footer className="footer">
                <p>© 2025 Smart Health Management. All rights reserved.</p>
            </footer>   
        </div>
    );
};

export default Researcher;