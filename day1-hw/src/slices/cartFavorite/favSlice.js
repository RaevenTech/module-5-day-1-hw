import { createSlice } from "@reduxjs/toolkit"

const favSlice = createSlice({
    name: "favorite",
    initialState: {
        content: []
    }
    reducers:{
        addToFav: () => {

        },
    },
})
export default favSlice.reducer