import { useState, useEffect } from 'react';

function useCounter(initialCount) {
    // Hook that creates a peice of state that's gonna be a number
    const [count, setCount] = useState(initialCount);

    // Logs out that value every time it changes
    useEffect (() => {
        console.log(count);
    }, [count]);

    // Provides a way to change that state
    const increment = () => {
        setCount(count + 1);
    };

    return {
        count,
        increment
    };
}

export default useCounter;