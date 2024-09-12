import React from "react";
import { Link } from "react-router-dom";

const About =()=>{
    return(
        <div>
            <h1>About us</h1>
             <p>medsadokghanouchi@gmail.com</p> 
            <p>26477197</p>
            <button>  <Link to={"/"} >Home</Link></button>
        </div>
    )
}
export default About