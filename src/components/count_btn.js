import React, { useState } from 'react';

const CountButton = () => {
    const [counter, setCounter] = useState(0);
    const incrementCounter = () => {
        setCounter(counter + 1);
    };
    return (
        <div>
            <button onClick={incrementCounter}>+Count</button>
            <div>{counter}</div>
        </div>
    )
}

export default CountButton;