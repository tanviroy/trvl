import React, { useState } from 'react'

import './Banner.css'
import { Button } from "@material-ui/core";
import Search from './Search'
import ArrowForwardIosOutlinedIcon from '@material-ui/icons/ArrowForwardIosOutlined';

function Banner() {

    // keeps track of whether button is clicked
    const [showSearch, setShowSearch] = useState
    (true);

  return (
    <div className='banner' >
      <div className='banner__info'>
      <div className='searchbar'>
        <input type='text' />
        <ArrowForwardIosOutlinedIcon style={{fill: "green"}}/>
        <div className='datesearch'> 
          {showSearch && <Search/>}
        </div>
        <div>
          {/* below line adds date UI  */}
          <Button onClick={() => setShowSearch(!showSearch) }  className='datebutton' variant='outlined' > Book Dates </Button>
        </div>
        </div>
        <Button variant='outlined'>Recommend</Button>
        </div>
    </div>
  )
}



export default Banner
