import contacts from '../contacts.json';
import ContactForm from './ContactForm/ContactForm';
import SearchBox from './SearchBox/SearchBox';
const App = () => {
  return (
    <div>
      <h1>Phonebook</h1>
      <SearchBox />
      <ContactForm
        name={contacts.name}
        number={contacts.number}
        contacts={contacts}
      />

      {/* <ContactList /> */}
    </div>
  );
};

export default App;
