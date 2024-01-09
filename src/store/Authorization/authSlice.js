import { createAsyncThunk, createSlice }  from "@reduxjs/toolkit";
import axios from "axios";

const authInitialState = {
    user: {},
    token: '',
    error: null,
    isLoading: false
};

const handlePending = (state, { payload }) => {
    state.isLoading = true
    state.error = null
}
const handleRejected = (state, { payload }) => {
    state.isLoading = false
    state.error = payload
     console.log(payload);
}


export const registration = createAsyncThunk('auth/register', async (body) => {
    try {
        console.log(body);
        const response = await axios.post('/users/signup', body)
        console.log(response.data);
        return response.data
    } catch (e) {
      return e
    }
})
export const logingIn = createAsyncThunk('auth/login', async (body) => {
    try {
        console.log(body);
        const response = await axios.post('/users/signup', body)
        console.log(response.data);
        return response.data
    } catch (e) {
      return e
    }
})

const authSlice = createSlice({
    name: 'auth',
    initialState: authInitialState,
    extraReducers: (builder) => {
        builder
            .addCase(registration.pending, handlePending)
            .addCase(registration.fulfilled, (state, { payload }) => {
                state.user = payload.user;
                state.token = payload.token;
            })
            .addCase(registration.rejected, handleRejected)
            
    },
})

export const authReducer = authSlice.reducer;