
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'store/Contacts/contactsSlice';
import css from './ContactList.module.css'
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
    <ul className={css.List} >
      {children}
      {filterContacts()?.map((el, i) => (
        <li className={css.Item} key={i}>
          <p>Name: {el.name}</p>
          <p>Number: {el.number}</p>
          <button className={css.Button} type="button" onClick={() => deleteContactFunc(el.id)} id={el.id}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export { ContactList };
