import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import '../styless/Login.css'; // Add a CSS file for styling

const Login = () => {
    const [form, setForm] = useState({
        email: '',
        password: ''
    });

    const navigate = useNavigate(); // Initialize the navigate function

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({
            ...form,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { email, password } = form;

        // Simple login validation (replace with real authentication logic)
        if (!email || !password) {
            alert('Please fill in all fields');
        } else if (email === 'saiprasadkathiresan04@gmail.com' && password === '1234') {
            alert('Login successful');
            navigate('/first'); // Redirect to First.jsx on successful login
        } else {
            alert('Invalid email or password');
        }
    };

    return (
        <form className="login-form" onSubmit={handleSubmit}>
            <h2>Welcome back</h2>
            <h4>Please enter your details</h4>
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
            <h5>-------------- or ---------------------</h5>
            <div className="signup-container">
                <span>Don't have an account?</span>
                <a
                    href="#"
                    className="signup-link"
                    onClick={(e) => {
                        e.preventDefault(); // Prevent default anchor behavior
                        navigate('/signup'); // Redirect to the Signup page
                    }}
                >
                    Signup
                </a>
                
            </div>
        </form>
    );
};

export default Login;