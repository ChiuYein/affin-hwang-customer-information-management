// React
import React from "react";
import UserList from "./userList";

export default function Dashboard() {
  return (
    <div>
      <h3 style={{ textAlign: "center" }}>Welcome back</h3>

      <table style={{ width: "100%" }}>
        <thead>
          <tr
            style={{
              border: "1px solid #dddddd",
              textAlign: "left",
              padding: "8px",
            }}
          >
            <th>User id</th>
            <th>First name</th>
            <th>Last name</th>
            <th>Email Address</th>
          </tr>
        </thead>
        <tbody>
          <UserList />
        </tbody>
      </table>
    </div>
  );
}
