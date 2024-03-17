import React, {Component} from 'react'
import {CopyToClipboard} from 'react-copy-to-clipboard'
import './ColorBox.css'

class ColorBox extends Component{

    // handleClick = async () => {
    //     let text = document.getElementById('name').innerHTML;
    //     try {
    //         await navigator.clipboard.writeText(text);
    //         window.alert('Content copied to clipboard');
    //     } catch (err) {
    //         console.error('Failed to copy: ', err);
    //         }
    // }
// backgroundColor:this.props.color
    render(){
        const {name, color} = this.props
        return (
            <CopyToClipboard text={name} onCopy={()=>window.alert('Color copied to clipboard')} >
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