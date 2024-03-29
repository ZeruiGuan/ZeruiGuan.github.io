// src/SignUp.js
import React, { useState } from 'react';
import { app } from '../firebase'; // Ensure this path matches where your firebase.js is located
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import {Link } from 'react-router-dom';


const SignUp = () => {
 const [email, setEmail] = useState('');
 const [password, setPassword] = useState('');
 const [error, setError] = useState('');

 const handleSubmit = async (event) => {
   event.preventDefault();
   setError('');
   try {
     await createUserWithEmailAndPassword(getAuth(app), email, password);
     console.log('User account created & signed in!');
     setEmail('');
     setPassword('');
     // Redirect to your desired page after successful sign up
   } catch (error) {
     setError("Failed to create an account: " + error.message);
   }
 };

 return (
  <div className="login-container">
    <div className="login-content">
      <h2>Sign up</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="button-container">
            <button className="btn btn-primary" type="submit">Sign Up </button>
        </div>
        <div className="signup-prompt">
            Already have an account? <Link to="/login">Log in</Link>
        </div>
      </form>
    </div>
  </div>
);
};

 export {SignUp};