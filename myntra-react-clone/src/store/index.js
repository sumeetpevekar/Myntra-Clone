import {configureStore} from "@reduxjs/toolkit"
import { itemSlice } from "./Items"
import { bagSlice } from "./bag"
import { fetchSlice } from "./fetchSlice"
import { wishListSlice } from "./WishList"

export const myntraStore = configureStore({
    reducer : {
        items : itemSlice.reducer,
        bag : bagSlice.reducer,
        fetchStatus : fetchSlice.reducer,
        wishlist : wishListSlice.reducer,
    }
})
