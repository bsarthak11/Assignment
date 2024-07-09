import React, { useEffect, useState } from "react";
import "./dashboard.css";
import axios from "axios";

export const Dashboard = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/alldata")
      .then((users) => setUsers(users.data))
      .catch((err) => console.error(err));
  }, []);
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>

            <th>Data Of Birth</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, ind) => {
            return (
              <tr key={ind}>
                <td>{user.name}</td>
                <td>{user.dateOfBirth}</td>
                <td>{user.email}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;
