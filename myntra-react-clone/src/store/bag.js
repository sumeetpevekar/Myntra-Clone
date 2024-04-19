import { createSlice } from "@reduxjs/toolkit";

export const bagSlice = createSlice({
    name : "bag",
    initialState : [],
    reducers : {
        addItems : (store, action) => {
            let bagStore = store;
            bagStore = [...bagStore , action.payload]
            console.log(action.payload)
            return bagStore;
        },
        deleteItems : (store, action) => {
            console.log(action.payload)
            return store.filter(itemId => itemId !== action.payload);
        }
    }
})
export const bagItemsAction  = bagSlice.actions;