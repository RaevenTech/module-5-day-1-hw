import { configureStore } from "@reduxjs/toolkit";
import favReducer from "";

export default configureStore({
    reducer: {
        favorite: favReducer,
    },
});
