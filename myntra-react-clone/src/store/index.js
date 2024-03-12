import {configureStore, createSlice} from "@reduxjs/toolkit"
import itemsSlice from "./itemsSlice";
import fetchStatusSlice from "./FetchStatusSlice";
import BagSlice from "./BagSlice";

const myntraStore = configureStore({reducer: {
    items: itemsSlice.reducer,
    fetchStatus: fetchStatusSlice.reducer,
    bag: BagSlice.reducer,
}})
export default myntraStore;