import { createAsyncThunk, createSlice }  from "@reduxjs/toolkit";
import axios from "axios";

const authInitialState = {
    user: {},
    token: '',
    error: null,
    isLoading: false //TODO use this somewhere idk
};

const setToken = (token) => {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
}
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
        setToken(response.data.token)
        return response.data
    } catch (e) {
      return e
    }
})
export const loggingIn = createAsyncThunk('auth/login', async (body) => {
    try {
        console.log(body);
        const response = await axios.post('/users/login', body)
        console.log(response.data);
        setToken(response.data.token)
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
            //
            .addCase(loggingIn.pending, handlePending)
            .addCase(loggingIn.fulfilled, (state, { payload }) => {
                state.user = payload.user;
                state.token = payload.token;
                console.log(payload.token);
            })
            .addCase(loggingIn.rejected, handleRejected)
            
    },
})

export const authReducer = authSlice.reducer;

