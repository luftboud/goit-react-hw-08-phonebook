import { Heading } from '@chakra-ui/react'
import { ContactForm } from 'components/ContactForm/ContactForm'
import { ContactList } from 'components/ContactList/ContactList'
import { Filter } from 'components/Filter/Filter'
import { useSelector } from 'react-redux'

export const ContactsPage = () => {
     const isLoading = useSelector((state) => state.contacts.isLoading)
  const error = useSelector((state) => state.contacts.error)
    return (
        <div >
            <Heading as="h1" size='lg'>Phonebook</Heading>
            <ContactForm />
            <Heading as="h2" size='md'>Contacts</Heading>
            <Filter/>
            <ContactList>
                {isLoading && !error && <b>Request in progress...</b>}
            </ContactList>
    </div>
    )

} 