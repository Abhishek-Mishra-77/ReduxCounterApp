import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { counterActions } from "../store/ReduxStore";
import './Counter.css';


const Counter = () => {

    const counter = useSelector(state => state.counter.counter);
    const showCounter = useSelector(state => state.counter.showCounter)
    const dispatch = useDispatch();

    const incrementby1 = () => {
        dispatch(counterActions.increment())
    }

    const decrementby1 = () => {
        dispatch(counterActions.decrement())
    }

    const incrementby5 = () => {
        dispatch(counterActions.incrementBy5(5))
    }

    const decrementby5 = () => {
        dispatch(counterActions.decrementby5(5))
    }

    const toggleCounterHandler = () => {
        dispatch(counterActions.showCounter('toggle'))
    };

    return (
        <main className='counter'>
            <h1>Redux Counter</h1>
            {showCounter && <div className='value'>{counter}</div>}
            <div>
                <button onClick={incrementby1}>INCREMENTBY1</button>
                <button onClick={decrementby1}>DECREMENTBY1</button>

            </div>
            <div>
                <button onClick={incrementby5}>INCREMENTBY5</button>
                <button onClick={decrementby5}>DECREMENTBY5</button>

            </div>
            <button onClick={toggleCounterHandler}>Toggle Counter</button>
        </main>
    );
};

export default Counter;
