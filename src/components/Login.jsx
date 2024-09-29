import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CCS_LOGO from '../../public/ccs_logo.png'; // Replace with the correct path to your logo

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Implement sign-in logic here
    console.log('Sign In Clicked', { username, password });
    navigate('/home'); // Navigate to the dashboard or home page upon successful login
  };

  return (
    <div style={{ display: 'flex', height: '100vh', fontFamily: "'Roboto', sans-serif", overflow: 'hidden' }}>
      {/* Left Section with Logo */}
      <div style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#034FAF',
        color: 'white',
        padding: '20px',
        textAlign: 'center'
      }}>
        <img src={CCS_LOGO} alt="Logo" style={{ width: '150px', marginBottom: '20px' }} />
        <h1 style={{ fontSize: '24px', fontWeight: 'bold' }}>Laguna State Polytechnic University</h1>
        <p style={{ fontSize: '16px', fontWeight: 'bold' }}>AI-Powered Meeting Assistant</p>
      </div>

      {/* Right Section with Sign-In Form */}
      <div style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '40px',
        backgroundColor: '#f9f9f9'
      }}>
        <h2 style={{ color: '#034FAF', fontWeight: '900', marginBottom: '40px' }}>Sign In</h2>
        <div style={{ width: '100%', maxWidth: '400px' }}>
          {/* Username Input */}
          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '5px' }}>Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your username"
              style={{
                width: '100%',
                padding: '10px',
                borderRadius: '5px',
                border: '1px solid #ccc'
              }}
            />
          </div>

          {/* Password Input */}
          <div style={{ marginBottom: '30px' }}>
            <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '5px' }}>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              style={{
                width: '100%',
                padding: '10px',
                borderRadius: '5px',
                border: '1px solid #ccc'
              }}
            />
          </div>

          {/* Sign In Button */}
          <button
            onClick={handleLogin}
            style={{
              width: '100%',
              padding: '15px',
              backgroundColor: '#034FAF',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              fontWeight: 'bold',
              fontSize: '16px',
              cursor: 'pointer'
            }}
          >
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
