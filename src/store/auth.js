import { createSlice } from "@reduxjs/toolkit"


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


export const authActions = authSlice.actions;


export default authSlice.reducer;
