import contacts from '../contacts.json';
import ContactList from './ContactList/ContactList';
import SearchBox from './SearchBox/SearchBox';
import ContactForm from './ContactForm/ContactForm';
// import { useState } from 'react';

const App = () => {
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList
        name={contacts.name}
        number={contacts.number}
        contacts={contacts}
      />
    </div>
  );
};

export default App;
