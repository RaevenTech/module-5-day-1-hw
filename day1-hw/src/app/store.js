import { configureStore } from "@reduxjs/toolkit";
import favReducer from "../slices/cartFavorite/favSlice";

export default configureStore({
    reducer: {
        favorite: favReducer,
    },
});
