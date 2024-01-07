
import { useState } from 'react';
import { setContact } from 'store/Contacts/contactsSlice';
import { useDispatch, useSelector } from 'react-redux';
const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const contacts = useSelector((state) => state.contacts.items)
  const dispatch = useDispatch();
  
  const addContact = (cont) => {
    console.log(cont);
    dispatch(setContact(cont))
  }

   const handleChange = evt => {
    const { name } = evt.target;
     const value = evt.target.value;
     if (name === "name") {
      setName(value)
    }
    if (name === "number") {
      setNumber(value)
    }
   };
  
   const handleSubmit = (contName, phNumber) => {
    const isAdded = contacts?.find(el => el.name === contName);
    if (isAdded !== undefined) {
      window.alert(
        `Contact "${contName}" is already in your phonebook. Please, try something else!`
      );
      return
    } 
    if (contName === '' || phNumber === '') {
      window.alert('Please, fill all fields.');
      return
    }
     console.log(`name: ${contName}, number: ${phNumber}`);
    addContact({name: contName, number: phNumber})
  };
  return (
    <form onSubmit={(e) => { e.preventDefault(); handleSubmit(name, number);  e.target.reset()}}>
      <h3>Name</h3>
      <input
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        onChange={handleChange}
      />
      <h3>Number</h3>
      <input type="tel" name="number" onChange={handleChange}></input>
      <button type="submit">Add contact</button>
    </form>
  );
};

export { ContactForm };
