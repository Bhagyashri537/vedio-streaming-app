import { createSlice } from "@reduxjs/toolkit";


const menuSlice = createSlice({
    name : "app",
    initialState : {
        isMenuOpen : true
    },
    reducers : {
        toggleMenu (state,){
            state.isMenuOpen = !state.isMenuOpen
        }
    }
})
export const toggleAction = menuSlice.actions

export default menuSlice.reducer;