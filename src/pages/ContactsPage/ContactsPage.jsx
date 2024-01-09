import { Heading } from '@chakra-ui/react'
import { ContactForm } from 'components/ContactForm/ContactForm'
import { ContactList } from 'components/ContactList/ContactList'
import { Filter } from 'components/Filter/Filter'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllContacts } from 'store/Contacts/contactsSlice'
import css from './ContactsPage.module.css'
export const ContactsPage = () => {
    const isLoading = useSelector((state) => state.contacts.isLoading)
    const dispatch = useDispatch();
    const token = useSelector((state) => state.auth.token)
    const isSingedIn = token !== '';
    useEffect(() => {
        if (isSingedIn) {
            dispatch(getAllContacts(token));

        }
           
  }, [dispatch, isSingedIn, token]);
  const error = useSelector((state) => state.contacts.error)
    return (
        <div className={css.Box}>
            <Heading as="h1" size='lg'>Phonebook</Heading>
            <ContactForm />
            <Heading as="h2" size='md'>Contacts</Heading>
            <Filter/>
                {isLoading && !error ? <b>Request in progress...</b> : <ContactList/>}
            
    </div>
    )

} 