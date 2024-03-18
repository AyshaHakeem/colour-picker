import React, {Component} from 'react'
import {CopyToClipboard} from 'react-copy-to-clipboard'
import './ColorBox.css'

class ColorBox extends Component{


    render(){
        const {name, color, copyColour} = this.props
        return (
            <CopyToClipboard text={color} onCopy={()=>copyColour} >
            <div className='ColorBox' style={{ background: color }}>
                <div className='copy-container'>
                <div className='box-content'>
                    <span id='name'>{ name }</span>
                </div>
                <button className='copy-button'>Copy</button>
                </div>
                <span className='see-more'>More</span>
            </div>
            </CopyToClipboard>
          );
    }
}

export default ColorBox