import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { Decrement, Increment, incrementByAmount } from '../reducers/counter';


export default function Counters() {
    const count = useSelector(state => state.counter.value);
    const dispatch = useDispatch();
    const amount = 2;
    return (
        <div>
            <button onClick={()=>dispatch(Increment())}>Increment</button>
            <button onClick={()=>dispatch(Decrement())}>Decrement</button>
            <button onClick={()=>dispatch(incrementByAmount(amount))}>IncrementBy {amount}</button>
            <br></br>
            {count}
        </div> 
    )
}
