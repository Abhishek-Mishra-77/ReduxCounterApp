import { createSlice, configureStore } from '@reduxjs/toolkit'

const initialState = { counter: 0, showCounter: true }


const counterSlice = createSlice({
    name: 'counter',
    initialState: initialState,
    reducers: {
        increment(state) {
            state.counter++;
        },
        decrement(state) {
            state.counter--;
        },
        incrementBy5(state, action) {
            state.counter = state.counter + action.payload
        },
        decrementby5(state, action) {
            state.counter = state.counter - action.payload
        },
        showCounter(state) {
            state.showCounter = !state.showCounter;
        }
    }
})


const initialAuthState = { isAuthentication: false }


const authSlice = createSlice({
    name: 'Authentication',
    initialState: initialAuthState,
    reducers: {
        login(state) {
            state.isAuthentication = true
        },
        logout(state) {
            state.isAuthentication = false
        }
    }
})


const store = configureStore({
    reducer: { counter: counterSlice.reducer, auth: authSlice.reducer },
})

export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;


export default store;