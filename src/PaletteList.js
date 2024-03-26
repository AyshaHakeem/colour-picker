import React, {Component} from 'react'
import seedColors from './seedColors';
import {Link, useNavigate } from 'react-router-dom'
import styles from './styles/PaletteListStyles'
import { withStyles } from "@material-ui/styles";
import MiniPalette from './MiniPalette'

const PaletteList = ({ palettes, classes }) => {
    const navigate = useNavigate();
  
    const goToPalette=(id)=>{
      return navigate(`/palette/${id}`);
    };

    const paletteList = palettes.map( palette => { 
        return <MiniPalette {...palette} handleClick={()=>goToPalette(`${palette.id}`)} />
    })
        
    return (
      <div className={classes.root}>
          <div className={classes.container}>
              <nav className={classes.nav}>
                  <h1>Pick Your Palette</h1>
                  <Link to='/palette/new'><b>Create Palette</b></Link>
              </nav>
              <div className={classes.palettes}>
                  {paletteList}
              </div>
          </div>
      </div>
    )
}
  

export default withStyles(styles)(PaletteList);