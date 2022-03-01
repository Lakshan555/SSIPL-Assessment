import React, { useState } from "react";
import user from "../images/user.png";
import Sidebar from "./Sidebar";
import logout from "../images/logout.png";
import lady from "../images/lady.png";

function Home() {
  return (
    <div className="MainContainer">
      <div className="containermini">
        <img src={user} className="user" />
        <Sidebar />
        <img src={logout} className="logout" />
      </div>
      <div className="homebox1">
        <img src={lady} className="homeVector" />
        <span className="font-link">
          <h2 className="welcm-name">
            {" "}
            Hello Software Systems International Pvt LTD!
          </h2>
        </span>
      </div>
    </div>
  );
}

export default Home;
