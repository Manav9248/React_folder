import { configureStore } from "@reduxjs/toolkit";
import userReducer from './CounterSlice'

export const store = configureStore({
    reducer:{
        users : userReducer,
    },
})

//steps:

// create store
// wrap app component under Provider 
// create slice 
// register reducer in store 