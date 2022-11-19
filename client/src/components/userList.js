// React
import React, { useEffect, useState } from "react";
import axios from "axios";

const baseURL = "http://localhost:3000/";

export default function UserList() {
  const [users, setUsers] = useState([]);

  // Get all users
  const fetchAllUsers = () => {
    axios.get(`${baseURL}user-list`).then((response) => {
      setUsers(response.data.data);
    });
  };

  useEffect(() => {
    fetchAllUsers();
  }, []);

  // Fetch user by id
  const getUserDetailsById = (id) => {
    axios.get(`${baseURL}user-details/${id}`).then((response) => {
      console.log("response data: ", response.data.data);
      setUsers(response.data.data);
    });
  };

  useEffect(() => {
    getUserDetailsById();
  }, []);

  // Delete user by id
  const deleteUserById = (id) => {
    axios.delete(`${baseURL}user-details/${id}`).then((response) => {
      setUsers(response.data.data);
    });
  };

  useEffect(() => {
    deleteUserById();
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
          key={user.id}
        >
          <td>{user.id}</td>
          <td>{user.firstName}</td>
          <td>{user.lastName}</td>
          <td>{user.emailAddress}</td>
          <td onClick={(e) => getUserDetailsById(user.id)}>View</td>
          <td onClick={(e) => deleteUserById(user.id)}>Delete</td>
        </tr>
      ))}
    </>
  );
}
