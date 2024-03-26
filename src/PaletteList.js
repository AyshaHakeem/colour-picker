import React, {Component} from 'react'
import seedColors from './seedColors';
import {Link} from 'react-router-dom'
import { withStyles } from "@material-ui/styles";
import MiniPalette from './MiniPalette'

const styles = {
    root: {
      backgroundColor: "#8686d3",
      height: "100%",
      display: "flex",
      alignItems: "flex-start",
      justifyContent: "center",
      'padding-bottom': "20px"
    },
    container: {
      width: "50%",
      display: "flex",
      alignItems: "flex-start",
      flexDirection: "column",
      flexWrap: "wrap"
    },
    nav: {
      display: "flex",
      width: "100%",
      justifyContent: "space-between",
      color: "white"
    },
    palettes: {
      boxSizing: "border-box",
      width: "100%",
      display: "grid",
      gridTemplateColumns: "repeat(3, 30%)",
      gridGap: "5%"
    }
  };

class PaletteList extends Component{

    render(){

        const { palettes, classes } = this.props ;
        let paletteList = palettes.map( palette => { 
            // return( <li> <Link to={`/palette/${palette.id}`}>{ palette.paletteName }</Link> </li> )
            return <MiniPalette {...palette} styles={styles} />
        })
        
        return (
            <div className={classes.root}>
                <div className={classes.container}>
                    <nav className={classes.nav}>
                        <h1>React Colors</h1>
                    </nav>
                    <div className={classes.palettes}>
                        {paletteList}
                    </div>
                </div>
            </div>
                
                
          
        )
    }
}

export default withStyles(styles)(PaletteList);