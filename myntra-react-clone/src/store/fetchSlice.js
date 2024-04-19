import {createSlice} from "@reduxjs/toolkit"

export const fetchSlice = createSlice({
    name : "fetchStatus",
    initialState :{
        fetchDone : false,
        currentlyFetching : false,
    },
    reducers : {
        markFetchDone : (store, action) => {
            return void(store.fetchDone = true);
        },
        markFetchingStarted : (store, action) => {
            return void(store.currentlyFetching = true);
        },
        markFetchingFinished : (store, action) => {
            return void(store.currentlyFetching = false)
        }
    }
})

export const fetchAction = fetchSlice.actions;