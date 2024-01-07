import React, { useEffect } from 'react';
import axios from 'axios';
// import { nanoid } from 'nanoid';
import { ContactForm } from '../ContactForm/ContactForm';
import { Filter } from '../Filter/Filter';
import { ContactList } from '../ContactList/ContactList';
import css from './App.module.css';
import { getAllContacts } from 'store/Contacts/contactsSlice';
import { useDispatch, useSelector } from 'react-redux';
axios.defaults.baseURL = "https://6596d4d86bb4ec36ca036cf6.mockapi.io/api/phonebook"

const App = () => {
  const isLoading = useSelector((state) => state.contacts.isLoading)
  const error = useSelector((state) => state.contacts.error)
  const dispatch = useDispatch();
   useEffect(() => {
    dispatch(getAllContacts());
  }, [dispatch]);
  
  return (    
      <div className={css.app}>
        <h1>Phonebook</h1>
        <ContactForm/>
        <h2>Contacts</h2>
        <Filter/>
      <ContactList>
        {isLoading && !error && <b>Request in progress...</b>}
        </ContactList>
      </div>
    );
  }

export { App };
