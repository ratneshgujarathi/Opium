import React from 'react'
import "../checkers.css"

function CheckBox({ id, labelName, checked, setValue }) {
    return (
        <div className='checkbox-container'>
            <input id={id} type="checkbox" checked={checked} onChange={(e)=>{setValue(e.target.checked)}}/>
            <label htmlFor={id}>{labelName}</label>
        </div>
    )
}

export default CheckBox