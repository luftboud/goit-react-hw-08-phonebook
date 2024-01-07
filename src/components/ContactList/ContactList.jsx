
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'store/Contacts/contactsSlice';
const ContactList = ({children}) => {
  const contacts = useSelector((state) => state.contacts.items)
  const filter = useSelector((state) => state.filter)
    const dispatch = useDispatch();
    const filterContacts = () => { 
      return contacts?.filter(el => 
        el.name.toLowerCase().includes(filter.toLowerCase())
      
      ); 
    };
  const deleteContactFunc = (id) => {
    dispatch(deleteContact(id))
  }
  return (
    <ul>
      {children}
      {filterContacts()?.map((el, i) => (
        <li key={i}>
          {el.name}: {el.number}
          <button type="button" onClick={() => deleteContactFunc(el.id)} id={el.id}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export { ContactList };
