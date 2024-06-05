import React,{ useState } from 'react';

const Counter = () => {

    console.log("counter re-rendering");

var [count, setCount] = useState(100)


    const incrementHandler = () => {
        setCount(count+=1)
        console.log(count);
    }
    const decrementHandler = () => {
        setCount(count-=1)
        console.log(count);
    }

    return <div>
        <h2>{count}</h2>+
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={decrementHandler}>Decrement</button>
    </div>
}

export default Counter