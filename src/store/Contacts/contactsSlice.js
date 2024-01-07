import { createAsyncThunk, createSlice }  from "@reduxjs/toolkit";
import axios from "axios";

const contactsInitialState = {
    items: [],
    isLoading: false,
    error: null 
};

const handlePending = (state, { payload }) => {
    state.isLoading = true
    state.error = null
}
const handleRejected = (state, { payload }) => {
    state.isLoading = false
    state.error = payload
}

export const getAllContacts = createAsyncThunk('contacts/fetchAll', async () => {
    try {
        const response = await axios.get('/contacts')
        // console.log(response.data);
        return response.data
    } catch (e) {
      return e
    }
})
export const setContact = createAsyncThunk('contacts/addContact', async (cont) => {
    try {
        const response =  await axios.post('/contacts', cont)
        // console.log(response.data);
        return response.data
    } catch (e) {
      return e
    }
})
export const deleteContact = createAsyncThunk('contacts/deleteContact', async (id) => {
    try {
        const response =  await axios.delete('/contacts/' + id)
        // console.log(response.data);
        return response.data
    } catch (e) {
      return e
    }
})

const contactsSlice = createSlice({
    name: 'contacts',
    initialState: contactsInitialState,
    extraReducers: (builder) => {
        builder
            .addCase(getAllContacts.pending, handlePending)
            .addCase(getAllContacts.fulfilled, (state, { payload }) => {
                state.items = payload;
                // console.log(state.items);
                state.isLoading = false
            })
            .addCase(getAllContacts.rejected, handleRejected)
            //
            .addCase(setContact.pending, handlePending)
            .addCase(setContact.fulfilled, (state, { payload }) => {
                // console.log(payload);
                // console.log(state.items);
                state.items = [...state.items, payload];
                state.isLoading = false
            })
            .addCase(setContact.rejected, handleRejected)
            //
            .addCase(deleteContact.pending, handlePending)
            .addCase(deleteContact.fulfilled, (state, { payload }) => {
                // console.log(payload);
                state.items = state.items.filter(contact => contact.id !== payload.id)
                state.isLoading = false
            })
            .addCase(deleteContact.rejected, handleRejected)
    },
})

export const contactsReducer = contactsSlice.reducer;