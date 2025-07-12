import React from 'react'
import './Navbar.css'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import FolderSpecialOutlinedIcon from '@mui/icons-material/FolderSpecialOutlined';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import PropTypes from 'prop-types';

function Navbar({scrollToElement}) {
  return (
    <div className='myNavbar'>
          <div onClick={()=>{scrollToElement('.myHome')}}><HomeOutlinedIcon fontSize='medium' /></div>
          <div onClick={()=>{scrollToElement('.myAbout')}}><PersonOutlineOutlinedIcon fontSize='medium' /></div>
          <div onClick={()=>{scrollToElement('.myProjects')}}><FolderSpecialOutlinedIcon fontSize='medium' /></div>
          <div onClick={()=>{scrollToElement('.mySkills')}}><SchoolOutlinedIcon fontSize='medium' /></div>
          <div onClick={()=>{scrollToElement('.myContact')}}><ChatOutlinedIcon fontSize='medium' /></div>
    </div>
  )
}

Navbar.propTypes = {
  scrollToElement: PropTypes.func.isRequired, // or PropTypes.any / PropTypes.element etc.
};

export default Navbar