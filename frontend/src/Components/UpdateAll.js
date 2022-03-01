import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { useHistory,useParams } from "react-router-dom";
import user from "../images/user.png";
import Sidebar from "./Sidebar";
import logout from "../images/logout.png";

const  UpdateAll =() => {
    const [name, setname] = useState("");
    const [email, setEmail] = useState("");
    const [mobile, setMobile] = useState("");
    const history = useHistory();
    const {id} = useParams();

    const updateEmployee = async (e)=>{
        e.preventDefault();
        await axios.put(`http://localhost:5001/employee/${id}`,{
            name: name,
            email: email,
            mobile: mobile,
        });
        history.push("/appA");
    }
    useEffect(()=>{
        getEmployeeById();
    }, []);

    const getEmployeeById = async () => {
          const response = await axios.get(`http://localhost:5001/employee/${id}`);
          setname(response.data.name);
          setEmail(response.data.email);
          setMobile(response.data.mobile);
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
                                        <label >Name </label>
                                            <input className="input" 
                                            value ={name} 
                                            onChange={(e)=>setname(e.target.value)} 
                                            type="text" 
                                            required
                                            placeholder="Enter Name"></input>
                                            
                                                                                   
                                        </div>
                                        <div className='form-group col-md-5' style={{ marginTop: '15px' }}>
                                            <label >Email</label>
                                            <input className="input" 
                                            type="text" 
                                            placeholder="Enter Email" 
                                            required
                                            value ={email} 
                                            onChange={(e)=>setEmail(e.target.value)}></input>                          
                                        </div>
                                        <div className='form-group col-md-5' style={{ marginTop: '15px' }}>
                                            <label >Mobile No:</label>
                                            <input className="input" 
                                            type="text" 
                                            placeholder="Enter mobile no" 
                                            required
                                            value ={mobile} 
                                            onChange={(e)=>setMobile(e.target.value)}></input>                         
                                        </div>
                                        
                                        <div className="btn-form">
                            
                                        <button type="submit" className="btn btn-primary sub_btn" ><i class="far fa-save"></i>&nbsp;Add</button>
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
export default UpdateAll