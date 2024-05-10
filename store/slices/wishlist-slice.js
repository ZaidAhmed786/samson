 
const { createSlice } = require('@reduxjs/toolkit');
import { HYDRATE } from "next-redux-wrapper";

const wishlistSlice = createSlice({
    name: "wishlist",
    initialState: {
        wishlistItems: []
    },
    reducers: {
        addToWishlist(state, action) {
            const isInWishlist = state.wishlistItems.findIndex(item => item.id === action.payload.id);
            if(isInWishlist > -1){ 
            } else {
                state.wishlistItems.push(action.payload); 
            }
            
        },
        deleteFromWishlist(state, action){
            state.wishlistItems = state.wishlistItems.filter(item => item.id !== action.payload); 
        },
        deleteAllFromWishlist(state){
            state.wishlistItems = []
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(HYDRATE, (state, action) => {
                return {
                    ...state,
                    ...action.payload.wishlistItems,
                };
            })
    },
});

export const { addToWishlist, deleteFromWishlist, deleteAllFromWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;