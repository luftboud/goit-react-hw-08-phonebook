import React from 'react';
import axios from 'axios';
import { Route,    Routes } from "react-router-dom";
import { ContactsPage } from 'pages/ContactsPage/ContactsPage';
import HeaderLayout from 'components/Layers/HeaderLayout/HeaderLayout';
import { HomePage } from 'pages/HomePage/HomePage';
import { LoginPage } from 'pages/LoginPage/LoginPage';
import { RegisterPage } from 'pages/RegisterPage/RegisterPage';
import { PrivateRoute } from 'components/PrivateRoute';
import { RestrictedRoute } from 'components/RestrictedRoute';
axios.defaults.baseURL = "https://connections-api.herokuapp.com"


const App = () => {
 
  return (    

    <Routes>
      <Route path="/" element={<HeaderLayout />}>
        <Route index element={<HomePage />} />
        <Route path='/contacts' element={
            <PrivateRoute redirectTo="/login" element={<ContactsPage />} />
          } />
        <Route path="/login" element={<RestrictedRoute redirectTo="/contacts" element={<LoginPage />}/>} />
        <Route path="/register" element={<RestrictedRoute redirectTo="/contacts" element={<RegisterPage />}/>} />
      </Route>
    </Routes>
    );
  }

export { App };
