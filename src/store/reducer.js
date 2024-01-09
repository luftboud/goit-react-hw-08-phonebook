import { combineReducers } from "@reduxjs/toolkit";
import { contactsReducer } from "./Contacts/contactsSlice";
import { filterReducer } from "./Filter/filterSlice";
import { authReducer } from "./Authorization/authSlice";



export const reducer = combineReducers({
    contacts: contactsReducer,
    filter: filterReducer,
    auth: authReducer
})