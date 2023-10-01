import React, { useState } from 'react';
import "../styles/SignUp.css";

function SignUp() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the form submission logic here (e.g., API calls)
    console.log(formData);
  };

  return (
    <div className="signUpContainer">
      <div className="signUpFormContainer">
        <h2>Create an account</h2>
        <h3>Let's get started!</h3> 
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleInputChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleInputChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleInputChange}
          />
          <button className="bttn" type="submit">Sign Up</button>
        </form>
      </div>
      <div className="signUpImageContainer">
        {/* You can add your image here */}
      </div>
    </div>
  );
}

export default SignUp;
