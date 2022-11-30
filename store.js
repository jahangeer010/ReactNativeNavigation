import { configureStore} from "@reduxjs/toolkit";
import navSlice from "./navSlice";


export const Store=configureStore({
    reducer:{
        nav:navSlice,
    }

})