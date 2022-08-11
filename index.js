// import { createStore } from 'redux';

// const initialState = {
//     counter: 0,
//     isShow: true
// }

// const storeReducer = (state = initialState, action) => {
//     if(action.type === 'increment') {
//         return {
//             counter: state.counter + 1,
//             isShow: state.isShow
//         }
//     }
//     if(action.type === 'decrement') {
//         return {
//             counter: state.counter - 1,
//             isShow: state.isShow
//         }
//     }
//     if(action.type === 'add') {
//         return {
//             counter: state.counter + action.amount,
//             isShow: state.isShow
//         }
//     }
//     if(action.type === 'toggle') {
//         return {
//             counter: state.counter,
//             isShow: !state.isShow
//         }
//     }
//     return state;
// }

// const store = createStore(storeReducer);

// export default store;


import {createSlice, configureStore} from '@reduxjs/toolkit';

const initialState = {
    counter: 0,
    showCounter: true
}

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment(state) {
            state.counter++;
        },
        decrement(state) {
            state.counter--;
        },
        add(state, action) {
            state.counter = state.counter + action.payload;
        },
        toggleCounter(state) {
            state.showCounter = !state.showCounter;
        }
    }
});

const store = configureStore({
    reducer: counterSlice.reducer
});

export const counterActions = counterSlice.actions;

export default store;