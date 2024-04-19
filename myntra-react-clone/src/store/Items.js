import {createSlice} from "@reduxjs/toolkit"

export const itemSlice = createSlice({
    name : "items",
    initialState :[],
    reducers : {
        addInitialItems : (store, action) => {
           console.log(action.payload)
           let updatedStore = store;
           updatedStore = [...action.payload]
           return updatedStore;
        }
    }
})
export const itemsAction = itemSlice.actions;