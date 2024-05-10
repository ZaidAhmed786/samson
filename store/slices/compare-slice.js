 
const { createSlice } = require('@reduxjs/toolkit');
import { HYDRATE } from "next-redux-wrapper";

const compareSlice = createSlice({
    name: "compare",
    initialState: {
        compareItems: []
    },
    reducers: {
        addToCompare(state, action) {
            state.compareItems.push(action.payload); 
        },
        deleteFromCompare(state, action){
            state.compareItems = state.compareItems.filter(item => item.id !== action.payload); 
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(HYDRATE, (state, action) => {
                return {
                    ...state,
                    ...action.payload.compareItems,
                };
            })
    },
});

export const { addToCompare, deleteFromCompare } = compareSlice.actions;
export default compareSlice.reducer;