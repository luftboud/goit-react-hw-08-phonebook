import React, { useEffect } from 'react';
import axios from 'axios';
import { Route, Routes } from "react-router-dom";
// import { nanoid } from 'nanoid';
// import css from './App.module.css';
// import { getAllContacts } from 'store/Contacts/contactsSlice';
// import { useDispatch } from 'react-redux';
import { ContactsPage } from 'pages/ContactsPage/ContactsPage';
import HeaderLayout from 'components/Layers/HeaderLayout/HeaderLayout';
import { HomePage } from 'pages/HomePage/HomePage';
import { LoginPage } from 'pages/LoginPage/LoginPage';
import { RegisterPage } from 'pages/RegisterPage/RegisterPage';
axios.defaults.baseURL = "https://connections-api.herokuapp.com"


const App = () => {

  return (    

    <Routes>
      <Route path="/" element={<HeaderLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/contacts" element={<ContactsPage />}/>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Route>
    </Routes>
    );
  }

export { App };
