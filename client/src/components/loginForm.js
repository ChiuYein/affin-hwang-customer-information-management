// React
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LoginForm() {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [authenticated, setauthenticated] = useState(
    localStorage.getItem(localStorage.getItem("authenticated") || false)
  );

  const users = [
    { firstName: "new", lastName: "register", emailAddress: "new@register" },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    const account = users.find((user) => user.emailAddress === emailAddress);
    console.log("account:", account);
    if (account && account.emailAddress === emailAddress) {
      setauthenticated(true);
      localStorage.setItem("authenticated", true);
      navigate("/dashboard");
    }
  };
  return (
    <form onSubmit={handleSubmit} style={{ textAlign: "center" }}>
      <h1>Log in</h1>
      <div>
        <label>
          First name:
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Last name:
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Email address:
          <input
            type="text"
            value={emailAddress}
            onChange={(e) => setEmailAddress(e.target.value)}
          />
        </label>
      </div>
      <input type="submit" value="Submit" />
    </form>
  );
}
