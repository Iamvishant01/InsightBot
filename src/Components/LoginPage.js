// src/components/LoginPage.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';
const LoginPage = () => {
  const [name, setName] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/welcome', { state: { name } });
  };

  return (
    <div className="Login-Container">
<form class="form" onSubmit={handleSubmit}>
   <p class="form-title">Aapka agla kadam yahan se 😊 !</p>
    <div class="input-container">
      <input type="text"             value={name}
            onChange={(e) => setName(e.target.value)}
            required placeholder="Enter your name"/>
      <span>
      </span>
  </div>
  <div class="input-container">
      <input type="email" placeholder="Enter email" required/>
    </div>
     <button type="submit" class="submit">Lets Insight 🧐 !</button>

  <p class="signup-link">we don't save your information or history</p>
</form>

    </div>
  );
};

export default LoginPage;