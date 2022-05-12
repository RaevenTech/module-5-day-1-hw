import { createSlice } from "@reduxjs/toolkit";

const favSlice = createSlice({
    name: "favorite",
    initialState: {
        content: [],
    },
    reducers: {
        addToFav: (state, action) => {
            return {
                content: [...state.content, action.payload],
            };
        },
    },
    removeFav: (state, action) => {
        return {
            ...state,
            content: state.content.filter(
                (companyName) => companyName !== action.payload
            ),
        };
    },
});
export default favSlice.reducer;
export const { addToFav, removeFav } = favSlice.actions;
