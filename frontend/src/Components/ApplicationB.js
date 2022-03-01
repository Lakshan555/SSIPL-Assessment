import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import user from "../images/user.png";
import Sidebar from "./Sidebar";
import logout from "../images/logout.png";

function ApplicationB() {
  const [employee, setemployee] = useState([]);

  useEffect(() => {
    getEmployees();
  }, []);

  const getEmployees = async () => {
    const response = await axios.get("http://localhost:5001/employee/AppB");
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
        <p id="apptitle">Application B</p>

        <div className="add-button">
        {/* <Link to="emp_add" className="btn btn-dark"><i className="fas fa-user-plus"></i>&nbsp;Add </Link>&nbsp; */}
        </div>
     
        <div className="table" style={{textAlign:'center'}}>
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
                <th scope="col">Address</th>
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
                  <td>{employee.address}</td>
                  <td>
                   
                 
                    &nbsp;
                    <Link  className="btn btn-primary" to={`/update/appB/${employee.id}`}>Update</Link>
                    
                                
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

export default ApplicationB;
