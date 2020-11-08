import React from 'react'
import '../styles/Search.css'
// modules builtinto react
import 'react-date-range/dist/styles.css'; 
import 'react-date-range/dist/theme/default.css';
import {DateRangePicker} from "react-date-range";
import { useState } from 'react';


function Search() {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const selectionrange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };

  function select(ranges) {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
}


  return (
    <div className ='search'>
      <DateRangePicker ranges={[selectionrange]} onChange={select} />      
    </div>
  )
}

export default Search
