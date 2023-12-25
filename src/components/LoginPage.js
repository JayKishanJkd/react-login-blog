// Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import LIttle from '../assets/download.png';
import '../styles/Login.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogin = () => {
    if (username && password) {
      // Simulate a successful login
      const userData = { username, password };

      // Store user data in Redux
      dispatch({ type: 'LOGIN', payload: userData });

      // Store user data in localStorage
      localStorage.setItem('userData', JSON.stringify(userData));

      // Redirect to the welcome page
      navigate('/blogCreate');
    } else {
      alert('Please enter username and password');
    }
  };

  return (
    <div className="container">
      <div className="main">
        <div className="img">
          <img src={LIttle} alt="Little" />
        </div>

        <div className="main-2">
          <form onSubmit={handleLogin}>
            <div className="submit">Login</div>
            <div className="username">
              <label>Username:</label>
              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="username">
              <label>Password:</label>
              <input
                type="password"
                placeholder="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="submit">
              <button type="submit">Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
