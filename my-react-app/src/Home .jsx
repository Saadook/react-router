import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Home = ()=>{
    const [name,setName]=useState("")
    var navigate = useNavigate() 
    return (
        <div>
          <button>  <Link to={"/Profile"} >Profile</Link></button>
         <button>  <Link to={"/About"} >About</Link> </button> 
         <button>  <Link to={"/Contact"} >Contact</Link> </button> 
         <input onChange={(e)=>setName(e.target.value)} />
         <button onClick={()=>{
            navigate(`/Profile/${name}`)  
         }} >submit</button>

            <h1>Welcome To our App !</h1>
        </div>
    )
}
export default Home;