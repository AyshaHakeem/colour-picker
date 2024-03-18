import React, {Component} from 'react'
import seedColors from './seedColors';
import {Link} from 'react-router-dom'

class PaletteList extends Component{

    render(){

        const { palettes } = this.props ;
        let paletteList = palettes.map( palette => { 
            return( <li> <Link to={`/palette/${palette.id}`}>{ palette.paletteName }</Link> </li> )
        })
        
        return (
            <ul>
                {paletteList}
            </ul>
        )
    }
}

export default PaletteList