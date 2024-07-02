import React from 'react';
import "../checkers.css"

function RadioButton() {
    return (
        <div className='radio'>
            <input id="r1" type="radio" name="radio" value="1" />
            <label for="r1">Radio</label>
        </div>
    )
}

export default RadioButton