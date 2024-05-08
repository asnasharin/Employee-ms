import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

const Login = () => {
    const [values, setValues] = useState({
        email: '',
        password: ''
    });
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost:3000/login', values)
            .then(result => {
                console.log(result);
                if (result.data === 'success') {
                    navigate('/dashboard');
                } else {
                    setError('Invalid username or password'); // Set error message
                }
            })
            .catch(err => {
                console.log(err);
                setError('An error occurred while logging in'); // Set error message for other errors
            });
    };

    return (
        <div className='d-flex justify-content-center align-items-center vh-100 loginpage'>
            <div className='p-3 rounded w-25 border login-form'>
                <h2>Login Page</h2>
                {error && <div className="alert alert-danger">{error}</div>} {/* Error message */}
                <form onSubmit={handleSubmit}>
                    <div className='mb-3'>
                        <label htmlFor="username"><strong>Email:</strong></label>
                        <input
                            type="username"
                            name='username'
                            autoComplete='off'
                            placeholder='Enter username'
                            onChange={(e) => setValues({ ...values, email: e.target.value })}
                            className='form-control rounded-0'
                        />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="password"><strong>Password:</strong></label>
                        <input
                            type="password"
                            name='password'
                            placeholder='Enter Password'
                            onChange={(e) => setValues({ ...values, password: e.target.value })}
                            className='form-control rounded-0'
                        />
                    </div>
                    <button className="btn btn-success w-100 rounded-0 mt-3">Login</button>
                </form>
                <p className="mt-3 text-center">
                    Don't have an account? <Link to="/signup">Create one</Link>
                </p>
            </div>
        </div>
    );
};

export default Login;
