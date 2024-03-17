import React,{ Component } from 'react'
import ColorBox from './ColorBox'

class Palette extends Component{

    render(){

        const colors = this.props.palette.colors[500].map(x => <ColorBox color={x.hex} name={x.name} />)

        return(
            <div className='Palette'>
                {/* navbar */}
                <div className='Palette-colors'> {/* color boxes */}
                 {colors}
                </div>
            </div>
        )
    }
}

export default Palette