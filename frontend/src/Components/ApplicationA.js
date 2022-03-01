import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import user from "../images/user.png";
import Sidebar from "./Sidebar";
import logout from "../images/logout.png";

function ApplicationA() {
  const [employee, setemployee] = useState([]);

  useEffect(() => {
    getEmployees();
  }, []);

  const getEmployees = async () => {
    const response = await axios.get("http://localhost:5001/employee/appA");
    setemployee(response.data);
  };

  return (
    <div className="MainContainer">
      <div className="containermini">
        <img src={user} className="user" />
        <Sidebar />
        <img src={logout} className="logout" />
      </div>

      <div className="mainminicontainer">
        <p id="apptitle">Application A</p>

        <div className="table">
          <table
            class="table table-ligth"
            style={{ backgroundColor: "lightblue" }}
          >
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Mobile</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {employee.map((employee, index) => (
                <tr key={employee.id}>
                  <td>{1 + index}</td>
                  <td>{employee.name}</td>
                  <td>{employee.email}</td>
                  <td>{employee.mobile}</td>
                  <td>
                    <Link to={`/edit/${employee.id}`}>edit</Link>
                    {/* <button onClick={()=>deleteProduct(employee.id)}>delete</button> */}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default ApplicationA;
