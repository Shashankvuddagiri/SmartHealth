import React, { useState } from 'react';
import '../styless/Signup.css'; 

const Signup = () => {
    const [form, setForm] = useState({
        employeeId: '',
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({
            ...form,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { employeeId, username, email, password, confirmPassword } = form;

        if (!employeeId || !username || !email || !password || !confirmPassword) {
            alert('Please fill in all fields');
            return;
        }

        if (password !== confirmPassword) {
            alert('Passwords do not match');
            return;
        }

        alert('Signup successful!');
        // Add logic to handle signup (e.g., API call)
    };

    return (
        <div className="signup-form">
            <h2>Signup</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="employeeId">Employee ID:</label>
                <input
                    type="text"
                    id="employeeId"
                    name="employeeId"
                    placeholder="Enter your Employee ID"
                    value={form.employeeId}
                    onChange={handleChange}
                />
                <label htmlFor="username">Username:</label>
                <input
                    type="text"
                    id="username"
                    name="username"
                    placeholder="Enter your username"
                    value={form.username}
                    onChange={handleChange}
                />
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter your email"
                    value={form.email}
                    onChange={handleChange}
                />
                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Enter your password"
                    value={form.password}
                    onChange={handleChange}
                />
                <label htmlFor="confirmPassword">Confirm Password:</label>
                <input
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    placeholder="Confirm your password"
                    value={form.confirmPassword}
                    onChange={handleChange}
                />
                <button type="submit">Signup</button>
            </form>
        </div>
    );
};

export default Signup;
