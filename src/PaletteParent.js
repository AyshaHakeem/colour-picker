import React, {Component} from 'react'
import seedColors from './seedColors'
import Palette from './Palette'

class PaletteParent extends Component{
    render(){
        return(
            <Palette palette={{...seedColors[4]}} />
        )
    }
}

export default PaletteParent