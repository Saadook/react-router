import React from "react";
import { Link } from "react-router-dom";

const Contact=()=>{
    return(
        <div>
            <h1>Contact Us</h1>


            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <textarea placeholder="Message"></textarea>
            <button type="submit">Submit</button>
            <button>  <Link to={"/"} >Home</Link></button>
        </div>
    )
}
export default Contact