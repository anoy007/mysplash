import { configureStore } from "@reduxjs/toolkit";
import PictureSlice from "./Pictures";
const Store = configureStore({
    reducer:{
        picture:PictureSlice.reducer
    }
})


export default Store;