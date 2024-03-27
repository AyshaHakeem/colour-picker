import React from 'react'
import { withStyles } from '@mui/styles'
import styles from './styles/MiniPaletteStyles'


function MiniPalette(props){
    const {classes, paletteName, colors, emoji, handleClick} = props

    const generateMiniPalette = colors.map(color => (
        <div style={{ backgroundColor: color.color }}>
        </div>
      ));

    return (
        <div className={classes.root} onClick={handleClick}>
            <div className={classes.colors}>
                {generateMiniPalette}
            </div>
            <h5 className={classes.title}>
                {paletteName} <span className={classes.emoji}>{emoji}</span>
            </h5>
        </div>
        
    )
}

export default withStyles(styles)(MiniPalette)