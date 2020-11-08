import React from 'react'
import '../styles/Header.css'
import LanguageIcon from '@material-ui/icons/Language';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import { Avatar } from '@material-ui/core';


function Header() {

  return (
    <div className='header'>
      <img
        className = "header__icon"
        src = "https://i.pinimg.com/originals/54/ac/a8/54aca8a97eedbbcec06ec55a4f6bfe78.png"
        alt = ""
      />

      <div
        className='header__right' >
          <p>Book your next trip</p>
          <LanguageIcon/>
          <ArrowDropDownIcon/>
          <Avatar/>

      </div>
      
    </div>
  )
}

export default Header
