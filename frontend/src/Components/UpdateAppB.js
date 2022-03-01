import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { useHistory,useParams } from "react-router-dom";
import user from "../images/user.png";
import Sidebar from "./Sidebar";
import logout from "../images/logout.png";

const  UpdateAppB =() => {
    const [address, setaddress] = useState("");
    const history = useHistory();
    const {id} = useParams();

    const updateEmployee = async (e)=>{
        e.preventDefault();
        await axios.put(`http://localhost:5001/employee/${id}`,{
           address:address
        });
        history.push("/appB");
    }
    useEffect(()=>{
        getEmployeeById();
    }, []);

    const getEmployeeById = async () => {
          const response = await axios.get(`http://localhost:5001/employee/appB/${id}`);
          setaddress(response.data.address);
    }

    return(
    <div className="MainContainer">
      <div className="containermini">
        <img src={user} className="user" />
        <Sidebar />
        <img src={logout} className="logout" />
      </div>
      <div className="homebox1">
      <div className="container containerTop">
                <div className="row">
                    <div className="col-md-12 col-sm-12">
                        <div className="row rtitle" style={{ marginTop: '100px' }}>
                           
                            <div className="col-md-12 col-sm-12 col-lg-12 position-relative text-center">
                                <h3 className='display-9 fw-bold'>Update Employee</h3>
                               
                            </div>
                            <hr className="hr" style={{ height: '2px', color: '#0a90e8' }} />
                        </div>                        
                    </div>      

                    <div className="row" style={{marginTop:'3px'}}>
                        <div className="col-md-2 col-sm-2 col-lg-2"/>
                        <div className="col-md-8 col-sm-8 col-lg-8">
                            <div className="shadowBox">
                                <form onSubmit={updateEmployee} >
                                <div className='form-tab' >
                                      
                                        <div className='form-group col-md-5' style={{ marginTop: '15px' }}>
                                        <label >Address </label>
                                            <input className="input" 
                                            value ={address} 
                                            onChange={(e)=>setaddress(e.target.value)} 
                                            type="text" 
                                            required
                                           ></input>
                                            
                                                                                   
                                        </div>
                                        
                                        
                                        <div className="btn-form">
                            
                                        <button type="submit" className="btn btn-primary sub_btn" ><i class="far fa-save"></i>&nbsp;Update</button>
                                        </div>
                                      
                                        <div className='form-group col-md-1' style={{ marginTop: '15px' }}/>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-md-2 col-sm-2 col-lg-2"/>
                    </div>                                  
                </div>
            </div>
      </div>
     
    </div>
    )
}
export default UpdateAppB