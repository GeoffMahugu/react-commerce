import React, { useState, useEffect } from 'react';

const CountButton = () => {
    const [counter, setCounter] = useState(0);
    const incrementCounter = () => {
        setCounter(counter + 1);
    };
    useEffect(() => {
        if (counter === 10) {
            alert('⭐⭐⭐⭐⭐JACKPOT!!⭐⭐⭐⭐⭐');
            setCounter(0);
        };
    }, [counter]);

    return (
        <div>
            <h4>Count Component</h4>
            <button onClick={incrementCounter}>+Count</button>
            <div>{counter}</div>
        </div>
    )
}

export default CountButton;