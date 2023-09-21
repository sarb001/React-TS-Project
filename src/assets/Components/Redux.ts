
// Redux Toolkit with Counter how to use in TS - 

// Create Slice 
// use Reducers  inside Slice 
// create reducers and inside actions
// export it all
// dispatch all actions in other Component // change state with useSelector and working Completed 
 

import { configureStore , createSlice,PayloadAction } from "@reduxjs/toolkit";

export type StateType = {
    counter : number;
}

const initialState:StateType = {
    counter : 0,
}


const mainSlice = createSlice({
    name : 'counter',
    initialState,
    reducers : {
        increment : (state) => {
            state.counter += 1;
        },
        decrement : (state) => {
            state.counter -= 1;
        },
        incrementByValue : (state , action : PayloadAction<number>) => {
            state.counter += action.payload;
        }
    }
})

export const { increment , decrement , incrementByValue } = mainSlice.actions;         // actions exported 

export const store = configureStore({ reducer : mainSlice.reducer })