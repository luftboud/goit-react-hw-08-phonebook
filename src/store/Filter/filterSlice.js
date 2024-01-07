import { createSlice }  from "@reduxjs/toolkit";

const filterInitialState = '';
const filterSlice = createSlice({
    name: 'filter',
    initialState: filterInitialState,
    reducers: {
        setFilterAction(state, action) {
            return state = action.payload;
        },
    }
})

export const { setFilterAction } = filterSlice.actions;

export const filterReducer = filterSlice.reducer;