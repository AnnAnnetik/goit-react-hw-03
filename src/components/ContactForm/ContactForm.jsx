import Contact from '../Contact/Contact';
// import { FaUser } from 'react-icons/fa';
// import { FaPhone } from 'react-icons/fa6';
// const icon = [<FaUser />, <FaPhone />];
const ContactForm = ({ contacts }) => {
  return (
    <ul>
      {Array.isArray(contacts) &&
        contacts.map(contact => {
          return <Contact key={contact.id} contact={contact} />;
        })}
    </ul>
  );
};

export default ContactForm;
