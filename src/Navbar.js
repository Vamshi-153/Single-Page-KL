import React from 'react'
import {Link} from 'react-router-dom';
const Navbar = () => {
  return (
    <div style={{display:'flex'}}>
        <ul style={{display:'flex', marginLeft: '20px'}}>
          <Link to="/" > <li>Home</li> </Link> 
          <Link to="/dashboard" style={{ marginLeft: '20px'}}> <li>Dashboard</li> </Link> 
          <Link to="/a" style={{ marginLeft: '20px'}}> <li>About</li> </Link> 
        </ul>
    </div>
  )
}

export default Navbar;