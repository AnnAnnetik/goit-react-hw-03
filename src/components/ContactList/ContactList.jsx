import Contact from '../Contact/Contact';

const ContactList = ({ contacts }) => {
  return (
    <ul>
      {Array.isArray(contacts) &&
        contacts.map(contact => {
          return <Contact key={contact.id} contact={contact} />;
        })}
    </ul>
  );
};

export default ContactList;
