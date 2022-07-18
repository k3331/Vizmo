import React from 'react'
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import Avatar from '@mui/material/Avatar';
import './Navbar.css'

function Navbar() {
  return (
    <div className ='NavBar'>
      
      <div style={{fontSize:'1.4em',fontWeight:"bold",marginLeft:'2rem'}}>
        Employees
      </div>

      <div style ={{ width:"10vw",display:'flex' ,justifyContent:'space-evenly',alignItems:'center'}}>
        <ChatIcon style ={{color:'blue',}}/>
        <NotificationsActiveIcon style ={{color:'blue'}}/>
        <Avatar/>
      </div>

    </div>
  )
}

export default Navbar