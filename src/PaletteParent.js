import React, {Component} from 'react'
import seedColors from './seedColors'
import {generatePalette} from './colorHelpers'
import Palette from './Palette'

class PaletteParent extends Component{
    render(){
        console.log(generatePalette(seedColors[4]))
        return(
            <Palette palette={generatePalette(seedColors[4])} />
        )
    }
}

export default PaletteParent