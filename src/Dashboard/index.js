import React, { useState, useEffect } from "react";
import { json } from "react-router-dom";
import Table from "react-bootstrap/Table";
import { apiUrl } from "../utils";

const Dashboard = () => {
  let lastname = JSON.parse(localStorage.getItem("user_data"));
  const imageUrl = `${apiUrl}images/${encodeURIComponent(lastname.user_photo)}`;
  console.log("Image URL:", imageUrl);


  return (
    <div className="container text-white">
      <div className="text-center m-4">
        <h3>Dashboard</h3>
      </div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>User Photo</th>
            <th>User Name</th>
            <th>User Email</th>
            <th>User password</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <img
                src={imageUrl}
                alt="User"
                style={{ width: "100px", height: "100px", borderRadius: "50%" }} // Add styles for presentation
              />
            </td>
            <td>{lastname.name}</td>
            <td>{lastname.email}</td>
            <td>{lastname.password}</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default Dashboard;
