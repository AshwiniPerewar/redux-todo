import React from 'react'
import { useSelector } from 'react-redux'
import { Link, useNavigate } from "react-router-dom"

const Navbar = () => {
  const {isAuth}=useSelector((state)=>state.auth);
  const token=localStorage.getItem("token");
const navigate=useNavigate();

if(!token)
navigate("/login")



  return (
    <div style={{display:'flex',gap:'30px',fontSize:'30px',border:'1px solid black'}}>
        <Link to="/">Home</Link>
        <Link to="/todoapp">TodoApp</Link>
        <Link to="/counterapp" >CounterApp</Link>
        <Link to="/login" >{isAuth?"Log out":"Log In"}</Link>
    </div> 
  )
}

export default Navbar