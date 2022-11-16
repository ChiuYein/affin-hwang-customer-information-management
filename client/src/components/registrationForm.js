import React, { useState } from "react";
import axios from "axios";

const baseURL = "http://localhost:3000/";

function RegistrationForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post(`${baseURL}register`, { firstName, lastName, emailAddress }).then((response) => {
      console.log('response:', response);
    });
  };

  return (
    <form onSubmit={handleSubmit} style={{textAlign: "center"}}>
      <h1>Register</h1>
      <div>
        <label>
          Enter your firstname:
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Enter your lastname:
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Enter your email address:
          <input
            type="text"
            value={emailAddress}
            onChange={(e) => setEmailAddress(e.target.value)}
          />
        </label>
      </div>

      <input type="submit" />
    </form>
  );
}
export default RegistrationForm;