import React, { useState } from 'react';

function Test1() {
    const [inputValue, setInputValue] = useState('');
    const [uppercaseValue, setUppercaseValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleButtonClick = () => {
        setUppercaseValue(inputValue.toUpperCase());
    };

    return (
        <div>
            <input type="text" value={inputValue} onChange={handleInputChange} />
            <button onClick={handleButtonClick}>Convert</button>
            <p>Uppercase: {uppercaseValue}</p>
        </div>
    );
}

export default Test1;
