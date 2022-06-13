import React from 'react'
import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <div style={{display:'flex',gap:'30px',fontSize:'30px',border:'1px solid black'}}>
        <Link to="/">Home</Link>
        <Link to="/todoapp">TodoApp</Link>
        <Link to="/counterapp" >CounterApp</Link>
    </div> 
  )
}

export default Navbar