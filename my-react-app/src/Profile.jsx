import React from "react";
import {Route, Routes, useParams,useNavigate}from 'react-router-dom';
import { Link } from "react-router-dom";


const profile = ()=>{
    var {username}=useParams();


    
    console.log(username);
    
    return(
        <div>

            <h1>User Profile</h1>
            <p>username:{username}</p>
            <button>  <Link to={"/"} >Home</Link></button>
        </div>
    )
}
export default profile