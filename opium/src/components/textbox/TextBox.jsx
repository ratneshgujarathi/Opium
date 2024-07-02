import React from 'react'
import "./textbox.css"

function TextBox({ name, label, placeholder, id, value, type, setValue }) {
    const textHandler = (event) => {
        setValue(event.target.value);
    }
    return (
        <div className='textBox'>
            <label htmlFor={name}>{label}</label>
            <input
                className="rounded"
                id={id} name={name}
                placeholder={placeholder}
                type={type}
                value={value}
                autoComplete="off"
                onChange={(e) => textHandler(e)}
            />
        </div>
    )
}

export default TextBox