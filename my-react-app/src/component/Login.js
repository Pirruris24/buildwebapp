import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

function Login() {
    

    const [values, setValues] = useState({
        email: '',
        password: ''
    });
    const [error, setError] = useState('');

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setValues({ ...values, [name]: value });
    };

    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.post(`http://localhost:8000/login/${values.email} ${values.password}`);
            
    
                navigate('/maps');
           
        } catch (error) {
            console.error('Error logging in:', error);
            setError('An error occurred while logging in');
        }
    };

    return (
        <div className="d-flex justify-content-center align-items-center bg-primary vh-100">
            <div className="bg-white p-3 rounded w-25">
                <h2 style={{ color: 'Tomato' }}>Sign-In</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="email"><strong>Email</strong></label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={values.email}
                            onChange={handleInputChange}
                            placeholder="Enter Email"
                            className="form-control rounded-0"
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password"><strong>Password</strong></label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={values.password}
                            onChange={handleInputChange}
                            placeholder="Enter Password"
                            className="form-control rounded-0"
                            required
                        />
                    </div>
                    {error && <div className="text-danger">{error}</div>}
                    <button type="submit" className="btn btn-success w-100 rounded-0">Log in</button>
                    <p>You are agreeing to are Terms and Policies</p>
                    <Link to="/registeruser" className="btn btn-default border w-100 rounded-0 text-decoration-none">Create Account</Link>
                    <p />
                    <Link to="/" className="btn btn-default border w-100 rounded-0 text-decoration-none">Home</Link>
                </form>
            </div>
        </div>
    );
}

export default Login;
