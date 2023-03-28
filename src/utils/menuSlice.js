import { createSlice } from "@reduxjs/toolkit";


const menuSlice = createSlice({
    name : "app",
    initialState : {
        isMenuOpen : true
    },
    reducers : {
        toggleMenu (state,){
            state.isMenuOpen = !state.isMenuOpen
        },
        closeMenu(state){
            state.isMenuOpen = false
        }
    }
})
export const toggleAction = menuSlice.actions

export default menuSlice.reducer;