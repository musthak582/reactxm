// Signup.js
import React, { useState } from 'react';
import './Login.css';

function Signup() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleSignup = (e) => {
    e.preventDefault();
    if (!username || !password || !confirmPassword) {
      setError('Please fill in all fields.');
    } else if (password !== confirmPassword) {
      setError('Passwords do not match.');
    } else {
      setError('');
      // Handle signup logic here
      alert(`Signed up as ${username}`);
    }
  };

  return (
    <div className="login-container">
      <h2>Sign Up</h2>
      {error && <p className="error-message">{error}</p>}
      <form onSubmit={handleSignup}>
        <div className="input-group">
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter your username"
          />
        </div>
        <div className="input-group">
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
          />
        </div>
        <div className="input-group">
          <label>Confirm Password:</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirm your password"
          />
        </div>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default Signup;
