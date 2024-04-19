import { createSlice } from "@reduxjs/toolkit";

export const wishListSlice = createSlice({
    name : "wishlist",
    initialState : [],
    reducers : {
        addItems : (store, action) => {
            let updatedStore = store;
            updatedStore  = [...updatedStore, action.payload]
            console.log(updatedStore)
            return updatedStore;
        },
        removeItems : (store, action) => {
            let updatedStore = store;
            updatedStore  = updatedStore.filter(itemId => itemId !== action.payload)
            console.log(action.payload)
            console.log(updatedStore)
            return updatedStore;
        },
    }
})

export const wishListAction = wishListSlice.actions;