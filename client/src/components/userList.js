// React
import React, { useEffect, useState } from "react";
import axios from "axios";

const baseURL = "http://localhost:3000/";

export default function UserList() {
  const [users, setUsers] = useState([]);

  const fetchAllUsers = () => {
    axios.get(`${baseURL}user-list`).then((response) => {
      setUsers(response.data.data);
    });
  };

  useEffect(() => {
    fetchAllUsers();
  }, []);

  return (
    <>
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
    </>
  );
}
