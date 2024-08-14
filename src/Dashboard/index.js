import React, { useState, useEffect } from "react";
import { json } from "react-router-dom";
import Table from 'react-bootstrap/Table';

const Dashboard = () => {
  let lastname = JSON.parse(localStorage.getItem("user_data"));

  return (
    <div className="container text-white">
    <div className="text-center m-4">
        <h3>Dashboard</h3>
    </div>
      <Table striped bordered hover>
      <thead>
        <tr>
          <th>User Name</th>
          <th>User Email</th>
          <th>User password</th>
        </tr>
      </thead>
      <tbody>
          <tr>
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
