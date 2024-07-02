import React from 'react'
import "../checkers.css";

function Switch({ id, checked, labelName, setValue }) {
    return (
        <div className='switch-box'>
            <input className="switch" id={id} type="checkbox" checked={checked} onChange={(e) => { setValue(e.target.checked) }} />
            <label for={id}>{labelName}</label>
        </div>
    )
}

export default Switch