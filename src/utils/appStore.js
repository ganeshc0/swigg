import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";


const appStore = configureStore({
    reducer:{
        menu : cartSlice
    }
});


export default appStore;