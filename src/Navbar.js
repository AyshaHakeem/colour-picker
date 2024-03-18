import React, { Component } from "react";
import Slider from "rc-slider";
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import "rc-slider/assets/index.css";
import "./Navbar.css";

class Navbar extends Component {



  render() {
    const { level, changeLevel, colourFormat, changeFormat } = this.props;
    return (
      <header className='Navbar'>
        
        <div className='logo'>
          <a href='#'>reactcolorpicker</a>
        </div>

        <div className='slider-container'>
          <span>Level: {level}</span>
          <div className='slider'>
                <Slider 
                    defaultValue = {level}
                    min = {100}
                    max  = {900}
                    step = {100}   // differnce between values on the slider
                    onChangeComplete={changeLevel}
                />
          </div>
        </div>

        <div className='select-container'>
            <Select
            onChange={changeFormat}
            value = {colourFormat}
            >
                <MenuItem value='hex'>Hex</MenuItem>
                <MenuItem value='rgb'>RGB</MenuItem>
                <MenuItem value='rgba'>RGBA</MenuItem>
            </Select>
        </div>

      </header>
    );
  }
}
export default Navbar;