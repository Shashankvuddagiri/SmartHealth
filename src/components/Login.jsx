import React, { useState } from 'react';
import '../styless/Login.css'; // Add a CSS file for styling

const Login = () => {
    const [form, setForm] = useState({
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target; // Destructure name and value from the event target
        setForm({
            ...form,
            [name]: value // Dynamically update the state based on the input's name
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { email, password } = form;
        if (!email || !password) {
            alert('Please fill in all fields');
        } else {
            alert('Form submitted successfully');
        }
    };

    return (
        
        <form className="login-form" onSubmit={handleSubmit}>
            <h2>Welcome back</h2> 
            <h4>please enter your details</h4>
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
            <div>
                <input
                    type="checkbox"
                    id="rememberMe"
                    name="rememberMe"
                    checked={form.rememberMe}
                    onChange={handleChange}
                />
                <label htmlFor="rememberMe">Remember me</label>
            </div>
            <a href="#" style={{ marginLeft: '10px', color: '#007bff', textDecoration: 'none' }}>
                    Forgot Password?
                </a>
            <button type="submit">Signin</button>
            <h5>--------------    or  ---------------------</h5>
            <div className="signup-container">
                <span>Don't have an account?</span>
                <a href="#" className="signup-link">
                    Signup
                </a>
            </div>
        </form>
    );
};

export default Login;