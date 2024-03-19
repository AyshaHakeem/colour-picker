import React, {Component} from 'react'
import {CopyToClipboard} from 'react-copy-to-clipboard'
import './ColorBox.css'

class ColorBox extends Component{

    render(){
        const {name, color, link, copyColour, showMore} = this.props
            return(
                <CopyToClipboard text={color} onCopy={()=>copyColour} >
                <div className='ColorBox' style={{ background: color }}>
                    <div className='copy-container'>
                    <div className='box-content'>
                        <span id='name'>{ name }</span>
                    </div>
                    <button className='copy-button'>Copy</button>
                    </div>
                    {showMore && <span className='see-more'><a href={link}>More</a></span>}
                    
                </div>
                </CopyToClipboard>
            )
        }
}

export default ColorBox