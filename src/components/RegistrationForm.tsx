import React, { useState } from "react";
import TextField from "@mui/material/TextField";

const RegistrationForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Call the API to register the user

      // Handle the success response here (e.g., show a success message)
      console.log("response");
    } catch (error) {
      // Handle the error here (e.g., display an error message)
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <TextField
          required
          id="name"
          label="Required"
          margin={"normal"}
          defaultValue="Hello World"
          value={name}
          onChange={handleNameChange}
        />
        {/* <label htmlFor="name">Name:</label>
        <input type="text" id="name" value={name} onChange={handleNameChange} required /> */}
      </div>
      <div>
        <TextField
          id="email"
          label="email"
          margin={"normal"}
          defaultValue="Default Value"
          helperText="Some important text"
          onChange={handleEmailChange}
          value={email}
        />
        {/* <input type="email" id="email" value={email} onChange={handleEmailChange} required /> */}
      </div>
      <div>
        <TextField
          id="password"
          required
          label="password"
          margin={"normal"}
          defaultValue="Default Value"
          helperText="Some important text"
          onChange={handlePasswordChange}
          value={password}
        />
        {/* <label htmlFor="password">Password:</label>
        <input type="password" id="password" value={password} onChange={handlePasswordChange} required /> */}
      </div>
      <button type="submit">Register</button>
    </form>
  );
};

export default RegistrationForm;
