import React from 'react';
import "./button.css"

function Button({ className, buttonText, loader = false, onClick = () => { } }) {
    return (
        <button className={className} onClick={onClick} disabled={loader}>
            {
                loader ?
                    <div className="spinner">
                        <div className="bounce1"></div>
                        <div className="bounce2"></div>
                        <div className="bounce3"></div>
                    </div> :
                    buttonText
            }
        </button>
    )
}

export default Button