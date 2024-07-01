import React from 'react';
import "./button.css"

function Button({ className, buttonText, onClick=()=>{}}) {
    return (
        <button className={className} onClick={onClick}>{buttonText}</button>
    )
}

export default Button