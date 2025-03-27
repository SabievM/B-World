import { configureStore } from "@reduxjs/toolkit"
import favoriteReducer from './favoritesSlice'
import genreSlice from './genreSlice'
import searchSlice from './searchSlice'

export const store = configureStore({
    reducer: {
        favorites: favoriteReducer,
        genres: genreSlice,
        searchReducer: searchSlice
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;
