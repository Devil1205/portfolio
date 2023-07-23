import React from 'react'
import './Navbar.css'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import FolderSpecialOutlinedIcon from '@mui/icons-material/FolderSpecialOutlined';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';

function Navbar({scrollToElement}) {
  return (
    <div className='myNavbar'>
          <div onClick={()=>{scrollToElement('.myHome')}}><HomeOutlinedIcon fontSize='medium' /></div>
          <div onClick={()=>{scrollToElement('.myAbout')}}><PersonOutlineOutlinedIcon fontSize='medium' /></div>
          <div><SchoolOutlinedIcon fontSize='medium' /></div>
          <div onClick={()=>{scrollToElement('.myProjects')}}><FolderSpecialOutlinedIcon fontSize='medium' /></div>
          <div><ChatOutlinedIcon fontSize='medium' /></div>
    </div>
  )
}

export default Navbar