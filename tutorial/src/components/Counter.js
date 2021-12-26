import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from '../features/counter/counterSlice';

const Counter = () => {
    const [inputValue, setInputValue] = useState("")
    const counter = useSelector((state) => state.counter.value)
    const dispatch = useDispatch();

    return (
        <div>
            <h1>Counter state</h1>
            <h2>counter - {counter} </h2>
            <input type="text" value={inputValue} onChange={(event) => setInputValue(event.target.value) } />
            <button onClick={() => dispatch(increment(+inputValue || 1))}>+</button>
            <button onClick={() => dispatch(decrement(+inputValue || 1))}>-</button>
        </div>
    );
};

export default Counter;