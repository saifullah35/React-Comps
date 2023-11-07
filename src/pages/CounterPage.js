import { useState, useEffect } from "react";
import Button from '../components/Button';

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

function CounterPage({ initialCount }) {
    const { count, increment } = useCounter(initialCount);

    return (
        <div>
            <h1>Count is {count}</h1>
            <Button onClick={increment}>
                Increment
            </Button>
        </div>
    );
}

export default CounterPage;