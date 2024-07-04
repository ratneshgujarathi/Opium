import React, { useEffect } from 'react'
import "./toast.css"

function Toast({ message, setToast, timeOut= 5000 }) {
    useEffect(()=>{
        setTimeout(()=>{
            setToast()
        }, timeOut)
    }, [])
    return (
        <div className="toast show">
            <div className="img">
                <i class="gg-bell"></i>
            </div>
            <div className="desc">
                {message}
            </div>
        </div>
    )
}

export default Toast