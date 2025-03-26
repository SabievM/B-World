import { createSlice, PayloadAction } from "@reduxjs/toolkit";



const initialState = {
    genre: ""
}


const genreSlice = createSlice({
    name: "genre",
    initialState,
    reducers: {
        changeGenres: (state, action) => {
            state.genre = action.payload
        }
    }
})

export const {changeGenres} = genreSlice.actions
export default genreSlice.reducer