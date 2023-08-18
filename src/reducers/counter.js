import {createAction , createReducer} from '@reduxjs/toolkit';


const initialState = {value:0}
//action Generator...
const Increment = createAction('counter/Increment');
const Decrement = createAction('counter/Decrement');
const incrementByAmount = createAction('counter/incrementByAmount');

const counterReducer = createReducer(initialState , )
