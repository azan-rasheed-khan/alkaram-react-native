import { createSlice } from "@reduxjs/toolkit";

export const GlobalStatesSlice = createSlice({
    name:'GlobalStatesSlice',
    initialState:{
        openState : false,
    },
    reducers:{
        openStateReducer : (state , action) => {
            state.openState = action.payload
        },
    }
})

export const {
    openStateReducer,
} = GlobalStatesSlice.actions

export const GlobalStatesData = (state) => state.parentReducer
export default GlobalStatesSlice.reducer