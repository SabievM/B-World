import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { BookResponseType } from "../requests/getBooks";
import { GoogleBookApiResponceType } from "../requests/getBookGoogleBookApi";

type FavoritesState = {
    favorites: Array<BookResponseType | GoogleBookApiResponceType>
}

const loadFavorites = (): BookResponseType[] => {
    const stored = localStorage.getItem("favorites")
    return stored ? JSON.parse(stored) : []
}

const initialState: FavoritesState = {
    favorites: loadFavorites(),
}

const favoritesSlice = createSlice({
    name: "favorites",
    initialState,
    reducers: {
        toggleFavorite: (state, action: PayloadAction<BookResponseType>) => {
            const book = action.payload
            const isFavorite = state.favorites.some((fav) => fav.id === book.id)

            if (isFavorite) {
                state.favorites = state.favorites.filter((fav) => fav.id !== book.id)
            } else {
                state.favorites.push(book)
            }

            localStorage.setItem("favorites", JSON.stringify(state.favorites))
        },
        toggleFavoriteGoogleBooks: (state, action: PayloadAction<GoogleBookApiResponceType>) => {
            const book = action.payload
            const isFavorite = state.favorites.some((fav) => fav.id === book.id)

            if (isFavorite) {
                state.favorites = state.favorites.filter((fav) => fav.id !== book.id)
            } else {
                state.favorites.push(book)
            }

            localStorage.setItem("favorites", JSON.stringify(state.favorites))
        },
    },
})

export const { toggleFavorite, toggleFavoriteGoogleBooks } = favoritesSlice.actions;

export default favoritesSlice.reducer