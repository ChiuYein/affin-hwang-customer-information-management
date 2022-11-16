// React
import React, { useEffect, useState } from "react";
import axios from "axios";

const baseURL = "http://localhost:3000/";

export default function Dashboard() {
  const [users, setUsers] = useState([]);

  const fetchAllUsers = () => {
    axios.get(`${baseURL}user-list`).then((response) => {
      setUsers(response.data.data);
    });
  };

  useEffect(() => {
    fetchAllUsers();
  });

  console.log("users:", users);

  return (
    <div>
      <h3 style={{ textAlign: "center" }}>Welcome back</h3>

      <table style={{ width: "100%" }}>
        <tbody>
          <tr
            style={{
              border: "1px solid #dddddd",
              textAlign: "left",
              padding: "8px",
            }}
          >
            <th>First name</th>
            <th>Last name</th>
            <th>Email Address</th>
          </tr>
          {users.map((user) => (
            <tr
              style={{
                border: "1px solid #dddddd",
                textAlign: "left",
                padding: "8px",
              }}
            >
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{user.emailAddress}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
