import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';

export default function DemoColorBox({ color, removeColor }){
    return(
        <div style={{ backgroundColor: color, width: '150px', height:'150px', display:'inline-block' }}>
            <DeleteIcon onClick={removeColor} />
        </div>
    )
}