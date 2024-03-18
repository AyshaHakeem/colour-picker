import React,{ Component } from 'react'
import ColorBox from './ColorBox'
import Slider from 'rc-slider'
import 'rc-slider/assets/index.css'
import './Palette.css'
import Navbar from './Navbar'

class Palette extends Component{

    constructor(props){
        super(props)
        this.state = {
            level : 500,
            colourFormat : 'hex'
            // format : 'hex'
        }
        this.changeLevel = this.changeLevel.bind(this)
        this.changeFormat = this.changeFormat.bind(this)
    }

    changeLevel(level){
       return this.setState({ level })
    }
    changeFormat = (event) => {
        return this.setState({colourFormat : event.target.value})
      };

    render(){
        const {level, colourFormat} = this.state
        const {palette} = this.props
        const boxes = palette.colors[level].map(x => <ColorBox color={x[colourFormat]} name={x.name} />)
        
        return(
            <div className='Palette'>
                {/* navbar */}
                <Navbar
                level = {level}
                colourFormat = {colourFormat}
                changeLevel = {this.changeLevel}
                changeFormat = {this.changeFormat}
                />
                
                <div className='Palette-colors'> {/* color boxes */}
                 {boxes}
                </div>
            </div>
        )
    }
}

export default Palette