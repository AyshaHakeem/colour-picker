import React,{ Component } from 'react'
import ColorBox from './ColorBox'

class Palette extends Component{

    render(){

        const colors = this.props.palette.colors.map(x => <ColorBox color={x.color} name={x.name} />)

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